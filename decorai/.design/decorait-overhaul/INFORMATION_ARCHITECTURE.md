# Information Architecture: DecorAIt

> Companion to [DESIGN_BRIEF.md](./DESIGN_BRIEF.md). Defines structure only —
> navigation, routes, hierarchy, flows, and naming. Visual decisions live in the
> brief and tokens.

---

## Current State

Recorded so the change is legible, and so nothing here is proposed in ignorance of
what exists.

- **No routing of any kind.** Every view lives at `/`. State is managed by 121
  `.hidden` class toggles across `src/main.js`. `history.replaceState` appears
  only to strip OAuth and Stripe query params after redirect.
- **Consequences today**: browser back exits the app; refresh destroys all state;
  Google Analytics (added in the most recent commit) can only ever record a single
  pageview, making the suspected conversion problem unmeasurable; no view or
  result can be linked to.
- **Server already supports deep links.** `app.get('*')` at
  [server.js:2444](../../server.js) serves `dist/index.html` for unmatched paths.
  History API routing requires **no server change**.
- **Structure is flat**: three top-level screens (`upload-section` /
  `results-section`, `layout-editor-screen`, `woodworking-editor-screen`) and 12
  modals, all siblings in `index.html`.

## Site Map

```
Redesign (home)                  /
  Configure                      /design
  Result                         /result
  Saved result (owner only)      /result/:id

Floor Plan                       /plan
  Saved plan                     /plan/:id

Woodworking                      /build
  Saved build                    /build/:id

Library                          /library          → redirects to /library/designs
  Designs                        /library/designs
  Plans                          /library/plans
  Builds                         /library/builds

Upgrade                          /upgrade

— overlays, not routes —
Auth                             ?auth=signin | ?auth=signup   (preserves current view)
Feng Shui analysis               overlay on /design or /result
Quick Edit                       overlay on /design
Alert / Confirm                  transient
```

**Three primary routes** (`/`, `/plan`, `/build`), each with at most one level of
nesting. Depth never exceeds two. This is a deliberate ceiling — the product is not
complex enough to justify a third level, and a flat structure keeps the mobile tab
model honest.

### Route Notes

| Route | Auth | Persistence | Notes |
| --- | --- | --- | --- |
| `/` | Public | — | Upload. First paint for all traffic arriving from the marketing site |
| `/design` | Public | In-memory | Configure + generate. Reachable only with a photo in state; direct hits redirect to `/` |
| `/result` | Public | **In-memory only** | Current session's result. Refresh loses it for free users — a known, accepted limitation |
| `/result/:id` | Subscriber | Server | **Owner-restore only.** `/api/designs/:id` requires an active subscription and filters `user_id`. Not shareable — see Known Gaps |
| `/plan`, `/build` | Public shell, gated tools | Server (subscriber) | Editors open; saving and premium tools gate |
| `/library/*` | Signed in | Server | Empty state for signed-out users invites sign-in rather than 404ing |
| `/upgrade` | Public | — | A real URL so decoraityourspace.com can link straight to pricing |

**Auth is a query param, not a route.** Signing in should never destroy the view
behind it — a user gated at generate must land back on `/design` with their photo
and settings intact. `?auth=` overlays; it does not navigate.

## Navigation Model

- **Primary navigation** — 3 items, hard ceiling: **Redesign · Floor Plan ·
  Woodworking**. Redesign is home and is never a peer in visual weight; the other
  two are reached through a workspace switcher in the header.

- **Secondary navigation** — contextual and local to each workspace: wizard step
  indicator within Redesign; tool panels within the editors; tabs within Library.
  Never global.

- **Utility navigation** — account menu (Library, Upgrade, Sign out), token/usage
  badge, feedback. Sits opposite the workspace switcher and stays out of the
  primary hierarchy.

