import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the project root (not whatever the shell cwd is).
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 3001;

// Behind Render's load balancer: trust the first proxy hop so `req.ip` reflects
// the real client address (used for rate limiting) rather than the proxy's.
app.set('trust proxy', 1);

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

// Initialize Supabase when credentials are present (server still starts without them).
const SUPABASE_URL = process.env.SUPABASE_URL?.trim() || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY?.trim() || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || '';
let supabase = null;
if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
} else {
  console.warn(
    '[auth] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY — auth and database APIs are disabled until these are set',
  );
}

// Token configuration — parseEnvInt allows 0 (|| would treat 0 as missing).
function parseEnvInt(name, defaultValue) {
  const raw = process.env[name];
  if (raw === undefined || raw === '') return defaultValue;
  const n = parseInt(raw, 10);
  return Number.isNaN(n) ? defaultValue : n;
}

const FREE_TOKENS = parseEnvInt('FREE_TOKENS', 2);
const TOKENS_PER_PURCHASE = parseEnvInt('TOKENS_PER_PURCHASE', 5);
// Subscribers get up to this many image generations per calendar month.
const SUBSCRIPTION_MONTHLY_LIMIT = parseEnvInt('SUBSCRIPTION_MONTHLY_LIMIT', 50);

// One-time token packs. Each maps to a Stripe Price (set the IDs in .env).
// `tokens` is the number of generations granted; `amount` is in cents and is
// only used to render the price client-side — the real charge comes from the
// Stripe Price. Keep the keys ('10'/'20'/'50') in sync with the client.
const TOKEN_PACKS = {
  '10': { tokens: 10, amount: 499, priceId: process.env.STRIPE_PRICE_ID_PACK_10 || '' },
  '20': { tokens: 20, amount: 999, priceId: process.env.STRIPE_PRICE_ID_PACK_20 || '' },
  '50': { tokens: 50, amount: 1999, priceId: process.env.STRIPE_PRICE_ID_PACK_50 || '' },
};

function getConfiguredTokenPacks() {
  return Object.entries(TOKEN_PACKS)
    .filter(([, pack]) => Boolean(pack.priceId))
    .map(([id, pack]) => ({ id, tokens: pack.tokens, amount: pack.amount }));
}

function logTokenPackConfig() {
  for (const [id, pack] of Object.entries(TOKEN_PACKS)) {
    if (!pack.priceId) {
      console.warn(
        `[stripe] Missing price ID for the ${pack.tokens}-token pack — set STRIPE_PRICE_ID_PACK_${id} in the environment`,
      );
    }
  }
}

logTokenPackConfig();

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn(
    '[auth] Missing SUPABASE_URL or SUPABASE_ANON_KEY — client sign-in will be disabled until these are set',
  );
} else {
  console.log('[auth] Supabase client sign-in configured');
}

// Subscription configuration
const SUBSCRIPTION_PRICE_ID = process.env.STRIPE_SUBSCRIPTION_PRICE_ID || '';
const DESIGNS_STORAGE_BUCKET = process.env.SUPABASE_DESIGNS_BUCKET?.trim() || 'generated-designs';
const MAX_SAVED_DESIGNS_SUBSCRIBER = parseInt(process.env.MAX_SAVED_DESIGNS_SUBSCRIBER) || 200;
const DESIGN_SIGNED_URL_TTL_SEC = parseInt(process.env.DESIGN_SIGNED_URL_TTL_SEC) || 3600;

// ── Abuse-prevention configuration ─────────────────────────────────────────
// Allowlist of Replicate model versions the proxy is permitted to run. Without
// this, any authenticated user could invoke ANY Replicate model (including very
// expensive video/LLM models) on the owner's account via /replicate/predictions.
// Override with REPLICATE_ALLOWED_MODELS (comma-separated) if the app's models change.
const DEFAULT_REPLICATE_MODELS = [
  'stability-ai/stable-diffusion-3.5-large',
  'stability-ai/stable-diffusion-xl-base-1.0',
  'proplabs/virtual-staging:635d607efc6e3a6016ef6d655327cd35f3d792e84b8f110688b04498c6e94cfb',
  'lllyasviel/sd-controlnet-depth',
  'nightmareai/real-esrgan',
  'google/nano-banana',
];
const REPLICATE_ALLOWED_MODELS = new Set(
  process.env.REPLICATE_ALLOWED_MODELS
    ? process.env.REPLICATE_ALLOWED_MODELS.split(',').map((s) => s.trim()).filter(Boolean)
    : DEFAULT_REPLICATE_MODELS,
);

// Hosts the server may fetch remote images from when persisting designs (SSRF
// guard). Replicate delivers generated images from replicate.delivery.
const IMAGE_FETCH_ALLOWED_HOSTS = process.env.IMAGE_FETCH_ALLOWED_HOSTS
  ? process.env.IMAGE_FETCH_ALLOWED_HOSTS.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)
  : ['replicate.delivery', 'replicate.com'];

// The only host whose prediction URLs may be polled. The poll proxy attaches the
// Replicate API token, so the destination MUST be locked to Replicate itself —
// otherwise a client-supplied URL would exfiltrate the token (SSRF / key leak).
const REPLICATE_API_HOST = 'api.replicate.com';

// Reject any remote image URL that isn't https + on the host allowlist (SSRF guard).
function isAllowedRemoteImageUrl(urlStr) {
  let u;
  try { u = new URL(urlStr); } catch { return false; }
  if (u.protocol !== 'https:') return false;
  const host = u.hostname.toLowerCase();
  return IMAGE_FETCH_ALLOWED_HOSTS.some((h) => host === h || host.endsWith('.' + h));
}

// Only allow polling Replicate's own prediction endpoints (SSRF + token-leak guard).
function isValidReplicatePollUrl(urlStr) {
  let u;
  try { u = new URL(urlStr); } catch { return false; }
  return u.protocol === 'https:' &&
    u.hostname.toLowerCase() === REPLICATE_API_HOST &&
    u.pathname.startsWith('/v1/predictions/');
}

