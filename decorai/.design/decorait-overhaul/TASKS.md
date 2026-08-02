# Build Tasks: DecorAIt Overhaul

Generated from: [DESIGN_BRIEF.md](./DESIGN_BRIEF.md) ·
[INFORMATION_ARCHITECTURE.md](./INFORMATION_ARCHITECTURE.md) ·
[DESIGN_TOKENS.md](./DESIGN_TOKENS.md)
Date: 2026-08-01

**Aesthetic philosophy: Warm Precision** — materials from a design magazine,
mechanics from a code editor. Established in F1 and F5; every task after that
inherits it.

**Sizing:** S = under an hour · M = a session · L = a full session, high care.

---

## Ordering rationale

Three forces, resolved in this order:

1. **Risk first.** The ~824 hardcoded colors (F2–F4) are the largest uncertainty in
   the project. Shipping tokens without them produces a half-warm interface that
   looks *broken* rather than plain — worse than doing nothing. This surfaces
   before anything is built on top of it.
2. **Dependencies first.** Tokens → migration → shell → router, before any view.
3. **Visual priority early.** F1 + F2 together make the primary flow visibly land,
   so the direction can be validated before the long tail of migration (F3–F4) is
   spent on the editors.

**F1 and F2 must land together.** F1 alone leaves the app visibly mixed.

---

## Foundation

- [x] **F1 · Wire the token system** _(S)_ ✅ — Link `src/tokens.css` before
  `styles.css` in `index.html`, delete the superseded `:root` block at
  [styles.css:4–150](../../src/styles.css), and add Instrument Serif + JetBrains
  Mono to the font link. Done when the app renders warm, the layout editor still
  opens, and no token resolves to `unset`. **Establishes Warm Precision.**
  _Modifies existing tokens; compat layer preserved._

- [x] **F2 · Migrate `styles.css` colors to tokens** _(L)_ ✅ — Replace all 572
  hardcoded values (436 hex + 136 rgba) with semantic tokens. Build an explicit
  mapping table first (`#e5e7eb`→`--color-border-subtle`, `#6b7280`→
  `--color-text-tertiary`, `#1f2937`→`--color-text-primary`, `#6366f1`/`#4f46e5`→
  `--color-accent-primary`, …) and apply it mechanically, then review by eye —
  ~40 values are contextual and will need judgment. Done when `grep -c '#[0-9a-f]'`
  on `styles.css` returns only intentional exceptions. **Highest-risk task.**
  _Depends on: F1._

- [ ] **F3 · Tokenize the woodworking editor** _(L)_ — `src/woodworking/styles.css`
  has 117 hardcoded colors and **zero** `var()` references. Full pass, not a
  migration. Apply `[data-density="tool"]` and route all numerics through
  `--font-family-mono` with tabular figures. _Depends on: F1._

- [ ] **F4 · Tokenize editor canvas colors** _(M)_ — 130 hardcoded hex values in
  `floorPlanEditor.js` (SVG fills/strokes) plus the 5 grid-pattern colors in
  `index.html` (`#e8e8e8`, `#d0d0d0`, `#bbb`). Read from CSS custom properties via
  `getComputedStyle` so the canvas follows the theme. Keep the canvas **neutral**,
  not warm — drawings must read accurately (Principle 3). _Depends on: F1._

- [x] **F5 · Typographic system** _(M)_ ✅ — Instrument Serif for display headings
  (app title, view headings, result headline), Inter for all UI, JetBrains Mono
  with tabular numerals for dimensions, coordinates, cut lists, token counts, and
  quota displays. Apply the new 36/48/64px display sizes — nothing in the app
  currently reads as display type. _Depends on: F1._

- [x] **F6 · Client-side router** _(L)_ — History API routing per the IA:
  `/`, `/design`, `/result`, `/result/:id`, `/plan`, `/plan/:id`, `/build`,
  `/build/:id`, `/library/:tab`, `/upgrade`. Replace the 121 `.hidden` toggles for
  top-level views with route-driven rendering (leave modal toggles alone). Handle
  `popstate`, emit a GA pageview per route change, and guard `/design` against
  direct hits with no photo. Server catch-all already exists at
  [server.js:2444](../../server.js) — no server change needed. **Unblocks
  measurable funnel analytics.** _New._