- **Mobile navigation** — **none.** *(Revised after build review — a bottom tab
  bar was built first and removed.)* The floor plan and woodworking editors are
  desktop tools, so a persistent tab bar advertised two destinations that don't
  work on a phone. Mobile is **redesign-only**: no workspace switcher, no tab
  bar. Library lives in the account menu. The bottom edge belongs to the sticky
  primary action instead, which is the thing a phone user actually needs within
  thumb reach.

  The native feel is carried by sheets, the sticky action bar, and disclosure
  rows rather than by tab-bar chrome.

- **Back behavior** — `popstate` is honored throughout. Back from `/design` returns
  to `/`; back from an editor returns to the previous workspace; back with a sheet
  open closes the sheet first. Back must never exit the app from a nested view.

## Content Hierarchy

### Redesign — `/` (first paint)

1. **Upload affordance** — the only job of this view. Large, obvious, tappable.
2. **What you'll get** — a single line plus a sample transformation. Today this
   view offers zero proof; visitors arriving cold from the marketing site need a
   half-second of continuity, not a bare dashed box.
3. **Sign-in state** — present but quiet. Not a gate.
4. **Workspace switcher** — discoverable, not competing.

### Configure — `/design`

1. **The photo** — their room. The anchor for every choice below it. Capped at
   30vh on mobile: enough to establish the room, not so much that it owns the
   screen.
2. **Generate** — visible and enabled immediately, thanks to defaults. On mobile
   it is `position: fixed` at the bottom edge and never scrolls away.
3. **Style** — the choice that most changes the output, so it comes first among
   options and carries a default.
4. **What should we do?** — Rearrange / Add to it / Start over. Shown only for
   furnished rooms; an empty room has exactly one possible intent, so asking is
   noise. *(Revised after build review — see "Room type removed" below.)*
5. **Items** — the longest list and the most optional. Last.
6. **Model preference** — a detail. Bottom.
7. **Feng Shui / Quick Edit** — alternate paths, not part of the main line.

**Mobile presentation — disclosure rows.** *(Revised after build review.)* The
options were first built as one long scroll. With defaults applied you never
*needed* to scroll, but nothing communicated that, so the remaining options were
simply invisible. Each section is now a collapsed row showing its **current
value** — `Style · Minimalist`, `Your room · Empty`, `Items · None` — so the
entire configuration is legible at a glance and fits on screen with the photo
and Generate, with no scrolling. Opening a row is a deliberate act; only one is
open at a time.

Desktop keeps every section expanded — there is room, and collapsing would only
add clicks. The row degrades to a plain section heading there.

**Room type removed.** *(Revised after build review.)* The "Empty room /
Furnished room" question is gone. The decisive evidence was in the code: the
prompt builder already overrode the user's answer whenever it disagreed with
detection —

```js
// main.js — shouldTreatAsEmpty
isRoomActuallyEmpty && currentRoomType === 'furnished' && furnishedOption !== 'keep-existing'
```

— so the question was collecting an answer the system then discarded. It was
also already auto-detected and pre-selected, and the two prompts it chose
between differ by four words.

What replaced it:

- **Detection sets room type silently.** `detectEmptyRoom` (Sobel edge density,
  threshold 0.39, ~92% accurate per its own calibration comment). It is not
  surfaced and not user-correctable.
- **The surviving question is intent**, which genuinely changes the output:
  Rearrange / Add to it / Start over — furnished rooms only.

Net effect on mobile: three option rows became two (Style, Items).

A correction affordance ("Looks like an empty room · *It has furniture*") was
built and then removed at the designer's direction, in favour of a cleaner
configure view.

**Open risk — no mitigation in the product.** Detection failure is asymmetric:

- Furnished room misread as **empty** → the "add only these items" prompt runs
  and may ignore or replace real furniture. **Nothing catches this**, and the
  user now has no way to correct it.
- Empty room misread as **furnished** → caught by `shouldTreatAsEmpty` in the
  prompt builder.

