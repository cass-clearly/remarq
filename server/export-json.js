/**
 * JSON export: wraps comments in a document metadata envelope.
 */

function formatExportComment(row) {
  const comment = {
    id: row.id,
    quote: row.quote || null,
    body: row.body,
    author: row.author,
    status: row.parent ? null : row.status,
    parent: row.parent || null,
    created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  };
  return comment;
}

function exportJson(document, comments) {
  return JSON.stringify({
    document: {
      id: document.id,
      uri: document.uri,
      exported_at: new Date().toISOString(),
    },
    annotations: comments.map(formatExportComment),
  }, null, 2);
}

module.exports = { exportJson };