// ── Generation quota helpers ──────────────────────────────────────────────
// First day of the current month in UTC (e.g. 2026-05-01). Used as the bucket
// key for subscriber monthly usage so the count auto-resets each calendar
// month without a cron job.
function currentMonthStart() {
  const d = new Date();
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-01`;
}

// Look up active-subscription state for a user.
async function getActiveSubscription(userId) {
  const { data } = await supabase
    .from('user_subscriptions')
    .select('is_active, current_period_end, monthly_count, monthly_period_start')
    .eq('user_id', userId)
    .single();
  if (!data) return null;
  const isActive = data.is_active === true &&
    data.current_period_end &&
    new Date(data.current_period_end) > new Date();
  return isActive ? data : null;
}

// ── Generated design persistence (subscription-only) ─────────────────────

async function resolveImageBuffer(imageSource) {
  if (!imageSource) return null;

  if (imageSource.buffer && Buffer.isBuffer(imageSource.buffer)) {
    return {
      buffer: imageSource.buffer,
      contentType: imageSource.contentType || 'image/jpeg',
      ext: extensionForMime(imageSource.contentType || 'image/jpeg'),
    };
  }

  const src = String(imageSource);
  const dataMatch = src.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/);
  if (dataMatch) {
    const contentType = dataMatch[1];
    return {
      buffer: Buffer.from(dataMatch[2], 'base64'),
      contentType,
      ext: extensionForMime(contentType),
    };
  }

  if (src.startsWith('http://') || src.startsWith('https://')) {
    // SSRF guard: only fetch generated images from allowlisted hosts so a
    // client-supplied URL can't make the server hit internal/metadata endpoints.
    if (!isAllowedRemoteImageUrl(src)) {
      throw new Error('Image URL host not allowed');
    }
    const resp = await fetch(src);
    if (!resp.ok) {
      throw new Error(`Failed to fetch image (${resp.status})`);
    }
    const contentType = resp.headers.get('content-type')?.split(';')[0]?.trim() || 'image/jpeg';
    const buffer = Buffer.from(await resp.arrayBuffer());
    return { buffer, contentType, ext: extensionForMime(contentType) };
  }

  // Raw base64 without data-URI prefix
  return {
    buffer: Buffer.from(src, 'base64'),
    contentType: 'image/jpeg',
    ext: 'jpg',
  };
}

function extensionForMime(mime) {
  if (!mime) return 'jpg';
  if (mime.includes('png')) return 'png';
  if (mime.includes('webp')) return 'webp';
  if (mime.includes('gif')) return 'gif';
  return 'jpg';
}

function extractReplicateImageUrl(output) {
  if (!output) return null;
  if (typeof output === 'string') return output;
  if (Array.isArray(output)) {
    const first = output[0];
    if (typeof first === 'string') return first;
    if (first && typeof first === 'object' && first.url) return first.url;
    return null;
  }
  if (typeof output === 'object' && output.url) return output.url;
  return null;
}

async function deleteDesignRecord(userId, row) {
  if (!row) return;
  if (row.storage_path) {
    const { error: storageError } = await supabase.storage
      .from(DESIGNS_STORAGE_BUCKET)
      .remove([row.storage_path]);
    if (storageError) {
      console.error('Failed to delete design from storage:', storageError);
    }
  }
  await supabase
    .from('user_generated_designs')
    .delete()
    .eq('id', row.id)
    .eq('user_id', userId);
}

async function enforceDesignRetentionLimit(userId) {
  const { data: rows, error } = await supabase
    .from('user_generated_designs')
    .select('id, storage_path, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: true });
  if (error || !rows || rows.length < MAX_SAVED_DESIGNS_SUBSCRIBER) return;
  const excess = rows.length - MAX_SAVED_DESIGNS_SUBSCRIBER + 1;
  for (const row of rows.slice(0, excess)) {
    await deleteDesignRecord(userId, row);
  }
}

async function createSignedDesignUrl(storagePath) {
  const { data, error } = await supabase.storage
    .from(DESIGNS_STORAGE_BUCKET)
    .createSignedUrl(storagePath, DESIGN_SIGNED_URL_TTL_SEC);
  if (error) {
    console.error('Failed to create signed URL:', error);
    return null;
  }
  return data?.signedUrl || null;
}

/** Persist a generated image for a subscriber. Returns the DB row or null. */
async function persistGeneratedDesign(userId, { imageSource, prompt, model, sourceType, metadata }) {
  if (!supabase) return null;

  const sub = await getActiveSubscription(userId);
  if (!sub) return null;

  try {
    const resolved = await resolveImageBuffer(imageSource);
    if (!resolved?.buffer?.length) {
      console.error('persistGeneratedDesign: empty image buffer');
      return null;
    }

    await enforceDesignRetentionLimit(userId);

    const designId = randomUUID();
    const storagePath = `${userId}/${designId}.${resolved.ext}`;
    const { error: uploadError } = await supabase.storage
      .from(DESIGNS_STORAGE_BUCKET)
      .upload(storagePath, resolved.buffer, {
        contentType: resolved.contentType,
        upsert: false,
      });
    if (uploadError) {
      console.error('Failed to upload generated design:', uploadError);
      return null;
    }

    const row = {
      id: designId,
      user_id: userId,
      storage_path: storagePath,
      prompt: prompt ? String(prompt).slice(0, 4000) : null,
      model: model || null,
      source_type: sourceType || 'room-design',
      metadata: metadata && typeof metadata === 'object' ? metadata : {},
    };
    const { data, error: insertError } = await supabase
      .from('user_generated_designs')
      .insert(row)
      .select('id, storage_path, prompt, model, source_type, metadata, created_at')
      .single();
    if (insertError) {
      console.error('Failed to insert generated design row:', insertError);
      await supabase.storage.from(DESIGNS_STORAGE_BUCKET).remove([storagePath]);
      return null;
    }
    return data;
  } catch (err) {
    console.error('persistGeneratedDesign error:', err);
    return null;
  }
}

async function requireActiveSubscription(req, res) {
  const user = await getAuthUser(req, res);
  if (!user) return null;
  const sub = await getActiveSubscription(user.id);
  if (!sub) {
    res.status(403).json({ error: 'Active subscription required' });
    return null;
  }
  return user;
}

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
    p_limit: SUBSCRIPTION_MONTHLY_LIMIT,
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
      used: SUBSCRIPTION_MONTHLY_LIMIT,
      limit: SUBSCRIPTION_MONTHLY_LIMIT,
    };
  }

  return {
    ok: true,
    used: data,
    limit: SUBSCRIPTION_MONTHLY_LIMIT,
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

// Idempotently credit purchased tokens for a completed checkout session.
// Backed by the atomic Postgres function `credit_tokens_for_session` (see
// sql/credit_tokens_for_session.sql) so the webhook and the success-page
// verification endpoint can both call this without ever double-crediting.
// Returns the user's new token balance. Throws on a real DB error.
async function creditTokensForSession({ userId, sessionId, paymentIntent, tokens, amount }) {
  const { data, error } = await supabase.rpc('credit_tokens_for_session', {
    p_user_id: userId,
    p_session_id: sessionId,
    p_payment_intent: paymentIntent || null,
    p_tokens: tokens,
    p_amount: amount ?? null,
  });
  if (error) {
    console.error('credit_tokens_for_session RPC error:', error);
    throw new Error('credit_failed');
  }
  return data; // new token balance
}

// Reserve a free-tier credit. Returns { ok, credits } or { ok:false, reason }.
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

// Bump the lifetime `total_generations` counter (analytics only).
async function incrementLifetimeGenerations(userId) {
  const { error } = await supabase.rpc('increment_lifetime_generations', { p_user_id: userId });
  if (error) console.error('increment_lifetime_generations RPC error:', error);
}

// Reserve a generation slot before forwarding to a paid AI provider.
// Returns { ok, kind, used?, limit?, credits?, refund() } where:
//   - kind === 'subscription' for monthly-quota subscribers
//   - kind === 'credits'      for free / paid-token users
//   - refund() reverses the reservation if the AI call fails downstream
// Sends an HTTP error response on failure and returns { ok: false }.
async function reserveGenerationSlot(req, res) {
  const user = await getAuthUser(req, res, { requireConfirmed: true });
  if (!user) return { ok: false };

  // Subscribers first: monthly cap.
  const sub = await getActiveSubscription(user.id);
  if (sub) {
    const r = await reserveSubscriptionMonthlyGeneration(user.id);
    if (r.ok) {
      return {
        ok: true,
        kind: 'subscription',
        userId: user.id,
        used: r.used,
        limit: r.limit,
        refund: () => refundSubscriptionMonthlyGeneration(user.id),
      };
    }
    if (r.reason !== 'limit_reached') {
      res.status(500).json({ error: 'Failed to reserve monthly quota' });
      return { ok: false };
    }
    // Monthly cap reached — fall back to purchased token packs so subscribers
    // can keep generating past their included quota.
    const overflow = await reserveFreeCredit(user.id);
    if (overflow.ok) {
      return {
        ok: true,
        kind: 'credits',
        userId: user.id,
        credits: overflow.credits,
        refund: () => refundFreeCredit(user.id),
      };
    }
    res.status(429).json({
      error: 'Monthly generation limit reached',
      limit: r.limit,
      used: r.used,
      remaining: 0,
      resets: 'next month',
    });
    return { ok: false };
  }

  // Otherwise: free / purchased tokens.
  const r = await reserveFreeCredit(user.id);
  if (!r.ok) {
    if (r.reason === 'no_credits') {
      res.status(402).json({ error: 'No tokens remaining', credits: 0 });
    } else {
      res.status(500).json({ error: 'Failed to reserve credit' });
    }
    return { ok: false };
  }
  return {
    ok: true,
    kind: 'credits',
    userId: user.id,
    credits: r.credits,
    refund: () => refundFreeCredit(user.id),
  };
}

// ── Rate limiting (in-memory, single-instance) ─────────────────────────────
// Fixed-window counters keyed per-IP and/or per-account. Bounds how much a
// single client can spend on the paid AI providers. NOTE: state is per-process —
// for a horizontally-scaled deploy, swap the Map for a shared store (e.g. Redis).
function createRateLimiter({ windowMs, max, keyFn, message }) {
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

const ipKey = (req) => `ip:${req.ip}`;
// Best-effort per-account key from the (unverified) JWT `sub` claim. Forging it
// only rate-limits the forger; the authoritative token check still happens in
// getAuthUser, so this can't be used to bypass anything.
function userKey(req) {
  const h = req.headers.authorization;
  if (!h || !h.startsWith('Bearer ')) return null;
  const parts = h.slice(7).split('.');
  if (parts.length < 2) return null;
  try {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
    return payload?.sub ? `user:${payload.sub}` : null;
  } catch { return null; }
}

const ONE_MIN = 60 * 1000;
// General limiter: all API/proxy traffic per IP (covers frequent polling).
const generalLimiter = createRateLimiter({
  windowMs: parseInt(process.env.RATE_LIMIT_GENERAL_WINDOW_MS) || ONE_MIN,
  max: parseInt(process.env.RATE_LIMIT_GENERAL_MAX) || 300,
  keyFn: ipKey,
  message: 'Too many requests — please slow down and try again shortly.',
});
// Generation limiters (stricter): only on endpoints that create paid AI work.
const GEN_WINDOW_MS = parseInt(process.env.RATE_LIMIT_GEN_WINDOW_MS) || 10 * ONE_MIN;
const genIpLimiter = createRateLimiter({
  windowMs: GEN_WINDOW_MS,
  max: parseInt(process.env.RATE_LIMIT_GEN_MAX_PER_IP) || 100,
  keyFn: ipKey,
  message: 'Generation rate limit reached for your network. Please try again later.',
});
const genUserLimiter = createRateLimiter({
  windowMs: GEN_WINDOW_MS,
  max: parseInt(process.env.RATE_LIMIT_GEN_MAX_PER_USER) || 40,
  keyFn: userKey,
  message: 'Generation rate limit reached for your account. Please try again later.',
});
// Feedback limiter: sends real email, so keep it tight.
const feedbackLimiter = createRateLimiter({
  windowMs: parseInt(process.env.RATE_LIMIT_FEEDBACK_WINDOW_MS) || 10 * ONE_MIN,
  max: parseInt(process.env.RATE_LIMIT_FEEDBACK_MAX) || 5,
  keyFn: ipKey,
  message: 'Too much feedback at once — please try again in a few minutes.',
});

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.ALLOWED_ORIGIN || '*'
    : ['http://localhost:5173', 'http://localhost:4173', 'http://localhost:4174'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Fallback'],
  credentials: true
};

app.use(cors(corsOptions));

// ── Stripe webhook (raw body required — must come before express.json) ────────
app.post('/webhook/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Stripe webhook signature failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ── One-time token purchase ──────────────────────────────────────────────────
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Only handle one-time payments here (subscriptions are handled via subscription events)
    if (session.mode === 'payment') {
      try {
        const userId = session.metadata?.user_id;
        if (!userId) {
          console.error('No user_id in Stripe session metadata');
          return res.status(400).send('No user_id in session metadata');
        }
        const tokensPurchased = parseInt(session.metadata?.tokens) || TOKENS_PER_PURCHASE;
        const newBalance = await creditTokensForSession({
          userId,
          sessionId: session.id,
          paymentIntent: session.payment_intent,
          tokens: tokensPurchased,
          amount: session.amount_total,
        });
        console.log(`Credited ${tokensPurchased} tokens to ${userId} for session ${session.id}. Balance: ${newBalance}`);
      } catch (error) {
        // Return 500 so Stripe retries — crediting is idempotent, so a retry
        // after a transient failure is safe.
        console.error('Error processing Stripe webhook:', error);
        return res.status(500).send('Error processing webhook');
      }
    }
  }

  // ── Subscription activated or renewed ────────────────────────────────────────
  if (event.type === 'customer.subscription.created' || event.type === 'customer.subscription.updated') {
    const subscription = event.data.object;
    try {
      const userId = subscription.metadata.user_id;
      if (!userId) {
        console.error('No user_id in subscription metadata');
        return res.status(400).send('No user_id in subscription metadata');
      }
      const isActive = subscription.status === 'active' || subscription.status === 'trialing';
      await supabase.from('user_subscriptions').upsert({
        user_id: userId,
        stripe_subscription_id: subscription.id,
        stripe_customer_id: subscription.customer,
        status: subscription.status,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        is_active: isActive
      }, { onConflict: 'user_id' });
      console.log(`Subscription ${subscription.status} for user ${userId}`);
    } catch (error) {
      console.error('Error processing subscription webhook:', error);
      return res.status(500).send('Error processing subscription webhook');
    }
  }

  // ── Subscription cancelled / expired ─────────────────────────────────────────
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    try {
      const userId = subscription.metadata.user_id;
      if (!userId) return res.status(400).send('No user_id in subscription metadata');
      await supabase.from('user_subscriptions').upsert({
        user_id: userId,
        stripe_subscription_id: subscription.id,
        stripe_customer_id: subscription.customer,
        status: 'canceled',
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        is_active: false
      }, { onConflict: 'user_id' });
      console.log(`Subscription canceled for user ${userId}`);
    } catch (error) {
      console.error('Error processing subscription deletion:', error);
      return res.status(500).send('Error processing subscription deletion');
    }
  }

  res.json({ received: true });
});

app.use(express.json({ limit: '50mb' }));

// Apply the general IP rate limiter to everything below (the Stripe webhook is
// registered above this line, so its delivery is never throttled).
app.use(generalLimiter);

// Lightweight liveness probe used by the client to verify connectivity
// before retrying a failed request. Intentionally cheap — no DB, no auth.
app.get('/health', (req, res) => res.json({ ok: true }));

// ── Token / credits routes ─────────────────────────────────────────────────────

// GET /api/credits — fetch current token balance
app.get('/api/credits', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const { data: credits, error: creditsError } = await supabase
      .from('user_credits')
      .select('credits, total_generations')
      .eq('user_id', user.id)
      .single();

    if (creditsError) {
      if (creditsError.code === 'PGRST116') {
        // No record yet — create one with free tokens
        const { data: newCredits, error: insertError } = await supabase
          .from('user_credits')
          .insert({ user_id: user.id, credits: FREE_TOKENS })
          .select()
          .single();

        if (insertError) {
          console.error('Error creating credits record:', insertError);
          return res.status(500).json({ error: 'Failed to create credits record' });
        }
        return res.json({ credits: newCredits.credits, total_generations: 0 });
      }
      console.error('Error fetching credits:', creditsError);
      return res.status(500).json({ error: 'Failed to fetch credits' });
    }

    res.json({ credits: credits.credits, total_generations: credits.total_generations });
  } catch (error) {
    console.error('Error in GET /api/credits:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/credits/use — deprecated no-op for backwards compatibility.
// Quota reservation is now done atomically inside each generation endpoint
// before forwarding to the AI provider, with refund on failure. The client
// still pings this after a successful generation; we just return the latest
// counts so the UI can refresh.
app.post('/api/credits/use', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const sub = await getActiveSubscription(user.id);
    if (sub) {
      const period = currentMonthStart();
      const used = sub.monthly_period_start === period ? (sub.monthly_count || 0) : 0;
      return res.json({
        success: true,
        subscription: true,
        monthlyUsage: used,
        monthlyLimit: SUBSCRIPTION_MONTHLY_LIMIT,
        remaining: Math.max(0, SUBSCRIPTION_MONTHLY_LIMIT - used),
      });
    }

    const { data: credits } = await supabase
      .from('user_credits')
      .select('credits, total_generations')
      .eq('user_id', user.id)
      .single();

    res.json({
      success: true,
      credits: credits?.credits ?? 0,
      total_generations: credits?.total_generations ?? 0,
    });
  } catch (error) {
    console.error('Error in POST /api/credits/use:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/subscription/usage — current month's image-generation usage for
// active subscribers. Returns { used, limit, remaining, periodStart, active }.
app.get('/api/subscription/usage', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const sub = await getActiveSubscription(user.id);
    if (!sub) {
      return res.json({
        active: false,
        used: 0,
        limit: SUBSCRIPTION_MONTHLY_LIMIT,
        remaining: 0,
      });
    }

    const period = currentMonthStart();
    const used = sub.monthly_period_start === period ? (sub.monthly_count || 0) : 0;
    res.json({
      active: true,
      used,
      limit: SUBSCRIPTION_MONTHLY_LIMIT,
      remaining: Math.max(0, SUBSCRIPTION_MONTHLY_LIMIT - used),
      periodStart: period,
    });
  } catch (error) {
    console.error('Error in GET /api/subscription/usage:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/checkout — create a Stripe checkout session for buying more tokens
app.post('/api/checkout', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const pack = TOKEN_PACKS[String(req.body?.pack || '')];
    if (!pack) {
      return res.status(400).json({ error: 'Invalid token pack' });
    }
    if (!pack.priceId) {
      return res.status(500).json({
        error: 'Token pack not configured',
        detail: `Missing Stripe price ID for the ${pack.tokens}-token pack`,
      });
    }

    const appUrl = process.env.APP_URL || 'http://localhost:5173';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: pack.priceId, quantity: 1 }],
      mode: 'payment',
      // session_id lets the success page verify + credit immediately, without
      // depending on webhook delivery timing.
      success_url: `${appUrl}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}?payment=cancelled`,
      customer_email: user.email,
      metadata: { user_id: user.id, tokens: String(pack.tokens) }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session', detail: error.message });
  }
});

// POST /api/verify-checkout — credit a one-time purchase from the success page.
// This is the primary, deterministic fulfillment path: it doesn't depend on
// webhook delivery timing (which can lag on cold starts). The webhook remains
// as a backup; both call the same idempotent credit function, so a session is
// only ever credited once.
//
// Security: requires auth; only credits a session whose metadata.user_id
// matches the caller; the token amount comes from the session metadata set at
// checkout creation (never from the client); replays are no-ops via idempotency.
app.post('/api/verify-checkout', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const sessionId = String(req.body?.session_id || '');
    if (!sessionId.startsWith('cs_')) {
      return res.status(400).json({ error: 'Invalid session_id' });
    }

    let session;
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId);
    } catch (e) {
      return res.status(404).json({ error: 'Checkout session not found' });
    }

    // Ownership: a user may only credit their own session.
    if (!session || session.metadata?.user_id !== user.id) {
      return res.status(403).json({ error: 'Session does not belong to this user' });
    }
    if (session.mode !== 'payment') {
      return res.status(400).json({ error: 'Not a token purchase session' });
    }
    if (session.payment_status !== 'paid') {
      // Payment may still be processing — caller can retry.
      return res.status(409).json({ error: 'Payment not completed', payment_status: session.payment_status });
    }

    const tokens = parseInt(session.metadata?.tokens) || TOKENS_PER_PURCHASE;
    const balance = await creditTokensForSession({
      userId: user.id,
      sessionId: session.id,
      paymentIntent: session.payment_intent,
      tokens,
      amount: session.amount_total,
    });

    res.json({ success: true, credits: balance, tokensAdded: tokens });
  } catch (error) {
    console.error('Error in POST /api/verify-checkout:', error);
    res.status(500).json({ error: 'Failed to verify checkout' });
  }
});

// GET /api/subscription — check if current user has an active subscription
app.get('/api/subscription', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    const { data, error } = await supabase
      .from('user_subscriptions')
      .select('is_active, status, current_period_end')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching subscription:', error);
      return res.status(500).json({ error: 'Failed to fetch subscription' });
    }

    // Also guard against past-due subscriptions whose period has expired
    const isActive = data?.is_active === true &&
      data?.current_period_end &&
      new Date(data.current_period_end) > new Date();

    res.json({ isActive: !!isActive, status: data?.status || 'none' });
  } catch (error) {
    console.error('Error in GET /api/subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/subscribe — create a Stripe subscription checkout session
app.post('/api/subscribe', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;

    if (!SUBSCRIPTION_PRICE_ID) {
      return res.status(500).json({ error: 'Subscription not configured', detail: 'STRIPE_SUBSCRIPTION_PRICE_ID is not set' });
    }

    const appUrl = process.env.APP_URL || 'http://localhost:5173';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: SUBSCRIPTION_PRICE_ID, quantity: 1 }],
      mode: 'subscription',
      success_url: `${appUrl}?subscription=success`,
      cancel_url: `${appUrl}?subscription=cancelled`,
      customer_email: user.email,
      subscription_data: { metadata: { user_id: user.id } },
      metadata: { user_id: user.id }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating subscription session:', error);
    res.status(500).json({ error: 'Failed to create subscription session', detail: error.message });
  }
});

// Serve static files from the dist directory in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// API Routes
// All paid AI-call endpoints require auth AND a successful quota reservation
// before the request is forwarded. The reservation is refunded if the
// downstream AI call fails so the user isn't charged for a no-op.
app.post('/replicate/predictions', genIpLimiter, genUserLimiter, async (req, res) => {
  // Replicate calls don't count against the monthly token quota, but they DO
  // cost the owner money per prediction. Require a confirmed account and cap
  // volume via the rate limiters above so the proxy can't be abused.
  const user = await getAuthUser(req, res, { requireConfirmed: true });
  if (!user) return;

  try {
    const apiKey = process.env.REPLICATE_API_KEY;
    if (!apiKey) {
      console.error('REPLICATE_API_KEY not configured on server');
      return res.status(500).json({ error: 'Server API key not configured' });
    }

    // Allowlist guard: only run the specific models the app uses. Without this,
    // a logged-in user could invoke ANY (potentially very expensive) Replicate
    // model on the owner's account by passing an arbitrary `version`.
    const requestedVersion = typeof req.body?.version === 'string' ? req.body.version : '';
    if (!REPLICATE_ALLOWED_MODELS.has(requestedVersion)) {
      console.warn(`[replicate] Rejected disallowed model version: ${requestedVersion.slice(0, 120)}`);
      return res.status(400).json({ error: 'Unsupported model' });
    }

    // Some models (e.g. proplabs/virtual-staging) require the Replicate API
    // key as an input field so they can make sub-calls. Inject it server-side
    // — never expose it to the browser.
    const forwardBody = { ...req.body };
    if (typeof forwardBody.version === 'string' &&
        forwardBody.version.startsWith('proplabs/virtual-staging') &&
        forwardBody.input && typeof forwardBody.input === 'object') {
      forwardBody.input = { ...forwardBody.input, replicate_api_key: apiKey };
    }

    // Replicate has two create-prediction shapes:
    //   • Versioned community models → POST /v1/predictions with { version: "<hash>" }
    //   • Official/named models (e.g. "google/nano-banana") → POST
    //     /v1/models/{owner}/{name}/predictions with just { input } (latest version).
    // A bare "owner/name" slug (a "/" but no ":hash") signals the latter.
    const versionRef = typeof forwardBody.version === 'string' ? forwardBody.version : '';
    const isBareSlug = versionRef.includes('/') && !versionRef.includes(':');
    let targetUrl = 'https://api.replicate.com/v1/predictions';
    let outboundBody = forwardBody;
    if (isBareSlug) {
      targetUrl = `https://api.replicate.com/v1/models/${versionRef}/predictions`;
      outboundBody = { input: forwardBody.input };
    }

    console.log(`Making request to Replicate API (free) [${targetUrl}] with body:`, JSON.stringify(outboundBody, (k, v) => k === 'replicate_api_key' ? '***' : (k === 'image' || k === 'image_input' ? '<image>' : v), 2));

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(outboundBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
      console.error('Replicate API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return res.status(response.status).json({
        error: `Replicate API error (${response.status}): ${errorData.detail || 'Unknown error'}`
      });
    }

    const data = await response.json();
    console.log('Replicate API response:', data);
    res.json(data);
  } catch (error) {
    console.error('Error in /replicate/predictions:', error);
    res.status(500).json({ error: 'Failed to start prediction' });
  }
});

