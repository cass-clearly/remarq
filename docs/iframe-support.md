# Iframe Support in Remarq

## Current Behavior

**Remarq cannot annotate content inside iframes**, regardless of origin.

## Why?

The feedback layer uses `document.querySelector()` to find the content root and Apache Annotator to describe/anchor text ranges. Both operate within a single document context and **cannot traverse into iframes**, which have separate `contentDocument` objects.

When you load Remarq on a page with iframes:
- ✅ Content in the **parent document** is annotatable
- ❌ Content **inside iframes** is not annotatable
- ✅ The presence of iframes does not break parent page annotations

## Same-Origin Iframes

Even when the iframe is from the same origin (same protocol, domain, and port), the DOM query APIs do not automatically search inside iframes.

**Current limitation:**
```javascript
// In index.js:
_root = document.querySelector(config.contentSelector) || document.body;

// This returns an element in the current document only.
// It does NOT search inside iframe.contentDocument
```

**What would be needed to support same-origin iframes:**
1. Detect iframes within the content root
2. Access `iframe.contentDocument` (only possible for same-origin)
3. Recursively search iframe DOMs when anchoring
4. Track which iframe each annotation belongs to
5. Serialize selectors to include iframe path (e.g., `iframe[0] > p:nth-child(2)`)
6. Re-anchor annotations by restoring iframe context on page load

This is **technically possible** but adds significant complexity to the anchoring and re-anchoring logic.

## Cross-Origin Iframes

Cross-origin iframes are blocked by the browser's **same-origin policy**. The parent page **cannot access** `iframe.contentDocument` or any content inside the iframe when:
- The iframe `src` is on a different domain
- The iframe uses a different protocol (http vs https)
- The iframe is on a different port

**Browser error:**
```
Uncaught DOMException: Blocked a frame with origin "http://localhost:3333" 
from accessing a cross-origin frame.
```

This is a **fundamental browser security restriction** and cannot be worked around without cooperation from the iframe source.

## Workarounds

### Option 1: Embed Remarq Inside the Iframe

If you need to annotate iframe content, add the Remarq script **inside the iframe's source document**:

```html
<!-- Inside the iframe source (iframe-content.html) -->
<!DOCTYPE html>
<html>
<head>
  <title>Annotatable Iframe Content</title>
</head>
<body>
  <p>This content can now be annotated!</p>
  
  <script src="feedback-layer.js" 
    data-api-url="http://localhost:3333"
    data-content-selector="body"
    data-document-id="iframe-doc-123"></script>
</body>
</html>
```

**Requirements:**
- You must control the iframe source (or coordinate with its owner)
- For cross-origin iframes, ensure CORS headers allow API communication
- Each iframe needs its own `data-document-id` to keep annotations separate

### Option 2: Load Content Without Iframes

If possible, load the embedded content directly into the parent page instead of using an iframe. This gives Remarq full access to the DOM.

### Option 3: Use Server-Side Rendering

If the iframe content is static or server-rendered, consider fetching it server-side and injecting it into the parent page's DOM instead of using an iframe.

## Testing

Test pages are included to verify iframe behavior:

**Same-origin test:**
```
http://localhost:3333/iframe-test.html
```
- Verify parent content is annotatable ✅
- Verify iframe content is not annotatable ❌

**Cross-origin test:**
```
http://localhost:3333/iframe-cross-origin-test.html
```
- Verify cross-origin iframe is inaccessible
- Verify browser console shows CORS/same-origin policy error if you inspect `iframe.contentDocument`

## Future Enhancement

Supporting **same-origin iframe annotation** could be added as a feature enhancement if there's demand. Implementation would require:

1. **Iframe detection** — scan for `<iframe>` elements in the content root
2. **Recursive DOM traversal** — extend Apache Annotator to search inside `iframe.contentDocument`
3. **Selector serialization** — include iframe path in selectors (e.g., `{"iframe": 0, "selector": {...}}`)
4. **Re-anchoring logic** — restore iframe context when re-anchoring on page load
5. **Complexity handling** — nested iframes, dynamic iframe content, iframe removal/reload

**Cross-origin support** is not feasible due to browser security restrictions. This will always require embedding Remarq inside the iframe source.

---

**Filed under:** Issue #59 - Test with iframes and embedded content
