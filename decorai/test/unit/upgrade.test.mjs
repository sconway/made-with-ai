// The upgrade sheet's words and the return trip through checkout.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
    describeGate, formatPrice, cheapestPerDesign, nextMonthStart,
    isReturnPath, saveUpgradeReturn, takeUpgradeReturn, UPGRADE_GATES,
} from '../../src/upgrade.js';

const PACKS = [{ id: '10', tokens: 10, amount: 499 }, { id: '20', tokens: 20, amount: 999 }, { id: '50', tokens: 50, amount: 1999 }];

function memoryStorage() {
    const m = new Map();
    return {
        getItem: (k) => (m.has(k) ? m.get(k) : null),
        setItem: (k, v) => m.set(k, String(v)),
        removeItem: (k) => m.delete(k),
        size: () => m.size,
    };
}

test('prices', () => {
    assert.equal(formatPrice(1999), '$19.99');
    assert.equal(formatPrice(39), '39¢');
    assert.equal(formatPrice(undefined), '0¢');
    assert.equal(cheapestPerDesign(PACKS), 39); // 1999 / 50, rounded down
    assert.equal(cheapestPerDesign([]), null);
    assert.equal(cheapestPerDesign([{ tokens: 0, amount: 100 }]), null);
});

test('every gate names what happened, what it costs, and leads with what unblocks it', () => {
    for (const gate of ['premium', 'monthly-limit', 'library', 'floor-plan']) {
        const c = describeGate(gate, { packs: PACKS });
        assert.ok(c.title, `${gate} title`);
        assert.ok(c.blocked, `${gate} names the blocked action`);
        assert.ok(c.cost, `${gate} names the cost`);
        assert.match(c.next, /after checkout/i, `${gate} says what happens next`);
    }
    assert.equal(describeGate('premium', { packs: PACKS }).recommend, 'tokens');
    assert.equal(describeGate('library', { packs: PACKS }).recommend, 'subscription');
    assert.equal(describeGate('floor-plan', { packs: PACKS }).recommend, 'subscription');
});

test('premium quotes the cheapest token', () => {
    const c = describeGate('premium', { packs: PACKS });
    assert.match(c.cost, /Tokens start at 39¢ each\./);
    assert.doesNotMatch(describeGate('premium', { packs: [] }).cost, /start at/);
});

test('subscription-only gates hide tokens, which would not unblock them', () => {
    for (const gate of ['library', 'floor-plan']) {
        const c = describeGate(gate, { packs: PACKS });
        assert.equal(c.showTokens, false);
        assert.equal(c.showSubscription, true);
    }
});

test('a subscriber out of premium designs is offered tokens, with the reset date, not the plan again', () => {
    const c = describeGate('monthly-limit', {
        packs: PACKS,
        subscription: { amount: 1999, monthlyLimit: 50 },
        isSubscriber: true,
        now: new Date(2026, 10, 15),
    });
    assert.equal(c.showSubscription, false);
    assert.equal(c.recommend, 'tokens');
    assert.match(c.blocked, /50 premium designs start again on 1 December/);
    assert.equal(nextMonthStart(new Date(2026, 11, 31)), '1 January');
});

test('the plan price and allowance come from the config', () => {
    const c = describeGate('library', { packs: PACKS, subscription: { amount: 2499, monthlyLimit: 80 } });
    assert.match(c.cost, /\$24\.99 a month/);
    assert.match(c.subscriptionPoints[0], /^80 premium designs/);
});

test('unknown gates read as the pricing page', () => {
    const c = describeGate('nonsense', { packs: PACKS });
    assert.equal(c.gate, 'plans');
    assert.equal(c.blocked, null);
    assert.ok(UPGRADE_GATES.includes(c.gate));
});

test('checkout may only return to app pages', () => {
    for (const ok of ['/', '/result', '/design', '/plan', '/build', '/upgrade', '/library/designs']) {
        assert.equal(isReturnPath(ok), true, ok);
    }
    for (const bad of ['', 'https://evil.example', '//evil.example', '/result?x=1', '/../x', '/library/secrets', '/result/abc', null, 7]) {
        assert.equal(isReturnPath(bad), false, String(bad));
    }
});

test('the return record round-trips once, then is gone', () => {
    const storage = memoryStorage();
    saveUpgradeReturn({ gate: 'premium', path: '/result', refinement: 'Add a few more plants.' }, storage, 1000);
    assert.deepEqual(takeUpgradeReturn(storage, 2000), { gate: 'premium', path: '/result', refinement: 'Add a few more plants.' });
    assert.equal(takeUpgradeReturn(storage, 2000), null);
});

test('a stale, forged or broken record is ignored', () => {
    const storage = memoryStorage();
    saveUpgradeReturn({ gate: 'premium', path: '/result' }, storage, 0);
    assert.equal(takeUpgradeReturn(storage, 3 * 60 * 60 * 1000), null, 'older than two hours');

    saveUpgradeReturn({ gate: 'premium', path: 'https://evil.example' }, storage, 0);
    assert.equal(takeUpgradeReturn(storage, 10).path, '/', 'unknown path becomes home');

    storage.setItem('decorait.upgradeReturn', '{not json');
    assert.equal(takeUpgradeReturn(storage, 10), null);
    assert.equal(storage.size(), 0, 'cleared even when unreadable');

    assert.equal(takeUpgradeReturn(null), null);
});
