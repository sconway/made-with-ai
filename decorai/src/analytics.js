/**
 * Funnel events.
 *
 * The router already reports a page view per route, which shows where people
 * are but not what they did there. These events mark the steps that matter:
 *
 *   photo_added → generation_started → generation_succeeded / generation_failed
 *   → signup_prompt_shown → sign_up → begin_checkout → purchase
 *
 * Google Analytics loads late (its ID comes from /api/config), so events fired
 * before then are queued and sent by flushAnalytics() once gtag exists. With no
 * Measurement ID configured this module does nothing.
 *
 * Never put anything personal in `params` — no email, no prompt text, no image.
 */

const MAX_QUEUED = 50;
const queue = [];

function send(name, params) {
    try {
        window.gtag('event', name, params);
    } catch (err) {
        console.warn('[analytics] event failed:', name, err);
    }
}

/**
 * Record a funnel event.
 * @param {string} name   snake_case; GA4's own names (sign_up, login,
 *                        begin_checkout, purchase) are used where they exist.
 * @param {Record<string, string|number|boolean|null|undefined>} [params]
 */
export function track(name, params = {}) {
    const clean = {};
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null && value !== '') clean[key] = value;
    }
    if (typeof window.gtag === 'function') {
        send(name, clean);
    } else if (queue.length < MAX_QUEUED) {
        queue.push([name, clean]);
    }
}

/** Send anything queued before analytics was ready. Call after gtag is defined. */
export function flushAnalytics() {
    if (typeof window.gtag !== 'function') return;
    while (queue.length) {
        const [name, params] = queue.shift();
        send(name, params);
    }
}
