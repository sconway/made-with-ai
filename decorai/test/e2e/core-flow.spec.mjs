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
async function mockBackend(page, { anonRemaining = 1, shareLinks = true, designs = [], shop = undefined } = {}) {
  const seen = { predictions: [], polls: 0, unmocked: [], clientErrors: [], shareUploads: [], shares: [], revoked: [], checkouts: [], credits: 0, designs: [...designs], designSaves: [] };
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
          tokenPacks: [{ id: '10', tokens: 10, amount: 499 }, { id: '50', tokens: 50, amount: 1999 }],
          subscription: { amount: 1999, monthlyLimit: 50 },
          gaMeasurementId: '',
          anonGenerationsEnabled: true,
          oauthProviders: ['google'],
          shareLinksEnabled: shareLinks,
          ...(shop ? { shop } : {}),
        });
      // What a signed-in session asks for on load.
      case '/api/credits':
        return json({ credits: seen.credits });
      // Checkout: instead of Stripe's page, go straight to where Stripe's
      // success redirect would land, built from the return path sent.
      case '/api/checkout': {
        const body = route.request().postDataJSON();
        seen.checkouts.push(body);
        const back = body.return_to || '/';
        return json({ url: `${url.origin}${back}?payment=success&session_id=cs_test_1` });
      }
      case '/api/verify-checkout':
        seen.credits = 10;
        return json({ credits: 10, tokensAdded: 10 });
      case '/api/subscription':
        return json({ active: false });
      case '/api/layout':
        return json({ state: null });
      // The library: a free account keeps 10 designs.
      case '/api/designs': {
        if (!route.request().headers().authorization) return json({ error: 'Unauthorized' }, 401);
        if (route.request().method() === 'POST') {
          const body = route.request().postDataJSON();
          seen.designSaves.push(body);
          const design = {
            id: `d${seen.designs.length + 1}`,
            imageUrl: RESULT_URL,
            prompt: body.prompt,
            model: body.model,
            sourceType: body.sourceType,
            metadata: body.metadata || {},
            createdAt: new Date().toISOString(),
          };
          seen.designs.unshift(design);
          return json(design, 201);
        }
        return json({ designs: seen.designs, total: seen.designs.length, limit: 10, subscriber: false });
      }
      case '/api/layouts':
        return json({ layouts: [] });
      case '/api/woodworking-projects':
        return json({ projects: [] });
      case '/api/shares': {
        if (!route.request().headers().authorization) return json({ error: 'Unauthorized' }, 401);
        if (route.request().method() === 'POST') {
          seen.shareUploads.push(route.request().postDataJSON());
          const share = { id: 'AbCdEfGhJkLm', url: `${url.origin}/s/AbCdEfGhJkLm`, createdAt: new Date().toISOString(), views: 3 };
          seen.shares.push(share);
          return json({ id: share.id, url: share.url }, 201);
        }
        return json({ limit: 10, shares: seen.shares });
      }
      case '/api/shares/AbCdEfGhJkLm':
        seen.revoked.push(route.request().method());
        seen.shares.length = 0;
        return route.fulfill({ status: 204 });
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
  const backendOptions = { shareLinks: false };
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
  await mockBackend(page, backendOptions);
  await generateOnce(page);

  await page.locator('#share-design-btn').click();
  // The dialog shows the picture before anything is sent.
  await expect(page.locator('#share-modal')).toHaveClass(/show/);
  await expect(page.locator('#share-preview')).toHaveAttribute('src', /^blob:/);
  await expect(page.locator('#share-create-link-btn'), 'links are off for this test').toBeHidden();
  await page.locator('#share-image-btn').click();

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
  await expect(page.locator('#share-modal'), 'the dialog closes once shared').not.toHaveClass(/show/);
});

test('Share downloads the image where there is no share sheet, and closing the sheet is not an error', async ({ page }) => {
  await page.addInitScript(() => { navigator.canShare = undefined; navigator.share = undefined; });
  const seen = await mockBackend(page);
  await generateOnce(page);

  const download = page.waitForEvent('download');
  await page.locator('#share-design-btn').click();
  await page.locator('#share-image-btn').click();
  expect((await download).suggestedFilename()).toBe('decorait-before-after.jpg');
  await expect(page.locator('.toast')).toContainText('Saved a before-and-after image');

  // Now a share sheet the user dismisses: no toast, no error report, button usable again.
  await page.evaluate(() => {
    document.querySelectorAll('.toast').forEach((t) => t.remove());
    navigator.canShare = () => true;
    navigator.share = () => Promise.reject(new DOMException('Share canceled', 'AbortError'));
  });
  await page.locator('#share-design-btn').click();
  await page.locator('#share-image-btn').click();
  await expect(page.locator('#share-image-btn')).toBeEnabled();
  await expect(page.locator('#share-modal'), 'still open: they may want the link instead').toHaveClass(/show/);
  await expect(page.locator('.toast')).toHaveCount(0);
  await expect(page.locator('#share-error')).toBeHidden();
  expect(seen.clientErrors).toEqual([]);
});

