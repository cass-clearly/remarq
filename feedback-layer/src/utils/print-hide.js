/**
 * Injects a <style> block that hides all Remarq UI elements when printing.
 *
 * Mobile Safari ignores @media print rules in the host page's stylesheet,
 * but respects them when injected directly into the document. This ensures
 * sidebar, tab, highlights, tooltips, and overlays are hidden in print
 * preview on all browsers including iOS Safari.
 *
 * @returns {HTMLStyleElement} the injected <style> element
 */
export function injectPrintHideStyles() {
  const style = document.createElement("style");
  style.setAttribute("data-remarq-print", "true");
  style.textContent = `@media print{[class^="fb-"],[class*=" fb-"],[class^="hf-"],[class*=" hf-"]{display:none!important}}`;
  document.head.appendChild(style);
  return style;
}
