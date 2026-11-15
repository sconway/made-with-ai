// Smoke test of the core funnel: photo → generate → result → refresh.
//
// Hermetic: every API and provider call is answered here, so the test costs
// nothing to run and never touches Supabase, Stripe, Replicate or OpenAI. The
// dev proxy points at a dead port (see playwright.config.js), so a call this
// file forgot to mock fails instead of reaching a real server.
import { test, expect } from '@playwright/test';
import { makePng, roomPhotoPng, resultPng } from './png.mjs';

const RESULT_URL = 'https://replicate.delivery/test/result.png';
const PREDICTION_URL = 'https://api.replicate.com/v1/predictions/pred_test_1';

/** Install the fake backend. Returns what the app sent, for assertions. */
async function mockBackend(page, { anonRemaining = 1 } = {}) {
  const seen = { predictions: [], polls: 0, unmocked: [], clientErrors: [] };
  const isApi = (url) => ['/api/', '/replicate/', '/openai/'].some((p) => url.pathname.startsWith(p)) || url.pathname === '/health';

  await page.route(isApi, async (route) => {
    const url = new URL(route.request().url());
    const json = (body, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });

    switch (url.pathname) {
      case '/health':
        return json({ ok: true });
      case '/api/config':
        return json({
          // A syntactically valid project that is never contacted: with no
          // stored session the Supabase client makes no network request.
          supabaseUrl: 'https://smoke-test.supabase.invalid',
          supabaseAnonKey: 'smoke-test-anon-key',
          stripePublishableKey: '',
          tokenPacks: [],
          gaMeasurementId: '',
          anonGenerationsEnabled: true,
          oauthProviders: ['google'],
        });
      case '/api/anon-status':
        return json({ enabled: true, remaining: anonRemaining });
      case '/api/client-error':
        seen.clientErrors.push(route.request().postDataJSON());
        return route.fulfill({ status: 204 });
      case '/replicate/predictions':
        seen.predictions.push(route.request().postDataJSON());
        return json({ id: 'pred_test_1', status: 'starting', urls: { get: PREDICTION_URL } });
      case '/replicate/poll':
        seen.polls += 1;
        return json({ id: 'pred_test_1', status: 'succeeded', output: [RESULT_URL], savedDesignId: null });
      default:
        seen.unmocked.push(`${route.request().method()} ${url.pathname}`);
        return json({ error: 'not mocked' }, 404);
    }
  });

  // The "generated" image, served with CORS so the app can copy it into its
  // local session store.
  await page.route(RESULT_URL, (route) => route.fulfill({
    status: 200,
    contentType: 'image/png',
    headers: { 'access-control-allow-origin': '*' },
    body: resultPng(),
  }));
  // Nothing may reach the placeholder Supabase project or analytics.
  await page.route(/supabase\.invalid|googletagmanager\.com|google-analytics\.com/, (route) => route.abort());

  return seen;
}

