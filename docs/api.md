# Remarq API Documentation

## Quick Start

Here's a common workflow for working with the Remarq API:

```bash
# 1. Create a comment on a document (auto-creates document if needed)
curl -X POST http://localhost:3000/comments \
  -H "Content-Type: application/json" \
  -d '{
    "uri": "https://example.com/article",
    "quote": "selected text from the page",
    "body": "This is my first comment",
    "author": "Alice"
  }'

# Response: { "id": "cmt_xyz", "status": "open", ... }

# 2. Create a reply to the comment
curl -X POST http://localhost:3000/comments \
  -H "Content-Type: application/json" \
  -d '{
    "document": "doc_abc",
    "parent": "cmt_xyz",
    "body": "Great point!",
    "author": "Bob"
  }'

# 3. Resolve the original comment
curl -X PATCH http://localhost:3000/comments/cmt_xyz \
  -H "Content-Type: application/json" \
  -d '{ "status": "closed" }'

# 4. List all open comments for the document
curl "http://localhost:3000/comments?uri=https://example.com/article&status=open"
```

---

## Base URL

When running locally:
```
http://localhost:3000
```

When deployed, replace with your server's URL.

---

## Endpoints

### Health Check

#### `GET /health`

Check if the server is running.

**Response:**
```json
{
  "status": "ok"
}
```

**Status Codes:**
- `200 OK` — Server is healthy

**Example:**
```bash
curl http://localhost:3000/health
```

---

### Documents

#### `GET /documents`

List all documents.

**Response:**
```json
{
  "object": "list",
  "data": [
    {
      "id": "doc_k3mXp9q2aBvN",
      "object": "document",
      "uri": "https://example.com/article",
      "created_at": "2026-02-21T10:30:00.000Z"
    }
  ]
}
```

**Status Codes:**
- `200 OK` — Returns list of documents

**Example:**
```bash
curl http://localhost:3000/documents
```

---

#### `POST /documents`

Create a new document (or return existing if URI already exists).

**Request Body:**
```json
{
  "uri": "https://example.com/article"
}
```

