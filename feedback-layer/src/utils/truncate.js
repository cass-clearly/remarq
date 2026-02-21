/**
 * Truncate a string to a maximum length, appending "..." if truncated.
 */
export function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}
