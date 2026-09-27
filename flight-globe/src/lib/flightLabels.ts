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
const HOVER_LABEL_MS = 200

/** Labels already on screen, in order, so a hover cannot reshuffle them. */
let stickyIds: string[] = []
let hoverHoldId: string | null = null
let hoverHoldSince = 0

function ambientPriority(a: FlightAnchor): number {
  if (a.selected) return 10_000
  if (a.emergency) return 8_000
  if (a.pinned) return 7_000
  return 1
}

function clashes(
  sx: number,
  sy: number,
  placed: LabelLayout[],
  width: number,
): boolean {
  const minDist = width <= 720 ? 44 : 52
  for (const p of placed) {
    const dx = sx - p.x
    const dy = sy - p.y
    if (dx * dx + dy * dy < minDist * minDist) return true
    if (Math.abs(dx) < LABEL_W && Math.abs(dy) < LABEL_H + 4) return true
  }
  return false
}

function toLayout(
  item: { a: FlightAnchor; sx: number; sy: number },
  hovered: boolean,
): LabelLayout {
  const text = (item.a.callsign || item.a.id).slice(0, 8)
  const sub = item.a.typeCode.slice(0, 6)
  return {
    id: item.a.id,
    x: item.sx,
    y: item.sy,
    text,
    sub,
    emergency: item.a.emergency,
    selected: item.a.selected,
    hovered,
  }
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

const _ndc = { x: 0, y: 0, z: 0 }

/**
 * Project world anchors to screen and pick a non-overlapping subset.
 * The set stays put while the pointer moves between planes. A hovered
 * plane can gain a label after the pointer rests, without evicting the others.
 * `project` writes NDC x/y/z into the provided `out` vector.
 */
export function layoutFlightLabels(
  anchors: FlightAnchor[],
  count: number,
  project: (x: number, y: number, z: number, out: { x: number; y: number; z: number }) => void,
  width: number,
  height: number,
  margins: LabelMargins,
  max: number,
): LabelLayout[] {
  if (max <= 0 || count <= 0 || width < 8 || height < 8) return []

  const ranked: Array<{ a: FlightAnchor; sx: number; sy: number; p: number }> = []
  const pad = 8
  const minX = margins.left + pad
  const maxX = width - margins.right - pad
  const minY = margins.top + pad
  const maxY = height - margins.bottom - pad
  let hovered: (typeof ranked)[number] | null = null

  for (let i = 0; i < count; i++) {
    const a = anchors[i]!
    project(a.x, a.y, a.z, _ndc)
    if (_ndc.z > 1 || _ndc.z < 0) continue
    const sx = (_ndc.x * 0.5 + 0.5) * width
    const sy = (-_ndc.y * 0.5 + 0.5) * height
    if (sx < minX || sx > maxX || sy < minY || sy > maxY) continue
    const item = { a, sx, sy, p: ambientPriority(a) - _ndc.z }
    ranked.push(item)
    if (a.hovered) hovered = item
  }

  const byId = new Map(ranked.map((item) => [item.a.id, item]))
  const placed: LabelLayout[] = []
  const placedIds = new Set<string>()

  const take = (item: (typeof ranked)[number], markHovered: boolean) => {
    placed.push(toLayout(item, markHovered || item.a.hovered))
    placedIds.add(item.a.id)
  }

  for (const item of ranked) {
    if (!item.a.selected) continue
    if (placed.length >= max) break
    take(item, false)
  }

  for (const id of stickyIds) {
    if (placed.length >= max) break
    if (placedIds.has(id)) continue
    const item = byId.get(id)
    if (!item || item.a.selected) continue
    if (clashes(item.sx, item.sy, placed, width)) continue
    take(item, false)
  }

  ranked.sort((l, r) => r.p - l.p)
  for (const item of ranked) {
    if (placed.length >= max) break
    if (placedIds.has(item.a.id)) continue
    if (clashes(item.sx, item.sy, placed, width)) continue
    take(item, false)
  }

  stickyIds = placed.map((label) => label.id)

  const now = performance.now()
  const hoverId = hovered?.a.id ?? null
  if (hoverId !== hoverHoldId) {
    hoverHoldId = hoverId
    hoverHoldSince = now
  }
  if (
    hovered &&
    !placedIds.has(hovered.a.id) &&
    now - hoverHoldSince >= HOVER_LABEL_MS
  ) {
    placed.push(toLayout(hovered, true))
  }

  return placed
}
