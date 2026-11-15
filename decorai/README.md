# DecorAIt — AI-Powered Interior Design

DecorAIt is a mobile-first web app for making a room decision you can actually
act on. Photograph the room you have, see it redesigned, draw the plan, and
work out what you need to build. Everything happens to _your actual room_ —
not a mood board of somebody else's.

## What's in it

Three workspaces share one shell, plus a set of AI tools that cut across them.

**Redesign** (`/`, `/design`, `/result`) — the core flow.
Upload or photograph a room. Room type is **detected, not asked**. Pick one of
ten styles (Minimalist, Scandinavian, Industrial, Bohemian, Mid-Century,
Traditional, Coastal, Farmhouse, Art Deco, Japandi), optionally choose which
items to include, and for a furnished room say whether to rearrange, add to, or
start over. Generate, then compare against the original with a drag divider,
refine in plain language, and keep every version in the history strip.

**Quick Edit** is a focused mode of the configure view for targeted changes
("make the walls sage"): the style, furniture and approach options step aside
and an edit panel takes their place. Inside it, **Only change part of the
photo** lets you paint an area and choose *Change this* (only the paint
changes) or *Keep this* (everything except the paint changes). The same region
tools sit in the refine area of the results view. You don't need to cover the
whole item — paint part of it.

How a "change this" region edit works (`src/maskEditor.js`):

- **The model is shown the target.** Every tier gets one image: the photo with
  the painted area marked in magenta (a translucent tint plus an outline), and a
  prompt that explains the marker and says to remove it. Without this, "remove
  this" names nothing the model can see. (A separate guide image or OpenAI's
  mask field didn't work: models didn't link the guide to the photo, and
  gpt-image never sees a mask as an image.) If the result still shows the
  marker, the user is told so.
- **The model gets the full photo**, so whole objects are in view.
- **The result keeps the object the model changed, not the brush strokes.** The
  edit is compared with the original. Kept: every change touching the stroke
  (the whole couch, even if you painted one end), the softer change around it
  (the glow a removed lamp cast on the wall), and changes elsewhere of the same
  kind (a headboard on the far side of the duvet). Everything else is restored
  exactly. If the marked area barely changed, the app says so instead of
  presenting an unchanged room as a result.

Works on every tier.

**Floor Plan** (`/plan`) — an SVG editor with real drafting mechanics: walls
with magnetic/angle/alignment snapping, wall splitting, doors, windows and
freeform openings, room fills, a dimension layer, ~30 top-down furniture
pieces, PNG/SVG export, and multiple saved layouts. A reference photo can be
traced, with AI-detected snap points. A three.js preview renders the room in 3D.

**Woodworking** (`/build`) — a 3D board editor with a cut list, cut
optimization, CSV/PNG export, and saved projects.

**AI tools** — feng shui analysis (scored, five-element, works on both a photo
and a plan), Quick Edit for targeted changes, image-to-SVG vectorization, and
AI floor-plan import.

**Library** (`/library`) — saved designs, plans and builds.

## How a redesign runs

1. Upload a photo (or reuse a saved design).
2. Adjust style/items if you want — every option has a default, so Generate is
   live the moment the photo lands.
3. Generate. Which model runs depends on what you asked for:

| Path | Model | Cost to the user |
| --- | --- | --- |
| Free, nothing for the enum to lose | `proplabs/virtual-staging` | Free, up to the daily cap |
| Free, carries items / a style the enum can't express / refinement text | `google/nano-banana` | Free, up to the daily cap |
| Premium toggle | OpenAI `gpt-image-2` | One generation against the monthly cap |

   The free models are rate-limited per IP and per account and capped per
   account per UTC day (`FREE_DAILY_GENERATION_LIMIT`, default 30; subscribers
   `FREE_DAILY_GENERATION_LIMIT_SUBSCRIBER`, default 100 — run
   `sql/free_generation_daily_cap.sql`), but don't touch the quota. `freeRouteAwayFromProplabs()` in `src/main.js` decides the route —
   proplabs takes only a `room` and `furniture_style` enum, so anything it
   would silently drop goes to the prompt-capable model instead.
4. Compare, refine, regenerate. Subscribers' results are saved to Supabase
   Storage and appear in My Designs.

## Accounts, credits and limits

- Supabase email auth; email confirmation is enforced server-side on every paid
  endpoint, not just in the dashboard.
- A first-time visitor can generate once before creating an account
  (off by default — see **Pre-signup generations**).
- One-time token packs ($4.99/10, $9.99/20, $19.99/50) via Stripe, plus a
  subscription capped at `SUBSCRIPTION_MONTHLY_LIMIT` (default 50) generations
  per calendar month. Token packs act as overflow once the cap is spent.
