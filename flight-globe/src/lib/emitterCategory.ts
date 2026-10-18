/** Grouped ADS-B / OpenSky emitter categories for filtering. */

export const EMITTER_CATEGORIES = [
  'light',
  'small',
  'large',
  'heavy',
  'rotor',
  'glider',
  'uav',
] as const

export type EmitterCategory = (typeof EMITTER_CATEGORIES)[number]

export const CATEGORY_LABEL: Record<EmitterCategory, string> = {
  light: 'Light',
  small: 'Small',
  large: 'Large',
  heavy: 'Heavy',
  rotor: 'Rotor',
  glider: 'Glider',
  uav: 'UAV',
}

/**
 * Map an OpenSky / airplanes.live category (A1, A7, B6…) to a filter group.
 * Returns null when the field is empty or unassigned (A0).
 */
export function emitterCategory(raw?: string | null): EmitterCategory | null {
  const c = (raw || '').trim().toUpperCase()
  if (!c || c === 'A0' || c === 'B0' || c === 'C0') return null
  const code = c.match(/^[A-D][0-7]/)?.[0] ?? c
  switch (code) {
    case 'A1':
    case 'LIGHT':
      return 'light'
    case 'A2':
    case 'SMALL':
      return 'small'
    case 'A3':
    case 'LARGE':
      return 'large'
    case 'A4':
    case 'A5':
    case 'HEAVY':
      return 'heavy'
    case 'A6':
      return 'large'
    case 'A7':
    case 'ROTORCRAFT':
    case 'HELICOPTER':
      return 'rotor'
    case 'B1':
    case 'GLIDER':
      return 'glider'
    case 'B6':
    case 'UAV':
    case 'DRONE':
      return 'uav'
    default:
      return null
  }
}
