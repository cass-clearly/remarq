# Best Practices Guide

Practical patterns for deploying Remarq, configuring content selectors, integrating AI agents, running multi-reviewer workflows, and managing document lifecycles.

---

## Table of Contents

1. [Deployment](#deployment)
2. [Content Selector Strategies](#content-selector-strategies)
3. [Agent Integration Patterns](#agent-integration-patterns)
4. [Multi-Reviewer Workflows](#multi-reviewer-workflows)
5. [Document Lifecycle Management](#document-lifecycle-management)

---

## Deployment

### Solo use: npx

For individual users or quick evaluation, run the server directly with npx. You'll need a running PostgreSQL instance.

```bash
# Start with an existing Postgres
export DATABASE_URL=postgres://user:pass@localhost:5432/remarq
npx @csalvato/remarq-server
```

Or install and run manually:

```bash
npm install --prefix server
DATABASE_URL=postgres://user:pass@localhost:5432/remarq node server/index.js
```

This is ideal for local development or solo pair-writing with your AI agent.

### Team / production: Docker Compose

For teams or production deployments, Docker Compose bundles Postgres and the Remarq server together.

```bash
git clone https://github.com/cass-clearly/remarq.git
cd remarq
echo "POSTGRES_PASSWORD=a-strong-random-password" > .env
docker compose -f docker-compose.remarq.yml up --build -d
```

The `.env` file is read automatically by Docker Compose. Use a strong, random password — not `remarq`.

### Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URL` | `postgresql://postgres@localhost/postgres` | PostgreSQL connection string |
| `PORT` | `3333` | Port the server listens on |
| `POSTGRES_PASSWORD` | *(required in Docker)* | Password for the bundled Postgres container |

### Reverse proxy (HTTPS)

In production, put Remarq behind a reverse proxy that terminates TLS.

**Nginx:**

```nginx
server {
    listen 443 ssl;
    server_name remarq.example.com;

    ssl_certificate     /etc/letsencrypt/live/remarq.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/remarq.example.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3333;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Caddy** (automatic HTTPS):

```
remarq.example.com {
    reverse_proxy 127.0.0.1:3333
}
```

Then point your script tag at the public domain:

```html
<script
  src="https://remarq.example.com/feedback-layer.js"
  data-api-url="https://remarq.example.com"
  data-content-selector="article"
></script>
```

---

## Content Selector Strategies

The `data-content-selector` attribute determines which part of the page is annotatable. It takes any CSS selector. Choosing the right selector keeps annotations focused and avoids performance issues.

### Recommended patterns

**Blog posts and articles:**
```html
<script
  src="https://remarq.example.com/feedback-layer.js"
  data-api-url="https://remarq.example.com"
  data-content-selector="article"
></script>
```

**Documentation sites** (e.g., Docusaurus, MkDocs, custom):
```html
<!-- Target the main content area, not the sidebar or nav -->
<script
  src="https://remarq.example.com/feedback-layer.js"
  data-api-url="https://remarq.example.com"
  data-content-selector=".docs-content"
></script>
```

**Specific div by ID:**
```html
<script
  src="https://remarq.example.com/feedback-layer.js"
  data-api-url="https://remarq.example.com"
  data-content-selector="#contract-body"
></script>
```

### Avoid overly broad selectors

Using `data-content-selector="body"` (the default) makes the entire page annotatable — including navigation, headers, footers, and sidebars. This causes two problems:

1. **Noise:** Reviewers can accidentally annotate nav links, footer text, or UI chrome.
2. **Performance:** The text anchoring engine scans the entire DOM subtree of the selected element. Larger subtrees mean slower highlight rendering.

Always scope the selector to just the content you want reviewed.

### Testing your selector

Before deploying, open your browser's dev tools console and verify the selector matches the right element:

```js
document.querySelector("article")        // Should return your content element
document.querySelector(".docs-content")  // Should NOT return null
```

If it returns `null`, Remarq falls back to `document.body`.

### Multiple documents on the same domain

If you serve multiple pages from the same origin, use `data-document-uri` to give each page a stable identifier:

```html
<script
  src="https://remarq.example.com/feedback-layer.js"
  data-api-url="https://remarq.example.com"
  data-content-selector="article"
  data-document-uri="/docs/getting-started"
></script>
```

Without this, Remarq uses the current page URL (pathname). Setting it explicitly prevents issues when URLs change due to query parameters or routing.

---

## Agent Integration Patterns

Remarq's API is designed for AI agents to consume. Here are patterns for building the feedback loop.

### The core loop

1. Fetch open comments for a document
2. Build a prompt from the annotations
3. Have the agent revise the document
4. Resolve the comments via the API
5. Repeat until no open comments remain

### Python example

```python
import requests
import time

REMARQ_URL = "https://remarq.example.com"
DOCUMENT_URI = "https://example.com/docs/proposal.html"

def get_open_comments():
    """Fetch all unresolved annotations for a document."""
    resp = requests.get(f"{REMARQ_URL}/comments", params={
        "uri": DOCUMENT_URI,
        "status": "open",
    })
    resp.raise_for_status()
    return resp.json()["data"]

def resolve_comment(comment_id):
    """Mark a comment as resolved after addressing the feedback."""
    resp = requests.patch(f"{REMARQ_URL}/comments/{comment_id}", json={
        "status": "closed",
    })
    resp.raise_for_status()
    return resp.json()

def build_prompt(comments):
    """Format annotations into a structured prompt for the AI."""
    sections = []
    for c in comments:
        if c["parent"]:
            continue  # Skip replies; they're threaded under root comments
        # Find replies to this comment
        replies = [r for r in comments if r["parent"] == c["id"]]
        section = f'FEEDBACK on "{c["quote"]}":\n  {c["author"]}: {c["body"]}'
        for r in replies:
            section += f"\n  {r['author']}: {r['body']}"
        sections.append(section)
    return "\n\n".join(sections)

# --- Main loop ---
comments = get_open_comments()
if comments:
    prompt = build_prompt(comments)
    print(prompt)

    # >>> Pass `prompt` to your AI along with the document content.
    # >>> The AI revises the document based on the feedback.

    # After the agent has revised the document, resolve root comments:
    for c in comments:
        if not c["parent"]:
            resolve_comment(c["id"])
```

### JavaScript example

```js
const REMARQ_URL = "https://remarq.example.com";
const DOCUMENT_URI = "https://example.com/docs/proposal.html";

async function getOpenComments() {
  const url = new URL("/comments", REMARQ_URL);
  url.searchParams.set("uri", DOCUMENT_URI);
  url.searchParams.set("status", "open");
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch comments: ${res.status}`);
  const data = await res.json();
  return data.data;
}

async function resolveComment(commentId) {
  const res = await fetch(`${REMARQ_URL}/comments/${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "closed" }),
  });
  if (!res.ok) throw new Error(`Failed to resolve comment: ${res.status}`);
  return res.json();
}

function buildPrompt(comments) {
  const roots = comments.filter((c) => !c.parent);
  return roots
    .map((c) => {
      const replies = comments.filter((r) => r.parent === c.id);
      let section = `FEEDBACK on "${c.quote}":\n  ${c.author}: ${c.body}`;
      for (const r of replies) {
        section += `\n  ${r.author}: ${r.body}`;
      }
      return section;
    })
    .join("\n\n");
}

// --- Main loop ---
const comments = await getOpenComments();
if (comments.length > 0) {
  const prompt = buildPrompt(comments);
  console.log(prompt);

  // >>> Pass `prompt` to your AI along with the document content.
  // >>> The AI revises the document based on the feedback.

  // After the agent has revised the document, resolve root comments:
  for (const c of comments) {
    if (!c.parent) {
      await resolveComment(c.id);
    }
  }
}
```

### Prompt construction tips

The `build_prompt` function above produces output like this:

```
FEEDBACK on "quantum entanglement enables...":
  Sarah: Too technical for our audience
  Mike: Aim for 8th grade reading level

FEEDBACK on "In conclusion, the data suggests...":
  Sarah: This conclusion doesn't follow from the evidence above
```

This format works well because:
- The **quote** anchors the feedback to exact text, so the AI knows *where* to make changes
- **Threaded replies** provide additional context and consensus
- **Author names** let the AI attribute feedback (useful when reviewers have different roles)

You can enrich the prompt further by including the full document text alongside the annotations.

### Batch processing across documents

To process feedback across all documents at once:

```python
# Get all documents
docs = requests.get(f"{REMARQ_URL}/documents").json()["data"]

for doc in docs:
    comments = requests.get(f"{REMARQ_URL}/comments", params={
        "document": doc["id"],
        "status": "open",
    }).json()["data"]

    if not comments:
        continue

    prompt = build_prompt(comments)
    # Process each document's feedback...
```

### Error handling

Always handle network errors and non-2xx responses. The API returns errors in a consistent format:

```json
{
  "error": {
    "message": "Document not found"
  }
}
```

Retry transient failures (5xx, network errors) with exponential backoff. Don't retry client errors (4xx).

---

## Multi-Reviewer Workflows

### Author naming conventions

Since Remarq doesn't require accounts, author names are freeform. Establish conventions to keep feedback attributable:

- **Use real names or stable identifiers** — "Sarah Chen", not "reviewer1"
- **Prefix agent comments** — Use a consistent name like "Agent" or "Remarq Bot" so the team knows which comments came from the AI
- **Be consistent** — If someone comments as "Sarah" on one document and "S. Chen" on another, their feedback can't be tracked across documents

### Resolving vs. replying

Remarq has two distinct actions on a comment thread:

| Action | When to use |
|--------|-------------|
| **Reply** | Continue the discussion. Ask for clarification, push back, or add context. The thread stays open. |
| **Resolve** | The feedback has been addressed. The agent (or author) marks the root comment as `closed`. |

**Convention:** Only the person who *addressed* the feedback should resolve the comment. If the agent revised the document, the agent resolves. If a human manually fixed the issue, the human resolves.

### Team workflow: the review loop

A typical multi-reviewer cycle looks like this:

```
Draft 1 (agent writes)
  └─ Team reviews → leaves annotations
      └─ Agent reads open comments → revises → resolves
          └─ Draft 2
              └─ Team reviews again → new annotations on remaining issues
                  └─ Agent revises → resolves
                      └─ Final draft
```

Each round is explicit. The agent doesn't autonomously poll — you tell it when feedback is ready. This prevents the agent from revising while reviewers are still mid-review.

### Handling conflicting feedback

When reviewers disagree, the annotation thread captures the debate:

```
Sarah: "This section is too technical"
  Mike: "I think the technical detail is necessary for our engineering audience"
  Sarah: "Fair point, but can we add a plain-English summary at the top?"
  Mike: "That works"
```

Your agent's prompt should instruct it to look for *consensus in the thread* before acting. If there's no resolution, the agent can leave a reply asking for clarification instead of making a unilateral change.

Example prompt instruction:

> If reviewers disagree in a thread and haven't reached consensus, do NOT make the change. Instead, reply to the thread summarizing the disagreement and ask the team to resolve it.

To reply as the agent:

```bash
curl -X POST https://remarq.example.com/comments \
  -H "Content-Type: application/json" \
  -d '{
    "uri": "https://example.com/docs/proposal.html",
    "body": "Reviewers disagree on this point. Sarah wants a plain-English summary; Mike wants to keep the technical detail. Should I add a summary paragraph above the technical section?",
    "author": "Agent",
    "parent": "cmt_abc123"
  }'
```

---

## Document Lifecycle Management

### When to clear old annotations

Annotations are anchored to specific text using TextQuoteSelectors (via Apache Annotator). They survive minor edits, but major rewrites can orphan highlights. Clear annotations when:

- **You publish a new major version** of a document (v1 → v2)
- **The document is substantially rewritten** — enough that most anchors would break
- **A review cycle is complete** and you want a clean slate for the next round

To delete all comments for a document:

```bash
# Option 1: Delete the document (cascades to all its comments)
curl -X DELETE https://remarq.example.com/documents/doc_abc123

# The document will be automatically re-created when new comments are posted.
```

### Archiving completed reviews

Before clearing annotations, export them for your records:

```bash
# Export all comments (including resolved) for a document
curl "https://remarq.example.com/comments?uri=https://example.com/docs/proposal.html&expand=document" \
  -o review-archive-2026-02-21.json
```

This gives you a complete record of the feedback, including threaded discussions, author attribution, and the exact text that was annotated.

### URI versioning strategies

For versioned documents, use `data-document-uri` to separate annotation namespaces:

**Path-based versioning:**
```html
<!-- v1 annotations stay on v1 -->
<script ... data-document-uri="/docs/v1/proposal"></script>

<!-- v2 gets a clean slate -->
<script ... data-document-uri="/docs/v2/proposal"></script>
```

**Date-based versioning:**
```html
<script ... data-document-uri="/docs/proposal/2026-02-21"></script>
```

This way, old annotations remain accessible via the API (for archival) while the new version starts fresh.

### Maintaining annotation history

If you want to keep annotations visible across minor edits (typo fixes, formatting changes), don't change the `data-document-uri`. The text anchoring system is designed to handle small content changes gracefully.

Only create a new URI when the document has changed enough that existing annotations no longer make sense in context.
