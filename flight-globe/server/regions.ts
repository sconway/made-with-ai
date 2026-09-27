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
  {
    id: 'as',
    label: 'Asia',
    bbox: { minLon: 32, minLat: -10, maxLon: 150, maxLat: 55 },
  },
  {
    id: 'oc',
    label: 'Oceania',
    bbox: { minLon: 110, minLat: -48, maxLon: 180, maxLat: 0 },
  },
  {
    id: 'sa',
    label: 'S. America',
    bbox: { minLon: -82, minLat: -56, maxLon: -34, maxLat: 13 },
  },
  {
    id: 'af',
    label: 'Africa',
    bbox: { minLon: -18, minLat: -35, maxLon: 52, maxLat: 38 },
  },
]
