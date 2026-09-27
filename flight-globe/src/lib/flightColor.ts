import * as THREE from 'three'

export type ColorMode = 'alt' | 'speed' | 'airline'

const ALT_LO = new THREE.Color('#ff8c3a')
const ALT_HI = new THREE.Color('#6ec8ff')
const SPD_LO = new THREE.Color('#f0b429')
const SPD_MID = new THREE.Color('#3dce9a')
const SPD_HI = new THREE.Color('#5b9bff')
const AIRLINE_UNK = new THREE.Color('#8b9aab')
const WHITE = new THREE.Color('#ffffff')

export function readColorMode(): ColorMode {
  try {
    const v = localStorage.getItem('fg-color')
    if (v === 'alt' || v === 'speed' || v === 'airline') return v
  } catch {
    /* ignore */
  }
  return 'alt'
}

/** Write a display color for a flight. Selected / hover / pin / emergency stay elsewhere. */
export function writeFlightColor(
  out: THREE.Color,
  mode: ColorMode,
  altM: number,
  velMs: number,
  airline: string,
): void {
  if (mode === 'speed') {
    const t = THREE.MathUtils.clamp(velMs / 257, 0, 1)
    if (t < 0.5) out.copy(SPD_LO).lerp(SPD_MID, t * 2)
    else out.copy(SPD_MID).lerp(SPD_HI, (t - 0.5) * 2)
    return
  }
  if (mode === 'airline') {
    if (airline.length < 2) {
      out.copy(AIRLINE_UNK)
      return
    }
    let h = 0
    for (let i = 0; i < airline.length; i++) h = (h * 31 + airline.charCodeAt(i)) | 0
    const hue = ((h % 360) + 360) % 360
    out.setHSL(hue / 360, 0.62, 0.58)
    return
  }
  const t = THREE.MathUtils.clamp(altM / 12_000, 0, 1)
  out.copy(ALT_LO).lerp(ALT_HI, t)
}

/**
 * Keep mode hues, but lift them off RainViewer greens/yellows.
 * Globe strokes are thin — they need more lift than the solid 2D chevrons.
 */
export function punchFlightColor(
  out: THREE.Color,
  weatherOn: boolean,
  map: boolean,
): void {
  if (weatherOn) {
    out.lerp(WHITE, map ? 0.34 : 0.48)
    out.multiplyScalar(map ? 1.28 : 1.55)
    return
  }
  if (!map) {
    out.lerp(WHITE, 0.22)
    out.multiplyScalar(1.85)
  }
}
