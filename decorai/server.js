import express from 'express';
import nodeFetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID, randomBytes, createHmac, timingSafeEqual } from 'crypto';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';
import { classifyPlan, Anthropic as PlanAnthropic } from './planClassifier.js';
import { createRateLimiter } from './lib/rateLimit.js';
import { sanitizeClientError } from './lib/clientErrors.js';
import {
  createShares,
  isShareId,
  renderSharePage,
  renderShareGonePage,
  SHARE_CACHE_SECONDS,
} from './lib/shares.js';
import { createQuota } from './lib/quota.js';
import { createFreeDailyCap } from './lib/freeDailyCap.js';
import { createGenerationEvents, parseModelCosts } from './lib/generationEvents.js';

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

// One-tap sign-in buttons to show (comma-separated: google, apple). Empty by
// default: a provider listed here but not configured in Supabase would give
// every visitor who taps it an error page, so turning one on is deliberate.
const SUPPORTED_OAUTH_PROVIDERS = new Set(['google', 'apple']);
const AUTH_OAUTH_PROVIDERS = [...new Set(
  (process.env.AUTH_OAUTH_PROVIDERS || '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter((s) => SUPPORTED_OAUTH_PROVIDERS.has(s)),
)];

// ── Outbound request deadlines ─────────────────────────────────────────────
// Every call to a provider (Replicate, OpenAI, Anthropic, image hosts) goes
// through this wrapper so none can hang. Without a deadline a stalled provider
// holds the client's request — and a socket — open until the platform kills
// it, and enough of those at once takes the whole instance down.
//
// Pass `timeoutMs` for calls that legitimately run long (image generation).
// A caller that supplies its own `signal` keeps full control.
const PROVIDER_TIMEOUT_MS = parseEnvInt('PROVIDER_TIMEOUT_MS', 30_000);
const PROVIDER_LONG_TIMEOUT_MS = parseEnvInt('PROVIDER_LONG_TIMEOUT_MS', 180_000);

function fetch(url, options = {}) {
  const { timeoutMs = PROVIDER_TIMEOUT_MS, ...rest } = options;
  if (rest.signal) return nodeFetch(url, rest);
  return nodeFetch(url, { ...rest, signal: AbortSignal.timeout(timeoutMs) });
}

/** True when an outbound call was cut off by its deadline. */
const isTimeoutError = (err) => err?.name === 'AbortError' || err?.name === 'TimeoutError';
const PROVIDER_TIMEOUT_MESSAGE = 'The AI service took too long to respond. Please try again.';

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

// ── Anonymous (pre-signup) generations ─────────────────────────────────────
// A first-time visitor gets this many generations before being asked to create
// an account, so the product proves itself before it asks for anything.
//
// Fails closed: requires ANON_DEVICE_SECRET (used to sign the device cookie).
// Without it the feature stays off no matter what ANON_FREE_GENERATIONS says,
// because an unsigned device id is trivially forged and the grant would be
// worthless. Setting the secret is the deliberate act that turns this on.
const ANON_FREE_GENERATIONS = parseEnvInt('ANON_FREE_GENERATIONS', 1);
const ANON_DEVICE_SECRET = process.env.ANON_DEVICE_SECRET?.trim() || '';
// Backstop for the obvious attack: clear the cookie, get another free run.
// Caps grants per client IP per rolling day. Keep this low — but not so low
// that an office or campus behind one NAT locks everyone out.
const ANON_MAX_PER_IP_PER_DAY = parseEnvInt('ANON_MAX_PER_IP_PER_DAY', 5);
const ANON_COOKIE_NAME = 'decorait_did';
const ANON_COOKIE_MAX_AGE_SEC = 60 * 60 * 24 * 365;
// Anonymous callers may only run the cheap staging models — never the premium
// edit path, the vectorizer, the feng-shui LLM, or anything else that costs
// real money per call. This is a subset of REPLICATE_ALLOWED_MODELS, enforced
// on top of it rather than instead of it.
const ANON_ALLOWED_MODELS = new Set([
  'proplabs/virtual-staging:635d607efc6e3a6016ef6d655327cd35f3d792e84b8f110688b04498c6e94cfb',
  'google/nano-banana',
  // "Remove this" region erase: mask-based object removal.
  'bria/eraser',
]);

const anonymousGenerationsEnabled = () =>
  ANON_FREE_GENERATIONS > 0 && !!ANON_DEVICE_SECRET && !!supabase;

if (ANON_FREE_GENERATIONS > 0 && !ANON_DEVICE_SECRET) {
  console.warn(
    '[anon] ANON_FREE_GENERATIONS is set but ANON_DEVICE_SECRET is missing — ' +
      'pre-signup generations are DISABLED. Generate a secret (e.g. `openssl rand -hex 32`) to enable them.',
  );
} else if (anonymousGenerationsEnabled()) {
  console.log(
    `[anon] Pre-signup generations enabled: ${ANON_FREE_GENERATIONS} per device, ` +
      `max ${ANON_MAX_PER_IP_PER_DAY} per IP per day`,
  );
}

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
  'bria/eraser',
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

// Premium generation accounting (monthly quota + tokens) lives in lib/quota.js
// so every branch can be unit-tested against a fake database.
const { reserveSlotForUser } = createQuota({
  supabase,
  monthlyLimit: SUBSCRIPTION_MONTHLY_LIMIT,
  getActiveSubscription,
  currentMonthStart,
});

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
// The decision itself is reserveSlotForUser in lib/quota.js.
async function reserveGenerationSlot(req, res) {
  const user = await getAuthUser(req, res, { requireConfirmed: true });
  if (!user) return { ok: false };

  const slot = await reserveSlotForUser(user.id);
  if (!slot.ok) {
    res.status(slot.status).json(slot.body);
    return { ok: false };
  }
  return slot;
}

// ── Daily cap on free generations ──────────────────────────────────────────
// Bounds what one account's free generations can cost per UTC day; the logic
// and its in-memory fallback are in lib/freeDailyCap.js. 0 disables the cap.
const FREE_DAILY_GENERATION_LIMIT = parseEnvInt('FREE_DAILY_GENERATION_LIMIT', 30);
const FREE_DAILY_GENERATION_LIMIT_SUBSCRIBER = Math.max(
  FREE_DAILY_GENERATION_LIMIT,
  parseEnvInt('FREE_DAILY_GENERATION_LIMIT_SUBSCRIBER', 100),
);
const { reserveFreeDailyGeneration } = createFreeDailyCap({
  supabase,
  baseLimit: FREE_DAILY_GENERATION_LIMIT,
  subscriberLimit: FREE_DAILY_GENERATION_LIMIT_SUBSCRIBER,
  getActiveSubscription,
});

// ── Generation events: what each model served, failed, and took ────────────
// One row per generation in generation_events (sql/generation_events.sql),
// best-effort; see lib/generationEvents.js. MODEL_COST_USD is an optional JSON
// map of model → estimated dollars per run.
const {
  recordGenerationStarted,
  recordGenerationOutcome,
  recordGenerationComplete,
} = createGenerationEvents({
  supabase,
  costs: parseModelCosts(process.env.MODEL_COST_USD),
});

// ── Public share links ─────────────────────────────────────────────────────
// A design shared as a link: /s/<id>. Logic and the page itself are in
// lib/shares.js; the table is sql/shared_designs.sql.
const MAX_SHARED_LINKS_FREE = parseEnvInt('MAX_SHARED_LINKS_FREE', 10);
const MAX_SHARED_LINKS_SUBSCRIBER = Math.max(
  MAX_SHARED_LINKS_FREE,
  parseEnvInt('MAX_SHARED_LINKS_SUBSCRIBER', 50),
);
const shares = createShares({
  supabase,
  bucket: DESIGNS_STORAGE_BUCKET,
  limits: { free: MAX_SHARED_LINKS_FREE, subscriber: MAX_SHARED_LINKS_SUBSCRIBER },
  getActiveSubscription,
});

// Whether to offer "Create a link" at all: only once the table exists. Checked
// at startup and re-checked (at most once a minute) while it is still missing,
// so running the SQL turns the feature on without a redeploy.
let shareLinksReady = false;
let shareLinksCheckedAt = 0;
async function refreshShareLinksReady() {
  if (shareLinksReady || MAX_SHARED_LINKS_FREE <= 0) return shareLinksReady;
  if (Date.now() - shareLinksCheckedAt < 60_000) return false;
  shareLinksCheckedAt = Date.now();
  shareLinksReady = await shares.probe().catch(() => false);
  if (shareLinksReady) console.log('[share] Share links enabled');
  return shareLinksReady;
}
refreshShareLinksReady().then((ready) => {
  if (!ready && supabase && MAX_SHARED_LINKS_FREE > 0) {
    console.warn('[share] shared_designs table not found — share links are off. Run sql/shared_designs.sql in Supabase.');
  }
});

/** The site's public origin, for links that leave the app. No trailing slash. */
function publicBaseUrl(req) {
  return (process.env.APP_URL || `${req.protocol}://${req.get('host')}`).replace(/\/+$/, '');
}

// ── Rate limiting (in-memory, single-instance) ─────────────────────────────
// Fixed-window counters keyed per-IP and/or per-account; see lib/rateLimit.js.

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
// Browser error reports: unauthenticated and written to the log, so bounded.
// The client already caps itself at 10 per page load.
const clientErrorLimiter = createRateLimiter({
  windowMs: 10 * ONE_MIN,
  max: parseInt(process.env.RATE_LIMIT_CLIENT_ERROR_MAX) || 30,
  keyFn: ipKey,
  message: 'Too many error reports',
});
// Creating a share publishes an image on this domain — keep it deliberate.
const shareCreateLimiter = createRateLimiter({
  windowMs: 10 * ONE_MIN,
  max: parseInt(process.env.RATE_LIMIT_SHARE_MAX) || 10,
  keyFn: (req) => userKey(req) || ipKey(req),
  message: 'You are creating links too quickly. Please try again in a few minutes.',
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

// Request bodies carry base64 images. The browser now downscales every room
// photo before sending it (src/roomPhoto.js), so the old 50 MB allowance only
// served to let one request hold that much memory. 20 MB still covers the
// largest legitimate payload (a full-size generated PNG plus a mask, or a
// floor-plan layout with an embedded reference image).
const JSON_BODY_LIMIT = process.env.JSON_BODY_LIMIT?.trim() || '20mb';
app.use(express.json({ limit: JSON_BODY_LIMIT }));
// Answer an oversized or malformed body in the JSON shape the client reads,
// rather than Express's default HTML error page.
app.use((err, req, res, next) => {
  if (err?.type === 'entity.too.large') {
    return res.status(413).json({ error: 'That upload is too large. Try a smaller image.' });
  }
  if (err?.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Malformed request.' });
  }
  return next(err);
});

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
  // cost the owner money per prediction. A confirmed account is the normal
  // path; a first-time visitor may instead spend one anonymous grant (see the
  // anonymous device helpers). Either way the rate limiters above apply.
  let user = null;
  let anonDeviceId = null;
  // Today's free-generation slot for a signed-in caller; refunded if the
  // provider never starts the prediction.
  let freeSlot = null;

  try {
    const apiKey = process.env.REPLICATE_API_KEY;
    if (!apiKey) {
      console.error('REPLICATE_API_KEY not configured on server');
      return res.status(500).json({ error: 'Server API key not configured' });
    }

    // Allowlist guard: only run the specific models the app uses. Without this,
    // a logged-in user could invoke ANY (potentially very expensive) Replicate
    // model on the owner's account by passing an arbitrary `version`.
    // Checked before auth so an anonymous caller can't even be considered for
    // a model that isn't on the cheap list.
    const requestedVersion = typeof req.body?.version === 'string' ? req.body.version : '';
    if (!REPLICATE_ALLOWED_MODELS.has(requestedVersion)) {
      console.warn(`[replicate] Rejected disallowed model version: ${requestedVersion.slice(0, 120)}`);
      return res.status(400).json({ error: 'Unsupported model' });
    }

    // Who's calling? A confirmed account, or a first-time visitor spending
    // their one pre-signup generation.
    const auth = await getAuthUserQuiet(req, { requireConfirmed: true });
    if (auth.reject) return res.status(auth.reject.status).json({ error: auth.reject.error });
    user = auth.user;
    if (!user) {
      if (!anonymousGenerationsEnabled() || !ANON_ALLOWED_MODELS.has(requestedVersion)) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      anonDeviceId = getOrCreateDeviceId(req, res);
      const claim = await claimAnonymousGeneration(anonDeviceId, req.ip);
      if (!claim.ok) {
        return res.status(claim.status).json({
          error: claim.error === 'ANON_EXHAUSTED'
            ? 'Create a free account to keep designing.'
            : claim.error,
          anonExhausted: claim.error === 'ANON_EXHAUSTED',
        });
      }
      console.log(`[anon] Granted a pre-signup generation to device ${anonDeviceId.slice(0, 8)}…`);
    } else {
      freeSlot = await reserveFreeDailyGeneration(user.id);
      if (!freeSlot.ok) {
        // No `limit` field on purpose: the client reads that as the monthly
        // premium cap. `code` tells it this is the daily free one.
        return res.status(429).json({
          error:
            `You've used today's ${freeSlot.limit} free designs. They reset at midnight UTC — ` +
            'premium generations still work in the meantime.',
          code: 'DAILY_FREE_LIMIT',
          dailyLimit: freeSlot.limit,
        });
      }
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
      if (freeSlot?.ok) await freeSlot.refund();
      return res.status(response.status).json({
        error: `Replicate API error (${response.status}): ${errorData.detail || 'Unknown error'}`
      });
    }

    const data = await response.json();
    // From here the prediction exists and is billable — the slot stays spent.
    freeSlot = null;
    recordGenerationStarted({
      provider: 'replicate',
      model: requestedVersion,
      predictionId: data?.id || null,
      userId: user?.id || null,
    });
    console.log('Replicate API response:', data);
    // Bind the prediction to the anonymous device so /replicate/poll will
    // serve it back to this visitor and nobody else.
    if (anonDeviceId && data?.id) {
      await recordAnonPrediction(anonDeviceId, data.id);
    }
    res.json(data);
  } catch (error) {
    console.error('Error in /replicate/predictions:', error);
    if (freeSlot?.ok) await freeSlot.refund().catch(() => {});
    if (isTimeoutError(error)) return res.status(504).json({ error: PROVIDER_TIMEOUT_MESSAGE });
    res.status(500).json({ error: 'Failed to start prediction' });
  }
});

// OpenAI image edit (gpt-image-2) — image-to-image generation
app.post('/openai/image-edit', genIpLimiter, genUserLimiter, async (req, res) => {
  const slot = await reserveGenerationSlot(req, res);
  if (!slot.ok) return;
  // Set once the request has actually gone to OpenAI — only then is there a
  // generation to record.
  let sentAt = 0;
  const recordOpenAi = (outcome, error = null) => {
    if (!sentAt) return;
    recordGenerationComplete({
      provider: 'openai',
      model: 'openai/gpt-image-2',
      userId: slot.userId || null,
      outcome,
      durationMs: Date.now() - sentAt,
      error,
    });
    sentAt = 0;
  };

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY not configured on server');
      await slot.refund();
      return res.status(500).json({ error: 'Server OpenAI key not configured' });
    }

    const { imageBase64, prompt, savePrompt, size, quality, sourceType, metadata, skipSave } = req.body || {};
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

    sentAt = Date.now();
    const response = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      timeoutMs: PROVIDER_LONG_TIMEOUT_MS,
      headers: { 'Authorization': `Bearer ${apiKey}` },
      body: form
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenAI image-edit error:', { status: response.status, error: errorData });
      recordOpenAi('failed', errorData.error?.message || `HTTP ${response.status}`);
      await slot.refund();
      return res.status(response.status).json({
        error: `OpenAI image edit error (${response.status}): ${errorData.error?.message || 'Unknown error'}`
      });
    }

    const data = await response.json();
    const b64Out = data?.data?.[0]?.b64_json;
    if (!b64Out) {
      console.error('OpenAI image-edit: no b64_json in response', data);
      recordOpenAi('failed', 'no image in response');
      await slot.refund();
      return res.status(500).json({ error: 'OpenAI returned no image data' });
    }
    recordOpenAi('succeeded');
    await incrementLifetimeGenerations(slot.userId);

    const outBuf = Buffer.from(b64Out, 'base64');
    // A region-masked run is composited against the original in the browser,
    // so this raw output is NOT what the user ends up with. Saving it here
    // would put a different image in My Designs than the one on screen — the
    // client saves the composited result instead.
    const saved = skipSave ? null : await persistGeneratedDesign(slot.userId, {
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
    recordOpenAi(isTimeoutError(error) ? 'timeout' : 'failed', error?.message);
    await slot.refund();
    if (isTimeoutError(error)) return res.status(504).json({ error: PROVIDER_TIMEOUT_MESSAGE });
    res.status(500).json({ error: 'Failed to generate image edit' });
  }
});

