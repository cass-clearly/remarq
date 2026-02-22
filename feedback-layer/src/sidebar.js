/**
 * Sidebar UI: name input, comment list, comment form.
 */

import {
  setActiveHighlight,
  scrollToHighlight,
} from "./highlights.js";
import { openModal } from "./ui.js";
import { escapeHtml } from "./utils/escape-html.js";
import { threadComments } from "./utils/thread-comments.js";
import { truncate } from "./utils/truncate.js";
import { timeAgo } from "./utils/time-ago.js";
import { inlineDiff } from "./utils/inline-diff.js";
import { initToastContainer } from "./toast.js";
import { debounce } from "./utils/debounce.js";
import { recalculateSortOrder } from "./utils/reorder.js";

const SIDEBAR_WIDTH = 320;
const COMMENTER_KEY = "feedback-layer-commenter";

let _sidebar = null;
let _listEl = null;
let _formEl = null;
let _pendingQuote = null;
let _onSubmit = null;
let _onDelete = null;
let _onResolve = null;
let _onReply = null;
let _onEdit = null;
let _onSearch = null;
let _onReaction = null;
let _onReorder = null;
let _onFetchHistory = null;
let _showResolved = false;
let _sortMode = "document"; // "document" or "custom"
let _draggedId = null;
let _lastComments = [];
let _lastAnchoredIds = new Set();
let _lastMatchedIds = null;
let _stylesInjected = false;

/**
 * Inject CSS styles eagerly (before sidebar DOM is created).
 * Safe to call multiple times — only injects once.
 */
export function ensureStyles() {
  if (_stylesInjected) return;
  _stylesInjected = true;
  injectStyles();
}

export function getCommenter() {
  return localStorage.getItem(COMMENTER_KEY) || "";
}

/**
 * Create and inject the sidebar into the page.
 *
 * @param {Object} opts
 * @param {Function} opts.onSubmit - Called with {comment, commenter} when form submitted
 * @param {Function} opts.onDelete - Called with commentId when delete clicked
 * @param {Function} opts.onResolve - Called with (commentId, resolved) when resolve toggled
 * @param {Function} opts.onReply - Called with {parent_id, comment, commenter} when reply submitted
 * @param {Function} opts.onEdit - Called with (commentId, comment) when edit saved
 * @param {Function} opts.onReaction - Called with (commentId, emoji) when reaction toggled
 * @param {Function} opts.onReorder - Called with [{id, sortOrder}] when comments are reordered
 * @param {Function} opts.onFetchHistory - Called with (commentId) to fetch edit history
 */
export function createSidebar({ onSubmit, onDelete, onResolve, onReply, onEdit, onSearch, onReaction, onReorder, onFetchHistory }) {
  _onSubmit = onSubmit;
  _onDelete = onDelete;
  _onResolve = onResolve;
  _onReply = onReply;
  _onEdit = onEdit;
  _onSearch = onSearch;
  _onReaction = onReaction;
  _onReorder = onReorder;
  _onFetchHistory = onFetchHistory;

  ensureStyles();

  _sidebar = document.createElement("div");
  _sidebar.className = "fb-sidebar fb-sidebar-collapsed";
  _sidebar.innerHTML = `
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <button class="fb-ai-btn" title="Send feedback to Claude">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </button>
        <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
      </div>
    </div>
    <div class="fb-sidebar-content">
      <div class="fb-name-section">
        <label class="fb-label">Your name</label>
        <input type="text" class="fb-name-input" placeholder="Enter your name..."
               value="${escapeHtml(getCommenter())}">
      </div>
      <div class="fb-filter-section">
        <input type="text" class="fb-search-input" placeholder="Search comments...">
        <select class="fb-author-filter">
          <option value="">All authors</option>
        </select>
        <div class="fb-filter-row">
          <label class="fb-filter-toggle">
            <input type="checkbox" class="fb-show-resolved-cb">
            <span>Show closed</span>
          </label>
          <button class="fb-sort-toggle" title="Toggle sort order">
            <span class="fb-sort-icon">&#x1F4CD;</span>
            <span class="fb-sort-label">Doc order</span>
          </button>
        </div>
      </div>
      <div class="fb-comment-list"></div>
      <div class="fb-form-section" style="display:none"></div>
    </div>
  `;

  // Floating tab to reopen sidebar when closed
  const tab = document.createElement("button");
  tab.className = "fb-sidebar-tab";
  tab.textContent = "Feedback";
  tab.addEventListener("click", () => openSidebar());
  document.body.appendChild(tab);

  document.body.appendChild(_sidebar);

  // Toast container (lives inside the sidebar so it scrolls with it)
  initToastContainer(_sidebar);

  _listEl = _sidebar.querySelector(".fb-comment-list");
  _formEl = _sidebar.querySelector(".fb-form-section");

  // Name input
  const nameInput = _sidebar.querySelector(".fb-name-input");
  nameInput.addEventListener("input", () => {
    localStorage.setItem(COMMENTER_KEY, nameInput.value.trim());
  });

  // AI button in header
  const aiBtn = _sidebar.querySelector(".fb-ai-btn");
  aiBtn.addEventListener("click", () => openModal());

  // Close button in header
  const toggleBtn = _sidebar.querySelector(".fb-sidebar-toggle");
  toggleBtn.addEventListener("click", () => closeSidebar());

  // Show/hide resolved filter
  const resolvedCb = _sidebar.querySelector(".fb-show-resolved-cb");
  resolvedCb.addEventListener("change", () => {
    _showResolved = resolvedCb.checked;
    renderComments(_lastComments, _lastAnchoredIds, new Map(), _lastMatchedIds);
  });

  // Sort toggle
  const sortToggle = _sidebar.querySelector(".fb-sort-toggle");
  sortToggle.addEventListener("click", () => {
    const newMode = _sortMode === "document" ? "custom" : "document";
    setSortMode(newMode);
    if (_onReorder) _onReorder(null); // signal mode change to parent (null = just re-render)
  });

  // Search and author filter
  const searchInput = _sidebar.querySelector(".fb-search-input");
  const authorSelect = _sidebar.querySelector(".fb-author-filter");

  const fireSearch = () => {
    if (_onSearch) _onSearch(searchInput.value.trim(), authorSelect.value);
  };

  searchInput.addEventListener("input", debounce(fireSearch, 300));
  authorSelect.addEventListener("change", fireSearch);
}

