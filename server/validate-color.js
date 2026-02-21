/**
 * Server-side color validation for highlight colors.
 */

const PRESET_NAMES = new Set([
  "yellow", "red", "green", "blue", "purple", "pink", "orange", "teal",
]);

const HEX_RE = /^#[0-9a-fA-F]{6}$/;

/**
 * Validate a color value. Returns the normalized value if valid, null otherwise.
 * Accepts preset names (e.g. "red") or 6-digit hex codes (e.g. "#ff6b6b").
 */
function validateColor(value) {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim().toLowerCase();
  if (PRESET_NAMES.has(trimmed)) return trimmed;
  if (HEX_RE.test(trimmed)) return trimmed;
  return null;
}

module.exports = { validateColor };
