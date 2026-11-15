/**
 * Browser-facing security settings: which sites may call the API (CORS), the
 * headers every response carries, and the content security policy.
 *
 * The app and its API are served from the same origin, so the browser never
 * needs CORS for the app itself. CORS only decides which *other* sites may call
 * the API from a visitor's browser, and the safe answer is "none unless named".
 */

/**
 * Decide the CORS `origin` setting.
 *
 * Production: the origins in ALLOWED_ORIGIN (comma-separated), else the origin
 * of APP_URL, else none at all. It never falls back to `*`, which would let
 * any website call the API with a visitor's session. Refusing to start was the
 * alternative, but with the app on the same origin "no cross-origin callers"
 * is just as safe and can't take the site down over a missing variable.
 *
 * @returns {{ origin: string[]|false, warning: string|null }}
 */
export function resolveCorsOrigin({ production, allowedOrigin, appUrl, devOrigins = [] }) {
    if (!production) return { origin: devOrigins, warning: null };

    const listed = String(allowedOrigin || '')
        .split(',')
        .map((o) => o.trim())
        .filter(Boolean)
        .map(originOf)
        .filter(Boolean);
    if (listed.length) return { origin: listed, warning: null };

    const fromAppUrl = originOf(appUrl);
    if (fromAppUrl) {
        return {
            origin: [fromAppUrl],
            warning: `[security] ALLOWED_ORIGIN is not set; allowing cross-origin calls from APP_URL (${fromAppUrl}) only`,
        };
    }
    return {
        origin: false,
        warning: '[security] Neither ALLOWED_ORIGIN nor APP_URL is set; cross-origin API calls are refused (the app itself is unaffected)',
    };
}

/** "https://example.com/path" → "https://example.com"; anything else → null. */
export function originOf(value) {
    if (!value) return null;
    if (String(value).trim() === '*') return null;
    try {
        const url = new URL(String(value).trim());
        if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
        return url.origin;
    } catch (_) {
        return null;
    }
}

// Safe to enforce from day one: nothing in the app needs plugins, a <base>
// tag, to be framed, or to post a form to another site.
export const BASELINE_CSP = [
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
].join('; ');

export const CSP_REPORT_PATH = '/api/csp-report';

/**
 * The full policy for the app: what it loads today, and nothing else.
 *
 * Images are allowed from any https host because results come back from the
 * model providers' CDNs and saved designs from signed storage URLs, and an
 * image can't run code. Scripts and network calls are pinned to named hosts.
 */
export function buildAppCsp({ supabaseUrl } = {}) {
    const supabase = originOf(supabaseUrl);
    const supabaseWs = supabase ? supabase.replace(/^http/, 'ws') : null;
    const ga = ['https://*.googletagmanager.com', 'https://*.google-analytics.com', 'https://*.analytics.google.com'];
    const directives = {
        'default-src': ["'self'"],
        'script-src': ["'self'", 'https://www.googletagmanager.com'],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
        'img-src': ["'self'", 'data:', 'blob:', 'https:'],
        'connect-src': [
            "'self'",
            ...(supabase ? [supabase, supabaseWs] : []),
            'https://replicate.delivery',
            'https://*.replicate.delivery',
            ...ga,
        ],
        'media-src': ["'self'", 'blob:', 'data:'],
        'worker-src': ["'self'", 'blob:'],
        'manifest-src': ["'self'"],
        'frame-src': ["'none'"],
        'base-uri': ["'self'"],
        'object-src': ["'none'"],
        'frame-ancestors': ["'none'"],
        'form-action': ["'self'"],
        'report-uri': [CSP_REPORT_PATH],
    };
    return Object.entries(directives).map(([k, v]) => `${k} ${v.join(' ')}`).join('; ');
}

/**
 * Express middleware setting the headers every response carries.
 *
 * cspMode:
 *   'report'  (default) the baseline policy is enforced and the full policy is
 *             sent as Report-Only, so a source the app needs but the policy
 *             missed shows up as a `[csp-report]` log line instead of a
 *             broken page. Switch to 'enforce' once the logs are quiet.
 *   'enforce' the full policy is enforced.
 *   'off'     no content security policy at all.
 */