app.post('/replicate/poll', async (req, res) => {
  // This proxy attaches the Replicate API token to the outbound request, so it
  // must never become a general-purpose fetcher. Two guards, both required:
  //   1. isValidReplicatePollUrl pins the host to api.replicate.com and the
  //      path to /v1/predictions/ — that's the SSRF / token-leak boundary.
  //   2. The caller must own the prediction. A confirmed account may poll
  //      anything (unchanged); an anonymous visitor may poll ONLY the
  //      prediction ids their own device started, so one visitor can't read
  //      another's in-flight generation by guessing ids.
  let user = null;
  let anonDeviceId = null;

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

    const auth = await getAuthUserQuiet(req, { requireConfirmed: true });
    if (auth.reject) return res.status(auth.reject.status).json({ error: auth.reject.error });
    user = auth.user;
    if (!user) {
      anonDeviceId = anonymousGenerationsEnabled() ? readDeviceCookie(req) : null;
      const predictionId = predictionIdFromPollUrl(predictionUrl);
      if (!anonDeviceId || !(await anonOwnsPrediction(anonDeviceId, predictionId))) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
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

    if (data.status === 'succeeded' || data.status === 'failed' || data.status === 'canceled') {
      // Replicate reports model run time in seconds; fall back to wall time.
      const wallMs = data.completed_at && data.created_at
        ? new Date(data.completed_at) - new Date(data.created_at)
        : null;
      recordGenerationOutcome({
        predictionId: data.id || predictionIdFromPollUrl(predictionUrl),
        outcome: data.status,
        durationMs: Number.isFinite(data.metrics?.predict_time) ? data.metrics.predict_time * 1000 : wallMs,
        error: data.status === 'failed' ? data.error : null,
      });
    }

    let savedDesignId = null;
    // Anonymous results aren't persisted — there's no account to own them.
    // The client turns that into the signup prompt ("sign up to save this").
    if (user && data.status === 'succeeded' && saveContext && supabase) {
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
    if (isTimeoutError(error)) return res.status(504).json({ error: PROVIDER_TIMEOUT_MESSAGE });
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
      timeoutMs: 90_000,
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

// Name what the user highlighted for a region edit ("the grey sofa under the
// window"). Image models given only a magenta marker plus "remove this" tend
// to clean off the marker and keep the object; told what to remove by name,
// they do it. A cheap vision call that runs before the region removal,
// so it has its own limiter and doesn't count as a generation.
const identifyRegionLimiter = createRateLimiter({
  windowMs: GEN_WINDOW_MS,
  max: parseInt(process.env.RATE_LIMIT_IDENTIFY_MAX_PER_IP) || 60,
  keyFn: ipKey,
  message: 'Too many requests — please try again shortly.',
});

const IDENTIFY_REGION_SYSTEM = `You identify objects in room photos for an image editor.
Image 1 is a full room photo. One area is marked on it with a translucent magenta tint and a solid magenta outline. The marker is NOT part of the room; the user drew it to select something.
Image 2 is a close-up of the same area from the original photo, without the marker.
Name the object (or objects) the user selected: the thing the marker sits on.
Users paint roughly and often cover only part of an item. Name the whole piece of furniture, decor or fixture, not a part of it: "the armchair", not "the armchair's seat cushion"; "the floor lamp", not "the lampshade". Only name a smaller item when the marker clearly sits on a separate loose thing on top of something else (a throw pillow on a sofa, a vase on a table) and not on the larger item around it.
Return ONLY JSON: {"target": "<noun phrase>"}.
The noun phrase starts with "the", gives the object's real colour or material (from image 2, never magenta or pink because of the marker), and gives its position relative to other things so an editor can find it without the marker, e.g. "the grey fabric sofa against the back wall, under the window". Keep it under 20 words.
If several objects are marked, name all of them in one phrase. If you can't tell what is marked, return {"target": null}.`;

app.post('/api/identify-region', identifyRegionLimiter, async (req, res) => {
  try {
    const auth = await getAuthUserQuiet(req, { requireConfirmed: true });
    if (auth.reject) return res.status(auth.reject.status).json({ error: auth.reject.error });
    // A first-time visitor's one free generation can be a region removal too.
    if (!auth.user && !anonymousGenerationsEnabled()) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'OpenAI API key not configured' });

    const { markedImage, cropImage } = req.body || {};
    const isImage = (v) => typeof v === 'string' && /^data:image\/(png|jpe?g|webp);base64,/.test(v);
    if (!isImage(markedImage) || (cropImage && !isImage(cropImage))) {
      return res.status(400).json({ error: 'markedImage (data URL) is required' });
    }
    // The client sends small JPEGs; anything this large isn't from the app.
    if (markedImage.length + (cropImage?.length || 0) > 4 * 1024 * 1024) {
      return res.status(413).json({ error: 'Images too large' });
    }

    const content = [{ type: 'image_url', image_url: { url: markedImage, detail: 'high' } }];
    if (cropImage) content.push({ type: 'image_url', image_url: { url: cropImage, detail: 'high' } });
    content.push({ type: 'text', text: 'What did the user mark?' });

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      timeoutMs: 90_000,
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: process.env.REGION_IDENTIFY_MODEL || 'gpt-4o',
        messages: [
          { role: 'system', content: IDENTIFY_REGION_SYSTEM },
          { role: 'user', content },
        ],
        response_format: { type: 'json_object' },
        max_tokens: 120,
        temperature: 0,
      }),
    });
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('identify-region OpenAI error:', err);
      return res.status(502).json({ error: 'Could not identify the selection' });
    }
    const data = await response.json();
    let target = null;
    try {
      target = JSON.parse(data.choices?.[0]?.message?.content || '{}').target;
    } catch { /* fall through to null */ }
    // It goes into an image prompt: one short line, no quotes or markup.
    target = typeof target === 'string'
      ? target.replace(/[\r\n"`<>{}]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160)
      : '';
    if (target && !/^the\b/i.test(target)) target = `the ${target}`;
    res.json({ target: target || null });
  } catch (err) {
    console.error('identify-region error:', err);
    res.status(500).json({ error: 'Server error identifying the selection' });
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
      timeoutMs: 120_000,
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

// Floor plan importer: a vision model labels the layer groups of a DXF/PDF drawing
// (walls, doors, windows, furniture, …) and picks out room names. Geometry stays client-side.
app.post('/api/classify-plan', genIpLimiter, genUserLimiter, async (req, res) => {
  try {
    const user = await getAuthUser(req, res, { requireConfirmed: true });
    if (!user) return;
    const result = await classifyPlan(req.body);
    console.log(`[classify-plan] ${result.provider}/${result.model} ${result.groups.length} groups, ${result.room_labels.length} rooms, ${result.ms}ms, tokens in/out ${result.usage?.input_tokens}/${result.usage?.output_tokens}`);
    res.json(result);
  } catch (err) {
    if (err instanceof PlanAnthropic.RateLimitError) {
      return res.status(429).json({ error: 'The AI service is busy. Try again in a minute.' });
    }
    if (err instanceof PlanAnthropic.APIError) {
      console.error('[classify-plan] Anthropic API error:', err.status, err.message);
      return res.status(502).json({ error: 'AI layer review failed.' });
    }
    if (err?.status) return res.status(err.status).json({ error: err.message });
    console.error('[classify-plan] error:', err);
    res.status(500).json({ error: 'AI layer review failed.' });
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
    anonGenerationsEnabled: anonymousGenerationsEnabled(),
    // One-tap sign-in providers to offer. Each must also be enabled in
    // Supabase (Authentication → Providers) with this site as a redirect URL.
    oauthProviders: AUTH_OAUTH_PROVIDERS,
    // Offer "Create a link" for a design (needs sql/shared_designs.sql).
    shareLinksEnabled: shareLinksReady,
  });
  // Not awaited: this request reports the current state, and the re-check
  // (if one is due) is ready for the next.
  refreshShareLinksReady().catch(() => {});
});

// How many pre-signup generations this visitor has left. Issues the device
// cookie on first contact so the id is stable by the time they hit Generate.
// Deliberately cheap and unauthenticated — it leaks nothing but a yes/no about
// the caller's own device.
app.get('/api/anon-status', async (req, res) => {
  if (!anonymousGenerationsEnabled()) {
    return res.json({ enabled: false, remaining: 0 });
  }
  try {
    const deviceId = getOrCreateDeviceId(req, res);
    const hasGrant = await anonDeviceHasGrantLeft(deviceId);
    res.json({ enabled: true, remaining: hasGrant ? ANON_FREE_GENERATIONS : 0 });
  } catch (err) {
    console.error('Error in GET /api/anon-status:', err);
    // Fail closed: the client just shows the normal sign-up gate.
    res.json({ enabled: false, remaining: 0 });
  }
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

// ── Public share links ─────────────────────────────────────────────────────

// Publish the design on screen. Body: { card, og } — two JPEG data URLs built
// by the browser (src/shareImage.js).
app.post('/api/shares', shareCreateLimiter, async (req, res) => {
  try {
    const user = await getAuthUser(req, res, { requireConfirmed: true });
    if (!user) return;
    if (!(await refreshShareLinksReady())) {
      return res.status(503).json({ error: 'Share links are not available right now.' });
    }
    const result = await shares.createShare(user.id, { card: req.body?.card, og: req.body?.og });
    if (!result.ok) {
      return res.status(result.status).json({ error: result.error, code: result.code });
    }
    res.status(201).json({ id: result.id, url: `${publicBaseUrl(req)}/s/${result.id}` });
  } catch (err) {
    console.error('Error in POST /api/shares:', err);
    res.status(500).json({ error: 'Could not create the link' });
  }
});

// The caller's own live links, newest first.
app.get('/api/shares', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const base = publicBaseUrl(req);
    const sub = await getActiveSubscription(user.id).catch(() => null);
    const rows = await shares.listShares(user.id);
    res.json({
      limit: sub ? MAX_SHARED_LINKS_SUBSCRIBER : MAX_SHARED_LINKS_FREE,
      shares: rows.map((row) => ({
        id: row.id,
        url: `${base}/s/${row.id}`,
        createdAt: row.created_at,
        views: row.view_count || 0,
      })),
    });
  } catch (err) {
    console.error('Error in GET /api/shares:', err);
    res.status(500).json({ error: 'Could not load your links' });
  }
});

// Stop sharing. 404 covers both "not yours" and "not there" — a caller learns
// nothing about other people's links.
app.delete('/api/shares/:id', async (req, res) => {
  try {
    const user = await getAuthUser(req, res);
    if (!user) return;
    const revoked = await shares.revokeShare(user.id, req.params.id);
    if (!revoked) return res.status(404).json({ error: 'Link not found' });
    res.status(204).end();
  } catch (err) {
    console.error('Error in DELETE /api/shares/:id:', err);
    res.status(500).json({ error: 'Could not stop sharing' });
  }
});

// What a share page may load: its own images, the two font hosts, inline
// style. No scripts at all — the page is a picture and a link.
const SHARE_PAGE_CSP = [
  "default-src 'none'",
  "img-src 'self'",
  "style-src 'unsafe-inline' https://fonts.googleapis.com",
  'font-src https://fonts.gstatic.com',
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
].join('; ');

function shareResponseHeaders(res, found) {
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Short-lived, so "Stop sharing" takes effect within minutes everywhere. A
  // missing share is never cached: a link created a moment ago must not be
  // remembered as absent.
  res.set('Cache-Control', found ? `public, max-age=${SHARE_CACHE_SECONDS}` : 'no-store');
}

// The public page for one shared design.
app.get('/s/:id', async (req, res) => {
  const base = publicBaseUrl(req);
  res.set('Content-Security-Policy', SHARE_PAGE_CSP);
  try {
    const share = isShareId(req.params.id) ? await shares.getShare(req.params.id) : null;
    shareResponseHeaders(res, !!share);
    if (!share) return res.status(404).type('html').send(renderShareGonePage({ baseUrl: base }));
    shares.recordView(share.id);
    res.type('html').send(renderSharePage({ id: share.id, baseUrl: base }));
  } catch (err) {
    console.error('Error in GET /s/:id:', err);
    shareResponseHeaders(res, false);
    res.status(500).type('html').send(renderShareGonePage({ baseUrl: base }));
  }
});

// Its two images: the card shown on the page, and the link-preview image.
app.get('/s/:id/:file(card|og).jpg', async (req, res) => {
  try {
    const image = await shares.getShareImage(req.params.id, req.params.file);
    shareResponseHeaders(res, !!image);
    if (!image) return res.status(404).type('text').send('Not found');
    res.type('image/jpeg').send(image);
  } catch (err) {
    console.error('Error in GET /s/:id image:', err);
    shareResponseHeaders(res, false);
    res.status(500).type('text').send('Error');
  }
});

// ── Browser error reports ──────────────────────────────────────────────────
// Uncaught errors from visitors' browsers (src/errorReporting.js). Each becomes
// one `[client-error] {...}` log line — search the Render logs for that tag.
// Always answers 204: the reporter has nothing to do with the response, and a
// dropped report should look no different from an accepted one.
app.post('/api/client-error', clientErrorLimiter, (req, res) => {
  const report = sanitizeClientError(req.body);
  if (report) {
    console.error('[client-error]', JSON.stringify({ ...report, ua: String(req.headers['user-agent'] || '').slice(0, 200) }));
  }
  res.status(204).end();
});

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

// ── Anonymous device identity ──────────────────────────────────────────────
// A random device id in an HttpOnly cookie, signed with ANON_DEVICE_SECRET so
// a visitor can't mint their own. This is NOT a security boundary on its own —
// anyone can clear a cookie — which is why every grant is also counted per IP
// and restricted to the cheap models. It exists to make the honest path work,
// not to make the dishonest one impossible.

function parseCookies(req) {
  const header = req.headers.cookie;
  if (!header) return {};
  const out = {};
  for (const part of header.split(';')) {
    const eq = part.indexOf('=');
    if (eq < 0) continue;
    const k = part.slice(0, eq).trim();
    if (!k) continue;
    try { out[k] = decodeURIComponent(part.slice(eq + 1).trim()); } catch { /* skip malformed */ }
  }
  return out;
}

const signDeviceId = (id) =>
  createHmac('sha256', ANON_DEVICE_SECRET).update(id).digest('base64url');

/** Read a valid device id from the request cookie, or null. */
function readDeviceCookie(req) {
  if (!ANON_DEVICE_SECRET) return null;
  const raw = parseCookies(req)[ANON_COOKIE_NAME];
  if (!raw) return null;
  const dot = raw.lastIndexOf('.');
  if (dot <= 0) return null;
  const id = raw.slice(0, dot);
  const sig = raw.slice(dot + 1);
  if (!/^[A-Za-z0-9_-]{16,64}$/.test(id)) return null;
  const expected = signDeviceId(id);
  // Constant-time compare; Buffer lengths must match or timingSafeEqual throws.
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  return id;
}

/** Mint a new device id and set it on the response. */
function issueDeviceCookie(res) {
  const id = randomBytes(16).toString('base64url');
  res.cookie?.(ANON_COOKIE_NAME, `${id}.${signDeviceId(id)}`, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: ANON_COOKIE_MAX_AGE_SEC * 1000,
    path: '/',
  });
  return id;
}

