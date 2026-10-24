# DecorAIt: Competitive Gap Analysis & Enhancement Plan

Date: 2026-10-18 · Scope: `decorai/` app + server. Marketing site is a constraint, not a deliverable.

Companion to [DESIGN_BRIEF.md](../decorait-overhaul/DESIGN_BRIEF.md), which covers the
*craft* problem. This document covers the *product* problem: the brief's overhaul
makes the existing app look like it was made by someone with taste; it does not make
the app competitive with what else is on the market.

---

## 1. What exists today (verified in code)

Three products sharing a header, plus a set of AI side-tools.

**Photo redesign wizard** — `index.html` + `src/main.js` (6,100 lines)
- Upload / camera / reuse-a-saved-design
- 10 style presets (`interiorDesignStyles`, main.js:299) — Minimalist, Scandinavian,
  Industrial, Bohemian, Mid-Century, Traditional, Coastal, Farmhouse, Art Deco, Japandi
- Room type **detected, not asked** (hidden radio state carriers in index.html:184)
- Approach for furnished rooms: rearrange / add / start over
- Optional item picker
- Two generation tiers:
  - **Free:** `proplabs/virtual-staging` (main.js:3885)
  - **Premium:** `google/nano-banana` (main.js:5883), counts against quota
- Drag-divider compare (`src/compare.js`), refinement textarea + 5 chips, regenerate,
  design history strip, save to Supabase Storage
- Designed wait state (`src/waitState.js`)

**Floor plan editor** — `src/floorPlanEditor.js` (9,409 lines)
- SVG walls/corners with magnetic, angle, and alignment snapping; wall splitting
- Doors, windows, freeform openings; room fills; dimension layer
- ~30 top-down 2D furniture SVGs (`public/furniture/`)
- Reference-image tracing with **AI snap-point detection**
- PNG/SVG export; multiple saved layouts
- three.js 3D room preview → AI render from a guide image (main.js `__decoraitGenerateRoomRender`)

**Woodworking 3D editor** — `src/woodworking/editor.js`, cut lists, cut optimization, projects

**AI side-tools** — feng shui analysis with 5-element scoring (`/api/feng-shui`),
image-to-SVG vectorizer, AI floor-plan import, real-esrgan upscale, depth-map helper

**Commerce** — Supabase auth (email confirm enforced), Stripe token packs
($4.99/10, $9.99/20, $19.99/50), subscription capped at 50 generations/month,
`FREE_TOKENS` default 2, atomic credit accounting, rate limits, model allowlist

This is a genuinely substantial build. The gaps below are not "it's unfinished" —
they are "it is competing in a category whose table stakes have moved."

---

## 2. Shortcomings vs. the market

Ordered by commercial impact, not by effort.

### 2.1 The output is a picture, and the job is a purchase — **critical**

Every serious competitor closes the loop from render to checkout. Wayfair Decorify
returns a shoppable room. IKEA Kreativ ties inspiration to live inventory. Havenly
returns a shoppable list from its marketplace. House AI's *Shop from Image* detects
furniture and returns in-stock products with prices and retailer links.
HomeDesigns AI's *Furniture Finder* does object recognition → catalog match.

DecorAIt generates an image and stops. There is **zero** shopping code in the app
(`grep` for shop/product/retail/affiliate in `src/main.js` returns only Stripe token
packs). This costs twice:

- **Revenue.** Affiliate commission is the line that lets competitors price a
  subscription at $12–19/mo. DecorAIt has only subscription revenue and must charge
  more for less.
- **The actual user job.** The design brief's own problem statement says the user is
  "about to spend real money — a sofa, a rug, a weekend of painting." The app shows
  them the result and abandons them at the most expensive, highest-anxiety step.

### 2.2 The free tier discarded style and item choices — **fixed 2026-10-18**

The default generation path runs `proplabs/virtual-staging`, which takes **no
free-form prompt** — its schema is a `room` enum and a `furniture_style` enum, so
anything else the user chose had nowhere to go.

Measured before the fix:

- **Items: 100% discarded.** The schema has no field for them. Every empty-room run
  requires item selections (`generatePromptsWithItems` refuses to generate without
  them), so this was the dominant case.
- **Styles: 4 of 10 mistranslated.** Minimalist → `Modern`, Japandi → `Scandinavian`,
  Bohemian and Art Deco → `Default (AI decides)`. The user got a style they
  didn't pick, with no indication.
