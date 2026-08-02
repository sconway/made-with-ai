# Design Brief: DecorAIt App Overhaul

> Scope: the application at `decorai/` (index.html, src/). The marketing site at
> decoraityourspace.com is a **constraint**, not a deliverable.

---

## Problem

Someone is standing in their living room with a phone. They are about to spend
real money — a sofa, a rug, a weekend of painting — and they cannot picture the
result. Mood boards don't help because they show *someone else's* room. Measuring
and modeling is more work than the decision deserves. So they either buy and hope,
or they stall for months.

They arrive at DecorAIt to lower the risk of an expensive, hard-to-reverse choice.
They want to see **their actual room**, changed, well enough to believe it.

Today the app makes them work before it gives them anything. They land on a grey
dashed box with no indication of what they'll get. They answer four screens of
questions. Then a spinner sits for up to a minute. Then — if they're new — they're
asked to sign into an account they don't have, on a form defaulted to the wrong tab.

And underneath all of it, the interface itself does not look like it was made by
someone with taste. For a product whose entire proposition is *trust my eye*, that
is the deepest problem in the list.

## Solution

An app that earns belief in the first thirty seconds and holds it.

The user uploads a photo and reaches a real, generated result with as little
configuration as possible. Comparison against the original is immediate and
tactile. Refinement is one sentence away, so the first result is a starting point
rather than a verdict. The minute of generation is designed, not endured. And the
whole surface — type, color, spacing, motion, states — is crafted well enough that
the $19.99/mo price reads as obvious before a single feature is explained.

The floor plan and woodworking editors stop competing for attention as header
peers and become tools the user graduates into once they're invested.

## Experience Principles

1. **Proof before configuration** — Every question asked before the first
   generated image must earn its place or be given a default. The user's belief
   is purchased with a result, not with a form. When in doubt, decide for them and
   let them change it after.

2. **Warm surface, precise mechanics** — The palette, materials, and display type
   are warm and editorial; the execution is software-craft. Warmth is never an
   excuse for a soft edge, a missing hover state, an unhandled empty state, or a
   contrast failure. This resolves the central tension: warm products are usually
   imprecise, precise tools are usually cold. This one is both.

3. **One product, two densities** — The consumer flow breathes: large targets,
   generous rhythm, one decision per view. The editors compress: tight controls,
   monospaced numerics, information-dense panels. Same tokens, same voice,
   different rhythm — so the suite reads as one product without pretending a CAD
   tool and a photo wizard want the same layout.

## Aesthetic Direction

- **Philosophy**: **Warm Precision.** Warm paper neutrals and an editorial serif
  display face, executed with the spacing discipline, state completeness, and
  restrained motion of a professional software tool. Materials from a design
  magazine; mechanics from a code editor.

- **Tone**: Confident and calm. Quietly expensive. Never chirpy, never salesy,
  never apologetic. The app should feel like it knows what it's doing — because
  the user is trusting its taste with their money.

- **Reference points**:
  - **Linear, Vercel, Raycast** — the execution standard. Immaculate states, tight
    spacing logic, fast subtle motion, keyboard respect, nothing unconsidered.
  - **decoraityourspace.com** — the brand source. Indigo, Instrument Serif italic
    for emphasis, warm gradient washes. The app must feel like the same company.
  - **Native iOS patterns** (sheets, sticky action bars, spring transitions) — for
    mobile form, executed with Linear's precision rather than playful bounce.

- **Anti-references**:
  - **Airbnb / Pinterest consumer-generic** — soft rounded cards, friendly
    illustration, stock photography warmth. This is closest to what exists today
    and is what "looks AI-built" means in practice.
  - **Kinfolk / Cereal editorial-slow** — the aesthetic is borrowed, the pacing is
    not. This is a tool, not a magazine; generous does not mean sluggish.
  - **Figma / Blender pro-tool coldness** — the editors must not turn the app into
    something a homeowner feels unqualified to open.
  - **Stock Tailwind** — `#6366f1` used raw, default shadows, default radii. Indigo
    stays, but it must be tuned rather than inherited.

## Existing Patterns

The codebase already has a real token layer. This brief **extends** it; it does not
start over. Full audit:

- **Typography**: Inter 300–700 via Google Fonts, single family throughout. Scale
  runs `--text-min` (14px, enforced app minimum) through `--text-3xl` (30px), with
  `--leading-tight/normal/relaxed` and four weight tokens. Letter-spacing already
  tightens at display sizes (a deliberate Emil Kowalski move, per code comment at
  [styles.css:200](../../src/styles.css)).
  **Gap**: no serif, no monospace. The marketing site loads Instrument Serif and
  JetBrains Mono; the app loads neither.

