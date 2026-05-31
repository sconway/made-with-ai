---
name: emil-kowalski-design
description: Apply Emil Kowalski's design principles when building or reviewing UI on this static HTML/SCSS marketing site — motion, micro-interactions, typography, spacing, and polish. Use when editing index.html or styles.scss, adding sections/components, animations, transitions, or when the user asks to make something "feel better," "more polished," or references Emil Kowalski / Vercel / Linear / Rauno aesthetic.
---

# Emil Kowalski design principles

Apply these when designing or reviewing UI in this project. Emil Kowalski is known for craft-focused, motion-rich, restrained interface design (Sonner, Vaul, work at Linear/Vercel-adjacent companies).

**Project stack:** static HTML + SCSS (compiled with `sass --watch`), no JS framework. All motion is CSS-driven — `transition`, `@keyframes`, `cubic-bezier`, and `prefers-reduced-motion`. There is no Framer Motion or React here; translate spring intuitions to easing curves.

## Motion (CSS)

- **Spring-feeling easing.** Use custom `cubic-bezier` to approximate spring snap, not `ease` / `linear`. Good defaults:
  - Standard UI: `cubic-bezier(0.32, 0.72, 0, 1)` (Vaul's curve)
  - Snappy/playful: `cubic-bezier(0.34, 1.56, 0.64, 1)` (slight overshoot)
- **Short durations.** 150–250ms for most UI transitions. Anything over 400ms feels sluggish unless it's a deliberate hero moment.
- **Animate transform and opacity only.** Avoid animating `width`, `height`, `top`, `left` — use `transform: translate / scale` instead. Layout-property animations cause reflow.
- **Origin matters.** Use `transform-origin` deliberately so things scale/grow from where they belong.
- **Stagger entrances** with `animation-delay` increments of ~30–50ms across siblings (or `:nth-child` selectors).
- **Always respect `prefers-reduced-motion`.** Wrap non-essential animations in `@media (prefers-reduced-motion: no-preference) { ... }`.

## Micro-interactions

- **Every interactive element should respond.** Define `:hover`, `:focus-visible`, and `:active` for every link/button.
- **Press states should feel physical.** `transform: scale(0.97)` on `:active` for buttons.
- **Use `:focus-visible`, not `:focus`** — keyboard users get rings, mouse users don't.
- **`cursor: pointer`** only on clickable things; never on disabled elements.

## Typography

- **Tight letter-spacing on large text** (`-0.02em` to `-0.04em` for headings). Default tracking is too loose at display sizes.
- **Variable fonts** when available (Inter Variable, Geist, etc.).
- **Line-height inversely proportional to size.** Tight (1.1–1.2) for headlines, generous (1.5–1.7) for body.
- **Limit weights.** Two or three weights max across the whole app.

## Color & contrast

- **Restrained palette.** Mostly neutrals; color used as accent and signal, not decoration.
- **OKLCH or HSL** for color tokens so dark mode and accent tinting work predictably.
- **Subtle borders over hard ones.** `rgba(255,255,255,0.08)` on dark backgrounds reads better than solid `#222`.
- **Layered shadows.** A real shadow is two or three stacked shadows with different blur/spread, not one big blurry one.

## Spacing & layout

- **Generous whitespace.** Default padding/gaps are usually too small. When in doubt, add more.
- **Consistent spacing scale** (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64). Don't invent one-off values.
- **Optical alignment** over mathematical. Sometimes 1px off looks right.

## Scroll-triggered reveals

For sections that animate in on scroll, prefer the CSS-only `animation-timeline: view()` API where supported, with a graceful no-animation fallback. Avoid bringing in IntersectionObserver JS unless necessary.

## Review checklist

When asked to review or polish UI, check `index.html` and `styles.scss` for:

- [ ] Are transitions using a custom `cubic-bezier`, not `ease` / `linear`?
- [ ] Do interactive elements have `:hover`, `:focus-visible`, *and* `:active` states?
- [ ] Is anything animating layout properties (`width`, `height`, `top`, `left`) instead of `transform`?
- [ ] Are headings using tight letter-spacing (`-0.02em` to `-0.04em`)?
- [ ] Is the spacing scale consistent, or are there one-off values?
- [ ] Does motion respect `prefers-reduced-motion`?
- [ ] Are colors defined as tokens (CSS custom properties / SCSS variables) rather than hardcoded?

## Workflow notes

- After editing `styles.scss`, the user runs `npm run dev` which watches and recompiles to `styles.css`. Don't edit `styles.css` directly — it's generated.
- The site is a single `index.html`. Section-level edits are fine inline.

## References

- emilkowal.ski — his site and blog
- sonner.emilkowal.ski — Sonner toast library
- vaul.emilkowal.ski — Vaul drawer library
