/**
 * Feedback Layer — Entry Point
 *
 * Orchestrates: sidebar, text selection, annotation creation/loading, highlights.
 *
 * Usage:
 *   <script src="feedback-layer.js"
 *     data-api-url="http://localhost:3333"
 *     data-content-selector="article"
 *   ></script>
 */

import { setBaseUrl, fetchAnnotations, createAnnotation, deleteAnnotation, resolveAnnotation } from "./api.js";
import { selectorFromRange, rangeFromSelector } from "./anchoring.js";
import {
  highlightRange,
  removeHighlights,
  setHighlightClickHandler,
  setActiveHighlight,
  setHighlightResolved,
} from "./highlights.js";
import {
  createSidebar,
  showCommentForm,
  renderAnnotations,
  focusAnnotationCard,
  getCommenter,
} from "./sidebar.js";
import { initAuthorUI } from "./ui.js";

let _root = null;      // content root element
let _docUri = null;     // canonical URI for this document
let _annotations = [];  // current annotation list
let _pendingSelector = null; // selector awaiting comment submission
let _tooltip = null;    // the "Annotate" tooltip element

function init() {
  const scriptTag =
    document.currentScript ||
    document.querySelector('script[src*="feedback-layer"]');

  const config = {
    apiUrl: scriptTag?.dataset.apiUrl || "",
    contentSelector: scriptTag?.dataset.contentSelector || "body",
    documentUri: scriptTag?.dataset.documentUri || null,
    proxyUrl: scriptTag?.dataset.proxyUrl || null,
    model: scriptTag?.dataset.model || null,
  };

  setBaseUrl(config.apiUrl);

  const boot = () => {
    _root = document.querySelector(config.contentSelector) || document.body;
    _docUri = config.documentUri || window.location.origin + window.location.pathname;

    // Sidebar
    createSidebar({
      onSubmit: handleCommentSubmit,
      onDelete: handleDelete,
      onResolve: handleResolve,
    });

    // Highlight click → scroll sidebar to card
    setHighlightClickHandler((id) => {
      focusAnnotationCard(id);
      setActiveHighlight(id);
    });

    // Text selection → "Annotate" tooltip
    setupSelectionListener();

    // Load existing annotations
    loadAnnotations();

    // Author mode
    initAuthorUI(config, () => _annotations);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}

async function loadAnnotations() {
  try {
    _annotations = await fetchAnnotations(_docUri);
    renderAnnotations(_annotations);
    await anchorAll(_annotations);
  } catch (err) {
    console.error("[feedback-layer] Failed to load annotations:", err);
  }
}

async function anchorAll(annotations) {
  for (const ann of annotations) {
    try {
      const range = await rangeFromSelector(
        { exact: ann.quote, prefix: ann.prefix, suffix: ann.suffix },
        _root
      );
      if (range) {
        highlightRange(range, ann.id);
        if (ann.resolved) setHighlightResolved(ann.id, true);
      }
    } catch (e) {
      console.warn(`[feedback-layer] Could not anchor annotation ${ann.id}:`, e);
    }
  }
}

function setupSelectionListener() {
  document.addEventListener("mouseup", onSelectionChange);
  document.addEventListener("keyup", onSelectionChange);
}

function onSelectionChange() {
  // Short delay to let the selection finalize
  setTimeout(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) {
      removeTooltip();
      return;
    }

    const range = sel.getRangeAt(0);
    const text = range.toString().trim();
    if (!text || text.length < 3) {
      removeTooltip();
      return;
    }

    // Check the selection is inside our content root
    if (!_root.contains(range.commonAncestorContainer)) {
      removeTooltip();
      return;
    }

    showTooltip(range);
  }, 10);
}

function showTooltip(range) {
  removeTooltip();

  const rect = range.getBoundingClientRect();
  _tooltip = document.createElement("button");
  _tooltip.className = "fb-annotate-tooltip";
  _tooltip.textContent = "Annotate";
  _tooltip.style.top = window.scrollY + rect.top - 36 + "px";
  _tooltip.style.left =
    window.scrollX + rect.left + rect.width / 2 - 40 + "px";

  _tooltip.addEventListener("mousedown", async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;

    const selectedRange = sel.getRangeAt(0);
    try {
      _pendingSelector = await selectorFromRange(selectedRange, _root);
      showCommentForm(_pendingSelector.exact);
    } catch (err) {
      console.error("[feedback-layer] Failed to create selector:", err);
    }

    removeTooltip();
  });

  document.body.appendChild(_tooltip);
}

function removeTooltip() {
  if (_tooltip) {
    _tooltip.remove();
    _tooltip = null;
  }
}

async function handleCommentSubmit({ comment, commenter }) {
  if (!_pendingSelector) return;

  try {
    const ann = await createAnnotation({
      uri: _docUri,
      quote: _pendingSelector.exact,
      prefix: _pendingSelector.prefix,
      suffix: _pendingSelector.suffix,
      comment,
      commenter,
    });

    _annotations.push(ann);
    renderAnnotations(_annotations);

    // Anchor and highlight the new annotation
    const range = await rangeFromSelector(
      { exact: ann.quote, prefix: ann.prefix, suffix: ann.suffix },
      _root
    );
    if (range) highlightRange(range, ann.id);

    // Clear selection
    window.getSelection().removeAllRanges();
  } catch (err) {
    console.error("[feedback-layer] Failed to create annotation:", err);
    alert("Failed to save annotation: " + err.message);
  }

  _pendingSelector = null;
}

async function handleResolve(annotationId, resolved) {
  try {
    const updated = await resolveAnnotation(annotationId, resolved);
    const idx = _annotations.findIndex((a) => a.id === annotationId);
    if (idx !== -1) _annotations[idx] = updated;
    renderAnnotations(_annotations);
    setHighlightResolved(annotationId, resolved);
  } catch (err) {
    console.error("[feedback-layer] Failed to resolve annotation:", err);
  }
}

async function handleDelete(annotationId) {
  try {
    await deleteAnnotation(annotationId);
    removeHighlights(annotationId);
    _annotations = _annotations.filter((a) => a.id !== annotationId);
    renderAnnotations(_annotations);
  } catch (err) {
    console.error("[feedback-layer] Failed to delete annotation:", err);
  }
}

init();
