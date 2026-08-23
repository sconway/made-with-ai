import type { BBox } from './types'

/** Mirrors `src/lib/regions.ts` — keep ids in sync with the frontend sidebar. */
export const REGIONS: Array<{ id: string; label: string; bbox: BBox | null }> = [
  { id: 'world', label: 'World', bbox: null },
  {
    id: 'na',
    label: 'N. America',
    bbox: { minLon: -140, minLat: 15, maxLon: -55, maxLat: 60 },
  },
  {
    id: 'eu',
    label: 'Europe',
    bbox: { minLon: -12, minLat: 35, maxLon: 40, maxLat: 62 },
  },
]
