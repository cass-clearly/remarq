/**
 * Server-side color validation for highlight colors.
 */

const { PRESET_NAMES, HEX_COLOR_REGEX } = require("../shared/color-constants.js");

const PRESET_SET = new Set(PRESET_NAMES);

/**
 * Validate a color value. Returns the normalized value if valid, null otherwise.
 * Accepts preset names (e.g. "red") or 6-digit hex codes (e.g. "#ff6b6b").
 */
function validateColor(value) {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim().toLowerCase();
  if (PRESET_SET.has(trimmed)) return trimmed;
  if (HEX_COLOR_REGEX.test(trimmed)) return trimmed;
  return null;
}

module.exports = { validateColor };
