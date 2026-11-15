// Public share links: what gets published, who can take it down, and what a
// stranger with (or without) the link can reach.
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  createShares, newShareId, isShareId, parseJpegDataUrl, escapeHtml,
  renderSharePage, renderShareGonePage, SHARE_CARD_MAX_BYTES, SHARE_OG_MAX_BYTES,
} from '../../lib/shares.js';
import { captureConsole, tick } from './helpers.mjs';

const ALICE = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
const BOB = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';

/** Bytes that pass for a JPEG: FF D8 FF … FF D9. */
function jpegBytes(size = 2000) {
  const buf = Buffer.alloc(size, 0x11);
  buf[0] = 0xff; buf[1] = 0xd8; buf[2] = 0xff;
  buf[size - 2] = 0xff; buf[size - 1] = 0xd9;
  return buf;
}
const jpegDataUrl = (size) => `data:image/jpeg;base64,${jpegBytes(size).toString('base64')}`;

/** In-memory Supabase: one table and one storage bucket, just the calls lib/shares.js makes. */
function fakeBackend({ bucketExists = true, failInsert = false, failUploadOf = null, tableMissing = false } = {}) {
  const rows = [];
  const files = new Map();
  const state = { bucketExists, createdBucket: null };
  const missing = { message: 'relation "shared_designs" does not exist' };

  function query() {
    const q = { op: 'select', filters: [], head: false, row: null, limit: Infinity };
    const matches = (r) => q.filters.every(([k, v]) => r[k] === v);
    const run = () => {
      // As the real client behaves: a HEAD against a missing table comes back
      // with no error at all.
      if (tableMissing && q.head) return { data: null, count: null, error: null };
      if (tableMissing) return { data: null, count: null, error: missing };
      if (q.op === 'insert') {
        if (failInsert) return { data: null, error: { message: 'insert failed' } };
        rows.push({ created_at: new Date(Date.now() + rows.length).toISOString(), view_count: 0, ...q.row });
        return { data: null, error: null };
      }
      if (q.op === 'delete') {
        const gone = rows.filter(matches);
        for (const r of gone) rows.splice(rows.indexOf(r), 1);
        return { data: gone.map((r) => ({ id: r.id })), error: null };
      }
      const found = rows.filter(matches);
      // A HEAD request has no body, so the real client can't report an error
      // from one. lib/shares.js must not rely on it; fail loudly if it does.
      if (q.head) throw new Error('HEAD count used: errors would be invisible');
      const sorted = [...found].sort((a, b) => b.created_at.localeCompare(a.created_at));
      return { data: sorted.slice(0, q.limit), count: found.length, error: null };
    };
    const b = {
      select(_cols, opts) { if (opts?.head) q.head = true; return b; },
      insert(row) { q.op = 'insert'; q.row = row; return b; },
      delete() { q.op = 'delete'; return b; },
      eq(k, v) { q.filters.push([k, v]); return b; },
      order() { return b; },
      limit(n) { q.limit = n; return b; },
      async maybeSingle() { const r = run(); return { data: r.data?.[0] || null, error: r.error }; },
      then(resolve, reject) { return Promise.resolve(run()).then(resolve, reject); },
    };
    return b;
  }

  const supabase = {
    from: () => query(),
    rpc: async (name, args) => {
      if (name === 'record_share_view') {
        const row = rows.find((r) => r.id === args.p_id);
        if (row) row.view_count += 1;
        return { data: null, error: null };
      }
      return { data: null, error: { message: 'no such function' } };
    },
    storage: {
      async createBucket(name, opts) { state.bucketExists = true; state.createdBucket = { name, ...opts }; return { error: null }; },
      from: () => ({
        async upload(path, buffer) {
          if (!state.bucketExists) return { error: { message: 'Bucket not found' } };
          if (failUploadOf && path.endsWith(failUploadOf)) return { error: { message: 'storage unavailable' } };
          files.set(path, buffer);
          return { error: null };
        },
        async download(path) {
          const buf = files.get(path);
          return buf ? { data: new Blob([buf]), error: null } : { data: null, error: { message: 'not found' } };
        },
        async remove(paths) { for (const p of paths) files.delete(p); return { error: null }; },
      }),
    },
  };
  return { supabase, rows, files, state };
}

