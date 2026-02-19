# Remarq

Lightweight document annotation tool. Reviewers highlight text and leave threaded comments — no accounts needed, just enter a name. A built-in sidebar button sends all feedback to Claude for AI-assisted revision.

## Quick Start

### 1. Start the backend

Requires Docker.

```bash
git clone https://github.com/cass-clearly/remarq.git
cd remarq
docker compose -f docker-compose.remarq.yml up --build
```

This starts Postgres and the Remarq server on port 3333. For production, see [Production](#production) to set a secure database password.

### 2. Add to your page

Drop a single script tag into any HTML page:

```html
<script
  src="http://localhost:3333/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
></script>
```

That's it. The sidebar, text selection, highlights, and annotation UI are all handled automatically. Visit **http://localhost:3333** to try the built-in demo page.

## Configuration

Configure via `data-` attributes on the script tag:

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-api-url` | `""` (same origin) | URL of the Remarq backend |
| `data-content-selector` | `body` | CSS selector for the annotatable content area |
| `data-document-uri` | current page URL | Override the URI used to store/fetch annotations |

### Same-Origin vs Cross-Origin

**Same-origin (simplest):** If the backend serves your HTML files too (like the demo), you don't need `data-api-url` at all — it defaults to the same origin.

**Cross-origin:** If your pages are hosted elsewhere, point `data-api-url` to wherever the backend is running. The backend has CORS enabled for all origins.

## Production

### Docker Compose (recommended)

Create a `.env` file next to `docker-compose.remarq.yml`:

```
POSTGRES_PASSWORD=your-secure-password-here
```

Then start the stack:

```bash
docker compose -f docker-compose.remarq.yml up --build -d
```

The compose file reads `POSTGRES_PASSWORD` from the environment and passes it to both Postgres and the server. If no `.env` is present, it defaults to `remarq` — fine for local development, not for production. Avoid `@`, `/`, `:`, and `%` in the password (or URL-encode them) since it's interpolated into the database connection string.

### Direct (bring your own Postgres)

```bash
npx @csalvato/remarq-server
```

Or if cloning the repo:

```bash
npm install --prefix server
DATABASE_URL=postgres://user:pass@localhost:5432/remarq node server/index.js
```

If `DATABASE_URL` is not set, it defaults to `postgresql://postgres@localhost/postgres`. The server creates tables automatically on first start. Set the `PORT` environment variable to change the listen port (default 3333).

## AI Revision

Click the sparkle button in the sidebar header to generate a revision prompt. It:

1. Collects all annotations (with threaded replies)
2. Formats them into a structured revision prompt alongside the document HTML
3. Displays the prompt in a modal — copy and paste into Claude

## Features

- **No accounts** — reviewers just type their name
- **Text anchoring** — annotations are anchored to specific text passages using TextQuoteSelectors (via Apache Annotator), so highlights survive minor edits
- **Threaded replies** — reply to any annotation to create a discussion
- **Resolve/unresolve** — mark feedback as addressed; resolved annotations hide their highlights
- **Keyboard shortcuts** — Cmd+Enter (Ctrl+Enter on Windows) to submit comments and replies
- **Persistent storage** — PostgreSQL database via Docker
- **Drop-in integration** — one script tag on any HTML page

## API Reference

The API follows a Stripe-like resource pattern. All responses include an `object` field identifying the resource type.

### Documents

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/documents` | List all documents |
| `POST` | `/documents` | Create or find a document by URI |
| `GET` | `/documents/:id` | Retrieve a document |
| `DELETE` | `/documents/:id` | Delete a document and its comments |

### Comments

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/comments?document=<id>` | List comments by document ID |
| `GET` | `/comments?uri=<url>` | List comments by document URI |
| `POST` | `/comments` | Create a comment |
| `GET` | `/comments/:id` | Retrieve a comment |
| `PATCH` | `/comments/:id` | Update body or status |
| `DELETE` | `/comments/:id` | Delete a comment and its replies |

### POST /comments body

```json
{
  "uri": "https://example.com/doc.html",
  "quote": "selected text",
  "prefix": "text before",
  "suffix": "text after",
  "body": "This needs work",
  "author": "Alice",
  "parent": null
}
```

For replies, set `parent` to the parent comment's ID. Replies don't need `quote`/`prefix`/`suffix`.

## Project Structure

```
remarq/
├── package.json                 # Root: build + test scripts
├── docker-compose.remarq.yml   # Postgres + server (production)
├── server/
│   ├── package.json             # @csalvato/remarq-server — express, pg, cors
│   ├── Dockerfile               # Node 22 Alpine container
│   ├── index.js                 # API server + static file serving
│   ├── generate-id.js           # Prefixed ID generation (doc_*, cmt_*)
│   ├── normalize-uri.js         # URI normalization
│   ├── sanitize.js              # HTML sanitization
│   └── test.mjs                 # Unit + integration tests
├── feedback-layer/
│   ├── package.json             # @apache-annotator/dom, esbuild
│   ├── build.js                 # esbuild bundler config
│   └── src/
│       ├── index.js             # Entry point — orchestration
│       ├── api.js               # Backend API client
│       ├── anchoring.js         # Text selection ↔ selectors
│       ├── highlights.js        # Highlight rendering
│       ├── sidebar.js           # Sidebar UI
│       ├── prompt-builder.js    # Annotation → Claude prompt
│       └── ui.js                # AI revision modal
├── serve/
│   ├── index.html               # Demo page
│   └── feedback-layer.js        # Pre-built bundle (committed)
├── test-e2e.mjs                 # Puppeteer E2E tests
└── test.sh                      # Build + test runner
```

## Running Tests

Requires Docker (for Postgres).

```bash
# Server unit + integration tests
docker compose -f docker-compose.remarq.yml up -d postgres
DATABASE_URL=postgres://remarq:remarq@localhost:5433/remarq npm run test:server

# Full E2E (builds frontend, starts server, runs Puppeteer)
bash test.sh
```