/** Existing device id, or a freshly minted one. Null when the feature is off. */
function getOrCreateDeviceId(req, res) {
  if (!anonymousGenerationsEnabled()) return null;
  return readDeviceCookie(req) || issueDeviceCookie(res);
}

/**
 * How many anonymous grants this IP has taken in the last 24h.
 * Returns { ok: false } when the counter itself is broken — the caller must
 * fail closed, but the distinction matters: a missing table is an ops problem
 * to surface, not a visitor who hit their limit.
 */
async function anonGrantsForIpToday(ip) {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { count, error } = await supabase
    .from('anonymous_generations')
    .select('device_id', { count: 'exact', head: true })
    .eq('ip', ip)
    .gte('created_at', since);
  // A null count with no error is NOT "zero grants" — it means the query
  // didn't actually count anything (missing table, PostgREST quirk). Treating
  // it as 0 would silently remove the only backstop against cookie-clearing,
  // so it fails closed exactly like an explicit error.
  if (error || typeof count !== 'number') {
    console.error(
      '[anon] IP cap lookup failed — pre-signup generations are refused until this is fixed. ' +
        'Did you run sql/anonymous_generations.sql?',
      error || `(no error, but count was ${JSON.stringify(count)})`,
    );
    return { ok: false, count: 0 };
  }
  return { ok: true, count };
}