function make(backendOpts, { subscriber = false, limits = { free: 2, subscriber: 4 } } = {}) {
  const backend = fakeBackend(backendOpts);
  const shares = createShares({
    supabase: backend.supabase,
    bucket: 'generated-designs',
    limits,
    getActiveSubscription: async () => (subscriber ? { is_active: true } : null),
  });
  return { ...backend, shares };
}
const good = () => ({ card: jpegDataUrl(5000), og: jpegDataUrl(3000) });

describe('creating a share', () => {
  test('stores both images under the new id and records the owner', async () => {
    const { shares, rows, files } = make();
    const result = await shares.createShare(ALICE, good());
    assert.equal(result.ok, true);
    assert.ok(isShareId(result.id));
    assert.deepEqual(rows.map((r) => [r.id, r.user_id]), [[result.id, ALICE]]);
    assert.deepEqual([...files.keys()].sort(), [`shared/${result.id}/card.jpg`, `shared/${result.id}/og.jpg`]);
    assert.equal(files.get(`shared/${result.id}/card.jpg`).length, 5000);
  });

  test('refuses anything that is not really a JPEG, and stores nothing', async () => {
    const png = `data:image/png;base64,${Buffer.from('not a jpeg at all, just bytes '.repeat(10)).toString('base64')}`;
    const mislabelled = `data:image/jpeg;base64,${Buffer.from('<script>alert(1)</script>'.repeat(20)).toString('base64')}`;
    const svg = 'data:image/svg+xml;base64,PHN2Zz48L3N2Zz4=';
    for (const bad of [png, mislabelled, svg, 'https://example.com/a.jpg', '', null, 42, {}]) {
      const { shares, rows, files } = make();
      const result = await shares.createShare(ALICE, { card: bad, og: jpegDataUrl(3000) });
      assert.equal(result.status, 400, `rejected: ${String(bad).slice(0, 30)}`);
      assert.equal(rows.length, 0);
      assert.equal(files.size, 0);
    }
  });

  test('refuses images over the size caps', async () => {
    const { shares } = make();
    assert.equal((await shares.createShare(ALICE, { card: jpegDataUrl(SHARE_CARD_MAX_BYTES + 1), og: jpegDataUrl(3000) })).status, 400);
    assert.equal((await shares.createShare(ALICE, { card: jpegDataUrl(5000), og: jpegDataUrl(SHARE_OG_MAX_BYTES + 1) })).status, 400);
  });

  test('caps live links per account, and the cap is per account', async () => {
    const { shares } = make();
    assert.equal((await shares.createShare(ALICE, good())).ok, true);
    assert.equal((await shares.createShare(ALICE, good())).ok, true);
    const third = await shares.createShare(ALICE, good());
    assert.equal(third.status, 409);
    assert.equal(third.code, 'SHARE_LIMIT');
    assert.match(third.error, /2 shared links/);
    assert.equal((await shares.createShare(BOB, good())).ok, true);
  });

  test('subscribers get the higher cap', async () => {
    const { shares } = make({}, { subscriber: true });
    const results = [];
    for (let i = 0; i < 5; i++) results.push(await shares.createShare(ALICE, good()));
    assert.deepEqual(results.map((r) => r.ok), [true, true, true, true, false]);
  });

  test('taking a link down frees a slot', async () => {
    const { shares } = make();
    const first = await shares.createShare(ALICE, good());
    await shares.createShare(ALICE, good());
    assert.equal((await shares.createShare(ALICE, good())).ok, false);
    assert.equal(await shares.revokeShare(ALICE, first.id), true);
    assert.equal((await shares.createShare(ALICE, good())).ok, true);
  });

  test('creates the private bucket on first use if it is missing', async () => {
    const { shares, state, files } = make({ bucketExists: false });
    const result = await shares.createShare(ALICE, good());
    assert.equal(result.ok, true);
    assert.deepEqual(state.createdBucket, { name: 'generated-designs', public: false });
    assert.equal(files.size, 2);
  });

  test('a failed upload leaves no files and no record', async () => {
    const { shares, rows, files } = make({ failUploadOf: 'og.jpg' });
    let result;
    await captureConsole(async () => { result = await shares.createShare(ALICE, good()); });
    assert.equal(result.status, 502);
    assert.equal(rows.length, 0);
    assert.equal(files.size, 0, 'the card that did upload is removed again');
  });

  test('a failed record write never leaves published images behind', async () => {
    const { shares, files } = make({ failInsert: true });
    let result;
    await captureConsole(async () => { result = await shares.createShare(ALICE, good()); });
    assert.equal(result.ok, false);
    assert.equal(files.size, 0);
  });

  test('without the table (SQL not run): refuses, and probe reports it', async () => {
    const { shares, files } = make({ tableMissing: true });
    assert.equal(await shares.probe(), false);
    let result;
    await captureConsole(async () => { result = await shares.createShare(ALICE, good()); });
    assert.equal(result.status, 503);
    assert.equal(files.size, 0);
    assert.equal(await make().shares.probe(), true);
  });

  test('with no database at all: refuses rather than throwing', async () => {
    const shares = createShares({ supabase: null, bucket: 'b', limits: { free: 1, subscriber: 1 }, getActiveSubscription: async () => null });
    assert.equal((await shares.createShare(ALICE, good())).status, 503);
    assert.equal(await shares.getShare(newShareId()), null);
    assert.deepEqual(await shares.listShares(ALICE), []);
    assert.equal(await shares.revokeShare(ALICE, newShareId()), false);
    assert.equal(await shares.probe(), false);
  });
});