**Response (201 Created):**
```json
{
  "id": "doc_k3mXp9q2aBvN",
  "object": "document",
  "uri": "https://example.com/article",
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Response (200 OK, if document already exists):**
```json
{
  "id": "doc_k3mXp9q2aBvN",
  "object": "document",
  "uri": "https://example.com/article",
  "created_at": "2026-02-20T15:20:00.000Z"
}
```

**Status Codes:**
- `201 Created` — Document was created
- `200 OK` — Document already existed
- `400 Bad Request` — Missing or invalid URI

**Error Response (400):**
```json
{
  "error": {
    "message": "uri is required"
  }
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/documents \
  -H "Content-Type: application/json" \
  -d '{"uri": "https://example.com/article"}'
```

**Notes:**
- URIs are automatically normalized (lowercased scheme/host, sorted query params, etc.)
- Duplicate URIs return the existing document with `200 OK` instead of creating a new one

---

#### `GET /documents/:id`

Get a single document by ID.

**Parameters:**
- `id` (path, required) — Document ID (e.g., `doc_k3mXp9q2aBvN`)

**Response (200 OK):**
```json
{
  "id": "doc_k3mXp9q2aBvN",
  "object": "document",
  "uri": "https://example.com/article",
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Status Codes:**
- `200 OK` — Document found
- `404 Not Found` — Document not found

**Error Response (404):**
```json
{
  "error": {
    "message": "Document not found"
  }
}
```

**Example:**
```bash
curl http://localhost:3000/documents/doc_k3mXp9q2aBvN
```

---

#### `DELETE /documents/:id`

Delete a document and all its comments.

**Parameters:**
- `id` (path, required) — Document ID

**Response (200 OK):**
```json
{
  "id": "doc_k3mXp9q2aBvN",
  "object": "document",
  "uri": "https://example.com/article",
  "created_at": "2026-02-21T10:30:00.000Z"
}
```

**Status Codes:**
- `200 OK` — Document deleted
- `404 Not Found` — Document not found

**Example:**
```bash
curl -X DELETE http://localhost:3000/documents/doc_k3mXp9q2aBvN
```

**Notes:**
- Deleting a document cascades to all comments on that document

---

### Comments

#### `GET /comments`

List comments with optional filtering.

**Query Parameters:**
- `document` (optional) — Filter by document ID
- `uri` (optional) — Filter by document URI (alternative to `document`)
- `status` (optional) — Filter by status (`open` or `closed`)
  - Only applies to top-level comments; replies to matching comments are included
- `expand` (optional) — Set to `document` to hydrate document objects

**Response:**
```json
{
  "object": "list",
  "data": [
    {
      "id": "cmt_abc123",
      "object": "comment",
      "document": "doc_k3mXp9q2aBvN",
      "quote": "selected text",
      "prefix": "context before",
      "suffix": "context after",
      "body": "This is a comment",
      "author": "Alice",
      "status": "open",
      "parent": null,
      "created_at": "2026-02-21T10:35:00.000Z"
    },
    {
      "id": "cmt_def456",
      "object": "comment",
      "document": "doc_k3mXp9q2aBvN",
      "quote": null,
      "prefix": null,
      "suffix": null,
      "body": "This is a reply",
      "author": "Bob",
      "status": null,
      "parent": "cmt_abc123",
      "created_at": "2026-02-21T10:40:00.000Z"
    }
  ]
}
```

**Status Codes:**
- `200 OK` — Returns list of comments
- `400 Bad Request` — Invalid status value

**Error Response (400):**
```json
{
  "error": {
    "message": "status must be \"open\" or \"closed\""
  }
}
```

**Examples:**

```bash
# List all comments for a document by ID
curl "http://localhost:3000/comments?document=doc_k3mXp9q2aBvN"

# List all comments for a document by URI
curl "http://localhost:3000/comments?uri=https://example.com/article"

# List only open comments
curl "http://localhost:3000/comments?document=doc_k3mXp9q2aBvN&status=open"

# List all comments with document objects expanded
curl "http://localhost:3000/comments?document=doc_k3mXp9q2aBvN&expand=document"
```

**Notes:**
- Replies always have `status: null` (only top-level comments have status)
- When filtering by status, replies to matching top-level comments are included
- `expand=document` replaces the document ID with the full document object

---

#### `POST /comments`

Create a new comment or reply.

**Request Body (top-level comment):**
```json
{
  "uri": "https://example.com/article",
  "quote": "selected text from the page",
  "prefix": "text before selection",
  "suffix": "text after selection",
  "body": "This is my comment",
  "author": "Alice"
}
```

**Request Body (reply):**
```json
{
  "document": "doc_k3mXp9q2aBvN",
  "parent": "cmt_abc123",
  "body": "This is a reply",
  "author": "Bob"
}
```

**Required Fields:**
- `body` (string) — Comment text
- `author` (string) — Author name
- `uri` OR `document` (string) — Document URI or ID
- `quote` (string) — Required for top-level comments; not required for replies
- `parent` (string, optional) — Parent comment ID (for replies)

**Optional Fields:**
- `prefix` (string) — Text context before the quote
- `suffix` (string) — Text context after the quote

**Response (201 Created):**
```json
{
  "id": "cmt_abc123",
  "object": "comment",
  "document": "doc_k3mXp9q2aBvN",
  "quote": "selected text from the page",
  "prefix": "text before selection",
  "suffix": "text after selection",
  "body": "This is my comment",
  "author": "Alice",
  "status": "open",
  "parent": null,
  "created_at": "2026-02-21T10:35:00.000Z"
}
```

**Status Codes:**
- `201 Created` — Comment created
- `400 Bad Request` — Missing required fields or invalid data
- `404 Not Found` — Referenced document ID does not exist

**Error Responses:**

Missing body or author:
```json
{
  "error": {
    "message": "body and author are required"
  }
}
```

Missing quote for top-level comment:
```json
{
  "error": {
    "message": "quote is required for top-level comments"
  }
}
```

Missing uri or document:
```json
{
  "error": {
    "message": "uri or document is required"
  }
}
```

Document not found:
```json
{
  "error": {
    "message": "Document not found"
  }
}
```

**Examples:**

```bash
# Create a top-level comment (auto-creates document if needed)
curl -X POST http://localhost:3000/comments \
  -H "Content-Type: application/json" \
  -d '{
    "uri": "https://example.com/article",
    "quote": "selected text",
    "body": "My comment",
    "author": "Alice"
  }'

# Create a reply
curl -X POST http://localhost:3000/comments \
  -H "Content-Type: application/json" \
  -d '{
    "document": "doc_k3mXp9q2aBvN",
    "parent": "cmt_abc123",
    "body": "My reply",
    "author": "Bob"
  }'
```

**Notes:**
- If using `uri`, the document will be auto-created if it doesn't exist
- Top-level comments default to `status: "open"`
- Replies have `status: null` and cannot be resolved/closed independently
- HTML tags in `body` and `author` are stripped for safety

---

#### `GET /comments/:id`

Get a single comment by ID.

**Parameters:**
- `id` (path, required) — Comment ID (e.g., `cmt_abc123`)
- `expand` (query, optional) — Set to `document` to hydrate document object

**Response (200 OK):**
```json
{
  "id": "cmt_abc123",
  "object": "comment",
  "document": "doc_k3mXp9q2aBvN",
  "quote": "selected text",
  "prefix": null,
  "suffix": null,
  "body": "This is my comment",
  "author": "Alice",
  "status": "open",
  "parent": null,
  "created_at": "2026-02-21T10:35:00.000Z"
}
```

**Status Codes:**
- `200 OK` — Comment found
- `404 Not Found` — Comment not found

**Error Response (404):**
```json
{
  "error": {
    "message": "Comment not found"
  }
}
```

**Examples:**

```bash
# Get comment by ID
curl http://localhost:3000/comments/cmt_abc123

# Get comment with document object expanded
curl "http://localhost:3000/comments/cmt_abc123?expand=document"
```

---

#### `PATCH /comments/:id`

Update a comment's body or status.

**Parameters:**
- `id` (path, required) — Comment ID

**Request Body:**
```json
{
  "body": "Updated comment text",
  "status": "closed"
}
```

**Fields:**
- `body` (string, optional) — New comment text
- `status` (string, optional) — New status (`open` or `closed`)
  - Can only be set on top-level comments, not replies

**Response (200 OK):**
```json
{
  "id": "cmt_abc123",
  "object": "comment",
  "document": "doc_k3mXp9q2aBvN",
  "quote": "selected text",
  "prefix": null,
  "suffix": null,
  "body": "Updated comment text",
  "author": "Alice",
  "status": "closed",
  "parent": null,
  "created_at": "2026-02-21T10:35:00.000Z"
}
```

**Status Codes:**
- `200 OK` — Comment updated
- `400 Bad Request` — Invalid status value or attempting to set status on a reply
- `404 Not Found` — Comment not found

**Error Responses:**

Invalid status:
```json
{
  "error": {
    "message": "status must be \"open\" or \"closed\""
  }
}
```

Setting status on a reply:
```json
{
  "error": {
    "message": "Cannot set status on a reply; replies do not have independent status"
  }
}
```

**Examples:**

```bash
# Update comment body
curl -X PATCH http://localhost:3000/comments/cmt_abc123 \
  -H "Content-Type: application/json" \
  -d '{"body": "Updated text"}'

# Resolve a comment
curl -X PATCH http://localhost:3000/comments/cmt_abc123 \
  -H "Content-Type: application/json" \
  -d '{"status": "closed"}'

# Reopen a comment
curl -X PATCH http://localhost:3000/comments/cmt_abc123 \
  -H "Content-Type: application/json" \
  -d '{"status": "open"}'
```

---

#### `DELETE /comments/:id`

Delete a comment and all its replies.

**Parameters:**
- `id` (path, required) — Comment ID

**Response (200 OK):**
```json
{
  "id": "cmt_abc123",
  "object": "comment",
  "document": "doc_k3mXp9q2aBvN",
  "quote": "selected text",
  "prefix": null,
  "suffix": null,
  "body": "This is my comment",
  "author": "Alice",
  "status": "open",
  "parent": null,
  "created_at": "2026-02-21T10:35:00.000Z"
}
```

**Status Codes:**
- `200 OK` — Comment deleted
- `404 Not Found` — Comment not found

**Example:**
```bash
curl -X DELETE http://localhost:3000/comments/cmt_abc123
```

**Notes:**
- Deleting a comment cascades to all replies on that comment

---

## Error Responses

All errors follow this format:

```json
{
  "error": {
    "message": "Description of what went wrong"
  }
}
```

### Common Status Codes

- `200 OK` — Request succeeded
- `201 Created` — Resource created
- `400 Bad Request` — Invalid request (missing fields, invalid values)
- `404 Not Found` — Resource not found
- `500 Internal Server Error` — Server error

---

## Common Errors & Troubleshooting

### Creating a comment without a quote

**Error:**
```json
{
  "error": {
    "message": "quote is required for top-level comments"
  }
}
```

**Solution:** Include a `quote` field when creating a top-level comment. Replies don't need quotes.

---

### Invalid status filter

**Error:**
```json
{
  "error": {
    "message": "status must be \"open\" or \"closed\""
  }
}
```

**Solution:** Use `status=open` or `status=closed`. No other values are accepted.

---

### Setting status on a reply

**Error:**
```json
{
  "error": {
    "message": "Cannot set status on a reply; replies do not have independent status"
  }
}
```

**Solution:** Only top-level comments have status. To resolve/close a thread, update the parent comment's status.

---

### Document not found when creating a comment

**Error:**
```json
{
  "error": {
    "message": "Document not found"
  }
}
```

**Solution:** If using `document` (ID) instead of `uri`, ensure the document exists first. Alternatively, use `uri` to auto-create the document.

---

### URI normalization differences

**Issue:** You created a document with `https://example.com/?b=2&a=1` but can't find it when querying with `https://example.com/?a=1&b=2`.

**Explanation:** URIs are automatically normalized (query params sorted, trailing slashes removed, etc.). Use the exact URI returned by the API or query by document ID instead.

---

## Notes

- All timestamps are in ISO 8601 format (UTC)
- IDs are opaque strings with prefixes (`doc_`, `cmt_`)
- HTML in request bodies is stripped for security
- URIs are normalized automatically (lowercased scheme/host, sorted query params, removed fragments)
