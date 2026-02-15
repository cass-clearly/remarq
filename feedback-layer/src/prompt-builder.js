/**
 * Formats annotations and document content into a structured prompt for Claude.
 */

/**
 * Build a Claude prompt from the document HTML and reviewer annotations.
 *
 * @param {string} documentHtml - The full HTML of the document being reviewed
 * @param {Array<{quote: string, comment: string, commenter: string}>} annotations
 * @returns {string} The formatted prompt
 */
export function buildPrompt(documentHtml, annotations) {
  const feedbackSection = formatAnnotations(annotations);

  return `You are a document editor. Below is an HTML document and feedback from ${annotations.length} reviewer annotation(s). Revise the document to address the feedback.

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
 * Format annotations into a numbered list for the prompt.
 */
function formatAnnotations(annotations) {
  if (annotations.length === 0) {
    return "_No annotations found._";
  }

  return annotations
    .map((ann, i) => {
      const parts = [`**${i + 1}. [${ann.commenter}]**`];
      parts.push(`Highlighted text: "${ann.quote}"`);
      if (ann.comment) parts.push(`Comment: ${ann.comment}`);
      return parts.join("\n");
    })
    .join("\n\n");
}
