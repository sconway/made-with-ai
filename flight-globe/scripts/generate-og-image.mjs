/**
 * Writes public/og-image.png (1200×630) and public/icon-512.png.
 * No extra deps — raw PNG + zlib.
 */
import { deflateSync } from 'node:zlib'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC = path.resolve(__dirname, '..', 'public')

const CRC_TABLE = new Uint32Array(256)
for (let n = 0; n < 256; n++) {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  CRC_TABLE[n] = c >>> 0
}

function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const td = Buffer.concat([Buffer.from(type), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(td))
  return Buffer.concat([len, td, crc])
}

function encodePng(width, height, rgba) {
  const raw = Buffer.alloc((width * 4 + 1) * height)
  for (let y = 0; y < height; y++) {
    const src = y * width * 4
    const dst = y * (width * 4 + 1)
    raw[dst] = 0
    rgba.copy(raw, dst + 1, src, src + width * 4)
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8
  ihdr[9] = 6
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function mix(a, b, t) {
  return a + (b - a) * t
}

function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v
}

function blit(px, w, h, x, y, r, g, b, a) {
  if (x < 0 || y < 0 || x >= w || y >= h || a <= 0) return
  const i = (y * w + x) * 4
  const aa = a / 255
  const ia = 1 - aa
  px[i] = Math.round(px[i] * ia + r * aa)
  px[i + 1] = Math.round(px[i + 1] * ia + g * aa)
  px[i + 2] = Math.round(px[i + 2] * ia + b * aa)
  px[i + 3] = 255
}

function fillRect(px, w, h, x0, y0, x1, y1, r, g, b, a) {
  const xa = Math.max(0, Math.floor(x0))
  const ya = Math.max(0, Math.floor(y0))
  const xb = Math.min(w - 1, Math.ceil(x1))
  const yb = Math.min(h - 1, Math.ceil(y1))
  for (let y = ya; y <= yb; y++) {
    for (let x = xa; x <= xb; x++) blit(px, w, h, x, y, r, g, b, a)
  }
}

function disc(px, w, h, cx, cy, radius, r, g, b, a) {
  const x0 = Math.max(0, Math.floor(cx - radius - 1))
  const y0 = Math.max(0, Math.floor(cy - radius - 1))
  const x1 = Math.min(w - 1, Math.ceil(cx + radius + 1))
  const y1 = Math.min(h - 1, Math.ceil(cy + radius + 1))
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy) - radius
      const cov = clamp(0.5 - d, 0, 1)
      if (cov > 0) blit(px, w, h, x, y, r, g, b, a * cov)
    }
  }
}

function ring(px, w, h, cx, cy, radius, thickness, r, g, b, a) {
  const x0 = Math.max(0, Math.floor(cx - radius - thickness - 1))
  const y0 = Math.max(0, Math.floor(cy - radius - thickness - 1))
  const x1 = Math.min(w - 1, Math.ceil(cx + radius + thickness + 1))
  const y1 = Math.min(h - 1, Math.ceil(cy + radius + thickness + 1))
  const inner = radius - thickness * 0.5
  const outer = radius + thickness * 0.5
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy)
      const cov = clamp(d - inner, 0, 1) * clamp(outer - d, 0, 1)
      if (cov > 0) blit(px, w, h, x, y, r, g, b, a * cov)
    }
  }
}

function blob(px, w, h, cx, cy, rx, ry, r, g, b, a) {
  const x0 = Math.max(0, Math.floor(cx - rx - 1))
  const y0 = Math.max(0, Math.floor(cy - ry - 1))
  const x1 = Math.min(w - 1, Math.ceil(cx + rx + 1))
  const y1 = Math.min(h - 1, Math.ceil(cy + ry + 1))
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const u = (x + 0.5 - cx) / rx
      const v = (y + 0.5 - cy) / ry
      const d = Math.hypot(u, v) - 1
      const cov = clamp(0.5 - d * Math.min(rx, ry), 0, 1)
      if (cov > 0) blit(px, w, h, x, y, r, g, b, a * cov)
    }
  }
}

/** 5×7 uppercase bitmap font. */
const GLYPHS = {
  A: [0b01110, 0b10001, 0b10001, 0b11111, 0b10001, 0b10001, 0b10001],
  B: [0b11110, 0b10001, 0b10001, 0b11110, 0b10001, 0b10001, 0b11110],
  C: [0b01110, 0b10001, 0b10000, 0b10000, 0b10000, 0b10001, 0b01110],
  D: [0b11110, 0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b11110],
  E: [0b11111, 0b10000, 0b10000, 0b11110, 0b10000, 0b10000, 0b11111],
  F: [0b11111, 0b10000, 0b10000, 0b11110, 0b10000, 0b10000, 0b10000],
  G: [0b01110, 0b10001, 0b10000, 0b10111, 0b10001, 0b10001, 0b01110],
  H: [0b10001, 0b10001, 0b10001, 0b11111, 0b10001, 0b10001, 0b10001],
  I: [0b11111, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100, 0b11111],
  J: [0b00111, 0b00010, 0b00010, 0b00010, 0b00010, 0b10010, 0b01100],
  K: [0b10001, 0b10010, 0b10100, 0b11000, 0b10100, 0b10010, 0b10001],
  L: [0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b11111],
  M: [0b10001, 0b11011, 0b10101, 0b10101, 0b10001, 0b10001, 0b10001],
  N: [0b10001, 0b11001, 0b10101, 0b10011, 0b10001, 0b10001, 0b10001],
  O: [0b01110, 0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b01110],
  P: [0b11110, 0b10001, 0b10001, 0b11110, 0b10000, 0b10000, 0b10000],
  Q: [0b01110, 0b10001, 0b10001, 0b10001, 0b10101, 0b10010, 0b01101],
  R: [0b11110, 0b10001, 0b10001, 0b11110, 0b10100, 0b10010, 0b10001],
  S: [0b01111, 0b10000, 0b10000, 0b01110, 0b00001, 0b00001, 0b11110],
  T: [0b11111, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100],
  U: [0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b01110],
  V: [0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b01010, 0b00100],
  W: [0b10001, 0b10001, 0b10001, 0b10101, 0b10101, 0b11011, 0b10001],
  X: [0b10001, 0b10001, 0b01010, 0b00100, 0b01010, 0b10001, 0b10001],
  Y: [0b10001, 0b10001, 0b01010, 0b00100, 0b00100, 0b00100, 0b00100],
  Z: [0b11111, 0b00001, 0b00010, 0b00100, 0b01000, 0b10000, 0b11111],
  ' ': [0, 0, 0, 0, 0, 0, 0],
  '-': [0, 0, 0, 0b11111, 0, 0, 0],
  '3': [0b11110, 0b00001, 0b00001, 0b01110, 0b00001, 0b00001, 0b11110],
}

