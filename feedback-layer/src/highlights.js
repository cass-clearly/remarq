/**
 * Highlight rendering and management.
 *
 * Creates <mark> elements around anchored text ranges
 * and handles click-to-select for scrolling the sidebar to the annotation.
 */

const HIGHLIGHT_CLASS = "fb-highlight";
const ACTIVE_CLASS = "fb-highlight-active";
const RESOLVED_CLASS = "fb-highlight-resolved";

let _onHighlightClick = null;

export function setHighlightClickHandler(fn) {
  _onHighlightClick = fn;
}

/**
 * Wrap a Range in <mark> elements. Returns an array of the created marks
 * (may be multiple if the range spans multiple text nodes).
 */
export function highlightRange(range, annotationId) {
  const marks = [];

  // If the range is within a single text node, simple wrap
  if (
    range.startContainer === range.endContainer &&
    range.startContainer.nodeType === Node.TEXT_NODE
  ) {
    const mark = wrapTextRange(range, annotationId);
    marks.push(mark);
  } else {
    // Complex range spanning multiple nodes — collect text nodes in range
    const textNodes = getTextNodesInRange(range);
    for (let i = 0; i < textNodes.length; i++) {
      const node = textNodes[i];
      const nodeRange = document.createRange();

      if (node === range.startContainer) {
        nodeRange.setStart(node, range.startOffset);
        nodeRange.setEnd(node, node.textContent.length);
      } else if (node === range.endContainer) {
        nodeRange.setStart(node, 0);
        nodeRange.setEnd(node, range.endOffset);
      } else {
        nodeRange.selectNodeContents(node);
      }

      if (!nodeRange.collapsed) {
        marks.push(wrapTextRange(nodeRange, annotationId));
      }
    }
  }

  return marks;
}

function wrapTextRange(range, annotationId) {
  // Check if we're inside an SVG <text> element (not foreignObject HTML)
  let node = range.commonAncestorContainer;
  while (node && node.nodeType !== Node.ELEMENT_NODE) {
    node = node.parentNode;
  }

  // Walk up to check if we're in SVG <text> vs foreignObject HTML
  let current = node;
  let inSVGText = false;
  let svgRoot = null;

  while (current) {
    // If we hit a foreignObject, we're in HTML context - use regular marks
    if (current.tagName === 'foreignObject') {
      inSVGText = false;
      break;
    }
    // If we hit an SVG text element, we need SVG highlighting
    if (current.tagName === 'text' && current instanceof SVGElement) {
      inSVGText = true;
    }
    // Track the SVG root for later
    if (current.tagName === 'svg') {
      svgRoot = current;
    }
    current = current.parentElement;
  }

  // If inside SVG <text> element, use SVG-compatible highlighting
  if (inSVGText && svgRoot) {
    return createSVGHighlight(range, annotationId, svgRoot);
  }

  // Regular HTML highlighting
  const mark = document.createElement("mark");
  mark.className = HIGHLIGHT_CLASS;
  mark.dataset.annotationId = annotationId;
  mark.style.backgroundColor = "rgba(255, 212, 0, 0.35)";
  mark.style.cursor = "pointer";
  mark.style.borderRadius = "2px";
  mark.addEventListener("click", () => {
    if (_onHighlightClick) _onHighlightClick(annotationId);
  });

  try {
    range.surroundContents(mark);
  } catch (e) {
    console.warn('[feedback-layer] Failed to create highlight:', e);
    return null;
  }

  return mark;
}

/**
 * Create an SVG-compatible highlight using a <rect> element.
 */