export function getSortMode() {
  return _sortMode;
}

export function setSortMode(mode) {
  _sortMode = mode;
  const toggle = _sidebar?.querySelector(".fb-sort-toggle");
  if (toggle) {
    toggle.querySelector(".fb-sort-icon").textContent = mode === "custom" ? "\u{1F522}" : "\u{1F4CD}";
    toggle.querySelector(".fb-sort-label").textContent = mode === "custom" ? "Custom order" : "Doc order";
    toggle.classList.toggle("fb-sort-toggle-active", mode === "custom");
  }
}

export function openSidebar() {
  _sidebar.classList.remove("fb-sidebar-collapsed");
  document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden");
}

function closeSidebar() {
  _sidebar.classList.add("fb-sidebar-collapsed");
  document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden");
}

/**
 * Show the comment form for a new comment.
 */
export function showCommentForm(quote) {
  openSidebar();

  if (!getCommenter()) {
    const nameInput = _sidebar.querySelector(".fb-name-input");
    nameInput.classList.add("fb-name-input-error");
    setTimeout(() => nameInput.classList.remove("fb-name-input-error"), 2000);
  }

  _pendingQuote = quote;
  _formEl.style.display = "";
  _formEl.innerHTML = `
    <div class="fb-form-card">
      <div class="fb-form-quote">"${escapeHtml(truncate(quote, 120))}"</div>
      <textarea class="fb-form-textarea" placeholder="Write your comment..." rows="3"></textarea>
      <div class="fb-form-actions">
        <button class="fb-btn fb-btn-primary fb-submit-btn">Add Comment</button>
        <button class="fb-btn fb-btn-cancel fb-cancel-btn">Cancel</button>
        <button class="fb-visibility-toggle" title="Toggle private/public" data-visibility="public">
          <svg class="fb-visibility-icon-public" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
          <svg class="fb-visibility-icon-private" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </button>
      </div>
    </div>
  `;

  const textarea = _formEl.querySelector(".fb-form-textarea");
  textarea.focus();

  // Visibility toggle
  const visToggle = _formEl.querySelector(".fb-visibility-toggle");
  visToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const current = visToggle.dataset.visibility;
    const next = current === "public" ? "private" : "public";
    visToggle.dataset.visibility = next;
    visToggle.classList.toggle("fb-visibility-private", next === "private");
    visToggle.title = next === "private" ? "Private (only you)" : "Public (everyone)";
  });

  const submitComment = () => {
    if (!getCommenter()) {
      const nameInput = _sidebar.querySelector(".fb-name-input");
      nameInput.focus();
      nameInput.classList.add("fb-name-input-error");
      setTimeout(() => nameInput.classList.remove("fb-name-input-error"), 2000);
      return;
    }
    const comment = textarea.value.trim();
    if (!comment) return;
    const visibility = visToggle.dataset.visibility;
    _onSubmit({ comment, commenter: getCommenter(), visibility });
    _formEl.style.display = "none";
    _pendingQuote = null;
  };

  _formEl.querySelector(".fb-submit-btn").addEventListener("click", submitComment);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      submitComment();
    }
  });

  _formEl.querySelector(".fb-cancel-btn").addEventListener("click", () => {
    _formEl.style.display = "none";
    _pendingQuote = null;
  });

  // Scroll form into view
  _formEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/**
 * Populate the author filter dropdown with unique author names.
 */
export function setAuthors(authors) {
  const select = _sidebar.querySelector(".fb-author-filter");
  const current = select.value;
  select.innerHTML = '<option value="">All authors</option>';
  for (const name of authors.sort()) {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  }
  if (authors.includes(current)) select.value = current;
}

/**
 * Render the full comment list with threaded replies.
 * Only shows comments whose text was successfully found in the document.
 *
 * @param {Array} comments - All comments
 * @param {Set} anchoredIds - Set of comment IDs that successfully anchored to text
 * @param {Map} commentRanges - Map of comment ID to Range for position sorting
 * @param {Set|null} matchedIds - Set of comment IDs matching active search, or null if no search
 */
