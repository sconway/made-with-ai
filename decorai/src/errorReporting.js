/**
 * Error reporting — makes failures in visitors' browsers visible.
 *
 * Before this, a script error on someone's phone was known only if they wrote
 * in. Uncaught errors and unhandled promise rejections are now sent to
 * /api/client-error (which writes them to the server log) and counted in
 * analytics as GA4 `exception` events.
 *
 * Deliberately small and first-party: no SDK, no third-party script. If the
 * volume ever justifies a hosted tracker (Sentry and similar), this file is
 * the one place to swap it in.
 *
 * Privacy: only the error's message, stack and the current path (no query
 * string) are sent. Image data and email addresses are stripped here and again
 * on the server.
 */
import { track } from './analytics.js';

const ENDPOINT = '/api/client-error';
/** A page stuck in an error loop must not flood the server. */
const MAX_REPORTS_PER_PAGE = 10;
/** Noise that says nothing about this app. */
const IGNORED = [
    /^Script error\.?$/i,                 // cross-origin script, no details available
    /ResizeObserver loop/i,               // benign browser notification
    /^(chrome|moz|safari(-web)?)-extension:/i,
];

const seen = new Set();
let sent = 0;

function scrub(text, max) {
    return String(text || '')
        .replace(/data:[a-z0-9.+/-]+;base64,[A-Za-z0-9+/=]+/gi, 'data:<image>')
        .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, '<email>')
        .slice(0, max);
}

/**
 * Report an error. Safe to call from anywhere, including catch blocks for
 * failures the user never sees: it never throws and never blocks.
 * @param {unknown} error
 * @param {'error'|'unhandledrejection'|'manual'} [kind]
 */
export function reportError(error, kind = 'manual') {
    try {
        const message = scrub(error?.message ?? error, 500).trim();
        const stack = scrub(error?.stack, 2000);
        if (!message || IGNORED.some((re) => re.test(message) || re.test(stack))) return;

        // The same failure firing repeatedly is one report.
        const fingerprint = `${message}|${stack.split('\n')[1] || ''}`;
        if (seen.has(fingerprint) || sent >= MAX_REPORTS_PER_PAGE) return;
        seen.add(fingerprint);
        sent += 1;

        track('exception', { description: message.slice(0, 150), fatal: kind !== 'manual' });

        const body = JSON.stringify({ kind, message, stack, path: window.location.pathname });
        // sendBeacon survives the page closing; fetch+keepalive is the fallback.
        const queued = typeof navigator.sendBeacon === 'function'
            && navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }));
        if (!queued) {
            fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body,
                keepalive: true,
            }).catch(() => {});
        }
    } catch (_) {
        // Reporting must never become the error.
    }
}

/** Start listening for uncaught errors. Call once, as early as possible. */
export function initErrorReporting() {
    window.addEventListener('error', (event) => {
        // Resource load failures (an <img> 404) arrive here too, with no
        // `error` and no message — not what this is for.
        if (!event.error && !event.message) return;
        reportError(event.error || { message: event.message, stack: `${event.filename}:${event.lineno}:${event.colno}` }, 'error');
    });
    window.addEventListener('unhandledrejection', (event) => {
        const reason = event.reason;
        // An aborted fetch (navigation, a timeout we set ourselves) is not a bug.
        if (reason?.name === 'AbortError') return;
        reportError(reason instanceof Error ? reason : { message: String(reason?.message ?? reason) }, 'unhandledrejection');
    });
}
