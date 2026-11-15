/**
 * The upgrade sheet's words and its round trip through checkout.
 *
 * Every paywall in the app opens one sheet, and it always says three things:
 * what the person just tried to do, what it costs, and what happens after they
 * pay (.design/decorait-overhaul/INFORMATION_ARCHITECTURE.md, "Hitting a
 * gate"). Checkout leaves the site, so the gate and where they were are kept
 * in sessionStorage and picked up when Stripe sends them back.
 *
 * No DOM here: the server imports isReturnPath(), and the copy is unit-tested.
 */

/**
 * Why the sheet opened.
 *   premium        a premium design or edit, with no tokens left
 *   monthly-limit  a subscriber has used this month's premium designs
 *   library        keeping more designs than a free account does
 *   floor-plan     a floor plan editor feature (subscription)
 *   tokens         the token balance in the header: no block, just buying
 *   plans          /upgrade or the account menu: no block, just the options
 */
export const UPGRADE_GATES = ['premium', 'monthly-limit', 'library', 'floor-plan', 'tokens', 'plans'];

export const DEFAULT_SUBSCRIPTION = { amount: 1999, monthlyLimit: 50 };

/** How many designs each kind of account keeps (server: MAX_SAVED_DESIGNS_*). */
export const DEFAULT_SAVED_DESIGNS = { free: 10, subscriber: 200 };

/** 499 → "$4.99"; 50 → "50¢". */
export function formatPrice(cents) {
    const n = Math.max(0, Math.round(Number(cents) || 0));
    if (n < 100) return `${n}¢`;
    return `$${(n / 100).toFixed(2)}`;
}

/** The lowest price of one premium design across the packs, in cents. */
export function cheapestPerDesign(packs) {
    const per = (packs || [])
        .filter((p) => p && p.tokens > 0 && p.amount > 0)
        .map((p) => p.amount / p.tokens);
    return per.length ? Math.floor(Math.min(...per)) : null;
}

/** "1 December": when a calendar-month allowance next resets. */
export function nextMonthStart(now = new Date()) {
    const d = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
}

/**
 * The sheet's content for one gate.
 * @param {string} gate  one of UPGRADE_GATES (anything else reads as 'plans')
 * @param {object} ctx
 * @param {Array<{tokens:number, amount:number}>} ctx.packs
 * @param {{amount:number, monthlyLimit:number}} [ctx.subscription]
 * @param {{free:number, subscriber:number}} [ctx.savedDesigns]
 * @param {boolean} [ctx.isSubscriber]
 * @param {Date} [ctx.now]
 * @returns {{ gate, title, blocked, cost, next, recommend, showTokens, showSubscription, subscriptionPoints }}
 */