export function renderComments(comments, anchoredIds = new Set(), commentRanges = new Map(), matchedIds = null) {
  _lastComments = comments;
  _lastAnchoredIds = anchoredIds;
  _lastMatchedIds = matchedIds;
  _listEl.innerHTML = "";

  const { topLevel, repliesByParent } = threadComments(comments);

  let sortedTopLevel;
  if (_sortMode === "custom") {
    // Sort by sort_order (null values go last), then by created_at
    sortedTopLevel = topLevel.slice().sort((a, b) => {
      const aOrder = a.sort_order != null ? a.sort_order : Infinity;
      const bOrder = b.sort_order != null ? b.sort_order : Infinity;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return new Date(a.created_at) - new Date(b.created_at);
    });
  } else {
    // Sort top-level comments by document position
    sortedTopLevel = topLevel.slice().sort((a, b) => {
      const rangeA = commentRanges.get(a.id);
      const rangeB = commentRanges.get(b.id);

      // If either doesn't have a range, keep original order
      if (!rangeA || !rangeB) return 0;

      // Compare positions using Range.compareBoundaryPoints
      return rangeA.compareBoundaryPoints(Range.START_TO_START, rangeB);
    });
  }

  // Filter to only show comments that:
  // 1. Successfully anchored (text found in document), OR
  // 2. Are closed and "show closed" is enabled
  const anchoredTopLevel = sortedTopLevel.filter((a) => {
    const hasAnchor = anchoredIds.has(a.id);
    const isClosed = a.status === 'closed';

    // Show if anchored, or if closed and user wants to see closed
    return hasAnchor || (isClosed && _showResolved);
  });

  // Apply closed filter on top of anchored filter
  const visibleTopLevel = _showResolved
    ? anchoredTopLevel
    : anchoredTopLevel.filter((a) => a.status !== 'closed');

  if (sortedTopLevel.length === 0) {
    _listEl.innerHTML = `<div class="fb-empty">No comments yet. Select text to add one.</div>`;
    return;
  }

  // Calculate orphaned comments (text no longer exists in document)
  const orphanedCount = sortedTopLevel.filter((a) => !anchoredIds.has(a.id) && a.status !== 'closed').length;

  if (visibleTopLevel.length === 0) {
    if (orphanedCount > 0) {
      _listEl.innerHTML = `<div class="fb-empty">
        ${anchoredTopLevel.length} comment(s) resolved.
        ${orphanedCount > 0 ? `<br>${orphanedCount} comment(s) not shown because their quoted text no longer exists in the document.` : ''}
        <br>Check "Show closed" to see resolved comments.
      </div>`;
    } else {
      _listEl.innerHTML = `<div class="fb-empty">All ${sortedTopLevel.length} comment(s) resolved. Check "Show closed" to see them.</div>`;
    }
    return;
  }

  for (let i = 0; i < visibleTopLevel.length; i++) {
    const ann = visibleTopLevel[i];
    const thread = document.createElement("div");
    thread.className = "fb-thread";
    thread.dataset.commentId = ann.id;
    thread.dataset.index = i;

    // Dim thread if search is active and neither root nor any reply matches
    const replies = repliesByParent.get(ann.id) || [];
    if (matchedIds !== null) {
      const threadMatches = matchedIds.has(ann.id) || replies.some(r => matchedIds.has(r.id));
      if (!threadMatches) thread.classList.add("fb-thread-dimmed");
    }

    // Enable drag-and-drop in custom sort mode
    if (_sortMode === "custom") {
      thread.draggable = true;
      thread.addEventListener("dragstart", (e) => {
        _draggedId = ann.id;
        thread.classList.add("fb-thread-dragging");
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", ann.id);
      });
      thread.addEventListener("dragend", () => {
        _draggedId = null;
        thread.classList.remove("fb-thread-dragging");
        _listEl.querySelectorAll(".fb-thread-drop-above, .fb-thread-drop-below").forEach(
          (el) => { el.classList.remove("fb-thread-drop-above", "fb-thread-drop-below"); }
        );
      });
      thread.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (!_draggedId || _draggedId === ann.id) return;
        const rect = thread.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        // Clear previous indicators on this element
        thread.classList.remove("fb-thread-drop-above", "fb-thread-drop-below");
        if (e.clientY < midY) {
          thread.classList.add("fb-thread-drop-above");
        } else {
          thread.classList.add("fb-thread-drop-below");
        }
      });
      thread.addEventListener("dragleave", () => {
        thread.classList.remove("fb-thread-drop-above", "fb-thread-drop-below");
      });
      thread.addEventListener("drop", (e) => {
        e.preventDefault();
        thread.classList.remove("fb-thread-drop-above", "fb-thread-drop-below");
        const draggedCommentId = e.dataTransfer.getData("text/plain");
        if (!draggedCommentId || draggedCommentId === ann.id) return;

        const fromIndex = visibleTopLevel.findIndex((c) => c.id === draggedCommentId);
        const rect = thread.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        let toIndex = parseInt(thread.dataset.index, 10);
        // If dropping below the midpoint and dragging from above, adjust target
        if (e.clientY >= midY && fromIndex < toIndex) {
          // Already correct
        } else if (e.clientY < midY && fromIndex > toIndex) {
          // Already correct
        } else if (e.clientY >= midY) {
          toIndex = Math.min(toIndex + 1, visibleTopLevel.length - 1);
        } else {
          toIndex = Math.max(toIndex - 1, 0);
        }

        if (fromIndex === toIndex) return;
        const updates = recalculateSortOrder(visibleTopLevel, fromIndex, toIndex);
        if (_onReorder && updates.length > 0) _onReorder(updates);
      });
    }

    thread.appendChild(buildCard(ann, false));

    // Render replies
    for (const reply of replies) {
      thread.appendChild(buildCard(reply, true));
    }

    // Reply button
    const replyBtn = document.createElement("button");
    replyBtn.className = "fb-reply-btn";
    replyBtn.textContent = "Reply";
    replyBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showReplyForm(ann.id, thread, replyBtn);
    });
    thread.appendChild(replyBtn);

    _listEl.appendChild(thread);
  }
}

