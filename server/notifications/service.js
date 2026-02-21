/**
 * Core notification service.
 * Determines recipients, sends instant emails or enqueues for digest.
 */

const { sendEmail } = require("./email.js");
const { instantNotification, digestNotification } = require("./templates.js");
const { createUnsubscribeToken } = require("./unsubscribe.js");

/**
 * Build an unsubscribe URL for a given email and document.
 */
function buildUnsubscribeUrl(email, documentId) {
  const baseUrl = process.env.BASE_URL || "http://localhost:3333";
  const token = createUnsubscribeToken(email, documentId);
  return `${baseUrl}/notifications/unsubscribe?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}&document=${encodeURIComponent(documentId)}`;
}

/**
 * Send or enqueue a notification for a single recipient.
 */
async function notifyRecipient(pool, email, documentUri, comment, documentId) {
  // Look up preference
  const { rows } = await pool.query(
    "SELECT mode FROM notification_preferences WHERE document = $1 AND email = $2",
    [documentId, email]
  );
  const mode = rows.length > 0 ? rows[0].mode : "instant";

  if (mode === "none") return;

  if (mode === "digest") {
    await pool.query(
      "INSERT INTO pending_notifications (email, document, comment) VALUES ($1, $2, $3)",
      [email, documentId, comment.id]
    );
    return;
  }

  // instant mode (default)
  const unsubscribeUrl = buildUnsubscribeUrl(email, documentId);
  const { subject, html } = instantNotification({
    documentUri,
    quote: comment.quote || "",
    commentBody: comment.body,
    commentAuthor: comment.author,
    unsubscribeUrl,
  });
  await sendEmail(email, subject, html);
}

/**
 * Notify relevant recipients when a comment is created.
 * @param {import('pg').Pool} pool
 * @param {object} comment - The created comment row
 * @param {string} documentId - The document ID
 */
async function notifyOnComment(pool, comment, documentId) {
  // Look up the document to get URI and owner_email
  const { rows: docs } = await pool.query(
    "SELECT uri, owner_email FROM documents WHERE id = $1",
    [documentId]
  );
  if (docs.length === 0) return;

  const doc = docs[0];
  const notified = new Set(); // track notified emails to avoid duplicates

  // 1. Notify document owner for top-level comments
  if (!comment.parent && doc.owner_email && doc.owner_email !== comment.author) {
    notified.add(doc.owner_email);
    await notifyRecipient(pool, doc.owner_email, doc.uri, comment, documentId);
  }

  // 2. Notify parent comment author for replies (only if they're subscribed)
  if (comment.parent) {
    const { rows: parentRows } = await pool.query(
      "SELECT author FROM comments WHERE id = $1",
      [comment.parent]
    );
    if (parentRows.length > 0) {
      const parentAuthor = parentRows[0].author;
      // Only notify the parent comment's author, not all subscribers
      if (parentAuthor !== comment.author) {
        const { rows: prefs } = await pool.query(
          "SELECT email FROM notification_preferences WHERE document = $1 AND email = $2 AND mode != 'none'",
          [documentId, parentAuthor]
        );
        if (prefs.length > 0 && !notified.has(prefs[0].email)) {
          notified.add(prefs[0].email);
          await notifyRecipient(pool, prefs[0].email, doc.uri, comment, documentId);
        }
      }
    }
  }

  // 3. Also notify document owner for replies (if not already notified)
  if (comment.parent && doc.owner_email && !notified.has(doc.owner_email) && doc.owner_email !== comment.author) {
    await notifyRecipient(pool, doc.owner_email, doc.uri, comment, documentId);
  }
}

/**
 * Run the digest job — batch and send pending notifications.
 * @param {import('pg').Pool} pool
 */
async function runDigest(pool) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Select all pending notifications grouped by email + document
    const { rows } = await client.query(`
      SELECT pn.email, pn.document, d.uri AS document_uri,
             c.quote, c.body AS comment_body, c.author AS comment_author, pn.id AS pn_id
      FROM pending_notifications pn
      JOIN documents d ON pn.document = d.id
      JOIN comments c ON pn.comment = c.id
      ORDER BY pn.email, pn.document, pn.created_at ASC
      FOR UPDATE OF pn SKIP LOCKED
    `);

    if (rows.length === 0) {
      await client.query("COMMIT");
      return;
    }

    // Group by email + document
    const groups = new Map();
    const pnIds = [];
    for (const row of rows) {
      const key = `${row.email}|${row.document}`;
      if (!groups.has(key)) {
        groups.set(key, {
          email: row.email,
          documentId: row.document,
          documentUri: row.document_uri,
          items: [],
        });
      }
      groups.get(key).items.push({
        quote: row.quote,
        commentBody: row.comment_body,
        commentAuthor: row.comment_author,
      });
      pnIds.push(row.pn_id);
    }

    // Send digest emails
    for (const [, group] of groups) {
      const unsubscribeUrl = buildUnsubscribeUrl(group.email, group.documentId);
      const { subject, html } = digestNotification({
        documentUri: group.documentUri,
        items: group.items,
        unsubscribeUrl,
      });
      await sendEmail(group.email, subject, html);
    }

    // Delete sent notifications
    await client.query(
      "DELETE FROM pending_notifications WHERE id = ANY($1)",
      [pnIds]
    );

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Digest job error:", err);
  } finally {
    client.release();
  }
}

/**
 * Start the digest scheduler.
 * @param {import('pg').Pool} pool
 * @returns {NodeJS.Timeout} interval ID
 */
function startDigestScheduler(pool) {
  const intervalMs = parseInt(process.env.DIGEST_INTERVAL_MS || "86400000", 10);
  return setInterval(() => {
    runDigest(pool).catch((err) => console.error("Digest scheduler error:", err));
  }, intervalMs);
}

module.exports = { notifyOnComment, runDigest, startDigestScheduler, buildUnsubscribeUrl, notifyRecipient };
