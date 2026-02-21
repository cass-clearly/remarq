/**
 * Toast notification system for the feedback layer.
 *
 * Exports:
 * - initToastContainer(parentEl) — append toast container to sidebar
 * - showToast(message, type) — display a toast ('success' | 'error')
 */

let _container = null;

/**
 * Create and append the toast container inside the given parent element.
 */
export function initToastContainer(parentEl) {
  _container = document.createElement("div");
  _container.className = "fb-toast-container";
  parentEl.appendChild(_container);
}

/**
 * Show a toast notification.
 *
 * @param {string} message - Text to display
 * @param {'success'|'error'} type - Toast type
 */
export function showToast(message, type = "success") {
  if (!_container) return;

  const toast = document.createElement("div");
  toast.className = `fb-toast fb-toast-${type}`;

  const text = document.createElement("span");
  text.textContent = message;
  toast.appendChild(text);

  if (type === "error") {
    const dismiss = document.createElement("button");
    dismiss.className = "fb-toast-dismiss";
    dismiss.innerHTML = "&times;";
    dismiss.addEventListener("click", () => removeToast(toast));
    toast.appendChild(dismiss);
  }

  _container.appendChild(toast);

  // Trigger slide-up animation on next frame
  requestAnimationFrame(() => {
    toast.classList.add("fb-toast-visible");
  });

  // Auto-dismiss all toasts (errors get longer display time)
  const dismissMs = type === "error" ? 8000 : 4000;
  setTimeout(() => removeToast(toast), dismissMs);
}

function removeToast(toast) {
  toast.classList.remove("fb-toast-visible");
  toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  // Fallback removal if transitionend doesn't fire
  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 300);
}
