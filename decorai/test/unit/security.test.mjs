import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
    resolveCorsOrigin,
    originOf,
    buildAppCsp,
    securityHeaders,
    sanitizeCspReport,
    createCspReportLog,
    BASELINE_CSP,
} from '../../lib/security.js';

const DEV = ['http://localhost:5173'];

test('CORS in development allows the dev origins', () => {
    const r = resolveCorsOrigin({ production: false, allowedOrigin: 'https://x.com', devOrigins: DEV });
    assert.deepEqual(r.origin, DEV);
    assert.equal(r.warning, null);
});

test('CORS in production uses ALLOWED_ORIGIN, comma-separated, as bare origins', () => {
    const r = resolveCorsOrigin({
        production: true,
        allowedOrigin: 'https://www.decorait.app/, https://decorait.app',
        appUrl: 'https://ignored.example',
    });
    assert.deepEqual(r.origin, ['https://www.decorait.app', 'https://decorait.app']);
    assert.equal(r.warning, null);
});

test('CORS in production falls back to APP_URL, with a warning', () => {
    const r = resolveCorsOrigin({ production: true, allowedOrigin: '', appUrl: 'https://www.decorait.app/home' });
    assert.deepEqual(r.origin, ['https://www.decorait.app']);
    assert.match(r.warning, /ALLOWED_ORIGIN is not set/);
});

test('CORS in production never becomes a wildcard', () => {
    for (const allowedOrigin of [undefined, '', '*', ' * ', 'not a url']) {
        const r = resolveCorsOrigin({ production: true, allowedOrigin, appUrl: undefined });
        assert.equal(r.origin, false, `ALLOWED_ORIGIN=${allowedOrigin}`);
        assert.match(r.warning, /refused/);
    }
});

test('originOf keeps only http(s) origins', () => {
    assert.equal(originOf('https://a.com/x?y=1'), 'https://a.com');
    assert.equal(originOf('http://localhost:5173'), 'http://localhost:5173');
    assert.equal(originOf('javascript:alert(1)'), null);
    assert.equal(originOf('*'), null);
    assert.equal(originOf(''), null);
});

test('the app policy names Supabase, Google Analytics and the font hosts', () => {
    const csp = buildAppCsp({ supabaseUrl: 'https://abc.supabase.co' });
    assert.match(csp, /connect-src [^;]*https:\/\/abc\.supabase\.co/);
    assert.match(csp, /connect-src [^;]*wss:\/\/abc\.supabase\.co/);
    assert.match(csp, /script-src 'self' https:\/\/www\.googletagmanager\.com;/);
    assert.match(csp, /font-src [^;]*https:\/\/fonts\.gstatic\.com/);
    assert.match(csp, /frame-ancestors 'none'/);
    assert.match(csp, /report-uri \/api\/csp-report/);
    // No script loosening.
    assert.doesNotMatch(csp, /script-src[^;]*'unsafe-(inline|eval)'/);
});

function run(mw) {
    const headers = {};
    const res = { set: (k, v) => { headers[k] = v; } };
    let called = false;
    mw({}, res, () => { called = true; });
    assert.ok(called, 'middleware calls next()');
    return headers;
}

test('report mode enforces the baseline and reports on the full policy', () => {
    const h = run(securityHeaders({ production: true, cspMode: 'report', supabaseUrl: 'https://abc.supabase.co' }));
    assert.equal(h['Content-Security-Policy'], BASELINE_CSP);
    assert.match(h['Content-Security-Policy-Report-Only'], /default-src 'self'/);
    assert.equal(h['X-Content-Type-Options'], 'nosniff');
    assert.equal(h['X-Frame-Options'], 'DENY');
    assert.match(h['Strict-Transport-Security'], /max-age=\d+/);
    assert.match(h['Permissions-Policy'], /camera=\(self\)/);
});

test('enforce mode enforces the full policy; off sends none; unknown means report', () => {
    const enforced = run(securityHeaders({ production: true, cspMode: 'enforce' }));
    assert.match(enforced['Content-Security-Policy'], /default-src 'self'/);
    assert.equal(enforced['Content-Security-Policy-Report-Only'], undefined);

    const off = run(securityHeaders({ production: true, cspMode: 'off' }));
    assert.equal(off['Content-Security-Policy'], undefined);
    assert.equal(off['Content-Security-Policy-Report-Only'], undefined);

    const typo = run(securityHeaders({ production: true, cspMode: 'enforced' }));
    assert.equal(typo['Content-Security-Policy'], BASELINE_CSP);
});

test('HSTS is only sent in production', () => {
    const h = run(securityHeaders({ production: false }));
    assert.equal(h['Strict-Transport-Security'], undefined);
});

test('CSP reports are reduced to directive, source origin and page path', () => {
    const r = sanitizeCspReport({
        'csp-report': {
            'document-uri': 'https://www.decorait.app/library?token=secret',
            'effective-directive': 'connect-src',
            'blocked-uri': 'https://evil.example/collect?email=a@b.c',
        },
    });
    assert.deepEqual(r, { directive: 'connect-src', blocked: 'https://evil.example', page: '/library' });
});

test('CSP reports: inline/eval sources, Reporting API form, share ids hidden', () => {
    assert.equal(sanitizeCspReport({ 'csp-report': { 'violated-directive': 'script-src-elem', 'blocked-uri': 'inline' } }).blocked, 'inline');
    const r = sanitizeCspReport([{ type: 'csp-violation', body: { effectiveDirective: 'img-src', blockedURL: 'data', documentURL: 'https://x.app/s/AbCdEfGhJkLm' } }]);
    assert.deepEqual(r, { directive: 'img-src', blocked: 'data', page: '/s/:id' });
});

test('CSP reports: junk is rejected', () => {
    assert.equal(sanitizeCspReport(null), null);
    assert.equal(sanitizeCspReport('x'), null);
    assert.equal(sanitizeCspReport({ 'csp-report': { 'effective-directive': '<script>' } }), null);
});

test('each distinct violation is logged once per window', () => {
    const lines = [];
    let t = 0;
    const record = createCspReportLog({ windowMs: 1000, log: (...a) => lines.push(a.join(' ')), now: () => t });
    const a = { directive: 'img-src', blocked: 'https://x.com', page: '/' };
    const b = { directive: 'connect-src', blocked: 'https://y.com', page: '/' };
    assert.equal(record(a), true);
    assert.equal(record(a), false);
    assert.equal(record(b), true);
    t = 1500;
    assert.equal(record(a), true);
    assert.equal(record(null), false);
    assert.equal(lines.length, 3);
    assert.match(lines[0], /^\[csp-report\] /);
});

test('the log stops growing at its key limit', () => {
    let t = 0;
    const record = createCspReportLog({ windowMs: 1000, maxKeys: 2, log: () => {}, now: () => t });
    assert.equal(record({ directive: 'a', blocked: '1', page: '/' }), true);
    assert.equal(record({ directive: 'a', blocked: '2', page: '/' }), true);
    assert.equal(record({ directive: 'a', blocked: '3', page: '/' }), false);
    t = 2000; // old keys expire and make room
    assert.equal(record({ directive: 'a', blocked: '3', page: '/' }), true);
});
