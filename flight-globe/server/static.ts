import { createReadStream, existsSync, statSync } from 'node:fs'
import path from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** Vite production build output (repo root `/dist`). */
export const DIST_DIR = path.resolve(__dirname, '..', 'dist')

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
}

function safeJoin(root: string, reqPath: string): string | null {
  const decoded = decodeURIComponent(reqPath.split('?')[0] || '/')
  const cleaned = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '')
  const full = path.join(root, cleaned)
  if (!full.startsWith(root)) return null
  return full
}

function contentType(filePath: string): string {
  return MIME[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream'
}

function sendFile(
  res: ServerResponse,
  filePath: string,
  cacheControl: string,
): void {
  const stat = statSync(filePath)
  res.writeHead(200, {
    'content-type': contentType(filePath),
    'content-length': stat.size,
    'cache-control': cacheControl,
  })
  createReadStream(filePath).pipe(res)
}

/**
 * Serve the Vite SPA from `dist/`. Returns true when a response was started.
 * Missing `dist` (local API-only) → false so the caller can 404 JSON.
 */
export function tryServeStatic(
  req: IncomingMessage,
  res: ServerResponse,
): boolean {
  if (!existsSync(DIST_DIR)) return false

  const urlPath = (req.url ?? '/').split('?')[0] || '/'
  let filePath = safeJoin(DIST_DIR, urlPath === '/' ? '/index.html' : urlPath)
  if (!filePath) {
    res.writeHead(403).end('Forbidden')
    return true
  }

  // Exact file hit (hashed assets, etc.)
  if (existsSync(filePath) && statSync(filePath).isFile()) {
    const immutable = filePath.includes(`${path.sep}assets${path.sep}`)
    sendFile(
      res,
      filePath,
      immutable ? 'public, max-age=31536000, immutable' : 'public, max-age=300',
    )
    return true
  }

  // SPA fallback — client routes / deep links.
  const index = path.join(DIST_DIR, 'index.html')
  if (existsSync(index)) {
    sendFile(res, index, 'public, max-age=60')
    return true
  }

  return false
}

export function distAvailable(): boolean {
  return existsSync(path.join(DIST_DIR, 'index.html'))
}
