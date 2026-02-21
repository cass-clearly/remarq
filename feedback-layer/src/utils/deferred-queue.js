/**
 * Deferred anchoring queue.
 *
 * Tracks comments whose text wasn't found in the DOM at load time.
 * Used with MutationObserver to retry anchoring when hidden content
 * becomes visible (e.g., accordion opened, tab switched).
 */

const MAX_ATTEMPTS = 10;

export function createDeferredQueue() {
  const _pending = new Map(); // commentId → {comment, selector, attempts}

  return {
    /** Queue a comment that failed to anchor. */
    add(comment, selector) {
      _pending.set(comment.id, { comment, selector, attempts: 0 });
    },

    /** Remove a comment from the queue (successfully anchored or deleted). */
    remove(commentId) {
      _pending.delete(commentId);
    },

    /** Whether there are pending items. */
    hasPending() {
      return _pending.size > 0;
    },

    /** Get all pending items as an array of {comment, selector, attempts}. */
    getAll() {
      return Array.from(_pending.values());
    },

    /**
     * Record a retry attempt. Returns false if max attempts exceeded
     * (caller should stop retrying).
     */
    recordAttempt(commentId) {
      const item = _pending.get(commentId);
      if (!item) return false;
      item.attempts += 1;
      if (item.attempts >= MAX_ATTEMPTS) {
        _pending.delete(commentId);
        return false;
      }
      return true;
    },

    /** Clear all pending items. */
    clear() {
      _pending.clear();
    },

    /** Number of pending items. */
    size() {
      return _pending.size;
    },
  };
}