- Every paywall opens one upgrade sheet (`src/upgrade.js`) that names what was
  blocked, what it costs and what happens after paying; `/upgrade` opens it as
  a pricing page. Checkout returns to the page the person was on (the server
  only accepts known app paths as `return_to`), and after payment their
  half-typed change is put back with one tap to run it. Nothing runs on its own.
  The plan price on the sheet comes from `SUBSCRIPTION_PRICE_CENTS` (default
  1999), which is display only and must match the Stripe price.
- Credit and quota spending is atomic — see `sql/atomic_credits.sql`.

## Running it locally

```bash
npm install
npm run dev
```

That runs Vite on **5173** and the API server on **3001**, with `/api`,
`/replicate` and `/openai` proxied to the latter. Open http://localhost:5173.

Node **18+** is required (`vite` fails on 16 with a `crypto.getRandomValues`
error). Copy `.env.example` to `.env` first — without `SUPABASE_URL` and
`SUPABASE_ANON_KEY` the client disables sign-in, and `/api/config` is what
feeds those to the browser.

`./run.sh` serves static files only and has no `/api` — it cannot sign you in
or generate anything. Use `npm run dev`.

To check a production build the way it actually deploys:

```bash
npm run build && NODE_ENV=production npm start
```

That serves `dist/` and the API together on 3001, which is also the only way to
exercise the service worker (it is disabled in dev on purpose).

## Stripe token packs (production)

One-time token purchases require Stripe Price IDs for each pack. The server reads:

- `STRIPE_PRICE_ID_PACK_10` — 10 tokens ($4.99)
- `STRIPE_PRICE_ID_PACK_20` — 20 tokens ($9.99)
- `STRIPE_PRICE_ID_PACK_50` — 50 tokens ($19.99)

If a price ID is missing, that pack is hidden in the UI and checkout returns an error.

To create the prices in Stripe and print the env vars:

```bash
STRIPE_SECRET_KEY=sk_live_... npm run setup:stripe-prices
```

Add the printed values in your Render dashboard (**Environment → Environment Variables**), then redeploy. See `.env.example` for the full list of secrets.

## Supabase auth (required for sign-in)

The client loads Supabase credentials from `/api/config`. Set these in `.env` locally and in Render for production:

- `SUPABASE_URL` — your project URL (Supabase dashboard → Settings → API)
- `SUPABASE_ANON_KEY` — the **anon/public** key (safe for the browser)
- `SUPABASE_SERVICE_ROLE_KEY` — service role key (server only; never expose to the client)

If either `SUPABASE_URL` or `SUPABASE_ANON_KEY` is missing, sign-in is disabled and the login form shows a configuration error.

### Google and Apple sign-in (optional)

The sign-in sheet can offer "Continue with Google" and "Continue with Apple".
Both are off until switched on, because a button for a provider Supabase
doesn't know about sends every visitor who taps it to an error page:

1. In Supabase → **Authentication → Providers**, enable the provider and add
   its client ID/secret.
2. In **Authentication → URL Configuration**, add the site's URL to the
   redirect allow-list.
3. Set `AUTH_OAUTH_PROVIDERS=google,apple` (either or both) and redeploy.

## Sharing a design

The Share button on a result opens a dialog with two ways out:

- **Share image** builds one before/after picture in the browser and hands it
  to the device's share sheet (or downloads it). Nothing is uploaded.
- **Create a link** publishes that picture at `/s/<id>`: a small standalone
  page with link-preview tags, so it unfurls when pasted into a chat. Needs a
  signed-in, confirmed account, and can be taken down from the same dialog.

Only the composed picture is stored for a link — never the raw room photo.
Images live in the private designs bucket and are streamed by the server, so a
link that has been taken down stops resolving within five minutes everywhere.

Run `sql/shared_designs.sql` once to turn links on; until then only "Share
image" is offered. `APP_URL` must be the public site address, because links and
preview images are built from it. Each account can have `MAX_SHARED_LINKS_FREE`
(default 10) live links, or `MAX_SHARED_LINKS_SUBSCRIBER` (default 50).

Every share page has a **Report this image** link. A report is counted on the
share's row (`report_count`, `last_reported_at`), logged as `[share-report]`,
and emailed to `FEEDBACK_TO_EMAIL` when the feedback mail settings are
configured, with the SQL to take the image down. Nothing is hidden
automatically, so a handful of reports can't remove someone's design.

## Tests

```bash
npm test                              # unit tests (Node 20+), no network
PW_CHANNEL=chrome npm run test:e2e    # browser smoke test, in installed Chrome
```

The smoke test mocks every API and provider call, so it costs nothing to run.
Without `PW_CHANNEL` it uses Playwright's own Chromium
(`npx playwright install chromium` once).

