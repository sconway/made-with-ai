// /api/client-error is unauthenticated and writes to the log — its input is hostile.
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeClientError, scrubText } from '../../lib/clientErrors.js';

describe('sanitizeClientError', () => {
  test('keeps a normal report', () => {
    const r = sanitizeClientError({
      kind: 'unhandledrejection',
      message: "Cannot read properties of undefined (reading 'src')",
      stack: 'TypeError: x\n    at selectHistoryEntry (main.js:6400:12)',
      path: '/result',
    });
    assert.equal(r.kind, 'unhandledrejection');
    assert.equal(r.path, '/result');
    assert.match(r.stack, /selectHistoryEntry/);
  });

  test('drops reports with nothing usable', () => {
    for (const bad of [null, undefined, 'text', 42, [], {}, { message: '' }, { message: '   ' }, { message: 123 }]) {
      assert.equal(sanitizeClientError(bad), null);
    }
  });

  test('clips oversized fields', () => {
    const r = sanitizeClientError({ message: 'm'.repeat(10_000), stack: 's'.repeat(50_000) });
    assert.equal(r.message.length, 500);
    assert.equal(r.stack.length, 2000);
  });

  test('strips image data, emails, tokens and query strings', () => {
    const r = sanitizeClientError({
      message: 'Failed for jane.doe@example.com loading data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/AAAA== ' +
        'at https://app.example.com/result?session_id=cs_live_abc123&code=xyz ' +
        'with eyJhbGciOiJIUzI1NiIsInR5cCI6.eyJzdWIiOiIxMjM0NTY3ODkw.SflKxwRJSMeKKF2QT4',
    });
    assert.ok(!r.message.includes('jane.doe'), 'email removed');
    assert.ok(!r.message.includes('/9j/4AAQ'), 'image data removed');
    assert.ok(!r.message.includes('cs_live_abc123'), 'query string removed');
    assert.ok(!r.message.includes('SflKxwRJSMeKKF2QT4'), 'token removed');
    assert.match(r.message, /<email>/);
    assert.match(r.message, /data:<image>/);
    assert.match(r.message, /result\?<query>/);
  });

  test('cannot forge a log line: control characters are removed and the record JSON-encodes to one line', () => {
    const r = sanitizeClientError({ message: 'boom\r\n[server-error] {"fake":true}\u0000\u001b[31m' });
    assert.ok(!/[\r\u0000\u001b]/.test(r.message));
    assert.ok(!JSON.stringify(r).includes('\n'), 'the logged JSON is a single line');
  });

  test('rejects a path that is not a plain app path, and unknown kinds', () => {
    const r = sanitizeClientError({ message: 'x', path: 'https://evil.example/<script>', kind: 'whatever' });
    assert.equal(r.path, '');
    assert.equal(r.kind, 'error');
    assert.equal(sanitizeClientError({ message: 'x', path: '/plan/abc-123' }).path, '/plan/abc-123');
  });
});

test('scrubText returns an empty string for non-strings', () => {
  assert.equal(scrubText(undefined, 10), '');
  assert.equal(scrubText({ toString: () => 'x' }, 10), '');
});
