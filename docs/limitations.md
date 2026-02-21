# Limitations

This document describes known limitations of Remarq's annotation system.

## Canvas and WebGL Content

**TL;DR:** Text rendered inside `<canvas>` or WebGL elements **cannot be annotated**.

### Why

Remarq uses the [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/)'s `TextQuoteSelector` to anchor annotations to specific text passages. This selector type works by:

1. Traversing the DOM tree to find text nodes
2. Matching the selected text against the `exact` quote string
3. Using optional `prefix` and `suffix` context for disambiguation

Canvas and WebGL elements render pixels directly to a bitmap surface. The browser's rendering engine does _not_ create DOM text nodes for text drawn via Canvas 2D's `fillText()` or rendered as WebGL textures. From the DOM's perspective, a `<canvas>` element is a single leaf node with no traversable children.

Since `TextQuoteSelector` operates on the DOM, it cannot anchor to pixel-based content.

### Expected Behavior

- Attempting to select text rendered inside a canvas will **not** trigger Remarq's annotation button
- The sidebar and highlight system will function normally on the same page
- No errors or crashes should occur

### Testing

Test pages demonstrating this limitation:

- [`demos/test-canvas.html`](../demos/test-canvas.html) — HTML5 Canvas 2D rendering
- [`demos/test-webgl.html`](../demos/test-webgl.html) — WebGL 3D scene

Load these pages with Remarq enabled and verify:
- DOM text around the canvas _is_ annotatable
- Canvas-rendered content _is not_ annotatable
- No console errors appear

### Potential Future Enhancement

A coordinate-based annotation system could theoretically support canvas content by:

1. Allowing users to draw bounding boxes on the canvas surface
2. Storing annotations with `(x, y, width, height)` coordinates instead of text selectors
3. Rendering overlay highlights using a separate canvas layer or absolutely-positioned divs

This would require:
- A new selector type (not `TextQuoteSelector`)
- UI for drawing/editing bounding boxes
- Coordinate normalization to handle canvas size changes

**Status:** Out of scope for the initial release. If there's demand for annotating canvas-heavy applications (diagramming tools, games, data visualizations), this could be considered as a separate feature.

## Related

- **SVG text:** Annotatable (SVG text is DOM-based)
- **Images with OCR:** Not supported (no text nodes)
- **Dynamically loaded content:** See [Interactive Widgets](./interactive-widgets.md) (coming soon)
