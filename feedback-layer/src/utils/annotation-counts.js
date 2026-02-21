/**
 * Count total annotations (comment + replies) per top-level comment.
 *
 * @param {Array} comments - Flat list of all comments
 * @returns {Map<string, number>} Map of top-level comment ID to total annotation count
 */
export function getAnnotationCounts(comments) {
  const counts = new Map();

  for (const c of comments) {
    if (!c.parent) {
      // Top-level comment: initialize with 1
      counts.set(c.id, (counts.get(c.id) || 0) + 1);
    } else {
      // Reply: increment parent's count
      counts.set(c.parent, (counts.get(c.parent) || 0) + 1);
    }
  }

  return counts;
}
