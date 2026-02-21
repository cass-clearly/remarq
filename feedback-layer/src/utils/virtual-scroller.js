/**
 * Virtual scrolling utilities for windowed rendering.
 *
 * Computes which items should be visible in a scrollable viewport,
 * keeping DOM node count constant regardless of total item count.
 */

/**
 * Compute the visible range of items for a virtual scroll viewport.
 *
 * @param {object} params
 * @param {number} params.scrollTop - Scroll offset relative to the list start
 * @param {number} params.viewportHeight - Height of the visible scroll area
 * @param {number[]} params.itemHeights - Array of item heights (including spacing)
 * @param {number} [params.buffer=5] - Extra items to render above and below viewport
 * @returns {{ startIndex: number, endIndex: number, offsetBefore: number, offsetAfter: number }}
 */
export function computeVisibleRange({ scrollTop, viewportHeight, itemHeights, buffer = 5 }) {
  const n = itemHeights.length;
  if (n === 0) {
    return { startIndex: 0, endIndex: 0, offsetBefore: 0, offsetAfter: 0 };
  }

  // Find first item that overlaps with the viewport
  let accum = 0;
  let rawStart = n;
  for (let i = 0; i < n; i++) {
    if (accum + itemHeights[i] > scrollTop) {
      rawStart = i;
      break;
    }
    accum += itemHeights[i];
  }

  // Find first item fully past the viewport
  let rawEnd = n;
  let top = accum;
  for (let i = rawStart; i < n; i++) {
    if (top >= scrollTop + viewportHeight) {
      rawEnd = i;
      break;
    }
    top += itemHeights[i];
  }

  // Apply buffer
  const startIndex = Math.max(0, rawStart - buffer);
  const endIndex = Math.min(n, rawEnd + buffer);

  // Compute spacer heights
  let offsetBefore = 0;
  for (let i = 0; i < startIndex; i++) {
    offsetBefore += itemHeights[i];
  }

  let offsetAfter = 0;
  for (let i = endIndex; i < n; i++) {
    offsetAfter += itemHeights[i];
  }

  return { startIndex, endIndex, offsetBefore, offsetAfter };
}

/**
 * Compute the scroll offset needed to bring an item into view.
 *
 * @param {number} itemIndex - Index of the target item
 * @param {number[]} itemHeights - Array of all item heights
 * @returns {number} Scroll offset to the top of the item
 */
export function scrollOffsetForItem(itemIndex, itemHeights) {
  let offset = 0;
  const limit = Math.min(itemIndex, itemHeights.length);
  for (let i = 0; i < limit; i++) {
    offset += itemHeights[i];
  }
  return offset;
}