// OpenAI image edit (gpt-image-2) — image-to-image generation
app.post('/openai/image-edit', genIpLimiter, genUserLimiter, async (req, res) => {
  const slot = await reserveGenerationSlot(req, res);
  if (!slot.ok) return;

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY not configured on server');
      await slot.refund();
      return res.status(500).json({ error: 'Server OpenAI key not configured' });
    }

    const { imageBase64, prompt, savePrompt, size, quality, sourceType, metadata } = req.body || {};
    if (!imageBase64 || !prompt) {
      await slot.refund();
      return res.status(400).json({ error: 'imageBase64 and prompt are required' });
    }

    // Strip data URI prefix if present
    const match = String(imageBase64).match(/^data:(image\/[a-zA-Z+.-]+);base64,(.*)$/);
    const mime = match ? match[1] : 'image/png';
    const b64 = match ? match[2] : imageBase64;
    const buf = Buffer.from(b64, 'base64');
    const ext = mime.includes('jpeg') ? 'jpg' : mime.split('/')[1] || 'png';

    const form = new FormData();
    form.append('model', 'gpt-image-2');
    form.append('prompt', prompt);
    form.append('n', '1');
    form.append('size', size || 'auto');
    if (quality) form.append('quality', quality);
    form.append('image', new Blob([buf], { type: mime }), `input.${ext}`);

    console.log(`OpenAI image-edit: prompt="${prompt.slice(0, 80)}..." size=${size || '1024x1024'}`);

    const response = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}` },
      body: form
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenAI image-edit error:', { status: response.status, error: errorData });
      await slot.refund();
      return res.status(response.status).json({
        error: `OpenAI image edit error (${response.status}): ${errorData.error?.message || 'Unknown error'}`
      });
    }

    const data = await response.json();
    const b64Out = data?.data?.[0]?.b64_json;
    if (!b64Out) {
      console.error('OpenAI image-edit: no b64_json in response', data);
      await slot.refund();
      return res.status(500).json({ error: 'OpenAI returned no image data' });
    }
    await incrementLifetimeGenerations(slot.userId);

    const outBuf = Buffer.from(b64Out, 'base64');
    const saved = await persistGeneratedDesign(slot.userId, {
      imageSource: { buffer: outBuf, contentType: 'image/png' },
      prompt: savePrompt || prompt,
      model: 'openai',
      sourceType: sourceType || 'room-design',
      metadata: metadata && typeof metadata === 'object' ? metadata : {},
    });

    res.json({
      imageUrls: [`data:image/png;base64,${b64Out}`],
      savedDesignId: saved?.id || null,
    });
  } catch (error) {
    console.error('Error in /openai/image-edit:', error);
    await slot.refund();
    res.status(500).json({ error: 'Failed to generate image edit' });
  }
});

app.post('/replicate/poll', async (req, res) => {
  // Auth required: this proxy attaches the Replicate API token to the outbound
  // request. If it were callable anonymously against an arbitrary URL, an
  // attacker could exfiltrate the token (SSRF). Require a confirmed account.
  const user = await getAuthUser(req, res, { requireConfirmed: true });
  if (!user) return;

  try {
    const apiKey = process.env.REPLICATE_API_KEY;
    if (!apiKey) {
      console.error('REPLICATE_API_KEY not configured on server');
      return res.status(500).json({ error: 'Server API key not configured' });
    }

    const { predictionUrl, saveContext } = req.body;
    if (!predictionUrl) {
      console.error('No prediction URL provided');
      return res.status(400).json({ error: 'Prediction URL is required' });
    }
    // SSRF + token-leak guard: only poll Replicate's own prediction endpoints,
    // never a client-controlled host.
    if (!isValidReplicatePollUrl(predictionUrl)) {
      return res.status(400).json({ error: 'Invalid prediction URL' });
    }

    console.log('Polling Replicate API:', predictionUrl);

    const response = await fetch(predictionUrl, {
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }));
      console.error('Replicate API polling error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return res.status(response.status).json({ 
        error: `Replicate API error (${response.status}): ${errorData.detail || 'Unknown error'}` 
      });
    }

    const data = await response.json();
    console.log('Replicate API polling response:', data);

    let savedDesignId = null;
    if (data.status === 'succeeded' && saveContext && supabase) {
      const imageUrl = extractReplicateImageUrl(data.output);
      if (imageUrl) {
        const saved = await persistGeneratedDesign(user.id, {
          imageSource: imageUrl,
          prompt: saveContext.prompt,
          model: saveContext.model,
          sourceType: saveContext.sourceType || 'room-design',
          metadata: saveContext.metadata && typeof saveContext.metadata === 'object'
            ? saveContext.metadata
            : {},
        });
        savedDesignId = saved?.id || null;
      }
    }

    res.json({ ...data, savedDesignId });
  } catch (error) {
    console.error('Error in /replicate/poll:', error);
    res.status(500).json({ error: 'Failed to poll prediction' });
  }
});

// Image to SVG conversion endpoint
// Auth-only: prevents anonymous calls from abusing the paid Replicate
// vectorizer. Does not count against the monthly image-generation cap
// (this is a floor-plan vectorization, not a design generation).
app.post('/api/image-to-svg', genIpLimiter, genUserLimiter, async (req, res) => {
  try {
    const user = await getAuthUser(req, res, { requireConfirmed: true });
    if (!user) return; // 401 already sent

    const apiKey = process.env.REPLICATE_API_KEY;
    if (!apiKey) {
      console.error('REPLICATE_API_KEY not configured on server');
      return res.status(500).json({ error: 'Server API key not configured' });
    }

    const { image, filename } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    console.log('Starting image to SVG conversion for:', filename);

    // Use merahburam/vectorizer-v2 model - a high-quality PNG to SVG converter
    const predictionResponse = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: "710ceb70bc468d7ee6f252a16a7d9b60e9fbe24786965dbc2e808c2de38a5a32",
        input: {
          image: image,
          vectorizer: "vtracer",
          color_count: 8,
          optimize_svg: true,
          min_area: 25,
          simplify_tolerance: 1.5
        }
      }),
    });

    if (!predictionResponse.ok) {
      const errorData = await predictionResponse.json().catch(() => ({ detail: 'Unknown error' }));
      console.error('Vectorizer failed:', errorData);
      return res.status(500).json({ 
        error: 'Image vectorization failed. Please use "As Reference Image" option instead.',
        message: errorData.detail || 'Vectorization model error'
      });
    }

    const predictionData = await predictionResponse.json();
    console.log('Prediction started:', predictionData.id);

    // Poll for completion
    return await pollAndReturnSVG(predictionData, apiKey, res);

  } catch (error) {
    console.error('Error in /api/image-to-svg:', error);
    res.status(500).json({ 
      error: 'Failed to convert image to SVG',
      message: error.message
    });
  }
});

// Helper function to poll for prediction completion and return SVG
async function pollAndReturnSVG(predictionData, apiKey, res) {
  const maxAttempts = 60;
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    const pollResponse = await fetch(predictionData.urls.get, {
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!pollResponse.ok) {
      const errorData = await pollResponse.json().catch(() => ({ detail: 'Unknown error' }));
      return res.status(500).json({ error: errorData.detail || 'Polling failed' });
    }

    const pollData = await pollResponse.json();
    console.log(`Poll attempt ${attempts + 1}:`, pollData.status);

    if (pollData.status === 'succeeded') {
      const output = pollData.output;
      console.log('Conversion output:', typeof output, output);
      
      // Handle different output formats
      if (typeof output === 'string') {
        if (output.startsWith('<?xml') || output.startsWith('<svg')) {
          const cleanedSvg = removeWhiteBackground(output);
          return res.json({ svg: cleanedSvg });
        } else if (output.startsWith('http')) {
          // Output is a URL, fetch the content
          console.log('Fetching SVG from URL:', output);
          const svgResponse = await fetch(output);
          if (svgResponse.ok) {
            const contentType = svgResponse.headers.get('content-type') || '';
            const text = await svgResponse.text();
            
            // Check if it's SVG content (either by content-type or by content)
            if (contentType.includes('svg') || text.includes('<svg') || text.includes('<?xml')) {
              const cleanedSvg = removeWhiteBackground(text);
              return res.json({ svg: cleanedSvg });
            } else {
              // It's not SVG, create an SVG with embedded image
              return res.json({
                svg: createSVGFromImageUrl(output),
                isEmbedded: true
              });
            }
          }
        }
      } else if (Array.isArray(output) && output.length > 0) {
        // Some models return array of outputs
        const svgUrl = output.find(url => typeof url === 'string' && url.includes('.svg'));
        if (svgUrl) {
          const svgResponse = await fetch(svgUrl);
          if (svgResponse.ok) {
            const svgText = await svgResponse.text();
            const cleanedSvg = removeWhiteBackground(svgText);
            return res.json({ svg: cleanedSvg });
          }
        }
        // Try the first URL
        const firstUrl = output[0];
        if (typeof firstUrl === 'string' && firstUrl.startsWith('http')) {
          const svgResponse = await fetch(firstUrl);
          if (svgResponse.ok) {
            const text = await svgResponse.text();
            if (text.includes('<svg') || text.includes('<?xml')) {
              const cleanedSvg = removeWhiteBackground(text);
              return res.json({ svg: cleanedSvg });
            }
          }
        }
        // Fallback to embedded image
        return res.json({
          svg: createSVGFromImageUrl(output[0]),
          isEmbedded: true
        });
      }

      // Fallback - conversion didn't produce expected output
      return res.status(500).json({ 
        error: 'Conversion completed but no SVG output was produced',
        output: JSON.stringify(output)
      });
    } else if (pollData.status === 'failed') {
      console.error('Prediction failed:', pollData.error);
      return res.status(500).json({ 
        error: 'Image conversion failed',
        message: pollData.error
      });
    }

    // Wait before next poll
    await new Promise(resolve => setTimeout(resolve, 1000));
    attempts++;
  }

  return res.status(408).json({ error: 'Conversion timed out' });
}

// Helper to create SVG with embedded image
function createSVGFromImageUrl(imageUrl) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     width="800" height="600" viewBox="0 0 800 600">
  <image href="${imageUrl}" x="0" y="0" width="800" height="600" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
}

// Helper to check if a color is white or near-white
function isWhiteColor(color) {
  if (!color) return false;
  const c = color.toLowerCase().trim();
  
  // Direct white values
  if (c === '#fff' || c === '#ffffff' || c === 'white') return true;
  
  // RGB format
  const rgbMatch = c.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  if (rgbMatch) {
    const [, r, g, b] = rgbMatch.map(Number);
    // Consider near-white (248+) as white too
    return r >= 248 && g >= 248 && b >= 248;
  }
  
  // RGBA format
  const rgbaMatch = c.match(/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/);
  if (rgbaMatch) {
    const [, r, g, b, a] = rgbaMatch;
    if (parseFloat(a) < 0.1) return false; // Transparent
    return parseInt(r) >= 248 && parseInt(g) >= 248 && parseInt(b) >= 248;
  }
  
  // Hex format with near-white
  const hexMatch = c.match(/^#([a-f0-9]{6})$/);
  if (hexMatch) {
    const hex = hexMatch[1];
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return r >= 248 && g >= 248 && b >= 248;
  }
  
  // Short hex
  const shortHexMatch = c.match(/^#([a-f0-9]{3})$/);
  if (shortHexMatch) {
    const hex = shortHexMatch[1];
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    return r >= 248 && g >= 248 && b >= 248;
  }
  
  return false;
}

// Helper to remove white background from SVG
function removeWhiteBackground(svgString) {
  let processed = svgString;
  
  console.log('Processing SVG to remove white background...');
  console.log('Original SVG length:', svgString.length);
  
  // Replace ALL white fills with transparent/none
  // This is aggressive but works well for floor plans where we want outlines
  processed = processed.replace(
    /fill=["'](#fff|#ffffff|#FFF|#FFFFFF|white|rgb\(255,\s*255,\s*255\)|rgba\(255,\s*255,\s*255,\s*1\))["']/gi,
    'fill="none"'
  );
  
  // Also handle near-white colors (f8f8f8, fafafa, etc.)
  processed = processed.replace(
    /fill=["'](#f[8-9a-f]f[8-9a-f]f[8-9a-f]|#F[8-9A-F]F[8-9A-F]F[8-9A-F])["']/gi,
    'fill="none"'
  );
  
  // Remove rect elements that span the full canvas (common background pattern)
  processed = processed.replace(
    /<rect[^>]*(?:width=["']100%["']|height=["']100%["'])[^>]*\/?>/gi,
    ''
  );
  
  // Remove style background-color on svg element
  processed = processed.replace(
    /(<svg[^>]*)(style=["'][^"']*)(background(?:-color)?:\s*[^;"']+;?)([^"']*["'])/gi,
    '$1$2$4'
  );
  
  // Add transparent background style to svg element if not present
  if (!processed.includes('style=')) {
    processed = processed.replace(
      /<svg([^>]*)>/,
      '<svg$1 style="background: transparent;">'
    );
  }
  
  console.log('Processed SVG length:', processed.length);
  
  return processed;
}

// Feng Shui Analysis endpoint — floor-plan layout (layout editor) or room photo (design flow)
app.post('/api/feng-shui', genIpLimiter, genUserLimiter, async (req, res) => {
  try {
    const user = await getAuthUser(req, res, { requireConfirmed: true });
    if (!user) return;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    const { floorPlanData, imageBase64, analysisType } = req.body;
    const isRoomPhoto = analysisType === 'room-photo' || (!floorPlanData && imageBase64);

    if (!imageBase64 && !floorPlanData) {
      return res.status(400).json({ error: 'imageBase64 or floorPlanData is required' });
    }

    const systemPrompt = isRoomPhoto
      ? `You are an expert feng shui consultant analyzing interior room photographs. You MUST return ONLY valid JSON (no markdown, no code fences, no explanation text outside the JSON).

