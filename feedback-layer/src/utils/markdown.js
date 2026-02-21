/**
 * Lightweight regex-based markdown renderer.
 *
 * Supports: **bold**, *italic*, `inline code`, [links](url)
 * All input is HTML-escaped first, then markdown tokens are replaced
 * with whitelisted HTML tags. URLs are sanitized to block javascript:/data: schemes.
 */

import { escapeHtml } from "./escape-html.js";

/**
 * Returns true if the URL scheme is safe for use in href attributes.
 * Allows http, https, mailto, and bare fragments/relative paths.
 * Blocks javascript:, data:, vbscript:, and other dangerous schemes.
 *
 * @param {string} url - The raw URL string
 * @returns {boolean}
 */
export function isSafeUrl(url) {
  const trimmed = url.trim();
  // Block known dangerous schemes (case-insensitive)
  if (/^\s*(javascript|data|vbscript)\s*:/i.test(trimmed)) {
    return false;
  }
  return true;
}

/**
 * Render a plain-text markdown string into safe HTML.
 *
 * Processing order matters: escape HTML first, then apply markdown
 * transformations from most-specific to least-specific to avoid
 * conflicts between patterns.
 *
 * @param {string} text - Raw markdown text (untrusted user input)
 * @returns {string} Safe HTML string
 */
export function renderMarkdown(text) {
  if (!text) return "";

  let html = escapeHtml(text);

  // Extract code spans first so their contents are protected from further parsing.
  // Replace with placeholders, apply bold/italic/links, then restore.
  const codeSpans = [];
  html = html.replace(/`([^`]+?)`/g, (_match, code) => {
    const index = codeSpans.length;
    codeSpans.push(`<code>${code}</code>`);
    return `\x00CODE${index}\x00`;
  });

  // Bold (**text**)
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Italic (*text*) — only match single asterisks not preceded/followed by another
  html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");

  // Links [text](url) — URL has already been HTML-escaped, so decode for validation
  html = html.replace(/\[([^\]]+?)\]\(([^)]+?)\)/g, (_match, linkText, rawUrl) => {
    const url = rawUrl
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    if (!isSafeUrl(url)) {
      return linkText;  // Strip the link, keep the text
    }
    return `<a href="${rawUrl}" rel="noopener noreferrer" target="_blank">${linkText}</a>`;
  });

  // Restore code spans
  html = html.replace(/\x00CODE(\d+)\x00/g, (_match, index) => codeSpans[index]);

  return html;
}
