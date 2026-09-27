import { findAirport, type Airport } from './airports'
import { REGIONS } from './regions'

export const SITE_NAME = 'Flight Globe'

export const DEFAULT_TITLE = 'Flight Globe — live global air traffic'

export const DEFAULT_DESCRIPTION =
  'Watch live flights on a 3D globe. Track callsigns, routes, altitude, and airports in real time — follow any aircraft around the world.'

export const DEFAULT_ROBOTS =
  'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

const NOINDEX = 'noindex,nofollow'

/** Friendlier region names for titles than the compact HUD labels. */
const REGION_SEO: Record<string, { label: string; description: string }> = {
  world: {
    label: 'World',
    description: DEFAULT_DESCRIPTION,
  },
  na: {
    label: 'North America',
    description:
      'Watch live flights over North America on a 3D globe. Track callsigns, routes, altitude, and airports in real time.',
  },
  eu: {
    label: 'Europe',
    description:
      'Watch live flights over Europe on a 3D globe. Track callsigns, routes, altitude, and airports in real time.',
  },
  as: {
    label: 'Asia',
    description:
      'Watch live flights over Asia on a 3D globe. Track callsigns, routes, altitude, and airports in real time.',
  },
  oc: {
    label: 'Oceania',
    description:
      'Watch live flights over Oceania on a 3D globe. Track callsigns, routes, altitude, and airports in real time.',
  },
  sa: {
    label: 'South America',
    description:
      'Watch live flights over South America on a 3D globe. Track callsigns, routes, altitude, and airports in real time.',
  },
  af: {
    label: 'Africa',
    description:
      'Watch live flights over Africa on a 3D globe. Track callsigns, routes, altitude, and airports in real time.',
  },
}

/** High-traffic airports to list in the sitemap (stable, indexable URLs). */
export const SITEMAP_AIRPORTS = [
  'ATL',
  'DFW',
  'DEN',
  'ORD',
  'LAX',
  'JFK',
  'CLT',
  'MIA',
  'SFO',
  'SEA',
  'EWR',
  'PHX',
  'IAH',
  'BOS',
  'MSP',
  'LHR',
  'CDG',
  'AMS',
  'FRA',
  'MAD',
  'BCN',
  'MUC',
  'FCO',
  'DUB',
  'DXB',
  'DOH',
  'IST',
  'SIN',
  'HKG',
  'NRT',
  'HND',
  'ICN',
  'PEK',
  'PVG',
  'BKK',
  'DEL',
  'BOM',
  'SYD',
  'MEL',
  'AKL',
  'GRU',
  'MEX',
  'YYZ',
  'YVR',
  'JNB',
  'CAI',
] as const

export interface SeoPage {
  title: string
  description: string
  canonical: string
  robots: string
  image: string
  jsonLd: unknown
  geo?: { placename: string; lat: number; lon: number }
}

export interface SeoState {
  origin: string
  regionId?: string
  callsign?: string | null
  icao?: string | null
  airport?: Airport | null
  countryName?: string | null
  follow?: boolean
}

function trimOrigin(origin: string): string {
  return origin.replace(/\/+$/, '')
}

function regionSeo(id: string | undefined): { id: string; label: string; description: string } {
  const key = id && REGION_SEO[id] ? id : 'world'
  const meta = REGION_SEO[key]!
  return { id: key, label: meta.label, description: meta.description }
}

function abs(origin: string, path: string): string {
  return `${trimOrigin(origin)}${path}`
}

export function regionPath(regionId: string): string {
  return regionId === 'world' ? '/' : `/?region=${regionId}`
}

export function airportPath(iata: string): string {
  return `/?airport=${encodeURIComponent(iata.toUpperCase())}`
}

