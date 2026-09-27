import type { IncomingMessage, ServerResponse } from 'node:http'
import {
  applySeoToHtml,
  robotsTxt,
  seoFromSearch,
  sitemapXml,
} from '../src/lib/seo'

function header(req: IncomingMessage, name: string): string | undefined {
  const raw = req.headers[name]
  if (Array.isArray(raw)) return raw[0]
  return raw
}

/** Canonical origin for Open Graph, sitemap, and robots. */
export function siteOrigin(req: IncomingMessage): string {
  const env = process.env.PUBLIC_SITE_URL?.replace(/\/+$/, '')
  if (env) return env
  const xfProto = header(req, 'x-forwarded-proto')?.split(',')[0]?.trim()
  const xfHost = header(req, 'x-forwarded-host')?.split(',')[0]?.trim()
  const host = xfHost || req.headers.host || 'localhost'
  const isLocal =
    host.includes('localhost') ||
    host.startsWith('127.') ||
    /^\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?$/.test(host)
  const proto = xfProto || (isLocal ? 'http' : 'https')
  return `${proto}://${host}`
}

function sendText(
  res: ServerResponse,
  status: number,
  body: string,
  contentType: string,
  cacheControl: string,
): void {
  const buf = Buffer.from(body, 'utf8')
  res.writeHead(status, {
    'content-type': contentType,
    'content-length': buf.length,
    'cache-control': cacheControl,
    'x-content-type-options': 'nosniff',
  })
  res.end(buf)
}

export function sendRobots(req: IncomingMessage, res: ServerResponse): void {
  sendText(
    res,
    200,
    robotsTxt(siteOrigin(req)),
    'text/plain; charset=utf-8',
    'public, max-age=3600',
  )
}

export function sendSitemap(req: IncomingMessage, res: ServerResponse): void {
  sendText(
    res,
    200,
    sitemapXml(siteOrigin(req)),
    'application/xml; charset=utf-8',
    'public, max-age=3600',
  )
}

export function injectSeoHtml(html: string, req: IncomingMessage): string {
  const url = req.url ?? '/'
  const q = url.indexOf('?')
  const search = q >= 0 ? url.slice(q) : ''
  return applySeoToHtml(html, seoFromSearch(siteOrigin(req), search))
}