export function describeGate(gate, { packs = [], subscription = DEFAULT_SUBSCRIPTION, savedDesigns = DEFAULT_SAVED_DESIGNS, isSubscriber = false, now = new Date() } = {}) {
    const g = UPGRADE_GATES.includes(gate) ? gate : 'plans';
    const sub = { ...DEFAULT_SUBSCRIPTION, ...(subscription || {}) };
    const keep = { ...DEFAULT_SAVED_DESIGNS, ...(savedDesigns || {}) };
    const per = cheapestPerDesign(packs);
    const tokensFrom = per != null ? ` Tokens start at ${formatPrice(per)} each.` : '';
    const planPrice = `${formatPrice(sub.amount)} a month`;
    const subscriptionPoints = [
        `${sub.monthlyLimit} premium designs every month`,
        `Up to ${keep.subscriber} designs kept in your library`,
        'The full floor plan editor: saved layouts, every furniture category, and exports',
    ];
    const back = "After checkout you'll come straight back to this design, with premium switched on and your change ready to run.";

    const base = { gate: g, subscriptionPoints, showTokens: true, showSubscription: !isSubscriber };
    switch (g) {
        case 'premium':
            return {
                ...base,
                title: 'Generate with the premium model',
                blocked: "Premium designs are sharper and follow detailed changes more closely. You don't have any premium designs left.",
                cost: `Each premium design uses one token.${tokensFrom} A token is only used when the design comes out.`,
                next: back,
                recommend: 'tokens',
            };
        case 'monthly-limit':
            return {
                ...base,
                title: "You've used this month's premium designs",
                blocked: `Your plan's ${sub.monthlyLimit} premium designs start again on ${nextMonthStart(now)}.`,
                cost: `To keep going before then, a token pack adds premium designs, one token each.${tokensFrom}`,
                next: back,
                recommend: 'tokens',
                showSubscription: false,
            };
        case 'library':
            return {
                ...base,
                title: 'Keep more of your designs',
                blocked: `Free accounts keep their latest ${keep.free} designs, and the oldest makes way for each new one. The monthly plan keeps up to ${keep.subscriber}.`,
                cost: `The plan is ${planPrice} and includes ${sub.monthlyLimit} premium designs.`,
                next: `After checkout you'll come straight back to your library, and it will keep up to ${keep.subscriber} designs.`,
                recommend: 'subscription',
                showTokens: false,
                showSubscription: true,
            };
        case 'floor-plan':
            return {
                ...base,
                title: 'Unlock the full floor plan editor',
                blocked: 'Saving layouts, the full furniture library and exports come with the monthly plan.',
                cost: `The plan is ${planPrice} and also includes ${sub.monthlyLimit} premium room designs.`,
                next: "After checkout you'll come straight back to your floor plan with everything unlocked.",
                recommend: 'subscription',
                showTokens: false,
                showSubscription: true,
            };
        case 'tokens':
            return {
                ...base,
                title: 'Get more premium designs',
                blocked: null,
                cost: `Each premium design uses one token.${tokensFrom} A token is only used when the design comes out.`,
                next: null,
                recommend: 'tokens',
            };
        case 'plans':
        default:
            return {
                ...base,
                title: 'Plans and pricing',
                blocked: null,
                cost: `Standard designs are free, and a free account keeps its latest ${keep.free}. Premium designs, a bigger library and the full floor plan editor are paid.`,
                next: null,
                recommend: isSubscriber ? 'tokens' : 'subscription',
            };
    }
}

// ── The round trip through checkout ─────────────────────────────────────────

const RETURN_KEY = 'decorait.upgradeReturn';
const RETURN_MAX_AGE_MS = 2 * 60 * 60 * 1000;

/**
 * Paths checkout may send someone back to. Anything else (another site, a
 * path with a query, an unknown page) is refused by the server, which builds
 * the return address.
 */
export function isReturnPath(path) {
    return typeof path === 'string'
        && /^\/(design|result|plan|build|upgrade|library\/(designs|plans|builds))?$/.test(path);
}

function defaultStorage() {
    try { return globalThis.sessionStorage || null; } catch (_) { return null; }
}

/** Remember what to resume once checkout sends them back. */
export function saveUpgradeReturn(record, storage = defaultStorage(), now = Date.now()) {
    if (!storage || !record) return;
    try {
        storage.setItem(RETURN_KEY, JSON.stringify({
            gate: UPGRADE_GATES.includes(record.gate) ? record.gate : 'plans',
            path: isReturnPath(record.path) ? record.path : '/',
            refinement: typeof record.refinement === 'string' ? record.refinement.slice(0, 2000) : '',
            at: now,
        }));
    } catch (_) { /* private mode: they simply land without a resume */ }
}

/** Read and clear the record. Null if there is none or it is stale. */
export function takeUpgradeReturn(storage = defaultStorage(), now = Date.now()) {
    if (!storage) return null;
    let raw = null;
    try {
        raw = storage.getItem(RETURN_KEY);
        storage.removeItem(RETURN_KEY);
    } catch (_) { return null; }
    if (!raw) return null;
    try {
        const r = JSON.parse(raw);
        if (!r || typeof r.at !== 'number' || now - r.at > RETURN_MAX_AGE_MS || now < r.at) return null;
        if (!UPGRADE_GATES.includes(r.gate)) return null;
        return { gate: r.gate, path: isReturnPath(r.path) ? r.path : '/', refinement: String(r.refinement || '') };
    } catch (_) {
        return null;
    }
}
