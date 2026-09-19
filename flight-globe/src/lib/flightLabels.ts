import type { FlightAnchor } from './flightAnchors'

export type LabelMode = 'auto' | 'on' | 'off'

export interface LabelLayout {
  id: string
  x: number
  y: number
  text: string
  sub: string
  emergency: boolean
  selected: boolean
  hovered: boolean
}

export interface LabelMargins {
  left: number
  right: number
  top: number
  bottom: number
}

const LABEL_W = 86
const LABEL_H = 18

function priority(a: FlightAnchor): number {
  if (a.selected) return 10_000
  if (a.hovered) return 9_000
  if (a.emergency) return 8_000
  if (a.pinned) return 7_000
  return 1
}

/** How many labels to keep given zoom and mode. */
export function labelBudget(
  mode: LabelMode,
  camDist: number,
  mapMode: boolean,
  mobile: boolean,
): number {
  if (mode === 'off') return 0
  const cap = mobile ? 22 : 48
  if (mode === 'on' || mapMode) return cap
  // Auto: sparse at world distance, denser when zoomed in.
  if (camDist > 2.85) return Math.min(cap, 8)
  if (camDist > 2.25) return Math.min(cap, 18)
  if (camDist > 1.75) return Math.min(cap, 32)
  return cap
}

/**
 * Project world anchors to screen and pick a non-overlapping subset.
 * `ndc` is a 3-vector mutated in place (x/y/z after project).
 */
export function layoutFlightLabels(
  anchors: FlightAnchor[],
  count: number,
  project: (x: number, y: number, z: number, out: { x: number; y: number; z: number }) => void,
  width: number,
  height: number,
  margins: LabelMargins,
  max: number,
  scratch: { x: number; y: number; z: number },
): LabelLayout[] {
  if (max <= 0 || count <= 0 || width < 8 || height < 8) return []

  const ranked: Array<{ a: FlightAnchor; sx: number; sy: number; p: number }> = []
  const pad = 8
  const minX = margins.left + pad
  const maxX = width - margins.right - pad
  const minY = margins.top + pad
  const maxY = height - margins.bottom - pad

  for (let i = 0; i < count; i++) {
    const a = anchors[i]!
    project(a.x, a.y, a.z, scratch)
    if (scratch.z > 1 || scratch.z < 0) continue
    const sx = (scratch.x * 0.5 + 0.5) * width
    const sy = (-scratch.y * 0.5 + 0.5) * height
    if (sx < minX || sx > maxX || sy < minY || sy > maxY) continue
    ranked.push({ a, sx, sy, p: priority(a) - scratch.z })
  }

  ranked.sort((l, r) => r.p - l.p)

  const placed: LabelLayout[] = []
  const minDist = mobileBudget(width) ? 44 : 52

  for (const item of ranked) {
    if (placed.length >= max) break
    let clash = false
    for (const p of placed) {
      const dx = item.sx - p.x
      const dy = item.sy - p.y
      if (dx * dx + dy * dy < minDist * minDist) {
        clash = true
        break
      }
      if (
        Math.abs(dx) < LABEL_W &&
        Math.abs(dy) < LABEL_H + 4
      ) {
        clash = true
        break
      }
    }
    if (clash && !item.a.selected && !item.a.hovered && !item.a.emergency) {
      continue
    }
    if (clash && !item.a.selected && !item.a.hovered) continue

    const text = (item.a.callsign || item.a.id).slice(0, 8)
    const sub = item.a.typeCode.slice(0, 6)
    placed.push({
      id: item.a.id,
      x: item.sx,
      y: item.sy,
      text,
      sub,
      emergency: item.a.emergency,
      selected: item.a.selected,
      hovered: item.a.hovered,
    })
  }

  return placed
}

function mobileBudget(width: number): boolean {
  return width <= 720
}
