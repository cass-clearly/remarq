# Interactive Widgets Compatibility

Remarq's text anchoring uses [TextQuoteSelector](https://www.w3.org/TR/annotation-model/#text-quote-selector) to find annotated text in the DOM. This document describes how Remarq handles common interactive UI patterns.

## Compatibility Matrix

| Pattern | Status | Notes |
|---------|--------|-------|
| Accordions | Works | Content must remain in DOM (hidden with CSS) |
| Tab panels | Works | All panels present in DOM, visibility toggled |
| Modals/dialogs | Works | Modal DOM must exist (can be hidden), must be within content root |
| Dropdown menus | Works | Menu items in DOM but hidden |
| Lazy-loaded content | Deferred | MutationObserver retries when content appears |
| Delayed rendering | Deferred | setTimeout/fetch — retries up to 10 times |
| Content removed from DOM | Unsupported | Annotations become orphaned |
| Cross-origin iframes | Unsupported | Blocked by same-origin policy |

## How It Works

### Immediate Anchoring (default)

When Remarq loads, it fetches all comments and tries to anchor each one by searching for its quoted text in the DOM:

1. `rangeFromSelector()` searches the content root for the exact text + prefix/suffix context
2. If found, a `<mark>` highlight is created around the matching range
3. If not found, the comment is shown as "orphaned" in the sidebar

### Deferred Anchoring (new)

For content that isn't in the DOM at load time (lazy-loaded, delayed rendering, SPA route changes):

1. Comments that fail initial anchoring are added to a **deferred queue**
2. A `MutationObserver` watches the content root for `childList` changes (subtree)
3. When DOM mutations are detected, retry is **debounced** (500ms) to batch rapid changes
4. Each queued comment gets up to **10 retry attempts** before being permanently marked as unanchored
5. The observer **disconnects automatically** when the queue is empty (no performance overhead)

## Recommendations for Page Authors

### Patterns That Work Out of the Box

- **CSS-hidden content** (`display: none`, `visibility: hidden`, `opacity: 0`): The text is still in the DOM, so anchoring works immediately. Accordions and tabs that toggle CSS classes are fully compatible.

- **Modals within the content root**: If the modal element is inside the element matched by `data-content-selector`, annotations work. Modals appended to `<body>` outside the content root will not be annotable.

### Patterns That Require Deferred Anchoring

- **Content injected after page load**: Fetch + append, React lazy components, infinite scroll. Deferred anchoring handles these automatically.

- **Delayed rendering**: Content that appears after `setTimeout` or `requestAnimationFrame`. The 500ms debounce accommodates typical render delays.

### Patterns That Don't Work

- **Content removed from DOM**: If an element is deleted (not just hidden), its annotations become orphaned. Re-adding the same text will trigger deferred anchoring to re-anchor them.

- **Virtual scrolling**: Content outside the scroll viewport is often removed from the DOM entirely. Annotations on virtualized content will repeatedly fail to anchor.

- **Cross-origin iframes**: Same-origin policy prevents accessing text inside iframes from different domains.

## Testing

Use the demo page at `demo/interactive-widgets.html` to test each pattern:

1. Start the Remarq server: `npm start`
2. Open `demo/interactive-widgets.html` in a browser
3. For each widget type:
   - Annotate visible text
   - Toggle visibility (collapse accordion, switch tabs, etc.)
   - Reload the page and verify annotations re-anchor
4. For dynamic content:
   - Create an annotation on the dynamic text
   - Clear the content, then reload the page
   - Click "Load Content" — the deferred anchoring should pick up the annotation