/** Start the page already signed in, the way a returning user arrives. */
async function signIn(page) {
  await page.addInitScript(() => {
    // The key the Supabase client reads for the project in /api/config.
    localStorage.setItem('sb-smoke-test-auth-token', JSON.stringify({
      access_token: 'smoke-test-access-token',
      refresh_token: 'smoke-test-refresh-token',
      token_type: 'bearer',
      expires_in: 3600,
      expires_at: Math.floor(Date.now() / 1000) + 3600,
      user: {
        id: '11111111-1111-1111-1111-111111111111',
        aud: 'authenticated',
        role: 'authenticated',
        email: 'smoke@example.com',
        email_confirmed_at: '2026-01-01T00:00:00Z',
        app_metadata: {},
        user_metadata: {},
        created_at: '2026-01-01T00:00:00Z',
      },
    }));
  });
}

test('a signed-in user can publish a link, copy it, and take it down', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await signIn(page);
  const seen = await mockBackend(page);
  await generateOnce(page);

  await page.locator('#share-design-btn').click();
  await expect(page.locator('#share-preview')).toHaveAttribute('src', /^blob:/);
  // Says plainly what creating a link means, before it is created.
  await expect(page.locator('#share-link-create .share-note')).toContainText('Anyone with the link can see');
  await page.locator('#share-create-link-btn').click();

  const link = page.locator('#share-link-url');
  await expect(link).toHaveValue(/\/s\/AbCdEfGhJkLm$/);
  await expect(page.locator('#share-create-link-btn')).toBeHidden();

  // What was uploaded: the card, and a 1200x630 preview image. Both JPEG.
  expect(seen.shareUploads.length).toBe(1);
  const upload = seen.shareUploads[0];
  expect(Object.keys(upload).sort(), 'nothing but the two composed images is sent').toEqual(['card', 'og']);
  const dims = await page.evaluate(async ({ card, og }) => {
    const size = (src) => new Promise((resolve) => { const i = new Image(); i.onload = () => resolve([i.naturalWidth, i.naturalHeight]); i.src = src; });
    return { card: await size(card), og: await size(og) };
  }, upload);
  expect(upload.card).toMatch(/^data:image\/jpeg;base64,/);
  expect(upload.og).toMatch(/^data:image\/jpeg;base64,/);
  expect(dims.og).toEqual([1200, 630]);
  expect(dims.card[0]).toBe(1080);

  await page.locator('#share-copy-link-btn').click();
  await expect(page.locator('#share-copy-link-btn')).toContainText('Copied');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toMatch(/\/s\/AbCdEfGhJkLm$/);

  // The link also appears in the account's list, with its views.
  await page.locator('#share-my-links summary').click();
  await expect(page.locator('#share-my-links-summary')).toHaveText('Your shared links (1 of 10)');
  await expect(page.locator('.share-my-link-meta')).toContainText('3 views');

  await page.locator('#share-stop-current-btn').click();
  await expect(page.locator('#share-create-link-btn'), 'back to "Create a link"').toBeVisible();
  await expect(page.locator('.toast')).toContainText('Link taken down');
  await expect(page.locator('#share-my-links')).toBeHidden();
  expect(seen.revoked).toEqual(['DELETE']);
  expect(seen.unmocked).toEqual([]);
  expect(seen.clientErrors).toEqual([]);
});

