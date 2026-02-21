/**
 * Keyboard Shortcuts Module
 *
 * Provides keyboard navigation and shortcuts for the sidebar.
 *
 * Key bindings:
 * - J/K or Arrow Down/Up: Navigate next/previous annotation
 * - Escape: Close sidebar
 * - ?: Show keyboard shortcuts help
 *
 * Future: R (reply), Enter (resolve) when focused on a comment
 */

let _isEnabled = false;
let _comments = [];
let _currentIndex = -1;
let _onNavigate = null;
let _onClose = null;
let _helpOverlay = null;

const SHORTCUTS = [
  { keys: ['j', 'ArrowDown'], description: 'Next annotation' },
  { keys: ['k', 'ArrowUp'], description: 'Previous annotation' },
  { keys: ['Escape'], description: 'Close sidebar' },
  { keys: ['?'], description: 'Show this help' },
];

/**
 * Initialize keyboard shortcuts
 * @param {Object} options
 * @param {Function} options.onNavigate - Called with comment ID when navigating
 * @param {Function} options.onClose - Called when ESC is pressed
 */
export function initKeyboardShortcuts({ onNavigate, onClose }) {
  _onNavigate = onNavigate;
  _onClose = onClose;

  document.addEventListener('keydown', handleKeyDown);
  createHelpOverlay();
}

/**
 * Enable/disable keyboard shortcuts (e.g., when sidebar opens/closes)
 */
export function setKeyboardEnabled(enabled) {
  _isEnabled = enabled;
  if (!enabled) {
    _currentIndex = -1;
  }
}

/**
 * Update the list of comments for navigation
 */
export function setKeyboardComments(comments) {
  _comments = comments || [];
  _currentIndex = -1;
}

function handleKeyDown(event) {
  if (!_isEnabled) return;

  // Don't handle shortcuts when typing in an input
  const activeElement = document.activeElement;
  if (
    activeElement &&
    (activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.isContentEditable)
  ) {
    return;
  }

  const key = event.key;

  // Navigation: J/K or Arrow keys
  if (key === 'j' || key === 'ArrowDown') {
    event.preventDefault();
    navigateNext();
  } else if (key === 'k' || key === 'ArrowUp') {
    event.preventDefault();
    navigatePrevious();
  }
  // Close sidebar: ESC
  else if (key === 'Escape') {
    event.preventDefault();
    if (_onClose) _onClose();
  }
  // Show help: ?
  else if (key === '?' && event.shiftKey === false) {
    event.preventDefault();
    toggleHelpOverlay();
  }
}

function navigateNext() {
  if (_comments.length === 0) return;

  _currentIndex = (_currentIndex + 1) % _comments.length;
  const comment = _comments[_currentIndex];
  if (_onNavigate && comment) {
    _onNavigate(comment.id);
  }
}

function navigatePrevious() {
  if (_comments.length === 0) return;

  _currentIndex = _currentIndex <= 0 ? _comments.length - 1 : _currentIndex - 1;
  const comment = _comments[_currentIndex];
  if (_onNavigate && comment) {
    _onNavigate(comment.id);
  }
}

function createHelpOverlay() {
  _helpOverlay = document.createElement('div');
  _helpOverlay.className = 'remarq-keyboard-help';
  _helpOverlay.style.display = 'none';

  const content = document.createElement('div');
  content.className = 'remarq-keyboard-help-content';

  const title = document.createElement('h3');
  title.textContent = 'Keyboard Shortcuts';
  content.appendChild(title);

  const list = document.createElement('dl');
  SHORTCUTS.forEach(({ keys, description }) => {
    const dt = document.createElement('dt');
    dt.textContent = keys.join(' / ');
    const dd = document.createElement('dd');
    dd.textContent = description;
    list.appendChild(dt);
    list.appendChild(dd);
  });
  content.appendChild(list);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.className = 'remarq-keyboard-help-close';
  closeBtn.onclick = () => toggleHelpOverlay();
  content.appendChild(closeBtn);

  _helpOverlay.appendChild(content);

  // Add to body (not sidebar, so it works even when sidebar closed)
  document.body.appendChild(_helpOverlay);

  // Close on click outside
  _helpOverlay.addEventListener('click', (e) => {
    if (e.target === _helpOverlay) {
      toggleHelpOverlay();
    }
  });
}

function toggleHelpOverlay() {
  if (!_helpOverlay) return;

  const isVisible = _helpOverlay.style.display !== 'none';
  _helpOverlay.style.display = isVisible ? 'none' : 'flex';
}

/**
 * Add a "?" button to the sidebar footer to show help
 */
export function addKeyboardHelpButton(sidebar) {
  const footer = sidebar.querySelector('.remarq-sidebar-footer');
  if (!footer) return;

  const helpBtn = document.createElement('button');
  helpBtn.className = 'remarq-keyboard-help-btn';
  helpBtn.textContent = '?';
  helpBtn.title = 'Keyboard shortcuts';
  helpBtn.onclick = () => toggleHelpOverlay();

  footer.appendChild(helpBtn);
}
