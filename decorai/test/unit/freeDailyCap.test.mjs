// Daily cap on free generations — what bounds the AI bill per account.
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createFreeDailyCap } from '../../lib/freeDailyCap.js';
import { fakeSupabase, captureConsole } from './helpers.mjs';

/** In-memory stand-in for sql/free_generation_daily_cap.sql. */
function dbBackend() {
  const counts = new Map();
  const key = (a) => `${a.p_user_id}|${a.p_day}`;
  return fakeSupabase({
    reserve_free_generation: (a) => {
      const n = counts.get(key(a)) || 0;
      if (a.p_limit <= 0 || n >= a.p_limit) return -1;
      counts.set(key(a), n + 1);
      return n + 1;
    },
    refund_free_generation: (a) => { counts.set(key(a), Math.max(0, (counts.get(key(a)) || 0) - 1)); return null; },
  });
}

const reserveN = async (cap, user, n) => {
  const out = [];
  for (let i = 0; i < n; i++) out.push(await cap.reserveFreeDailyGeneration(user));
  return out;
};

for (const [name, makeSupabase] of [
  ['database-backed', dbBackend],
  ['in-memory fallback (no database)', () => null],
  ['in-memory fallback (SQL not yet run)', () => fakeSupabase({})],
]) {
  describe(`cap — ${name}`, () => {
    const make = (opts = {}) => createFreeDailyCap({
      supabase: makeSupabase(),
      baseLimit: 3,
      subscriberLimit: 5,
      getActiveSubscription: async () => null,
      today: () => '2026-11-14',
      ...opts,
    });

    test('allows exactly the limit, then refuses and reports the limit', async () => {
      await captureConsole(async () => {
        const r = await reserveN(make(), 'u1', 4);
        assert.deepEqual(r.map((x) => x.ok), [true, true, true, false]);
        assert.equal(r[3].limit, 3);
      });
    });

    test('one account reaching its cap does not affect another', async () => {
      await captureConsole(async () => {
        const cap = make();
        await reserveN(cap, 'u1', 4);
        assert.equal((await cap.reserveFreeDailyGeneration('u2')).ok, true);
      });
    });

    test('a refund frees exactly one slot', async () => {
      await captureConsole(async () => {
        const cap = make();
        const r = await reserveN(cap, 'u1', 3);
        await r[0].refund();
        assert.equal((await cap.reserveFreeDailyGeneration('u1')).ok, true);
        assert.equal((await cap.reserveFreeDailyGeneration('u1')).ok, false);
      });
    });

    test('the count resets on a new UTC day', async () => {
      await captureConsole(async () => {
        let day = '2026-11-14';
        const cap = make({ today: () => day });
        await reserveN(cap, 'u1', 4);
        day = '2026-11-15';
        assert.equal((await cap.reserveFreeDailyGeneration('u1')).ok, true);
      });
    });
  });
}

describe('cap — subscribers', () => {
  test('get the higher ceiling, and the lookup only happens once the base cap is hit', async () => {
    let lookups = 0;
    const cap = createFreeDailyCap({
      supabase: dbBackend(),
      baseLimit: 2,
      subscriberLimit: 4,
      getActiveSubscription: async () => { lookups += 1; return { is_active: true }; },
      today: () => '2026-11-14',
    });
    const first = await reserveN(cap, 's1', 2);
    assert.equal(lookups, 0, 'no subscription lookup while under the base cap');
    const rest = await reserveN(cap, 's1', 3);
    assert.deepEqual([...first, ...rest].map((x) => x.ok), [true, true, true, true, false]);
    assert.equal(rest[2].limit, 4);
  });

  test('a failed subscription lookup falls back to the base cap rather than throwing', async () => {
    const cap = createFreeDailyCap({
      supabase: dbBackend(),
      baseLimit: 1,
      subscriberLimit: 9,
      getActiveSubscription: async () => { throw new Error('db down'); },
      today: () => '2026-11-14',
    });
    const r = await reserveN(cap, 's1', 2);
    assert.deepEqual(r.map((x) => x.ok), [true, false]);
    assert.equal(r[1].limit, 1);
  });
});

describe('cap — configuration and failure modes', () => {
  test('a base limit of 0 disables the cap and never calls the database', async () => {
    const supabase = dbBackend();
    const cap = createFreeDailyCap({ supabase, baseLimit: 0, subscriberLimit: 0, getActiveSubscription: async () => null });
    const r = await reserveN(cap, 'u1', 50);
    assert.ok(r.every((x) => x.ok));
    assert.equal(supabase.calls.length, 0);
    await r[0].refund(); // must exist and be harmless
  });

  test('the database count is authoritative when available (nothing kept in memory)', async () => {
    const supabase = dbBackend();
    const a = createFreeDailyCap({ supabase, baseLimit: 2, subscriberLimit: 2, getActiveSubscription: async () => null, today: () => '2026-11-14' });
    const b = createFreeDailyCap({ supabase, baseLimit: 2, subscriberLimit: 2, getActiveSubscription: async () => null, today: () => '2026-11-14' });
    // Two server instances sharing one database share one count.
    assert.equal((await a.reserveFreeDailyGeneration('u1')).ok, true);
    assert.equal((await b.reserveFreeDailyGeneration('u1')).ok, true);
    assert.equal((await a.reserveFreeDailyGeneration('u1')).ok, false);
  });

  test('a database error still enforces the cap, and warns once', async () => {
    const supabase = fakeSupabase({ reserve_free_generation: () => { throw { message: 'connection reset' }; } });
    const cap = createFreeDailyCap({ supabase, baseLimit: 2, subscriberLimit: 2, getActiveSubscription: async () => null, today: () => '2026-11-14' });
    let r;
    const out = await captureConsole(async () => { r = await reserveN(cap, 'u1', 3); });
    assert.deepEqual(r.map((x) => x.ok), [true, true, false]);
    assert.equal(out.warn.length, 1);
    assert.match(out.warn[0], /free_generation_daily_cap\.sql/);
  });
});