describe('viewing a share', () => {
  test('anyone with the id gets the record and both images', async () => {
    const { shares } = make();
    const { id } = await shares.createShare(ALICE, good());
    assert.equal((await shares.getShare(id)).id, id);
    assert.equal((await shares.getShareImage(id, 'card')).length, 5000);
    assert.equal((await shares.getShareImage(id, 'og')).length, 3000);
  });

  test('an unknown or malformed id reaches nothing', async () => {
    const { shares } = make();
    await shares.createShare(ALICE, good());
    for (const id of [newShareId(), '', 'short', '../../etc/passwd', 'a'.repeat(12) + '/x', null, undefined, 12]) {
      assert.equal(await shares.getShare(id), null);
      assert.equal(await shares.getShareImage(id, 'card'), null);
    }
  });

  test('only the two known image kinds can be requested', async () => {
    const { shares } = make();
    const { id } = await shares.createShare(ALICE, good());
    for (const kind of ['../card', 'original', '', undefined]) {
      assert.equal(await shares.getShareImage(id, kind), null);
    }
  });

  test('views are counted', async () => {
    const { shares, rows } = make();
    const { id } = await shares.createShare(ALICE, good());
    shares.recordView(id);
    shares.recordView(id);
    shares.recordView('not-an-id');
    await tick();
    assert.equal(rows[0].view_count, 2);
  });
});

describe('taking a share down', () => {
  test('the owner can: the record and both files are gone, and so is all access', async () => {
    const { shares, rows, files } = make();
    const { id } = await shares.createShare(ALICE, good());
    assert.equal(await shares.revokeShare(ALICE, id), true);
    assert.equal(rows.length, 0);
    assert.equal(files.size, 0);
    assert.equal(await shares.getShare(id), null);
    assert.equal(await shares.getShareImage(id, 'card'), null);
    assert.equal(await shares.getShareImage(id, 'og'), null);
  });

  test("someone else cannot take down a link that isn't theirs", async () => {
    const { shares, rows, files } = make();
    const { id } = await shares.createShare(ALICE, good());
    assert.equal(await shares.revokeShare(BOB, id), false);
    assert.equal(rows.length, 1);
    assert.equal(files.size, 2);
    assert.ok(await shares.getShare(id));
  });

  test('an image is unreachable once the record is gone, even if its file survived', async () => {
    const { shares, rows } = make();
    const { id } = await shares.createShare(ALICE, good());
    rows.length = 0; // record removed, files deliberately left behind
    assert.equal(await shares.getShareImage(id, 'card'), null);
  });

  test('taking down twice is harmless', async () => {
    const { shares } = make();
    const { id } = await shares.createShare(ALICE, good());
    assert.equal(await shares.revokeShare(ALICE, id), true);
    assert.equal(await shares.revokeShare(ALICE, id), false);
  });
});