function buildCard(ann, isReply) {
  const isClosed = ann.status === 'closed';
  const isPrivate = ann.visibility === 'private';
  const card = document.createElement("div");
  card.className = "fb-cmt-card"
    + (isClosed ? " fb-cmt-closed" : "")
    + (isReply ? " fb-cmt-reply" : "")
    + (isPrivate ? " fb-cmt-private" : "");
  card.dataset.id = ann.id;

  const dragHandleHtml = (_sortMode === "custom" && !isReply)
    ? '<span class="fb-drag-handle" title="Drag to reorder">&#x2630;</span>'
    : '';

  const privateBadgeHtml = isPrivate
    ? '<span class="fb-cmt-private-badge" title="Private annotation">&#x1F512;</span>'
    : '';

  card.innerHTML = `
    ${dragHandleHtml}
    <div class="fb-cmt-body">${escapeHtml(ann.body)}</div>
    <div class="fb-cmt-meta">
      ${privateBadgeHtml}
      <span class="fb-cmt-author">${escapeHtml(ann.author)}</span>
      <span class="fb-cmt-time">${timeAgo(ann.created_at)}</span>
      <button class="fb-cmt-edit" title="Edit">&#x270E;</button>
      ${!isReply ? `<button class="fb-cmt-resolve" title="${isClosed ? "Reopen" : "Resolve"}">${isClosed ? "&#x21a9;" : "&#x2713;"}</button>` : ""}
      <button class="fb-cmt-delete" title="Delete">&times;</button>
    </div>
    <div class="fb-reactions"></div>
  `;

  // Build reaction bar
  const reactionsEl = card.querySelector(".fb-reactions");
  buildReactionBar(reactionsEl, ann);

  if (!isReply) {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".fb-cmt-delete") || e.target.closest(".fb-cmt-resolve") || e.target.closest(".fb-cmt-edit") || e.target.closest(".fb-reactions") || e.target.closest(".fb-drag-handle")) return;
      setActiveHighlight(ann.id);
      scrollToHighlight(ann.id);
      _listEl
        .querySelectorAll(".fb-cmt-card")
        .forEach((c) => c.classList.remove("fb-cmt-active"));
      card.classList.add("fb-cmt-active");
    });

    card.querySelector(".fb-cmt-resolve").addEventListener("click", (e) => {
      e.stopPropagation();
      if (_onResolve) _onResolve(ann.id, !isClosed);
    });
  }

  card.querySelector(".fb-cmt-edit").addEventListener("click", (e) => {
    e.stopPropagation();
    showEditForm(ann, card);
  });

  card.querySelector(".fb-cmt-delete").addEventListener("click", (e) => {
    e.stopPropagation();
    if (_onDelete) _onDelete(ann.id);
  });

  return card;
}

const EMOJI_SET = ["👍", "❤️", "👀", "🎉", "🤔", "😂"];

function buildReactionBar(container, ann) {
  const reactions = ann.reactions || [];
  const commenter = getCommenter();

  // Render existing reaction badges
  for (const r of reactions) {
    const badge = document.createElement("button");
    badge.className = "fb-reaction-badge";
    if (commenter && r.authors.includes(commenter)) {
      badge.classList.add("fb-reaction-mine");
    }
    badge.textContent = `${r.emoji} ${r.count}`;
    badge.title = r.authors.join(", ");
    badge.addEventListener("click", (e) => {
      e.stopPropagation();
      if (_onReaction) _onReaction(ann.id, r.emoji);
    });
    container.appendChild(badge);
  }

  // "+" button to open picker
  const addBtn = document.createElement("button");
  addBtn.className = "fb-reaction-add";
  addBtn.textContent = "+";
  addBtn.title = "Add reaction";
  addBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showEmojiPicker(container, ann, addBtn);
  });
  container.appendChild(addBtn);
}

