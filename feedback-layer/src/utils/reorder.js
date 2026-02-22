/**
 * Calculates new sort_order values when a comment is moved via drag-and-drop.
 *
 * @param {Array} comments - Ordered array of top-level comments (current display order)
 * @param {number} fromIndex - Index of the dragged comment in the current order
 * @param {number} toIndex - Index where the comment is dropped
 * @returns {Array<{id: string, sortOrder: number}>} - New sort_order for all comments
 */
export function recalculateSortOrder(comments, fromIndex, toIndex) {
  if (fromIndex === toIndex) return [];
  if (fromIndex < 0 || fromIndex >= comments.length) return [];
  if (toIndex < 0 || toIndex >= comments.length) return [];

  const reordered = comments.map((c) => c.id);
  const [moved] = reordered.splice(fromIndex, 1);
  reordered.splice(toIndex, 0, moved);

  return reordered.map((id, i) => ({ id, sortOrder: i }));
}
