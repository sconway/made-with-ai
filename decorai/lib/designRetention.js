/**
 * How many generated designs an account keeps, and what happens when a new
 * one would go over.
 *
 * Every signed-in account keeps its designs: free accounts their latest few,
 * subscribers many more. When the library is full, the oldest design makes way
 * for the new one, so it always holds the most recent work.
 *
 * One exception keeps this from destroying anything wholesale: an account can
 * hold more designs than its limit, typically a subscriber whose plan ended
 * (200 saved, free limit 10). Trimming that down would delete most of what
 * they paid to keep, so instead nothing is deleted and new designs are simply
 * not saved until they are back under the limit or subscribe again.
 */

export const DEFAULT_FREE_DESIGN_LIMIT = 10;
export const DEFAULT_SUBSCRIBER_DESIGN_LIMIT = 200;

/**
 * @param {object} p
 * @param {number} p.count       designs the account holds now
 * @param {number} p.limit       designs it may keep
 * @param {boolean} p.subscriber whether it has an active subscription
 * @returns {{ save: boolean, deleteOldest: number, reason: string|null }}
 */
export function planDesignRetention({ count, limit, subscriber }) {
    const n = Math.max(0, Math.floor(Number(count) || 0));
    const max = Math.max(1, Math.floor(Number(limit) || 1));
    if (n < max) return { save: true, deleteOldest: 0, reason: null };
    if (subscriber) {
        // A subscriber at or over the cap: make room for exactly one more.
        return { save: true, deleteOldest: n - max + 1, reason: 'replaced-oldest' };
    }
    if (n === max) return { save: true, deleteOldest: 1, reason: 'replaced-oldest' };
    return { save: false, deleteOldest: 0, reason: 'over-limit' };
}

/** The limit for an account. */
export function designLimitFor(subscriber, { free = DEFAULT_FREE_DESIGN_LIMIT, paid = DEFAULT_SUBSCRIBER_DESIGN_LIMIT } = {}) {
    return subscriber ? paid : free;
}