At ~92% accuracy this affects roughly 1 in 12 uploads, only some of which fall
in the unprotected direction. Options if it shows up in real usage: raise the
detector's threshold so it errs toward "furnished" (the protected direction),
or reinstate a correction affordance. Worth watching once there are real users
— it is invisible in the UI by design, so it will surface as "the result
ignored my furniture" rather than as an obvious bug report.

### Result — `/result`

1. **The generated image**, with before/after comparison as direct manipulation.
2. **Refine** — the action that converts a toy into a tool. Elevated from its
   current position as a footer block.
3. **History strip** — proof that nothing they made is lost.
4. **Save / download**.
5. **Feng Shui**, back navigation, model preference.

### Editors — `/plan`, `/build`

1. **Canvas** — maximum available area at all times.
2. **Active tool + selection properties** — contextual, adjacent to the work.
3. **Library / palette** — collapsible.
4. **Document actions** (save, export, projects) — header, never crowding canvas.
5. **Status and hints** — a persistent low-emphasis strip.

### Library — `/library/*`

1. **Tabs** — Designs · Plans · Builds.
2. **Grid** of saved work, newest first.
3. **Empty state** — a designed invitation into the matching tool, not a blank box.
4. **Search / filter** — appears once a tab exceeds ~12 items.

## User Flows

### New visitor → first result

