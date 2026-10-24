/* DecorAIt service worker — app shell only.
 *
 * Deliberately small. A service worker is the one piece of a web app that can
 * keep serving stale code after a deploy, so the rules here are conservative:
 *
 *   • API traffic is NEVER touched. /api, /replicate and /openai go straight to
 *     the network — caching a generation, a credit balance or an auth response
 *     would be wrong at best and a data leak between accounts at worst.
 *   • Navigations are network-first. A deploy lands on the next load; the cache
 *     is only a fallback for being offline.
 *   • Static assets are stale-while-revalidate. Vite fingerprints its bundles,
 *     so a changed asset has a changed URL and can't go stale.
 *   • Only same-origin GETs with a 200/basic response are ever stored.
 *
 * Kill switch: postMessage({ type: 'UNREGISTER' }) makes it uninstall itself
 * and drop every cache. Bump CACHE_VERSION to invalidate everything on deploy.
 */

const CACHE_VERSION = 'v1';
const SHELL_CACHE = `decorait-shell-${CACHE_VERSION}`;
const ASSET_CACHE = `decorait-assets-${CACHE_VERSION}`;
const OFFLINE_URL = '/';

// Paths whose responses must never be cached or served from cache.
const NEVER_CACHE = [/^\/api\//, /^\/replicate\//, /^\/openai\//, /^\/webhook\//, /^\/health$/];
const isBypassed = (pathname) => NEVER_CACHE.some((re) => re.test(pathname));

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll([OFFLINE_URL, '/manifest.webmanifest', '/icon-192.png']))
      // A failed precache must not block activation — the app still works
      // online without it.
      .catch((err) => console.warn('[sw] precache skipped:', err))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith('decorait-') && k !== SHELL_CACHE && k !== ASSET_CACHE)
          .map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type !== 'UNREGISTER') return;
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith('decorait-')).map((k) => caches.delete(k)));
      await self.registration.unregister();
    })(),
  );
});

/** Store a response only if it's one we're confident is safe to replay. */
function isCacheable(response) {
  return response && response.status === 200 && response.type === 'basic';
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  let url;
  try { url = new URL(request.url); } catch { return; }
  if (url.origin !== self.location.origin) return;  // CDN fonts/icons: leave to the browser
  if (isBypassed(url.pathname)) return;
  // Range requests (media seeking) don't survive a round trip through Cache.
  if (request.headers.has('range')) return;

  // Navigations: network first, cached shell as the offline fallback. This is
  // what makes a deploy visible immediately instead of a refresh later.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          if (isCacheable(fresh)) {
            const copy = fresh.clone();
            caches.open(SHELL_CACHE).then((c) => c.put(OFFLINE_URL, copy)).catch(() => {});
          }
          return fresh;
        } catch {
          return (await caches.match(OFFLINE_URL)) || Response.error();
        }
      })(),
    );
    return;
  }

  // Everything else (hashed bundles, icons, furniture SVGs):
  // stale-while-revalidate.
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      const network = fetch(request)
        .then((response) => {
          if (isCacheable(response)) {
            const copy = response.clone();
            caches.open(ASSET_CACHE).then((c) => c.put(request, copy)).catch(() => {});
          }
          return response;
        })
        .catch(() => null);
      return cached || (await network) || Response.error();
    })(),
  );
});