export function securityHeaders({ production, cspMode = 'report', supabaseUrl } = {}) {
    const mode = ['report', 'enforce', 'off'].includes(cspMode) ? cspMode : 'report';
    const fullPolicy = buildAppCsp({ supabaseUrl });
    return function setSecurityHeaders(req, res, next) {
        res.set('X-Content-Type-Options', 'nosniff');
        res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.set('X-Frame-Options', 'DENY');
        // The camera is used for room photos; nothing else is.
        res.set('Permissions-Policy', 'camera=(self), microphone=(), geolocation=(), payment=(), usb=()');
        if (production) {
            // Render serves HTTPS only. Subdomains are left out on purpose: they
            // aren't this app's to commit to HTTPS.
            res.set('Strict-Transport-Security', 'max-age=15552000');
        }
        if (mode === 'enforce') {
            res.set('Content-Security-Policy', fullPolicy);
        } else if (mode === 'report') {
            res.set('Content-Security-Policy', BASELINE_CSP);
            res.set('Content-Security-Policy-Report-Only', fullPolicy);
        }
        next();
    };
}

const SCHEME_ONLY = /^(data|blob|inline|eval|self|wasm-eval|trusted-types-sink)$/i;

/**
 * Reduce a CSP violation report to what's needed to fix the policy: which
 * directive, which source (origin only), and which page (path only). Query
 * strings and full URLs are dropped because they can carry tokens or ids.
 *
 * Accepts the legacy `report-uri` body ({ "csp-report": {...} }) and the
 * Reporting API's array form. Returns null for anything unrecognisable.
 */
export function sanitizeCspReport(body) {
    let r = null;
    if (body && typeof body === 'object') {
        if (body['csp-report'] && typeof body['csp-report'] === 'object') r = body['csp-report'];
        else if (Array.isArray(body) && body[0]?.body) r = body[0].body;
        else if (body.body && typeof body.body === 'object') r = body.body;
    }
    if (!r) return null;
    const directive = String(r['effective-directive'] || r.effectiveDirective || r['violated-directive'] || r.violatedDirective || '')
        .split(' ')[0]
        .slice(0, 40);
    if (!/^[a-z-]+$/.test(directive)) return null;
    const rawBlocked = String(r['blocked-uri'] ?? r.blockedURL ?? r.blockedUri ?? '').trim();
    const blocked = SCHEME_ONLY.test(rawBlocked.replace(/:$/, ''))
        ? rawBlocked.replace(/:$/, '').toLowerCase()
        : originOf(rawBlocked) || (rawBlocked ? 'other' : 'none');
    let page = 'unknown';
    try {
        page = new URL(String(r['document-uri'] || r.documentURL || '')).pathname.slice(0, 80);
    } catch (_) { /* keep 'unknown' */ }
    // Share pages are /s/<id>; the id is a capability, so don't log it.
    if (page.startsWith('/s/')) page = '/s/:id';
    return { directive, blocked, page };
}

/**
 * Log each distinct violation once per window, so one missing source on a busy
 * day is one line rather than one per page view.
 */
export function createCspReportLog({ windowMs = 60 * 60 * 1000, maxKeys = 500, log = console.warn, now = Date.now } = {}) {
    const seen = new Map();
    return function record(report) {
        if (!report) return false;
        const key = `${report.directive} ${report.blocked} ${report.page}`;
        const t = now();
        const last = seen.get(key);
        if (last !== undefined && t - last < windowMs) return false;
        if (seen.size >= maxKeys) {
            for (const [k, at] of seen) if (t - at >= windowMs) seen.delete(k);
            if (seen.size >= maxKeys) return false;
        }
        seen.set(key, t);
        log('[csp-report]', JSON.stringify(report));
        return true;
    };
}