Render runs the unit tests as part of every deploy
(`npm install && npm test && npm run build`), so a failing test stops the
deploy and the previous version keeps serving. The smoke test needs a browser
and is not part of the deploy: run it locally before pushing. `dist/` is not
committed: Render builds it on deploy.

## Seeing what generations cost

Run `sql/generation_events.sql` once. Every generation is then recorded with
its model, outcome and duration, and this shows runs, failures and failure rate
per model per day:

```sql
select * from generation_daily_stats where day >= current_date - 7;
```

Set `MODEL_COST_USD` (a JSON map of model → dollars per run, from your provider
invoices) to fill in the cost column. Without the SQL the app behaves the same
and the events only appear in the server log as `[gen] {...}` lines.

## Security & abuse prevention

Before opening the app to the public, complete this checklist:

1. **Run the SQL migrations** in the Supabase SQL editor:
   - `sql/credit_tokens_for_session.sql` (idempotent token crediting)
   - `sql/atomic_credits.sql` — **required**: makes credit/quota spending atomic so
     concurrent requests can't over-spend a user's credits or monthly cap.
   - `sql/anonymous_generations.sql` — only if you enable pre-signup generations
     (see below). Without it the feature refuses every request and logs why.
2. **Enable "Confirm email"** in Supabase (Authentication → Providers → Email). The
   server also enforces this on every paid endpoint (`requireConfirmed`), so disposable
   accounts can't farm the AI providers — but the dashboard toggle should be on too.
3. **Set `ALLOWED_ORIGIN`** to your real domain(s) in production, comma-separated.
   It is only needed for other sites calling the API, since the app is same-origin;
   unset, the server allows `APP_URL`'s origin, or no cross-origin callers at all.
   It never falls back to `*`.
4. **Security headers** are set on every response (`lib/security.js`): nosniff,
   no framing, a strict referrer policy, HSTS, and a permissions policy that
   allows only the camera. The content security policy starts in
   `CSP_MODE=report`: a small baseline is enforced and the full policy is
   report-only, with each distinct violation logged once an hour as
   `[csp-report]`. Once the logs are quiet under real traffic, set
   `CSP_MODE=enforce`. If something breaks, `CSP_MODE=off` removes it.
   One report is expected and harmless: `{"directive":"script-src","blocked":"eval"}`
   comes from feather-icons probing for the global object; it catches the
   refusal and falls back, and the app works the same with the policy enforced.
5. **Keep the Replicate model allowlist current.** The proxy only runs the models in
   `REPLICATE_ALLOWED_MODELS` (default list in `server.js`). If you add a model, add its
   version string there or via the env var — otherwise a user could otherwise invoke
   arbitrary, expensive Replicate models on your account.
6. **Tune the rate limits** (`RATE_LIMIT_*` in `render.yaml`) to your expected traffic.
   They are in-memory per-instance — if you scale to multiple instances, move the
   counters to a shared store (e.g. Redis).

### Pre-signup generations

A first-time visitor can generate one design before creating an account, so the
product proves itself before it asks for anything. This deliberately opens a paid
AI endpoint to unauthenticated traffic, so it is **off unless you configure it**:

| Variable | Default | Meaning |
| --- | --- | --- |
| `ANON_DEVICE_SECRET` | *(empty)* | HMAC key for the device cookie. **Required** — without it the feature stays off regardless of the settings below, because an unsigned device id is trivially forged. Generate with `openssl rand -hex 32`. |
| `ANON_FREE_GENERATIONS` | `1` | Generations granted per device before signup. `0` disables. |
| `ANON_MAX_PER_IP_PER_DAY` | `5` | Backstop against "clear the cookie, get another run". Don't set this so low that an office behind one NAT locks everyone out. |

What bounds the exposure:

- **Signed `HttpOnly` cookie** identifies the device; the grant row's PRIMARY KEY
  makes the claim atomic, so concurrent requests can't both win.
- **Per-IP daily cap** backstops the cookie, which a visitor can always clear.
- **Model allowlist within the allowlist** — anonymous callers may only run the two
  cheap staging models, never the premium edit path, the vectorizer, the feng-shui
  LLM, or anything else billed per call.
- **Prediction ownership** — an anonymous caller may poll only the prediction ids
  their own device started, so one visitor can't read another's generation.
- **Fails closed** — if the quota table is missing or the counter errors, requests
  are refused rather than handed out ungoverned.
- Anonymous results are **not persisted** (no account to own them), which is also
  the conversion hook: sign up to save this design.

Watch the cost: this shifts first-run volume onto the AI providers with no account
behind it. Start with a low `ANON_MAX_PER_IP_PER_DAY` and raise it once you can see
spend per visitor.

What's enforced in code: auth + email-verification + per-IP/per-account rate limits on
all paid AI endpoints; a Replicate model allowlist; SSRF guards on the poll proxy
(locked to `api.replicate.com`) and on server-side image fetches (host allowlist);
atomic credit/quota accounting; Stripe webhook signature verification; and idempotent,
ownership-checked purchase fulfillment.

