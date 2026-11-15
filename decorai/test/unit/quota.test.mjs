// Premium generation accounting — the code where a bug either charges a user
// for nothing or gives paid generations away.
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createQuota } from '../../lib/quota.js';
import { fakeSupabase, captureConsole } from './helpers.mjs';

const USER = '11111111-1111-1111-1111-111111111111';
const LIMIT = 50;

/** A tiny in-memory stand-in for the SQL in sql/atomic_credits.sql. */
function world({ subscribed = false, monthlyCount = 0, credits = 0, fail = {} } = {}) {
  const state = { monthlyCount, credits, subscribed };
  const boom = (name) => { if (fail[name]) throw { message: `${name} failed` }; };
  const supabase = fakeSupabase({
    reserve_subscription_generation: ({ p_limit }) => {
      boom('reserve_subscription_generation');
      if (!state.subscribed) return -2;
      if (state.monthlyCount >= p_limit) return -1;
      return ++state.monthlyCount;
    },
    refund_subscription_generation: () => { state.monthlyCount = Math.max(0, state.monthlyCount - 1); return null; },
    consume_credit: () => {
      boom('consume_credit');
      if (state.credits <= 0) return -1;
      return --state.credits;
    },
    refund_credit: () => { state.credits += 1; return null; },
  });
  const quota = createQuota({
    supabase,
    monthlyLimit: LIMIT,
    getActiveSubscription: async () => (state.subscribed ? { is_active: true } : null),
    currentMonthStart: () => '2026-11-01',
  });
  return { state, supabase, quota };
}

describe('reserveSlotForUser — subscriber', () => {
  test('under the monthly cap: counts against the quota, not tokens', async () => {
    const { state, quota } = world({ subscribed: true, monthlyCount: 10, credits: 5 });
    const slot = await quota.reserveSlotForUser(USER);
    assert.equal(slot.ok, true);
    assert.equal(slot.kind, 'subscription');
    assert.equal(slot.used, 11);
    assert.equal(slot.limit, LIMIT);
    assert.equal(slot.userId, USER);
    assert.equal(state.monthlyCount, 11);
    assert.equal(state.credits, 5, 'tokens untouched while quota remains');
  });

  test('the last slot of the month is granted, the next is not', async () => {
    const { state, quota } = world({ subscribed: true, monthlyCount: LIMIT - 1 });
    assert.equal((await quota.reserveSlotForUser(USER)).ok, true);
    assert.equal(state.monthlyCount, LIMIT);
    const over = await captureConsoleResult(() => quota.reserveSlotForUser(USER));
    assert.equal(over.ok, false);
    assert.equal(state.monthlyCount, LIMIT, 'count never exceeds the cap');
  });

  test('at the cap with tokens: overflows to a token', async () => {
    const { state, quota } = world({ subscribed: true, monthlyCount: LIMIT, credits: 3 });
    const slot = await quota.reserveSlotForUser(USER);
    assert.equal(slot.ok, true);
    assert.equal(slot.kind, 'credits');
    assert.equal(slot.credits, 2);
    assert.equal(state.credits, 2);
    assert.equal(state.monthlyCount, LIMIT);
  });

  test('at the cap with no tokens: 429 carrying the limit the client displays', async () => {
    const { quota } = world({ subscribed: true, monthlyCount: LIMIT, credits: 0 });
    const slot = await quota.reserveSlotForUser(USER);
    assert.deepEqual(slot, {
      ok: false,
      status: 429,
      body: { error: 'Monthly generation limit reached', limit: LIMIT, used: LIMIT, remaining: 0, resets: 'next month' },
    });
  });

  test('database error reserving the quota: 500, and no token is spent instead', async () => {
    const { state, quota } = world({ subscribed: true, credits: 4, fail: { reserve_subscription_generation: true } });
    const slot = await captureConsoleResult(() => quota.reserveSlotForUser(USER));
    assert.equal(slot.ok, false);
    assert.equal(slot.status, 500);
    assert.equal(state.credits, 4, 'a DB failure must not silently bill a token');
  });

  test('refund returns the monthly slot', async () => {
    const { state, quota } = world({ subscribed: true, monthlyCount: 7 });
    const slot = await quota.reserveSlotForUser(USER);
    assert.equal(state.monthlyCount, 8);
    await slot.refund();
    assert.equal(state.monthlyCount, 7);
  });

  test('refund after overflow returns the token, not a monthly slot', async () => {
    const { state, quota } = world({ subscribed: true, monthlyCount: LIMIT, credits: 1 });
    const slot = await quota.reserveSlotForUser(USER);
    assert.equal(state.credits, 0);
    await slot.refund();
    assert.equal(state.credits, 1);
    assert.equal(state.monthlyCount, LIMIT);
  });
});