Analyze what you can see in the photo: furniture placement, energy flow (qi), command position, door/window alignment, clutter, natural light, color balance, and the five elements (wood, fire, earth, metal, water).

Return this exact JSON structure:
{
  "overallScore": <number 1-10>,
  "summary": "<brief feng shui assessment of the room>",
  "strengths": ["<positive aspect already working well>", ...],
  "suggestions": [
    {
      "category": "furniture" | "color" | "lighting" | "clutter" | "flow" | "decor" | "other",
      "principle": "<feng shui principle being applied>",
      "description": "<specific, actionable recommendation the homeowner can apply>",
      "priority": "high" | "medium" | "low"
    }
  ],
  "elementsSummary": "<one sentence overview of elemental balance, e.g. which elements are low or dominant>",
  "elements": {
    "wood": {
      "level": "low" | "balanced" | "strong",
      "score": <number 1-10, where 5-6 is balanced>,
      "summary": "<brief assessment of this element in the room>",
      "present": ["<specific item or color visible in the photo>", ...],
      "add": ["<actionable way to strengthen this element>", ...]
    },
    "fire": { "level": "...", "score": <1-10>, "summary": "...", "present": [...], "add": [...] },
    "earth": { "level": "...", "score": <1-10>, "summary": "...", "present": [...], "add": [...] },
    "metal": { "level": "...", "score": <1-10>, "summary": "...", "present": [...], "add": [...] },
    "water": { "level": "...", "score": <1-10>, "summary": "...", "present": [...], "add": [...] }
  }
}

