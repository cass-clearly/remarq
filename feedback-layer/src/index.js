/**
 * Feedback Layer — Entry Point
 *
 * Orchestrates: sidebar, text selection, comment creation/loading, highlights.
 *
 * Usage:
 *   <script src="feedback-layer.js"
 *     data-api-url="http://localhost:3333"
 *     data-content-selector="article"
 *     data-document-id="doc_abc123"
 *   ></script>
 *
 * When data-document-id is set, comments are keyed by document ID instead of
 * page URI. This keeps annotations stable when the host changes (e.g., local
 * dev → staging → production).
 */

import { setBaseUrl, setApiKey, fetchComments, fetchCommentHistory, createComment, updateComment, deleteComment, updateCommentStatus, addReaction, removeReaction, reorderComments } from "./api.js";
import { selectorFromRange, rangeFromSelector } from "./anchoring.js";
import {
  highlightRange,
  removeHighlights,
  removeAllHighlights,
  setHighlightClickHandler,
  setActiveHighlight,
  setDimmedHighlights,
} from "./highlights.js";
import {
  createSidebar,
  showCommentForm,
  renderComments,
  focusCommentCard,
  openSidebar,
  getCommenter,
  setAuthors,
  setSortMode,
  getSortMode,
} from "./sidebar.js";
import { initAuthorUI } from "./ui.js";
import { showToast } from "./toast.js";

let _root = null;      // content root element
let _docUri = null;     // canonical URI for this document
let _docId = null;      // stable document ID (from data-document-id)
let _comments = [];     // current comment list
let _pendingSelector = null; // selector awaiting comment submission
let _tooltip = null;    // the "Annotate" tooltip element
let _anchoredIds = new Set();  // Track successfully anchored comments
let _commentRanges = new Map();  // Map comment ID to its range for position sorting
let _matchedIds = null;  // Set of IDs matching active search, or null if no search
const SORT_MODE_KEY = "remarq-sort-mode-";

