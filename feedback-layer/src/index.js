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

import { setBaseUrl, fetchAnnotations, createAnnotation, updateAnnotation, deleteAnnotation, resolveAnnotation } from "./api.js";
import { selectorFromRange, rangeFromSelector } from "./anchoring.js";
import {
  highlightRange,
  removeHighlights,
  removeAllHighlights,
  setHighlightClickHandler,
  setActiveHighlight,
} from "./highlights.js";
import {
  createSidebar,
  showCommentForm,
  renderAnnotations,
  focusAnnotationCard,
  openSidebar,
  getCommenter,
} from "./sidebar.js";
import { initAuthorUI } from "./ui.js";

let _root = null;      // content root element
let _docUri = null;     // canonical URI for this document
let _annotations = [];  // current annotation list
let _pendingSelector = null; // selector awaiting comment submission
let _tooltip = null;    // the "Annotate" tooltip element
let _anchoredIds = new Set();  // Track successfully anchored annotations
let _annotationRanges = new Map();  // Map annotation ID to its range for position sorting

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

  /**
   * Wait for Mermaid diagrams to finish rendering.
   * Mermaid renders asynchronously, so we need to wait before anchoring annotations.
   */
  async function waitForMermaid() {
    // Check if Mermaid is present on the page
    if (typeof window.mermaid === 'undefined') {
      return; // No Mermaid, continue immediately
    }

    // Check if there are any Mermaid diagrams to render
    const mermaidElements = document.querySelectorAll('.mermaid');
    if (mermaidElements.length === 0) {
      return; // No diagrams, continue immediately
    }

    console.log('[feedback-layer] Waiting for Mermaid to finish rendering...');

    // Wait for Mermaid to render all diagrams
    try {
      await window.mermaid.run();
      console.log('[feedback-layer] Mermaid rendering complete');
    } catch (err) {
      console.warn('[feedback-layer] Error waiting for Mermaid:', err);
      // Continue anyway - don't block the feedback layer
    }
  }

  const boot = async () => {
    _root = document.querySelector(config.contentSelector) || document.body;
    _docUri = config.documentUri || window.location.origin + window.location.pathname;

    // Sidebar
    createSidebar({
      onSubmit: handleCommentSubmit,
      onDelete: handleDelete,
      onResolve: handleResolve,
      onReply: handleReply,
      onEdit: handleEdit,
    });

    // Highlight click → scroll sidebar to card
    setHighlightClickHandler((id) => {
      openSidebar();
      focusAnnotationCard(id);
      setActiveHighlight(id);
    });

    // Text selection → "Annotate" tooltip
    setupSelectionListener();

    // Wait for Mermaid to finish rendering before anchoring annotations
    await waitForMermaid();

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
    const anchored = await anchorAll(_annotations);
    _anchoredIds = anchored;
    renderAnnotations(_annotations, _anchoredIds, _annotationRanges);
  } catch (err) {
    console.error("[feedback-layer] Failed to load annotations:", err);
  }
}

async function anchorAll(annotations) {
  // Clean slate: remove all existing highlights before re-anchoring
  removeAllHighlights();

  const anchored = new Set();
  _annotationRanges.clear();

  for (const ann of annotations) {
    // Skip replies - they don't have text anchors
    if (ann.parent_id) continue;

    try {
      const range = await rangeFromSelector(
        { exact: ann.quote, prefix: ann.prefix, suffix: ann.suffix },
        _root
      );

      if (range && !ann.resolved) {
        highlightRange(range, ann.id);
        anchored.add(ann.id);
        _annotationRanges.set(ann.id, range);
      } else if (range && ann.resolved) {
        // Track as anchored even if resolved (for unresolve functionality)
        anchored.add(ann.id);
        _annotationRanges.set(ann.id, range);
      }
    } catch (e) {
      console.warn(`[feedback-layer] Could not anchor annotation ${ann.id}:`, e);
    }
  }

  return anchored;
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
  _tooltip.textContent = "✎ Annotate";
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

    // Anchor and highlight the new annotation
    const range = await rangeFromSelector(
      { exact: ann.quote, prefix: ann.prefix, suffix: ann.suffix },
      _root
    );
    if (range) {
      highlightRange(range, ann.id);
      _anchoredIds.add(ann.id);
    }

    renderAnnotations(_annotations, _anchoredIds, _annotationRanges);

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

    if (resolved) {
      removeHighlights(annotationId);
    } else {
      // Re-anchor the highlight when unresolving
      const ann = updated;
      const range = await rangeFromSelector(
        { exact: ann.quote, prefix: ann.prefix, suffix: ann.suffix },
        _root
      );
      if (range) {
        highlightRange(range, ann.id);
        _anchoredIds.add(ann.id);
      } else {
        // Text no longer exists, remove from anchored set
        _anchoredIds.delete(ann.id);
      }
    }

    renderAnnotations(_annotations, _anchoredIds, _annotationRanges);
  } catch (err) {
    console.error("[feedback-layer] Failed to resolve annotation:", err);
  }
}

async function handleReply({ parent_id, comment, commenter }) {
  try {
    const reply = await createAnnotation({
      uri: _docUri,
      comment,
      commenter,
      parent_id,
    });
    _annotations.push(reply);
    renderAnnotations(_annotations, _anchoredIds, _annotationRanges);
  } catch (err) {
    console.error("[feedback-layer] Failed to create reply:", err);
    alert("Failed to save reply: " + err.message);
  }
}

async function handleEdit(annotationId, comment) {
  try {
    const updated = await updateAnnotation(annotationId, { comment });
    const idx = _annotations.findIndex((a) => a.id === annotationId);
    if (idx !== -1) _annotations[idx] = updated;
    renderAnnotations(_annotations, _anchoredIds, _annotationRanges);
  } catch (err) {
    console.error("[feedback-layer] Failed to edit annotation:", err);
    alert("Failed to update comment: " + err.message);
  }
}

async function handleDelete(annotationId) {
  try {
    await deleteAnnotation(annotationId);
    removeHighlights(annotationId);
    _anchoredIds.delete(annotationId);
    _annotations = _annotations.filter(
      (a) => a.id !== annotationId && a.parent_id !== annotationId
    );
    renderAnnotations(_annotations, _anchoredIds, _annotationRanges);
  } catch (err) {
    console.error("[feedback-layer] Failed to delete annotation:", err);
  }
}

init();
