// The library's rules (src/library.js) and how many designs an account keeps
// (lib/designRetention.js).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
    normaliseTab, shouldShowSearch, filterLibraryItems, designsStatus, emptyState, SEARCH_THRESHOLD,
} from '../../src/library.js';
import { planDesignRetention, designLimitFor } from '../../lib/designRetention.js';

test('unknown tabs read as designs', () => {
    assert.equal(normaliseTab('plans'), 'plans');
    assert.equal(normaliseTab('builds'), 'builds');
    assert.equal(normaliseTab('secrets'), 'designs');
    assert.equal(normaliseTab(undefined), 'designs');
});

test('search appears only past twelve items', () => {
    assert.equal(SEARCH_THRESHOLD, 12);
    assert.equal(shouldShowSearch(12), false);
    assert.equal(shouldShowSearch(13), true);
    assert.equal(shouldShowSearch(0), false);
});

test('search matches every word, in any order, ignoring case and accents', () => {
    const items = [
        { name: 'Café kitchen, Japandi' },
        { name: 'Bedroom, Scandinavian' },
        { name: 'Kitchen, industrial' },
    ];
    const names = (q) => filterLibraryItems(items, q, (i) => i.name).map((i) => i.name);
    assert.deepEqual(names(''), items.map((i) => i.name));
    assert.deepEqual(names('  '), items.map((i) => i.name));
    assert.deepEqual(names('kitchen'), ['Café kitchen, Japandi', 'Kitchen, industrial']);
    assert.deepEqual(names('japandi cafe'), ['Café kitchen, Japandi']);
    assert.deepEqual(names('KITCHEN bedroom'), []);
    assert.deepEqual(filterLibraryItems(null, 'x', String), []);
});

test('a free library says how many it keeps, and that the oldest makes way when full', () => {
    assert.equal(designsStatus({ total: 0, limit: 10, subscriber: false }), null);
    const some = designsStatus({ total: 3, limit: 10, subscriber: false });
    assert.match(some.text, /^3 of 10 kept\./);
    assert.equal(some.upsell, true);
    assert.equal(some.full, false);
    const full = designsStatus({ total: 10, limit: 10, subscriber: false });
    assert.match(full.text, /full: 10 of 10.*replaces the oldest/);
    assert.equal(full.full, true);
});

test('a lapsed subscriber is told nothing is deleted', () => {
    const over = designsStatus({ total: 37, limit: 10, subscriber: false });
    assert.match(over.text, /37 saved from your plan/);
    assert.match(over.text, /Nothing here is deleted/);
    assert.equal(over.upsell, true);
});

test('a subscriber sees their allowance and no upsell', () => {
    const s = designsStatus({ total: 1, limit: 200, subscriber: true });
    assert.equal(s.text, '1 saved design. Your plan keeps up to 200.');
    assert.equal(s.upsell, false);
});

test('empty tabs offer the tool that fills them', () => {
    assert.deepEqual(emptyState('designs', { signedIn: true }).actions.map((a) => a.id), ['new-design']);
    assert.deepEqual(emptyState('plans', { signedIn: true }).actions.map((a) => a.id), ['open-plan']);
    assert.deepEqual(emptyState('builds', { signedIn: true }).actions.map((a) => a.id), ['open-build']);
});

test('signed out, searching and failed states come before the empty state', () => {
    for (const tab of ['designs', 'plans', 'builds']) {
        assert.deepEqual(emptyState(tab, { signedIn: false }).actions.map((a) => a.id), ['signin', 'signup']);
    }
    const none = emptyState('designs', { signedIn: true, query: ' rug ' });
    assert.equal(none.title, 'Nothing matches “rug”');
    assert.deepEqual(none.actions.map((a) => a.id), ['clear-search']);
    const failed = emptyState('plans', { signedIn: true, failed: true });
    assert.match(failed.title, /floor plans didn't load/);
    assert.deepEqual(failed.actions.map((a) => a.id), ['retry']);
});

test('free accounts keep 10 and subscribers 200 by default', () => {
    assert.equal(designLimitFor(false), 10);
    assert.equal(designLimitFor(true), 200);
    assert.equal(designLimitFor(false, { free: 5, paid: 50 }), 5);
});

test('under the limit, a design is saved and nothing deleted', () => {
    assert.deepEqual(planDesignRetention({ count: 9, limit: 10, subscriber: false }), { save: true, deleteOldest: 0, reason: null });
});

test('at the limit, the oldest makes way for the new design', () => {
    assert.deepEqual(planDesignRetention({ count: 10, limit: 10, subscriber: false }), { save: true, deleteOldest: 1, reason: 'replaced-oldest' });
    assert.deepEqual(planDesignRetention({ count: 200, limit: 200, subscriber: true }), { save: true, deleteOldest: 1, reason: 'replaced-oldest' });
});

test('a free account over its limit deletes nothing and saves nothing', () => {
    // A subscriber whose plan ended, holding 200 designs against a free limit of 10.
    assert.deepEqual(planDesignRetention({ count: 200, limit: 10, subscriber: false }), { save: false, deleteOldest: 0, reason: 'over-limit' });
});

test('a subscriber over a lowered limit is trimmed to make room for one', () => {
    assert.deepEqual(planDesignRetention({ count: 205, limit: 200, subscriber: true }), { save: true, deleteOldest: 6, reason: 'replaced-oldest' });
});

test('junk counts and limits are safe', () => {
    assert.equal(planDesignRetention({ count: 'x', limit: 10, subscriber: false }).save, true);
    assert.equal(planDesignRetention({ count: 0, limit: 0, subscriber: false }).save, true);
});