export function buildSeo(state: SeoState): SeoPage {
  const origin = trimOrigin(state.origin)
  const image = abs(origin, '/og-image.png')
  const region = regionSeo(state.regionId)
  const airport = state.airport ?? null
  const callsign = state.callsign?.trim().toUpperCase() || null
  const icao = state.icao?.trim().toLowerCase() || null
  const ephemeral = !!(callsign || icao || state.follow)

  let title = DEFAULT_TITLE
  let description = region.description
  let canonical = abs(origin, regionPath(region.id))
  let robots = DEFAULT_ROBOTS

  if (airport && !ephemeral) {
    const place = airport.city ? `${airport.name} in ${airport.city}` : airport.name
    title = `${airport.name} (${airport.iata}) live flights — ${SITE_NAME}`
    description = `Track live arrivals and departures around ${place}. Watch aircraft position, altitude, and heading on a 3D globe.`
    canonical = abs(origin, airportPath(airport.iata))
  } else if (state.countryName && !ephemeral && !airport) {
    title = `Live flights to and from ${state.countryName} — ${SITE_NAME}`
    description = `See live air traffic to and from ${state.countryName} on a 3D globe. Track callsigns, routes, altitude, and airports in real time.`
    canonical = abs(origin, regionPath(region.id))
  } else if (region.id !== 'world' && !ephemeral && !airport) {
    title = `Live air traffic over ${region.label} — ${SITE_NAME}`
  }

  if (ephemeral) {
    const label = callsign || (icao ? icao.toUpperCase() : 'Flight')
    title = state.follow
      ? `${label} chase camera — ${SITE_NAME}`
      : `${label} live flight tracker — ${SITE_NAME}`
    description = `Follow ${label} in real time: live position, altitude, heading, and route on Flight Globe.`
    robots = NOINDEX
    canonical = abs(origin, regionPath(region.id))
  }

  const jsonLd = buildJsonLd({
    origin,
    image,
    title,
    description,
    canonical,
    region,
    airport,
  })

  const page: SeoPage = { title, description, canonical, robots, image, jsonLd }
  if (airport) {
    page.geo = { placename: airport.city || airport.name, lat: airport.lat, lon: airport.lon }
  }
  return page
}

