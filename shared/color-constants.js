/**
 * Shared color constants — single source of truth for both client and server.
 */

const COLOR_PRESETS = {
  yellow:  "#ffd400",
  red:     "#ff6b6b",
  green:   "#51cf66",
  blue:    "#339af0",
  purple:  "#9775fa",
  orange:  "#ff922b",
};

const DEFAULT_COLOR = COLOR_PRESETS["yellow"];

const PRESET_NAMES = Object.keys(COLOR_PRESETS);

// Matches 6-digit hex color codes, e.g. "#ff6b6b"
const HEX_COLOR_REGEX = /^#[0-9a-fA-F]{6}$/;

module.exports = { COLOR_PRESETS, DEFAULT_COLOR, PRESET_NAMES, HEX_COLOR_REGEX };