test('a first-time visitor can redesign a room, and the result survives a refresh', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (err) => pageErrors.push(String(err)));
  const requested = [];
  page.on('request', (req) => requested.push(req.url()));

  const seen = await mockBackend(page);
  await page.goto('/');

  // ── The redesign flow must not pay for the editors ──────────────────────
  await expect(page.locator('#room-upload')).toBeAttached();
  await page.waitForLoadState('networkidle');
  expect(requested.filter((u) => /floorPlanEditor|woodworking\/editor|three/.test(u)), 'editors are loaded on demand').toEqual([]);

  // ── Add a photo straight from a "phone" (12 MP) ─────────────────────────
  const photo = roomPhotoPng();
  await page.locator('#room-upload').setInputFiles({ name: 'IMG_0001.png', mimeType: 'image/png', buffer: photo });
  await expect(page.locator('#wizard-container')).toBeVisible();
  await expect(page).toHaveURL(/\/design$/);

  // ── Generate, with no account ───────────────────────────────────────────
  // No options touched: the defaults alone must be enough to generate.
  const generate = page.locator('#generate-btn');
  await expect(generate).toBeEnabled();
  await generate.click();

  const generated = page.locator('#design-carousel .generated-image').first();
  await expect(generated).toHaveAttribute('src', RESULT_URL, { timeout: 30_000 });
  await expect(page.locator('#results-section')).toBeVisible();
  await expect(page).toHaveURL(/\/result/);
  await expect(page.locator('#design-history-strip .design-history-thumb')).toHaveCount(2); // Original + v1

  // ── What was sent to the model was the downscaled photo ─────────────────
  expect(seen.predictions.length, 'exactly one prediction for one Generate').toBe(1);
  // A furnished room defaults to "Add to it" with nothing picked. That is an
  // instruction, so it must go to the model that can read one.
  expect(seen.predictions[0].version).toBe('google/nano-banana');
  expect(seen.predictions[0].input.prompt).toMatch(/keep the existing furniture and add a few complementary pieces/);
  const sentImage = JSON.stringify(seen.predictions[0]).match(/data:image\/[a-z]+;base64,[A-Za-z0-9+/=]+/)?.[0];
  expect(sentImage, 'the request carries the photo as a data URL').toBeTruthy();
  const size = await page.evaluate((src) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.src = src;
  }), sentImage);
  expect(Math.max(size.w, size.h), 'long edge capped at 2048').toBe(2048);
  expect(size.w / size.h).toBeCloseTo(4032 / 3024, 2);
  expect(sentImage.length, 'well under the 20 MB body limit').toBeLessThan(3_000_000);

  // ── A refresh keeps the photo and the result ────────────────────────────
  // Give the background save a moment to fetch and store the generated image.
  await expect.poll(() => page.evaluate(() => new Promise((resolve) => {
    const open = indexedDB.open('decorait');
    open.onsuccess = () => {
      try {
        const get = open.result.transaction('session').objectStore('session').get('redesign');
        get.onsuccess = () => resolve(get.result?.versions?.[0]?.imageUrl?.slice(0, 15) ?? null);
        get.onerror = () => resolve(null);
      } catch { resolve(null); }
    };
    open.onerror = () => resolve(null);
  })), { message: 'result stored on the device as image data, not an expiring link' }).toBe('data:image/png;');

  await page.reload();
  await expect(page.locator('#results-section')).toBeVisible();
  await expect(page).toHaveURL(/\/result/);
  await expect(page.locator('#design-carousel .generated-image').first()).toHaveAttribute('src', /^data:image\/png;base64,/);
  await expect(page.locator('#design-history-strip .design-history-thumb')).toHaveCount(2);
  expect(seen.predictions.length, 'restoring a session never starts a generation').toBe(1);

  // ── Nothing went wrong quietly ──────────────────────────────────────────
  expect(seen.unmocked, 'every API call the flow makes is accounted for').toEqual([]);
  expect(seen.clientErrors, 'no browser errors were reported').toEqual([]);
  expect(pageErrors).toEqual([]);
});

test('an empty room generates from the defaults too, with no items picked', async ({ page }) => {
  const seen = await mockBackend(page);
  await page.goto('/');
  // A flat, featureless image reads as an empty room.
  await page.locator('#room-upload').setInputFiles({ name: 'empty.png', mimeType: 'image/png', buffer: makePng(1600, 1200, () => [222, 216, 205]) });
  await expect(page.locator('#wizard-container')).toBeVisible();
  await expect(page.locator('#configure-items [data-section-value]')).toHaveText("Designer's choice");

  await page.locator('#generate-btn').click();

  await expect(page.locator('#design-carousel .generated-image').first()).toHaveAttribute('src', RESULT_URL, { timeout: 30_000 });
  await expect(page.locator('#items-selection-error')).toBeHidden();
  expect(seen.predictions.length).toBe(1);
  expect(seen.unmocked).toEqual([]);
});

/** Generate one design with the defaults and wait for it. */
async function generateOnce(page) {
  await page.goto('/');
  await page.locator('#room-upload').setInputFiles({ name: 'room.png', mimeType: 'image/png', buffer: roomPhotoPng(2000, 1500) });
  await page.locator('#generate-btn').click();
  await expect(page.locator('#design-carousel .generated-image').first()).toHaveAttribute('src', RESULT_URL, { timeout: 30_000 });
}

