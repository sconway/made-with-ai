/**
 * The empty spots outside the library: the woodworking cut list, a furniture
 * search that finds nothing, and "Use a saved design" with nothing saved
 * (.design/decorait-overhaul/TASKS.md, I1). The library's own are in
 * library.js; these share its look (.library-empty).
 *
 * The words are plain functions (unit-tested in test/unit/emptyStates.test.mjs);
 * emptyStateElement() draws one.
 */

const plural = (n, one, many) => (n === 1 ? one : many);

/** The cut list before any boards are added. */
export function cutListEmpty() {
    return {
        title: 'No boards yet',
        text: 'Pick one from the Board Library, or add a plain board. Each one’s cut size and board feet show up here.',
        actions: [{ id: 'add-board', label: 'Add a board', primary: true }],
    };
}

/**
 * The furniture panel when nothing shows.
 * @param {{ query?: string, categoryLabels?: string[], matchesElsewhere?: number }} s
 *   categoryLabels: the rooms switched on (empty when all are shown)
 *   matchesElsewhere: how many items match the search in the rooms switched off
 */
export function furnitureEmpty({ query = '', categoryLabels = [], matchesElsewhere = 0 } = {}) {
    const q = String(query).trim();
    if (q && matchesElsewhere > 0 && categoryLabels.length) {
        return {
            icon: 'search',
            title: `No “${q}” in ${joinLabels(categoryLabels)}`,
            text: `${matchesElsewhere} ${plural(matchesElsewhere, 'match', 'matches')} in other rooms.`,
            actions: [{ id: 'all-categories', label: 'Search every room', primary: true }],
        };
    }
    if (q) {
        return {
            icon: 'search',
            title: `Nothing called “${q}”`,
            text: 'Try a shorter word, like “chair”, “bed” or “table”.',
            actions: [{ id: 'clear-search', label: 'Clear search' }],
        };
    }
    return {
        icon: 'grid',
        title: 'Nothing in this room',
        text: 'Pick another room above.',
        actions: [],
    };
}

/**
 * "Use a saved design" with nothing to pick. The entry points are hidden for
 * a new account, but the picker can still be reached once its last design is
 * deleted, or when the list fails to load.
 */
export function useSavedEmpty({ signedIn = true, failed = false } = {}) {
    if (!signedIn) {
        return {
            icon: 'bookmark',
            title: 'Sign in to use a saved design',
            text: 'Designs you make while signed in are kept, ready to redesign again.',
            actions: [{ id: 'signin', label: 'Sign in', primary: true }],
        };
    }
    if (failed) {
        return {
            icon: 'wifi-off',
            title: 'Your designs didn’t load',
            text: 'Check your connection and try again.',
            actions: [{ id: 'retry', label: 'Try again', primary: true }],
        };
    }
    return {
        icon: 'image',
        title: 'No saved designs yet',
        text: 'Redesign this photo once and the result is kept here, ready to build on.',
        actions: [{ id: 'close', label: 'Use this photo', primary: true }],
    };
}

/** "Living", "Living and Bedroom", "Living, Bedroom and Dining". */
export function joinLabels(labels) {
    const list = labels.filter(Boolean);
    if (list.length <= 1) return list[0] || '';
    return `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`;
}

/**
 * Draw an empty state. `compact` drops the icon and tightens the spacing,
 * for a narrow panel or a table cell.
 * @param {{ icon?: string, title: string, text: string, actions: Array<{id, label, primary?}> }} state
 * @param {(id: string) => void} onAction
 */
export function emptyStateElement(state, onAction, { compact = false } = {}) {
    const root = document.createElement('div');
    root.className = `library-empty${compact ? ' library-empty--compact' : ''}`;
    if (state.icon && !compact) {
        const art = document.createElement('div');
        art.className = 'library-empty-art';
        art.setAttribute('aria-hidden', 'true');
        const i = document.createElement('i');
        i.setAttribute('data-feather', state.icon);
        art.appendChild(i);
        root.appendChild(art);
    }
    const title = document.createElement('p');
    title.className = 'library-empty-title';
    title.textContent = state.title;
    const text = document.createElement('p');
    text.className = 'library-empty-text';
    text.textContent = state.text;
    root.append(title, text);
    if (state.actions?.length) {
        const actions = document.createElement('div');
        actions.className = 'library-empty-actions';
        for (const a of state.actions) {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = a.primary ? 'primary-btn' : 'secondary-btn';
            b.textContent = a.label;
            b.addEventListener('click', () => onAction?.(a.id));
            actions.appendChild(b);
        }
        root.appendChild(actions);
    }
    return root;
}
