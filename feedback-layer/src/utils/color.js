/**
 * Color presets and validation for highlight colors.
 */

export const COLOR_PRESETS = {
  yellow:  "#ffd400",
  red:     "#ff6b6b",
  green:   "#51cf66",
  blue:    "#339af0",
  purple:  "#9775fa",
  pink:    "#f06595",
  orange:  "#ff922b",
  teal:    "#20c997",
};

export const DEFAULT_COLOR = "#ffd400";

const HEX_RE = /^#[0-9a-fA-F]{6}$/;

/**
 * Resolve a color value to a hex code.
 * Accepts a preset name (e.g. "red") or a 6-digit hex code (e.g. "#ff6b6b").
 * Returns null if invalid.
 */
export function resolveColor(value) {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim().toLowerCase();
  if (COLOR_PRESETS[trimmed]) return COLOR_PRESETS[trimmed];
  if (HEX_RE.test(trimmed)) return trimmed;
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