For each element, base level and score on what is visible: wood = plants/wood/green; fire = lighting/warm colors/red-orange; earth = ceramics/stone/beige-brown; metal = metal/white-gray/round shapes; water = mirrors/glass/blue-black/flowing forms. Always include all five elements. Keep present/add arrays short (0-3 items each).

Keep suggestions practical and specific to what is visible. Do not invent furniture or architectural features that are not in the image.`
      : `You are an expert feng shui consultant analyzing floor plans. You MUST return ONLY valid JSON (no markdown, no code fences, no explanation text outside the JSON).

LAYOUT DATA:
- Each furniture item includes its current "position" description (e.g. "top-left corner", "bottom side"), distance to the nearest wall, and distances/directions to the nearest doors and windows.
- Doors and windows include their absolute positions and facing angles.
- If an image is provided, use it as the PRIMARY reference for understanding the spatial layout.

PLACEMENT INSTRUCTIONS:
- Do NOT return raw pixel coordinates. Instead, describe WHERE to place each item using a "placement" object.
- "placement.wall" specifies which wall to place against: "top", "bottom", "left", "right", or "none" (for center/floating placement).
- "placement.alignX" specifies horizontal alignment along the wall: "left", "center", "right", or a number 0.0–1.0 for a specific position along the wall (0=left/top end, 1=right/bottom end).
- "placement.alignY" specifies vertical alignment: "top", "center", "bottom", or a number 0.0–1.0.
- "placement.offsetFeet" is an optional inward offset from the wall in feet (default 0). Use this to push furniture slightly away from the wall.
- For "none" wall placement (floating/centered), alignX and alignY position the item relative to the full room (0.0–1.0 where 0.5 is center).

