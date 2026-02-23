# Remarq API Reference

Base URL: `http://localhost:3333` (default)

All responses follow a Stripe-inspired resource pattern. Every object includes an `object` field identifying its type. List endpoints return `{ "object": "list", "data": [...] }`. Errors return `{ "error": { "message": "..." } }`.

---

## Health

### `GET /health`

Returns server status.

**Response:**

```json
{ "status": "ok" }
```

---

## Documents

### `GET /documents`

List all documents, ordered by creation date (ascending).

**Response:**

```json
{
  "object": "list",
  "data": [
    {
      "id": "doc_abc123",
      "object": "document",
      "uri": "https://example.com/page.html",
      "created_at": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

### `POST /documents`

Create or find a document by URI. Returns `201` if created, `200` if already exists. URIs are normalized (trailing slashes stripped, default ports removed, etc.).

**Request body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uri` | string | Yes | Document URI |

**Response:** Document object.

### `GET /documents/:id`

Retrieve a single document by ID.

**Response:** Document object. Returns `404` if not found.

### `DELETE /documents/:id`

Delete a document and all its comments. Returns the deleted document.

**Response:** Document object. Returns `404` if not found.

---

## Comments

### `GET /comments`

List comments. Supports filtering and expansion via query parameters.

**Query parameters:**

| Parameter | Description |
|-----------|-------------|
| `document` | Filter by document ID |
| `uri` | Filter by document URI (alternative to `document`) |
| `status` | Filter by status: `"open"` or `"closed"`. Returns matching root comments and all their replies. |
| `expand` | Set to `"document"` to hydrate the `document` field with the full document object instead of just the ID |

Parameters can be combined, e.g. `?document=doc_abc&status=open&expand=document`.

**Response:**

```json
{
  "object": "list",
  "data": [
    {
      "id": "cmt_xyz789",
      "object": "comment",
      "document": "doc_abc123",
      "quote": "selected text",
      "prefix": "text before",
      "suffix": "text after",
      "body": "This needs work",
      "author": "Alice",
      "status": "open",
      "parent": null,
      "created_at": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

> **Status is a thread-level concept.** Only root comments have status (`"open"` or `"closed"`). Replies always have `status: null`. The `?status=` filter matches root comments and includes all their replies.

### `POST /comments`

Create a comment. If no document exists for the given URI, one is created automatically.

**Request body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uri` | string | One of `uri` or `document` | Document URI (creates document if needed) |
| `document` | string | One of `uri` or `document` | Existing document ID |
| `quote` | string | Yes (root comments) | The highlighted text |
| `prefix` | string | No | Text before the quote (improves anchoring) |
| `suffix` | string | No | Text after the quote (improves anchoring) |
| `body` | string | Yes | Comment text |
| `author` | string | Yes | Author name |
| `parent` | string | No | Parent comment ID (makes this a reply) |

For replies, set `parent` to the parent comment's ID. Replies don't need `quote`, `prefix`, or `suffix`.

**Response:** `201` with the created comment object.

### `GET /comments/:id`

Retrieve a single comment. Supports `?expand=document`.

**Response:** Comment object. Returns `404` if not found.

### `PATCH /comments/:id`

Update a comment's body or status. Status can only be set on root comments (not replies).

**Request body:**

| Field | Type | Description |
|-------|------|-------------|
| `body` | string | New comment text |
| `status` | string | `"open"` or `"closed"` (root comments only) |

Setting `status` to `"closed"` triggers the `comment.resolved` webhook event.

**Response:** Updated comment object. Returns `404` if not found, `400` if setting status on a reply.

### `DELETE /comments/:id`

Delete a comment and all its replies. Triggers the `comment.deleted` webhook event.

**Response:** Deleted comment object. Returns `404` if not found.

---

## Webhooks

Register HTTP endpoints to receive notifications when comments are created, resolved, or deleted.

### Events

| Event | Triggered when |
|-------|----------------|
| `comment.created` | A new comment or reply is created |
| `comment.resolved` | A root comment's status is set to `"closed"` |
| `comment.deleted` | A comment is deleted |

### Payload format

Standard webhook payloads are delivered as `POST` requests:

```json
{
  "event": "comment.created",
  "created_at": "2025-01-01T00:00:00.000Z",
  "data": {
    "comment": { /* comment object */ }
  }
}
```

Payloads are signed with HMAC-SHA256 using the webhook's secret. The signature is sent in the `X-Remarq-Signature` header.

**Verifying signatures:**

```js
const crypto = require("crypto");
const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
if (signature !== expected) throw new Error("Invalid signature");
```

### Platform-specific formatting

Slack and Discord webhook URLs are auto-detected and receive platform-native payloads:

- **Slack** (`hooks.slack.com`): Block Kit format with `text` and `blocks`
- **Discord** (`discord.com/api/webhooks`): Embed format with `title`, `description`, and `fields`

### Delivery

- 10-second timeout per delivery attempt
- 3 attempts with exponential backoff (1s, 2s, 4s)
- Fire-and-forget: webhook failures don't affect API responses

### `GET /webhooks`

List all registered webhooks.

**Response:**

```json
{
  "object": "list",
  "data": [
    {
      "id": "whk_abc123",
      "object": "webhook",
      "url": "https://hooks.slack.com/services/...",
      "events": ["comment.created", "comment.resolved"],
      "active": true,
      "created_at": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

> Note: The `secret` field is never returned in API responses.

### `POST /webhooks`

Register a new webhook.

**Request body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | Yes | Endpoint URL |
| `secret` | string | Yes | HMAC-SHA256 signing secret |
| `events` | string[] | Yes | Events to subscribe to |

**Response:** `201` with webhook object.

### `GET /webhooks/:id`

Retrieve a single webhook.

**Response:** Webhook object. Returns `404` if not found.

### `PATCH /webhooks/:id`

Update a webhook. All fields are optional.

**Request body:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | New endpoint URL |
| `events` | string[] | New event subscriptions |
| `active` | boolean | Enable or disable the webhook |

**Response:** Updated webhook object. Returns `404` if not found.

### `DELETE /webhooks/:id`

Delete a webhook.

**Response:** Deleted webhook object. Returns `404` if not found.
