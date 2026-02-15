/**
 * Text anchoring using Apache Annotator.
 *
 * Wraps @apache-annotator/dom to:
 * - Create TextQuoteSelectors from user selections (describeTextQuote)
 * - Re-anchor selectors to DOM ranges (createTextQuoteSelectorMatcher)
 */

import {
  describeTextQuote,
  createTextQuoteSelectorMatcher,
} from "@apache-annotator/dom";

/**
 * Create a TextQuoteSelector from the current browser Selection.
 *
 * @param {Range} range - The selected range
 * @param {Element} root - The root element to scope the selector to
 * @returns {Promise<{exact: string, prefix: string, suffix: string}>}
 */
export async function selectorFromRange(range, root) {
  const selector = await describeTextQuote(range, root);
  return {
    exact: selector.exact,
    prefix: selector.prefix || "",
    suffix: selector.suffix || "",
  };
}

/**
 * Find the DOM Range matching a TextQuoteSelector.
 *
 * @param {{exact: string, prefix?: string, suffix?: string}} selector
 * @param {Element} root - The root element to search within
 * @returns {Promise<Range|null>}
 */
export async function rangeFromSelector(selector, root) {
  const matcher = createTextQuoteSelectorMatcher({
    type: "TextQuoteSelector",
    exact: selector.exact,
    prefix: selector.prefix || undefined,
    suffix: selector.suffix || undefined,
  });

  for await (const range of matcher(root)) {
    return range; // return first match
  }
  return null;
}
