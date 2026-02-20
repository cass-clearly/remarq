/**
 * Formats comments and document content into a structured prompt for Claude.
 */

/**
 * Build a Claude prompt from the document HTML and reviewer comments.
 *
 * @param {string} documentHtml - The full HTML of the document being reviewed
 * @param {Array<{quote: string, body: string, author: string}>} comments
 * @returns {string} The formatted prompt
 */
export function buildPrompt(documentHtml, comments) {
  const feedbackSection = formatComments(comments);

  const topLevelCount = comments.filter((a) => !a.parent).length;

  return `You are a document editor. Below is an HTML document and feedback from ${topLevelCount} reviewer comment(s) (with replies). Revise the document to address the feedback.

## Original Document

\`\`\`html
${documentHtml}
\`\`\`

## Reviewer Feedback

${feedbackSection}

## Instructions

1. Carefully read each piece of feedback and the highlighted text it refers to.
2. Revise the document HTML to address the feedback where appropriate.
3. Preserve the overall structure and formatting of the document.
4. After the revised HTML, include a brief changelog noting which feedback items you addressed and how.

Respond with:

### Revised Document
\`\`\`html
[your revised HTML here]
\`\`\`

### Changelog
[numbered list matching feedback numbers, explaining what you changed]`;
}

/**
 * Format comments into a numbered list for the prompt, with threaded replies.
 */
function formatComments(comments) {
  // Thread into parents + replies
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

export const _testExports = { formatComments };
