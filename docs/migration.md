# Migration Guide: Switching to Remarq

This guide covers migrating annotations from other tools to Remarq, including data model mappings, edge cases, and step-by-step workflows.

## Supported Migration Paths

| Source Tool | Support Level | Script Provided |
|---|---|---|
| [Hypothesis](https://web.hypothes.is/) | Full | `tools/migrate-hypothesis.js` |
| [W3C Web Annotation](https://www.w3.org/TR/annotation-model/) | Full | `tools/migrate-w3c-annotation.js` |
| [Docdrop](https://docdrop.org/) | Via Hypothesis | Use the Hypothesis script (see [Docdrop section](#docdrop)) |

---

## Data Model Mappings

### Hypothesis to Remarq

Hypothesis and Remarq both use the [W3C TextQuoteSelector](https://www.w3.org/TR/annotation-model/#text-quote-selector) for text anchoring, so the core data maps cleanly.

| Hypothesis Field | Remarq Field | Notes |
|---|---|---|
| `target[0].selector` (TextQuoteSelector) `.exact` | `quote` | Direct mapping |
| `target[0].selector` (TextQuoteSelector) `.prefix` | `prefix` | Direct mapping |
| `target[0].selector` (TextQuoteSelector) `.suffix` | `suffix` | Direct mapping |
| `text` | `body` | Comment content |
| `user_info.display_name` | `author` | Falls back to `user` (acct:name@authority) if display name unavailable |
| `target[0].source` | `uri` | Document URL; Remarq normalizes URIs automatically |
| `references` | `parent` | Array of ancestor IDs; first element is the root. See [Thread Reconstruction](#thread-reconstruction) |
| `tags` | _(dropped)_ | No direct equivalent in Remarq. Appended to body if `--include-tags` flag is used |
| _(none)_ | `status` | Defaults to `"open"`. Hypothesis has no native status concept |

**Example mapping:**

```
Hypothesis annotation:
{
  "id": "abc123",
  "text": "This paragraph needs a citation.",
  "user": "acct:alice@hypothes.is",
  "user_info": { "display_name": "Alice" },
  "target": [{
    "source": "https://example.com/paper.html",
    "selector": [
      { "type": "TextQuoteSelector", "exact": "climate change accelerates", "prefix": "research shows ", "suffix": " beyond predictions" },
      { "type": "TextPositionSelector", "start": 1024, "end": 1050 }
    ]
  }],
  "tags": ["needs-citation"],
  "references": [],
  "created": "2024-06-15T10:30:00Z"
}

Remarq comment:
{
  "uri": "https://example.com/paper.html",
  "quote": "climate change accelerates",
  "prefix": "research shows ",
  "suffix": " beyond predictions",
  "body": "This paragraph needs a citation.",
  "author": "Alice"
}
→ Created with status: "open", parent: null
```

### W3C Web Annotation to Remarq

The [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/) is the standard both Hypothesis and Remarq draw from. Annotations using TextQuoteSelector map directly.

| W3C Field | Remarq Field | Notes |
|---|---|---|
| `target.selector` (TextQuoteSelector) `.exact` | `quote` | Direct mapping |
| `target.selector` (TextQuoteSelector) `.prefix` | `prefix` | Direct mapping |
| `target.selector` (TextQuoteSelector) `.suffix` | `suffix` | Direct mapping |
| `body[0].value` or `body.value` | `body` | First body with `type: "TextualBody"` is used |
| `creator.name` or `creator` | `author` | String or object with `.name` |
| `target.source` or `target` (if string) | `uri` | Document URL |
| _(none)_ | `status` | Defaults to `"open"` |
| _(none)_ | `parent` | W3C model has no native threading; all annotations are root comments |

**Example mapping:**

```
W3C Web Annotation:
{
  "@context": "http://www.w3.org/ns/anno.jsonld",
  "type": "Annotation",
  "body": {
    "type": "TextualBody",
    "value": "This section is unclear.",
    "format": "text/plain"
  },
  "target": {
    "source": "https://example.com/spec.html",
    "selector": {
      "type": "TextQuoteSelector",
      "exact": "the process is deterministic",
      "prefix": "In all cases, ",
      "suffix": " and reproducible."
    }
  },
  "creator": { "type": "Person", "name": "Bob" }
}

Remarq comment:
{
  "uri": "https://example.com/spec.html",
  "quote": "the process is deterministic",
  "prefix": "In all cases, ",
  "suffix": " and reproducible.",
  "body": "This section is unclear.",
  "author": "Bob"
}
→ Created with status: "open", parent: null
```

### Docdrop

[Docdrop](https://docdrop.org/) is a document hosting service that uses Hypothesis for its annotation layer. Docdrop does not expose its own annotation API or export format.

**To migrate Docdrop annotations**, use the Hypothesis migration script — your Docdrop annotations are stored in Hypothesis and accessible through the Hypothesis API. Use the Docdrop document URL as the `--document-uri` argument.

---

## Edge Cases

### Content Drift

When the annotated text has changed since the annotation was created, annotations may fail to re-anchor on the target document. This is inherent to text-based anchoring — it's not a migration issue, it's a content issue.

**What happens:** The `quote` text no longer exists at the expected location. Remarq stores the annotation with the original `quote`, `prefix`, and `suffix` values. The feedback layer's anchoring logic (via Apache Annotator) will attempt fuzzy matching, but if the text has changed significantly, the highlight won't appear.

**What to do:**
- After migration, load the target document with Remarq to verify annotations anchor correctly
- Annotations that don't anchor are still accessible via the API — they just won't have visible highlights
- Manually review orphaned annotations and update `quote`/`prefix`/`suffix` if needed

### Thread Reconstruction

Hypothesis stores reply chains using a `references` array — each reply contains the IDs of all its ancestors, with the root annotation's ID first.

```
Root annotation:    { id: "root1", references: [] }
  Reply to root:    { id: "reply1", references: ["root1"] }
    Reply to reply: { id: "reply2", references: ["root1", "reply1"] }
```

Remarq uses a simpler `parent` field pointing to the root comment. The migration script handles this by:

1. Processing annotations sorted by creation time (roots first)
2. For each reply, mapping `references[0]` (the root annotation) to the corresponding Remarq comment ID
3. If the root annotation hasn't been migrated yet (e.g., it was deleted), the reply is created as a new root comment with a note in the body

### Status Mapping

Hypothesis has no native concept of "resolved" or "closed" annotations. All migrated annotations default to `status: "open"`.

If you used Hypothesis tags to track resolution (e.g., a `resolved` tag), you can close these after migration:

```bash
# After migration, close resolved comments via the API
curl -X PATCH http://localhost:3333/comments/COMMENT_ID \
  -H "Content-Type: application/json" \
  -d '{"status": "closed"}'
```

### Document URI Normalization

Remarq normalizes URIs automatically (lowercases scheme/host, upgrades HTTP to HTTPS, strips tracking params, removes fragments, sorts query params). This means:

- `http://example.com/page?utm_source=twitter#section` and `https://example.com/page` resolve to the **same document**
- Annotations from different URL variations will be grouped together automatically
- No manual URI cleanup is needed before migration

---

## Step-by-Step Migration Workflow

### From Hypothesis

**Prerequisites:**
- A Hypothesis API key ([get one here](https://hypothes.is/account/developer))
- Your Hypothesis username
- A running Remarq instance

**Steps:**

#### 1. Export and migrate annotations

```bash
# Dry run — preview what will be migrated (no data written)
node tools/migrate-hypothesis.js \
  --hypothesis-api-key YOUR_API_KEY \
  --hypothesis-user YOUR_USERNAME \
  --remarq-url http://localhost:3333 \
  --document-uri https://example.com/doc.html \
  --dry-run

# Run the migration
node tools/migrate-hypothesis.js \
  --hypothesis-api-key YOUR_API_KEY \
  --hypothesis-user YOUR_USERNAME \
  --remarq-url http://localhost:3333 \
  --document-uri https://example.com/doc.html
```

**Options:**

| Flag | Required | Description |
|---|---|---|
| `--hypothesis-api-key` | Yes | Your Hypothesis developer API key |
| `--hypothesis-user` | Yes | Your Hypothesis username |
| `--remarq-url` | Yes | Base URL of your Remarq instance |
| `--document-uri` | No | Migrate annotations for a specific document only. If omitted, migrates all annotations for the user. |
| `--dry-run` | No | Preview migration without creating any comments |
| `--include-tags` | No | Append Hypothesis tags to comment body (e.g., `[tags: review, important]`) |

#### 2. Verify annotations

Load the target document with the Remarq script tag and confirm annotations appear correctly. Check the API for any annotations that didn't anchor:

```bash
curl "http://localhost:3333/comments?uri=https://example.com/doc.html" | jq '.data | length'
```

#### 3. Review migration errors

If any annotations failed to migrate, the script writes details to `migration-errors.json` in the working directory:

```json
[
  {
    "hypothesisId": "abc123",
    "error": "Request failed: 400 Bad Request",
    "annotation": { "text": "...", "uri": "..." }
  }
]
```

### From W3C Web Annotation JSON

**Prerequisites:**
- A JSON file containing W3C Web Annotation format annotations (single annotation or array)
- A running Remarq instance

**Steps:**

#### 1. Export annotations from your source tool

Most W3C-compliant annotation tools provide a JSON export. Save it to a file.

#### 2. Run the migration

```bash
# Dry run
node tools/migrate-w3c-annotation.js \
  --input annotations.json \
  --remarq-url http://localhost:3333 \
  --dry-run

# Run the migration
node tools/migrate-w3c-annotation.js \
  --input annotations.json \
  --remarq-url http://localhost:3333
```

**Options:**

| Flag | Required | Description |
|---|---|---|
| `--input` | Yes | Path to JSON file with W3C Web Annotation data |
| `--remarq-url` | Yes | Base URL of your Remarq instance |
| `--dry-run` | No | Preview migration without creating any comments |

#### 3. Verify and review

Same as the Hypothesis workflow — load documents, check anchoring, review `migration-errors.json`.

### From Docdrop

Use the Hypothesis migration workflow. Your Docdrop annotations are stored in Hypothesis, so you just need your Hypothesis API key and the document URI from Docdrop.

```bash
node tools/migrate-hypothesis.js \
  --hypothesis-api-key YOUR_API_KEY \
  --hypothesis-user YOUR_USERNAME \
  --remarq-url http://localhost:3333 \
  --document-uri https://docdrop.org/video/VIDEO_ID
```

---

## Programmatic Migration

If you need to migrate from a tool not listed here, the Remarq API is straightforward. Here's the minimum you need:

```bash
# Create a comment
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "uri": "https://example.com/page.html",
    "quote": "exact text that was highlighted",
    "prefix": "text before the highlight",
    "suffix": "text after the highlight",
    "body": "Your comment here",
    "author": "Commenter Name"
  }'

# Create a reply
curl -X POST http://localhost:3333/comments \
  -H "Content-Type: application/json" \
  -d '{
    "body": "Reply text",
    "author": "Another Person",
    "parent": "cmt_PARENT_ID",
    "uri": "https://example.com/page.html"
  }'
```

See the [API Reference](../README.md#api-reference) for the full specification.
