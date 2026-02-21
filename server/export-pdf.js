/**
 * PDF export: stream-based PDF generation with pdfkit.
 */
const PDFDocument = require("pdfkit");

function exportPdf(document, comments) {
  const doc = new PDFDocument({ margin: 50, size: "A4" });

  // Title
  doc.fontSize(18).font("Helvetica-Bold").text("Annotation Export", { align: "center" });
  doc.moveDown(0.5);

  // Document metadata
  doc.fontSize(10).font("Helvetica").fillColor("#666666");
  doc.text(`Document: ${document.uri}`);
  doc.text(`Exported: ${new Date().toISOString()}`);
  doc.text(`Total annotations: ${comments.filter((c) => !c.parent).length}`);
  doc.moveDown(1);

  // Separator
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#cccccc").stroke();
  doc.moveDown(0.5);

  // Group comments: top-level with their replies
  const topLevel = comments.filter((c) => !c.parent);
  const repliesByParent = new Map();
  for (const c of comments) {
    if (c.parent) {
      if (!repliesByParent.has(c.parent)) repliesByParent.set(c.parent, []);
      repliesByParent.get(c.parent).push(c);
    }
  }

  for (let i = 0; i < topLevel.length; i++) {
    const ann = topLevel[i];
    const created = ann.created_at instanceof Date ? ann.created_at.toISOString() : ann.created_at;

    // Check if we need a new page (rough estimate: 120px per annotation)
    if (doc.y > 700) doc.addPage();

    // Annotation header
    doc.fontSize(11).font("Helvetica-Bold").fillColor("#333333");
    doc.text(`#${i + 1}  ${ann.author}`, { continued: true });
    doc.fontSize(9).font("Helvetica").fillColor("#999999");
    doc.text(`  ${created}  [${ann.status || "open"}]`);

    // Quote
    if (ann.quote) {
      doc.moveDown(0.3);
      doc.fontSize(10).font("Helvetica-Oblique").fillColor("#666666");
      doc.text(`"${ann.quote}"`, { indent: 10 });
    }

    // Body
    doc.moveDown(0.3);
    doc.fontSize(10).font("Helvetica").fillColor("#333333");
    doc.text(ann.body, { indent: 10 });

    // Replies
    const replies = repliesByParent.get(ann.id) || [];
    for (const reply of replies) {
      const replyCreated = reply.created_at instanceof Date ? reply.created_at.toISOString() : reply.created_at;
      doc.moveDown(0.3);
      doc.fontSize(9).font("Helvetica-Bold").fillColor("#666666");
      doc.text(`Reply by ${reply.author}`, { indent: 20, continued: true });
      doc.fontSize(8).font("Helvetica").fillColor("#999999");
      doc.text(`  ${replyCreated}`);
      doc.fontSize(9).font("Helvetica").fillColor("#555555");
      doc.text(reply.body, { indent: 20 });
    }

    // Separator between annotations
    if (i < topLevel.length - 1) {
      doc.moveDown(0.5);
      doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#eeeeee").stroke();
      doc.moveDown(0.5);
    }
  }

  return doc;
}

module.exports = { exportPdf };
