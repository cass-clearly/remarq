/**
 * Color presets and validation for highlight colors.
 */

// Re-export shared constants (single source of truth)
export { COLOR_PRESETS, DEFAULT_COLOR, HEX_COLOR_REGEX } from "../../../shared/color-constants.js";

import { COLOR_PRESETS, HEX_COLOR_REGEX } from "../../../shared/color-constants.js";

/**
 * Resolve a color value to a hex code.
 * Accepts a preset name (e.g. "red") or a 6-digit hex code (e.g. "#ff6b6b").
 * Returns null if invalid.
 */
export function resolveColor(value) {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim().toLowerCase();
  if (COLOR_PRESETS[trimmed]) return COLOR_PRESETS[trimmed];
  if (HEX_COLOR_REGEX.test(trimmed)) return trimmed;
  return null;
}

/**
 * Convert a hex color to rgba with the given opacity.
 */
export function hexToRgba(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
