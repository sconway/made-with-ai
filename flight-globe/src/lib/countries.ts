import { ringBBox, type BBox, type Polygon } from './geo'

export interface Country {
  id: string
  name: string
  isoA2: string
  polys: Polygon[] // list of MultiPolygon parts (each = [outer, ...holes])
  bbox: BBox
}

interface GeoJSONFeature {
  properties: Record<string, unknown>
  geometry: {
    type: 'Polygon' | 'MultiPolygon'
    coordinates: number[][][] | number[][][][]
  } | null
}

interface GeoJSON {
  features: GeoJSONFeature[]
}

/** Load and normalize the bundled Natural Earth country GeoJSON. */
export async function loadCountries(): Promise<Country[]> {
  const res = await fetch('/data/countries-110m.geojson')
  if (!res.ok) throw new Error(`countries geojson ${res.status}`)
  const gj = (await res.json()) as GeoJSON

  const countries: Country[] = []
  for (const f of gj.features) {
    if (!f.geometry) continue
    const props = f.properties
    const name =
      (props.ADMIN as string) ||
      (props.name as string) ||
      (props.NAME as string) ||
      'Unknown'
    const isoA2 =
      (props.ISO_A2 as string) || (props.iso_a2 as string) || '??'

    let polys: Polygon[]
    if (f.geometry.type === 'Polygon') {
      polys = [f.geometry.coordinates as Polygon]
    } else {
      polys = f.geometry.coordinates as Polygon[]
    }

    countries.push({
      id: `${isoA2}-${name}`,
      name,
      isoA2,
      polys,
      bbox: ringBBox(polys),
    })
  }
  return countries
}
