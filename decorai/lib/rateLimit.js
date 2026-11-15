/**
 * In-memory fixed-window rate limiter (Express middleware factory).
 *
 * Bounds how much a single client can spend on the paid AI providers in a
 * burst. NOTE: state is per-process — it resets on deploy and is not shared
 * between instances. The durable per-account bound is the daily cap in
 * lib/freeDailyCap.js; for a horizontally-scaled deploy, swap the Map for a
 * shared store (e.g. Redis).
 *
 * @param {{ windowMs: number, max: number, keyFn: (req) => string|null, message?: string }} opts
 *   keyFn returning a falsy value means "can't key this request" — it is let
 *   through so downstream auth can deal with it.
 */
export function createRateLimiter({ windowMs, max, keyFn, message }) {
  const hits = new Map(); // key -> { count, resetAt }
  let lastSweep = 0;
  return function rateLimit(req, res, next) {
    const now = Date.now();
    if (now - lastSweep > windowMs) {
      for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
      lastSweep = now;
    }
    const key = keyFn(req);
    if (!key) return next(); // unkeyable (e.g. no auth header on a user-keyed limiter) — let downstream auth handle it
    let entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      entry = { count: 0, resetAt: now + windowMs };
      hits.set(key, entry);
    }
    entry.count += 1;
    if (entry.count > max) {
      res.set('Retry-After', String(Math.ceil((entry.resetAt - now) / 1000)));
      return res.status(429).json({ error: message || 'Too many requests' });
    }
    return next();
  };
}