- **Colors**: 10-step `--gray-*` ramp (cool-tinted, `#fafaf9`→`#18181b`), 8-step
  `--brand-*` indigo (`#6366f1` = stock Tailwind indigo-500), `--accent-500`
  warm clay `#b45309` **defined but essentially unused**, plus success/error/
  warning. Semantic layer already exists: `--surface`, `--surface-raised`,
  `--surface-sunken`, `--surface-overlay`, `--text-primary/secondary/tertiary/
  on-brand/disabled`, `--border-subtle/default/strong/focus`.
  **Gap**: grays are cool where the direction calls for warm. No dark palette.

- **Spacing**: `--space-1` (4px) through `--space-16` (64px) on a 4px base.
  Sound; keep.

- **Radii**: `--radius-sm` 6px, `-md` 10px, `-lg` 14px, `-xl` 20px, `-pill` 999px.
  Marketing site uses 10px on buttons — consistent with `--radius-md`.

- **Shadows**: five layered steps `--shadow-xs`→`-xl` plus `--shadow-focus`, all
  built on cool slate `rgba(15, 23, 42, …)`. **Gap**: cool shadow tint fights a
  warm palette; needs re-tinting.

- **Motion**: `--ease-out` (0.16, 1, 0.3, 1), `--ease-in-out`, `--ease-spring`
  (overshoot for press/pop), durations 120/180/280ms. Genuinely good and matches
  the Linear reference. Keep and use far more widely.

- **Z-index / modal viewport**: `--z-sticky/overlay/modal/toast` and a set of
  `--modal-*` tokens using `dvh`/`svh` and `env(safe-area-inset-*)`. Mobile
  safe-area handling is already partly solved — build on it.

- **Compatibility constraint**: ~20 backwards-compat aliases at
  [styles.css:126](../../src/styles.css) (`--primary-color`, `--text-color`,
  `--border-color`, `--card-bg`, `--primary`, `--secondary`, …) are consumed
  widely, especially by the layout editor. The token rewrite must either preserve
  this alias layer or update every consumer in the same pass. Do not silently drop
  it.

- **Icons**: feather-icons via unpkg CDN, `data-feather` attributes re-scanned
  after DOM writes. Plus hand-authored inline SVGs in main.js for sofa/chairs/bed/
  rug/plants/pillows.

- **Stack reality**: vanilla JS + Vite, no framework, no CSS tooling, no component
  library, no Storybook. One 7,839-line stylesheet plus a separate 17KB
  `src/woodworking/styles.css`. three.js for the 3D editor. There is no component
  abstraction — "components" are CSS class conventions, and the brief treats them
  as such.

## Component Inventory

| Component | Status | Notes |
| --- | --- | --- |
| Design token layer | Modify | Warm-shift neutrals, re-tint shadows, add serif + mono, define dark palette, preserve alias layer |
| Header / nav | Modify | Stop treating three products as peers; workspace switcher instead of parallel buttons |
| Wizard progress | Modify | Survives compression; must reflect fewer steps |
| Upload drop zone | Modify | First paint — currently a bare dashed box with no proof of value |
| Room type / approach / items / style selectors | Modify | Compressed into fewer views with defaults per Principle 1 |
| Generation wait state | **New** | Highest-leverage single moment; currently a spinner and one sentence |
| Results / design card | Modify | Before-after comparison becomes the hero interaction |
| Compare control | Modify | Marketing site uses a drag divider — align the app to it |
| Refinement area | Modify | Chips + textarea exist; needs to read as the primary next action, not a footer |
| Design history strip | Modify | Exists, visually undernourished |
| Auth modal | Modify | **Fix**: opens on Sign In for new users at the generate gate ([main.js:646](../../src/main.js)) |
| Token / subscribe modals | Modify | Money moments; currently stock modals |
| Alert / confirm modals | Modify | Generic; become the base sheet primitive |
| Mobile sheet primitive | **New** | Bottom-sheet base replacing centered modals on mobile — the core of "native app feel" |
| Sticky mobile action bar | **New** | Replaces inline wizard nav on phone |
| Toast / status | Modify | Export toast exists in layout editor only; promote to shared |
| Empty states | **New** | My Designs, My Layouts, woodworking projects, cut list all lack designed empties |
| Skeleton / loading | **New** | Only a spinner exists today |
| Floor plan editor chrome | Modify | Tool density; neutral canvas; mono numerics |
| Woodworking editor chrome | Modify | Same, plus cut list as a real data table |
| Feedback FAB | Modify | Currently floats over content with no scroll awareness |

## Key Interactions

- **Upload → first result.** Selecting a photo transitions into the configure
  view with the image already in place — no flash, no reflow. Defaults are
  pre-selected so the primary action is live immediately. The photo is never
  re-uploaded or re-rendered between steps.