function drawText(px, w, h, text, x, y, scale, r, g, b, a) {
  let cx = x
  for (const ch of text) {
    const gph = GLYPHS[ch] || GLYPHS[' ']
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 5; col++) {
        if (gph[row] & (1 << (4 - col))) {
          fillRect(
            px,
            w,
            h,
            cx + col * scale,
            y + row * scale,
            cx + (col + 1) * scale - 1,
            y + (row + 1) * scale - 1,
            r,
            g,
            b,
            a,
          )
        }
      }
    }
    cx += 6 * scale
  }
}

function mulberry32(seed) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function drawGlobe(px, w, h, cx, cy, radius) {
  disc(px, w, h, cx, cy, radius + 28, 78, 168, 255, 40)
  disc(px, w, h, cx, cy, radius + 14, 78, 168, 255, 55)
  disc(px, w, h, cx, cy, radius, 10, 42, 92, 255)
  disc(px, w, h, cx - radius * 0.28, cy - radius * 0.32, radius * 0.72, 43, 111, 173, 180)

  const land = [
    [-0.22, -0.28, 0.28, 0.22],
    [0.08, -0.02, 0.22, 0.18],
    [-0.08, 0.18, 0.16, 0.14],
    [0.32, -0.12, 0.18, 0.26],
    [0.42, 0.18, 0.12, 0.1],
    [-0.38, 0.02, 0.14, 0.2],
    [0.18, 0.38, 0.2, 0.12],
  ]
  for (const [u, v, rx, ry] of land) {
    blob(
      px,
      w,
      h,
      cx + u * radius,
      cy + v * radius,
      rx * radius,
      ry * radius,
      110,
      184,
      232,
      200,
    )
  }
  ring(px, w, h, cx, cy, radius, 3.2, 78, 168, 255, 220)

  // Flight arcs
  for (const [a0, a1] of [
    [-0.9, 0.4],
    [0.2, 1.4],
    [-1.6, -0.3],
  ]) {
    const steps = 48
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const ang = mix(a0, a1, t)
      const lift = Math.sin(t * Math.PI) * 18
      const rr = radius + 8 + lift
      disc(
        px,
        w,
        h,
        cx + Math.cos(ang) * rr,
        cy + Math.sin(ang) * rr * 0.62,
        i === Math.floor(steps * 0.72) ? 5 : 1.6,
        255,
        207,
        107,
        i === Math.floor(steps * 0.72) ? 255 : 160,
      )
    }
  }
}

function makeOg() {
  const w = 1200
  const h = 630
  const px = Buffer.alloc(w * h * 4)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const t = y / h
      const i = (y * w + x) * 4
      px[i] = Math.round(mix(5, 12, t))
      px[i + 1] = Math.round(mix(7, 18, t))
      px[i + 2] = Math.round(mix(13, 32, t))
      px[i + 3] = 255
    }
  }
  const rnd = mulberry32(42)
  for (let i = 0; i < 220; i++) {
    const x = Math.floor(rnd() * w)
    const y = Math.floor(rnd() * h)
    const a = 40 + rnd() * 140
    const s = rnd() < 0.12 ? 1.6 : 0.8
    disc(px, w, h, x, y, s, 200, 220, 255, a)
  }
  drawGlobe(px, w, h, 360, 328, 205)
  drawText(px, w, h, 'FLIGHT GLOBE', 620, 228, 7, 232, 238, 247, 255)
  drawText(px, w, h, 'LIVE GLOBAL AIR TRAFFIC', 620, 318, 3, 143, 163, 189, 255)
  return encodePng(w, h, px)
}

function makeIcon(size) {
  const px = Buffer.alloc(size * size * 4)
  for (let i = 0; i < px.length; i += 4) {
    px[i] = 5
    px[i + 1] = 7
    px[i + 2] = 13
    px[i + 3] = 255
  }
  const cx = size / 2
  const cy = size * 0.54
  drawGlobe(px, size, size, cx, cy, size * 0.32)
  return encodePng(size, size, px)
}

writeFileSync(path.join(PUBLIC, 'og-image.png'), makeOg())
writeFileSync(path.join(PUBLIC, 'icon-512.png'), makeIcon(512))
console.log('wrote public/og-image.png and public/icon-512.png')
