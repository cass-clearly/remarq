# Remarq API Reference

Remarq exposes a REST API for managing documents and comments. All endpoints accept and return JSON. The API follows a Stripe-inspired resource pattern where every response object includes an `object` field identifying its type.

**Default base URL:** `http://localhost:3333`

## Conventions

- **Content-Type:** All requests with a body must send `Content-Type: application/json`.
- **CORS:** Enabled for all origins.
- **Authentication:** None. The API is unauthenticated — secure it at the network level.
- **IDs:** Documents use `doc_` prefixed IDs, comments use `cmt_` prefixed IDs. Both are URL-safe random strings.
- **Timestamps:** All `created_at` fields are ISO 8601 strings in UTC.
- **List responses:** Wrapped in `{"object": "list", "data": [...]}`.
- **Error responses:** All errors return `{"error": {"message": "..."}}` with an appropriate HTTP status code.

---

## Health Check

### `GET /health`

Returns server status.

**Response:** `200 OK`

```json
{
  "status": "ok"
}
```

**Example:**

```bash
curl http://localhost:3333/health
```

---

## Documents

A document represents a single web page identified by its URI. Documents are auto-created when comments reference a URI that doesn't exist yet.

### Document object

| Field        | Type   | Description                          |
|--------------|--------|--------------------------------------|
| `id`         | string | Unique identifier (`doc_` prefix)    |
| `object`     | string | Always `"document"`                  |
| `uri`        | string | Normalized URI                       |
| `created_at` | string | ISO 8601 creation timestamp          |

### URI normalization

URIs are normalized before storage. Two URIs that differ only in normalization-irrelevant ways will resolve to the same document.

Rules applied:
1. Lowercase scheme and hostname
2. Upgrade `http://` to `https://`
3. Remove trailing slash (except root `/`)
4. Strip tracking parameters: `utm_*`, `fbclid`, `gclid`, `gbraid`, `wbraid`, `dclid`, `msclkid`, `mc_eid`, `mc_cid`, `_ga`, `_gl`, `igshid`, `ref`, `referrer`
5. Remove URL fragment (`#...`)
6. Sort remaining query parameters alphabetically

---

### List documents

```
GET /documents
```

Returns all documents ordered by creation time (ascending).

**Response:** `200 OK`

```json
{
  "object": "list",
  "data": [
    {
      "id": "doc_8avN3bWlR2xQ",
      "object": "document",
      "uri": "https://example.com/page",
      "created_at": "2026-02-21T10:30:00.000Z"
    }
  ]
}
```

**Example:**

```bash
curl http://localhost:3333/documents
```

---

### Create a document

```
POST /documents
```

Creates a document for the given URI, or returns the existing document if the normalized URI already exists. This operation is idempotent.

**Request body:**

| Field | Type   | Required | Description       |
|-------|--------|----------|-------------------|
| `uri` | string | Yes      | The document URI  |

**Response:**

| Status    | Condition                          |
|-----------|------------------------------------|
| `201`     | Document was created               |
| `200`     | Document already existed           |

```json
{
  "id": "doc_8avN3bWlR2xQ",
  "object": "document",
  "uri": "https://example.com/page",
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Errors:**

| Status | Message              | Condition          |
|--------|----------------------|--------------------|
| `400`  | `uri is required`    | Missing `uri` field |
| `400`  | `Invalid URI: ...`   | Malformed URI      |

**Example:**

```bash
curl -X POST http://localhost:3333/documents \
  -H "Content-Type: application/json" \
  -d '{"uri": "https://example.com/page"}'
