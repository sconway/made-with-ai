/**
 * Browser error reports → one safe, bounded log record.
 *
 * /api/client-error is unauthenticated and its input ends up in the server
 * log, so everything is treated as hostile: fields are type-checked, clipped,
 * stripped of control characters (no forged log lines), and scrubbed of the
 * things an error message can accidentally carry — image data, email
 * addresses, tokens in URLs.
 */

const MAX_MESSAGE = 500;
const MAX_STACK = 2000;
const KINDS = new Set(['error', 'unhandledrejection', 'manual']);

/** Remove content that must not reach a log, and anything that could forge one. */
export function scrubText(value, max) {
  if (typeof value !== 'string') return '';
  return value
    // data: URLs are megabytes of someone's room photo.
    .replace(/data:[a-z0-9.+/-]+;base64,[A-Za-z0-9+/=]+/gi, 'data:<image>')
    .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, '<email>')
    // JWTs and long opaque tokens.
    .replace(/eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}/g, '<token>')
    // Query strings can hold session ids and auth codes.
    .replace(/(https?:\/\/[^\s?#"')]+)\?[^\s"')]*/g, '$1?<query>')
    // Control characters, except tab and newline (stack traces need newlines;
    // the record is JSON-encoded when logged, so they can't split a log line).
    .replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, ' ')
    .slice(0, max);
}

/**
 * @param {unknown} body  parsed JSON body of the report
 * @returns {{ kind: string, message: string, stack: string, path: string, release: string } | null}
 *   null when the report is unusable and should be dropped.
 */
export function sanitizeClientError(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const message = scrubText(body.message, MAX_MESSAGE).trim();
  if (!message) return null;
  const path = typeof body.path === 'string' && /^\/[\w\-/.]*$/.test(body.path) ? body.path.slice(0, 120) : '';
  return {
    kind: KINDS.has(body.kind) ? body.kind : 'error',
    message,
    stack: scrubText(body.stack, MAX_STACK),
    path,
    release: scrubText(body.release, 40).replace(/[^\w.-]/g, ''),
  };
}
