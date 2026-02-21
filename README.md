<p align="center">
  <img src="docs/assets/remarq-wordmark-dark.png" alt="Remarq" width="300">
</p>

<h3 align="center">Google Docs comments are where feedback goes to die. We built the antidote.</h3>

Remarq is a lightweight document annotation tool for the agent era. Drop a single `<script>` tag into any HTML page — reviewers highlight text and leave threaded comments (no accounts needed). Then your AI agent polls the API, revises the document, and resolves comments automatically.

**The feedback loop isn't just faster. It's closed.**

---

## The Problem

You know the drill. Someone leaves a comment on your Google Doc: *"this is confusing."* Great. Now you get to:

1. Read all 47 comments
2. Interpret what each reviewer actually meant
3. Manually edit the document
4. Click "Resolve" on each one
5. Miss three of them
6. Get a passive-aggressive follow-up email

For a 50-page doc, that's hours of your life you'll never get back. And if you're copy-pasting feedback into ChatGPT? You're living in the stone age.

Google Docs is a word processor cosplaying as a collaboration tool. It was built in 2006. We can do better.

## The Solution

```
Reviewer highlights text → leaves comment → agent reads API → agent revises → agent resolves → done.
```

That's Remarq. Human judgment in, machine execution out. The feedback cycle is closed.

**Works for solo creators** pair-writing with their AI — you annotate, your agent revises — **or teams** with multiple reviewers feeding back into one agent loop. Same tool, same API, just different numbers of humans.

## Quick Start

### 1. Start the backend

```bash
git clone https://github.com/cass-clearly/remarq.git
cd remarq
echo "POSTGRES_PASSWORD=remarq" > .env
docker compose -f docker-compose.remarq.yml up --build
```

Backend runs on port 3333. Visit **http://localhost:3333** for the demo.

### 2. Add to any HTML page

```html
<script
  src="http://localhost:3333/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
></script>
```

**One script tag. That's the whole integration.** Works on any HTML page — your blog, your docs, your marketing site, your contracts. Not trapped in a proprietary editor.

### 3. Let your agent close the loop

```bash
# Get open feedback
curl "http://localhost:3333/comments?status=open&document=DOC_ID"

# Your agent gets structured annotations with exact text anchors,
# threaded replies, and author context. It knows exactly what to fix.
```

This is the superpower. Every other annotation tool treats comments as a human-to-human channel. Remarq treats them as **an API for your agent to consume.**

## Why Remarq

| | Google Docs | Remarq |
|---|---|---|
| **Feedback workflow** | Manual. Read → interpret → edit → resolve. Repeat 47 times. | Automated. Agent reads API → revises → resolves. |
| **Accounts required** | Google account for every reviewer | None. Type a name, start annotating. |
| **Works on** | Google Docs only | Any HTML page |
| **Data ownership** | Google's servers | Your server |
| **Integration** | Copy-paste into ChatGPT | `GET /comments?status=open` |
| **Built for** | 2006 | The agent era |

## Configuration

Configure via `data-` attributes on the script tag:

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-api-url` | `""` (same origin) | URL of the Remarq backend |
| `data-content-selector` | `body` | CSS selector for the annotatable content area |
| `data-document-uri` | current page URL | Override the URI used to store/fetch annotations |
| `data-theme` | `"auto"` | Color theme: `"auto"` (follows OS), `"dark"`, or `"light"` |

## Production

### Docker Compose (recommended)

Create a `.env` file next to `docker-compose.remarq.yml` (docker compose reads it automatically):

```
POSTGRES_PASSWORD=your-secure-password-here
```

```bash
docker compose -f docker-compose.remarq.yml up --build -d
```

### Direct (bring your own Postgres)

```bash
npx @csalvato/remarq-server
```

Or:

```bash
npm install --prefix server
DATABASE_URL=postgres://user:pass@localhost:5432/remarq node server/index.js
```

## API Reference

Stripe-inspired resource pattern. All responses include an `object` field. **Full documentation with request/response schemas, error codes, and curl examples: [docs/api.md](docs/api.md)**

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
| `GET` | `/comments` | List all comments |
| `GET` | `/comments?document=<id>` | List comments by document ID |
| `GET` | `/comments?uri=<url>` | List comments by document URI |
| `GET` | `/comments?status=open` | **The money endpoint.** Get all unresolved feedback. |
| `GET` | `/comments?expand=document` | Hydrate document objects inline |
| `POST` | `/comments` | Create a comment (set `parent` to reply to an existing comment) |
| `GET` | `/comments/:id` | Retrieve a comment |
| `PATCH` | `/comments/:id` | Update body or status (root comments only) |
| `DELETE` | `/comments/:id` | Delete a comment and its replies |

Status is a thread-level concept — only root comments have status (`"open"` or `"closed"`). Replies always have `status: null`. The `?status=` filter matches root comments and includes all their replies. Query params can be combined (e.g. `?document=<id>&status=open&expand=document`).

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

## Admin Dashboard

Remarq includes a built-in admin dashboard at `/admin` for managing documents and moderating comments.

### Setup

Set the `ADMIN_PASSWORD` environment variable to enable the dashboard:

```bash
ADMIN_PASSWORD=your-secret-password
```

Or add it to your `.env` file (see `.env.example`).

### Features

- **Document list** — view all documents with comment counts and last activity
- **Document detail** — see all annotations and threaded replies for a document
- **Comment moderation** — delete spam or inappropriate comments with a reason log
- **Moderation log** — all deletions are recorded with the original comment content, author, and reason
- **Session auth** — password-protected with CSRF protection on all actions
- **No JS framework** — server-rendered HTML with progressive enhancement

Visit `http://localhost:3333/admin` after starting the server.

## Features

- **No accounts** — reviewers just type their name
- **Text anchoring** — annotations are anchored to specific text passages using TextQuoteSelectors (via Apache Annotator), so highlights survive minor edits
- **Threaded replies** — discuss any annotation
- **Resolve/unresolve** — mark feedback as addressed
- **Keyboard shortcuts** — Cmd+Enter to submit
- **One script tag** — drop-in integration for any HTML page
- **Agent-ready API** — structured feedback your AI can consume and act on

## The Bottom Line

Your team's feedback shouldn't rot in a Google Docs sidebar. Build the agent loop. Close the feedback cycle. Ship faster.

```bash
git clone https://github.com/cass-clearly/remarq.git
cd remarq
echo "POSTGRES_PASSWORD=remarq" > .env
docker compose -f docker-compose.remarq.yml up --build
```

**Star the repo if you're tired of manually resolving comments.**

---

## Known Limitations

- **Canvas/WebGL content** — Remarq uses TextQuoteSelector to anchor annotations to DOM text nodes. Content rendered inside `<canvas>` elements (2D or WebGL) is a pixel buffer, not traversable text, so it cannot be selected or annotated.

---

## License

Remarq is dual-licensed:

- **Open Source** — [AGPL-3.0](./LICENSE). Free for individuals, self-hosters, and open source use. If you modify Remarq and make it available over a network, you must release your source code.
- **Commercial** — A separate commercial license is available for organizations that need to keep their code proprietary. See [COMMERCIAL.md](./COMMERCIAL.md) for details.

---

Built by [cass-clearly](https://github.com/cass-clearly)
