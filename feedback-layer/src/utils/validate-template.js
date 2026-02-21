/**
 * Validate template fields.
 * Returns an array of error messages (empty if valid).
 */
export function validateTemplate({ name, body, author }) {
  const errors = [];
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    errors.push("name is required");
  } else if (name.length > 100) {
    errors.push("name must be 100 characters or fewer");
  }
  if (!body || typeof body !== "string" || body.trim().length === 0) {
    errors.push("body is required");
  } else if (body.length > 2000) {
    errors.push("body must be 2000 characters or fewer");
  }
  if (!author || typeof author !== "string" || author.trim().length === 0) {
    errors.push("author is required");
  }
  return errors;
}
