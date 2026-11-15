/**
 * Loading placeholders shaped like the content they stand in for, so a list
 * doesn't jump when it arrives (.design/decorait-overhaul/TASKS.md, I2).
 *
 * Each shape reuses the real item's class (use-saved-card, my-layouts-item,
 * ww-project-row), so the placeholder is the same size as the item that
 * replaces it, and adds `ph-card`, which greys out the text and turns off
 * clicks. A hidden status line tells screen readers what is loading.
 *
 * No DOM here, so it is unit-tested (test/unit/placeholders.test.mjs).
 */

const LINE = '<span class="ph-line"></span>';
const SHORT = '<span class="ph-line ph-line--short"></span>';

export const PLACEHOLDER_SHAPES = {
    /** A saved design in "Use a saved design": picture, then its name. */
    tile: `<div class="use-saved-card ph-card" aria-hidden="true"><span class="use-saved-card-img ph"></span>${LINE}</div>`,
    /** A row in the floor plan editor's "My layouts": name, date, preview. */
    'layout-row': `<div class="my-layouts-item ph-card" aria-hidden="true"><div class="my-layouts-item-top"><div class="my-layouts-item-name-cell">${LINE}${SHORT}</div><div class="my-layouts-item-preview-cell ph"></div></div></div>`,
    /** A row in the woodworking editor's "Projects": name, date, Open button. */
    'project-row': `<div class="ww-project-row ph-card" aria-hidden="true"><div class="ww-project-info">${LINE}${SHORT}</div><span class="ph ph-button"></span></div>`,
};

/** How many to show when the real count isn't known yet. */
export const DEFAULT_COUNTS = { tile: 6, 'layout-row': 3, 'project-row': 3 };

/** Never more than a screenful. */
export const MAX_PLACEHOLDERS = 8;

/**
 * Markup for `count` placeholders of one shape, with a status line.
 * @param {'tile'|'layout-row'|'project-row'} shape
 * @param {{ count?: number, label?: string }} [opts]
 *   count: how many items there were last time, if known (0 or unknown → the default)
 */
export function placeholderMarkup(shape, { count, label = 'Loading…' } = {}) {
    const one = PLACEHOLDER_SHAPES[shape];
    if (!one) return '';
    const known = Math.floor(Number(count));
    const n = Number.isFinite(known) && known > 0 ? Math.min(known, MAX_PLACEHOLDERS) : DEFAULT_COUNTS[shape];
    const status = `<span class="visually-hidden" role="status">${escapeText(label)}</span>`;
    return status + one.repeat(n);
}

/**
 * Shimmer behind an image until it loads (or fails), so a grid of pictures
 * fills in place instead of flashing blank boxes. Call before setting src.
 */
export function watchImage(img) {
    if (!img || img.complete && img.naturalWidth) return img;
    img.classList.add('img-pending');
    const done = () => img.classList.remove('img-pending');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
    return img;
}

function escapeText(text) {
    return String(text).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
}
