/**
 * Formats comments and document content into a structured prompt for Claude.
 */

import { formatComments } from "./utils/format-comments.js";

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