```

---

### Retrieve a document

```
GET /documents/:id
```

**Path parameters:**

| Parameter | Description  |
|-----------|-------------|
| `id`      | Document ID  |

**Response:** `200 OK`

```json
{
  "id": "doc_8avN3bWlR2xQ",
  "object": "document",
  "uri": "https://example.com/page",
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Errors:**

| Status | Message                | Condition              |
|--------|------------------------|------------------------|
| `404`  | `Document not found`   | No document with this ID |

**Example:**

```bash
curl http://localhost:3333/documents/doc_8avN3bWlR2xQ
```

---

### Delete a document

```
DELETE /documents/:id
```

Deletes a document and **all associated comments and replies** (cascade delete).

**Path parameters:**

| Parameter | Description  |
|-----------|-------------|
| `id`      | Document ID  |

**Response:** `200 OK` — returns the deleted document.

```json
{
  "id": "doc_8avN3bWlR2xQ",
  "object": "document",
  "uri": "https://example.com/page",
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Errors:**

| Status | Message                | Condition              |
|--------|------------------------|------------------------|
| `404`  | `Document not found`   | No document with this ID |

**Example:**

```bash
curl -X DELETE http://localhost:3333/documents/doc_8avN3bWlR2xQ
```

---

## Comments

A comment is a piece of feedback anchored to a text selection in a document. Comments can have threaded replies. Only root comments (not replies) have a status (`"open"` or `"closed"`).

### Comment object

| Field        | Type        | Description                                              |
|--------------|-------------|----------------------------------------------------------|
| `id`         | string      | Unique identifier (`cmt_` prefix)                        |
| `object`     | string      | Always `"comment"`                                       |
| `document`   | string      | Parent document ID (or hydrated document object with `?expand=document`) |
| `quote`      | string\|null | The highlighted text, or `null` for replies              |
| `prefix`     | string\|null | Text immediately before the quote (for anchoring)        |
| `suffix`     | string\|null | Text immediately after the quote (for anchoring)         |
| `body`       | string      | The comment text (HTML tags stripped, trimmed)            |
| `author`     | string      | Display name of the commenter (HTML tags stripped, trimmed) |
| `status`     | string\|null | `"open"` or `"closed"` for root comments; `null` for replies |
| `parent`     | string\|null | Parent comment ID for replies; `null` for root comments  |
| `created_at` | string      | ISO 8601 creation timestamp                              |

### Sanitization

The `body` and `author` fields are sanitized on write: HTML tags are stripped and whitespace is trimmed. The `quote`, `prefix`, and `suffix` fields are stored as-is to preserve text anchoring accuracy.

---

### List comments

```
GET /comments
```

Returns comments ordered by creation time (ascending). Supports filtering by document, URI, and status. All query parameters are optional and can be combined.

**Query parameters:**

| Parameter  | Type   | Description                                                             |
|------------|--------|-------------------------------------------------------------------------|
| `document` | string | Filter by document ID                                                   |
| `uri`      | string | Filter by document URI (normalized before lookup)                       |
| `status`   | string | Filter by status: `"open"` or `"closed"` (root comments only)          |
| `expand`   | string | Set to `"document"` to hydrate the document object inline               |

**Status filtering behavior:** When filtering by status, results include matching root comments **and** all their replies. Replies always have `status: null` — the filter matches on the root comment's status and pulls in the full thread.

If a `uri` is provided but has no matching document, an empty list is returned (not an error).

**Response:** `200 OK`

```json
{
  "object": "list",
  "data": [
    {
      "id": "cmt_k3mXp9q2aBvN",
      "object": "comment",
      "document": "doc_8avN3bWlR2xQ",
      "quote": "selected text",
      "prefix": "text before",
      "suffix": "text after",
      "body": "This needs revision",
      "author": "Alice",
      "status": "open",
      "parent": null,
      "created_at": "2026-02-21T10:30:00.000Z"
    },
    {
      "id": "cmt_r7vBw2pLq9xY",
      "object": "comment",
      "document": "doc_8avN3bWlR2xQ",
      "quote": null,
      "prefix": null,
      "suffix": null,
      "body": "Good point, I'll fix this.",
      "author": "Bob",
      "status": null,
      "parent": "cmt_k3mXp9q2aBvN",
      "created_at": "2026-02-21T10:35:00.000Z"
    }
  ]
}
```

**With `?expand=document`**, the `document` field becomes the full document object:

```json
{
  "id": "cmt_k3mXp9q2aBvN",
  "object": "comment",
  "document": {
    "id": "doc_8avN3bWlR2xQ",
    "object": "document",
    "uri": "https://example.com/page",
    "created_at": "2026-02-21T10:30:00.000Z"
  },
  "quote": "selected text",
  "..."
}
```

**Errors:**

| Status | Message                                  | Condition              |
|--------|------------------------------------------|------------------------|
| `400`  | `status must be "open" or "closed"`      | Invalid status value   |

**Examples:**

```bash
# All comments
curl http://localhost:3333/comments

# Comments for a specific document
curl "http://localhost:3333/comments?document=doc_8avN3bWlR2xQ"

# Comments by URI
curl "http://localhost:3333/comments?uri=https://example.com/page"

# Open comments with hydrated documents (the agent endpoint)
curl "http://localhost:3333/comments?status=open&expand=document"

# Combine filters
curl "http://localhost:3333/comments?document=doc_8avN3bWlR2xQ&status=open&expand=document"
```

---

### Create a comment

```
POST /comments
```

Creates a new comment or reply. If a `uri` is provided and no document exists for it, the document is auto-created.

**Request body:**

| Field      | Type        | Required                         | Description                                    |
|------------|-------------|----------------------------------|------------------------------------------------|
| `uri`      | string      | Yes (unless `document` provided) | Document URI (creates document if needed)      |
| `document` | string      | Yes (unless `uri` provided)      | Existing document ID                           |
| `quote`    | string      | Yes (for root comments)          | The highlighted text selection                 |
| `prefix`   | string\|null | No                              | Text before the quote (for anchoring)          |
| `suffix`   | string\|null | No                              | Text after the quote (for anchoring)           |
| `body`     | string      | Yes                              | The comment text                               |
| `author`   | string      | Yes                              | Display name of the commenter                  |
| `parent`   | string\|null | No                              | Parent comment ID to create a reply            |

For replies (`parent` is set), `quote` is not required.

**Response:** `201 Created`

```json
{
  "id": "cmt_k3mXp9q2aBvN",
  "object": "comment",
  "document": "doc_8avN3bWlR2xQ",
  "quote": "selected text",
  "prefix": "text before",
  "suffix": "text after",
  "body": "This needs revision",
  "author": "Alice",
  "status": "open",
  "parent": null,
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Errors:**

| Status | Message                                       | Condition                           |
|--------|-----------------------------------------------|-------------------------------------|
| `400`  | `body and author are required`                | Missing `body` or `author`          |
| `400`  | `quote is required for top-level comments`    | Root comment without `quote`        |
| `400`  | `uri or document is required`                 | Neither `uri` nor `document` given  |
| `400`  | `Invalid URI: ...`                            | Malformed `uri`                     |
| `404`  | `Document not found`                          | `document` ID doesn't exist         |

**Examples:**

```bash
# Create a comment by URI (document auto-created)
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "uri": "https://example.com/page",
    "quote": "this paragraph is confusing",
    "prefix": "As we discussed, ",
    "suffix": " and needs clarification.",
    "body": "Can you simplify this?",
    "author": "Alice"
  }'

# Create a comment on an existing document
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "document": "doc_8avN3bWlR2xQ",
    "quote": "another passage",
    "body": "This is great!",
    "author": "Bob"
  }'

# Reply to a comment
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "document": "doc_8avN3bWlR2xQ",
    "body": "Thanks, I will fix this.",
    "author": "Charlie",
    "parent": "cmt_k3mXp9q2aBvN"
  }'
```

---

### Retrieve a comment

```
GET /comments/:id
```

**Path parameters:**

| Parameter | Description |
|-----------|-------------|
| `id`      | Comment ID  |

**Query parameters:**

| Parameter | Type   | Description                                              |
|-----------|--------|----------------------------------------------------------|
| `expand`  | string | Set to `"document"` to hydrate the document object inline |

**Response:** `200 OK`

```json
{
  "id": "cmt_k3mXp9q2aBvN",
  "object": "comment",
  "document": "doc_8avN3bWlR2xQ",
  "quote": "selected text",
  "prefix": null,
  "suffix": null,
  "body": "This needs revision",
  "author": "Alice",
  "status": "open",
  "parent": null,
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Errors:**

| Status | Message              | Condition                 |
|--------|----------------------|---------------------------|
| `404`  | `Comment not found`  | No comment with this ID   |

**Example:**

```bash
curl http://localhost:3333/comments/cmt_k3mXp9q2aBvN

# With expanded document
curl "http://localhost:3333/comments/cmt_k3mXp9q2aBvN?expand=document"
```

---

### Update a comment

```
PATCH /comments/:id
```

Updates a comment's body and/or status. Both fields are optional — you can update either or both in a single request.

**Path parameters:**

| Parameter | Description |
|-----------|-------------|
| `id`      | Comment ID  |

**Request body:**

| Field    | Type   | Description                                          |
|----------|--------|------------------------------------------------------|
| `body`   | string | New comment text (will be sanitized)                 |
| `status` | string | `"open"` or `"closed"` (root comments only)          |

**Response:** `200 OK` — returns the updated comment.

```json
{
  "id": "cmt_k3mXp9q2aBvN",
  "object": "comment",
  "document": "doc_8avN3bWlR2xQ",
  "quote": "selected text",
  "prefix": null,
  "suffix": null,
  "body": "Updated text",
  "author": "Alice",
  "status": "closed",
  "parent": null,
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Errors:**

| Status | Message                                  | Condition                        |
|--------|------------------------------------------|----------------------------------|
| `404`  | `Comment not found`                      | No comment with this ID          |
| `400`  | `status cannot be set on replies`        | Trying to set status on a reply  |
| `400`  | `status must be "open" or "closed"`      | Invalid status value             |

**Examples:**

```bash
# Resolve a comment
curl -X PATCH http://localhost:3333/comments/cmt_k3mXp9q2aBvN \
  -H "Content-Type: application/json" \
  -d '{"status": "closed"}'

# Reopen a comment
curl -X PATCH http://localhost:3333/comments/cmt_k3mXp9q2aBvN \
  -H "Content-Type: application/json" \
  -d '{"status": "open"}'

# Update the body
curl -X PATCH http://localhost:3333/comments/cmt_k3mXp9q2aBvN \
  -H "Content-Type: application/json" \
  -d '{"body": "Updated comment text"}'
```

---

### Delete a comment

```
DELETE /comments/:id
```

Deletes a comment. If deleting a root comment, **all replies are cascade-deleted**.

**Path parameters:**

| Parameter | Description |
|-----------|-------------|
| `id`      | Comment ID  |

**Response:** `200 OK` — returns the deleted comment.

```json
{
  "id": "cmt_k3mXp9q2aBvN",
  "object": "comment",
  "document": "doc_8avN3bWlR2xQ",
  "quote": "selected text",
  "prefix": null,
  "suffix": null,
  "body": "This needs revision",
  "author": "Alice",
  "status": "open",
  "parent": null,
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Errors:**

| Status | Message              | Condition                 |
|--------|----------------------|---------------------------|
| `404`  | `Comment not found`  | No comment with this ID   |

**Example:**

```bash
curl -X DELETE http://localhost:3333/comments/cmt_k3mXp9q2aBvN
```

---

## Error Handling

All errors follow a consistent format:

```json
{
  "error": {
    "message": "Description of what went wrong"
  }
}
```

### Status codes

| Code  | Meaning                                                         |
|-------|-----------------------------------------------------------------|
| `200` | Success                                                         |
| `201` | Resource created                                                |
| `400` | Bad request — missing or invalid parameters                     |
| `404` | Resource not found                                              |
| `500` | Internal server error — unhandled exception                     |

A `500` response always returns:

```json
{
  "error": {
    "message": "Internal server error"
  }
}
```

---

## Common Patterns

### Agent workflow

The primary use case for the API is an AI agent that reads feedback and acts on it:

```bash
# 1. Get all open feedback with document context
curl "http://localhost:3333/comments?status=open&expand=document"

# 2. Agent processes feedback and revises the document...

# 3. Resolve each addressed comment
curl -X PATCH http://localhost:3333/comments/cmt_k3mXp9q2aBvN \
  -H "Content-Type: application/json" \
  -d '{"status": "closed"}'
```

### Custom server integration

If you're running Remarq as a backend for a custom application:

```bash
# Register a document
curl -X POST http://localhost:3333/documents \
  -H "Content-Type: application/json" \
  -d '{"uri": "https://yourapp.com/article/123"}'

# Submit feedback programmatically
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "uri": "https://yourapp.com/article/123",
    "quote": "The quarterly results show",
    "body": "This data is outdated, please update.",
    "author": "Review Bot"
  }'

# Poll for unresolved feedback on a specific page
curl "http://localhost:3333/comments?uri=https://yourapp.com/article/123&status=open"
```

### Threading

Comments support one level of threading via the `parent` field:

```bash
# Root comment (has quote, status = "open")
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "document": "doc_8avN3bWlR2xQ",
    "quote": "problematic text",
    "body": "This is wrong.",
    "author": "Reviewer"
  }'

# Reply (no quote needed, status = null)
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "document": "doc_8avN3bWlR2xQ",
    "body": "Fixed, thanks!",
    "author": "Author",
    "parent": "cmt_k3mXp9q2aBvN"
  }'
```