/**
 * Claim this device's anonymous generation.
 *
 * The INSERT is the lock: device_id is the primary key, so two concurrent
 * requests from one device race to create the row and exactly one wins. A
 * conflict means the device has already spent its grant.
 *
 * Returns { ok: true } or { ok: false, status, error }.
 */
async function claimAnonymousGeneration(deviceId, ip) {
  if (!anonymousGenerationsEnabled()) {
    return { ok: false, status: 401, error: 'Unauthorized' };
  }
  const ipGrants = await anonGrantsForIpToday(ip);
  if (!ipGrants.ok) {
    // Counter unavailable. Refuse rather than hand out ungoverned free runs.
    return { ok: false, status: 503, error: 'Free trials are temporarily unavailable. Please sign up to continue.' };
  }
  if (ipGrants.count >= ANON_MAX_PER_IP_PER_DAY) {
    return {
      ok: false,
      status: 429,
      error: 'Too many free trials from this network today. Please sign up to keep designing.',
    };
  }
  const { data, error } = await supabase
    .from('anonymous_generations')
    .insert({ device_id: deviceId, ip, used: 1 })
    .select('device_id');
  if (error) {
    // 23505 = unique_violation → this device already used its free generation.
    if (error.code === '23505') {
      return { ok: false, status: 401, error: 'ANON_EXHAUSTED' };
    }
    console.error('[anon] Failed to claim generation:', error);
    return { ok: false, status: 500, error: 'Could not start generation' };
  }
  if (!data || data.length === 0) {
    return { ok: false, status: 401, error: 'ANON_EXHAUSTED' };
  }
  return { ok: true };
}

