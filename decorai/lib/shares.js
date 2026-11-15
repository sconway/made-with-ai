/**
 * Public share links for a design.
 *
 * A share is two JPEGs the browser built — the before/after card and a
 * link-preview image — stored privately and served through this server at
 * /s/:id. The raw room photo is never stored for a share: only the composed
 * picture the user chose to publish.
 *
 * Rules this module enforces:
 *   - Sharing is explicit, per design, and revocable. Revoking deletes the
 *     images and the record; nothing is kept.
 *   - Only a signed-in, confirmed account can create one (checked by the
 *     route). An unauthenticated upload endpoint that publishes images on this
 *     domain would be an open image host.
 *   - Uploads must really be JPEGs within a size cap, and each account has a
 *     cap on live links.
 *
 * Images stay in a private bucket and are streamed by the server rather than
 * linked from public storage, so a revoked link stops working as soon as the
 * short cache lifetime runs out.
 *
 * Dependencies are injected so test/unit/shares.test.mjs can run every branch
 * against an in-memory fake.
 */
import { randomBytes } from 'crypto';

const TABLE = 'shared_designs';
const ID_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789'; // no 0/O/1/l/I
const ID_LENGTH = 12;

export const SHARE_CARD_MAX_BYTES = 2 * 1024 * 1024;
export const SHARE_OG_MAX_BYTES = 700 * 1024;
/** How long browsers and link-preview caches may keep a share. Also the
 *  longest a revoked link can keep resolving from a cache. */
export const SHARE_CACHE_SECONDS = 300;

/** A random, unguessable id: 12 characters from a 57-symbol alphabet (~70 bits). */
export function newShareId() {
  let id = '';
  // Rejection sampling keeps the distribution uniform.
  while (id.length < ID_LENGTH) {
    for (const byte of randomBytes(ID_LENGTH * 2)) {
      if (byte < 228 && id.length < ID_LENGTH) id += ID_ALPHABET[byte % 57];
    }
  }
  return id;
}

export function isShareId(value) {
  return typeof value === 'string' && value.length === ID_LENGTH && [...value].every((c) => ID_ALPHABET.includes(c));
}

/**
 * Decode a `data:image/jpeg;base64,…` URL into bytes, or return null if it is
 * not a JPEG within `maxBytes`. The content is checked, not just the label: a
 * JPEG starts FF D8 FF and ends FF D9.
 */
