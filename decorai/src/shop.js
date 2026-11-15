/**
 * "Shop this look": retailer searches for the pieces in a design.
 *
 * This is the first step of "Shop this room" (.design/competitive/
 * COMPETITIVE_PLAN.md, phase 1). It doesn't look at the image. It uses what
 * the person chose (the style and the items they picked) and links to each
 * retailer's own search for them, so the results are honest: "pieces like
 * these", never "this exact sofa". Recognising pieces in the image can come
 * later, if these links get used.
 *
 * Affiliate settings come from the server (/api/config `shop`), so a programme
 * can be switched on by setting an environment variable, with no code change.
 * No DOM here: the server imports parseShopConfig() and this is unit-tested.
 */

/**
 * Search words for each item in the picker (main.js `roomItems`). Shoppers
 * search for "area rug", not "rug", and nobody buys a TV to match a style.
 */
export const SHOP_ITEMS = {
    sofa: { label: 'Sofa', query: 'sofa' },
    'coffee-table': { label: 'Coffee table', query: 'coffee table' },
    'dining-table': { label: 'Dining table', query: 'dining table' },
    chairs: { label: 'Chairs', query: 'accent chair' },
    bed: { label: 'Bed', query: 'bed frame' },
    desk: { label: 'Desk', query: 'desk' },
    bookshelf: { label: 'Bookshelf', query: 'bookshelf' },
    tv: { label: 'TV stand', query: 'tv stand' },
    lamp: { label: 'Table lamp', query: 'table lamp' },
    'floor-lamp': { label: 'Floor lamp', query: 'floor lamp' },
    rug: { label: 'Rug', query: 'area rug' },
    curtains: { label: 'Curtains', query: 'curtains' },
    art: { label: 'Wall art', query: 'wall art' },
    mirror: { label: 'Mirror', query: 'wall mirror' },
    plants: { label: 'Planters', query: 'indoor planter' },
    pillows: { label: 'Throw pillows', query: 'throw pillows' },
    'throw-blanket': { label: 'Throw blanket', query: 'throw blanket' },
    vase: { label: 'Vase', query: 'vase' },
    candles: { label: 'Candles', query: 'candle holder' },
    clock: { label: 'Wall clock', query: 'wall clock' },
};

/**
 * When nothing was picked, the room was furnished for them, and the image
 * isn't read yet. These pieces suit any room and carry most of a style.
 */
export const STYLE_STAPLES = ['rug', 'art', 'floor-lamp', 'pillows', 'plants'];

/** Most items listed, so the section stays a short list, not a catalogue. */
export const MAX_SHOP_ITEMS = 8;

/** Retailers and their public search pages. */
export const RETAILERS = {
    amazon: { name: 'Amazon', search: (q) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}` },
    wayfair: { name: 'Wayfair', search: (q) => `https://www.wayfair.com/keyword.php?keyword=${encodeURIComponent(q)}` },
    target: { name: 'Target', search: (q) => `https://www.target.com/s?searchTerm=${encodeURIComponent(q)}` },
    ikea: { name: 'IKEA', search: (q) => `https://www.ikea.com/us/en/search/?q=${encodeURIComponent(q)}` },
};

export const DEFAULT_RETAILERS = ['amazon', 'wayfair', 'target'];

const AMAZON_TAG = /^[A-Za-z0-9-]{1,64}$/;

/**
 * Read the shop settings from the environment (server side).
 *
 *   SHOP_RETAILERS                which retailers, in order (default amazon,wayfair,target)
 *   SHOP_AMAZON_TAG               Amazon Associates tracking ID, e.g. decorait-20
 *   SHOP_<RETAILER>_LINK_TEMPLATE an affiliate network's deep link with {url}
 *                                 where the search address goes (Impact, CJ,
 *                                 Skimlinks and others all work this way)
 *   SHOP_ENABLED=false            hide the section
 *
 * Anything malformed is ignored rather than producing a broken link.
 * @returns {{ enabled: boolean, retailers: Array<{ id: string, amazonTag?: string, linkTemplate?: string }> }}
 */