/** Has this device already spent its grant? */
async function anonDeviceHasGrantLeft(deviceId) {
  if (!anonymousGenerationsEnabled() || !deviceId) return false;
  const { data, error } = await supabase
    .from('anonymous_generations')
    .select('used')
    .eq('device_id', deviceId)
    .maybeSingle();
  if (error) {
    console.error('[anon] Status lookup failed:', error);
    return false;
  }
  return !data;
}

/** Remember a prediction id so this device — and only it — can poll the result. */
async function recordAnonPrediction(deviceId, predictionId) {
  if (!deviceId || !predictionId) return;
  const { data } = await supabase
    .from('anonymous_generations')
    .select('prediction_ids')
    .eq('device_id', deviceId)
    .maybeSingle();
  const next = [...(data?.prediction_ids || []), predictionId].slice(-10);
  const { error } = await supabase
    .from('anonymous_generations')
    .update({ prediction_ids: next })
    .eq('device_id', deviceId);
  if (error) console.error('[anon] Failed to record prediction id:', error);
}

/** Did this device start that prediction? Gates anonymous polling. */
async function anonOwnsPrediction(deviceId, predictionId) {
  if (!deviceId || !predictionId) return false;
  const { data, error } = await supabase
    .from('anonymous_generations')
    .select('prediction_ids')
    .eq('device_id', deviceId)
    .maybeSingle();
  if (error || !data) return false;
  return (data.prediction_ids || []).includes(predictionId);
}