- [x] **F7 · App shell + workspace switcher** _(M)_ — Header with Redesign as home
  and a switcher for Floor Plan / Woodworking (they stop being peer buttons).
  Mobile: persistent bottom tab bar above the safe-area inset, hidden during
  generation and inside editor canvases. Utility items (Library, Upgrade, account,
  tokens) move opposite the switcher. _Depends on: F6. Modifies header._

- [x] **F8 · Sheet primitive** _(M)_ — One overlay component: bottom sheet below
  640px, centered dialog above. Drag-to-dismiss, focus trap, focus restore on
  close, Escape to close, `--easing-sheet` motion, safe-area padding. Retrofit the
  12 existing modals onto it. **Core of the native-app-feel directive.** _New;
  replaces per-modal CSS._

---

## Core UI

- [ ] **C1 · Home / upload** _(M)_ — `/`. Currently a bare dashed box with no proof
  of value for traffic arriving cold from the marketing site. Add a one-line
  promise and a sample transformation alongside the upload affordance. Drag-over,
  invalid-file, and camera-unavailable states. _Modifies `.upload-container`._

- [x] **C2 · Configure view** _(L)_ — `/design`. Collapse room type + approach +
  items + style into one scrollable view with defaults pre-selected so Generate is
  live the instant the photo lands. Sticky bottom action bar on mobile. Must
  tolerate ~40 items without restructuring. **Largest `main.js` change; touches
  the 4-pane wizard logic.** _Depends on: F7, F8._

- [x] **C3 · Generation wait state** _(M)_ — Original photo held on screen,
  skeleton at the result's final dimensions so nothing jumps on arrival, staged
  progress copy reflecting real phases, `aria-live` announcements. **Highest-
  leverage single moment in the app** — currently a spinner and one sentence.
  _New._

- [x] **C4 · Result view + compare** _(L)_ — `/result`. Before/after as direct
  manipulation: drag divider on pointer, press-and-hold on touch, arrow keys for
  keyboard — matching the divider metaphor users just saw on the marketing site.
  Replaces the current checkbox reveal. _Modifies design card / reveal._

- [ ] **C5 · Refinement** _(M)_ — Elevate from footer block to the primary next
  action. Chips populate the textarea rather than firing immediately. History strip
  gets real visual weight; previous results stay reachable. _Modifies._

- [ ] **C6 · Library** _(M)_ — `/library/{designs,plans,builds}`. Replaces three
  separate modals with one view: shared grid, shared empty state, search past 12
  items. _Depends on: F6, F7. Consolidates 3 existing modals._

- [ ] **C7 · Upgrade + paywall moments** _(M)_ — `/upgrade` as a real URL so the
  marketing site can link to pricing. Every gate names the blocked action, its
  cost, and what happens next; on success the user returns to the exact action they
  attempted. Covers token, subscribe, and quota-exceeded paths. _Modifies 2 modals._

- [x] **C8 · Auth overlay** _(M)_ — `?auth=signin|signup` overlaying the current
  view, never navigating. **Fix: new users at the generate gate must see Sign Up,
  not Sign In** ([main.js:646](../../src/main.js)). Photo and every setting survive
  auth, and generation resumes automatically on success. _Modifies auth modal._

---

## Interactions & States

- [ ] **I1 · Empty states** _(M)_ — Library tabs (×3), cut list, history strip,
  furniture search with no results, saved plans. Illustration + one line + action
  into the relevant tool. Covers: empty, no-results, signed-out. _New._

- [ ] **I2 · Loading & skeleton system** _(S)_ — Shared skeleton matching final
  content dimensions. Covers: initial load, image loading, library fetch, editor
  restore. Replaces the spinner-only approach. _New._

- [ ] **I3 · Toast system** _(S)_ — Promote the editor-only toast to a shared
  component. Covers: success, error, undo affordance. _Modifies._