function createSVGHighlight(range, annotationId, svgRoot) {
  try {
    // Get the bounding box of the selected text
    const rects = range.getClientRects();
    if (rects.length === 0) return null;

    const svgNS = "http://www.w3.org/2000/svg";

    // Get the SVG's CTM (Current Transformation Matrix) to convert screen to SVG coords
    const ctm = svgRoot.getScreenCTM();
    if (!ctm) {
      console.warn('[feedback-layer] Could not get SVG transformation matrix');
      return null;
    }

    // Create a group to hold all highlight rectangles for this annotation
    const group = document.createElementNS(svgNS, "g");
    group.setAttribute("class", HIGHLIGHT_CLASS);
    group.setAttribute("data-annotation-id", annotationId);
    group.style.cursor = "pointer";

    // Create a rect for each line of text
    for (let i = 0; i < rects.length; i++) {
      const clientRect = rects[i];
      const highlightRect = document.createElementNS(svgNS, "rect");

      // Convert client coordinates to SVG coordinates
      const topLeft = svgRoot.createSVGPoint();
      topLeft.x = clientRect.left;
      topLeft.y = clientRect.top;
      const svgTopLeft = topLeft.matrixTransform(ctm.inverse());

      const width = clientRect.width / ctm.a;
      const height = clientRect.height / ctm.d;

      highlightRect.setAttribute("x", svgTopLeft.x);
      highlightRect.setAttribute("y", svgTopLeft.y);
      highlightRect.setAttribute("width", width);
      highlightRect.setAttribute("height", height);
      highlightRect.setAttribute("fill", "yellow");
      highlightRect.setAttribute("fill-opacity", "0.5");
      highlightRect.setAttribute("stroke", "orange");
      highlightRect.setAttribute("stroke-width", "2");

      console.log('[feedback-layer] SVG highlight rect:', {
        clientRect: { x: clientRect.left, y: clientRect.top, width: clientRect.width, height: clientRect.height },
        svgCoords: { x: svgTopLeft.x, y: svgTopLeft.y, width, height },
        ctm: { a: ctm.a, d: ctm.d }
      });

      group.appendChild(highlightRect);
    }

    group.addEventListener("click", () => {
      if (_onHighlightClick) _onHighlightClick(annotationId);
    });

    // Find Mermaid's root group (or use svgRoot if not found)
    const mermaidRoot = svgRoot.querySelector('g.root');
    const insertTarget = mermaidRoot || svgRoot;

    // Insert at the beginning of the target so highlights appear behind text
    insertTarget.insertBefore(group, insertTarget.firstChild);

    console.log('[feedback-layer] Created SVG highlight with', rects.length, 'rectangles, inserted into', insertTarget.className || 'svg root');
    return group;
  } catch (e) {
    console.warn('[feedback-layer] Failed to create SVG highlight:', e);
    return null;
  }
}

/**
 * Remove all highlights for a given annotation ID.
 */
export function removeHighlights(annotationId) {
  const marks = document.querySelectorAll(
    `.${HIGHLIGHT_CLASS}[data-annotation-id="${annotationId}"]`
  );
  marks.forEach((mark) => {
    const parent = mark.parentNode;

    // SVG highlights (g elements) don't need unwrapping, just remove them
    if (mark.tagName === 'g' || mark instanceof SVGElement) {
      parent.removeChild(mark);
    } else {
      // HTML marks need unwrapping
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
      parent.removeChild(mark);
      parent.normalize();
    }
  });
}

/**
 * Remove ALL highlights from the document (for all annotations).
 * Use this before re-anchoring to ensure a clean slate.
 */
export function removeAllHighlights() {
  const marks = document.querySelectorAll(`.${HIGHLIGHT_CLASS}`);
  console.log('[feedback-layer] removeAllHighlights() called, removing', marks.length, 'highlights');
  marks.forEach((mark) => {
    const parent = mark.parentNode;

    // SVG highlights (g elements) don't need unwrapping, just remove them
    if (mark.tagName === 'g' || mark instanceof SVGElement) {
      console.log('[feedback-layer] Removing SVG highlight:', mark);
      parent.removeChild(mark);
    } else {
      // HTML marks need unwrapping
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
      parent.removeChild(mark);
      parent.normalize();
    }
  });
}

/**
 * Set the active (focused) highlight, removing active state from others.
 */
export function setActiveHighlight(annotationId) {
  document.querySelectorAll(`.${HIGHLIGHT_CLASS}`).forEach((el) => {
    const isActive = el.dataset.annotationId === annotationId;
    const activeColor = "rgba(255, 180, 0, 0.55)";
    const normalColor = "rgba(255, 212, 0, 0.35)";

    if (isActive) {
      el.classList.add(ACTIVE_CLASS);
    } else {
      el.classList.remove(ACTIVE_CLASS);
    }

    // Handle SVG highlights
    if (el.tagName === 'g' || el instanceof SVGElement) {
      const rects = el.querySelectorAll('rect');
      rects.forEach(rect => {
        rect.setAttribute('fill', isActive ? activeColor : normalColor);
      });
    } else {
      // Handle HTML highlights
      el.style.backgroundColor = isActive ? activeColor : normalColor;
    }
  });
}

/**
 * Scroll the first highlight for an annotation into view.
 */
export function scrollToHighlight(annotationId) {
  const mark = document.querySelector(
    `.${HIGHLIGHT_CLASS}[data-annotation-id="${annotationId}"]`
  );
  if (mark) mark.scrollIntoView({ behavior: "smooth", block: "center" });
}

/**
 * Update highlight style for resolved/unresolved state.
 */
/**
 * Hide or show highlights for a resolved/unresolved annotation.
 */
export function setHighlightResolved(annotationId, resolved) {
  if (resolved) {
    removeHighlights(annotationId);
  } else {
    // Re-anchoring is handled by the caller (index.js)
  }
}

/**
 * Collect all text nodes within a Range.
 */
function getTextNodesInRange(range) {
  const nodes = [];
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const nodeRange = document.createRange();
        nodeRange.selectNodeContents(node);
        if (
          range.compareBoundaryPoints(Range.END_TO_START, nodeRange) < 0 &&
          range.compareBoundaryPoints(Range.START_TO_END, nodeRange) > 0
        ) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      },
    }
  );
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