/** Prediction id out of a Replicate poll URL, or null. */
function predictionIdFromPollUrl(urlStr) {
  try {
    const u = new URL(urlStr);
    const m = u.pathname.match(/^\/v1\/predictions\/([A-Za-z0-9]+)\/?$/);
    return m ? m[1] : null;
  } catch { return null; }
}

/**
 * Resolve the caller WITHOUT sending a response, so a handler can fall through
 * to the anonymous path instead of 401-ing immediately.
 *
 * Returns { user } when signed in and allowed, { user: null } when there is no
 * credential at all (→ try anonymous), or { reject: {status, error} } when
 * there IS a credential but it isn't usable. That last case must not fall
 * through: someone who signed up but hasn't confirmed their email needs to be
 * told that, not handed a bare "Unauthorized".
 */
async function getAuthUserQuiet(req, { requireConfirmed = false } = {}) {
  if (!supabase) return { user: null };
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return { user: null };
  const token = authHeader.split(' ')[1];
  const { data: { user } = {}, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    return { user: null, reject: { status: 401, error: 'Invalid token' } };
  }
  if (requireConfirmed && !user.email_confirmed_at && !user.confirmed_at) {
    return {
      user: null,
      reject: {
        status: 403,
        error: 'Email not verified. Please confirm your email before generating.',
      },
    };
  }
  return { user };
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

// ── Last-resort error handling ─────────────────────────────────────────────
// A route that throws without its own try/catch used to answer with Express's
// HTML error page (which the client can't read) and, for a rejected promise
// outside any request, take the whole process down. Both are now logged under
// one tag — search the logs for `[server-error]`.
app.use((err, req, res, next) => {
  console.error('[server-error]', JSON.stringify({
    kind: 'route',
    method: req.method,
    path: req.path,
    message: String(err?.message || err).slice(0, 500),
    stack: String(err?.stack || '').slice(0, 2000),
  }));
  if (res.headersSent) return next(err);
  res.status(err?.status >= 400 && err?.status < 600 ? err.status : 500).json({ error: 'Server error' });
});

process.on('unhandledRejection', (reason) => {
  // Log and keep serving: one failed background promise (a best-effort write,
  // a refund) must not drop every in-flight generation.
  console.error('[server-error]', JSON.stringify({
    kind: 'unhandledRejection',
    message: String(reason?.message || reason).slice(0, 500),
    stack: String(reason?.stack || '').slice(0, 2000),
  }));
});

process.on('uncaughtException', (err) => {
  // State may be corrupt after a synchronous throw outside any handler — log
  // it, then exit so the platform restarts a clean process.
  console.error('[server-error]', JSON.stringify({
    kind: 'uncaughtException',
    message: String(err?.message || err).slice(0, 500),
    stack: String(err?.stack || '').slice(0, 2000),
  }));
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
}); 