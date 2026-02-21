/**
 * HTML email templates for notification emails.
 * Minimal inline-CSS — no external template engine.
 */

/**
 * HTML-escape user content to prevent XSS in emails.
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Truncate a string with ellipsis.
 */
function truncate(str, max = 60) {
  if (!str || str.length <= max) return str || "";
  return str.slice(0, max) + "...";
}

/**
 * Build an instant notification email.
 * @param {object} data
 * @param {string} data.documentUri
 * @param {string} data.quote
 * @param {string} data.commentBody
 * @param {string} data.commentAuthor
 * @param {string} data.unsubscribeUrl
 * @returns {{ subject: string, html: string }}
 */
function instantNotification({ documentUri, quote, commentBody, commentAuthor, unsubscribeUrl }) {
  const subject = `New comment on "${truncate(documentUri, 50)}"`;
  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  <h2 style="color: #1a1a1a; font-size: 18px;">New comment on your document</h2>
  <p style="color: #666; font-size: 14px;">
    <strong>${escapeHtml(commentAuthor)}</strong> commented on
    <a href="${escapeHtml(documentUri)}" style="color: #2563eb;">${escapeHtml(truncate(documentUri, 60))}</a>
  </p>
  ${quote ? `<blockquote style="border-left: 3px solid #d1d5db; padding: 8px 12px; margin: 16px 0; color: #555; background: #f9fafb;">${escapeHtml(quote)}</blockquote>` : ""}
  <div style="background: #f3f4f6; border-radius: 6px; padding: 12px 16px; margin: 16px 0;">
    <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(commentBody)}</p>
  </div>
  <p style="margin-top: 24px;">
    <a href="${escapeHtml(documentUri)}" style="display: inline-block; background: #2563eb; color: #fff; padding: 8px 16px; border-radius: 4px; text-decoration: none;">View Document</a>
  </p>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
  <p style="font-size: 12px; color: #9ca3af;">
    You received this because you're subscribed to notifications for this document.
    <a href="${escapeHtml(unsubscribeUrl)}" style="color: #9ca3af;">Unsubscribe</a>
  </p>
</body>
</html>`;
  return { subject, html };
}

/**
 * Build a digest notification email.
 * @param {object} data
 * @param {string} data.documentUri
 * @param {Array<{quote: string, commentBody: string, commentAuthor: string}>} data.items
 * @param {string} data.unsubscribeUrl
 * @returns {{ subject: string, html: string }}
 */
function digestNotification({ documentUri, items, unsubscribeUrl }) {
  const count = items.length;
  const subject = `Remarq digest: ${count} new comment${count === 1 ? "" : "s"}`;

  const itemsHtml = items.map((item) => `
  <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e5e7eb;">
    <p style="margin: 0 0 4px; font-size: 14px;"><strong>${escapeHtml(item.commentAuthor)}</strong></p>
    ${item.quote ? `<blockquote style="border-left: 3px solid #d1d5db; padding: 4px 8px; margin: 8px 0; color: #555; font-size: 13px; background: #f9fafb;">${escapeHtml(item.quote)}</blockquote>` : ""}
    <p style="margin: 4px 0 0; white-space: pre-wrap;">${escapeHtml(item.commentBody)}</p>
  </div>`).join("\n");

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  <h2 style="color: #1a1a1a; font-size: 18px;">Remarq Digest: ${count} new comment${count === 1 ? "" : "s"}</h2>
  <p style="color: #666; font-size: 14px;">
    New activity on <a href="${escapeHtml(documentUri)}" style="color: #2563eb;">${escapeHtml(truncate(documentUri, 60))}</a>
  </p>
  ${itemsHtml}
  <p style="margin-top: 24px;">
    <a href="${escapeHtml(documentUri)}" style="display: inline-block; background: #2563eb; color: #fff; padding: 8px 16px; border-radius: 4px; text-decoration: none;">View Document</a>
  </p>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
  <p style="font-size: 12px; color: #9ca3af;">
    You received this because you're subscribed to digest notifications for this document.
    <a href="${escapeHtml(unsubscribeUrl)}" style="color: #9ca3af;">Unsubscribe</a>
  </p>
</body>
</html>`;
  return { subject, html };
}

module.exports = { instantNotification, digestNotification, escapeHtml, truncate };
