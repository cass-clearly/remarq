const express = require("express");
const { requireAuth, verifyCsrf, ensureCsrfToken, checkPassword } = require("../middleware/auth.js");
const { loginPage, documentsPage, documentDetailPage } = require("../views/admin.js");

const asyncHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);

function createAdminRouter(pool) {
  const router = express.Router();

  router.use(express.urlencoded({ extended: false }));

  // ── Login ──────────────────────────────────────────────────────────

  router.get("/login", (_req, res) => {
    if (!process.env.ADMIN_PASSWORD) {
      return res.status(503).send("ADMIN_PASSWORD not configured");
    }
    res.send(loginPage());
  });

  router.post("/login", (req, res) => {
    if (checkPassword(req.body.password)) {
      req.session.authenticated = true;
      return res.redirect("/admin/documents");
    }
    res.status(401).send(loginPage("Invalid password"));
  });

  router.post("/logout", (req, res) => {
    req.session.destroy(() => res.redirect("/admin/login"));
  });

  // ── Authenticated routes ───────────────────────────────────────────

  router.use(requireAuth);

  router.get("/", (_req, res) => res.redirect("/admin/documents"));

  // ── Document list ──────────────────────────────────────────────────

  router.get("/documents", asyncHandler(async (_req, res) => {
    const { rows } = await pool.query(`
      SELECT d.id, d.uri, d.created_at,
             COUNT(c.id)::int AS comment_count,
             MAX(c.created_at) AS last_activity
      FROM documents d
      LEFT JOIN comments c ON c.document = d.id
      GROUP BY d.id
      ORDER BY COALESCE(MAX(c.created_at), d.created_at) DESC
    `);
    res.send(documentsPage(rows));
  }));

  // ── Document detail ────────────────────────────────────────────────

  router.get("/documents/:id", asyncHandler(async (req, res) => {
    const { rows: docs } = await pool.query(
      "SELECT * FROM documents WHERE id = $1", [req.params.id]
    );
    if (docs.length === 0) return res.status(404).send("Document not found");

    const { rows: comments } = await pool.query(
      "SELECT * FROM comments WHERE document = $1 ORDER BY created_at ASC",
      [req.params.id]
    );
    const csrf = ensureCsrfToken(req);
    res.send(documentDetailPage(docs[0], comments, csrf));
  }));

  // ── Delete comment (moderation) ────────────────────────────────────

  router.post("/comments/:id/delete", verifyCsrf, asyncHandler(async (req, res) => {
    const { rows } = await pool.query(
      "SELECT * FROM comments WHERE id = $1", [req.params.id]
    );
    if (rows.length === 0) return res.status(404).send("Comment not found");

    const comment = rows[0];
    const reason = req.body.reason || null;

    // Log moderation action before deleting
    await pool.query(
      `INSERT INTO moderation_log (comment_id, document_id, action, reason, comment_body, comment_author)
       VALUES ($1, $2, 'delete', $3, $4, $5)`,
      [comment.id, comment.document, reason, comment.body, comment.author]
    );

    // Delete replies first, then the comment
    await pool.query("DELETE FROM comments WHERE parent = $1", [comment.id]);
    await pool.query("DELETE FROM comments WHERE id = $1", [comment.id]);

    res.redirect(`/admin/documents/${comment.document}`);
  }));

  return router;
}

module.exports = { createAdminRouter };
