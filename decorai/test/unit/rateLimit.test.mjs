import { test, describe, mock } from 'node:test';
import assert from 'node:assert/strict';
import { createRateLimiter } from '../../lib/rateLimit.js';
import { fakeHttp } from './helpers.mjs';

const hit = (limiter, req) => {
  const http = fakeHttp(req);
  limiter(http.req, http.res, http.next);
  return { status: http.res.statusCode, body: http.res.body, headers: http.res.headers, passed: http.nextCalls === 1 };
};

describe('createRateLimiter', () => {
  test('lets `max` requests through per key, then answers 429 with Retry-After', () => {
    const limiter = createRateLimiter({ windowMs: 60_000, max: 3, keyFn: (r) => r.ip, message: 'slow down' });
    const results = Array.from({ length: 5 }, () => hit(limiter, { ip: 'a' }));
    assert.deepEqual(results.map((r) => r.passed), [true, true, true, false, false]);
    assert.equal(results[3].status, 429);
    assert.deepEqual(results[3].body, { error: 'slow down' });
    const retry = Number(results[3].headers['Retry-After']);
    assert.ok(retry > 0 && retry <= 60, `Retry-After within the window, got ${retry}`);
  });

  test('keys are independent', () => {
    const limiter = createRateLimiter({ windowMs: 60_000, max: 1, keyFn: (r) => r.ip });
    assert.equal(hit(limiter, { ip: 'a' }).passed, true);
    assert.equal(hit(limiter, { ip: 'a' }).passed, false);
    assert.equal(hit(limiter, { ip: 'b' }).passed, true);
  });

  test('a request that cannot be keyed is passed on, not counted or blocked', () => {
    const limiter = createRateLimiter({ windowMs: 60_000, max: 1, keyFn: () => null });
    for (let i = 0; i < 10; i++) assert.equal(hit(limiter, {}).passed, true);
  });

  test('the window resets', () => {
    mock.timers.enable({ apis: ['Date'], now: 1_000_000 });
    try {
      const limiter = createRateLimiter({ windowMs: 10_000, max: 2, keyFn: (r) => r.ip });
      assert.deepEqual([1, 2, 3].map(() => hit(limiter, { ip: 'a' }).passed), [true, true, false]);
      mock.timers.tick(10_001);
      assert.equal(hit(limiter, { ip: 'a' }).passed, true);
    } finally {
      mock.timers.reset();
    }
  });

  test('uses a default message', () => {
    const limiter = createRateLimiter({ windowMs: 1000, max: 0, keyFn: () => 'k' });
    assert.deepEqual(hit(limiter, {}).body, { error: 'Too many requests' });
  });
});
