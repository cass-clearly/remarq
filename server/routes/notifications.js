/**
 * Express router for notification endpoints.
 * - GET  /notifications/unsubscribe  — one-click unsubscribe via signed token
 * - PATCH /notifications/preferences — update notification mode
 * - POST  /notifications/subscribe   — opt in to notifications
 */

const express = require("express");
const { verifyUnsubscribeToken } = require("../notifications/unsubscribe.js");

// Basic email format check — not exhaustive, but catches garbage input.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function createNotificationRouter(pool) {
  const router = express.Router();

  // ── One-click unsubscribe ─────────────────────────────────────────
  router.get("/unsubscribe", async (req, res) => {
    const { token, email, document } = req.query;

    if (!token || !email || !document) {
      return res.status(400).send("Missing required parameters");
    }

    if (!verifyUnsubscribeToken(token, email, document)) {
      return res.status(403).send("Invalid or expired unsubscribe link");
    }

    // Upsert preference to 'none'
    await pool.query(`
      INSERT INTO notification_preferences (document, email, mode)
      VALUES ($1, $2, 'none')
      ON CONFLICT (document, email) DO UPDATE SET mode = 'none'
    `, [document, email]);

    res.status(200).send(`<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Unsubscribed</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 60px auto; text-align: center; color: #333;">
  <h2>Unsubscribed</h2>
  <p>You will no longer receive email notifications for this document.</p>
</body>
</html>`);
  });

  // ── Update preferences ────────────────────────────────────────────
  router.patch("/preferences", express.json(), async (req, res) => {
    const { email, document, mode } = req.body;

    if (!email || !document || !mode) {
      return res.status(400).json({ error: { message: "email, document, and mode are required" } });
    }

    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: { message: "invalid email format" } });
    }

    if (!["instant", "digest", "none"].includes(mode)) {
      return res.status(400).json({ error: { message: 'mode must be "instant", "digest", or "none"' } });
    }

    // Verify document exists
    const { rows: docs } = await pool.query("SELECT id FROM documents WHERE id = $1", [document]);
    if (docs.length === 0) {
      return res.status(404).json({ error: { message: "Document not found" } });
    }

    await pool.query(`
      INSERT INTO notification_preferences (document, email, mode)
      VALUES ($1, $2, $3)
      ON CONFLICT (document, email) DO UPDATE SET mode = $3
    `, [document, email, mode]);

    res.json({ object: "notification_preference", document, email, mode });
  });

  // ── Subscribe ─────────────────────────────────────────────────────
  router.post("/subscribe", express.json(), async (req, res) => {
    const { email, document, mode } = req.body;

    if (!email || !document) {
      return res.status(400).json({ error: { message: "email and document are required" } });
    }

    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: { message: "invalid email format" } });
    }

    const subscribeMode = mode || "instant";
    if (!["instant", "digest"].includes(subscribeMode)) {
      return res.status(400).json({ error: { message: 'mode must be "instant" or "digest"' } });
    }

    // Verify document exists
    const { rows: docs } = await pool.query("SELECT id FROM documents WHERE id = $1", [document]);
    if (docs.length === 0) {
      return res.status(404).json({ error: { message: "Document not found" } });
    }

    await pool.query(`
      INSERT INTO notification_preferences (document, email, mode)
      VALUES ($1, $2, $3)
      ON CONFLICT (document, email) DO UPDATE SET mode = $3
    `, [document, email, subscribeMode]);

    res.status(201).json({ object: "notification_preference", document, email, mode: subscribeMode });
  });

  return router;
}

module.exports = { createNotificationRouter };
