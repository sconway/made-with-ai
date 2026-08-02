# Design Tokens — Warm Precision

**Token file:** [`src/tokens.css`](../../src/tokens.css) (the deliverable; this
document records derivation, deviations, and the migration audit).

**Philosophy:** Warm Precision — materials from a design magazine, mechanics from a
code editor. Derived from [DESIGN_BRIEF.md](./DESIGN_BRIEF.md).

---

## Derivation

| Decision | Value | Why |
| --- | --- | --- |
| Neutral ramp | Warm paper `#fdfcfa` → warm ink `#14120f` | Replaces the cool slate-tinted `--gray-*`. The single highest-impact change: warm neutrals are what separate "editorial" from "generic SaaS" |
| Brand | Indigo `#6366f1` / `#4f46e5`, **unchanged** | Exact match to decoraityourspace.com so buttons are identical across the marketing → app handoff. Only tints 50–300 were re-mixed warm |
| Secondary accent | Clay `#c2662e` | Promotes the previously-defined-but-unused `--accent-500`. Editorial emphasis and affirmations — deliberately *not* a second CTA color |
| Display face | Instrument Serif | Already loaded by the marketing site, absent from the app. Closes the most visible brand gap |
| Mono | JetBrains Mono | Dimensions, coordinates, cut lists, token counts. Tabular numerals so values don't jitter as they update |
| Spacing | 4px base, unchanged | The existing scale was sound |
| Shadows | Re-tinted to warm ink `rgba(32,30,26,…)` | Cool shadows on warm surfaces are the most common way a warm palette turns muddy |
| Motion | Existing easings preserved | Already well-chosen and consistent with the Linear reference |

## Accessibility

Every text token is contrast-verified against its intended background (WCAG 2.1 AA
— 4.5:1 body, 3:1 large text and non-text UI):

| Token | On paper `#fdfcfa` | Verdict |
| --- | --- | --- |
| `--color-text-primary` (`#201e1a`) | **16.1:1** | ✓ AAA |
| `--color-text-secondary` (`#4f4940`) | **8.7:1** | ✓ AAA |
| `--color-text-tertiary` (`#6b6355`) | **5.8:1** | ✓ AA |
| `--color-text-placeholder` (`#6b6355`) | **5.8:1** | ✓ AA |
| `--color-text-accent` (clay `#a04f20`) | **5.6:1** | ✓ AA |
| `--warm-500` (`#8a8171`) | 3.8:1 | ✗ text · ✓ non-text UI only |
| White on `--color-accent-primary` | **6.3:1** | ✓ AA |

`--warm-500` is explicitly fenced off from text use in the file. Placeholder text is
assigned `--warm-600` rather than `--warm-500` — using the lighter value is the
usual way placeholder text quietly fails AA.

## Deviations from the design-tokens skill

1. **`prefers-color-scheme` is written but commented out.** The skill instructs to
   always ship the media query. Doing so would flip the theme for every visitor
   whose OS is set to dark, across ~8,000 lines of CSS never tested on a dark
   background — shipping a broken experience to roughly half of all users. This
   contradicts the Phase 1 decision ("token-ready, ship light only"). The dark
   palette is complete under `[data-theme="dark"]`; enabling it is a documented
   4-step procedure in the file header.

2. **A compatibility layer exists that the skill's template doesn't describe.**
   Layer 3 remaps ~60 existing token names onto the new primitives. Without it the
   layout editor breaks; with it, the entire existing stylesheet inherits the new
   palette with no edits.

3. **Density tokens added.** `[data-density="tool"]` implements Principle 3 ("one
   product, two densities"). A `pointer: coarse` guard restores 44px targets so
   compressing the editors never breaks touch accessibility.

## Verification

Token sheet injected into the running app after `styles.css` (cascade order
identical to the eventual wiring). Confirmed live:

- `--surface` → `#fdfcfa`, body background `rgb(253,252,250)` — warm shift lands
- `--card-bg`, `--text-color`, `--border-color` resolve through the compat layer
- `--secondary` → clay `#c2662e`, replacing an off-system `#a855f7` purple
- `--primary-color` → `#4f46e5`, unchanged as intended
- `--font-family-display` → Instrument Serif, loading correctly

## ⚠ Migration Audit — the tokens alone do NOT re-skin the app

Measured across the codebase:

| File | Hardcoded colors | `var(--…)` usages | Tokenized |
| --- | --- | --- | --- |
| `src/styles.css` | 436 hex + 136 rgb(a) = **572** | 785 | ~58% |
| `src/woodworking/styles.css` | **117** | **0** | **0%** |
| `src/floorPlanEditor.js` | **130** (SVG fills/strokes) | — | 0% |
| `index.html` | 5 (SVG grid patterns) | — | 0% |
| **Total** | **~824 hardcoded color values** | | |

The most frequent hardcoded values are stock **Tailwind cool grays** — `#e5e7eb`
(24), `#6b7280` (24), `#1f2937` (15), `#374151` (14), `#d1d5db` (12), `#9ca3af`
(11), `#f9fafb` (10), `#f3f4f6` (9) — plus raw `#6366f1` (17) and `#4f46e5` (12)
bypassing the brand tokens entirely.

**Consequence:** repointing tokens gets roughly 58% of the main stylesheet and 0%
of the woodworking editor. Left unmigrated, the result is a *half-warm, half-cool*
interface — measurably worse than today's consistent-if-generic cool, because
mixed color temperature reads as broken rather than plain.

**This is now the single largest work item in the build**, and Phase 5 must
sequence it before any component polish. The woodworking editor is the worst case:
117 hardcoded colors and not one token reference — it needs a full pass, not a
migration.