test('listing shows only your own links, newest first', async () => {
  const { shares } = make();
  const a1 = await shares.createShare(ALICE, good());
  await shares.createShare(BOB, good());
  const a2 = await shares.createShare(ALICE, good());
  const mine = await shares.listShares(ALICE);
  assert.deepEqual(mine.map((s) => s.id), [a2.id, a1.id]);
  assert.ok(mine.every((s) => !('user_id' in s) || s.user_id === ALICE));
});

describe('ids', () => {
  test('are 12 characters from an unambiguous alphabet, and do not repeat', () => {
    const ids = new Set(Array.from({ length: 2000 }, newShareId));
    assert.equal(ids.size, 2000);
    for (const id of ids) {
      assert.match(id, /^[A-HJ-NP-Za-km-z2-9]{12}$/);
      assert.ok(isShareId(id));
    }
  });

  test('isShareId rejects everything else', () => {
    for (const bad of ['', 'abc', 'A'.repeat(13), 'AAAAAAAAAAA0', 'AAAAAAAAAAA/', '<script>abcd', null, undefined, 123456789012, {}]) {
      assert.equal(isShareId(bad), false, String(bad));
    }
  });
});

describe('parseJpegDataUrl', () => {
  test('accepts a real JPEG within the cap', () => {
    assert.equal(parseJpegDataUrl(jpegDataUrl(1000), 5000).length, 1000);
  });
  test('rejects a JPEG header without the JPEG end marker', () => {
    const buf = jpegBytes(1000);
    buf[999] = 0x00;
    assert.equal(parseJpegDataUrl(`data:image/jpeg;base64,${buf.toString('base64')}`, 5000), null);
  });
  test('rejects non-base64 payloads and other schemes', () => {
    assert.equal(parseJpegDataUrl('data:image/jpeg;base64,@@@@', 5000), null);
    assert.equal(parseJpegDataUrl('data:image/jpeg,rawtext', 5000), null);
    assert.equal(parseJpegDataUrl('javascript:alert(1)', 5000), null);
  });
});

describe('the public page', () => {
  const id = 'AbCdEfGhJkLm';
  const html = renderSharePage({ id, baseUrl: 'https://decorait.example' });

  test('carries link-preview tags pointing at absolute URLs', () => {
    assert.match(html, /<meta property="og:image" content="https:\/\/decorait\.example\/s\/AbCdEfGhJkLm\/og\.jpg">/);
    assert.match(html, /<meta property="og:url" content="https:\/\/decorait\.example\/s\/AbCdEfGhJkLm">/);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image">/);
    assert.match(html, /og:image:width" content="1200"/);
  });

  test('shows the card and a tagged link back to the app', () => {
    assert.match(html, /<img class="card" src="\/s\/AbCdEfGhJkLm\/card\.jpg"/);
    assert.match(html, /href="https:\/\/decorait\.example\/\?utm_source=share&amp;utm_medium=link&amp;utm_campaign=design"/);
  });

  test('is not indexed and runs no script', () => {
    assert.match(html, /<meta name="robots" content="noindex">/);
    assert.ok(!/<script/i.test(html));
  });

  test('escapes whatever it is given', () => {
    const hostile = renderSharePage({ id: '"><script>x</script>', baseUrl: 'https://a.example/"><img src=x onerror=1>' });
    assert.ok(!hostile.includes('<script>x</script>'));
    assert.ok(!hostile.includes('<img src=x'));
    assert.equal(escapeHtml(`<a href="x" onclick='y'>&`), '&lt;a href=&quot;x&quot; onclick=&#39;y&#39;&gt;&amp;');
  });

  test('a link that is gone says so, and still offers the app', () => {
    const gone = renderShareGonePage({ baseUrl: 'https://decorait.example' });
    assert.match(gone, /no longer shared/i);
    assert.match(gone, /utm_campaign=gone/);
    assert.ok(!gone.includes('og:image'));
  });
});
