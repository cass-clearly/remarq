/**
 * Backend API client for the annotation server.
 */

let _baseUrl = "";

export function setBaseUrl(url) {
  _baseUrl = url.replace(/\/+$/, "");
}

export async function fetchAnnotations(uri) {
  const res = await fetch(
    `${_baseUrl}/api/annotations?uri=${encodeURIComponent(uri)}`
  );
  if (!res.ok) throw new Error(`Failed to fetch annotations: ${res.status}`);
  return res.json();
}

export async function createAnnotation({
  uri,
  quote,
  prefix,
  suffix,
  comment,
  commenter,
  parent_id,
}) {
  const res = await fetch(`${_baseUrl}/api/annotations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uri, quote, prefix, suffix, comment, commenter, parent_id }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || "Failed to create annotation");
  }
  return res.json();
}

export async function updateAnnotation(id, { comment }) {
  const res = await fetch(`${_baseUrl}/api/annotations/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment }),
  });
  if (!res.ok) throw new Error(`Failed to update annotation: ${res.status}`);
  return res.json();
}

export async function resolveAnnotation(id, resolved) {
  const res = await fetch(`${_baseUrl}/api/annotations/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ resolved }),
  });
  if (!res.ok) throw new Error(`Failed to update annotation: ${res.status}`);
  return res.json();
}

export async function deleteAnnotation(id) {
  const res = await fetch(`${_baseUrl}/api/annotations/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`Failed to delete annotation: ${res.status}`);
}