- **Room kind: always `Living Room`.** The app never asks the room kind and the
  prompt contains no room word, so a bedroom photo was staged as a living room.

Refinement text was **already** handled — typing into the results-screen refinement
box routed to Nano Banana via `nanoEditPrompt`. The gap was first runs and
no-text regenerates.

**Fix shipped:** `freeRouteAwayFromProplabs()` (main.js) routes a free run to Nano
Banana — already unmetered on this path — whenever it carries item picks, a style the
enum can't express, or refinement text. A bare restyle with a cleanly-mapping style
stays on proplabs, which is purpose-built for staging. Applied in `generateDesigns`
and `retryImageGeneration`.

**Still open:** the surviving proplabs path still sends `room: 'Living Room'`
unconditionally. It only affects furnished-rearrange runs with no items, but it is
wrong for every non-living-room photo. Fixing it needs room-kind detection the app
does not have today.

### 2.3 No proof before signup

`ensureLoggedIn()` (main.js:682) gates the *first* generation behind account creation,
and the server enforces email confirmation on every paid endpoint. Competitors
routinely give 3 full-quality designs with no credit card and no account
(Remodel AI, and most free tiers in the 2026 roundups).

DecorAIt asks for an account, an email round-trip, and a confirmation click before
showing a single result. The design brief's first principle is "proof before
configuration" — this is the same failure one level up: proof before *registration*.

### 2.4 Room capture stops at a flat photo

