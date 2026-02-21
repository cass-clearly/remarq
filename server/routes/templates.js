/**
 * Express router for template CRUD endpoints.
 * - GET    /templates       — list templates visible to author
 * - POST   /templates       — create a new template
 * - PATCH  /templates/:id   — update an existing template
 * - DELETE /templates/:id   — delete a template
 */

const express = require("express");
const { insertWithId } = require("../generate-id.js");
const { sanitize } = require("../sanitize.js");

const asyncHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);

function errorResponse(msg) { return { error: { message: msg } }; }

function formatTemplate(row) {
  return {
    id: row.id,
    object: "template",
    name: row.name,
    body: row.body,
    author: row.author,
    shared: row.shared,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  };
}

function validateFields({ name, body, author }) {
  const errors = [];
  if (name !== undefined) {
    if (typeof name !== "string" || name.trim().length === 0) {
      errors.push("name is required");
    } else if (name.length > 100) {
      errors.push("name must be 100 characters or fewer");
    }
  }
  if (body !== undefined) {
    if (typeof body !== "string" || body.trim().length === 0) {
      errors.push("body is required");
    } else if (body.length > 2000) {
      errors.push("body must be 2000 characters or fewer");
    }
  }
  if (author !== undefined) {
    if (typeof author !== "string" || author.trim().length === 0) {
      errors.push("author is required");
    }
  }
  return errors;
}

function createTemplateRouter(pool) {
  const router = express.Router();

  // ── List templates ──────────────────────────────────────────────
  router.get("/", asyncHandler(async (req, res) => {
    const { author } = req.query;
    if (!author) {
      return res.status(400).json(errorResponse("author query parameter is required"));
    }

    const { rows } = await pool.query(
      "SELECT * FROM templates WHERE author = $1 OR shared = TRUE ORDER BY name ASC",
      [author]
    );
    res.json({ object: "list", data: rows.map(formatTemplate) });
  }));

  // ── Create template ─────────────────────────────────────────────
  router.post("/", asyncHandler(async (req, res) => {
    const { name, body, author, shared } = req.body;

    const errors = validateFields({ name, body, author });
    if (!name) errors.includes("name is required") || errors.push("name is required");
    if (!body) errors.includes("body is required") || errors.push("body is required");
    if (!author) errors.includes("author is required") || errors.push("author is required");
    if (errors.length > 0) {
      return res.status(400).json(errorResponse(errors.join("; ")));
    }

    const cleanName = sanitize(name);
    const cleanBody = sanitize(body);
    const cleanAuthor = sanitize(author);
    const isShared = shared === true;

    const template = await insertWithId("tpl", async (id) => {
      const { rows } = await pool.query(
        "INSERT INTO templates (id, name, body, author, shared) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [id, cleanName, cleanBody, cleanAuthor, isShared]
      );
      return rows[0];
    });

    res.status(201).json(formatTemplate(template));
  }));

  // ── Update template ─────────────────────────────────────────────
  router.patch("/:id", asyncHandler(async (req, res) => {
    const { author } = req.query;
    if (!author) {
      return res.status(400).json(errorResponse("author query parameter is required"));
    }

    const { rows } = await pool.query("SELECT * FROM templates WHERE id = $1", [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json(errorResponse("Template not found"));
    }

    if (rows[0].author !== author) {
      return res.status(403).json(errorResponse("You can only modify your own templates"));
    }

    const { name, body, shared } = req.body;
    const errors = validateFields({ name, body });
    if (errors.length > 0) {
      return res.status(400).json(errorResponse(errors.join("; ")));
    }

    const updates = [];
    const params = [];
    let idx = 1;

    if (name !== undefined) {
      updates.push(`name = $${idx++}`);
      params.push(sanitize(name));
    }
    if (body !== undefined) {
      updates.push(`body = $${idx++}`);
      params.push(sanitize(body));
    }
    if (shared !== undefined) {
      updates.push(`shared = $${idx++}`);
      params.push(shared === true);
    }

    if (updates.length === 0) {
      return res.json(formatTemplate(rows[0]));
    }

    params.push(req.params.id);
    const updated = await pool.query(
      `UPDATE templates SET ${updates.join(", ")} WHERE id = $${idx} RETURNING *`,
      params
    );
    res.json(formatTemplate(updated.rows[0]));
  }));

  // ── Delete template ─────────────────────────────────────────────
  router.delete("/:id", asyncHandler(async (req, res) => {
    const { author } = req.query;
    if (!author) {
      return res.status(400).json(errorResponse("author query parameter is required"));
    }

    const { rows } = await pool.query("SELECT * FROM templates WHERE id = $1", [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json(errorResponse("Template not found"));
    }

    if (rows[0].author !== author) {
      return res.status(403).json(errorResponse("You can only modify your own templates"));
    }

    await pool.query("DELETE FROM templates WHERE id = $1", [req.params.id]);
    res.json(formatTemplate(rows[0]));
  }));

  return router;
}

module.exports = { createTemplateRouter };
