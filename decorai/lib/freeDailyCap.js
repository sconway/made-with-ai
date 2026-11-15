/**
 * Daily cap on free generations.
 *
 * The free models don't touch the token/monthly quota, but every prediction
 * costs the owner money. The rate limiters only bound bursts (40 per 10
 * minutes is still 5,760 a day), so this is what bounds spend per account.
 *
 * Counts predictions started through /replicate/predictions by a signed-in
 * account, per UTC day. Subscribers get a higher ceiling. A base limit of 0
 * disables the cap.
 *
 * Backed by sql/free_generation_daily_cap.sql. Until that has been run — or if
 * the database call fails — an in-process counter enforces the same limit, so
 * the cap is never silently off; it is just per-instance and resets on deploy.
 *
 * @param {object} deps
 * @param {object|null} deps.supabase          service-role client, or null
 * @param {number} deps.baseLimit              FREE_DAILY_GENERATION_LIMIT
 * @param {number} deps.subscriberLimit        FREE_DAILY_GENERATION_LIMIT_SUBSCRIBER
 * @param {(userId: string) => Promise<object|null>} deps.getActiveSubscription
 * @param {() => string} [deps.today]          UTC day 'YYYY-MM-DD' (injectable for tests)
 */
export function createFreeDailyCap({
  supabase,
  baseLimit,
  subscriberLimit,
  getActiveSubscription,
  today = () => new Date().toISOString().slice(0, 10),
}) {
  const local = new Map(); // userId -> { day, count } (fallback store)
  let fallbackWarned = false;

  function reserveLocal(userId, day, limit) {
    let entry = local.get(userId);
    if (!entry || entry.day !== day) {
      // New day: drop yesterday's entries so the map can't grow without bound.
      if (local.size > 5000) {
        for (const [k, v] of local) if (v.day !== day) local.delete(k);
      }
      entry = { day, count: 0 };
      local.set(userId, entry);
    }
    if (entry.count >= limit) return -1;
    entry.count += 1;
    return entry.count;
  }

  /** Atomic check-and-increment. `count` is the new count, or -1 at the cap. */
  async function reserveAt(userId, day, limit) {
    if (supabase) {
      const { data, error } = await supabase.rpc('reserve_free_generation', {
        p_user_id: userId,
        p_day: day,
        p_limit: limit,
      });
      if (!error && typeof data === 'number') return { count: data, store: 'db' };
      if (!fallbackWarned) {
        fallbackWarned = true;
        console.warn(
          '[free-cap] reserve_free_generation RPC unavailable — using the in-process counter. ' +
            'Run sql/free_generation_daily_cap.sql in Supabase.',
          error?.message || error,
        );
      }
    }
    return { count: reserveLocal(userId, day, limit), store: 'local' };
  }

  /**
   * Reserve one free generation for today.
   * Returns { ok: true, refund() } or { ok: false, limit }.
   */
  async function reserveFreeDailyGeneration(userId) {
    if (baseLimit <= 0) return { ok: true, refund: async () => {} };
    const day = today();
    let limit = baseLimit;
    let r = await reserveAt(userId, day, limit);
    // Only pay for the subscription lookup once the base cap is actually hit.
    if (r.count === -1 && subscriberLimit > limit && supabase) {
      const sub = await getActiveSubscription(userId).catch(() => null);
      if (sub) {
        limit = subscriberLimit;
        r = await reserveAt(userId, day, limit);
      }
    }
    if (r.count === -1) return { ok: false, limit };
    return {
      ok: true,
      // Give the slot back when the provider never started the prediction.
      refund: async () => {
        if (r.store === 'db') {
          const { error } = await supabase.rpc('refund_free_generation', { p_user_id: userId, p_day: day });
          if (error) console.error('[free-cap] refund_free_generation RPC error:', error);
        } else {
          const entry = local.get(userId);
          if (entry && entry.day === day) entry.count = Math.max(0, entry.count - 1);
        }
      },
    };
  }

  return { reserveFreeDailyGeneration };
}
