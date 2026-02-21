/**
 * Backend API client for the Remarq server.
 */

let _baseUrl = "";
let _apiKey = "";

export function setBaseUrl(url) {
  _baseUrl = url.replace(/\/+$/, "");
}

export function setApiKey(key) {
  _apiKey = key;
}

function authHeaders() {
  if (!_apiKey) return {};
  return { Authorization: `Bearer ${_apiKey}` };
}

/**
 * Throws a descriptive error when a fetch response is not OK.
 * Extracts structured error message from the JSON body when available;
 * falls back to a generic message with the HTTP status code.
 */
async function throwIfNotOk(res, fallbackMessage) {
  if (res.ok) return;
  const err = await res
    .json()
    .catch(() => ({ error: { message: res.statusText } }));
  throw new Error(err.error?.message || `${fallbackMessage}: ${res.status}`);
}

export async function fetchComments(uri, documentId, { search, author } = {}) {
  const parts = [];
  if (documentId) parts.push(`document=${encodeURIComponent(documentId)}`);
  else if (uri) parts.push(`uri=${encodeURIComponent(uri)}`);
  if (search) parts.push(`search=${encodeURIComponent(search)}`);
  if (author) parts.push(`author=${encodeURIComponent(author)}`);
  const res = await fetch(`${_baseUrl}/comments?${parts.join('&')}`, {
    headers: authHeaders(),
  });
  await throwIfNotOk(res, "Failed to fetch comments");
  const json = await res.json();
  return json.data;
}

export async function createComment({
  uri,
  document,
  quote,
  prefix,
  suffix,
  body,
  author,
  parent,
}) {
  const payload = { quote, prefix, suffix, body, author, parent };
  if (document) {
    payload.document = document;
  } else {
    payload.uri = uri;
  }
  const res = await fetch(`${_baseUrl}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(payload),
  });
  await throwIfNotOk(res, "Failed to create comment");
  return res.json();
}

export async function updateComment(id, { body }) {
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ body }),
  });
  await throwIfNotOk(res, "Failed to update comment");
  return res.json();
}

export async function updateCommentStatus(id, status) {
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ status }),
  });
  await throwIfNotOk(res, "Failed to update comment status");
  return res.json();
}

export async function deleteComment(id) {
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  await throwIfNotOk(res, "Failed to delete comment");
}

export async function fetchAnalytics(documentId) {
  const res = await fetch(`${_baseUrl}/documents/${documentId}/analytics`, {
    headers: authHeaders(),
  });
  await throwIfNotOk(res, "Failed to fetch analytics");
  return res.json();
}

// ── Template API ──────────────────────────────────────────────────

export async function fetchTemplates(author) {
  const res = await fetch(
    `${_baseUrl}/templates?author=${encodeURIComponent(author)}`,
    { headers: authHeaders() }
  );
  await throwIfNotOk(res, "Failed to fetch templates");
  const json = await res.json();
  return json.data;
}

export async function createTemplate({ name, body, author, shared }) {
  const res = await fetch(`${_baseUrl}/templates`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ name, body, author, shared }),
  });
  await throwIfNotOk(res, "Failed to create template");
  return res.json();
}

export async function updateTemplate(id, { name, body, shared }, author) {
  const res = await fetch(
    `${_baseUrl}/templates/${id}?author=${encodeURIComponent(author)}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ name, body, shared }),
    }
  );
  await throwIfNotOk(res, "Failed to update template");
  return res.json();
}

export async function deleteTemplate(id, author) {
  const res = await fetch(
    `${_baseUrl}/templates/${id}?author=${encodeURIComponent(author)}`,
    { method: "DELETE", headers: authHeaders() }
  );
  await throwIfNotOk(res, "Failed to delete template");
}
