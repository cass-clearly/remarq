/**
 * Deferred anchoring queue for comments whose text isn't yet in the DOM.
 *
 * When interactive widgets (accordions, tabs, modals) hide content,
 * annotations may fail to anchor on initial load. This queue tracks
 * failed anchors and supports retry with attempt limits.
 */

const MAX_ATTEMPTS = 10;

/**
 * Create a deferred anchor queue.
 *
 * @returns {{ add, remove, hasPending, getAll, recordAttempt, clear, size }}
 */
export function createDeferredQueue() {
  /** @type {Map<string, {comment: object, selector: object, attempts: number}>} */
  const _items = new Map();

  return {
    /**
     * Add a failed anchor to the retry queue.
     */
    add(comment, selector) {
      _items.set(comment.id, { comment, selector, attempts: 0 });
    },

    /**
     * Remove a comment from the queue (e.g. after successful anchor).
     */
    remove(commentId) {
      _items.delete(commentId);
    },

    /**
     * Check if there are pending retries.
     */
    hasPending() {
      return _items.size > 0;
    },

    /**
     * Get all pending items as an array.
     */
    getAll() {
      return [..._items.values()];
    },

    /**
     * Record an attempt for a comment. Returns false if max attempts exceeded.
     */
    recordAttempt(commentId) {
      const item = _items.get(commentId);
      if (!item) return false;
      item.attempts++;
      if (item.attempts >= MAX_ATTEMPTS) {
        _items.delete(commentId);
        return false;
      }
      return true;
    },

    /**
     * Clear all pending items.
     */
    clear() {
      _items.clear();
    },

    /**
     * Get the number of pending items.
     */
    size() {
      return _items.size;
    },
  };
}
