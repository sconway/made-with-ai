import type { BBox } from './geo'

export interface Region {
  id: string
  label: string
  bbox: BBox | null // null = whole world
  /** Camera target lat/lon to fly to when this region is picked. */
  center: { lat: number; lon: number }
}

export const REGIONS: Region[] = [
  {
    id: 'world',
    label: 'World',
    bbox: null,
    center: { lat: 20, lon: 0 },
  },
  {
    id: 'na',
    label: 'N. America',
    bbox: { minLon: -140, minLat: 15, maxLon: -55, maxLat: 60 },
    center: { lat: 40, lon: -100 },
  },
  {
    id: 'eu',
    label: 'Europe',
    bbox: { minLon: -12, minLat: 35, maxLon: 40, maxLat: 62 },
    center: { lat: 50, lon: 12 },
  },
]
