/**
 * Shared toast behaviour: how long a toast stays up, and how it goes away.
 *
 * A fixed 3–4s cut off the longer messages ("The model left the highlight in
 * place. Try again, or describe the item…") before they could be read. The
 * time now scales with the length of the text, pauses while the pointer or
 * keyboard focus is on the toast, and every toast has a close button.
 */

const BASE_MS = 2000;
const PER_WORD_MS = 300; // ~200 wpm: a comfortable glance-and-read pace
const MIN_MS = 4000;
const MAX_MS = 15000;

/** How long `text` needs on screen to be read. */
export function readingTime(text) {
    const words = String(text || '').trim().split(/\s+/).filter(Boolean).length;
    return Math.min(MAX_MS, Math.max(MIN_MS, BASE_MS + words * PER_WORD_MS));
}

/**
 * Make `toast` dismissable and time it out. The element must already be in
 * the DOM; this adds a close button, shows it (the `.show` class), and
 * removes it after the reading time — paused while hovered or focused.
 *
 * @param {HTMLElement} toast
 * @param {{ text?: string, duration?: number|null, onRemove?: () => void }} opts
 *   duration: ms to stay up; null keeps it until dismissed. Defaults to the
 *   reading time of `text` (or the toast's own text).
 * @returns {() => void} dismiss
 */
export function presentToast(toast, { text, duration, onRemove } = {}) {
    const ms = duration === undefined ? readingTime(text ?? toast.textContent) : duration;
    const errorish = /error/.test(toast.className);
    toast.setAttribute('role', errorish ? 'alert' : 'status');
    toast.classList.add('toast-dismissable');

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'toast-close';
    close.setAttribute('aria-label', 'Dismiss notification');
    close.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    toast.appendChild(close);

    let timer = null;
    let remaining = ms;
    let startedAt = 0;
    let gone = false;

    const dismiss = () => {
        if (gone) return;
        gone = true;
        clearTimeout(timer);
        toast.classList.remove('show');
        setTimeout(() => { toast.remove(); onRemove?.(); }, 300);
    };
    const start = () => {
        if (gone || remaining == null || timer) return;
        startedAt = Date.now();
        timer = setTimeout(dismiss, remaining);
    };
    const pause = () => {
        if (gone || remaining == null || !timer) return;
        clearTimeout(timer);
        timer = null;
        remaining = Math.max(1500, remaining - (Date.now() - startedAt));
    };

    close.addEventListener('click', dismiss);
    toast.addEventListener('mouseenter', pause);
    toast.addEventListener('mouseleave', start);
    toast.addEventListener('focusin', pause);
    toast.addEventListener('focusout', start);

    requestAnimationFrame(() => toast.classList.add('show'));
    start();
    return dismiss;
}
