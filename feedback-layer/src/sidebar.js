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
import { initToastContainer } from "./toast.js";

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
let _onReaction = null;
let _showResolved = false;
let _lastComments = [];
let _lastAnchoredIds = new Set();

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
 */
export function createSidebar({ onSubmit, onDelete, onResolve, onReply, onEdit, onReaction }) {
  _onSubmit = onSubmit;
  _onDelete = onDelete;
  _onResolve = onResolve;
  _onReply = onReply;
  _onEdit = onEdit;
  _onReaction = onReaction;

  injectStyles();

  _sidebar = document.createElement("div");
  _sidebar.className = "fb-sidebar fb-sidebar-collapsed";
  _sidebar.innerHTML = `
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <div class="fb-sidebar-header-actions">
        <button class="fb-ai-btn" title="Send feedback to Claude">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </button>
        <button class="fb-hotkey-help-btn" title="Keyboard shortcuts (?)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8"/></svg>
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
        <label class="fb-filter-toggle">
          <input type="checkbox" class="fb-show-resolved-cb">
          <span>Show closed</span>
        </label>
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
    renderComments(_lastComments, _lastAnchoredIds);  // Use stored anchoredIds
  });

  // Hotkey help button
  const helpBtn = _sidebar.querySelector(".fb-hotkey-help-btn");
  helpBtn.addEventListener("click", () => toggleHelpOverlay());

  // Create help overlay
  _helpOverlay = document.createElement("div");
  _helpOverlay.className = "fb-help-overlay";
  _helpOverlay.style.display = "none";
  _helpOverlay.innerHTML = `
    <div class="fb-help-modal">
      <div class="fb-help-header">
        <strong>Keyboard Shortcuts</strong>
        <button class="fb-help-close">&times;</button>
      </div>
      <table class="fb-help-table">
        <tr><td><kbd>J</kbd></td><td>Next comment thread</td></tr>
        <tr><td><kbd>K</kbd></td><td>Previous comment thread</td></tr>
        <tr><td><kbd>Enter</kbd></td><td>Reply to selected thread</td></tr>
        <tr><td><kbd>Escape</kbd></td><td>Close sidebar</td></tr>
        <tr><td><kbd>?</kbd></td><td>Toggle this help</td></tr>
      </table>
    </div>
  `;
  _sidebar.appendChild(_helpOverlay);
  _helpOverlay.querySelector(".fb-help-close").addEventListener("click", () => {
    _helpOverlay.style.display = "none";
  });

  // Global keyboard shortcuts
  document.addEventListener("keydown", _handleKeyDown);
}

let _helpOverlay = null;
let _activeThreadIndex = -1;

function _isInputFocused() {
  const el = document.activeElement;
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select" || el.isContentEditable;
}

function _isSidebarOpen() {
  return _sidebar && !_sidebar.classList.contains("fb-sidebar-collapsed");
}

function toggleHelpOverlay() {
  if (!_helpOverlay) return;
  _helpOverlay.style.display = _helpOverlay.style.display === "none" ? "flex" : "none";
}

function _getVisibleThreadCards() {
  if (!_listEl) return [];
  return Array.from(_listEl.querySelectorAll(".fb-thread > .fb-cmt-card:first-child"));
}

function _navigateThread(direction) {
  const cards = _getVisibleThreadCards();
  if (cards.length === 0) return;

  if (_activeThreadIndex < 0) {
    _activeThreadIndex = direction === 1 ? 0 : cards.length - 1;
  } else {
    _activeThreadIndex += direction;
    if (_activeThreadIndex >= cards.length) _activeThreadIndex = 0;
    if (_activeThreadIndex < 0) _activeThreadIndex = cards.length - 1;
  }

  const card = cards[_activeThreadIndex];
  const commentId = card.dataset.id;

  // Highlight in sidebar
  _listEl.querySelectorAll(".fb-cmt-card").forEach(c => c.classList.remove("fb-cmt-active"));
  card.classList.add("fb-cmt-active");
  card.scrollIntoView({ behavior: "smooth", block: "nearest" });

  // Highlight in document
  if (commentId) {
    setActiveHighlight(commentId);
    scrollToHighlight(commentId);
  }
}

function _handleKeyDown(e) {
  // ESC always closes sidebar (even if input focused)
  if (e.key === "Escape" && _isSidebarOpen()) {
    // Close help overlay first if open
    if (_helpOverlay && _helpOverlay.style.display !== "none") {
      _helpOverlay.style.display = "none";
      return;
    }
    closeSidebar();
    return;
  }

  // Other shortcuts only when no input is focused
  if (_isInputFocused()) return;
  if (!_isSidebarOpen()) return;

  switch (e.key) {
    case "j":
      e.preventDefault();
      _navigateThread(1);
      break;
    case "k":
      e.preventDefault();
      _navigateThread(-1);
      break;
    case "?":
      e.preventDefault();
      toggleHelpOverlay();
      break;
    case "Enter": {
      const cards = _getVisibleThreadCards();
      if (_activeThreadIndex >= 0 && _activeThreadIndex < cards.length) {
        const card = cards[_activeThreadIndex];
        const replyBtn = card.closest(".fb-thread")?.querySelector(".fb-reply-btn");
        if (replyBtn) {
          e.preventDefault();
          replyBtn.click();
        }
      }
      break;
    }
  }
}

export function openSidebar() {
  _sidebar.classList.remove("fb-sidebar-collapsed");
  document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden");
}

function closeSidebar() {
  _sidebar.classList.add("fb-sidebar-collapsed");
  document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden");
  _activeThreadIndex = -1;
}

/**
 * Show the comment form for a new comment.
 */
export function showCommentForm(quote) {
  openSidebar();

  if (!getCommenter()) {
    const nameInput = _sidebar.querySelector(".fb-name-input");
    nameInput.style.outline = "2px solid #ef4444";
    setTimeout(() => (nameInput.style.outline = ""), 2000);
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
      </div>
    </div>
  `;

  const textarea = _formEl.querySelector(".fb-form-textarea");
  textarea.focus();

  const submitComment = () => {
    if (!getCommenter()) {
      const nameInput = _sidebar.querySelector(".fb-name-input");
      nameInput.focus();
      nameInput.style.outline = "2px solid #ef4444";
      setTimeout(() => (nameInput.style.outline = ""), 2000);
      return;
    }
    const comment = textarea.value.trim();
    if (!comment) return;
    _onSubmit({ comment, commenter: getCommenter() });
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
 * Render the full comment list with threaded replies.
 * Only shows comments whose text was successfully found in the document.
 *
 * @param {Array} comments - All comments
 * @param {Set} anchoredIds - Set of comment IDs that successfully anchored to text
 * @param {Map} commentRanges - Map of comment ID to Range for position sorting
 */
export function renderComments(comments, anchoredIds = new Set(), commentRanges = new Map()) {
  _lastComments = comments;
  _lastAnchoredIds = anchoredIds;  // Store for later use
  _listEl.innerHTML = "";

  const { topLevel, repliesByParent } = threadComments(comments);

  // Sort top-level comments by document position
  const sortedTopLevel = topLevel.slice().sort((a, b) => {
    const rangeA = commentRanges.get(a.id);
    const rangeB = commentRanges.get(b.id);

    // If either doesn't have a range, keep original order
    if (!rangeA || !rangeB) return 0;

    // Compare positions using Range.compareBoundaryPoints
    return rangeA.compareBoundaryPoints(Range.START_TO_START, rangeB);
  });

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

  for (const ann of visibleTopLevel) {
    const thread = document.createElement("div");
    thread.className = "fb-thread";

    thread.appendChild(buildCard(ann, false));

    // Render replies
    const replies = repliesByParent.get(ann.id) || [];
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
  const card = document.createElement("div");
  card.className = "fb-cmt-card"
    + (isClosed ? " fb-cmt-closed" : "")
    + (isReply ? " fb-cmt-reply" : "");
  card.dataset.id = ann.id;

  card.innerHTML = `
    <div class="fb-cmt-body">${escapeHtml(ann.body)}</div>
    <div class="fb-cmt-meta">
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
      if (e.target.closest(".fb-cmt-delete") || e.target.closest(".fb-cmt-resolve") || e.target.closest(".fb-cmt-edit") || e.target.closest(".fb-reactions")) return;
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

const REACTION_EMOJI = {
  "👍": "Like",
  "❤️": "Love",
  "👀": "Seen",
  "🎉": "Celebrate",
  "🤔": "Question",
  "😂": "Funny",
};
const EMOJI_SET = Object.keys(REACTION_EMOJI);

function buildReactionBar(container, ann) {
  const reactions = ann.reactions || [];
  const commenter = getCommenter();

  // Render existing reaction badges (icon-style, like Google Docs)
  for (const r of reactions) {
    const badge = document.createElement("button");
    badge.className = "fb-reaction-badge";
    const isMine = commenter && r.authors.includes(commenter);
    if (isMine) {
      badge.classList.add("fb-reaction-mine");
    }
    const label = REACTION_EMOJI[r.emoji];
    badge.innerHTML = `${r.emoji}<span class="fb-reaction-count">${r.count}</span>`;
    badge.title = (label ? label + ": " : "") + r.authors.join(", ");
    badge.addEventListener("click", (e) => {
      e.stopPropagation();
      if (_onReaction) _onReaction(ann.id, r.emoji);
    });
    container.appendChild(badge);
  }

  // Add-reaction button (muted icon style)
  const addBtn = document.createElement("button");
  addBtn.className = "fb-reaction-add";
  addBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>';
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
    const label = REACTION_EMOJI[emoji];
    const btn = document.createElement("button");
    btn.className = "fb-emoji-option";
    btn.textContent = emoji;
    btn.title = label;
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
      nameInput.style.outline = "2px solid #ef4444";
      setTimeout(() => (nameInput.style.outline = ""), 2000);
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
    :root {
      --fb-reaction-border: #dadce0;
      --fb-reaction-bg: #f1f3f4;
      --fb-reaction-text: #5f6368;
      --fb-reaction-hover-border: #bdc1c6;
      --fb-reaction-hover-bg: #e8eaed;
      --fb-reaction-mine-border: #1a73e8;
      --fb-reaction-mine-bg: #e8f0fe;
      --fb-reaction-mine-text: #1a73e8;
      --fb-reaction-mine-hover-bg: #d2e3fc;
      --fb-picker-bg: #fff;
      --fb-picker-border: #e0e0e0;
      --fb-picker-shadow: rgba(0,0,0,0.08);
      --fb-emoji-hover-bg: #e8eaed;
      --fb-emoji-hover-text: #202124;
    }
    .fb-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: ${SIDEBAR_WIDTH}px;
      height: 100vh;
      background: #fafafa;
      border-left: 1px solid #e0e0e0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      color: #333;
      transition: transform 0.25s ease;
      box-shadow: -2px 0 8px rgba(0,0,0,0.08);
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
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 6px 6px 0 0;
      padding: 6px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: -2px 0 6px rgba(0,0,0,0.15);
      transition: opacity 0.2s;
    }
    .fb-sidebar-tab:hover {
      background: #6d28d9;
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
      border-bottom: 1px solid #e0e0e0;
      background: #fff;
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
      color: #7c3aed;
      padding: 4px;
      line-height: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fb-ai-btn:hover {
      background: #f3f0ff;
    }
    .fb-hotkey-help-btn {
      background: none;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 4px 6px;
      cursor: pointer;
      color: #666;
      display: flex;
      align-items: center;
    }
    .fb-hotkey-help-btn:hover {
      background: #f3f0ff;
    }
    .fb-help-overlay {
      display: none;
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.4);
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }
    .fb-help-modal {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.2);
      max-width: 280px;
      width: 90%;
    }
    .fb-help-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .fb-help-close {
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      color: #666;
    }
    .fb-help-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    .fb-help-table td {
      padding: 6px 8px;
      border-bottom: 1px solid #f0f0f0;
    }
    .fb-help-table td:first-child {
      width: 80px;
    }
    .fb-help-table kbd {
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 2px 6px;
      font-family: monospace;
      font-size: 12px;
    }
    .fb-sidebar-toggle {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
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
      color: #666;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .fb-name-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
      box-sizing: border-box;
    }
    .fb-name-input:focus {
      outline: none;
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.15);
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
      color: #999;
      font-size: 13px;
      text-align: center;
      padding: 24px 12px;
    }
    .fb-cmt-card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-cmt-card:hover {
      border-color: #c4b5fd;
    }
    .fb-cmt-active {
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.12);
    }
    .fb-cmt-quote {
      font-size: 12px;
      color: #888;
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
      color: #999;
    }
    .fb-cmt-author {
      font-weight: 600;
      color: #7c3aed;
    }
    .fb-cmt-resolve {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-cmt-resolve:hover {
      color: #16a34a;
    }
    .fb-cmt-edit {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-edit:hover {
      color: #7c3aed;
    }
    .fb-cmt-delete {
      background: none;
      border: none;
      color: #ccc;
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-cmt-delete:hover {
      color: #ef4444;
    }
    .fb-cmt-closed {
      opacity: 0.5;
      border-left: 3px solid #16a34a;
    }
    .fb-cmt-closed .fb-cmt-body {
      text-decoration: line-through;
    }
    .fb-cmt-closed .fb-cmt-resolve {
      color: #16a34a;
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
      gap: 4px;
      padding: 2px 8px;
      border-radius: 12px;
      border: 1px solid var(--fb-reaction-border);
      background: var(--fb-reaction-bg);
      font-size: 11px;
      color: var(--fb-reaction-text);
      cursor: pointer;
      line-height: 1.4;
      font-family: inherit;
    }
    .fb-reaction-badge svg {
      color: var(--fb-reaction-text);
      flex-shrink: 0;
    }
    .fb-reaction-count {
      font-size: 11px;
      color: var(--fb-reaction-text);
    }
    .fb-reaction-badge:hover {
      border-color: var(--fb-reaction-hover-border);
      background: var(--fb-reaction-hover-bg);
    }
    .fb-reaction-mine {
      border-color: var(--fb-reaction-mine-border);
      background: var(--fb-reaction-mine-bg);
    }
    .fb-reaction-mine svg {
      color: var(--fb-reaction-mine-text);
    }
    .fb-reaction-mine .fb-reaction-count {
      color: var(--fb-reaction-mine-text);
    }
    .fb-reaction-mine:hover {
      background: var(--fb-reaction-mine-hover-bg);
      border-color: var(--fb-reaction-mine-border);
    }
    .fb-reaction-add {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 24px;
      border-radius: 12px;
      border: 1px solid var(--fb-reaction-border);
      background: var(--fb-reaction-bg);
      color: var(--fb-reaction-text);
      cursor: pointer;
      line-height: 1;
      font-family: inherit;
    }
    .fb-reaction-add:hover {
      border-color: var(--fb-reaction-hover-border);
      background: var(--fb-reaction-hover-bg);
    }
    .fb-emoji-picker {
      display: flex;
      gap: 2px;
      padding: 4px;
      background: var(--fb-picker-bg);
      border: 1px solid var(--fb-picker-border);
      border-radius: 8px;
      box-shadow: 0 2px 8px var(--fb-picker-shadow);
    }
    .fb-emoji-option {
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
      border-radius: 4px;
      line-height: 1;
      color: var(--fb-reaction-text);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .fb-emoji-option:hover {
      background: var(--fb-emoji-hover-bg);
      color: var(--fb-emoji-hover-text);
    }
    .fb-filter-section {
      margin-bottom: 12px;
    }
    .fb-filter-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #888;
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
      border-left: 2px solid #e5e7eb;
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
      color: #7c3aed;
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
      background: #fff;
      border: 1px solid #d1d5db;
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
      background: #fff;
      border: 2px solid #7c3aed;
      border-radius: 8px;
      padding: 12px;
    }
    .fb-form-quote {
      font-size: 12px;
      color: #888;
      font-style: italic;
      margin-bottom: 8px;
    }
    .fb-form-textarea {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 13px;
      font-family: inherit;
      resize: vertical;
      box-sizing: border-box;
    }
    .fb-form-textarea:focus {
      outline: none;
      border-color: #7c3aed;
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
      background: #7c3aed;
      color: white;
    }
    .fb-btn-primary:hover { background: #6d28d9; }
    .fb-btn-cancel {
      background: #f3f4f6;
      color: #555;
    }
    .fb-btn-cancel:hover { background: #e5e7eb; }

    /* Annotate tooltip (appears on text selection) */
    .fb-annotate-tooltip {
      position: absolute;
      z-index: 10001;
      background: #7c3aed;
      color: white;
      border: none;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4), 0 2px 4px rgba(0,0,0,0.1);
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
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #7c3aed;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
    }
    .fb-annotate-tooltip:hover {
      background: #6d28d9;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(124, 58, 237, 0.5), 0 2px 6px rgba(0,0,0,0.15);
    }
    .fb-annotate-tooltip:hover::after {
      border-top-color: #6d28d9;
    }
    @keyframes fb-tooltip-appear {
      from {
        opacity: 0;
        transform: translateY(-4px);
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
    @media (prefers-color-scheme: dark) {
      :root {
        --fb-reaction-border: #5f6368;
        --fb-reaction-bg: #3c4043;
        --fb-reaction-text: #bdc1c6;
        --fb-reaction-hover-border: #8ab4f8;
        --fb-reaction-hover-bg: #4a4e51;
        --fb-reaction-mine-border: #8ab4f8;
        --fb-reaction-mine-bg: #1e3a5f;
        --fb-reaction-mine-text: #8ab4f8;
        --fb-reaction-mine-hover-bg: #2b4f7e;
        --fb-picker-bg: #2d2e30;
        --fb-picker-border: #5f6368;
        --fb-picker-shadow: rgba(0,0,0,0.3);
        --fb-emoji-hover-bg: #4a4e51;
        --fb-emoji-hover-text: #e8eaed;
      }
    }
  `;
  document.head.appendChild(style);
}
