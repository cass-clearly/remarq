/**
 * Highlight rendering and management.
 *
 * Creates <mark> elements around anchored text ranges
 * and handles click-to-select for scrolling the sidebar to the comment.
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
export function highlightRange(range, commentId) {
  const marks = [];

  // If the range is within a single text node, simple wrap
  if (
    range.startContainer === range.endContainer &&
    range.startContainer.nodeType === Node.TEXT_NODE
  ) {
    const mark = wrapTextRange(range, commentId);
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
        marks.push(wrapTextRange(nodeRange, commentId));
      }
    }
  }

  return marks;
}

function wrapTextRange(range, commentId) {
  // Check if we're inside an SVG <text> element
  let node = range.commonAncestorContainer;
  while (node && node.nodeType !== Node.ELEMENT_NODE) {
    node = node.parentNode;
  }

  // Walk up to check if we're in SVG context
  let current = node;
  let inSVGText = false;
  let svgRoot = null;

  while (current) {
    // If we're in a foreignObject, we're in HTML context - safe to use marks
    if (current.tagName === 'foreignObject') {
      inSVGText = false;
      break;
    }
    // If we're in SVG text, we need SVG rect highlighting
    if (current.tagName === 'text' && current instanceof SVGElement) {
      inSVGText = true;
    }
    // Track the SVG root for creating rect overlays
    if (current.tagName === 'svg') {
      svgRoot = current;
    }
    current = current.parentElement;
  }

  // Use SVG rect highlighting for SVG text elements
  if (inSVGText && svgRoot) {
    return createSVGHighlight(range, commentId, svgRoot);
  }

  // Regular HTML highlighting for HTML content
  const mark = document.createElement("mark");
  mark.className = HIGHLIGHT_CLASS;
  mark.dataset.commentId = commentId;
  mark.style.backgroundColor = "rgba(255, 212, 0, 0.35)";
  mark.style.cursor = "pointer";
  mark.style.borderRadius = "2px";
  mark.addEventListener("click", () => {
    if (_onHighlightClick) _onHighlightClick(commentId);
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
 * Create an SVG-compatible highlight using <rect> overlay.
 * Used for SVG <text> elements where HTML marks cannot be inserted.
 */
function createSVGHighlight(range, commentId, svgRoot) {
  try {
    const rects = range.getClientRects();
    if (rects.length === 0) return null;

    const svgNS = "http://www.w3.org/2000/svg";
    const ctm = svgRoot.getScreenCTM();
    if (!ctm) {
      console.warn('[feedback-layer] Could not get SVG transformation matrix');
      return null;
    }

    // Find the text element's parent group first (before creating rects)
    let insertNode = range.commonAncestorContainer;
    while (insertNode && insertNode.nodeType !== Node.ELEMENT_NODE) {
      insertNode = insertNode.parentNode;
    }

    let insertCurrent = insertNode;
    let textParentGroup = null;
    while (insertCurrent && insertCurrent !== svgRoot) {
      if (insertCurrent.tagName === 'text') {
        textParentGroup = insertCurrent.parentElement;
        break;
      }
      insertCurrent = insertCurrent.parentElement;
    }

    // Get the parent group's transform if it exists
    const targetGroup = textParentGroup || svgRoot;
    let parentCTM = ctm;
    if (targetGroup !== svgRoot && targetGroup.getScreenCTM) {
      parentCTM = targetGroup.getScreenCTM();
    }

    // Create a group to hold all highlight rectangles
    const group = document.createElementNS(svgNS, "g");
    group.setAttribute("class", HIGHLIGHT_CLASS);
    group.setAttribute("data-comment-id", commentId);
    group.style.cursor = "pointer";

    // Create a rect for each line of text
    for (let i = 0; i < rects.length; i++) {
      const clientRect = rects[i];
      const highlightRect = document.createElementNS(svgNS, "rect");

      // Convert client coordinates to parent group's coordinate space
      const topLeft = svgRoot.createSVGPoint();
      topLeft.x = clientRect.left;
      topLeft.y = clientRect.top;
      const localTopLeft = topLeft.matrixTransform(parentCTM.inverse());

      const width = clientRect.width / parentCTM.a;
      const height = clientRect.height / parentCTM.d;

      highlightRect.setAttribute("x", localTopLeft.x);
      highlightRect.setAttribute("y", localTopLeft.y);
      highlightRect.setAttribute("width", width);
      highlightRect.setAttribute("height", height);
      highlightRect.setAttribute("fill", "#ffd400");
      highlightRect.setAttribute("fill-opacity", "0.35");
      highlightRect.setAttribute("rx", "2");
      highlightRect.setAttribute("ry", "2");
      highlightRect.style.pointerEvents = "none"; // Let clicks pass through to text underneath

      group.appendChild(highlightRect);
    }

    // Insert into the target group (so it's in the same coordinate space)
    // Append to the end so it renders on top of backgrounds
    if (targetGroup && targetGroup !== svgRoot) {
      targetGroup.appendChild(group);
    } else {
      // Fallback: append to SVG root
      svgRoot.appendChild(group);
    }

    // Find the actual SVG text elements within the range and make them clickable
    let node = range.commonAncestorContainer;
    while (node && node.nodeType !== Node.ELEMENT_NODE) {
      node = node.parentNode;
    }

    // Walk up to find the SVG text element(s)
    const textElements = new Set();
    let current = node;
    while (current && current !== svgRoot) {
      if (current.tagName === 'text' && current instanceof SVGElement) {
        textElements.add(current);
        // Also check for tspan children
        const tspans = current.querySelectorAll('tspan');
        tspans.forEach(tspan => textElements.add(tspan));
      }
      current = current.parentElement;
    }

    // Add click handlers to the text elements
    const clickHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (_onHighlightClick) _onHighlightClick(commentId);
    };

    textElements.forEach(textEl => {
      textEl.style.cursor = "pointer";
      textEl.addEventListener("click", clickHandler);
      textEl.dataset.fbCommentId = commentId;
    });
    return group;
  } catch (e) {
    console.warn('[feedback-layer] Failed to create SVG highlight:', e);
    return null;
  }
}

