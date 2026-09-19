/** World-space anchors written each frame by Flights, read by FlightLabels. */

export interface FlightAnchor {
  id: string
  x: number
  y: number
  z: number
  callsign: string
  typeCode: string
  emergency: boolean
  selected: boolean
  hovered: boolean
  pinned: boolean
}

const pool: FlightAnchor[] = []
let count = 0

export function beginFlightAnchors(): void {
  count = 0
}

export function pushFlightAnchor(a: FlightAnchor): void {
  const slot = pool[count]
  if (slot) {
    slot.id = a.id
    slot.x = a.x
    slot.y = a.y
    slot.z = a.z
    slot.callsign = a.callsign
    slot.typeCode = a.typeCode
    slot.emergency = a.emergency
    slot.selected = a.selected
    slot.hovered = a.hovered
    slot.pinned = a.pinned
  } else {
    pool[count] = { ...a }
  }
  count++
}

export function readFlightAnchors(): { list: FlightAnchor[]; count: number } {
  return { list: pool, count }
}