test('Share hands the phone share sheet one before/after image', async ({ page }) => {
  // Stand in for a phone's share sheet and record what it was given.
  await page.addInitScript(() => {
    window.__shared = [];
    navigator.canShare = (data) => Array.isArray(data?.files) && data.files.length > 0;
    navigator.share = async (data) => {
      const file = data.files[0];
      const bitmap = await createImageBitmap(file);
      window.__shared.push({ name: file.name, type: file.type, bytes: file.size, width: bitmap.width, height: bitmap.height, text: data.text, hasUrlField: 'url' in data });
    };
  });
  await mockBackend(page);
  await generateOnce(page);

  await page.locator('#share-design-btn').click();

  await expect.poll(() => page.evaluate(() => window.__shared.length)).toBe(1);
  const shared = await page.evaluate(() => window.__shared[0]);
  expect(shared.type).toBe('image/jpeg');
  expect(shared.name).toBe('decorait-before-after.jpg');
  // A landscape room is stacked: before above after, 1080 wide.
  expect(shared.width).toBe(1080);
  expect(shared.height, 'two 4:3 panels plus the footer').toBeGreaterThan(1080 * 1.4);
  expect(shared.bytes).toBeGreaterThan(20_000);
  expect(shared.text).toContain('DecorAIt');
  expect(shared.text, 'the link back to the app travels with the image').toContain('http://localhost:');
  expect(shared.hasUrlField, 'no separate url field — some share targets drop the image when there is one').toBe(false);
  await expect(page.locator('#share-design-btn')).toBeEnabled();
});

test('Share downloads the image where there is no share sheet, and closing the sheet is not an error', async ({ page }) => {
  await page.addInitScript(() => { navigator.canShare = undefined; navigator.share = undefined; });
  const seen = await mockBackend(page);
  await generateOnce(page);

  const download = page.waitForEvent('download');
  await page.locator('#share-design-btn').click();
  expect((await download).suggestedFilename()).toBe('decorait-before-after.jpg');
  await expect(page.locator('.toast')).toContainText('Saved a before-and-after image');

  // Now a share sheet the user dismisses: no toast, no error report, button usable again.
  await page.evaluate(() => {
    document.querySelectorAll('.toast').forEach((t) => t.remove());
    navigator.canShare = () => true;
    navigator.share = () => Promise.reject(new DOMException('Share canceled', 'AbortError'));
  });
  await page.locator('#share-design-btn').click();
  await expect(page.locator('#share-design-btn')).toBeEnabled();
  await expect(page.locator('.toast')).toHaveCount(0);
  expect(seen.clientErrors).toEqual([]);
});

test('once the free design is used, the next step is a sign-up prompt with one-tap sign-in', async ({ page }) => {
  const seen = await mockBackend(page, { anonRemaining: 0 });
  await page.goto('/');
  await page.locator('#room-upload').setInputFiles({ name: 'room.png', mimeType: 'image/png', buffer: roomPhotoPng(1600, 1200) });
  await expect(page.locator('#wizard-container')).toBeVisible();

  await page.locator('#generate-btn').click();

  await expect(page.locator('#auth-modal')).toHaveClass(/show/);
  await expect(page.locator('#signup-form')).toBeVisible();
  await expect(page.locator('[data-oauth-provider="google"]')).toBeVisible();
  await expect(page.locator('[data-oauth-provider="apple"]'), 'only configured providers are offered').toBeHidden();
  expect(seen.predictions, 'no generation is started for a visitor with none left').toEqual([]);

  // The photo they chose is still there behind the prompt.
  await page.locator('#close-modal-btn').click();
  await expect(page.locator('#wizard-container')).toBeVisible();
});

test('an uncaught browser error is reported to the server', async ({ page }) => {
  const seen = await mockBackend(page);
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await page.evaluate(() => {
    setTimeout(() => { throw new Error('smoke-test failure for jane@example.com'); }, 0);
  });

  await expect.poll(() => seen.clientErrors.length).toBe(1);
  const report = seen.clientErrors[0];
  expect(report.kind).toBe('error');
  expect(report.path).toBe('/');
  expect(report.message).toContain('smoke-test failure');
  expect(report.message, 'personal details are stripped before sending').not.toContain('jane@example.com');
});
