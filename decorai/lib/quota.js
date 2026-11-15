/**
 * Premium generation accounting: the subscriber monthly quota and the token
 * (credit) balance.
 *
 * This is the code where a bug either charges a user for nothing or gives
 * paid generations away, so it lives apart from the HTTP layer and takes its
 * dependencies as arguments — test/unit/quota.test.mjs exercises every branch
 * against a fake database. The atomic check-and-increment itself happens in
 * Postgres (sql/atomic_credits.sql); this module maps those results to
 * decisions.
 *
 * @param {object} deps
 * @param {object} deps.supabase               service-role Supabase client
 * @param {number} deps.monthlyLimit           SUBSCRIPTION_MONTHLY_LIMIT
 * @param {(userId: string) => Promise<object|null>} deps.getActiveSubscription
 * @param {() => string} deps.currentMonthStart  'YYYY-MM-01' for the current period
 */
export function createQuota({ supabase, monthlyLimit, getActiveSubscription, currentMonthStart }) {
  // Reserve one generation against the subscriber's monthly quota.
  // Returns { ok: true, used, limit } or { ok: false, reason, used, limit }.
  // Resets the counter when monthly_period_start has rolled over.
  async function reserveSubscriptionMonthlyGeneration(userId) {
    const sub = await getActiveSubscription(userId);
    if (!sub) return { ok: false, reason: 'no_subscription' };

    const period = currentMonthStart();
    // Atomic check-and-increment (see sql/atomic_credits.sql). Returns the new
    // count, -1 if the cap is reached, or -2 if there's no subscription row.
    const { data, error } = await supabase.rpc('reserve_subscription_generation', {
      p_user_id: userId,
      p_period: period,
      p_limit: monthlyLimit,
    });

    if (error) {
      console.error('Failed to reserve monthly quota:', error);
      return { ok: false, reason: 'db_error' };
    }
    if (data === -2) return { ok: false, reason: 'no_subscription' };
    if (data === -1) {
      return {
        ok: false,
        reason: 'limit_reached',
        used: monthlyLimit,
        limit: monthlyLimit,
      };
    }

    return {
      ok: true,
      used: data,
      limit: monthlyLimit,
    };
  }

  // Refund a previously-reserved generation when the AI call fails so the user
  // isn't charged a slot for nothing. Only decrements within the same period.
  async function refundSubscriptionMonthlyGeneration(userId) {
    const period = currentMonthStart();
    // Atomic decrement, only within the current period (see sql/atomic_credits.sql).
    await supabase.rpc('refund_subscription_generation', {
      p_user_id: userId,
      p_period: period,
    });
  }

  // Reserve a token. Returns { ok, credits } or { ok:false, reason }.
  // Uses an atomic decrement (see sql/atomic_credits.sql) so concurrent requests
  // can't both spend the last credit.
  async function reserveFreeCredit(userId) {
    const { data, error } = await supabase.rpc('consume_credit', { p_user_id: userId });
    if (error) {
      console.error('consume_credit RPC error:', error);
      return { ok: false, reason: 'db_error' };
    }
    if (data === null || data === -1) return { ok: false, reason: 'no_credits', credits: 0 };
    return { ok: true, credits: data };
  }

  async function refundFreeCredit(userId) {
    const { error } = await supabase.rpc('refund_credit', { p_user_id: userId });
    if (error) console.error('refund_credit RPC error:', error);
  }

  /**
   * Reserve a premium generation slot for an authenticated, confirmed user.
   *
   * Returns either
   *   { ok: true, kind, userId, refund(), used?, limit?, credits? }
   *     kind 'subscription' — counted against the monthly quota
   *     kind 'credits'      — paid for with a token
   *     refund() reverses the reservation if the AI call fails downstream
   * or
   *   { ok: false, status, body }  — the HTTP response to send.
   */
  async function reserveSlotForUser(userId) {
    // Subscribers first: monthly cap.
    const sub = await getActiveSubscription(userId);
    if (sub) {
      const r = await reserveSubscriptionMonthlyGeneration(userId);
      if (r.ok) {
        return {
          ok: true,
          kind: 'subscription',
          userId,
          used: r.used,
          limit: r.limit,
          refund: () => refundSubscriptionMonthlyGeneration(userId),
        };
      }
      if (r.reason !== 'limit_reached') {
        return { ok: false, status: 500, body: { error: 'Failed to reserve monthly quota' } };
      }
      // Monthly cap reached — fall back to purchased token packs so subscribers
      // can keep generating past their included quota.
      const overflow = await reserveFreeCredit(userId);
      if (overflow.ok) {
        return {
          ok: true,
          kind: 'credits',
          userId,
          credits: overflow.credits,
          refund: () => refundFreeCredit(userId),
        };
      }
      return {
        ok: false,
        status: 429,
        body: {
          error: 'Monthly generation limit reached',
          limit: r.limit,
          used: r.used,
          remaining: 0,
          resets: 'next month',
        },
      };
    }

    // Otherwise: free / purchased tokens.
    const r = await reserveFreeCredit(userId);
    if (!r.ok) {
      return r.reason === 'no_credits'
        ? { ok: false, status: 402, body: { error: 'No tokens remaining', credits: 0 } }
        : { ok: false, status: 500, body: { error: 'Failed to reserve credit' } };
    }
    return {
      ok: true,
      kind: 'credits',
      userId,
      credits: r.credits,
      refund: () => refundFreeCredit(userId),
    };
  }

  return {
    reserveSubscriptionMonthlyGeneration,
    refundSubscriptionMonthlyGeneration,
    reserveFreeCredit,
    refundFreeCredit,
    reserveSlotForUser,
  };
}
