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
| `data-default-color` | `null` (yellow) | Default highlight color for new comments. Accepts a preset name (`red`, `blue`, etc.) or a 6-digit hex code (`#ff6b6b`). |

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
| `PATCH` | `/comments/:id` | Update body, status, or color |
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
  "parent": null,
  "color": "red"
}
```

For replies, set `parent` to the parent comment's ID. Replies don't need `quote`/`prefix`/`suffix`.

### Highlight Colors

Comments support customizable highlight colors. Set `color` on `POST /comments` or update it later with `PATCH /comments/:id`. Colors are validated on both the client and server.

#### Preset names

| Name | Hex | Preview |
|------|-----|---------|
| `yellow` | `#ffd400` | Default highlight color |
| `red` | `#ff6b6b` | |
| `green` | `#51cf66` | |
| `blue` | `#339af0` | |
| `purple` | `#9775fa` | |
| `pink` | `#f06595` | |
| `orange` | `#ff922b` | |
| `teal` | `#20c997` | |

You can also pass any 6-digit hex code directly (e.g. `"#ff6b6b"`). The database enforces a CHECK constraint — values must be a preset name, a valid `#rrggbb` hex code, or `null`.

#### Usage from agents

Agents writing comments via the API can use colors to visually categorize feedback — for example, red for errors, blue for suggestions, green for approvals.

```bash
# Create a comment with a preset color
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{"uri":"https://example.com/doc.html","quote":"important text","body":"Needs revision","author":"agent","color":"red"}'

# Create a comment with a hex color
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{"uri":"https://example.com/doc.html","quote":"looks good","body":"Approved","author":"agent","color":"#51cf66"}'

# Update color on an existing comment
curl -X PATCH http://localhost:3333/comments/cmt_abc123 \
  -H "Content-Type: application/json" \
  -d '{"color":"blue"}'

# Clear color (revert to default)
curl -X PATCH http://localhost:3333/comments/cmt_abc123 \
  -H "Content-Type: application/json" \
  -d '{"color":null}'
```

If omitted, `color` defaults to `null` (the client uses yellow as the default highlight).

#### Client-side default color

Set a default highlight color for all new comments on a page using the `data-default-color` attribute on the script tag:

```html
<script
  src="http://localhost:3333/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
  data-default-color="blue"
></script>
```

Accepts any preset name or hex code. Users can still override the color per-comment using the color picker in the sidebar.

## Features

- **No accounts** — reviewers just type their name
- **Text anchoring** — annotations are anchored to specific text passages using TextQuoteSelectors (via Apache Annotator), so highlights survive minor edits
- **Threaded replies** — discuss any annotation
- **Resolve/unresolve** — mark feedback as addressed
- **Keyboard shortcuts** — full keyboard navigation for the sidebar
- **One script tag** — drop-in integration for any HTML page
- **Agent-ready API** — structured feedback your AI can consume and act on

## Documentation

- **[Best Practices Guide](docs/best-practices.md)** — Deployment configurations, content selector strategies, agent integration patterns, multi-reviewer workflows, and document lifecycle management.

## Keyboard Shortcuts

The following keyboard shortcuts are available (they are disabled when focus is in an input field, textarea, or contenteditable element):

| Key | Action |
|-----|--------|
| `s` | Toggle sidebar open/closed |
| `Esc` | Close the sidebar |
| `j` | Move to next comment thread |
| `k` | Move to previous comment thread |
| `Enter` | Reply to the focused comment thread |
| `Cmd+Enter` / `Ctrl+Enter` | Submit a comment or reply (when typing in a text field) |
| `?` | Toggle keyboard shortcuts help |

Press the `⌨` button in the sidebar header to see shortcuts at any time.

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