function init() {
  const scriptTag =
    document.currentScript ||
    document.querySelector('script[src*="feedback-layer"]');

  const config = {
    apiUrl: scriptTag?.dataset.apiUrl || "",
    contentSelector: scriptTag?.dataset.contentSelector || "body",
    documentUri: scriptTag?.dataset.documentUri || null,
    documentId: scriptTag?.dataset.documentId || null,
    proxyUrl: scriptTag?.dataset.proxyUrl || null,
    model: scriptTag?.dataset.model || null,
    theme: scriptTag?.dataset.theme || "auto",
    apiKey: scriptTag?.dataset.apiKey || null,
  };

  setBaseUrl(config.apiUrl);
  if (config.apiKey) setApiKey(config.apiKey);

  /**
   * Wait for Mermaid diagrams to finish rendering.
   * Mermaid renders asynchronously, so we need to wait before anchoring comments.
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
    try {
      _root = document.querySelector(config.contentSelector) || document.body;
      _docUri = config.documentUri || window.location.origin + window.location.pathname;
      _docId = config.documentId || null;

      // Set theme attribute on <html> for CSS variable scoping
      document.documentElement.dataset.remarqTheme = config.theme;

      // Sidebar
      createSidebar({
        onSubmit: handleCommentSubmit,
        onDelete: handleDelete,
        onResolve: handleResolve,
        onReply: handleReply,
        onEdit: handleEdit,
        onSearch: handleSearch,
        onReaction: handleReaction,
        onReorder: handleReorder,
        onFetchHistory: (id) => fetchCommentHistory(id),
      });

      // Restore sort mode from localStorage
      const docKey = _docId || _docUri;
      const savedSortMode = localStorage.getItem(SORT_MODE_KEY + docKey);
      if (savedSortMode === "custom") {
        setSortMode("custom");
      }

      // Highlight click → scroll sidebar to card
      setHighlightClickHandler((id) => {
        openSidebar();
        focusCommentCard(id);
        setActiveHighlight(id);
      });

      // Text selection → "Annotate" tooltip
      setupSelectionListener();

      // Wait for Mermaid to finish rendering before anchoring comments
      await waitForMermaid();

      // Load existing comments
      loadComments();

      // AI revision UI
      initAuthorUI(config, () => _comments);
    } catch (err) {
      console.error("[feedback-layer] Boot failed:", err);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}

async function loadComments() {
  try {
    const viewer = getCommenter() || undefined;
    _comments = await fetchComments(_docUri, _docId, { viewer });
    const anchored = await anchorAll(_comments);
    _anchoredIds = anchored;
    updateAuthors();
    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);
  } catch (err) {
    console.error("[feedback-layer] Failed to load comments:", err);
    showToast(`Failed to load comments: ${err.message}`, "error");
  }
}

function updateAuthors() {
  const authors = [...new Set(_comments.map(c => c.author))];
  setAuthors(authors);
}

async function anchorAll(comments) {
  // Clean slate: remove all existing highlights before re-anchoring
  removeAllHighlights();

  const anchored = new Set();
  _commentRanges.clear();

  for (const ann of comments) {
    // Skip replies - they don't have text anchors
    if (ann.parent) continue;

    try {
      const range = await rangeFromSelector(
        { exact: ann.quote, prefix: ann.prefix, suffix: ann.suffix },
        _root
      );

      if (range && ann.status !== 'closed') {
        highlightRange(range, ann.id, { isPrivate: ann.visibility === 'private' });
        anchored.add(ann.id);
        _commentRanges.set(ann.id, range);
      } else if (range && ann.status === 'closed') {
        // Track as anchored even if closed (for reopen functionality)
        anchored.add(ann.id);
        _commentRanges.set(ann.id, range);
      }
    } catch (e) {
      console.warn(`[feedback-layer] Could not anchor comment ${ann.id}:`, e);
    }
  }

  return anchored;
}

function setupSelectionListener() {
  document.addEventListener("mouseup", onSelectionChange);
  document.addEventListener("keyup", onSelectionChange);
  document.addEventListener("touchend", onSelectionChange);
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
  _tooltip.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>Comment';
  _tooltip.style.top = window.scrollY + rect.bottom + 8 + "px";
  _tooltip.style.left =
    window.scrollX + rect.left + rect.width / 2 - 40 + "px";

  const handleTooltipActivate = async (e) => {
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
  };

  _tooltip.addEventListener("mousedown", handleTooltipActivate);
  _tooltip.addEventListener("touchstart", handleTooltipActivate);

  document.body.appendChild(_tooltip);
}

function removeTooltip() {
  if (_tooltip) {
    _tooltip.remove();
    _tooltip = null;
  }
}

async function handleSearch(search, author) {
  if (!search && !author) {
    _matchedIds = null;
    renderComments(_comments, _anchoredIds, _commentRanges, null);
    setDimmedHighlights(new Set());
    return;
  }

  try {
    const viewer = getCommenter() || undefined;
    const filtered = await fetchComments(_docUri, _docId, { search, author, viewer });
    _matchedIds = new Set(filtered.map(c => c.id));
    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);

    const dimmedIds = new Set();
    for (const c of _comments) {
      if (!c.parent && _anchoredIds.has(c.id) && !_matchedIds.has(c.id)) {
        dimmedIds.add(c.id);
      }
    }
    setDimmedHighlights(dimmedIds);
  } catch (err) {
    console.error("[feedback-layer] Search failed:", err);
  }
}

async function handleCommentSubmit({ comment, commenter, visibility }) {
  if (!_pendingSelector) return;

  try {
    const ann = await createComment({
      uri: _docUri,
      document: _docId,
      quote: _pendingSelector.exact,
      prefix: _pendingSelector.prefix,
      suffix: _pendingSelector.suffix,
      body: comment,
      author: commenter,
      visibility,
    });

    _comments.push(ann);

    // Anchor and highlight the new comment
    const range = await rangeFromSelector(
      { exact: ann.quote, prefix: ann.prefix, suffix: ann.suffix },
      _root
    );
    if (range) {
      highlightRange(range, ann.id, { isPrivate: ann.visibility === 'private' });
      _anchoredIds.add(ann.id);
    }

    updateAuthors();
    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);

    // Clear selection
    window.getSelection().removeAllRanges();
  } catch (err) {
    console.error("[feedback-layer] Failed to create comment:", err);
    showToast(`Failed to save comment: ${err.message}`, "error");
  }

  _pendingSelector = null;
}

async function handleResolve(commentId, resolved) {
  try {
    const status = resolved ? "closed" : "open";
    const updated = await updateCommentStatus(commentId, status);
    const idx = _comments.findIndex((a) => a.id === commentId);
    if (idx !== -1) _comments[idx] = updated;

    if (resolved) {
      removeHighlights(commentId);
    } else {
      // Re-anchor the highlight when reopening
      const ann = updated;
      const range = await rangeFromSelector(
        { exact: ann.quote, prefix: ann.prefix, suffix: ann.suffix },
        _root
      );
      if (range) {
        highlightRange(range, ann.id, { isPrivate: ann.visibility === 'private' });
        _anchoredIds.add(ann.id);
      } else {
        // Text no longer exists, remove from anchored set
        _anchoredIds.delete(ann.id);
      }
    }

    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);
  } catch (err) {
    console.error("[feedback-layer] Failed to resolve comment:", err);
    showToast(`Failed to update comment: ${err.message}`, "error");
  }
}

async function handleReply({ parent_id, comment, commenter }) {
  try {
    const reply = await createComment({
      uri: _docUri,
      document: _docId,
      body: comment,
      author: commenter,
      parent: parent_id,
    });
    _comments.push(reply);
    updateAuthors();
    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);
  } catch (err) {
    console.error("[feedback-layer] Failed to create reply:", err);
    showToast(`Failed to save reply: ${err.message}`, "error");
  }
}

async function handleEdit(commentId, comment) {
  try {
    const updated = await updateComment(commentId, { body: comment });
    const idx = _comments.findIndex((a) => a.id === commentId);
    if (idx !== -1) _comments[idx] = updated;
    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);
  } catch (err) {
    console.error("[feedback-layer] Failed to edit comment:", err);
    showToast(`Failed to update comment: ${err.message}`, "error");
  }
}

async function handleReaction(commentId, emoji) {
  const commenter = getCommenter();
  if (!commenter) return;

  try {
    const comment = _comments.find((c) => c.id === commentId);
    const existing = comment?.reactions?.find((r) => r.emoji === emoji);
    const alreadyReacted = existing?.authors.includes(commenter);

    let result;
    if (alreadyReacted) {
      result = await removeReaction(commentId, emoji, commenter);
    } else {
      result = await addReaction(commentId, emoji, commenter);
    }

    // Update local comment's reactions
    const idx = _comments.findIndex((c) => c.id === commentId);
    if (idx !== -1) _comments[idx] = { ..._comments[idx], reactions: result.reactions };
    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);
  } catch (err) {
    console.error("[feedback-layer] Failed to toggle reaction:", err);
    showToast(`Failed to update reaction: ${err.message}`, "error");
  }
}

async function handleReorder(updates) {
  const docKey = _docId || _docUri;

  // null means sort mode toggle was clicked — just save preference and re-render
  if (updates === null) {
    localStorage.setItem(SORT_MODE_KEY + docKey, getSortMode());
    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);
    return;
  }

  // Optimistic UI update
  for (const u of updates) {
    const idx = _comments.findIndex((c) => c.id === u.id);
    if (idx !== -1) _comments[idx] = { ..._comments[idx], sort_order: u.sortOrder };
  }
  renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);

  try {
    await reorderComments(updates);
  } catch (err) {
    console.error("[feedback-layer] Failed to reorder comments:", err);
    showToast(`Failed to reorder: ${err.message}`, "error");
    // Reload to revert
    loadComments();
  }
}

async function handleDelete(commentId) {
  try {
    await deleteComment(commentId);
    removeHighlights(commentId);
    _anchoredIds.delete(commentId);
    _comments = _comments.filter(
      (a) => a.id !== commentId && a.parent !== commentId
    );
    updateAuthors();
    renderComments(_comments, _anchoredIds, _commentRanges, _matchedIds);
  } catch (err) {
    console.error("[feedback-layer] Failed to delete comment:", err);
    showToast(`Failed to delete comment: ${err.message}`, "error");
  }
}

try {
  init();
} catch (err) {
  console.error("[feedback-layer] Init failed:", err);
}