Competitors capture geometry:
- LiDAR room scan on Pro iPhones/iPads → measured floor plan (ArchAI, Room Scanner,
  Planner 5D's AR scanner)
- Video-walkthrough scan on any phone (CamPlan's AI Video Scan, cloud videogrammetry)
- AR in-room placement (Houzz *View in My Room 3D*, IKEA Place)

DecorAIt has a floor plan editor where you **draw the walls by hand**. That is a
professional tool's onboarding attached to a consumer product. And the two halves
never meet: the photo wizard and the floor plan editor do not share a room, a scale,
or a project. The editor's reference-image tracing is the closest thing, and it still
requires manual work.

### 2.5 Thin style and control surface

| | DecorAIt | Typical competitor |
| --- | --- | --- |
| Styles | 10 | 30+ |
| Colour palette control | none | common |
| Budget constraint | none | common |
| Region masking ("change only the walls") | none | common |
| "Keep my sofa" / preserve-object | none | common |
| Reference-image style transfer | none | emerging |
| Seed / variations / upscale exposed | upscale exists internally only | common |

Quick Edit exists but is a narrow path, not general region control.

### 2.6 One image out, no deliverable

No video walkthrough (several competitors advertise AI video — one roundup lists
"up to 20 AI videos" on a $24/mo tier), no 360/panorama, no multi-angle consistency,
no PDF or mood board export, no shopping list, no public share link. `navigator.share`
is absent from the codebase; "Save Design" is a file download.

### 2.7 No project structure, no collaboration

Designs live in a flat history strip and a "My Designs" modal. There is no
*home → room → version* hierarchy, no notes, no budget, no comparison across rooms.
There is no way to share a design with a partner, a contractor, or a designer, and no
comments. Houzz and Havenly's entire wedge is the handoff to a professional.

### 2.8 Furniture library can't answer "will it fit"

~30 generic top-down SVGs with no real dimensions, no brands, no SKUs. Planner 5D
ships thousands of 3D models; retailer tools use real products with real measurements.
The editor cannot tell a user whether the sofa they are about to buy fits — which is
the single most valuable question a floor plan can answer, and the one that would
justify the editor's existence inside a consumer app.

Likewise, nothing in the photo flow estimates scale, so the AI can and does place
physically impossible furniture.

### 2.9 Web-only, not even installable

No `manifest.json`, no service worker, no `apple-mobile-web-app-*` tags, no app store
presence. This is a phone-first job — the user is standing in the room — and the
competition is native with camera and LiDAR access.

### 2.10 Name collision

Market roundups list a commercial **"DecorAI"** at ~$24/mo, and `decoraihome.com`
exists. SEO and trademark exposure worth resolving before spending on acquisition.

### 2.11 Delivery risk in the codebase

`floorPlanEditor.js` 9,409 lines · `main.js` 6,100 · `styles.css` 8,653 ·
`server.js` 2,450. No tests, no types, no component model. Design-overhaul tasks F3/F4
are still open. Recent work is on `gh-pages` in a monorepo while `main` is stale, and
the README documents features as "Future Enhancements" that shipped months ago.

None of section 3 lands safely into this without a parallel engineering track.

---

## 3. Strategy

DecorAIt cannot out-catalog Planner 5D or out-retail Wayfair, and it should not try.

But it has one asset no pure photo-AI tool has: **a real floor plan editor with
snapping, openings, and dimensions**, plus feng shui analysis that is genuinely
differentiated. Today the brief correctly treats the editor as a distraction competing
for header space. Inverted, it is the moat:

> **The only AI redesign that knows your room's actual geometry — and only shows you
> furniture that actually fits.**

That single sentence turns every gap above into one coherent roadmap: capture the room
(2.4) → redesign it with real control (2.5) → match the result to real products with
real dimensions (2.1, 2.8) → check them against the plan (2.8) → deliver something the
user can act on and share (2.6, 2.7).

Pricing follows the revenue line. Once shopping is live:

| Tier | Price | Contents |
| --- | --- | --- |
| Free | $0, no card | 3 designs, standard model, watermark-free, no signup for #1 |
| Plus | $9.99/mo | Unlimited standard, 30 premium, shopping lists, projects |
| Pro | $24.99/mo | Unlimited premium, video, multi-room, exports, fit-check, share links |

Plus affiliate commission on every "shop this room" conversion.

---

## 4. Phased plan

Sizing is rough and assumes one developer. Phases 0–2 are the ones that change the
competitive position; 3–4 are the moat.

### Phase 0 — Unblock the funnel (~2–3 weeks)

Cheap, high-leverage, no new infrastructure.

1. **Anonymous first generation.** Allow one ungated run per IP/device before any
   account. Server-side: a short-lived anonymous quota keyed on a signed device
   cookie + IP, reusing the existing `genIpLimiter`. Client: replace the
   `ensureLoggedIn()` gate at main.js:682 with a gate that fires on the *second* run.
   Fixes 2.3.
2. ~~**Route the free tier through a prompt-capable model.**~~ **Done 2026-10-18.**
   `freeRouteAwayFromProplabs()` sends a free run to Nano Banana whenever proplabs
   would drop information; proplabs keeps the cases it handles faithfully. See 2.2.
   Worth watching: this shifts most free first-run volume from proplabs to
   nano-banana. Both are unmetered on `/replicate/predictions`, so the user-facing
   quota is unchanged, but the per-run cost to the owner is not — the cost dashboard
   in the engineering track should land before free volume grows.
3. ~~**PWA shell.**~~ **Done 2026-10-18.** Manifest with maskable + Apple icons and
   three route shortcuts, iOS meta tags, and an app-shell service worker that never
   touches API traffic and is network-first on navigations; production builds only.
   Covers the installability half of 2.9 — a native shell with real LiDAR access is
   still Phase 4. The icons are a token-built placeholder mark, not design work.
4. **Housekeeping.** Finish design tasks F3/F4; rewrite the README to match reality;
   resolve the `gh-pages` / `main` branch split; decide on the name (2.10).

### Phase 1 — Close the commercial loop (~4–6 weeks)

The highest-value feature in this document.

5. **Object detection on the generated image.** Grounded segmentation (e.g. a
   Grounding DINO + SAM pipeline on Replicate, added to `REPLICATE_ALLOWED_MODELS`)
   → bounding boxes + crops labelled "sofa", "rug", "floor lamp", "coffee table".
6. **Product matching service.** New `server.js` router (`/api/shop/*`):
   crop → embedding → nearest-neighbour search over an ingested affiliate catalog.
   Start with one or two feeds to prove the loop (Amazon PA-API, Impact-network
   retailers such as Wayfair/Target, or a furniture aggregator), cached in Supabase
   with `pgvector`. Store dimensions on every product row — Phase 3 depends on it.
7. **"Shop this room" panel.** Hotspots on the result image; tap a piece → matched
   products with photo, price, retailer, affiliate link, and a running room total.
   Swap a match, hide a piece, export the list.
8. **Fallback honesty.** When confidence is low, say "similar to this" rather than
   claiming an exact match. Match quality is the #1 risk in this phase; design the UI
   so a mediocre match is still useful.

Fixes 2.1. Opens the affiliate revenue line that makes the Phase-0 free tier
affordable.

### Phase 2 — Make the output better than the competition's (~6–8 weeks)

9. **Structural conditioning.** Use the existing depth-map helper
   (`getDepthMapWithReplicate`, main.js:3503) properly: depth + segmentation
   ControlNet so walls, windows, ceiling lines, and room proportions survive the
   redesign. This is what separates "my room, restyled" from "a different room."
10. **Region masking.** Brush or tap-to-select a region → "change only this."
    Reuses the Phase-1 segmentation masks, so it is cheap once 5 exists.
11. **Preserve-object.** Invert the same masks: "keep my sofa, change everything else."
    Directly answers the most common real-world constraint.
12. **Control surface.** Expand to 30+ styles; add a colour palette picker, a budget
    slider that filters Phase-1 product matches, reference-image style transfer, and
    expose variations + the existing real-esrgan upscale per result.

Fixes 2.5 and the quality half of 2.8.

### Phase 3 — The geometry moat (~8–12 weeks)

13. **Room capture.** Video-walkthrough scan first (works on every phone, and the web
    stack can upload to a videogrammetry service) → auto-generated floor plan loaded
    straight into the existing editor. Native iOS RoomPlan later, in Phase 4's shell.
    Fixes 2.4.
14. **Unify photo and plan.** One `Project` model: a home has rooms; a room has a
    plan, photos, designs, a shopping list, and a budget. Replaces the flat history
    strip. Fixes 2.7 (structure half).
15. **Fit check.** Join Phase-1 product dimensions to the Phase-3 plan: place a
    candidate sofa in the plan, get clearance warnings and walkway checks. This is the
    feature the positioning sentence promises and nobody else ships. Fixes 2.8.
16. **Feng shui as a first-class differentiator.** It already works on both photos and
    plans — promote it from a side button to a scored, per-room report inside the
    project, with "apply this suggestion" wired to Phase-2 region editing.

### Phase 4 — Reach and retention (~6–10 weeks)

17. **Native shell** via Capacitor around the Phase-0 PWA → App Store / Play presence,
    real camera, iOS RoomPlan, push notifications for finished generations.
    Completes 2.9.
18. **Share and collaborate.** Public read-only design links, partner/contractor
    invites, comment threads on a design. Completes 2.7.
19. **Deliverables.** AI video walkthrough, PDF mood board / spec sheet with the
    shopping list, 360 panorama. Fixes 2.6.
20. **Pro tier.** White-label exports and client projects for small design firms —
    the Houzz/Havenly adjacency, and far higher ARPU than consumers.

### Engineering track (continuous, interleaved)

Run alongside every phase; none of the above lands safely otherwise.

- **Split the monoliths.** `floorPlanEditor.js` → `geometry/`, `tools/`, `render/`,
  `io/`. `main.js` → `wizard/`, `generation/`, `auth/`, `designs/`.
  `server.js` → Express routers per domain.
- **Tests.** Playwright smoke tests for upload → generate → compare → save first;
  unit tests on snapping geometry and credit accounting (the two places a bug costs
  money).
- **TypeScript on new code only.** `allowJs`, no big-bang migration.
- **Observability.** Per-model cost and latency tracking, generation success rate,
  funnel events. Phase 1's unit economics cannot be managed without it.

---

## 5. Risks

| Risk | Why it matters | Mitigation |
| --- | --- | --- |
| Product-match accuracy (Phase 1) | A bad match is worse than no match — it reads as the app not understanding the image | Ship "similar to" framing, confidence thresholds, and manual swap from day one |
| Affiliate programme approval | Amazon PA-API and Impact both gate on traffic | Apply during Phase 0, before the code needs them |
| AI cost per user once the free tier opens | Anonymous generations are a direct unsubsidised cost | Hard anonymous caps, cheapest viable model for run #1, cost dashboard in the engineering track |
| Scope — this is 6–9 months of work | Phases 3–4 are where plans die | Phases 0–2 are independently shippable and each improves conversion on their own |
| Name collision | Wasted acquisition spend, possible rebrand later | Decide in Phase 0, before any marketing investment |

---

## 6. Recommendation

Do Phase 0 now — it is two to three weeks, needs no new infrastructure, and items 1
and 2 together probably matter more to conversion than everything in the design
overhaul combined. Item 2 in particular is a correctness bug dressed as a product gap.

Then commit to Phase 1. Shoppable results are the difference between a demo and a
business, and they are what makes a competitive price sustainable.

Treat Phases 3–4 as the plan of record but not the commitment — re-decide once
Phase 1's affiliate revenue per active user is a real number.
