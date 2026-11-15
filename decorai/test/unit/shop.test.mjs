// "Shop this look": the searches, the affiliate settings and the wording.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
    parseShopConfig, buildShopList, retailerLink, hasAffiliateLinks, isLinkTemplate, shopHint,
    SHOP_ITEMS, STYLE_STAPLES, MAX_SHOP_ITEMS, DEFAULT_RETAILERS,
} from '../../src/shop.js';

test('every item in the picker has search words', () => {
    // Keep in step with roomItems in src/main.js.
    const picker = ['sofa', 'coffee-table', 'dining-table', 'chairs', 'bed', 'desk', 'bookshelf', 'tv', 'lamp',
        'floor-lamp', 'rug', 'curtains', 'art', 'mirror', 'plants', 'pillows', 'throw-blanket', 'vase', 'candles', 'clock'];
    for (const id of picker) assert.ok(SHOP_ITEMS[id]?.query, id);
    for (const id of STYLE_STAPLES) assert.ok(SHOP_ITEMS[id], id);
});

test('with no settings: Amazon, Wayfair and Target, no affiliate links', () => {
    const c = parseShopConfig({});
    assert.equal(c.enabled, true);
    assert.deepEqual(c.retailers, DEFAULT_RETAILERS.map((id) => ({ id })));
    assert.equal(hasAffiliateLinks(c), false);
});

test('settings choose retailers, add an Amazon tag and wrap links for a network', () => {
    const c = parseShopConfig({
        SHOP_RETAILERS: 'ikea, amazon, nonsense, amazon',
        SHOP_AMAZON_TAG: 'decorait-20',
        SHOP_IKEA_LINK_TEMPLATE: 'https://network.example/c/1?u={url}',
    });
    assert.deepEqual(c.retailers, [
        { id: 'ikea', linkTemplate: 'https://network.example/c/1?u={url}' },
        { id: 'amazon', amazonTag: 'decorait-20' },
    ]);
    assert.equal(hasAffiliateLinks(c), true);
    assert.equal(parseShopConfig({ SHOP_ENABLED: 'false' }).enabled, false);
});

test('malformed affiliate settings are ignored, not turned into broken links', () => {
    const c = parseShopConfig({
        SHOP_AMAZON_TAG: 'bad tag&x=1',
        SHOP_WAYFAIR_LINK_TEMPLATE: 'http://insecure.example/?u={url}',
        SHOP_TARGET_LINK_TEMPLATE: 'https://no-placeholder.example/',
    });
    assert.equal(hasAffiliateLinks(c), false);
    assert.equal(isLinkTemplate('https://a.example/{url}/{url}'), false);
    assert.equal(isLinkTemplate('javascript:{url}'), false);
    assert.equal(isLinkTemplate('https://a.example/?u={url}'), true);
});

test('links search each store, with the tag or network wrapper applied', () => {
    assert.equal(retailerLink({ id: 'amazon' }, 'scandinavian sofa'), 'https://www.amazon.com/s?k=scandinavian%20sofa');
    assert.equal(retailerLink({ id: 'amazon', amazonTag: 'decorait-20' }, 'rug'), 'https://www.amazon.com/s?k=rug&tag=decorait-20');
    assert.equal(retailerLink({ id: 'wayfair' }, 'area rug'), 'https://www.wayfair.com/keyword.php?keyword=area%20rug');
    assert.equal(
        retailerLink({ id: 'target', linkTemplate: 'https://goto.example/c/1?u={url}' }, 'vase'),
        `https://goto.example/c/1?u=${encodeURIComponent('https://www.target.com/s?searchTerm=vase')}`,
    );
    assert.equal(retailerLink({ id: 'nowhere' }, 'x'), null);
});

test('the list is the picked items in the chosen style', () => {
    const list = buildShopList({ style: 'Scandinavian', items: ['sofa', 'rug', 'tv', 'unknown', 'sofa'] }, parseShopConfig({}));
    assert.equal(list.fromPicks, true);
    assert.deepEqual(list.rows.map((r) => r.query), ['scandinavian sofa', 'scandinavian area rug', 'scandinavian tv stand']);
    assert.deepEqual(list.rows[0].links.map((l) => l.name), ['Amazon', 'Wayfair', 'Target']);
});

test('with nothing picked, it suggests pieces that carry the style', () => {
    const list = buildShopList({ style: 'Mid-Century', items: [] }, parseShopConfig({}));
    assert.equal(list.fromPicks, false);
    assert.deepEqual(list.rows.map((r) => r.id), STYLE_STAPLES);
    assert.equal(list.rows[0].query, 'mid-century area rug');
    assert.equal(buildShopList({}, null).rows[0].query, 'area rug');
});

test('a long pick list is cut to a short one', () => {
    const list = buildShopList({ items: Object.keys(SHOP_ITEMS) }, parseShopConfig({}));
    assert.equal(list.rows.length, MAX_SHOP_ITEMS);
});

test('the hint always says these are searches, not the exact pieces', () => {
    for (const l of [{ fromPicks: true, style: 'Japandi' }, { fromPicks: true, style: null }, { fromPicks: false, style: 'Japandi' }, { fromPicks: false, style: null }]) {
        assert.match(shopHint(l), /store searches, not the exact pieces in the picture/);
    }
    assert.match(shopHint({ fromPicks: true, style: 'Japandi' }), /^The pieces you picked, in a Japandi style\./);
});
