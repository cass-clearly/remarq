#!/usr/bin/env node
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const { insertWithId } = require("./generate-id.js");
const { normalizeUri } = require("./normalize-uri.js");
const { sanitize } = require("./sanitize.js");
const { validateColor } = require("./validate-color.js");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

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
  // Add color column (idempotent)
  await pool.query(`ALTER TABLE comments ADD COLUMN IF NOT EXISTS color TEXT`);
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
    parent: row.parent || null, color: row.color || null,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  };
}

function listResponse(items) { return { object: "list", data: items }; }
function errorResponse(msg) { return { error: { message: msg } }; }

// ── Helper: find or create document by URI ──────────────────────────

async function findOrCreateDocument(uri) {
  const normalized = normalizeUri(uri);
  const { rows } = await pool.query("SELECT * FROM documents WHERE uri = $1", [normalized]);
  if (rows.length > 0) return { doc: rows[0], created: false };

  try {
    const doc = await insertWithId("doc", async (id) => {
      const { rows } = await pool.query(
        "INSERT INTO documents (id, uri) VALUES ($1, $2) RETURNING *",
        [id, normalized]
      );
      return rows[0];
    });
    return { doc, created: true };
  } catch (err) {
    // Lost the race — another request created the document concurrently
    if (err.code === '23505') {
      const { rows } = await pool.query("SELECT * FROM documents WHERE uri = $1", [normalized]);
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

app.get("/documents", asyncHandler(async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM documents ORDER BY created_at ASC");
  res.json(listResponse(rows.map(formatDocument)));
}));

app.post("/documents", asyncHandler(async (req, res) => {
  const { uri } = req.body;
  if (!uri) return res.status(400).json(errorResponse("uri is required"));

  try {
    const { doc, created } = await findOrCreateDocument(uri);
    res.status(created ? 201 : 200).json(formatDocument(doc));
  } catch (err) {
    res.status(400).json(errorResponse(err.message));
  }
}));

app.get("/documents/:id", asyncHandler(async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM documents WHERE id = $1", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
  res.json(formatDocument(rows[0]));
}));

app.delete("/documents/:id", asyncHandler(async (req, res) => {
  await pool.query("DELETE FROM comments WHERE document = $1", [req.params.id]);
  const { rows } = await pool.query("DELETE FROM documents WHERE id = $1 RETURNING *", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
  res.json(formatDocument(rows[0]));
}));

// ── Comment endpoints ───────────────────────────────────────────────

app.get("/comments", asyncHandler(async (req, res) => {
  const { document: docId, uri, status, expand } = req.query;

  if (status !== undefined && status !== "open" && status !== "closed") {
    return res.status(400).json(errorResponse('status must be "open" or "closed"'));
  }

  let resolvedDocId;

  if (docId) {
    resolvedDocId = docId;
  } else if (uri) {
    let normalized;
    try { normalized = normalizeUri(uri); } catch { normalized = uri; }
    const docResult = await pool.query("SELECT id FROM documents WHERE uri = $1", [normalized]);
    if (docResult.rows.length === 0) return res.json(listResponse([]));
    resolvedDocId = docResult.rows[0].id;
  }

  let rows;
  if (resolvedDocId) {
    if (status) {
      ({ rows } = await pool.query(
        `SELECT * FROM comments WHERE document = $1
          AND ((parent IS NULL AND status = $2)
            OR (parent IN (SELECT id FROM comments WHERE document = $1 AND parent IS NULL AND status = $2)))
          ORDER BY created_at ASC`,
        [resolvedDocId, status]
      ));
    } else {
      ({ rows } = await pool.query(
        "SELECT * FROM comments WHERE document = $1 ORDER BY created_at ASC",
        [resolvedDocId]
      ));
    }
  } else {
    if (status) {
      ({ rows } = await pool.query(
        `SELECT * FROM comments
          WHERE (parent IS NULL AND status = $1)
            OR (parent IN (SELECT id FROM comments WHERE parent IS NULL AND status = $1))
          ORDER BY created_at ASC`,
        [status]
      ));
    } else {
      ({ rows } = await pool.query("SELECT * FROM comments ORDER BY created_at ASC"));
    }
  }

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
  const { uri, document: docId, quote, prefix, suffix, body, author, parent, color } = req.body;

  if (!body || !author) {
    return res.status(400).json(errorResponse("body and author are required"));
  }
  if (!parent && !quote) {
    return res.status(400).json(errorResponse("quote is required for top-level comments"));
  }
  if (!uri && !docId) {
    return res.status(400).json(errorResponse("uri or document is required"));
  }

  let validatedColor = null;
  if (color !== undefined && color !== null) {
    validatedColor = validateColor(color);
    if (!validatedColor) {
      return res.status(400).json(errorResponse("color must be a valid hex code (e.g. #ff6b6b) or preset name (yellow, red, green, blue, purple, pink, orange, teal)"));
    }
  }

  const cleanBody = sanitize(body);
  const cleanAuthor = sanitize(author);

  let documentId;
  try {
    if (docId) {
      const result = await pool.query("SELECT id FROM documents WHERE id = $1", [docId]);
      if (result.rows.length === 0) return res.status(404).json(errorResponse("Document not found"));
      documentId = result.rows[0].id;
    } else {
      const { doc } = await findOrCreateDocument(uri);
      documentId = doc.id;
    }
  } catch (err) {
    return res.status(400).json(errorResponse(err.message));
  }

  const commentStatus = parent ? null : "open";
  const comment = await insertWithId("cmt", async (id) => {
    const { rows } = await pool.query(
      "INSERT INTO comments (id, document, quote, prefix, suffix, body, author, status, parent, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [id, documentId, quote || "", prefix || null, suffix || null, cleanBody, cleanAuthor, commentStatus, parent || null, validatedColor]
    );
    return rows[0];
  });

  res.status(201).json(formatComment(comment));
}));

app.get("/comments/:id", asyncHandler(async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));
  let comment = formatComment(rows[0]);
  if (req.query.expand === "document") {
    const { rows: docs } = await pool.query("SELECT * FROM documents WHERE id = $1", [comment.document]);
    if (docs.length > 0) comment = { ...comment, document: formatDocument(docs[0]) };
  }
  res.json(comment);
}));