function showEmojiPicker(container, ann, addBtn) {
  // Remove existing picker if open
  const existing = container.querySelector(".fb-emoji-picker");
  if (existing) { existing.remove(); return; }

  const picker = document.createElement("div");
  picker.className = "fb-emoji-picker";

  for (const emoji of EMOJI_SET) {
    const btn = document.createElement("button");
    btn.className = "fb-emoji-option";
    btn.textContent = emoji;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      picker.remove();
      if (_onReaction) _onReaction(ann.id, emoji);
    });
    picker.appendChild(btn);
  }

  container.insertBefore(picker, addBtn.nextSibling);

  // Dismiss on outside click
  const dismiss = (e) => {
    if (!picker.contains(e.target) && e.target !== addBtn) {
      picker.remove();
      document.removeEventListener("click", dismiss, true);
    }
  };
  setTimeout(() => document.addEventListener("click", dismiss, true), 0);
}

function showReplyForm(parentId, threadEl, replyBtn) {
  openSidebar();

  // Remove existing reply form if any
  const existing = threadEl.querySelector(".fb-reply-form");
  if (existing) { existing.remove(); replyBtn.style.display = ""; return; }

  replyBtn.style.display = "none";

  const form = document.createElement("div");
  form.className = "fb-reply-form";
  form.innerHTML = `
    <textarea class="fb-form-textarea" placeholder="Write a reply..." rows="2"></textarea>
    <div class="fb-form-actions">
      <button class="fb-btn fb-btn-primary fb-reply-submit">Reply</button>
      <button class="fb-btn fb-btn-cancel fb-reply-cancel">Cancel</button>
    </div>
  `;

  const submitReply = () => {
    if (!getCommenter()) {
      const nameInput = _sidebar.querySelector(".fb-name-input");
      nameInput.focus();
      nameInput.classList.add("fb-name-input-error");
      setTimeout(() => nameInput.classList.remove("fb-name-input-error"), 2000);
      return;
    }
    const comment = form.querySelector("textarea").value.trim();
    if (!comment) return;
    if (_onReply) _onReply({ parent_id: parentId, comment, commenter: getCommenter() });
    form.remove();
    replyBtn.style.display = "";
  };

  form.querySelector(".fb-reply-submit").addEventListener("click", submitReply);

  const replyTextarea = form.querySelector("textarea");
  replyTextarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      submitReply();
    }
  });

  form.querySelector(".fb-reply-cancel").addEventListener("click", () => {
    form.remove();
    replyBtn.style.display = "";
  });

  threadEl.insertBefore(form, replyBtn);
  replyTextarea.focus();
}

function showEditForm(ann, card) {
  const commentEl = card.querySelector(".fb-cmt-body");
  const originalText = ann.body;

  // Replace comment with edit form
  commentEl.innerHTML = `
    <textarea class="fb-form-textarea" rows="3">${escapeHtml(originalText)}</textarea>
    <div class="fb-form-actions" style="margin-top: 6px;">
      <button class="fb-btn fb-btn-primary fb-edit-save">Save</button>
      <button class="fb-btn fb-btn-cancel fb-edit-cancel">Cancel</button>
    </div>
  `;

  const textarea = commentEl.querySelector("textarea");
  textarea.focus();
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);

  const saveEdit = () => {
    const newComment = textarea.value.trim();
    if (!newComment) return;
    if (_onEdit) _onEdit(ann.id, newComment);
  };

  commentEl.querySelector(".fb-edit-save").addEventListener("click", saveEdit);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      saveEdit();
    }
  });

  commentEl.querySelector(".fb-edit-cancel").addEventListener("click", () => {
    commentEl.textContent = originalText;
  });
}

/**
 * Scroll the sidebar to a specific comment card and highlight it.
 */
