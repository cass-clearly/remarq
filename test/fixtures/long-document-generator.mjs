/**
 * Generate synthetic HTML documents for performance testing.
 *
 * Documents contain N paragraphs with unique text, enabling realistic
 * text-anchoring benchmarks via Apache Annotator's TextQuoteSelector.
 */

const TOPICS = [
  'software architecture', 'system design', 'code quality',
  'performance optimization', 'user experience', 'data management',
  'security practices', 'testing methodology', 'deployment strategy',
  'monitoring approach', 'team collaboration', 'project planning',
  'technical documentation', 'API design', 'database modeling',
  'network protocols', 'cloud infrastructure', 'container orchestration',
  'version control', 'build automation',
];

const VERBS = [
  'demonstrates', 'illustrates', 'explores', 'examines', 'analyzes',
  'evaluates', 'considers', 'investigates', 'discusses', 'describes',
  'outlines', 'presents', 'highlights', 'addresses', 'reviews',
  'assesses', 'compares', 'contrasts', 'establishes', 'validates',
];

const ADJECTIVES = [
  'critical', 'fundamental', 'essential', 'significant', 'notable',
  'comprehensive', 'practical', 'innovative', 'effective', 'reliable',
  'scalable', 'maintainable', 'robust', 'flexible', 'efficient',
  'modern', 'advanced', 'strategic', 'systematic', 'structured',
];

function pick(arr, index) {
  return arr[index % arr.length];
}

/**
 * Generate the text content for a single paragraph (plain text, no HTML).
 * Each paragraph starts with "Paragraph N" to guarantee uniqueness.
 */
export function generateParagraphText(index) {
  const sentences = [
    `Paragraph ${index + 1} ${pick(VERBS, index)} the ${pick(ADJECTIVES, index + 1)} aspects of ${pick(TOPICS, index + 2)} in modern development environments.`,
    `The ${pick(ADJECTIVES, index + 3)} nature of ${pick(TOPICS, index + 4)} requires careful consideration of multiple factors including scalability, maintainability, and performance.`,
    `This analysis ${pick(VERBS, index + 5)} how ${pick(ADJECTIVES, index + 6)} approaches to ${pick(TOPICS, index + 7)} can significantly improve overall system quality.`,
    `Furthermore, ${pick(TOPICS, index + 8)} ${pick(VERBS, index + 9)} the importance of adopting ${pick(ADJECTIVES, index + 10)} practices throughout the development lifecycle.`,
  ];
  // Alternate between 3 and 4 sentences for natural variation
  return sentences.slice(0, 3 + (index % 2)).join(' ');
}

/**
 * Generate HTML body content with N paragraphs grouped into sections.
 */
export function generateDocument(paragraphCount) {
  let html = '';
  for (let i = 0; i < paragraphCount; i++) {
    if (i % 10 === 0) {
      html += `  <h2>Section ${Math.floor(i / 10) + 1}</h2>\n`;
    }
    html += `  <p>${generateParagraphText(i)}</p>\n`;
  }
  return html;
}

/**
 * Generate a complete HTML page suitable for loading in Puppeteer.
 */
export function generatePage(paragraphCount) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Performance Test - ${paragraphCount} paragraphs</title>
  <style>
    body { max-width: 720px; margin: 40px auto; padding: 0 20px; font-family: Georgia, serif; line-height: 1.7; color: #333; }
    h1 { font-size: 2em; }
    h2 { font-size: 1.4em; margin-top: 1.8em; }
    p { margin: 1em 0; }
  </style>
</head>
<body>
<article>
  <h1>Performance Test Document (${paragraphCount} paragraphs)</h1>
${generateDocument(paragraphCount)}
</article>
<script src="/feedback-layer.js" data-content-selector="article"></script>
</body>
</html>`;
}

/**
 * Generate mock annotations whose quotes match actual text in the document.
 *
 * Each annotation references a different paragraph, distributed evenly
 * across the document. The quote is taken from the start of the paragraph
 * (which includes the unique "Paragraph N" prefix) so rangeFromSelector
 * is guaranteed to find it.
 */
export function generateAnnotations(paragraphCount, annotationCount) {
  const annotations = [];

  for (let i = 0; i < annotationCount; i++) {
    const pIndex = Math.floor(i * paragraphCount / annotationCount);
    const text = generateParagraphText(pIndex);

    // Quote the first 50-70 characters (includes unique paragraph number)
    const quoteEnd = Math.min(50 + (i % 20), text.length);
    const quote = text.substring(0, quoteEnd);
    const suffix = text.substring(quoteEnd, Math.min(quoteEnd + 32, text.length));

    annotations.push({
      id: `cmt_perf_${i}`,
      quote,
      prefix: '',
      suffix,
      body: `Performance test comment ${i}`,
      author: 'PerfTester',
      created_at: new Date().toISOString(),
      status: 'open',
      parent: null,
    });
  }

  return annotations;
}
