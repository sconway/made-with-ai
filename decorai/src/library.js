/**
 * The library's words and rules: which tab, when to offer search, what a
 * search matches, and what an empty tab says. No DOM here, so it is unit-tested
 * (test/unit/library.test.mjs); main.js draws it.
 *
 * One library at /library/{designs,plans,builds} replaces the old My Designs
 * pop-up (.design/decorait-overhaul/TASKS.md, C6 and I1).
 */

export const LIBRARY_TABS = ['designs', 'plans', 'builds'];

/** Search appears once a tab holds more than this many items. */
export const SEARCH_THRESHOLD = 12;

export const TAB_LABELS = { designs: 'Designs', plans: 'Floor plans', builds: 'Builds' };

export function normaliseTab(tab) {
    return LIBRARY_TABS.includes(tab) ? tab : 'designs';
}

export function shouldShowSearch(count) {
    return Number(count) > SEARCH_THRESHOLD;
}

/** Lower-case, accents off, so "Cafe" finds "Café". */
function fold(text) {
    return String(text || '')
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase();
}

/**
 * Items whose text holds every word of the query, in any order.
 * @param {Array} items
 * @param {string} query
 * @param {(item) => string} textOf
 */
export function filterLibraryItems(items, query, textOf) {
    const list = Array.isArray(items) ? items : [];
    const words = fold(query).split(/\s+/).filter(Boolean);
    if (!words.length) return list;
    return list.filter((item) => {
        const hay = fold(textOf(item));
        return words.every((w) => hay.includes(w));
    });
}

/**
 * The line above the designs grid: how many are kept and what happens when
 * the library is full. Null when there is nothing to say (an empty library
 * shows its empty state instead).
 * @returns {{ text: string, upsell: boolean, full: boolean } | null}
 */
export function designsStatus({ total, limit, subscriber }) {
    const n = Math.max(0, Number(total) || 0);
    const max = Math.max(1, Number(limit) || 1);
    if (n === 0) return null;
    const plural = (k) => (k === 1 ? 'design' : 'designs');
    if (subscriber) {
        if (n >= max) {
            return { text: `${n} saved. Your plan keeps up to ${max}, so each new design replaces the oldest.`, upsell: false, full: true };
        }
        return { text: `${n} saved ${plural(n)}. Your plan keeps up to ${max}.`, upsell: false, full: false };
    }
    if (n > max) {
        return {
            text: `${n} saved from your plan. Free accounts keep ${max}, so new designs aren't saved until you have fewer than ${max}. Nothing here is deleted.`,
            upsell: true,
            full: true,
        };
    }
    if (n === max) {
        return { text: `Your library is full: ${max} of ${max}. Each new design replaces the oldest.`, upsell: true, full: true };
    }
    return { text: `${n} of ${max} kept. Free accounts keep the latest ${max} designs.`, upsell: true, full: false };
}

/**
 * What an empty tab says, and what it offers to do instead.
 * Action ids are handled in main.js.
 * @returns {{ icon: string, title: string, text: string, actions: Array<{id: string, label: string, primary?: boolean}> }}
 */
export function emptyState(tab, { signedIn = false, query = '', failed = false } = {}) {
    const t = normaliseTab(tab);
    if (!signedIn) {
        return {
            icon: 'bookmark',
            title: 'Sign in to see your library',
            text: 'Every design you make is kept here, free. Floor plans and builds you save show up here too.',
            actions: [
                { id: 'signin', label: 'Sign in', primary: true },
                { id: 'signup', label: 'Create an account' },
            ],
        };
    }
    if (failed) {
        return {
            icon: 'wifi-off',
            title: `Your ${TAB_LABELS[t].toLowerCase()} didn't load`,
            text: 'Check your connection and try again.',
            actions: [{ id: 'retry', label: 'Try again', primary: true }],
        };
    }
    if (String(query).trim()) {
        return {
            icon: 'search',
            title: `Nothing matches “${String(query).trim()}”`,
            text: 'Try fewer words, or clear the search to see everything.',
            actions: [{ id: 'clear-search', label: 'Clear search' }],
        };
    }
    switch (t) {
        case 'plans':
            return {
                icon: 'grid',
                title: 'No floor plans yet',
                text: 'Draw a room in the floor plan editor and save it. It will be waiting here.',
                actions: [{ id: 'open-plan', label: 'Open the floor plan editor', primary: true }],
            };
        case 'builds':
            return {
                icon: 'box',
                title: 'No builds yet',
                text: 'Woodworking projects you save show up here, ready to open again.',
                actions: [{ id: 'open-build', label: 'Open the woodworking editor', primary: true }],
            };
        case 'designs':
        default:
            return {
                icon: 'image',
                title: 'No designs yet',
                text: 'Redesign a room and every version you make is kept here.',
                actions: [{ id: 'new-design', label: 'Redesign a room', primary: true }],
            };
    }
}
