/**
 * Sidebar UI: name input, annotation list, comment form.
 */

import {
  setActiveHighlight,
  scrollToHighlight,
} from "./highlights.js";

const SIDEBAR_WIDTH = 320;
const COMMENTER_KEY = "feedback-layer-commenter";

let _sidebar = null;
let _listEl = null;
let _formEl = null;
let _pendingQuote = null;
let _onSubmit = null;
let _onDelete = null;
let _onResolve = null;
let _showResolved = false;
let _lastAnnotations = [];

export function getCommenter() {
  return localStorage.getItem(COMMENTER_KEY) || "";
}

/**
 * Create and inject the sidebar into the page.
 *
 * @param {Object} opts
 * @param {Function} opts.onSubmit - Called with {comment, commenter} when form submitted
 * @param {Function} opts.onDelete - Called with annotationId when delete clicked
 * @param {Function} opts.onResolve - Called with (annotationId, resolved) when resolve toggled
 */
export function createSidebar({ onSubmit, onDelete, onResolve }) {
  _onSubmit = onSubmit;
  _onDelete = onDelete;
  _onResolve = onResolve;

  injectStyles();

  _sidebar = document.createElement("div");
  _sidebar.className = "fb-sidebar";
  _sidebar.innerHTML = `
    <div class="fb-sidebar-header">
      <strong>Feedback</strong>
      <button class="fb-sidebar-toggle" title="Close sidebar">&times;</button>
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
          <span>Show resolved</span>
        </label>
      </div>
      <div class="fb-annotation-list"></div>
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

  _listEl = _sidebar.querySelector(".fb-annotation-list");
  _formEl = _sidebar.querySelector(".fb-form-section");

  // Name input
  const nameInput = _sidebar.querySelector(".fb-name-input");
  nameInput.addEventListener("input", () => {
    localStorage.setItem(COMMENTER_KEY, nameInput.value.trim());
  });

  // Close button in header
  const toggleBtn = _sidebar.querySelector(".fb-sidebar-toggle");
  toggleBtn.addEventListener("click", () => closeSidebar());

  // Show/hide resolved filter
  const resolvedCb = _sidebar.querySelector(".fb-show-resolved-cb");
  resolvedCb.addEventListener("change", () => {
    _showResolved = resolvedCb.checked;
    renderAnnotations(_lastAnnotations);
  });
}

function openSidebar() {
  _sidebar.classList.remove("fb-sidebar-collapsed");
  document.querySelector(".fb-sidebar-tab").classList.add("fb-sidebar-tab-hidden");
}

function closeSidebar() {
  _sidebar.classList.add("fb-sidebar-collapsed");
  document.querySelector(".fb-sidebar-tab").classList.remove("fb-sidebar-tab-hidden");
}

/**
 * Show the comment form for a new annotation.
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

  _formEl.querySelector(".fb-submit-btn").addEventListener("click", () => {
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
  });

  _formEl.querySelector(".fb-cancel-btn").addEventListener("click", () => {
    _formEl.style.display = "none";
    _pendingQuote = null;
  });

  // Scroll form into view
  _formEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/**
 * Render the full annotation list.
 */
export function renderAnnotations(annotations) {
  _lastAnnotations = annotations;
  _listEl.innerHTML = "";

  const visible = _showResolved
    ? annotations
    : annotations.filter((a) => !a.resolved);

  if (annotations.length === 0) {
    _listEl.innerHTML = `<div class="fb-empty">No annotations yet. Select text to add one.</div>`;
    return;
  }

  if (visible.length === 0) {
    const resolvedCount = annotations.length;
    _listEl.innerHTML = `<div class="fb-empty">All ${resolvedCount} annotation(s) resolved. Check "Show resolved" to see them.</div>`;
    return;
  }

  for (const ann of visible) {
    const isResolved = !!ann.resolved;
    const card = document.createElement("div");
    card.className = "fb-ann-card" + (isResolved ? " fb-ann-resolved" : "");
    card.dataset.id = ann.id;
    card.innerHTML = `
      <div class="fb-ann-quote">"${escapeHtml(truncate(ann.quote, 100))}"</div>
      <div class="fb-ann-comment">${escapeHtml(ann.comment)}</div>
      <div class="fb-ann-meta">
        <span class="fb-ann-commenter">${escapeHtml(ann.commenter)}</span>
        <span class="fb-ann-time">${timeAgo(ann.created_at)}</span>
        <button class="fb-ann-resolve" title="${isResolved ? "Unresolve" : "Resolve"}">${isResolved ? "&#x21a9;" : "&#x2713;"}</button>
        <button class="fb-ann-delete" title="Delete">&times;</button>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".fb-ann-delete") || e.target.closest(".fb-ann-resolve")) return;
      setActiveHighlight(ann.id);
      scrollToHighlight(ann.id);
      _listEl
        .querySelectorAll(".fb-ann-card")
        .forEach((c) => c.classList.remove("fb-ann-active"));
      card.classList.add("fb-ann-active");
    });

    card.querySelector(".fb-ann-resolve").addEventListener("click", (e) => {
      e.stopPropagation();
      if (_onResolve) _onResolve(ann.id, !isResolved);
    });

    card.querySelector(".fb-ann-delete").addEventListener("click", (e) => {
      e.stopPropagation();
      if (_onDelete) _onDelete(ann.id);
    });

    _listEl.appendChild(card);
  }
}

/**
 * Scroll the sidebar to a specific annotation card and highlight it.
 */
export function focusAnnotationCard(annotationId) {
  const card = _listEl.querySelector(
    `.fb-ann-card[data-id="${annotationId}"]`
  );
  if (card) {
    _listEl
      .querySelectorAll(".fb-ann-card")
      .forEach((c) => c.classList.remove("fb-ann-active"));
    card.classList.add("fb-ann-active");
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso + "Z").getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
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
    .fb-annotation-list {
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
    .fb-ann-card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 10px 12px;
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .fb-ann-card:hover {
      border-color: #c4b5fd;
    }
    .fb-ann-active {
      border-color: #7c3aed;
      box-shadow: 0 0 0 2px rgba(124,58,237,0.12);
    }
    .fb-ann-quote {
      font-size: 12px;
      color: #888;
      font-style: italic;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    .fb-ann-comment {
      font-size: 13px;
      line-height: 1.5;
      margin-bottom: 6px;
    }
    .fb-ann-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: #999;
    }
    .fb-ann-commenter {
      font-weight: 600;
      color: #7c3aed;
    }
    .fb-ann-resolve {
      background: none;
      border: none;
      color: #aaa;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      margin-left: auto;
    }
    .fb-ann-resolve:hover {
      color: #16a34a;
    }
    .fb-ann-delete {
      background: none;
      border: none;
      color: #ccc;
      cursor: pointer;
      font-size: 16px;
      padding: 0 2px;
      line-height: 1;
    }
    .fb-ann-delete:hover {
      color: #ef4444;
    }
    .fb-ann-resolved {
      opacity: 0.5;
      border-left: 3px solid #16a34a;
    }
    .fb-ann-resolved .fb-ann-comment {
      text-decoration: line-through;
    }
    .fb-ann-resolved .fb-ann-resolve {
      color: #16a34a;
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
      border-radius: 6px;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      white-space: nowrap;
    }
    .fb-annotate-tooltip:hover {
      background: #6d28d9;
    }
  `;
  document.head.appendChild(style);
}