/**
 * Remove all highlights for a given comment ID.
 */
export function removeHighlights(commentId) {
  const marks = document.querySelectorAll(
    `.${HIGHLIGHT_CLASS}[data-comment-id="${commentId}"]`
  );
  marks.forEach((mark) => {
    const parent = mark.parentNode;

    // SVG highlights (g elements) are overlays - just remove them
    if (mark.tagName === 'g' || mark instanceof SVGElement) {
      parent.removeChild(mark);
    } else {
      // HTML marks need unwrapping to preserve content
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
      parent.removeChild(mark);
      parent.normalize();
    }
  });

  // Also clean up SVG text elements that have click handlers
  const svgTextElements = document.querySelectorAll(`[data-fb-comment-id="${commentId}"]`);
  svgTextElements.forEach((el) => {
    delete el.dataset.fbCommentId;
    el.style.cursor = "";
  });
}

/**
 * Remove ALL highlights from the document (for all comments).
 * Use this before re-anchoring to ensure a clean slate.
 */
export function removeAllHighlights() {
  const marks = document.querySelectorAll(`.${HIGHLIGHT_CLASS}`);
  marks.forEach((mark) => {
    const parent = mark.parentNode;

    // SVG highlights (g elements) are overlays - just remove them
    if (mark.tagName === 'g' || mark instanceof SVGElement) {
      parent.removeChild(mark);
    } else {
      // HTML marks need unwrapping to preserve content
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
      parent.removeChild(mark);
      parent.normalize();
    }
  });
}

/**
 * Set the active (focused) highlight, removing active state from others.
 */
export function setActiveHighlight(commentId) {
  document.querySelectorAll(`.${HIGHLIGHT_CLASS}`).forEach((el) => {
    const isActive = el.dataset.commentId === commentId;
    const activeColor = "rgba(255, 180, 0, 0.55)";
    const normalColor = "rgba(255, 212, 0, 0.35)";

    if (isActive) {
      el.classList.add(ACTIVE_CLASS);
    } else {
      el.classList.remove(ACTIVE_CLASS);
    }

    // Handle SVG highlights (update fill on rect children)
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
 * Scroll the first highlight for a comment into view.
 */
export function scrollToHighlight(commentId) {
  const mark = document.querySelector(
    `.${HIGHLIGHT_CLASS}[data-comment-id="${commentId}"]`
  );
  if (mark) mark.scrollIntoView({ behavior: "smooth", block: "center" });
}

/**
 * Hide or show highlights for a closed/open comment.
 */
export function setHighlightResolved(commentId, resolved) {
  if (resolved) {
    removeHighlights(commentId);
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
