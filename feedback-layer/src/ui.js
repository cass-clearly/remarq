/**
 * AI revision UI: "Send Feedback to Claude" modal.
 * Triggered from the sidebar's AI button.
 */

import { buildPrompt } from "./prompt-builder.js";
import { escapeHtml } from "./escape-html.js";

const STYLES = `
  .hf-overlay {
    position: fixed;
    inset: 0;
    z-index: 10001;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hf-modal {
    background: white;
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .hf-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #e5e7eb;
  }

  .hf-modal-header h2 {
    margin: 0;
    font-size: 18px;
    color: #1f2937;
  }

  .hf-modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6b7280;
    padding: 0 4px;
  }

  .hf-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
  }

  .hf-modal-footer {
    padding: 12px 20px;
    border-top: 1px solid #e5e7eb;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  .hf-btn {
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
  }

  .hf-btn-primary {
    background: #7c3aed;
    color: white;
  }
  .hf-btn-primary:hover { background: #6d28d9; }

  .hf-btn-secondary {
    background: #f3f4f6;
    color: #374151;
  }
  .hf-btn-secondary:hover { background: #e5e7eb; }

  .hf-prompt-area {
    width: 100%;
    min-height: 300px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 12px;
    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
    font-size: 12px;
    resize: vertical;
    box-sizing: border-box;
  }

  .hf-status {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .hf-status-info { background: #eff6ff; color: #1e40af; }
  .hf-status-success { background: #f0fdf4; color: #166534; }
  .hf-status-error { background: #fef2f2; color: #991b1b; }
`;

let _getComments = null;
let _config = null;

/**
 * Initialize the AI revision UI.
 *
 * @param {Object} config
 * @param {Function} getComments - Returns the current comment list
 */
export function initAuthorUI(config, getComments) {
  _config = config;
  _getComments = getComments;

  injectStyles();
}

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = STYLES;
  document.head.appendChild(style);
}

export function openModal() {
  const comments = _getComments();

  const overlay = document.createElement("div");
  overlay.className = "hf-overlay";

  const modal = document.createElement("div");
  modal.className = "hf-modal";

  // Header
  const header = document.createElement("div");
  header.className = "hf-modal-header";
  header.innerHTML = `<h2>Send Feedback to Claude</h2>`;
  const closeBtn = document.createElement("button");
  closeBtn.className = "hf-modal-close";
  closeBtn.textContent = "\u00d7";
  closeBtn.addEventListener("click", () => overlay.remove());
  header.appendChild(closeBtn);

  // Body
  const body = document.createElement("div");
  body.className = "hf-modal-body";

  // Footer
  const footer = document.createElement("div");
  footer.className = "hf-modal-footer";

  modal.append(header, body, footer);
  overlay.appendChild(modal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.body.appendChild(overlay);

  if (comments.length === 0) {
    body.innerHTML = `<div class="hf-status hf-status-info">No comments yet. Ask reviewers to highlight text and add comments first.</div>`;
    return;
  }

  const docHtml = document.querySelector(
    _config.contentSelector || "body"
  ).innerHTML;

  const prompt = buildPrompt(docHtml, comments);

  body.innerHTML = `
    <div class="hf-status hf-status-success">
      ${comments.length} comment(s) found &mdash; prompt ready (${prompt.length.toLocaleString()} chars)
    </div>
    <textarea class="hf-prompt-area" readonly>${escapeHtml(prompt)}</textarea>
  `;

  // Copy button
  const copyBtn = document.createElement("button");
  copyBtn.className = "hf-btn hf-btn-primary";
  copyBtn.textContent = "Copy Prompt";
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      copyBtn.textContent = "Copied!";
    } catch {
      copyBtn.textContent = "Copy failed";
    }
    setTimeout(() => (copyBtn.textContent = "Copy Prompt"), 2000);
  });
  footer.appendChild(copyBtn);

  const closeBtn2 = document.createElement("button");
  closeBtn2.className = "hf-btn hf-btn-secondary";
  closeBtn2.textContent = "Close";
  closeBtn2.addEventListener("click", () => overlay.remove());
  footer.appendChild(closeBtn2);
}