function buildJsonLd(input: {
  origin: string
  image: string
  title: string
  description: string
  canonical: string
  region: { id: string; label: string }
  airport: Airport | null
}): unknown {
  const origin = input.origin
  const crumbs: Array<{ '@type': 'ListItem'; position: number; name: string; item: string }> = [
    { '@type': 'ListItem', position: 1, name: SITE_NAME, item: origin + '/' },
  ]
  if (input.region.id !== 'world') {
    crumbs.push({
      '@type': 'ListItem',
      position: crumbs.length + 1,
      name: input.region.label,
      item: abs(origin, regionPath(input.region.id)),
    })
  }
  if (input.airport) {
    crumbs.push({
      '@type': 'ListItem',
      position: crumbs.length + 1,
      name: `${input.airport.name} (${input.airport.iata})`,
      item: abs(origin, airportPath(input.airport.iata)),
    })
  }

  const graph: unknown[] = [
    {
      '@type': 'WebApplication',
      '@id': `${origin}/#app`,
      name: SITE_NAME,
      url: origin + '/',
      description: DEFAULT_DESCRIPTION,
      applicationCategory: 'TravelApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript and WebGL',
      inLanguage: 'en',
      image: input.image,
      screenshot: input.image,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: origin + '/',
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': `${origin}/#app` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${input.canonical}#breadcrumb`,
      itemListElement: crumbs,
    },
  ]

  if (input.airport) {
    graph.push({
      '@type': 'Airport',
      name: input.airport.name,
      iataCode: input.airport.iata,
      icaoCode: input.airport.icao || undefined,
      url: abs(origin, airportPath(input.airport.iata)),
      latitude: input.airport.lat,
      longitude: input.airport.lon,
      containedInPlace: input.airport.city
        ? { '@type': 'City', name: input.airport.city }
        : undefined,
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

/** Resolve SEO from a query string (`?region=eu&airport=LHR`). */
export function seoFromSearch(origin: string, search: string): SeoPage {
  const q = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  const regionRaw = q.get('region')?.trim().toLowerCase()
  const regionId =
    regionRaw && REGIONS.some((r) => r.id === regionRaw) ? regionRaw : 'world'
  const airportRaw = q.get('airport')?.trim()
  const airport = airportRaw ? findAirport(airportRaw) ?? null : null
  return buildSeo({
    origin,
    regionId,
    callsign: q.get('flight'),
    icao: q.get('icao'),
    airport,
    follow: q.get('follow') === '1' || q.get('follow')?.toLowerCase() === 'true',
  })
}

export function robotsTxt(origin: string): string {
  const sitemap = abs(trimOrigin(origin), '/sitemap.xml')
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /opensky/',
    'Disallow: /adsbdb/',
    'Disallow: /adsblive/',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n')
}

export function sitemapXml(origin: string, lastmod = new Date().toISOString().slice(0, 10)): string {
  const root = trimOrigin(origin)
  const urls: { loc: string; changefreq: string; priority: string }[] = [
    { loc: root + '/', changefreq: 'hourly', priority: '1.0' },
  ]
  for (const region of REGIONS) {
    if (region.id === 'world') continue
    urls.push({
      loc: abs(root, regionPath(region.id)),
      changefreq: 'hourly',
      priority: '0.8',
    })
  }
  for (const iata of SITEMAP_AIRPORTS) {
    if (!findAirport(iata)) continue
    urls.push({
      loc: abs(root, airportPath(iata)),
      changefreq: 'hourly',
      priority: '0.6',
    })
  }

  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${escXml(u.loc)}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}

function escXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

/** Rewrite title/meta/canonical/JSON-LD in the SPA shell for crawlers. */
export function applySeoToHtml(html: string, page: SeoPage): string {
  let out = html
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escAttr(page.title)}</title>`)
  out = replaceMeta(out, 'name', 'description', page.description)
  out = replaceMeta(out, 'name', 'robots', page.robots)
  out = replaceMeta(out, 'property', 'og:title', page.title)
  out = replaceMeta(out, 'property', 'og:description', page.description)
  out = replaceMeta(out, 'property', 'og:url', page.canonical)
  out = replaceMeta(out, 'property', 'og:image', page.image)
  out = replaceMeta(out, 'name', 'twitter:title', page.title)
  out = replaceMeta(out, 'name', 'twitter:description', page.description)
  out = replaceMeta(out, 'name', 'twitter:image', page.image)
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escAttr(page.canonical)}" />`,
  )
  out = out.replace(
    /<script type="application\/ld\+json" id="seo-jsonld">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="seo-jsonld">${JSON.stringify(page.jsonLd).replace(/</g, '\\u003c')}</script>`,
  )

  if (page.geo) {
    const geoTags = [
      `<meta name="geo.placename" content="${escAttr(page.geo.placename)}" />`,
      `<meta name="geo.position" content="${page.geo.lat.toFixed(4)};${page.geo.lon.toFixed(4)}" />`,
      `<meta name="ICBM" content="${page.geo.lat.toFixed(4)}, ${page.geo.lon.toFixed(4)}" />`,
    ].join('\n    ')
    if (out.includes('name="geo.placename"')) {
      out = replaceMeta(out, 'name', 'geo.placename', page.geo.placename)
      out = replaceMeta(
        out,
        'name',
        'geo.position',
        `${page.geo.lat.toFixed(4)};${page.geo.lon.toFixed(4)}`,
      )
      out = replaceMeta(
        out,
        'name',
        'ICBM',
        `${page.geo.lat.toFixed(4)}, ${page.geo.lon.toFixed(4)}`,
      )
    } else {
      out = out.replace('</head>', `    ${geoTags}\n  </head>`)
    }
  }

  return out
}

function replaceMeta(
  html: string,
  attr: 'name' | 'property',
  key: string,
  content: string,
): string {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*"`)
  return html.replace(re, `<meta ${attr}="${key}" content="${escAttr(content)}"`)
}

export function applyDocumentSeo(page: SeoPage): void {
  document.title = page.title
  setMeta('name', 'description', page.description)
  setMeta('name', 'robots', page.robots)
  setMeta('property', 'og:title', page.title)
  setMeta('property', 'og:description', page.description)
  setMeta('property', 'og:url', page.canonical)
  setMeta('property', 'og:image', page.image)
  setMeta('name', 'twitter:title', page.title)
  setMeta('name', 'twitter:description', page.description)
  setMeta('name', 'twitter:image', page.image)
  setLink('canonical', page.canonical)

  const ld = document.getElementById('seo-jsonld')
  if (ld) ld.textContent = JSON.stringify(page.jsonLd)

  if (page.geo) {
    setMeta('name', 'geo.placename', page.geo.placename)
    setMeta('name', 'geo.position', `${page.geo.lat.toFixed(4)};${page.geo.lon.toFixed(4)}`)
    setMeta('name', 'ICBM', `${page.geo.lat.toFixed(4)}, ${page.geo.lon.toFixed(4)}`)
  }
}

function setMeta(attr: 'name' | 'property', key: string, content: string): void {
  const sel = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(sel)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string): void {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
