/**
 * Format comments into a numbered list for prompt generation, with threaded replies.
 *
 * @param {Array} comments - Flat list of comments
 * @returns {string} Formatted markdown string
 */
export function formatComments(comments) {
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

  if (topLevel.length === 0) {
    return "_No comments found._";
  }

  return topLevel
    .map((ann, i) => {
      const parts = [`**${i + 1}. [${ann.author}]**`];
      if (ann.quote) parts.push(`Highlighted text: "${ann.quote}"`);
      if (ann.body) parts.push(`Comment: ${ann.body}`);

      const replies = repliesByParent.get(ann.id) || [];
      for (const reply of replies) {
        parts.push(`  - **[${reply.author}]** (reply): ${reply.body}`);
      }

      return parts.join("\n");
    })
    .join("\n\n");
}
