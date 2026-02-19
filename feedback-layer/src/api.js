/**
 * Backend API client for the Remarq server.
 */

let _baseUrl = "";

export function setBaseUrl(url) {
  _baseUrl = url.replace(/\/+$/, "");
}

export async function fetchComments(uri, documentId) {
  const query = documentId
    ? `document=${encodeURIComponent(documentId)}`
    : `uri=${encodeURIComponent(uri)}`;
  const res = await fetch(`${_baseUrl}/comments?${query}`);
  if (!res.ok) throw new Error(`Failed to fetch comments: ${res.status}`);
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: { message: res.statusText } }));
    throw new Error(err.error?.message || "Failed to create comment");
  }
  return res.json();
}

export async function updateComment(id, { body }) {
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
  if (!res.ok) throw new Error(`Failed to update comment: ${res.status}`);
  return res.json();
}

export async function updateCommentStatus(id, status) {
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error(`Failed to update comment: ${res.status}`);
  return res.json();
}

export async function deleteComment(id) {
  const res = await fetch(`${_baseUrl}/comments/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`Failed to delete comment: ${res.status}`);
}