- [ ] **I4 · Focus & keyboard pass** _(M)_ — Visible focus indicators at 3:1 on
  every interactive element (no bare `outline: none`), logical tab order, focus
  trap and restore in sheets, Escape to close, arrow-key support on the compare
  divider and editor numeric fields. _Cross-cutting._

- [ ] **I5 · Motion pass** _(M)_ — Apply the existing easings consistently: spring
  pane transitions, `--easing-sheet` for sheets, hover/press feedback on every
  control. Verify `prefers-reduced-motion` removes movement without removing
  information. _Cross-cutting._

---

## Editors

- [ ] **E1 · Floor plan chrome** _(L)_ — `[data-density="tool"]`, mono numerics for
  dimensions/coordinates/zoom, restyled toolbars, properties panel, and status bar.
  **Preserve all mechanics exactly** — snapping, geometry, undo/redo, export.
  _Depends on: F1, F4, F5._

- [ ] **E2 · Woodworking chrome** _(M)_ — Same density treatment; cut list becomes a
  real data table with tabular figures; board library and modals onto the shared
  sheet primitive. **Preserve cut optimization logic exactly.** _Depends on: F3, F8._

---

## Responsive & Polish

- [ ] **R1 · Mobile native-feel pass** _(L)_ — Below 640px: sheets not modals,
  sticky action bars, 44px minimum targets, tap equivalents for every hover
  affordance, safe-area insets top and bottom, spring pane transitions, momentum
  scroll. **The primary success criterion for the redesign flow.** _Depends on:
  F7, F8, C1–C5._

- [ ] **R2 · Editor responsive honesty** _(S)_ — Editors get a designed "best on a
  larger screen" state below 640px instead of a broken CAD interface. Verify
  `pointer: coarse` restores 44px targets in tool density. _Depends on: E1, E2._

- [ ] **R3 · Accessibility pass** _(M)_ — Verify AA across every surface: contrast
  (tokens are pre-verified, but check composed backgrounds), touch targets, keyboard
  paths, `aria-live` on generation progress and quota changes, form errors tied via
  `aria-describedby`, no color-only meaning. _Cross-cutting._

- [x] **R4 · Wide-screen restraint** _(S)_ — Apply `--max-width-page`; the app
  currently stretches edge-to-edge. An 1800px row of style options is a failure of
  restraint. _Depends on: F7._

---

## Review

- [ ] **Design review** — Run `/design-review` against the brief. Captures
  screenshots at 375 / 768 / 1280 and produces `DESIGN_REVIEW.md`.

---

## Recommended build order

**Slice 1 — validate the direction (F1 + F2 + F5).** Ship the token wiring, main
stylesheet migration, and typography together. This is the smallest set that makes
the aesthetic visible and judgeable. **Stop and look before continuing.**

**Slice 2 — structure (F6 + F7 + F8).** Router, shell, sheets. Nothing user-facing
looks dramatically different, but every later task depends on these.

**Slice 3 — the money path (C1 → C2 → C3 → C4 → C5 + C8).** The flow that decides
whether anyone pays.

**Slice 4 — the rest of the surface (C6, C7, I1–I5).**

**Slice 5 — editors (F3, F4, E1, E2).** Deliberately last: highest volume of
mechanical migration, lowest conversion impact. If the project runs out of energy,
this is the honest place to pause — the editors keep working throughout, they just
keep their current chrome longer.

**Slice 6 — polish (R1–R4) + review.**

---

## Not in this list (and why)

- **Public sharing of results.** Needs a server endpoint and a Supabase RLS policy;
  the brief scopes out server work. Highest-value follow-up — a homeowner deciding
  on furniture decides with a partner, and there is no link to send.
- **localStorage cache for free users' results.** Small and genuinely useful (a
  refresh currently destroys the design). Worth raising during Slice 3 as a scope
  question rather than assuming it in.
- **Dark mode delivery.** Palette exists; wiring, auditing, and testing do not.
- **Marketing site changes.** Constraint, not deliverable.
