const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const { insertWithId } = require("./generate-id.js");
const { normalizeUri } = require("./normalize-uri.js");
const { sanitize } = require("./sanitize.js");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

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
    body: row.body, author: row.author, status: row.status,
    parent: row.parent || null,
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
  const { document: docId, uri } = req.query;

  if (docId) {
    const { rows } = await pool.query("SELECT * FROM comments WHERE document = $1 ORDER BY created_at ASC", [docId]);
    return res.json(listResponse(rows.map(formatComment)));
  }

  if (uri) {
    let normalized;
    try { normalized = normalizeUri(uri); } catch { normalized = uri; }
    const docResult = await pool.query("SELECT id FROM documents WHERE uri = $1", [normalized]);
    if (docResult.rows.length === 0) return res.json(listResponse([]));
    const { rows } = await pool.query("SELECT * FROM comments WHERE document = $1 ORDER BY created_at ASC", [docResult.rows[0].id]);
    return res.json(listResponse(rows.map(formatComment)));
  }

  res.status(400).json(errorResponse("document or uri query param required"));
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

  const comment = await insertWithId("cmt", async (id) => {
    const { rows } = await pool.query(
      "INSERT INTO comments (id, document, quote, prefix, suffix, body, author, parent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [id, documentId, quote || "", prefix || null, suffix || null, cleanBody, cleanAuthor, parent || null]
    );
    return rows[0];
  });

  res.status(201).json(formatComment(comment));
}));

app.get("/comments/:id", asyncHandler(async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));
  res.json(formatComment(rows[0]));
}));

app.patch("/comments/:id", asyncHandler(async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM comments WHERE id = $1", [req.params.id]);
  if (rows.length === 0) return res.status(404).json(errorResponse("Comment not found"));

  const { body, status } = req.body;

  if (status !== undefined && status !== "open" && status !== "closed") {
    return res.status(400).json(errorResponse('status must be "open" or "closed"'));
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

if (require.main === module) {
  const PORT = process.env.PORT || 3333;
  initSchema().then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Remarq server listening on http://localhost:${PORT}`);
    });
  });
}

module.exports = { app, pool, initSchema };