export function focusCommentCard(commentId) {
  const card = _listEl.querySelector(
    `.fb-cmt-card[data-id="${commentId}"]`
  );
  if (card) {
    _listEl
      .querySelectorAll(".fb-cmt-card")
      .forEach((c) => c.classList.remove("fb-cmt-active"));
    card.classList.add("fb-cmt-active");
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
    /* ── Light theme variables (default) ── */
    [data-remarq-theme] {
      --remarq-bg: #fafafa;
      --remarq-bg-surface: #fff;
      --remarq-bg-hover: #f3f0ff;
      --remarq-bg-secondary: #f3f4f6;

      --remarq-text: #333;
      --remarq-text-secondary: #555;
      --remarq-text-muted: #666;
      --remarq-text-faint: #999;

      --remarq-border: #e0e0e0;
      --remarq-border-subtle: #e5e7eb;
      --remarq-border-input: #d1d5db;

      --remarq-accent: #7c3aed;
      --remarq-accent-hover: #6d28d9;
      --remarq-accent-ring: rgba(124,58,237,0.15);
      --remarq-accent-glow: rgba(124,58,237,0.12);

      --remarq-success: #16a34a;
      --remarq-danger: #ef4444;
      --remarq-icon-muted: #aaa;
      --remarq-icon-faint: #ccc;

      --remarq-info-bg: #eff6ff;
      --remarq-info-text: #1e40af;
      --remarq-success-bg: #f0fdf4;
      --remarq-success-text: #166534;
      --remarq-error-bg: #fef2f2;
      --remarq-error-text: #991b1b;

      --remarq-highlight: rgba(255, 212, 0, 0.35);
      --remarq-highlight-active: rgba(255, 180, 0, 0.55);

      --remarq-shadow: rgba(0,0,0,0.08);
      --remarq-shadow-strong: rgba(0,0,0,0.15);
    }

    /* ── Dark theme overrides ── */
    [data-remarq-theme="dark"] {
      --remarq-bg: #1e1e2e;
      --remarq-bg-surface: #282840;
      --remarq-bg-hover: #33305a;
      --remarq-bg-secondary: #313148;

      --remarq-text: #e0e0e6;
      --remarq-text-secondary: #b0b0be;
      --remarq-text-muted: #9090a0;
      --remarq-text-faint: #6e6e82;

      --remarq-border: #3a3a52;
      --remarq-border-subtle: #33334a;
      --remarq-border-input: #4a4a62;

      --remarq-accent: #a78bfa;
      --remarq-accent-hover: #8b5cf6;
      --remarq-accent-ring: rgba(167,139,250,0.25);
      --remarq-accent-glow: rgba(167,139,250,0.18);

      --remarq-success: #4ade80;
      --remarq-danger: #f87171;
      --remarq-icon-muted: #6e6e82;
      --remarq-icon-faint: #4a4a62;

      --remarq-info-bg: #1e2a4a;
      --remarq-info-text: #93b5f5;
      --remarq-success-bg: #1a2e1a;
      --remarq-success-text: #6ee7a0;
      --remarq-error-bg: #2e1a1a;
      --remarq-error-text: #fca5a5;

      --remarq-highlight: rgba(255, 212, 0, 0.25);
      --remarq-highlight-active: rgba(255, 180, 0, 0.45);

      --remarq-shadow: rgba(0,0,0,0.3);
      --remarq-shadow-strong: rgba(0,0,0,0.5);
    }

    @media (prefers-color-scheme: dark) {
      [data-remarq-theme="auto"] {
        --remarq-bg: #1e1e2e;
        --remarq-bg-surface: #282840;
        --remarq-bg-hover: #33305a;
        --remarq-bg-secondary: #313148;

        --remarq-text: #e0e0e6;
        --remarq-text-secondary: #b0b0be;
        --remarq-text-muted: #9090a0;
        --remarq-text-faint: #6e6e82;

        --remarq-border: #3a3a52;
        --remarq-border-subtle: #33334a;
        --remarq-border-input: #4a4a62;

        --remarq-accent: #a78bfa;
        --remarq-accent-hover: #8b5cf6;
        --remarq-accent-ring: rgba(167,139,250,0.25);
        --remarq-accent-glow: rgba(167,139,250,0.18);

        --remarq-success: #4ade80;
        --remarq-danger: #f87171;
        --remarq-icon-muted: #6e6e82;
        --remarq-icon-faint: #4a4a62;

        --remarq-info-bg: #1e2a4a;
        --remarq-info-text: #93b5f5;
        --remarq-success-bg: #1a2e1a;
        --remarq-success-text: #6ee7a0;
        --remarq-error-bg: #2e1a1a;
        --remarq-error-text: #fca5a5;

        --remarq-highlight: rgba(255, 212, 0, 0.25);
        --remarq-highlight-active: rgba(255, 180, 0, 0.45);

        --remarq-shadow: rgba(0,0,0,0.3);
        --remarq-shadow-strong: rgba(0,0,0,0.5);
      }
    }

    /* ── Highlight styles (applied to host page content) ── */
    .fb-highlight {
      background-color: var(--remarq-highlight);
      cursor: pointer;
      border-radius: 2px;
    }
    .fb-highlight-active {
      background-color: var(--remarq-highlight-active);
    }
    .fb-highlight rect {
      fill: var(--remarq-highlight);
    }
    .fb-highlight-active rect {
      fill: var(--remarq-highlight-active);
    }

    /* ── Name input error state ── */
    .fb-name-input-error {
      outline: 2px solid var(--remarq-danger) !important;
    }

    /* ── Sidebar ── */
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${SIDEBAR_WIDTH}px;
      height: 100vh;
      background: var(--remarq-bg);
      border-left: 1px solid var(--remarq-border);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: var(--remarq-text);
      transition: transform 0.25s ease;
      box-shadow: -2px 0 8px var(--remarq-shadow);
    }
    .fb-sidebar-collapsed {
      transform: translateX(100%);
    }
    .fb-sidebar-tab {
      position: fixed;
      top: 50%;
      right: 0;
      z-index: 9998;
      transform: translateY(-50%) rotate(-90deg);
      transform-origin: bottom right;
      background: var(--remarq-accent);
      color: white;
      border: none;
      border-radius: 6px 6px 0 0;
      padding: 6px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: -2px 0 6px var(--remarq-shadow-strong);
      transition: opacity 0.2s;
    }
    .fb-sidebar-tab:hover {
      background: var(--remarq-accent-hover);
    }
    .fb-sidebar-tab-hidden {
      opacity: 0;
      pointer-events: none;
    }
    .fb-sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 14px;
      border-bottom: 1px solid var(--remarq-border);
      background: var(--remarq-bg-surface);
      font-size: 15px;
    }
    .fb-sidebar-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .fb-ai-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--remarq-accent);
      padding: 4px;
      line-height: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ai-btn:hover {
      background: var(--remarq-bg-hover);
    }
    .fb-sidebar-toggle {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--remarq-text-muted);
      padding: 0 4px;
      line-height: 1;
    }
    .fb-sidebar-content {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
    }
    .fb-label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--remarq-text-muted);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-name-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 14px;
      box-sizing: border-box;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-name-input:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-name-section {
      margin-bottom: 16px;
    }
    .fb-comment-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .fb-empty {
      color: var(--remarq-text-faint);
      font-size: 13px;
      text-align: center;
      padding: 24px 12px;
    }
    .fb-cmt-card {
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border-subtle);
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-cmt-card:hover {
      border-color: var(--remarq-accent-ring);
    }
    .fb-cmt-active {
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-glow);
    }
    .fb-cmt-quote {
      font-size: 12px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    .fb-cmt-body {
      font-size: 13px;
      line-height: 1.5;
      margin-bottom: 6px;
    }
    .fb-cmt-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: var(--remarq-text-faint);
    }
    .fb-cmt-author {
      font-weight: 600;
      color: var(--remarq-accent);
    }
    .fb-cmt-resolve {
      background: none;
      border: none;
      color: var(--remarq-icon-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-cmt-resolve:hover {
      color: var(--remarq-success);
    }
    .fb-cmt-edit {
      background: none;
      border: none;
      color: var(--remarq-icon-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-edit:hover {
      color: var(--remarq-accent);
    }
    .fb-cmt-delete {
      background: none;
      border: none;
      color: var(--remarq-icon-faint);
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-delete:hover {
      color: var(--remarq-danger);
    }
    .fb-cmt-closed {
      opacity: 0.5;
      border-left: 3px solid var(--remarq-success);
    }
    .fb-cmt-closed .fb-cmt-body {
      text-decoration: line-through;
    }
    .fb-cmt-closed .fb-cmt-resolve {
      color: var(--remarq-success);
    }
    .fb-reactions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px;
      margin-top: 6px;
    }
    .fb-reaction-badge {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding: 2px 8px;
      border-radius: 12px;
      border: 1px solid var(--remarq-border-subtle);
      background: var(--remarq-bg-secondary);
      font-size: 12px;
      cursor: pointer;
      line-height: 1.4;
      font-family: inherit;
    }
    .fb-reaction-badge:hover {
      border-color: var(--remarq-accent);
      background: var(--remarq-accent-ring);
    }
    .fb-reaction-mine {
      border-color: var(--remarq-accent);
      background: var(--remarq-accent-ring);
    }
    .fb-reaction-add {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 22px;
      border-radius: 12px;
      border: 1px dashed var(--remarq-border-subtle);
      background: none;
      font-size: 14px;
      cursor: pointer;
      color: var(--remarq-text-faint);
      line-height: 1;
      font-family: inherit;
    }
    .fb-reaction-add:hover {
      border-color: var(--remarq-accent);
      color: var(--remarq-accent);
    }
    .fb-emoji-picker {
      display: flex;
      gap: 2px;
      padding: 4px;
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border);
      border-radius: 8px;
      box-shadow: 0 2px 8px var(--remarq-shadow);
    }
    .fb-emoji-option {
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      line-height: 1;
    }
    .fb-emoji-option:hover {
      background: var(--remarq-bg-hover);
    }
    .fb-filter-section {
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .fb-search-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-search-input:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-author-filter {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      font-size: 13px;
      box-sizing: border-box;
      font-family: inherit;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
      cursor: pointer;
    }
    .fb-author-filter:focus {
      outline: none;
      border-color: var(--remarq-accent);
      box-shadow: 0 0 0 2px var(--remarq-accent-ring);
    }
    .fb-thread-dimmed {
      opacity: 0.35;
    }
    .fb-drag-handle {
      display: block;
      cursor: grab;
      color: var(--remarq-icon-faint);
      font-size: 12px;
      line-height: 1;
      padding: 0 0 4px;
      user-select: none;
      letter-spacing: 2px;
    }
    .fb-drag-handle:hover {
      color: var(--remarq-accent);
    }
    .fb-drag-handle:active {
      cursor: grabbing;
    }
    .fb-thread-dragging {
      opacity: 0.4;
    }
    .fb-thread-drop-above {
      border-top: 2px solid var(--remarq-accent);
    }
    .fb-thread-drop-below {
      border-bottom: 2px solid var(--remarq-accent);
    }
    .fb-filter-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .fb-sort-toggle {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      padding: 3px 8px;
      font-size: 11px;
      cursor: pointer;
      color: var(--remarq-text-muted);
      font-family: inherit;
    }
    .fb-sort-toggle:hover {
      border-color: var(--remarq-accent);
      color: var(--remarq-accent);
    }
    .fb-sort-toggle-active {
      border-color: var(--remarq-accent);
      background: var(--remarq-accent-ring);
      color: var(--remarq-accent);
    }
    .fb-sort-icon {
      font-size: 12px;
    }
    .fb-sort-label {
      font-size: 11px;
    }
    .fb-filter-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--remarq-text-faint);
      cursor: pointer;
    }
    .fb-filter-toggle input {
      cursor: pointer;
    }
    .fb-thread {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .fb-cmt-reply {
      margin-left: 20px;
      border-left: 2px solid var(--remarq-border-subtle);
      font-size: 13px;
    }
    .fb-cmt-reply .fb-cmt-body {
      font-size: 12px;
    }
    .fb-reply-btn {
      align-self: flex-start;
      margin-left: 20px;
      background: none;
      border: none;
      color: var(--remarq-accent);
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 0;
      font-family: inherit;
    }
    .fb-reply-btn:hover {
      text-decoration: underline;
    }
    .fb-reply-form {
      margin-left: 20px;
      padding: 8px;
      background: var(--remarq-bg-surface);
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
    }
    .fb-reply-form .fb-form-textarea {
      font-size: 12px;
      min-height: unset;
    }
    .fb-reply-form .fb-form-actions {
      margin-top: 6px;
    }
    .fb-form-section {
      margin-top: 12px;
    }
    .fb-form-card {
      background: var(--remarq-bg-surface);
      border: 2px solid var(--remarq-accent);
      border-radius: 8px;
      padding: 12px;
    }
    .fb-form-quote {
      font-size: 12px;
      color: var(--remarq-text-faint);
      font-style: italic;
      margin-bottom: 8px;
    }
    .fb-form-textarea {
      width: 100%;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: vertical;
      box-sizing: border-box;
      background: var(--remarq-bg-surface);
      color: var(--remarq-text);
    }
    .fb-form-textarea:focus {
      outline: none;
      border-color: var(--remarq-accent);
    }
    .fb-form-actions {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
    .fb-btn {
      border: none;
      border-radius: 6px;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
    }
    .fb-btn-primary {
      background: var(--remarq-accent);
      color: white;
    }
    .fb-btn-primary:hover { background: var(--remarq-accent-hover); }
    .fb-btn-cancel {
      background: var(--remarq-bg-secondary);
      color: var(--remarq-text-secondary);
    }
    .fb-btn-cancel:hover { background: var(--remarq-border-subtle); }

    /* ── Visibility toggle ── */
    .fb-visibility-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: 1px solid var(--remarq-border-input);
      border-radius: 6px;
      padding: 5px 8px;
      cursor: pointer;
      color: var(--remarq-text-muted);
      margin-left: auto;
      line-height: 1;
    }
    .fb-visibility-toggle:hover {
      border-color: var(--remarq-accent);
      color: var(--remarq-accent);
    }
    .fb-visibility-toggle.fb-visibility-private {
      border-color: var(--remarq-accent);
      background: var(--remarq-accent-ring);
      color: var(--remarq-accent);
    }
    .fb-visibility-toggle.fb-visibility-private .fb-visibility-icon-public { display: none; }
    .fb-visibility-toggle.fb-visibility-private .fb-visibility-icon-private { display: inline !important; }

    /* ── Private comment card styling ── */
    .fb-cmt-private {
      border-style: dashed;
      background: var(--remarq-bg-hover);
    }
    .fb-cmt-private-badge {
      font-size: 11px;
      line-height: 1;
    }

    /* ── Private highlight styling ── */
    .fb-highlight-private {
      border: 2px dashed var(--remarq-accent);
      border-radius: 3px;
      opacity: 0.7;
    }

    /* Annotate tooltip (appears on text selection) */
    .fb-annotate-tooltip {
      position: absolute;
      z-index: 10001;
      background: var(--remarq-accent);
      color: white;
      border: none;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 12px var(--remarq-accent-ring), 0 2px 4px var(--remarq-shadow);
      white-space: nowrap;
      transition: all 0.2s ease;
      animation: fb-tooltip-appear 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .fb-annotate-tooltip svg {
      width: 14px;
      height: 14px;
    }
    .fb-annotate-tooltip::after {
      content: '';
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid var(--remarq-accent);
      filter: drop-shadow(0 -2px 2px var(--remarq-shadow));
    }
    .fb-annotate-tooltip:hover {
      background: var(--remarq-accent-hover);
      transform: translateY(2px);
      box-shadow: 0 6px 16px var(--remarq-accent-ring), 0 2px 6px var(--remarq-shadow-strong);
    }
    .fb-annotate-tooltip:hover::after {
      border-bottom-color: var(--remarq-accent-hover);
    }
    @media (pointer: coarse) {
      .fb-annotate-tooltip {
        min-height: 44px;
        padding: 12px 20px;
        font-size: 15px;
      }
      .fb-annotate-tooltip svg {
        width: 18px;
        height: 18px;
      }
    }
    @keyframes fb-tooltip-appear {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Toast notifications */
    .fb-toast-container {
      position: absolute;
      bottom: 12px;
      left: 12px;
      right: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
    }
    .fb-toast {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      pointer-events: auto;
      opacity: 0;
      transform: translateY(100%);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .fb-toast-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .fb-toast-success {
      background: #16a34a;
    }
    .fb-toast-error {
      background: #dc2626;
    }
    .fb-toast-dismiss {
      background: none;
      border: none;
      color: rgba(255,255,255,0.8);
      font-size: 18px;
      cursor: pointer;
      padding: 0 2px;
      line-height: 1;
      flex-shrink: 0;
    }
    .fb-toast-dismiss:hover {
      color: #fff;
    }
  `;
  document.head.appendChild(style);
}
