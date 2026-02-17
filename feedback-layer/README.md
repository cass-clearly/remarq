# Remarq

Lightweight annotation and feedback layer for HTML documents. Add collaborative commenting, highlighting, and threaded discussions to any webpage.

![Remarq Demo](https://via.placeholder.com/800x400?text=Remarq+Demo)

## Features

✨ **Text Highlighting** - Select any text and add comments
💬 **Threaded Discussions** - Reply to annotations with nested conversations
✏️ **Edit Comments** - Update your feedback anytime
📍 **Document-Order Display** - Annotations appear in reading order
🎯 **Smart Anchoring** - Comments stay attached even when content changes
🔍 **Filter & Resolve** - Mark feedback as resolved, toggle visibility
⚡ **Zero Dependencies** - Just one script tag

## Quick Start

### Option 1: CDN (Easiest)

Just add one script tag to your HTML:

```html
<script
  src="https://unpkg.com/@csalvato/remarq@1/dist/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
></script>
```

### Option 2: NPM

```bash
npm install @csalvato/remarq
```

Copy the built file to your public directory:

```bash
cp node_modules/@csalvato/remarq/dist/feedback-layer.js public/
```

Then add to your HTML:

```html
<script
  src="/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
></script>
```

## Configuration

Configure via data attributes on the script tag:

| Attribute | Required | Default | Description |
|-----------|----------|---------|-------------|
| `data-api-url` | Yes | - | URL of your annotation server |
| `data-content-selector` | No | `"body"` | CSS selector for annotatable content |
| `data-document-uri` | No | `window.location.pathname` | Unique identifier for this document |

### Examples

**Annotate just the main article:**
```html
<script
  src="https://unpkg.com/@csalvato/remarq@1/dist/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
></script>
```

**Annotate a specific div:**
```html
<script
  src="https://unpkg.com/@csalvato/remarq@1/dist/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector=".content"
></script>
```

**Multiple documents on same domain:**
```html
<script
  src="https://unpkg.com/@csalvato/remarq@1/dist/feedback-layer.js"
  data-api-url="http://localhost:3333"
  data-content-selector="article"
  data-document-uri="/docs/getting-started"
></script>
```

## Annotation Server

Remarq requires a backend server to store annotations.

### Quick Start with the Example Server

Clone the repository and run the included server:

```bash
# Clone the repo
git clone https://github.com/cass-clearly/remarq.git
cd remarq/server

# Start the server
npm install
node index.js
```

The server runs on `http://localhost:3333` by default.

### API Endpoints

The server must implement these endpoints:

- `GET /api/annotations?uri={documentUri}` - Fetch annotations
- `POST /api/annotations` - Create annotation
- `PATCH /api/annotations/:id` - Update annotation
- `DELETE /api/annotations/:id` - Delete annotation

See the [API specification](./server/README.md) for details.

## Usage

1. **Select text** - Highlight any text in your document
2. **Click "Annotate"** - Add your comment
3. **View annotations** - Click highlights or open the sidebar
4. **Reply** - Click "Reply" to start a discussion
5. **Edit** - Click the pencil icon (✎) to edit comments
6. **Resolve** - Click the checkmark (✓) to mark as resolved

## Keyboard Shortcuts

- `Cmd+Enter` / `Ctrl+Enter` - Submit comment or reply

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Development

```bash
# Clone the repo
git clone https://github.com/cass-clearly/remarq.git
cd remarq/feedback-layer

# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run watch
```

## License

MIT © Your Name

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

## Credits

Built with:
- [Apache Annotator](https://annotator.apache.org/) - Text anchoring
- [esbuild](https://esbuild.github.io/) - Bundling
