/**
 * Thread flat comments into parent + replies structure.
 *
 * @param {Array} comments - Flat list of comments (each may have a `parent` field)
 * @returns {{ topLevel: Array, repliesByParent: Map }}
 */
export function threadComments(comments) {
  const topLevel = [];
  const repliesByParent = new Map();

  for (const ann of comments) {
    if (ann.parent) {
      if (!repliesByParent.has(ann.parent)) repliesByParent.set(ann.parent, []);
      repliesByParent.get(ann.parent).push(ann);
    } else {
      topLevel.push(ann);
    }
  }

  return { topLevel, repliesByParent };
}