## Installable app (PWA)

The app installs to a phone home screen and runs without browser chrome. Source
lives in `public/` and is copied verbatim to `dist/` by Vite:

| File | Purpose |
| --- | --- |
| `manifest.webmanifest` | Name, colours, icons, and three shortcuts (`/`, `/plan`, `/library/designs`) |
| `icon.svg` | Scalable brand mark — the source the PNGs are rendered from |
| `icon-192.png`, `icon-512.png` | Standard icons |
| `icon-maskable-512.png` | Android adaptive icon; mark sits inside the centre-80% safe zone |
| `apple-touch-icon.png` | 180×180 — iOS ignores the manifest for this |
| `sw.js` | App-shell service worker |

**The service worker is deliberately conservative**, because it is the one thing
that can keep serving stale code after a deploy:

- `/api`, `/replicate`, `/openai`, `/webhook` and `/health` are **never**
  intercepted. Caching a generation, a credit balance or an auth response would
  be wrong at best and cross-account leakage at worst.
- Navigations are **network-first**, so a deploy lands on the next load. The
  cached shell is only an offline fallback.
- Static assets are stale-while-revalidate, which is safe because Vite
  fingerprints bundle filenames.
- Only same-origin `GET`s with a `200`/`basic` response are stored.

It registers **in production builds only** — in dev it actively unregisters
itself, so a worker left behind by a local production build can't shadow the
Vite dev server.

To invalidate everything on a deploy, bump `CACHE_VERSION` in `public/sw.js`.
Kill switch, from the page or devtools console:

```js
navigator.serviceWorker.controller?.postMessage({ type: 'UNREGISTER' })
```

Regenerating the icons: edit `public/icon.svg`, then re-render the PNGs from it
(any SVG rasterizer, or a canvas `drawImage` + `toDataURL('image/png')` at 192,
512 and 180). The maskable variant drops the corner radius and scales the mark
to ~0.77 so the adaptive mask can't clip it.

## Architecture

Vanilla JavaScript and Vite — no framework, no CSS tooling, no component
library. "Components" are CSS class conventions.

| Path | What it is |
| --- | --- |
| `index.html` | Every screen's markup, `.hidden`-toggled |
| `src/main.js` | Redesign flow, auth, generation, designs, modals |
| `src/floorPlanEditor.js` | The SVG floor plan editor |
| `src/woodworking/` | The 3D woodworking editor (isolated module) |
| `src/router.js` | History API routing — see the route table there |
| `src/compare.js`, `src/waitState.js`, `src/sheets.js` | Compare divider, generation wait state, mobile sheets |
| `src/tokens.css` | The design token layer — load it before `styles.css` |
| `src/styles.css` | Everything else |
| `server.js` | Express: auth, Stripe, quotas, and the AI proxies |
| `sql/` | Supabase migrations — run these, they are not optional |

**Design system.** The visual direction is *Warm Precision*: warm paper
neutrals and an editorial serif, executed with the state completeness and
spacing discipline of a software tool. Tokens live in `src/tokens.css` and the
full rationale is in [.design/decorait-overhaul/](.design/decorait-overhaul/).
Three things to know before editing CSS:

- There is a **backwards-compatibility alias layer** near the bottom of
  `tokens.css` (`--primary-color`, `--text-color`, `--card-bg`, …). The editors
  and hundreds of rules in `styles.css` consume it. Don't drop it.
- **Dark mode is defined but deliberately not shipped** — the
  `prefers-color-scheme` block is commented out, with the reason stated inline.
- The **editor canvases are neutral, not warm**, on purpose: a drawing is read
  for accuracy. Canvas colours are `--canvas-*` tokens, resolved from JS via
  `buildCanvasPalette()` because SVG presentation attributes can't take
  `var()`. The furniture catalogue's material colours are content, not theme,
  and stay literal.

**Known rough edges.** `floorPlanEditor.js` (~9.5k lines), `main.js` (~6k) and
`styles.css` (~8.7k) are monoliths; there are no automated tests; the client
bundle ships as a single ~1.2 MB chunk.

## Where this is going

Near-term work and the competitive reasoning behind it are in
[.design/competitive/COMPETITIVE_PLAN.md](.design/competitive/COMPETITIVE_PLAN.md).
The short version: the biggest gap against the rest of the market is that the
output is a picture and the user's actual job is a purchase — shoppable results
are the next significant piece of work. Remaining design-overhaul tasks are
tracked in [.design/decorait-overhaul/TASKS.md](.design/decorait-overhaul/TASKS.md).

## Credits

Created with AI as part of the Made With AI showcase.

## License

MIT.
