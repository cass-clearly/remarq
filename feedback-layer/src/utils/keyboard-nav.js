/**
 * Keyboard navigation utilities for sidebar focus management.
 */

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Returns an array of focusable elements within the given container.
 *
 * @param {Element} container
 * @returns {Element[]}
 */
export function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));
}

/**
 * Wraps an index around so it stays within [0, length).
 * Useful for cycling through a list with arrow keys.
 *
 * @param {number} index
 * @param {number} length
 * @returns {number}
 */
export function wrapIndex(index, length) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}