CRITICAL RULES:
- NEVER suggest moving, adding, or removing walls, doors, or windows
- ONLY suggest rearranging existing furniture items that already exist in the layout
- Each suggestion must reference a specific furniture item by its exact "id" field
- Rotations must be 0, 90, 180, or 270

Return this exact JSON structure:
{
  "overallScore": <number 1-10>,
  "summary": "<brief feng shui assessment>",
  "suggestions": [
    {
      "furnitureId": "<exact id of the furniture item>",
      "furnitureName": "<name of the item>",
      "principle": "<feng shui principle being applied>",
      "description": "<what to do and why>",
      "priority": "high" | "medium" | "low",
      "placement": {
        "wall": "top" | "bottom" | "left" | "right" | "none",
        "alignX": "left" | "center" | "right" | <0.0-1.0>,
        "alignY": "top" | "center" | "bottom" | <0.0-1.0>,
        "offsetFeet": <number, optional>
      },
      "newRotation": <0 | 90 | 180 | 270>
    }
  ]
}`;

    const messages = [{ role: 'system', content: systemPrompt }];
    const userContent = [];

    if (imageBase64) {
      userContent.push({
        type: 'image_url',
        image_url: { url: imageBase64, detail: 'high' }
      });
    }

    if (isRoomPhoto) {
      userContent.push({
        type: 'text',
        text: 'Analyze this room photograph for feng shui. Evaluate furniture placement, energy flow, command position, balance of the five elements, clutter, natural light, and door/window alignment. Provide practical recommendations the homeowner can apply based on what you see.'
      });
    } else {
      userContent.push({
        type: 'text',
        text: `Analyze this floor plan for feng shui.${imageBase64 ? ' The image above shows the current layout.' : ''} Here is the structured layout data with pre-computed spatial relationships:\n\n${JSON.stringify(floorPlanData, null, 2)}\n\nProvide feng shui furniture rearrangement suggestions using placement descriptions (wall, alignX, alignY, offsetFeet) — NOT pixel coordinates. Only rearrange existing furniture. Use the exact furniture IDs from the data.`
      });
    }

    messages.push({ role: 'user', content: userContent });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages,
        max_tokens: 4096,
        temperature: 0.6
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('OpenAI API error:', err);
      return res.status(response.status).json({ error: err.error?.message || 'OpenAI API error' });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    // Parse JSON from the response (handle possible markdown fences)
    let parsed;
    try {
      const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      parsed = JSON.parse(jsonStr);
    } catch (e) {
      console.error('Failed to parse feng shui response:', content);
      return res.status(500).json({ error: 'Invalid response from AI', raw: content });
    }

    res.json(parsed);
  } catch (err) {
    console.error('Feng shui analysis error:', err);
    res.status(500).json({ error: 'Server error during feng shui analysis' });
  }
});

// Convert an uploaded floor-plan image into a structured layout via Claude vision.
app.post('/api/import-floor-plan', genIpLimiter, genUserLimiter, async (req, res) => {
  try {
    const user = await getAuthUser(req, res, { requireConfirmed: true });
    if (!user) return;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Anthropic API key not configured' });
    }

    const { imageBase64 } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'imageBase64 is required' });
    }

    const match = imageBase64.match(/^data:(image\/(?:png|jpeg|jpg|webp));base64,(.+)$/i);
    if (!match) {
      return res.status(400).json({ error: 'imageBase64 must be a data URL with image/png|jpeg|webp' });
    }
    const mediaType = match[1].toLowerCase().replace('image/jpg', 'image/jpeg');
    const data = match[2];

    const FURNITURE_CATALOG = [
      { id: 'sofa', w: 7, h: 3 }, { id: 'armchair', w: 3, h: 3 },
      { id: 'coffee-table', w: 4, h: 2 }, { id: 'floor-plant', w: 1.5, h: 1.5 },
      { id: 'tv-stand', w: 5, h: 1.5 }, { id: 'bookshelf', w: 4, h: 1 },
      { id: 'queen-bed', w: 5, h: 6.5 }, { id: 'king-bed', w: 6.5, h: 6.5 },
      { id: 'twin-bed', w: 3.5, h: 6.5 }, { id: 'nightstand', w: 2, h: 2 },
      { id: 'dresser', w: 5, h: 2 }, { id: 'wardrobe', w: 4, h: 2 },
      { id: 'dining-table', w: 6, h: 3.5 }, { id: 'dining-chair', w: 1.5, h: 1.5 },
      { id: 'buffet', w: 5, h: 1.5 }, { id: 'fridge', w: 3, h: 3 },
      { id: 'stove', w: 2.5, h: 2.5 }, { id: 'sink-kitchen', w: 3, h: 2 },
      { id: 'dishwasher', w: 2, h: 2 }, { id: 'counter', w: 4, h: 2 },
      { id: 'toilet', w: 1.5, h: 2.5 }, { id: 'bathtub', w: 2.5, h: 5 },
      { id: 'shower', w: 3, h: 3 }, { id: 'sink-bath', w: 2, h: 1.5 },
      { id: 'towel-holder', w: 1.5, h: 0.5 }, { id: 'floor-mat', w: 2, h: 3 },
      { id: 'light-fixture', w: 1, h: 1 }, { id: 'desk', w: 5, h: 2.5 },
      { id: 'office-chair', w: 2, h: 2 }, { id: 'filing-cabinet', w: 1.5, h: 2 }
    ];

    const systemPrompt = `You convert floor-plan images into a structured JSON description for a 2D floor-plan editor.

Return ONLY valid JSON (no markdown, no code fences, no commentary). Use this exact schema:

{
  "width_ft": <number>,        // overall width of the plan in feet
  "height_ft": <number>,       // overall height of the plan in feet
  "walls": [                   // wall CENTERLINES. Origin (0,0) is the top-left of the plan.
    { "x1": <ft>, "y1": <ft>, "x2": <ft>, "y2": <ft> }
  ],
  "openings": [                // doors and windows that sit on a wall
    {
      "wall_index": <integer>, // index into walls[]
      "center_ft": <number>,   // distance along the wall from (x1,y1) to the center of the opening
      "length_ft": <number>,   // length of the opening along the wall
      "type": "door" | "window"
    }
  ],
  "labels": [                  // optional room name labels positioned in the room
    { "x_ft": <number>, "y_ft": <number>, "text": "<string>" }
  ],
  "furniture": [               // furniture items detected in the plan (chairs, beds, tables, fixtures, etc.)
    {
      "type": "<one of the catalog ids below>",
      "center_x_ft": <number>, // center of the item, in feet
      "center_y_ft": <number>,
      "width_ft": <number>,    // along the item's local x-axis BEFORE rotation; use catalog default if uncertain
      "height_ft": <number>,   // along the item's local y-axis BEFORE rotation
      "rotation_deg": <number> // 0, 90, 180, or 270 — clockwise from the catalog's default orientation
    }
  ]
}

FURNITURE CATALOG (use the exact id, pick the closest match for what's shown). Default footprint in feet is (w × h):
${FURNITURE_CATALOG.map(f => `- ${f.id} (${f.w} × ${f.h})`).join('\n')}

Wall rules:
- Output ONE wall per real wall. If the drawing shows a wall as two parallel lines (showing thickness) or a filled rectangle, output a SINGLE centerline between them.
- Snap walls to axis-aligned (0°/90°) when the drawing clearly intends right angles. Preserve diagonals only when clearly intentional.
- Door arcs and the gap they sit in count as ONE door opening on the underlying wall. Window double-lines count as ONE window opening on the underlying wall.
- Keep wall count minimal — merge collinear, end-to-end segments into a single wall.
- Coordinates must be non-negative: walls.x1/x2 ∈ [0, width_ft], y1/y2 ∈ [0, height_ft].

Scale inference (very important — get the overall size right):
- If the plan has labeled dimensions ("12'-6\"", "3.5 m") or a scale bar, use them.
- Otherwise compare against any beds (queen ≈ 5×6.5 ft), refrigerators (≈ 3 ft wide), toilets (≈ 1.5×2.5 ft), or doors (≈ 3 ft wide). Pick the most reliable reference and back into width_ft / height_ft from it.
- If still uncertain, assume the longest side is 25–35 feet.

Furniture rules:
- Detect every visible furniture item, not just a representative sample.
- Map symbols you see (rectangles, beds, chairs, fixtures) to the nearest catalog id. If something has no good match, omit it rather than inventing a type.
- "rotation_deg" describes orientation relative to the catalog default (catalog defaults are listed width × height as drawn upright). Use 0 if the long axis is horizontal, 90 if rotated clockwise, etc.
- Place center_x_ft / center_y_ft at the visual center of the item.

Skip decorations: hatching, dimension lines, north arrows, title blocks, page borders, plant pots that aren't floor plants, decorative text outside room labels.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-7',
        max_tokens: 4096,
        system: systemPrompt,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mediaType, data } },
            { type: 'text', text: 'Vectorize this floor plan into the JSON schema above.' }
          ]
        }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error:', errText);
      return res.status(response.status).json({ error: 'Vision API error', detail: errText.slice(0, 500) });
    }

    const result = await response.json();
    const text = result.content?.[0]?.text || '';
    let parsed;
    try {
      const jsonStr = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
      parsed = JSON.parse(jsonStr);
    } catch (e) {
      console.error('Failed to parse vision output:', text);
      return res.status(500).json({ error: 'Could not parse vision output', raw: text });
    }

    res.json(parsed);
  } catch (err) {
    console.error('Floor plan import error:', err);
    res.status(500).json({ error: 'Server error during floor plan import' });
  }
});