test('creating a link without an account asks for one, and publishes nothing', async ({ page }) => {
  const seen = await mockBackend(page);
  await generateOnce(page);

  await page.locator('#share-design-btn').click();
  await page.locator('#share-create-link-btn').click();

  await expect(page.locator('#auth-modal')).toHaveClass(/show/);
  await expect(page.locator('#signup-form')).toBeVisible();
  await expect(page.locator('#share-modal')).not.toHaveClass(/show/);
  expect(seen.shareUploads).toEqual([]);
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

test('ideas fill the refine box without running anything, and the button says what it will do', async ({ page }) => {
  const seen = await mockBackend(page);
  await generateOnce(page);
  const box = page.locator('#refinement-input');
  const button = page.locator('#regenerate-btn');
  await expect(button).toHaveText(/New version/);

  await page.locator('.refine-idea[data-key="warmer"]').click();
  await page.locator('.refine-idea[data-key="plants"]').click();
  await expect(box).toHaveValue('Use warmer, cosier colours. Add a few more plants.');
  await expect(page.locator('.refine-idea[data-key="warmer"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(button).toHaveText(/Apply change/);

  // A second tap takes the idea back out.
  await page.locator('.refine-idea[data-key="warmer"]').click();
  await expect(box).toHaveValue('Add a few more plants.');
  await expect(page.locator('.refine-idea[data-key="warmer"]')).toHaveAttribute('aria-pressed', 'false');

  expect(seen.predictions.length, 'ideas never start a generation').toBe(1);

  // Picking an earlier version says the next change starts from it.
  await expect(page.locator('#refinement-base')).toBeHidden();
  await page.locator('#design-history-strip .design-history-thumb').first().click();
  await expect(page.locator('#refinement-base')).toBeVisible();
  await expect(page.locator('#refinement-base')).toContainText('original photo');
  await page.locator('#refinement-base-latest').click();
  await expect(page.locator('#refinement-base')).toBeHidden();
});

test('a premium gate names the blocked action, and checkout brings them back to it', async ({ page }) => {
  await signIn(page);
  const seen = await mockBackend(page);
  await generateOnce(page);
  await expect(page).toHaveURL(/\/result/);

  // They type a change, then try to switch on premium with no tokens.
  await page.locator('.refine-idea[data-key="art"]').click();
  await page.locator('#default-model-toggle-results').locator('xpath=..').click({ force: true });
  const sheet = page.locator('#buy-tokens-modal');
  await expect(sheet).toBeVisible();
  await expect(page.locator('#upgrade-title')).toHaveText('Generate with the premium model');
  await expect(page.locator('#upgrade-blocked')).toContainText("You don't have any premium designs left");
  await expect(page.locator('#upgrade-cost')).toContainText('Tokens start at 39¢ each');
  await expect(page.locator('#upgrade-next')).toContainText('come straight back to this design');
  await expect(sheet.locator('[data-option="tokens"]')).toHaveClass(/is-recommended/);

  // Buy a pack. The fake checkout returns at once, as Stripe's success page would.
  await page.locator('.token-pack[data-pack="10"]').click();
  await expect(page).toHaveURL(/\/result$/, { timeout: 15_000 }); // query stripped after handling
  expect(seen.checkouts).toEqual([{ pack: '10', return_to: '/result' }]);

  // Back on the same design, premium on, their change put back, one tap to run.
  await expect(page.locator('#design-carousel .generated-image').first()).toHaveAttribute('src', /^data:image\//, { timeout: 15_000 });
  await expect(page.locator('#refinement-input')).toHaveValue('Add art to the walls.');
  await expect(page.locator('#default-model-toggle-results')).toBeChecked();
  const toast = page.locator('.toast').filter({ hasText: '10 premium designs added. Premium is on.' });
  await expect(toast).toBeVisible({ timeout: 15_000 });
  await expect(toast.locator('.toast-action')).toHaveText('Apply change');
  expect(seen.predictions.length, 'nothing paid runs until they tap').toBe(1);
});

test('/upgrade shows the prices to a signed-out visitor, and buying asks for an account first', async ({ page }) => {
  const seen = await mockBackend(page);
  await page.goto('/upgrade');
  await expect(page.locator('#buy-tokens-modal')).toBeVisible();
  await expect(page.locator('#upgrade-title')).toHaveText('Plans and pricing');
  await expect(page.locator('#upgrade-plan-price')).toHaveText('$19.99');
  await expect(page.locator('.upgrade-recommended:visible')).toHaveCount(0);

  await page.locator('#tokens-modal-subscribe-btn').click();
  await expect(page.locator('#signup-form')).toBeVisible();
  expect(seen.checkouts).toEqual([]);
});

/** A saved design as /api/designs returns it. */
function savedDesign(i, style) {
  return {
    id: `seed${i}`,
    imageUrl: RESULT_URL,
    prompt: `Redesign this room in a ${style} style`,
    model: 'flux',
    sourceType: 'room-design',
    metadata: { style },
    createdAt: new Date(Date.UTC(2026, 9, 1 + i)).toISOString(),
  };
}

test('the library asks a signed-out visitor to sign in, on every tab, and Escape closes it', async ({ page }) => {
  const seen = await mockBackend(page);
  await page.goto('/library/designs');
  const library = page.locator('#library-panel');
  await expect(library).toHaveClass(/show/);
  await expect(page.locator('#library-empty-title')).toHaveText('Sign in to see your library');
  await expect(page.locator('#library-tab-designs')).toHaveAttribute('aria-selected', 'true');

  await page.locator('#library-tab-plans').click();
  await expect(page).toHaveURL(/\/library\/plans$/);
  await expect(page.locator('#library-tab-plans')).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#library-empty-title')).toHaveText('Sign in to see your library');
  // Arrow keys move between tabs.
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#library-tab-builds')).toBeFocused();
  await expect(page).toHaveURL(/\/library\/builds$/);

  await page.keyboard.press('Escape');
  await expect(library).not.toHaveClass(/show/);
  await expect(page).toHaveURL(/\/$/);

  await page.goto('/library/designs');
  await page.locator('#library-empty [data-library-action="signin"]').click();
  await expect(page.locator('#auth-modal')).toHaveClass(/show/);
  expect(seen.unmocked).toEqual([]);
});

test("a free account's designs are kept in the library, with the limit and a way to keep more", async ({ page }) => {
  await signIn(page);
  const seen = await mockBackend(page);
  await generateOnce(page);
  await expect.poll(() => seen.designSaves.length, { message: 'the result is saved for a free account' }).toBe(1);

  await page.locator('#user-menu-btn').click();
  await page.locator('#my-designs-btn').click();
  await expect(page).toHaveURL(/\/library\/designs$/);
  const cards = page.locator('#library-grid .library-card:not(.library-card--skeleton)');
  await expect(cards).toHaveCount(1);
  await expect(page.locator('#library-status-text')).toHaveText('1 of 10 kept. Free accounts keep the latest 10 designs.');
  await expect(page.locator('#library-tab-designs .library-tab-count')).toHaveText(' 1');

  // A design opens its details in place; Back returns to the grid.
  await cards.first().click();
  await expect(page.locator('#my-designs-preview')).toBeVisible();
  await expect(page.locator('#library-grid')).toBeHidden();
  await page.locator('#my-designs-preview-close').click();
  await expect(cards.first()).toBeFocused();

  // Other tabs say what fills them.
  await page.locator('#library-tab-plans').click();
  await expect(page.locator('#library-empty-title')).toHaveText('No floor plans yet');
  await page.locator('#library-tab-designs').click();

  await page.locator('#library-status-upsell').click();
  await expect(page.locator('#buy-tokens-modal')).toBeVisible();
  await expect(page.locator('#upgrade-title')).toHaveText('Keep more of your designs');
  await expect(page.locator('#upgrade-blocked')).toContainText('Free accounts keep their latest 10 designs');
  await page.keyboard.press('Escape');
  await expect(page.locator('#buy-tokens-modal')).toBeHidden();
  await expect(page.locator('#library-panel'), 'Escape closed only the sheet on top').toHaveClass(/show/);

  // Opening a design takes them to it, and the library steps aside.
  await cards.first().click();
  await page.locator('#my-designs-open-btn').click();
  await expect(page.locator('#library-panel')).not.toHaveClass(/show/);
  await expect(page).toHaveURL(/\/result\/d1$/);
  await expect(page.locator('#design-carousel .generated-image').first()).toBeVisible();
  expect(seen.unmocked).toEqual([]);
});

test('search appears past twelve designs, filters as you type, and says when nothing matches', async ({ page }) => {
  await signIn(page);
  const styles = ['Japandi', 'Scandinavian', 'Industrial', 'Coastal', 'Bohemian', 'Mid-century', 'Minimal'];
  const designs = Array.from({ length: 14 }, (_, i) => savedDesign(i, styles[i % styles.length]));
  const seen = await mockBackend(page, { designs });
  await page.goto('/library/designs');
  const cards = page.locator('#library-grid .library-card:not(.library-card--skeleton)');
  await expect(cards).toHaveCount(14);
  await expect(page.locator('#library-status-text')).toContainText('14 saved from your plan');
  await expect(page.locator('#library-status-text')).toContainText('Nothing here is deleted');

  const search = page.locator('#library-search');
  await expect(search).toBeVisible();
  await search.fill('japandi');
  await expect(cards).toHaveCount(2);
  await search.fill('velvet');
  await expect(cards).toHaveCount(0);
  await expect(page.locator('#library-empty-title')).toHaveText('Nothing matches \u201cvelvet\u201d');
  await page.locator('#library-empty [data-library-action="clear-search"]').click();
  await expect(cards).toHaveCount(14);
  await expect(search).toBeFocused();
  expect(seen.unmocked).toEqual([]);
});

test('Shop this look searches stores for the style and items picked, and discloses affiliate links', async ({ page, context }) => {
  // Stores open in a new tab; answer them here so nothing leaves the test.
  await context.route(/amazon\.com|wayfair\.com|target\.com/, (route) => route.fulfill({ status: 200, contentType: 'text/html', body: '<p>store</p>' }));
  const seen = await mockBackend(page, {
    shop: { enabled: true, retailers: [{ id: 'amazon', amazonTag: 'decorait-20' }, { id: 'wayfair' }, { id: 'target' }] },
  });
  await page.goto('/');
  await page.locator('#room-upload').setInputFiles({ name: 'room.png', mimeType: 'image/png', buffer: roomPhotoPng(2000, 1500) });
  await expect(page.locator('#wizard-container')).toBeVisible();
  await expect(page.locator('#style-scandinavian')).toBeAttached();
  // The pickers sit in collapsed sections; choosing works the same either way.
  for (const id of ['#style-scandinavian', '#item-sofa', '#item-rug']) {
    await page.locator(id).evaluate((input) => input.click());
  }
  await page.locator('#generate-btn').click();
  await expect(page.locator('#design-carousel .generated-image').first()).toHaveAttribute('src', RESULT_URL, { timeout: 30_000 });

  // On a phone the results view is one screen; the list opens as a sheet.
  const shop = page.locator('#shop-look');
  await expect(shop).toBeHidden();
  await page.locator('#shop-look-btn').click();
  await expect(shop).toBeVisible();
  await expect(page.locator('#shop-look-close')).toBeFocused();
  await expect(page.locator('#shop-look-hint')).toContainText('The pieces you picked, in a Scandinavian style.');
  await expect(page.locator('.shop-look-item')).toHaveText(['Sofa', 'Rug']);
  const amazon = page.locator('.shop-look-row').first().locator('a[data-retailer="amazon"]');
  await expect(amazon).toHaveAttribute('href', 'https://www.amazon.com/s?k=scandinavian%20sofa&tag=decorait-20');
  await expect(amazon).toHaveAttribute('rel', 'sponsored noopener');
  await expect(page.locator('#shop-look-disclosure')).toBeVisible();

  const [store] = await Promise.all([page.waitForEvent('popup'), amazon.click()]);
  await expect(store).toHaveURL(/amazon\.com\/s\?k=scandinavian%20sofa/);

  await page.keyboard.press('Escape');
  await expect(shop).toBeHidden();
  await expect(page.locator('#shop-look-btn')).toBeFocused();

  // The original photo has nothing to shop; the list follows the version shown.
  await page.locator('#design-history-strip .design-history-thumb').first().click();
  await expect(page.locator('#shop-look-btn')).toBeHidden();

  // A refresh keeps the list with the design.
  await page.reload();
  await page.locator('#shop-look-btn').click({ timeout: 15_000 });
  await expect(page.locator('.shop-look-item')).toHaveText(['Sofa', 'Rug']);
  expect(seen.unmocked).toEqual([]);
});

test('with nothing picked, Shop this look offers pieces that carry the style, without a disclosure when no programme is set', async ({ page }) => {
  await mockBackend(page);
  await generateOnce(page); // the default style is Minimalist
  // The sheet never takes room from the picture.
  const box = await page.locator('#design-carousel .generated-image').first().boundingBox();
  expect(box?.height, 'the result keeps its height').toBeGreaterThan(200);
  await page.locator('#shop-look-btn').click();
  await expect(page.locator('#shop-look')).toBeVisible();
  await expect(page.locator('#shop-look-hint')).toHaveText('Pieces that carry the Minimalist look. These are store searches, not the exact pieces in the picture.');
  await expect(page.locator('.shop-look-item')).toHaveText(['Rug', 'Wall art', 'Floor lamp', 'Throw pillows', 'Planters']);
  await expect(page.locator('a[data-retailer="amazon"]').first()).toHaveAttribute('href', 'https://www.amazon.com/s?k=minimalist%20area%20rug');
  await expect(page.locator('#shop-look-disclosure')).toBeHidden();
});
