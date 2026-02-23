function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function timeAgo(date) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(date).toLocaleDateString();
}

function layout(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} - Remarq Admin</title>
  <link rel="stylesheet" href="/admin/admin.css">
</head>
<body>
  <nav class="admin-nav">
    <a href="/admin/documents" class="nav-brand">Remarq Admin</a>
    <form method="POST" action="/admin/logout" class="nav-logout">
      <button type="submit">Logout</button>
    </form>
  </nav>
  <main class="admin-main">
    ${content}
  </main>
</body>
</html>`;
}

function loginPage(error) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login - Remarq Admin</title>
  <link rel="stylesheet" href="/admin/admin.css">
</head>
<body>
  <div class="login-container">
    <h1>Remarq Admin</h1>
    ${error ? `<p class="error">${escapeHtml(error)}</p>` : ""}
    <form method="POST" action="/admin/login">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required autofocus>
      <button type="submit">Login</button>
    </form>
  </div>
</body>
</html>`;
}

function documentsPage(documents) {
  const rows = documents
    .map(
      (doc) => `
      <tr>
        <td class="uri-cell">
          <a href="/admin/documents/${escapeHtml(doc.id)}">${escapeHtml(doc.uri)}</a>
        </td>
        <td class="count-cell">${doc.comment_count}</td>
        <td class="date-cell" title="${escapeHtml(doc.last_activity || doc.created_at)}">
          ${timeAgo(doc.last_activity || doc.created_at)}
        </td>
      </tr>`
    )
    .join("\n");

  return layout(
    "Documents",
    `
    <h1>Documents</h1>
    <p class="subtitle">${documents.length} document${documents.length !== 1 ? "s" : ""}</p>
    ${
      documents.length === 0
        ? '<p class="empty">No documents yet.</p>'
        : `
    <table>
      <thead>
        <tr>
          <th>URI</th>
          <th>Comments</th>
          <th>Last Activity</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>`
    }`
  );
}

function documentDetailPage(doc, comments, csrfToken) {
  const rootComments = comments.filter((c) => !c.parent);
  const replies = comments.filter((c) => c.parent);
  const replyMap = {};
  for (const r of replies) {
    if (!replyMap[r.parent]) replyMap[r.parent] = [];
    replyMap[r.parent].push(r);
  }

  function renderComment(comment, isReply) {
    const childReplies = replyMap[comment.id] || [];
    return `
      <div class="comment ${isReply ? "reply" : "root"}">
        <div class="comment-header">
          <span class="comment-author">${escapeHtml(comment.author)}</span>
          <span class="comment-time" title="${escapeHtml(comment.created_at)}">${timeAgo(comment.created_at)}</span>
          ${!isReply && comment.status ? `<span class="comment-status status-${escapeHtml(comment.status)}">${escapeHtml(comment.status)}</span>` : ""}
        </div>
        ${comment.quote ? `<blockquote>${escapeHtml(comment.quote)}</blockquote>` : ""}
        <p class="comment-body">${escapeHtml(comment.body)}</p>
        <form method="POST" action="/admin/comments/${escapeHtml(comment.id)}/delete" class="delete-form"
              onsubmit="return confirm('Delete this comment?')">
          <input type="hidden" name="_csrf" value="${csrfToken}">
          <label>
            Reason: <input type="text" name="reason" placeholder="spam, inappropriate, etc." class="reason-input">
          </label>
          <button type="submit" class="btn-delete">Delete</button>
        </form>
        ${childReplies.map((r) => renderComment(r, true)).join("\n")}
      </div>`;
  }

  return layout(
    "Document",
    `
    <p class="breadcrumb"><a href="/admin/documents">&larr; Documents</a></p>
    <h1 class="doc-uri">${escapeHtml(doc.uri)}</h1>
    <p class="subtitle">${comments.length} comment${comments.length !== 1 ? "s" : ""} &middot; Created ${timeAgo(doc.created_at)}</p>
    ${
      rootComments.length === 0
        ? '<p class="empty">No comments on this document.</p>'
        : rootComments.map((c) => renderComment(c, false)).join("\n")
    }`
  );
}

module.exports = { loginPage, documentsPage, documentDetailPage, escapeHtml, timeAgo };