// Config endpoint for client-side auth (Supabase URL and anon key)
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: SUPABASE_URL,
    supabaseAnonKey: SUPABASE_ANON_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '',
    tokensPerPurchase: TOKENS_PER_PURCHASE,
    priceAmount: parseInt(process.env.PRICE_AMOUNT) || 199,
    tokenPacks: getConfiguredTokenPacks(),
    // Public GA4 Measurement ID (e.g. G-XXXXXXXXXX). Empty disables analytics.
    gaMeasurementId: process.env.GA_MEASUREMENT_ID?.trim() || '',
  });
});

// ── Feedback ────────────────────────────────────────────────────────────────
// Emails user feedback to FEEDBACK_TO_EMAIL via Gmail SMTP. The destination
// address lives only in env vars so it is never exposed to the client.
// Required env: FEEDBACK_SMTP_USER (gmail address), FEEDBACK_SMTP_PASS (app
// password). Optional: FEEDBACK_TO_EMAIL (defaults to FEEDBACK_SMTP_USER).
const FEEDBACK_SMTP_USER = process.env.FEEDBACK_SMTP_USER?.trim() || '';
const FEEDBACK_SMTP_PASS = process.env.FEEDBACK_SMTP_PASS?.trim() || '';
const FEEDBACK_TO_EMAIL = process.env.FEEDBACK_TO_EMAIL?.trim() || FEEDBACK_SMTP_USER;
let feedbackTransporter = null;
if (FEEDBACK_SMTP_USER && FEEDBACK_SMTP_PASS) {
  feedbackTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: FEEDBACK_SMTP_USER, pass: FEEDBACK_SMTP_PASS },
  });
} else {
  console.warn('[feedback] Missing FEEDBACK_SMTP_USER or FEEDBACK_SMTP_PASS — /api/feedback is disabled until these are set');
}