app.patch("/comments/:id", asyncHandler(async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));

  const { body, status, color } = req.body;

  if (status !== undefined && rows[0].parent) {
    return res.status(400).json(errorResponse("status cannot be set on replies"));
  }

  if (status !== undefined && status !== "open" && status !== "closed") {
    return res.status(400).json(errorResponse('status must be "open" or "closed"'));
  }

  if (color !== undefined) {
    if (color === null) {
      await pool.query("UPDATE comments SET color = NULL WHERE id = $1", [req.params.id]);
    } else {
      const validatedColor = validateColor(color);
      if (!validatedColor) {
        return res.status(400).json(errorResponse("color must be a valid hex code (e.g. #ff6b6b) or preset name (yellow, red, green, blue, purple, pink, orange, teal)"));
      }
      await pool.query("UPDATE comments SET color = $1 WHERE id = $2", [validatedColor, req.params.id]);
    }
  }

  if (body !== undefined) {
    await pool.query("UPDATE comments SET body = $1 WHERE id = $2", [sanitize(body), req.params.id]);
  }
  if (status !== undefined) {
    await pool.query("UPDATE comments SET status = $1 WHERE id = $2", [status, req.params.id]);
  }

  const updated = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
  res.json(formatComment(updated.rows[0]));
}));

app.delete("/comments/:id", asyncHandler(async (req, res) => {
  await pool.query("DELETE FROM comments WHERE parent = $1", [req.params.id]);
  const { rows } = await pool.query("DELETE FROM comments WHERE id = $1 RETURNING *", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));
  res.json(formatComment(rows[0]));
}));

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