export function parseJpegDataUrl(dataUrl, maxBytes) {
  if (typeof dataUrl !== 'string') return null;
  const match = /^data:image\/jpeg;base64,([A-Za-z0-9+/]+={0,2})$/.exec(dataUrl);
  if (!match) return null;
  // Reject on encoded length before allocating the decoded buffer.
  if (match[1].length > Math.ceil(maxBytes / 3) * 4 + 4) return null;
  const buf = Buffer.from(match[1], 'base64');
  if (buf.length < 100 || buf.length > maxBytes) return null;
  const startsAsJpeg = buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
  const endsAsJpeg = buf[buf.length - 2] === 0xff && buf[buf.length - 1] === 0xd9;
  return startsAsJpeg && endsAsJpeg ? buf : null;
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const PAGE_STYLE = `
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; background: #fdfcfa; color: #201e1a; font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif; -webkit-font-smoothing: antialiased; }
  main { max-width: 640px; margin: 0 auto; padding: 28px 20px 56px; }
  header { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 20px; }
  .brand { font-family: "Instrument Serif", Georgia, serif; font-size: 30px; line-height: 1; color: #201e1a; text-decoration: none; }
  .tag { font-size: 14px; color: #6b6355; }
  h1 { font-family: "Instrument Serif", Georgia, serif; font-weight: 400; font-size: 34px; line-height: 1.12; margin: 0 0 8px; letter-spacing: -0.01em; }
  p { font-size: 16px; line-height: 1.5; color: #4f4940; margin: 0 0 22px; }
  .card { display: block; width: 100%; height: auto; border-radius: 16px; border: 1px solid #e8e3da; background: #f4f1ea; }
  .cta { display: block; margin: 24px 0 10px; padding: 16px 20px; border-radius: 12px; background: #4f46e5; color: #fff; text-align: center; text-decoration: none; font-weight: 600; font-size: 17px; }
  .cta:hover { background: #4338ca; }
  .cta:focus-visible { outline: 3px solid #a5b4fc; outline-offset: 2px; }
  .small { font-size: 13px; color: #6b6355; text-align: center; margin: 0; }
  .gone { text-align: center; padding-top: 12vh; }
`;

function pageShell({ title, head = '', body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="robots" content="noindex">
${head}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Instrument+Serif&display=swap" rel="stylesheet">
<link rel="icon" href="/favicon.png">
<style>${PAGE_STYLE}</style>
</head>
<body>
<main>
${body}
</main>
</body>
</html>`;
}

/**
 * The public page for one share. Self-contained HTML (no app bundle), so it
 * loads instantly from a chat link and link-preview bots get their tags.
 * @param {{ id: string, baseUrl: string }} opts  baseUrl has no trailing slash
 */
export function renderSharePage({ id, baseUrl }) {
  const pageUrl = `${baseUrl}/s/${id}`;
  const title = 'A room, reimagined with DecorAIt';
  const description = 'See the before and after, then try it on your own room.';
  const tryUrl = `${baseUrl}/?utm_source=share&utm_medium=link&utm_campaign=design`;
  const head = `<meta name="description" content="${escapeHtml(description)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="DecorAIt">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${escapeHtml(pageUrl)}">
<meta property="og:image" content="${escapeHtml(pageUrl)}/og.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="A room before and after an AI redesign">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${escapeHtml(pageUrl)}/og.jpg">`;
  const body = `<header>
  <a class="brand" href="${escapeHtml(tryUrl)}">DecorAIt</a>
  <span class="tag">Reimagine your space</span>
</header>
<h1>One room, before and after</h1>
<p>Someone redesigned this room from a single photo. You can do the same with yours.</p>
<img class="card" src="/s/${escapeHtml(id)}/card.jpg" alt="The room before and after its redesign">
<a class="cta" href="${escapeHtml(tryUrl)}">Redesign your own room</a>
<p class="small">Upload a photo and see it restyled in about a minute.</p>`;
  return pageShell({ title, head, body });
}

/** Shown for a link that was revoked or never existed (the two look the same). */
export function renderShareGonePage({ baseUrl }) {
  const tryUrl = `${baseUrl}/?utm_source=share&utm_medium=link&utm_campaign=gone`;
  const body = `<div class="gone">
<header style="justify-content:center"><a class="brand" href="${escapeHtml(tryUrl)}">DecorAIt</a></header>
<h1>This design is no longer shared</h1>
<p>The person who shared it has taken the link down.</p>
<a class="cta" href="${escapeHtml(tryUrl)}">Redesign your own room</a>
</div>`;
  return pageShell({ title: 'No longer shared — DecorAIt', body });
}

/**
 * @param {object} deps
 * @param {object|null} deps.supabase   service-role client, or null
 * @param {string} deps.bucket          private Storage bucket for the images
 * @param {{ free: number, subscriber: number }} deps.limits  live links per account
 * @param {(userId: string) => Promise<object|null>} deps.getActiveSubscription
 */
export function createShares({ supabase, bucket, limits, getActiveSubscription }) {
  const paths = (id) => ({ card: `shared/${id}/card.jpg`, og: `shared/${id}/og.jpg` });

  async function upload(path, buffer) {
    const options = { contentType: 'image/jpeg', upsert: false };
    let { error } = await supabase.storage.from(bucket).upload(path, buffer, options);
    if (error && /bucket not found/i.test(error.message || '')) {
      // First share on a project that never used saved designs: make the
      // (private) bucket rather than failing until someone creates it by hand.
      const created = await supabase.storage.createBucket(bucket, { public: false });
      if (created.error && !/already exists/i.test(created.error.message || '')) return created.error;
      ({ error } = await supabase.storage.from(bucket).upload(path, buffer, options));
    }
    return error || null;
  }

  /** Is the shared_designs table there? Decides whether the app offers links at all. */
  async function probe() {
    if (!supabase) return false;
    // A plain GET, not a HEAD count: a HEAD response has no body, so the
    // client reports no error even when the table is missing — which made
    // this report "ready" on a database that had never seen the SQL.
    const { error } = await supabase.from(TABLE).select('id').limit(1);
    return !error;
  }

  /**
   * Publish a share.
   * @returns {Promise<{ ok: true, id: string } | { ok: false, status: number, error: string, code?: string }>}
   */
  async function createShare(userId, { card, og }) {
    if (!supabase) return { ok: false, status: 503, error: 'Sharing is not available right now.' };

    const cardBuf = parseJpegDataUrl(card, SHARE_CARD_MAX_BYTES);
    const ogBuf = parseJpegDataUrl(og, SHARE_OG_MAX_BYTES);
    if (!cardBuf || !ogBuf) {
      return { ok: false, status: 400, error: 'The share image was not a valid JPEG, or was too large.' };
    }

    // GET with a count (not HEAD — see probe) so a database error is visible.
    const { count, error: countError } = await supabase
      .from(TABLE)
      .select('id', { count: 'exact' })
      .eq('user_id', userId)
      .limit(1);
    if (countError || typeof count !== 'number') {
      console.error('[share] count failed:', countError);
      return { ok: false, status: 503, error: 'Sharing is not available right now.' };
    }
    const sub = await getActiveSubscription(userId).catch(() => null);
    const limit = sub ? limits.subscriber : limits.free;
    if ((count || 0) >= limit) {
      return {
        ok: false,
        status: 409,
        code: 'SHARE_LIMIT',
        error: `You have ${limit} shared links, which is the most an account can have. Stop sharing one to create another.`,
      };
    }

    const id = newShareId();
    const p = paths(id);
    const cardError = await upload(p.card, cardBuf);
    const ogError = cardError ? null : await upload(p.og, ogBuf);
    if (cardError || ogError) {
      console.error('[share] upload failed:', cardError || ogError);
      await supabase.storage.from(bucket).remove([p.card, p.og]).catch(() => {});
      return { ok: false, status: 502, error: 'Could not store the share image. Please try again.' };
    }

    const { error: insertError } = await supabase.from(TABLE).insert({ id, user_id: userId });
    if (insertError) {
      console.error('[share] insert failed:', insertError);
      // Never leave published images behind without a record that can revoke them.
      await supabase.storage.from(bucket).remove([p.card, p.og]).catch(() => {});
      return { ok: false, status: 503, error: 'Sharing is not available right now.' };
    }
    return { ok: true, id };
  }

  /** The share's record, or null if it does not exist (revoked or never did). */
  async function getShare(id) {
    if (!supabase || !isShareId(id)) return null;
    const { data, error } = await supabase
      .from(TABLE)
      .select('id, user_id, created_at, view_count')
      .eq('id', id)
      .maybeSingle();
    if (error) {
      console.error('[share] lookup failed:', error);
      return null;
    }
    return data || null;
  }

  /** Image bytes for a live share. The record is checked first, so a revoked
   *  share returns null even if a file somehow survived. */
  async function getShareImage(id, kind) {
    if (kind !== 'card' && kind !== 'og') return null;
    if (!(await getShare(id))) return null;
    const { data, error } = await supabase.storage.from(bucket).download(paths(id)[kind]);
    if (error || !data) return null;
    return Buffer.from(await data.arrayBuffer());
  }

  async function listShares(userId) {
    if (!supabase) return [];
    const { data, error } = await supabase
      .from(TABLE)
      .select('id, created_at, view_count')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) {
      console.error('[share] list failed:', error);
      return [];
    }
    return data || [];
  }

  /**
   * Stop sharing. Only the owner's own share is touched.
   * The record goes first: from that moment the page and images answer 404,
   * even if deleting the files then fails.
   * @returns {Promise<boolean>} whether a share was revoked
   */
  async function revokeShare(userId, id) {
    if (!supabase || !isShareId(id)) return false;
    const { data, error } = await supabase
      .from(TABLE)
      .delete()
      .eq('id', id)
      .eq('user_id', userId)
      .select('id');
    if (error) {
      console.error('[share] revoke failed:', error);
      return false;
    }
    if (!data || data.length === 0) return false;
    const p = paths(id);
    const removed = await supabase.storage.from(bucket).remove([p.card, p.og]).catch((e) => ({ error: e }));
    if (removed?.error) console.error('[share] revoked, but files were not removed:', id, removed.error);
    return true;
  }

  /** Count a page view. Best-effort: never awaited by the page. */
  function recordView(id) {
    if (!supabase || !isShareId(id)) return;
    supabase.rpc('record_share_view', { p_id: id })
      .then(({ error }) => { if (error) console.warn('[share] view not counted:', error.message); })
      .catch(() => {});
  }

  return { probe, createShare, getShare, getShareImage, listShares, revokeShare, recordView };
}