app.post('/api/feedback', feedbackLimiter, async (req, res) => {
  try {
    const { message, email, page, website } = req.body || {};

    // Honeypot: real users never fill this hidden field. Pretend success so
    // bots don't learn they were caught.
    if (typeof website === 'string' && website.trim() !== '') {
      return res.json({ ok: true });
    }

    const text = typeof message === 'string' ? message.trim() : '';
    if (!text) return res.status(400).json({ error: 'Feedback message is required' });
    if (text.length > 5000) return res.status(400).json({ error: 'Feedback is too long (5000 character max)' });

    const replyTo = typeof email === 'string' ? email.trim().slice(0, 200) : '';
    if (replyTo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    if (!feedbackTransporter) {
      return res.status(503).json({ error: 'Feedback is not available right now. Please try again later.' });
    }

    // Best-effort: identify the signed-in user without requiring auth.
    let accountEmail = '';
    const authHeader = req.headers.authorization;
    if (supabase && authHeader?.startsWith('Bearer ')) {
      try {
        const { data: { user } } = await supabase.auth.getUser(authHeader.slice(7));
        accountEmail = user?.email || '';
      } catch { /* anonymous feedback is fine */ }
    }

    const meta = [
      accountEmail && `Account: ${accountEmail}`,
      replyTo && `Reply-to: ${replyTo}`,
      typeof page === 'string' && page.trim() && `Page: ${page.trim().slice(0, 300)}`,
      `Received: ${new Date().toISOString()}`,
    ].filter(Boolean).join('\n');

    // Plain-text body only — user content is never rendered as HTML.
    await feedbackTransporter.sendMail({
      from: `"DecorAIt Feedback" <${FEEDBACK_SMTP_USER}>`,
      to: FEEDBACK_TO_EMAIL,
      replyTo: replyTo || accountEmail || undefined,
      subject: 'DecorAIt feedback',
      text: `${text}\n\n---\n${meta}`,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Feedback error:', err);
    res.status(500).json({ error: 'Failed to send feedback. Please try again later.' });
  }
});

// Helper: get authenticated user from Bearer token.
// Pass { requireConfirmed: true } on endpoints that spend money — it rejects
// accounts whose email isn't verified, so disposable-email farming of the paid
// AI providers is blocked server-side even if Supabase's "Confirm email" toggle
// is ever turned off. (Keep that toggle ON in the Supabase dashboard too.)
async function getAuthUser(req, res, { requireConfirmed = false } = {}) {
  if (!supabase) {
    res.status(503).json({ error: 'Auth service not configured' });
    return null;
  }
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  const token = authHeader.split(' ')[1];
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    res.status(401).json({ error: 'Invalid token' });
    return null;
  }
  if (requireConfirmed && !user.email_confirmed_at && !user.confirmed_at) {
    res.status(403).json({ error: 'Email not verified. Please confirm your email before generating.' });
    return null;
  }
  return user;
}

// ── Woodworking projects (simple single-project-per-user persistence for v1) ──
// Requires table user_woodworking_projects (see migration note in src/woodworking/editor.js).
app.get('/api/woodworking-project', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { data, error } = await supabase
      .from('user_woodworking_projects')
      .select('id, state, name, updated_at')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) {
      console.error('Error fetching woodworking project:', error);
      return res.status(500).json({ error: 'Failed to fetch project' });
    }
    if (!data) return res.json({ state: null });
    res.json({ state: data.state, id: data.id, name: data.name || 'Untitled project' });
  } catch (err) {
    console.error('Error in GET /api/woodworking-project:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/woodworking-project', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { state, name } = req.body || {};
    if (state === undefined) return res.status(400).json({ error: 'state is required' });
    const projectName = (name && String(name).trim()) || 'Untitled project';
    const now = new Date().toISOString();
    const { data: existing } = await supabase
      .from('user_woodworking_projects')
      .select('id')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (existing) {
      const { error } = await supabase
        .from('user_woodworking_projects')
        .update({ state, name: projectName, updated_at: now })
        .eq('id', existing.id);
      if (error) {
        console.error('Error saving woodworking project:', error);
        return res.status(500).json({ error: 'Failed to save project' });
      }
      return res.json({ success: true, id: existing.id });
    }
    const { data: inserted, error: insertError } = await supabase
      .from('user_woodworking_projects')
      .insert({ user_id: user.id, name: projectName, state, updated_at: now })
      .select('id')
      .single();
    if (insertError) {
      console.error('Error inserting woodworking project:', insertError);
      return res.status(500).json({ error: 'Failed to save project' });
    }
    res.json({ success: true, id: inserted.id });
  } catch (err) {
    console.error('Error in PUT /api/woodworking-project:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Woodworking projects: multi-project collection endpoints ──
// Mirror the /api/layouts pattern so the editor can keep several named projects.

// List all of the user's projects (metadata only — no heavy state payload).
app.get('/api/woodworking-projects', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { data, error } = await supabase
      .from('user_woodworking_projects')
      .select('id, name, updated_at')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1000);
    if (error) {
      console.error('Error fetching woodworking projects:', error);
      return res.status(500).json({ error: 'Failed to fetch projects' });
    }
    res.json({ projects: Array.isArray(data) ? data : [] });
  } catch (err) {
    console.error('Error in GET /api/woodworking-projects:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get one project by id (full state for loading).
app.get('/api/woodworking-projects/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { data, error } = await supabase
      .from('user_woodworking_projects')
      .select('id, name, state, updated_at')
      .eq('id', req.params.id)
      .eq('user_id', user.id)
      .maybeSingle();
    if (error) {
      console.error('Error fetching woodworking project:', error);
      return res.status(500).json({ error: 'Failed to fetch project' });
    }
    if (!data) return res.status(404).json({ error: 'Project not found' });
    res.json(data);
  } catch (err) {
    console.error('Error in GET /api/woodworking-projects/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new project.
app.post('/api/woodworking-projects', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { name, state } = req.body || {};
    if (state === undefined) return res.status(400).json({ error: 'state is required' });
    const projectName = (name && String(name).trim()) || 'Untitled project';
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from('user_woodworking_projects')
      .insert({ user_id: user.id, name: projectName, state, updated_at: now })
      .select('id, name, updated_at')
      .single();
    if (error) {
      console.error('Error creating woodworking project:', error);
      return res.status(500).json({ error: 'Failed to save project' });
    }
    res.status(201).json(data);
  } catch (err) {
    console.error('Error in POST /api/woodworking-projects:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update an existing project (name and/or state).
app.put('/api/woodworking-projects/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { name, state } = req.body || {};
    const updates = { updated_at: new Date().toISOString() };
    if (name !== undefined) updates.name = (String(name).trim()) || 'Untitled project';
    if (state !== undefined) updates.state = state;
    const { data, error } = await supabase
      .from('user_woodworking_projects')
      .update(updates)
      .eq('id', req.params.id)
      .eq('user_id', user.id)
      .select('id, name, updated_at')
      .maybeSingle();
    if (error) {
      console.error('Error updating woodworking project:', error);
      return res.status(500).json({ error: 'Failed to save project' });
    }
    if (!data) return res.status(404).json({ error: 'Project not found' });
    res.json(data);
  } catch (err) {
    console.error('Error in PUT /api/woodworking-projects/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a project.
app.delete('/api/woodworking-projects/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { error } = await supabase
      .from('user_woodworking_projects')
      .delete()
      .eq('id', req.params.id)
      .eq('user_id', user.id);
    if (error) {
      console.error('Error deleting woodworking project:', error);
      return res.status(500).json({ error: 'Failed to delete project' });
    }
    res.status(204).send();
  } catch (err) {
    console.error('Error in DELETE /api/woodworking-projects/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get saved layout for the current user (returns latest from user_saved_layouts, or legacy user_layouts)
app.get('/api/layout', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { data: savedData, error: savedError } = await supabase
      .from('user_saved_layouts')
      .select('id, state, name')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (savedError) {
      console.error('Error fetching layout:', savedError);
      return res.status(500).json({ error: 'Failed to fetch layout' });
    }
    if (savedData) return res.json({ state: savedData.state, id: savedData.id, name: savedData.name || 'Untitled layout' });
    const { data: legacyData, error: legacyError } = await supabase
      .from('user_layouts')
      .select('state')
      .eq('user_id', user.id)
      .maybeSingle();
    if (legacyError) {
      console.error('Error fetching legacy layout:', legacyError);
      return res.status(500).json({ error: 'Failed to fetch layout' });
    }
    if (!legacyData) return res.json({ state: null });
    res.json({ state: legacyData.state });
  } catch (err) {
    console.error('Error in GET /api/layout:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Save layout for the current user (updates latest in user_saved_layouts or creates one)
app.put('/api/layout', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { state, name } = req.body;
    if (state === undefined) return res.status(400).json({ error: 'state is required' });
    const layoutName = (name && String(name).trim()) || 'Untitled layout';
    const { data: existing } = await supabase
      .from('user_saved_layouts')
      .select('id')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    const now = new Date().toISOString();
    if (existing) {
      const { error } = await supabase
        .from('user_saved_layouts')
        .update({ state, name: layoutName, updated_at: now })
        .eq('id', existing.id);
      if (error) {
        console.error('Error saving layout:', error);
        return res.status(500).json({ error: 'Failed to save layout' });
      }
      return res.json({ success: true, id: existing.id });
    }
    const { data: inserted, error: insertError } = await supabase
      .from('user_saved_layouts')
      .insert({ user_id: user.id, name: layoutName, state, updated_at: now })
      .select('id')
      .single();
    if (insertError) {
      console.error('Error saving layout:', insertError);
      return res.status(500).json({ error: 'Failed to save layout' });
    }
    res.json({ success: true, id: inserted.id });
  } catch (err) {
    console.error('Error in PUT /api/layout:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Generated designs (subscription-only) ─────────────────────────────────

function formatDesignForClient(row, imageUrl) {
  return {
    id: row.id,
    prompt: row.prompt,
    model: row.model,
    sourceType: row.source_type,
    metadata: row.metadata || {},
    createdAt: row.created_at,
    imageUrl,
  };
}

async function attachSignedUrls(designs) {
  const results = [];
  for (const row of designs) {
    const imageUrl = await createSignedDesignUrl(row.storage_path);
    results.push(formatDesignForClient(row, imageUrl));
  }
  return results;
}

// List saved generated designs for the current subscriber
app.get('/api/designs', async (req, res) => {
  try {
    const user = await requireActiveSubscription(req, res);
    if (!user) return;

    const limit = Math.min(parseInt(req.query.limit) || 50, 100);
    const offset = Math.max(parseInt(req.query.offset) || 0, 0);

    const { data, error } = await supabase
      .from('user_generated_designs')
      .select('id, storage_path, prompt, model, source_type, metadata, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('Error fetching designs:', error);
      return res.status(500).json({ error: 'Failed to fetch designs' });
    }

    const list = await attachSignedUrls(data || []);
    res.json({ designs: list });
  } catch (err) {
    console.error('Error in GET /api/designs:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get one saved design with a signed image URL
app.get('/api/designs/:id', async (req, res) => {
  try {
    const user = await requireActiveSubscription(req, res);
    if (!user) return;

    const { id } = req.params;
    const { data, error } = await supabase
      .from('user_generated_designs')
      .select('id, storage_path, prompt, model, source_type, metadata, created_at')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching design:', error);
      return res.status(500).json({ error: 'Failed to fetch design' });
    }
    if (!data) return res.status(404).json({ error: 'Design not found' });

    const imageUrl = await createSignedDesignUrl(data.storage_path);
    res.json(formatDesignForClient(data, imageUrl));
  } catch (err) {
    console.error('Error in GET /api/designs/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Save a generated design (used for Replicate / client-side generation paths)
app.post('/api/designs', async (req, res) => {
  try {
    const user = await requireActiveSubscription(req, res);
    if (!user) return;

    const { imageUrl, prompt, model, sourceType, metadata } = req.body || {};
    if (!imageUrl || typeof imageUrl !== 'string') {
      return res.status(400).json({ error: 'imageUrl is required' });
    }

    const saved = await persistGeneratedDesign(user.id, {
      imageSource: imageUrl,
      prompt,
      model,
      sourceType: sourceType || 'room-design',
      metadata: metadata && typeof metadata === 'object' ? metadata : {},
    });

    if (!saved) {
      return res.status(500).json({ error: 'Failed to save design' });
    }

    const signedUrl = await createSignedDesignUrl(saved.storage_path);
    res.status(201).json(formatDesignForClient(saved, signedUrl));
  } catch (err) {
    console.error('Error in POST /api/designs:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a saved design
app.delete('/api/designs/:id', async (req, res) => {
  try {
    const user = await requireActiveSubscription(req, res);
    if (!user) return;

    const { id } = req.params;
    const { data, error } = await supabase
      .from('user_generated_designs')
      .select('id, storage_path')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching design for delete:', error);
      return res.status(500).json({ error: 'Failed to delete design' });
    }
    if (!data) return res.status(404).json({ error: 'Design not found' });

    await deleteDesignRecord(user.id, data);
    res.status(204).send();
  } catch (err) {
    console.error('Error in DELETE /api/designs/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// List all saved layouts for the current user (id, name, updated_at)
app.get('/api/layouts', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .select('id, name, updated_at, preview_data_url')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1000);
    if (error) {
      console.error('Error fetching layouts:', error);
      return res.status(500).json({ error: 'Failed to fetch layouts' });
    }
    const list = Array.isArray(data) ? data : (data ? [data] : []);
    res.json({ layouts: list });
  } catch (err) {
    console.error('Error in GET /api/layouts:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Find a saved layout by name (for overwrite check). Returns first match by updated_at desc.
app.get('/api/layouts/by-name', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const name = req.query.name;
    if (!name || typeof name !== 'string') return res.status(400).json({ error: 'name is required' });
    const trimmed = name.trim();
    if (!trimmed) return res.status(400).json({ error: 'name is required' });
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .select('id, name, updated_at')
      .eq('user_id', user.id)
      .eq('name', trimmed)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) {
      console.error('Error fetching layout by name:', error);
      return res.status(500).json({ error: 'Failed to fetch layout' });
    }
    if (!data) return res.status(404).json({ error: 'No layout with this name' });
    res.json(data);
  } catch (err) {
    console.error('Error in GET /api/layouts/by-name:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get one saved layout by id (full state for loading)
app.get('/api/layouts/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { id } = req.params;
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .select('id, name, state, updated_at')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle();
    if (error) {
      console.error('Error fetching layout:', error);
      return res.status(500).json({ error: 'Failed to fetch layout' });
    }
    if (!data) return res.status(404).json({ error: 'Layout not found' });
    res.json(data);
  } catch (err) {
    console.error('Error in GET /api/layouts/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new saved layout
app.post('/api/layouts', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { name, state, preview_data_url } = req.body;
    if (state === undefined) return res.status(400).json({ error: 'state is required' });
    const layoutName = (name && String(name).trim()) || 'Untitled layout';
    const now = new Date().toISOString();
    const row = { user_id: user.id, name: layoutName, state, updated_at: now };
    if (preview_data_url != null && typeof preview_data_url === 'string') row.preview_data_url = preview_data_url;
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .insert(row)
      .select('id, name, updated_at')
      .single();
    if (error) {
      console.error('Error creating layout:', error);
      return res.status(500).json({ error: 'Failed to save layout' });
    }
    res.status(201).json(data);
  } catch (err) {
    console.error('Error in POST /api/layouts:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a saved layout
app.put('/api/layouts/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { id } = req.params;
    const { name, state, preview_data_url } = req.body;
    const updates = { updated_at: new Date().toISOString() };
    if (name !== undefined) updates.name = name;
    if (state !== undefined) updates.state = state;
    if (preview_data_url !== undefined && typeof preview_data_url === 'string') updates.preview_data_url = preview_data_url;
    const { data, error } = await supabase
      .from('user_saved_layouts')
      .update(updates)
      .eq('id', id)
      .eq('user_id', user.id)
      .select('id, name, updated_at')
      .maybeSingle();
    if (error) {
      console.error('Error updating layout:', error);
      return res.status(500).json({ error: 'Failed to save layout' });
    }
    if (!data) return res.status(404).json({ error: 'Layout not found' });
    res.json(data);
  } catch (err) {
    console.error('Error in PUT /api/layouts/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a saved layout
app.delete('/api/layouts/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const { id } = req.params;
    const { error } = await supabase
      .from('user_saved_layouts')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);
    if (error) {
      console.error('Error deleting layout:', error);
      return res.status(500).json({ error: 'Failed to delete layout' });
    }
    res.status(204).send();
  } catch (err) {
    console.error('Error in DELETE /api/layouts/:id:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve index.html for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
}); 