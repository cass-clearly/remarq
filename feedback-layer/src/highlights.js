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
  const mark = document.createElement("mark");
  mark.className = HIGHLIGHT_CLASS;
  mark.dataset.annotationId = annotationId;
  mark.style.backgroundColor = "rgba(255, 212, 0, 0.35)";
  mark.style.cursor = "pointer";
  mark.style.borderRadius = "2px";
  mark.addEventListener("click", () => {
    if (_onHighlightClick) _onHighlightClick(annotationId);
  });
  range.surroundContents(mark);
  return mark;
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
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize();
  });
}

/**
 * Remove ALL highlights from the document (for all annotations).
 * Use this before re-anchoring to ensure a clean slate.
 */
export function removeAllHighlights() {
  const marks = document.querySelectorAll(`.${HIGHLIGHT_CLASS}`);
  marks.forEach((mark) => {
    const parent = mark.parentNode;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize();
  });
}

/**
 * Set the active (focused) highlight, removing active state from others.
 */
export function setActiveHighlight(annotationId) {
  document.querySelectorAll(`.${HIGHLIGHT_CLASS}`).forEach((el) => {
    if (el.dataset.annotationId === annotationId) {
      el.style.backgroundColor = "rgba(255, 180, 0, 0.55)";
      el.classList.add(ACTIVE_CLASS);
    } else {
      el.style.backgroundColor = "rgba(255, 212, 0, 0.35)";
      el.classList.remove(ACTIVE_CLASS);
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
