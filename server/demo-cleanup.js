/**
 * Demo cleanup — periodically deletes old comments when DEMO_MODE is enabled.
 * Keeps the demo instance clean by removing annotation threads older than a TTL.
 */

const DEFAULT_TTL_HOURS = 24;
const DEFAULT_INTERVAL_MS = 60 * 60 * 1000; // 1 hour

async function cleanupDemoComments(pool, maxAgeHours = DEFAULT_TTL_HOURS) {
  const cutoff = new Date(Date.now() - maxAgeHours * 60 * 60 * 1000);

  // Delete replies of expired top-level comments first (FK constraint on parent).
  // Reactions cascade automatically (ON DELETE CASCADE on reactions table).
  await pool.query(
    `DELETE FROM comments WHERE parent IN (
       SELECT id FROM comments WHERE parent IS NULL AND created_at < $1
     )`,
    [cutoff]
  );

  // Delete expired top-level comments
  const { rowCount: commentsRemoved } = await pool.query(
    "DELETE FROM comments WHERE parent IS NULL AND created_at < $1",
    [cutoff]
  );

  // Clean up orphaned documents (documents with no remaining comments)
  const { rowCount: documentsRemoved } = await pool.query(
    `DELETE FROM documents WHERE id NOT IN (
       SELECT DISTINCT document FROM comments
     )`
  );

  return { commentsRemoved, documentsRemoved };
}

function startDemoCleanup(pool, options = {}) {
  const intervalMs = options.intervalMs || DEFAULT_INTERVAL_MS;
  const maxAgeHours = options.maxAgeHours || DEFAULT_TTL_HOURS;

  console.log(
    `[demo] Cleanup enabled: deleting comments older than ${maxAgeHours}h, checking every ${intervalMs / 60000}m`
  );

  // Run immediately on startup
  cleanupDemoComments(pool, maxAgeHours)
    .then(({ commentsRemoved }) => {
      if (commentsRemoved > 0) console.log(`[demo] Cleaned up ${commentsRemoved} old comments`);
    })
    .catch((err) => {
      console.error("[demo] Cleanup failed:", err);
    });

  // Schedule periodic cleanup
  const timer = setInterval(async () => {
    try {
      const { commentsRemoved } = await cleanupDemoComments(pool, maxAgeHours);
      if (commentsRemoved > 0) console.log(`[demo] Cleaned up ${commentsRemoved} old comments`);
    } catch (err) {
      console.error("[demo] Cleanup failed:", err);
    }
  }, intervalMs);

  // Don't keep the process alive just for cleanup
  timer.unref?.();

  return timer;
}

module.exports = { cleanupDemoComments, startDemoCleanup };
