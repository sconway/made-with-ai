import { test } from 'node:test';
import assert from 'node:assert/strict';
import { placeholderMarkup, PLACEHOLDER_SHAPES, DEFAULT_COUNTS, MAX_PLACEHOLDERS } from '../../src/placeholders.js';

const countOf = (html, cls) => html.split(`class="${cls}`).length - 1;

test('each shape reuses the real item class so the size matches', () => {
    assert.match(PLACEHOLDER_SHAPES.tile, /use-saved-card ph-card/);
    assert.match(PLACEHOLDER_SHAPES['layout-row'], /my-layouts-item ph-card/);
    assert.match(PLACEHOLDER_SHAPES['project-row'], /ww-project-row ph-card/);
    for (const html of Object.values(PLACEHOLDER_SHAPES)) assert.match(html, /aria-hidden="true"/);
});

test('uses the default count when the real one is unknown', () => {
    assert.equal(countOf(placeholderMarkup('tile'), 'use-saved-card ph-card'), DEFAULT_COUNTS.tile);
    assert.equal(countOf(placeholderMarkup('layout-row', { count: 0 }), 'my-layouts-item ph-card'), DEFAULT_COUNTS['layout-row']);
    assert.equal(countOf(placeholderMarkup('project-row', { count: 'x' }), 'ww-project-row ph-card'), DEFAULT_COUNTS['project-row']);
});

test('matches the last known count, up to a screenful', () => {
    assert.equal(countOf(placeholderMarkup('tile', { count: 2 }), 'use-saved-card ph-card'), 2);
    assert.equal(countOf(placeholderMarkup('tile', { count: 40 }), 'use-saved-card ph-card'), MAX_PLACEHOLDERS);
});

test('carries one status line for screen readers, escaped', () => {
    const html = placeholderMarkup('tile', { label: 'Loading <your> designs…' });
    assert.equal(countOf(html, 'visually-hidden'), 1);
    assert.match(html, /role="status">Loading &lt;your&gt; designs…</);
});

test('an unknown shape draws nothing', () => {
    assert.equal(placeholderMarkup('nope'), '');
});
