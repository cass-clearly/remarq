/**
 * Preview Tooltip for Highlights
 *
 * Shows a preview of the comment when hovering over a highlight.
 * Displays: comment snippet, author, status
 */

let _tooltip = null;
let _hoverTimer = null;
let _comments = [];

const HOVER_DELAY = 200; // ms

/**
 * Initialize the preview tooltip system
 * @param {Array} comments - Array of comment objects
 */
export function initPreviewTooltip(comments) {
  _comments = comments || [];

  if (!_tooltip) {
    createTooltip();
  }
}

/**
 * Update the comments array (call when comments change)
 */
export function updatePreviewComments(comments) {
  _comments = comments || [];
}

/**
 * Attach hover listeners to a highlight element
 * @param {HTMLElement} highlight - The highlight (<mark>) element
 * @param {string} commentId - The comment ID
 */
export function attachPreviewListeners(highlight, commentId) {
  highlight.addEventListener('mouseenter', (e) => {
    clearTimeout(_hoverTimer);
    _hoverTimer = setTimeout(() => {
      showPreview(commentId, e);
    }, HOVER_DELAY);
  });

  highlight.addEventListener('mouseleave', () => {
    clearTimeout(_hoverTimer);
    hidePreview();
  });

  // Also hide on mouse move away from the highlight
  highlight.addEventListener('mousemove', (e) => {
    if (e.target !== highlight && !highlight.contains(e.target)) {
      hidePreview();
    }
  });
}

function createTooltip() {
  _tooltip = document.createElement('div');
  _tooltip.className = 'remarq-preview-tooltip';
  _tooltip.style.display = 'none';
  
  _tooltip.addEventListener('mouseenter', () => {
    // Keep tooltip visible when hovering over it
    clearTimeout(_hoverTimer);
  });

  _tooltip.addEventListener('mouseleave', () => {
    hidePreview();
  });

  document.body.appendChild(_tooltip);
}

function showPreview(commentId, event) {
  const comment = _comments.find(c => c.id === commentId);
  if (!comment || !_tooltip) return;

  // Build preview content
  const snippet = truncateText(comment.comment, 100);
  const status = comment.resolved ? 'Resolved' : 'Open';
  const statusClass = comment.resolved ? 'resolved' : 'open';

  _tooltip.innerHTML = `
    <div class="remarq-preview-status remarq-preview-status-${statusClass}">${status}</div>
    <div class="remarq-preview-text">"${escapeHtml(snippet)}"</div>
    <div class="remarq-preview-author">— ${escapeHtml(comment.commenter || 'Anonymous')}</div>
  `;

  // Position near the mouse
  positionTooltip(event);

  _tooltip.style.display = 'block';
}

function hidePreview() {
  if (_tooltip) {
    _tooltip.style.display = 'none';
  }
}

function positionTooltip(event) {
  if (!_tooltip) return;

  const padding = 10;
  let x = event.clientX + padding;
  let y = event.clientY + padding;

  // Ensure tooltip stays within viewport
  const rect = _tooltip.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (x + rect.width > viewportWidth) {
    x = event.clientX - rect.width - padding;
  }

  if (y + rect.height > viewportHeight) {
    y = event.clientY - rect.height - padding;
  }

  _tooltip.style.left = `${x}px`;
  _tooltip.style.top = `${y}px`;
}

function truncateText(text, maxLength) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '…';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Inject CSS styles for the preview tooltip
 */
export function injectPreviewStyles() {
  if (document.getElementById('remarq-preview-styles')) return;

  const style = document.createElement('style');
  style.id = 'remarq-preview-styles';
  style.textContent = `
    .remarq-preview-tooltip {
      position: fixed;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px;
      max-width: 300px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
      z-index: 10001;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      pointer-events: auto;
    }

    .remarq-preview-status {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .remarq-preview-status-open {
      color: #10b981;
    }

    .remarq-preview-status-resolved {
      color: #6b7280;
    }

    .remarq-preview-text {
      font-style: italic;
      color: #374151;
      margin-bottom: 8px;
    }

    .remarq-preview-author {
      font-size: 12px;
      color: #6b7280;
      font-weight: 500;
    }
  `;

  document.head.appendChild(style);
}
