#!/usr/bin/env node
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const rateLimit = require("express-rate-limit");
const { randomBytes } = require("crypto");
const { Pool } = require("pg");
const { insertWithId } = require("./generate-id.js");
const { normalizeUri } = require("./normalize-uri.js");
const { sanitize } = require("./sanitize.js");
const { createAdminRouter } = require("./routes/admin.js");
const { createTemplateRouter } = require("./routes/templates.js");
const { createTenantMiddleware } = require("./middleware/tenant.js");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  "/admin",
  session({
    secret: process.env.SESSION_SECRET || randomBytes(32).toString("hex"),
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, sameSite: "lax" },
  })
);

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres@localhost/postgres";
const pool = new Pool({ connectionString: DATABASE_URL });

// Express 4 does not catch rejected promises from async handlers.
// Wrap them so unhandled rejections become proper error responses.
const asyncHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);

async function initSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS documents (
      id         TEXT PRIMARY KEY,
      uri        TEXT NOT NULL UNIQUE,
      object     TEXT NOT NULL DEFAULT 'document',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS comments (
      id         TEXT PRIMARY KEY,
      object     TEXT NOT NULL DEFAULT 'comment',
      document   TEXT NOT NULL REFERENCES documents(id),
      quote      TEXT NOT NULL DEFAULT '',
      prefix     TEXT,
      suffix     TEXT,
      body       TEXT NOT NULL,
      author     TEXT NOT NULL,
      status     TEXT NOT NULL DEFAULT 'open',
      parent     TEXT REFERENCES comments(id),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  // Allow NULL status for replies (idempotent)
  await pool.query(`ALTER TABLE comments ALTER COLUMN status DROP NOT NULL`);
  await pool.query(`UPDATE comments SET status = NULL WHERE parent IS NOT NULL AND status IS NOT NULL`);

  // Track when comments are closed (for analytics)
  await pool.query(`ALTER TABLE comments ADD COLUMN IF NOT EXISTS closed_at TIMESTAMPTZ`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS moderation_log (
      id              SERIAL PRIMARY KEY,
      comment_id      TEXT NOT NULL,
      document_id     TEXT NOT NULL,
      action          TEXT NOT NULL,
      reason          TEXT,
      comment_body    TEXT,
      comment_author  TEXT,
      created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS templates (
      id         TEXT PRIMARY KEY,
      object     TEXT NOT NULL DEFAULT 'template',
      name       TEXT NOT NULL,
      body       TEXT NOT NULL,
      author     TEXT NOT NULL,
      shared     BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  // ── Multi-tenant schema additions ───────────────────────────────
  await pool.query(`
    CREATE TABLE IF NOT EXISTS api_keys (
      key        TEXT PRIMARY KEY,
      label      TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await pool.query(`ALTER TABLE documents ADD COLUMN IF NOT EXISTS api_key TEXT REFERENCES api_keys(key)`);

  // Drop the original single-column UNIQUE on uri so that different tenants
  // can annotate the same URI independently.  The two partial indexes below
  // replace it: one for self-hosted (api_key IS NULL) and one per-tenant.
  await pool.query(`ALTER TABLE documents DROP CONSTRAINT IF EXISTS documents_uri_key`);

  await pool.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_documents_uri_self_hosted
    ON documents (uri) WHERE api_key IS NULL
  `);
  await pool.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_documents_apikey_uri
    ON documents (api_key, uri) WHERE api_key IS NOT NULL
  `);
}

// ── Tenant middleware + rate limiting ────────────────────────────────

const tenantMiddleware = createTenantMiddleware(pool);
app.use("/documents", tenantMiddleware);
app.use("/comments", tenantMiddleware);

if (process.env.MULTI_TENANT === "true") {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000,
    keyGenerator: (req) => req.apiKey || req.ip,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: { message: "Rate limit exceeded" } },
  });
  app.use("/documents", limiter);
  app.use("/comments", limiter);
}

// ── Response helpers ────────────────────────────────────────────────

function formatDocument(row) {
  return {
    id: row.id, object: "document", uri: row.uri,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  };
}

function formatComment(row) {
  return {
    id: row.id, object: "comment", document: row.document,
    quote: row.quote || null, prefix: row.prefix || null, suffix: row.suffix || null,
    body: row.body, author: row.author, status: row.parent ? null : row.status,
    parent: row.parent || null,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  };
}

function listResponse(items) { return { object: "list", data: items }; }
function errorResponse(msg) { return { error: { message: msg } }; }

// ── Helper: find or create document by URI ──────────────────────────

async function findOrCreateDocument(uri, apiKey) {
  const normalized = normalizeUri(uri);

  const selectSql = apiKey
    ? "SELECT * FROM documents WHERE uri = $1 AND api_key = $2"
    : "SELECT * FROM documents WHERE uri = $1 AND api_key IS NULL";
  const selectParams = apiKey ? [normalized, apiKey] : [normalized];

  const { rows } = await pool.query(selectSql, selectParams);
  if (rows.length > 0) return { doc: rows[0], created: false };

  try {
    const doc = await insertWithId("doc", async (id) => {
      const insertSql = apiKey
        ? "INSERT INTO documents (id, uri, api_key) VALUES ($1, $2, $3) RETURNING *"
        : "INSERT INTO documents (id, uri) VALUES ($1, $2) RETURNING *";
      const insertParams = apiKey ? [id, normalized, apiKey] : [id, normalized];
      const { rows } = await pool.query(insertSql, insertParams);
      return rows[0];
    });
    return { doc, created: true };
  } catch (err) {
    // Lost the race — another request created the document concurrently
    if (err.code === '23505') {
      const { rows } = await pool.query(selectSql, selectParams);
      if (rows.length > 0) return { doc: rows[0], created: false };
    }
    throw err;
  }
}

// ── Health check ────────────────────────────────────────────────────

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ── Document endpoints ──────────────────────────────────────────────

app.get("/documents", asyncHandler(async (req, res) => {
  const sql = req.apiKey
    ? "SELECT * FROM documents WHERE api_key = $1 ORDER BY created_at ASC"
    : "SELECT * FROM documents WHERE api_key IS NULL ORDER BY created_at ASC";
  const params = req.apiKey ? [req.apiKey] : [];
  const { rows } = await pool.query(sql, params);
  res.json(listResponse(rows.map(formatDocument)));
}));

app.post("/documents", asyncHandler(async (req, res) => {
  const { uri } = req.body;
  if (!uri) return res.status(400).json(errorResponse("uri is required"));

  try {
    const { doc, created } = await findOrCreateDocument(uri, req.apiKey);
    res.status(created ? 201 : 200).json(formatDocument(doc));
  } catch (err) {
    res.status(400).json(errorResponse(err.message));
  }
}));

app.get("/documents/:id", asyncHandler(async (req, res) => {
  const sql = req.apiKey
    ? "SELECT * FROM documents WHERE id = $1 AND api_key = $2"
    : "SELECT * FROM documents WHERE id = $1 AND api_key IS NULL";
  const params = req.apiKey ? [req.params.id, req.apiKey] : [req.params.id];
  const { rows } = await pool.query(sql, params);
  if (rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
  res.json(formatDocument(rows[0]));
}));

app.delete("/documents/:id", asyncHandler(async (req, res) => {
  // Verify document belongs to the requesting tenant before deleting
  const checkSql = req.apiKey
    ? "SELECT id FROM documents WHERE id = $1 AND api_key = $2"
    : "SELECT id FROM documents WHERE id = $1 AND api_key IS NULL";
  const checkParams = req.apiKey ? [req.params.id, req.apiKey] : [req.params.id];
  const { rows: check } = await pool.query(checkSql, checkParams);
  if (check.length === 0) return res.status(404).json(errorResponse("Document not found"));

  await pool.query("DELETE FROM comments WHERE document = $1", [req.params.id]);
  const { rows } = await pool.query("DELETE FROM documents WHERE id = $1 RETURNING *", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
  res.json(formatDocument(rows[0]));
}));

// ── Comment endpoints ───────────────────────────────────────────────

app.get("/comments", asyncHandler(async (req, res) => {
  const { document: docId, uri, status, expand, search, author } = req.query;

  if (status !== undefined && status !== "open" && status !== "closed") {
    return res.status(400).json(errorResponse('status must be "open" or "closed"'));
  }

  let resolvedDocId;

  if (docId) {
    // When scoped by tenant, verify the document belongs to this tenant
    if (req.apiKey) {
      const { rows } = await pool.query(
        "SELECT id FROM documents WHERE id = $1 AND api_key = $2",
        [docId, req.apiKey]
      );
      if (rows.length === 0) return res.json(listResponse([]));
    }
    resolvedDocId = docId;
  } else if (uri) {
    let normalized;
    try { normalized = normalizeUri(uri); } catch { normalized = uri; }
    const uriSql = req.apiKey
      ? "SELECT id FROM documents WHERE uri = $1 AND api_key = $2"
      : "SELECT id FROM documents WHERE uri = $1 AND api_key IS NULL";
    const uriParams = req.apiKey ? [normalized, req.apiKey] : [normalized];
    const docResult = await pool.query(uriSql, uriParams);
    if (docResult.rows.length === 0) return res.json(listResponse([]));
    resolvedDocId = docResult.rows[0].id;
  }

  // Build WHERE conditions dynamically
  const conditions = [];
  const params = [];
  let idx = 1;

  // Tenant isolation: restrict to documents belonging to this API key
  if (req.apiKey) {
    conditions.push(`document IN (SELECT id FROM documents WHERE api_key = $${idx++})`);
    params.push(req.apiKey);
  }

  if (resolvedDocId) {
    conditions.push(`document = $${idx++}`);
    params.push(resolvedDocId);
  }

  if (status) {
    const docCond = resolvedDocId ? `document = $${req.apiKey ? 2 : 1} AND ` : '';
    conditions.push(
      `((parent IS NULL AND status = $${idx})` +
      ` OR (parent IN (SELECT id FROM comments WHERE ${docCond}parent IS NULL AND status = $${idx})))`
    );
    params.push(status);
    idx++;
  }

  if (search) {
    conditions.push(`(body ILIKE $${idx} OR quote ILIKE $${idx})`);
    params.push(`%${search}%`);
    idx++;
  }

  if (author) {
    conditions.push(`author ILIKE $${idx}`);
    params.push(author);
    idx++;
  }

  const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const { rows } = await pool.query(
    `SELECT * FROM comments ${where} ORDER BY created_at ASC`,
    params
  );

  let data = rows.map(formatComment);

  if (expand === "document") {
    const docIds = [...new Set(data.map((c) => c.document))];
    if (docIds.length > 0) {
      const { rows: docs } = await pool.query("SELECT * FROM documents WHERE id = ANY($1)", [docIds]);
      const docMap = Object.fromEntries(docs.map((d) => [d.id, formatDocument(d)]));
      data = data.map((c) => ({ ...c, document: docMap[c.document] || c.document }));
    }
  }

  res.json(listResponse(data));
}));

app.post("/comments", asyncHandler(async (req, res) => {
  const { uri, document: docId, quote, prefix, suffix, body, author, parent } = req.body;

  if (!body || !author) {
    return res.status(400).json(errorResponse("body and author are required"));
  }
  if (!parent && !quote) {
    return res.status(400).json(errorResponse("quote is required for top-level comments"));
  }
  if (!uri && !docId) {
    return res.status(400).json(errorResponse("uri or document is required"));
  }

  const cleanBody = sanitize(body);
  const cleanAuthor = sanitize(author);

  let documentId;
  try {
    if (docId) {
      // Verify document exists and belongs to this tenant
      const checkSql = req.apiKey
        ? "SELECT id FROM documents WHERE id = $1 AND api_key = $2"
        : "SELECT id FROM documents WHERE id = $1 AND api_key IS NULL";
      const checkParams = req.apiKey ? [docId, req.apiKey] : [docId];
      const result = await pool.query(checkSql, checkParams);
      if (result.rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
      documentId = result.rows[0].id;
    } else {
      const { doc } = await findOrCreateDocument(uri, req.apiKey);
      documentId = doc.id;
    }
  } catch (err) {
    return res.status(400).json(errorResponse(err.message));
  }

  const commentStatus = parent ? null : "open";
  const comment = await insertWithId("cmt", async (id) => {
    const { rows } = await pool.query(
      "INSERT INTO comments (id, document, quote, prefix, suffix, body, author, status, parent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [id, documentId, quote || "", prefix || null, suffix || null, cleanBody, cleanAuthor, commentStatus, parent || null]
    );
    return rows[0];
  });

  res.status(201).json(formatComment(comment));
}));

app.get("/comments/:id", asyncHandler(async (req, res) => {
  // Join on documents to enforce tenant isolation
  const sql = req.apiKey
    ? "SELECT c.* FROM comments c JOIN documents d ON c.document = d.id WHERE c.id = $1 AND d.api_key = $2"
    : "SELECT c.* FROM comments c JOIN documents d ON c.document = d.id WHERE c.id = $1 AND d.api_key IS NULL";
  const params = req.apiKey ? [req.params.id, req.apiKey] : [req.params.id];
  const { rows } = await pool.query(sql, params);
  if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));
  let comment = formatComment(rows[0]);
  if (req.query.expand === "document") {
    const { rows: docs } = await pool.query("SELECT * FROM documents WHERE id = $1", [comment.document]);
    if (docs.length > 0) comment = { ...comment, document: formatDocument(docs[0]) };
  }
  res.json(comment);
}));

app.patch("/comments/:id", asyncHandler(async (req, res) => {
  // Join on documents to enforce tenant isolation
  const selectSql = req.apiKey
    ? "SELECT c.* FROM comments c JOIN documents d ON c.document = d.id WHERE c.id = $1 AND d.api_key = $2"
    : "SELECT c.* FROM comments c JOIN documents d ON c.document = d.id WHERE c.id = $1 AND d.api_key IS NULL";
  const selectParams = req.apiKey ? [req.params.id, req.apiKey] : [req.params.id];
  const { rows } = await pool.query(selectSql, selectParams);
  if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));

  const { body, status } = req.body;

  if (status !== undefined && rows[0].parent) {
    return res.status(400).json(errorResponse("status cannot be set on replies"));
  }

  if (status !== undefined && status !== "open" && status !== "closed") {
    return res.status(400).json(errorResponse('status must be "open" or "closed"'));
  }

  if (body !== undefined) {
    await pool.query("UPDATE comments SET body = $1 WHERE id = $2", [sanitize(body), req.params.id]);
  }
  if (status !== undefined) {
    const closedAt = status === "closed" ? new Date().toISOString() : null;
    await pool.query("UPDATE comments SET status = $1, closed_at = $2 WHERE id = $3", [status, closedAt, req.params.id]);
  }

  const updated = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
  res.json(formatComment(updated.rows[0]));
}));

app.delete("/comments/:id", asyncHandler(async (req, res) => {
  // Join on documents to enforce tenant isolation
  const checkSql = req.apiKey
    ? "SELECT c.id FROM comments c JOIN documents d ON c.document = d.id WHERE c.id = $1 AND d.api_key = $2"
    : "SELECT c.id FROM comments c JOIN documents d ON c.document = d.id WHERE c.id = $1 AND d.api_key IS NULL";
  const checkParams = req.apiKey ? [req.params.id, req.apiKey] : [req.params.id];
  const { rows: check } = await pool.query(checkSql, checkParams);
  if (check.length === 0) return res.status(404).json(errorResponse("Comment not found"));

  await pool.query("DELETE FROM comments WHERE parent = $1", [req.params.id]);
  const { rows } = await pool.query("DELETE FROM comments WHERE id = $1 RETURNING *", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));
  res.json(formatComment(rows[0]));
}));

// ── Analytics endpoint ───────────────────────────────────────────────

app.get("/documents/:id/analytics", asyncHandler(async (req, res) => {
  // Verify document exists and belongs to this tenant
  const checkSql = req.apiKey
    ? "SELECT id FROM documents WHERE id = $1 AND api_key = $2"
    : "SELECT id FROM documents WHERE id = $1 AND api_key IS NULL";
  const checkParams = req.apiKey ? [req.params.id, req.apiKey] : [req.params.id];
  const { rows: check } = await pool.query(checkSql, checkParams);
  if (check.length === 0) return res.status(404).json(errorResponse("Document not found"));

  const docId = req.params.id;

  // Activity over time: comments per day (top-level only)
  const { rows: activity } = await pool.query(
    `SELECT DATE(created_at) as date, COUNT(*)::int as count
     FROM comments WHERE document = $1 AND parent IS NULL
     GROUP BY DATE(created_at) ORDER BY date`,
    [docId]
  );

  // Resolution rate
  const { rows: [resolution] } = await pool.query(
    `SELECT COUNT(*)::int as total,
            COUNT(CASE WHEN status = 'closed' THEN 1 END)::int as resolved
     FROM comments WHERE document = $1 AND parent IS NULL`,
    [docId]
  );
  const resolutionRate = {
    total: resolution.total,
    resolved: resolution.resolved,
    percentage: resolution.total > 0
      ? Math.round((resolution.resolved / resolution.total) * 100)
      : 0,
  };

  // Average time to resolve (seconds)
  const { rows: [avgRow] } = await pool.query(
    `SELECT AVG(EXTRACT(EPOCH FROM (closed_at - created_at)))::float as avg_seconds
     FROM comments WHERE document = $1 AND parent IS NULL AND status = 'closed' AND closed_at IS NOT NULL`,
    [docId]
  );
  const avgTimeToResolve = avgRow.avg_seconds !== null
    ? Math.round(avgRow.avg_seconds)
    : null;

  res.json({
    activityOverTime: activity.map(r => ({
      date: r.date instanceof Date ? r.date.toISOString().split("T")[0] : r.date,
      count: r.count,
    })),
    resolutionRate,
    avgTimeToResolve,
  });
}));

// ── Template endpoints ───────────────────────────────────────────────

app.use("/templates", createTemplateRouter(pool));

// ── Admin dashboard (not tenant-scoped — server operator sees all) ──

app.use("/admin", express.static(path.join(__dirname, "public")));
app.use("/admin", createAdminRouter(pool));

// ── Static files ────────────────────────────────────────────────────

app.use(express.static(path.join(__dirname, "..", "serve")));

// ── Error handling ──────────────────────────────────────────────────

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: { message: "Internal server error" } });
});

// ── Start server ────────────────────────────────────────────────────

async function start(options = {}) {
  const port = options.port !== undefined ? options.port : (process.env.PORT || 3333);
  const host = options.host || "0.0.0.0";
  await initSchema();
  return new Promise((resolve) => {
    const server = app.listen(port, host, () => {
      console.log(`Remarq server listening on http://localhost:${port}`);
      resolve(server);
    });
  });
}

if (require.main === module) {
  start().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { start, app, pool, initSchema };