- **The wait.** On generate, the original photo stays on screen and a skeleton
  occupies the result's final dimensions so nothing jumps on arrival. Progress
  copy advances through real phases rather than looping. The generated image
  fades in over the skeleton; layout does not shift. `prefers-reduced-motion`
  drops the transition, not the information.

- **Compare.** Before/after is direct manipulation — drag or press-and-hold to
  reveal the original, matching the divider metaphor on the marketing site. Never
  a checkbox. Works with touch, mouse, and keyboard (arrow keys move the divider).

- **Refine.** A chip tap populates the textarea rather than firing immediately, so
  the user can edit before committing. Regenerating pushes a new entry into the
  history strip; previous results stay reachable and are never destroyed.

- **The paywall.** When a gate is hit, the modal states plainly what was blocked,
  what it costs, and what happens next. New users see Sign Up; returning users see
  Sign In. The user's in-progress work survives auth and resumes where they left.

- **Mobile transitions.** Views advance with a spring-eased horizontal slide;
  modals rise as bottom sheets with a drag-to-dismiss affordance; the primary
  action lives in a sticky bar above the safe-area inset and never scrolls away.

- **Editor selection.** Selecting an object reveals its properties without
  displacing the canvas. Numeric fields are monospaced, arrow-key steppable, and
  never lose focus mid-edit.

## Responsive Behavior

- **< 640px (primary target for the redesign flow).** Single column. Centered
  modals become bottom sheets. Wizard navigation becomes a sticky bottom bar.
  Touch targets ≥ 44px. Hover-only affordances get tap equivalents. Safe-area
  insets respected top and bottom. Header compresses to logo + a single menu.

- **640–1024px.** Two-column where content supports it. Results and comparison get
  more room. Editors become usable but are not the priority.

- **> 1024px.** Editors get their full three-panel layout. The redesign flow
  centers within a max-width measure rather than stretching — an 1800px-wide row
  of style options is a failure of restraint.

- **Behavior changes, not just size**: modal→sheet, inline nav→sticky bar,
  hover tooltip→tap popover, side panels→collapsible drawers, drag-compare→
  press-and-hold on touch.

- **Editors on phone** are honest rather than pretend: a clear "best on a larger
  screen" state instead of a broken CAD interface.

## Accessibility Requirements

**WCAG 2.1 AA, enforced** — this constrains the warm palette deliberately, since
warm mid-grays on cream fail contrast easily. Designing within the constraint
beats retrofitting.

- Body and UI text ≥ **4.5:1**; large text (≥18.66px bold / 24px) ≥ **3:1**.
- Non-text UI — borders, icons, focus rings, form boundaries, chart-like editor
  elements — ≥ **3:1**.
- Every interactive element has a **visible focus indicator** meeting 3:1 against
  its adjacent background. No `outline: none` without a designed replacement.
- **Touch targets ≥ 44×44px** on mobile, including editor tool buttons.
- Full **keyboard navigation** through the redesign flow: tab order follows visual
  order, modals and sheets trap focus and restore it on close, Escape closes.
- **`prefers-reduced-motion`** honored — transforms and parallax removed, opacity
  and information preserved.
- Generation progress and quota changes announced via **`aria-live`** regions.
- Form errors tied to inputs with `aria-describedby`; never color alone.
- Color is never the sole carrier of meaning (selected states need a second cue).

## Out of Scope

- **The marketing site.** decoraityourspace.com is a constraint and a brand source;
  it is not modified. If the app's tokens end up better than the site's, that's a
  follow-up, not this work.
- **Dark mode delivery.** The dark palette is defined in tokens; it is **not**
  wired to a toggle, not tested, and not shipped.
- **Backend, API, prompts, Stripe, Supabase.** No server-side changes. Pricing,
  quotas, and model behavior stay as they are.
- **New product features.** No new capabilities — this is a design overhaul of what
  exists. Compressing the wizard is a restructure of existing steps, not new
  functionality.
- **The AI output quality itself.** Prompt engineering is untouched.
- **Editor functional behavior.** Snapping, geometry, undo/redo, cut optimization,
  and export logic are preserved exactly. Their *chrome* is redesigned; their
  *mechanics* are not.
- **Framework migration.** Stays vanilla JS + Vite. No React, no Tailwind, no
  build-time CSS tooling.
- **Copywriting beyond UI microcopy.** Button labels, empty states, error messages,
  and wait-state copy are in scope. Marketing narrative is not.
- **Accessibility of the canvas interiors.** SVG floor plan internals and the
  three.js scene get keyboard-reachable controls, but full screen-reader parity
  with a drawing surface is not attempted.