1. Lands on `/` from decoraityourspace.com.
2. Sees the upload affordance and a one-line promise.
3. Selects or captures a photo → routes to `/design`, photo already in place.
4. Defaults are pre-selected; **Generate is live immediately**.
   - Adjusts style/items → stays on `/design`
   - Taps Generate → **decision point: signed in?**
     - Signed in, quota available → `/result`, wait state begins
     - Signed in, no quota → `/upgrade`, with the blocked action named
     - **Not signed in** → `?auth=signup` overlay — **Sign Up tab, not Sign In**
       (today `showAuthModal('login')` at [main.js:646](../../src/main.js) shows new
       users a login form for an account they don't have). On success the overlay
       closes and generation resumes automatically. The photo and every setting
       survive.
5. Wait state: original photo held on screen, skeleton at final dimensions, staged
   progress copy.
6. Arrives at `/result`.
7. Refines → new entry in history, previous results preserved.

### Returning subscriber → past work

1. Account menu → Library → `/library/designs`.
2. Selects a design → `/result/:id` with full context restored.
3. Continues refining from there.

### Redesign → Floor Plan (the graduation path)

1. On `/result`, a contextual invitation to plan the space properly.
2. Workspace switcher or that invitation → `/plan`.
3. Free tools work; saving and premium tools gate to `/upgrade`.
4. Switching workspaces **never discards** unsaved work without a confirm.

### Hitting a gate

1. User attempts a gated action.
2. `/upgrade` states plainly: what was blocked, what it costs, what happens next.
3. On success, the user returns to the exact action they were attempting and it
   proceeds. Payment must never dead-end on a generic success screen.

## Naming Conventions

The current interface uses multiple words for single concepts. Resolved here; the
build enforces one word each.

| Concept | Label in UI | Notes |
| --- | --- | --- |
| AI room redesign | **Redesign** | Verb, matches user intent. Replaces the unnamed default screen |
| Floor plan tool | **Floor Plan** | Today it is "Layout Editor" in the header ([index.html:26](../../index.html)) and "Floor Plan Editor" on its own screen ([index.html:524](../../index.html)). "Floor Plan" wins — it is what users call it |
| Woodworking tool | **Woodworking** | Already consistent |
| A generated image | **Design** | Not "render", not "variant", not "image" |
| A saved floor plan | **Plan** | Replaces "layout" everywhere user-facing. `.decorait-layout.json` stays for file compat |
| A saved woodworking project | **Build** | Replaces "project"; "Projects" is too generic across three tools |
| Generation currency | **Tokens** | The API says `credits` (41 uses in server.js), the UI says `tokens` (47 uses in main.js), the subscription badge says `generations`. **Tokens** is user-facing everywhere; `credits` stays internal to the API |
| Subscriber monthly allowance | **Monthly generations** | Distinct from tokens — and the distinction must be stated wherever both appear |
| Saved work area | **Library** | Replaces "My Designs" / "My Layouts" / "Projects" |
| Editing a result | **Refine** | Not "regenerate" — refine implies control, regenerate implies a dice roll |
| Paid tier | **Subscription** | Never "premium plan"; "premium" is reserved for the model |
| High-fidelity model | **Premium model** | Only use of "premium" |

## Component Reuse Map

| Component | Used on | Behavior differences |
| --- | --- | --- |
| App shell (header + switcher) | All routes | Editors compress it; generation dims it |
| Bottom tab bar | All routes, mobile only | Hidden during generation and inside editor canvases |
| Sheet / modal primitive | Everywhere | Bottom sheet < 640px, centered dialog above |
| Sticky action bar | `/design`, `/result`, editors on mobile | Holds each view's single primary action |
| Card grid | `/library/*` | Same grid, three content types, one empty-state pattern |
| Empty state | Library tabs, cut list, history | Illustration + one line + action into the relevant tool |
| Wait state | `/result`, `/upgrade` checkout, 3D room generation | Same skeleton and progress language throughout |
| Compare control | `/result`, `/result/:id`, 3D room modal | Identical drag/hold behavior in all three |
| Property panel | `/plan`, `/build` | Same structure, different fields |
| Toast | All routes | Currently editor-only; promoted to shared |
| Gate / upgrade prompt | Any gated action | Always names the blocked action |

## Content Growth Plan

- **Designs** grow fastest — one per generation per subscriber. Library paginates
  at 24 with infinite scroll, newest first; search appears past 12 items. The
  `/result` history strip is session-scoped and capped, not a growth surface.
- **Plans and Builds** grow slowly and are user-named. A flat grid holds for a long
  time; name search is enough.
- **Styles and room items** are hardcoded arrays in `main.js`
  ([main.js:219](../../src/main.js)) — 3 styles per room type, 20 items. Fixed
  content. The configure view must not assume this list stays short: the layout
  should tolerate ~40 items without restructuring.
- **Furniture library** (30 SVGs) is fixed and already categorized with search.
- **Board library** in Woodworking is category-tabbed and fixed.

## URL Strategy

- **Pattern**: `/<workspace>` and `/<workspace>/:id`. Lowercase, hyphenated, no
  trailing slash.
- **Dynamic segments**: `:id` is the server-generated UUID for designs, plans, and
  builds. No slugs — these are private objects, not content.
- **Query parameters**:
  - `?auth=signin|signup` — overlay state, preserves the view behind it
  - `?tab=` within `/library` is expressed as a path segment instead, for
    linkability
  - Stripe and OAuth return params continue to be stripped via `replaceState`
    after being consumed
- **Never in URLs**: email addresses, tokens, session identifiers, or image data.
- **Redirects**: `/library` → `/library/designs`; `/design` without a photo in
  state → `/`; unknown paths → `/`.
- **Analytics**: each route change emits a pageview so the funnel
  (`/` → `/design` → `/result`) finally becomes measurable. This is the mechanism
  that turns "I suspect users won't convert" into something observable.

## Known Gaps (deliberately not solved here)

1. **Public sharing does not exist and cannot be added in scope.** A homeowner
   deciding on furniture decides with a partner, and there is no link to send.
   Requires a public share endpoint plus a Supabase RLS policy — server work the
   brief excludes. **Strongest post-flow recommendation.**
2. **Free users' results are ephemeral.** Nothing is persisted; a refresh loses the
   design. Mitigated by routing (back/forward survive within the session) but not
   solved. A localStorage cache of the last result would close most of this
   cheaply — worth considering during the build.
3. **`/result/:id` requires an active subscription**, so lapsed subscribers lose
   access to their own saved designs. A product-policy question, not a design one.
