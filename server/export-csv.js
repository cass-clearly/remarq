/**
 * CSV export: flatten comments into rows, escape per RFC 4180.
 */

const CSV_HEADERS = ["id", "quote", "body", "author", "status", "parent", "created_at"];

function escapeField(value) {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (str.includes('"') || str.includes(",") || str.includes("\n") || str.includes("\r")) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function exportCsv(comments) {
  const lines = [CSV_HEADERS.join(",")];
  for (const row of comments) {
    const status = row.parent ? null : row.status;
    const created = row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at;
    lines.push([
      escapeField(row.id),
      escapeField(row.quote || null),
      escapeField(row.body),
      escapeField(row.author),
      escapeField(status),
      escapeField(row.parent || null),
      escapeField(created),
    ].join(","));
  }
  return lines.join("\r\n") + "\r\n";
}

module.exports = { exportCsv, escapeField };
