/**
 * The Share dialog: one place to send a design out.
 *
 *   1. Share image — the before/after picture, through the phone's share
 *      sheet (or a download). Nothing is uploaded. Works for everyone.
 *   2. Create a link — publishes that picture at /s/<id> so it can be pasted
 *      anywhere and unfurls with a preview. Needs an account, says plainly
 *      that the link is public, and can be taken down from the same dialog.
 *
 * The picture is built once when the dialog opens and shown as a preview, so
 * the user sees exactly what will leave the app before anything does.
 *
 * main.js owns app state; everything this module needs from it arrives through
 * initShareDialog(), which keeps the two decoupled.
 */
import { buildShareImage, buildLinkPreviewImage, blobToDataUrl, shareDesign } from './shareImage.js';

let deps = null;
/** What the dialog is currently showing. */
let current = null; // { before, after, card: Blob|null, cardUrl: string|null }
/** Links made this visit, by the design image they were made from. */
const linksByDesign = new Map(); // after → { id, url }

const $ = (id) => document.getElementById(id);

function setHidden(el, hidden) {
    if (el) el.classList.toggle('hidden', hidden);
}

function showError(message) {
    const el = $('share-error');
    if (!el) return;
    el.textContent = message || '';
    setHidden(el, !message);
}

async function api(path, options = {}) {
    const token = deps.getAccessToken();
    const res = await fetch(`${deps.apiBase}${path}`, {
        ...options,
        headers: {
            ...(options.body ? { 'Content-Type': 'application/json' } : {}),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });
    const data = res.status === 204 ? {} : await res.json().catch(() => ({}));
    if (!res.ok) {
        const err = new Error(data.error || 'Something went wrong. Please try again.');
        err.status = res.status;
        err.code = data.code;
        throw err;
    }
    return data;
}

/** Show the right half of the link section for the design on screen. */
function renderLinkState() {
    const section = $('share-link-section');
    const enabled = deps.linksEnabled();
    setHidden(section, !enabled);
    if (!enabled) return;

    const link = current ? linksByDesign.get(current.after) : null;
    setHidden($('share-link-create'), !!link);
    setHidden($('share-link-ready'), !link);
    if (link) $('share-link-url').value = link.url;
}

function formatDate(iso) {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

/** The account's live links, so any of them can be taken down later. */
async function loadMyLinks() {
    const wrap = $('share-my-links');
    const list = $('share-my-links-list');
    if (!wrap || !list) return;
    if (!deps.linksEnabled() || !deps.getAccessToken()) { setHidden(wrap, true); return; }
    try {
        const { shares = [], limit } = await api('/api/shares');
        setHidden(wrap, shares.length === 0);
        $('share-my-links-summary').textContent = `Your shared links (${shares.length} of ${limit})`;
        list.replaceChildren(...shares.map((share) => {
            const row = document.createElement('li');
            row.className = 'share-my-link';

            const a = document.createElement('a');
            a.href = share.url;
            a.target = '_blank';
            a.rel = 'noopener';
            a.textContent = share.url.replace(/^https?:\/\//, '');

            const meta = document.createElement('span');
            meta.className = 'share-my-link-meta';
            const views = share.views === 1 ? '1 view' : `${share.views} views`;
            meta.textContent = [formatDate(share.createdAt), views].filter(Boolean).join(' · ');

            const stop = document.createElement('button');
            stop.type = 'button';
            stop.className = 'text-btn share-stop-btn';
            stop.textContent = 'Stop sharing';
            stop.addEventListener('click', () => revoke(share.id, stop));

            row.append(a, meta, stop);
            return row;
        }));
    } catch (err) {
        // The list is a convenience; the dialog works without it.
        console.warn('Could not load shared links:', err);
        setHidden(wrap, true);
    }
}

async function revoke(id, button) {
    if (button) button.disabled = true;
    showError('');
    try {
        await api(`/api/shares/${encodeURIComponent(id)}`, { method: 'DELETE' });
        for (const [key, link] of linksByDesign) if (link.id === id) linksByDesign.delete(key);
        deps.track('share_link_revoked');
        deps.toast('Link taken down. It no longer opens for anyone.', 'success');
        renderLinkState();
        await loadMyLinks();
    } catch (err) {
        if (button) button.disabled = false;
        showError(err.message);
    }
}

async function createLink() {
    if (!current) return;
    // A public link needs someone accountable for it. Come back here after.
    if (!deps.getAccessToken()) {
        const reopen = { before: current.before, after: current.after };
        closeShareDialog();
        deps.requireAccount(() => openShareDialog(reopen));
        return;
    }
    const btn = $('share-create-link-btn');
    btn.disabled = true;
    btn.setAttribute('aria-busy', 'true');
    showError('');
    try {
        const card = current.card || (await buildShareImage({ before: current.before, after: current.after, host: deps.host })).blob;
        const og = await buildLinkPreviewImage({ before: current.before, after: current.after });
        const [cardData, ogData] = await Promise.all([blobToDataUrl(card), blobToDataUrl(og)]);
        const link = await api('/api/shares', { method: 'POST', body: JSON.stringify({ card: cardData, og: ogData }) });
        linksByDesign.set(current.after, { id: link.id, url: link.url });
        deps.track('share_link_created');
        renderLinkState();
        loadMyLinks();
    } catch (err) {
        showError(err.message);
        if (err.code === 'SHARE_LIMIT') $('share-my-links')?.setAttribute('open', '');
    } finally {
        btn.disabled = false;
        btn.removeAttribute('aria-busy');
    }
}

async function copyLink() {
    const input = $('share-link-url');
    const btn = $('share-copy-link-btn');
    try {
        await navigator.clipboard.writeText(input.value);
    } catch (_) {
        // Older browsers, or clipboard permission refused: select it so one
        // keystroke copies it.
        input.focus();
        input.select();
        try { document.execCommand('copy'); } catch (__) { /* leave it selected */ }
    }
    deps.track('share', { method: 'link_copy', content_type: current?.before ? 'before_after' : 'design' });
    const label = btn.querySelector('span');
    if (label) {
        label.textContent = 'Copied';
        setTimeout(() => { label.textContent = 'Copy'; }, 1800);
    }
}

async function shareImage() {
    if (!current) return;
    const btn = $('share-image-btn');
    btn.disabled = true;
    showError('');
    try {
        const outcome = await shareDesign({
            before: current.before,
            after: current.after,
            host: deps.host,
            url: deps.origin,
            card: current.card,
        });
        if (outcome === 'cancelled') return;
        deps.track('share', { method: outcome === 'shared' ? 'share_sheet' : 'download', content_type: current.before ? 'before_after' : 'design' });
        if (outcome === 'downloaded') deps.toast('Saved a before-and-after image. Post it wherever you like.', 'success');
        closeShareDialog();
    } catch (err) {
        console.error('Share failed:', err);
        deps.reportError(err);
        showError("We couldn't build the share image. Try Save Design instead.");
    } finally {
        btn.disabled = false;
    }
}

/**
 * Open the dialog for a design.
 * @param {{ before: string|null, after: string }} design  image URLs / data URLs
 */
export async function openShareDialog({ before, after }) {
    const modal = $('share-modal');
    if (!modal || !deps) return;
    if (current?.cardUrl) URL.revokeObjectURL(current.cardUrl);
    current = { before, after, card: null, cardUrl: null };

    showError('');
    const preview = $('share-preview');
    preview.removeAttribute('src');
    $('share-preview-frame').setAttribute('aria-busy', 'true');
    renderLinkState();
    setHidden($('share-my-links'), true);

    modal.classList.remove('hidden');
    modal.classList.add('show');
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
    deps.track('share_started', { has_before: !!before, signed_in: !!deps.getAccessToken() });
    loadMyLinks();

    try {
        const { blob } = await buildShareImage({ before, after, host: deps.host });
        // The dialog may have been closed, or reopened for another design.
        if (!current || current.after !== after) return;
        current.card = blob;
        current.cardUrl = URL.createObjectURL(blob);
        preview.src = current.cardUrl;
    } catch (err) {
        console.error('Could not build the share preview:', err);
        deps.reportError(err);
        showError("We couldn't build the share image. Try Save Design instead.");
    } finally {
        $('share-preview-frame').removeAttribute('aria-busy');
    }
}

export function closeShareDialog() {
    const modal = $('share-modal');
    if (!modal) return;
    modal.classList.remove('show');
    modal.classList.add('hidden');
    modal.style.opacity = '';
    modal.style.visibility = '';
}

/**
 * @param {object} d
 * @param {string} d.apiBase                     prefix for API calls ('' when same-origin)
 * @param {string} d.host                        shown in the card footer
 * @param {string} d.origin                      link sent along with a shared image
 * @param {() => string|null} d.getAccessToken   the signed-in user's token, or null
 * @param {() => boolean} d.linksEnabled         whether the server offers share links
 * @param {(resume: () => void) => void} d.requireAccount  ask the visitor to sign up, then call resume
 * @param {(name: string, params?: object) => void} d.track
 * @param {(message: string, type?: string) => void} d.toast
 * @param {(error: unknown) => void} d.reportError
 */
export function initShareDialog(d) {
    deps = d;
    const modal = $('share-modal');
    if (!modal) return;
    $('close-share-modal-btn')?.addEventListener('click', closeShareDialog);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeShareDialog(); });
    $('share-image-btn')?.addEventListener('click', shareImage);
    $('share-create-link-btn')?.addEventListener('click', createLink);
    $('share-copy-link-btn')?.addEventListener('click', copyLink);
    $('share-link-url')?.addEventListener('focus', (e) => e.target.select());
    $('share-stop-current-btn')?.addEventListener('click', (e) => {
        const link = current ? linksByDesign.get(current.after) : null;
        if (link) revoke(link.id, e.currentTarget);
    });
}
