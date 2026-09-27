import type { BBox } from './geo'

export interface Region {
  id: string
  label: string
  bbox: BBox | null // null = whole world
  /** Camera target lat/lon to fly to when this region is picked. */
  center: { lat: number; lon: number }
}

/** Camera distance from globe center for this region's home pose. */
export function regionCameraDist(region: Region): number {
  if (!region.bbox) return 3.0
  const latSpan = region.bbox.maxLat - region.bbox.minLat
  const lonSpan = region.bbox.maxLon - region.bbox.minLon
  return latSpan > 55 || lonSpan > 70 ? 2.65 : 2.4
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
  {
    id: 'as',
    label: 'Asia',
    bbox: { minLon: 32, minLat: -10, maxLon: 150, maxLat: 55 },
    center: { lat: 28, lon: 95 },
  },
  {
    id: 'oc',
    label: 'Oceania',
    bbox: { minLon: 110, minLat: -48, maxLon: 180, maxLat: 0 },
    center: { lat: -26, lon: 145 },
  },
  {
    id: 'sa',
    label: 'S. America',
    bbox: { minLon: -82, minLat: -56, maxLon: -34, maxLat: 13 },
    center: { lat: -15, lon: -58 },
  },
  {
    id: 'af',
    label: 'Africa',
    bbox: { minLon: -18, minLat: -35, maxLon: 52, maxLat: 38 },
    center: { lat: 2, lon: 20 },
  },
]
