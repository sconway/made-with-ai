/**
 * DecorAIt router — History API routing.
 *
 * Before this existed the entire app lived at `/` and was driven by ~121
 * `.hidden` class toggles. That meant: browser Back exited the app, refresh
 * destroyed all state, nothing could be linked to, and Google Analytics could
 * only ever record a single pageview — which made the conversion funnel
 * impossible to measure.
 *
 * Routes are defined in .design/decorait-overhaul/INFORMATION_ARCHITECTURE.md.
 *
 * The server already serves `dist/index.html` for unmatched paths
 * (server.js `app.get('*')`), so deep links work in production with no server
 * change.
 *
 * Auth is deliberately NOT a route — it is the `?auth=` query param, so signing
 * in overlays the current view instead of destroying it. A user gated at
 * Generate must come back to their photo and settings intact.
 */

/** Route table. Order matters — first match wins. */
const ROUTES = [
  { name: 'home',      pattern: /^\/$/ },
  { name: 'design',    pattern: /^\/design\/?$/ },
  { name: 'result',    pattern: /^\/result\/?$/ },
  { name: 'result',    pattern: /^\/result\/([\w-]+)\/?$/,  keys: ['id'] },
  { name: 'plan',      pattern: /^\/plan\/?$/ },
  { name: 'plan',      pattern: /^\/plan\/([\w-]+)\/?$/,    keys: ['id'] },
  { name: 'build',     pattern: /^\/build\/?$/ },
  { name: 'build',     pattern: /^\/build\/([\w-]+)\/?$/,   keys: ['id'] },
  { name: 'library',   pattern: /^\/library\/?$/,           defaults: { tab: 'designs' } },
  { name: 'library',   pattern: /^\/library\/(designs|plans|builds)\/?$/, keys: ['tab'] },
  { name: 'upgrade',   pattern: /^\/upgrade\/?$/ },
];

const listeners = new Set();
let currentRoute = { name: 'home', params: {} };
/** Guards against navigate() → render → navigate() feedback loops. */
let applying = false;

/** Parse a pathname into a route descriptor. Unknown paths fall back to home. */
export function parse(pathname) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';
  for (const route of ROUTES) {
    const match = clean.match(route.pattern);
    if (!match) continue;
    const params = { ...(route.defaults || {}) };
    (route.keys || []).forEach((key, i) => { params[key] = match[i + 1]; });
    return { name: route.name, params };
  }
  return { name: 'home', params: {}, unknown: true };
}

/** Build a path from a route name + params. */
export function pathFor(name, params = {}) {
  switch (name) {
    case 'home':    return '/';
    case 'design':  return '/design';
    case 'result':  return params.id ? `/result/${params.id}` : '/result';
    case 'plan':    return params.id ? `/plan/${params.id}` : '/plan';
    case 'build':   return params.id ? `/build/${params.id}` : '/build';
    case 'library': return `/library/${params.tab || 'designs'}`;
    case 'upgrade': return '/upgrade';
    default:        return '/';
  }
}

export function current() {
  return currentRoute;
}

/** True while the router is applying a route — used to suppress re-entrancy. */
export function isApplying() {
  return applying;
}

/**
 * Navigate to a route.
 * @param {string} name   Route name, or a raw path starting with "/"
 * @param {object} params Route params
 * @param {object} opts   { replace, silent } — `silent` skips the render pass
 */
export function navigate(name, params = {}, opts = {}) {
  const path = name.startsWith('/') ? name : pathFor(name, params);
  const route = parse(path);
  const url = path + window.location.search;

  if (opts.replace) window.history.replaceState({ route: route.name }, '', url);
  else window.history.pushState({ route: route.name }, '', url);

  currentRoute = route;
  if (!opts.silent) emit(route);
  trackPageview(path);
}

/**
 * Update the URL to match a view the app entered on its own (e.g. an existing
 * button handler), WITHOUT re-rendering. Keeps URL and DOM in sync while the
 * app is still driven by its original show/hide functions.
 */
export function syncUrl(name, params = {}) {
  if (applying) return;
  const path = pathFor(name, params);
  if (window.location.pathname === path) return;
  window.history.pushState({ route: name }, '', path + window.location.search);
  currentRoute = parse(path);
  trackPageview(path);
}

export function onRoute(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit(route) {
  applying = true;
  try {
    listeners.forEach(fn => {
      try { fn(route); } catch (err) { console.error('Route handler failed:', err); }
    });
  } finally {
    applying = false;
  }
}

/**
 * GA4 pageview per route change. Without this the funnel
 * (/ → /design → /result) is invisible, which is the whole reason a suspected
 * conversion problem couldn't be diagnosed.
 */
function trackPageview(path) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
}

/** Read the ?auth= overlay param (auth is an overlay, not a route). */
export function authParam() {
  const value = new URLSearchParams(window.location.search).get('auth');
  return value === 'signin' || value === 'signup' ? value : null;
}

/** Set or clear ?auth= without touching the current path. */
export function setAuthParam(mode) {
  const url = new URL(window.location.href);
  if (mode) url.searchParams.set('auth', mode);
  else url.searchParams.delete('auth');
  window.history.replaceState(window.history.state, '', url.pathname + url.search);
}

/** Start the router. Applies the current URL and begins listening to Back/Forward. */
export function start(handler) {
  if (handler) onRoute(handler);

  window.addEventListener('popstate', () => {
    currentRoute = parse(window.location.pathname);
    emit(currentRoute);
  });

  currentRoute = parse(window.location.pathname);
  // Normalise unknown paths and bare /library so the URL always reflects reality
  if (currentRoute.unknown) {
    window.history.replaceState({ route: 'home' }, '', '/' + window.location.search);
  } else if (window.location.pathname.replace(/\/+$/, '') === '/library') {
    window.history.replaceState({ route: 'library' }, '', '/library/designs' + window.location.search);
  }
  emit(currentRoute);
  trackPageview(window.location.pathname);
}