export function parseShopConfig(env = {}) {
    const enabled = String(env.SHOP_ENABLED ?? 'true').trim().toLowerCase() !== 'false';
    const ids = String(env.SHOP_RETAILERS || DEFAULT_RETAILERS.join(','))
        .split(',')
        .map((s) => s.trim().toLowerCase())
        .filter((id, i, all) => RETAILERS[id] && all.indexOf(id) === i);
    const retailers = (ids.length ? ids : DEFAULT_RETAILERS).map((id) => {
        const r = { id };
        const template = String(env[`SHOP_${id.toUpperCase()}_LINK_TEMPLATE`] || '').trim();
        if (isLinkTemplate(template)) r.linkTemplate = template;
        if (id === 'amazon') {
            const tag = String(env.SHOP_AMAZON_TAG || '').trim();
            if (AMAZON_TAG.test(tag)) r.amazonTag = tag;
        }
        return r;
    });
    return { enabled, retailers };
}

/** An https address with exactly one {url} in it. */
export function isLinkTemplate(template) {
    if (!template || template.split('{url}').length !== 2) return false;
    try {
        return new URL(template.replace('{url}', 'x')).protocol === 'https:';
    } catch (_) {
        return false;
    }
}

/** True when any retailer link earns a commission, which must be disclosed. */
export function hasAffiliateLinks(config) {
    return !!config?.retailers?.some((r) => r.amazonTag || r.linkTemplate);
}

/** The link to one retailer's search, with the affiliate settings applied. */
export function retailerLink(retailer, query) {
    const def = RETAILERS[retailer?.id];
    if (!def) return null;
    let url = def.search(query);
    if (retailer.amazonTag && retailer.id === 'amazon') url += `&tag=${encodeURIComponent(retailer.amazonTag)}`;
    if (retailer.linkTemplate) url = retailer.linkTemplate.replace('{url}', encodeURIComponent(url));
    return url;
}

/**
 * The list for one design.
 * @param {{ style?: string|null, items?: string[] }} shop  saved with the design
 * @param {{ retailers: Array }} config  from parseShopConfig
 * @returns {{ fromPicks: boolean, style: string|null, rows: Array<{ id, label, query, links: Array<{ retailer, name, url }> }> }}
 */
export function buildShopList(shop, config) {
    const style = typeof shop?.style === 'string' && shop.style.trim() ? shop.style.trim() : null;
    const picked = (Array.isArray(shop?.items) ? shop.items : []).filter((id, i, all) => SHOP_ITEMS[id] && all.indexOf(id) === i);
    const fromPicks = picked.length > 0;
    const ids = (fromPicks ? picked : STYLE_STAPLES).slice(0, MAX_SHOP_ITEMS);
    const retailers = config?.retailers?.length ? config.retailers : DEFAULT_RETAILERS.map((id) => ({ id }));
    const rows = ids.map((id) => {
        const item = SHOP_ITEMS[id];
        const query = (style ? `${style} ${item.query}` : item.query).toLowerCase();
        return {
            id,
            label: item.label,
            query,
            links: retailers
                .map((r) => ({ retailer: r.id, name: RETAILERS[r.id]?.name, url: retailerLink(r, query) }))
                .filter((l) => l.url),
        };
    });
    return { fromPicks, style, rows };
}

/** The line under the heading: where the list came from, and that it's searches. */
export function shopHint({ fromPicks, style }) {
    const honest = 'These are store searches, not the exact pieces in the picture.';
    if (fromPicks && style) return `The pieces you picked, in a ${style} style. ${honest}`;
    if (fromPicks) return `The pieces you picked. ${honest}`;
    if (style) return `Pieces that carry the ${style} look. ${honest}`;
    return `A few pieces to start from. ${honest}`;
}