describe('reserveSlotForUser — no subscription', () => {
  test('with tokens: spends exactly one', async () => {
    const { state, quota } = world({ credits: 2 });
    const slot = await quota.reserveSlotForUser(USER);
    assert.equal(slot.ok, true);
    assert.equal(slot.kind, 'credits');
    assert.equal(slot.credits, 1);
    assert.equal(state.credits, 1);
  });

  test('with no tokens: 402 and nothing changes', async () => {
    const { state, quota } = world({ credits: 0 });
    const slot = await quota.reserveSlotForUser(USER);
    assert.deepEqual(slot, { ok: false, status: 402, body: { error: 'No tokens remaining', credits: 0 } });
    assert.equal(state.credits, 0);
  });

  test('database error: 500, not "no tokens"', async () => {
    const { quota } = world({ credits: 3, fail: { consume_credit: true } });
    const slot = await captureConsoleResult(() => quota.reserveSlotForUser(USER));
    assert.deepEqual(slot, { ok: false, status: 500, body: { error: 'Failed to reserve credit' } });
  });

  test('refund returns the token', async () => {
    const { state, quota } = world({ credits: 1 });
    const slot = await quota.reserveSlotForUser(USER);
    assert.equal(state.credits, 0);
    await slot.refund();
    assert.equal(state.credits, 1);
  });

  test('never touches the monthly quota RPC', async () => {
    const { supabase, quota } = world({ credits: 1 });
    await quota.reserveSlotForUser(USER);
    assert.deepEqual(supabase.calls.map((c) => c.name), ['consume_credit']);
  });
});

describe('RPC result mapping', () => {
  test('monthly reserve passes the user, period and limit', async () => {
    const { supabase, quota } = world({ subscribed: true });
    await quota.reserveSubscriptionMonthlyGeneration(USER);
    assert.deepEqual(supabase.calls[0], {
      name: 'reserve_subscription_generation',
      args: { p_user_id: USER, p_period: '2026-11-01', p_limit: LIMIT },
    });
  });

  test('-2 (no subscription row) is not treated as a granted slot', async () => {
    const supabase = fakeSupabase({ reserve_subscription_generation: () => -2 });
    const quota = createQuota({ supabase, monthlyLimit: LIMIT, getActiveSubscription: async () => ({}), currentMonthStart: () => '2026-11-01' });
    assert.deepEqual(await quota.reserveSubscriptionMonthlyGeneration(USER), { ok: false, reason: 'no_subscription' });
  });

  test('consume_credit returning null (no credits row) means no tokens', async () => {
    const supabase = fakeSupabase({ consume_credit: () => null });
    const quota = createQuota({ supabase, monthlyLimit: LIMIT, getActiveSubscription: async () => null, currentMonthStart: () => '2026-11-01' });
    assert.deepEqual(await quota.reserveFreeCredit(USER), { ok: false, reason: 'no_credits', credits: 0 });
  });

  test('consume_credit returning 0 is a success that used the last token', async () => {
    const supabase = fakeSupabase({ consume_credit: () => 0 });
    const quota = createQuota({ supabase, monthlyLimit: LIMIT, getActiveSubscription: async () => null, currentMonthStart: () => '2026-11-01' });
    assert.deepEqual(await quota.reserveFreeCredit(USER), { ok: true, credits: 0 });
  });
});

/** Run `fn` with console output captured (expected error logs stay out of the report). */
async function captureConsoleResult(fn) {
  let result;
  await captureConsole(async () => { result = await fn(); });
  return result;
}
