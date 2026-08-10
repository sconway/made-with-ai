import { create } from 'zustand'
import type { FlightState } from '../lib/opensky'
import type { Country } from '../lib/countries'
import type { BBox } from '../lib/geo'
import { REGIONS, type Region } from '../lib/regions'

interface AppState {
  flights: FlightState[]
  flightsById: Map<string, FlightState>
  lastUpdate: number
  loading: boolean
  error: string | null
  demoMode: boolean

  countries: Country[]
  hoveredCountry: Country | null
  selectedCountry: Country | null

  selectedFlightId: string | null
  region: Region

  // Visible area of the globe (from the camera). null = ~whole globe. Drives
  // which flights we request.
  viewBBox: BBox | null

  // Route arcs: a version counter bumped as adsbdb lookups resolve (so the arc
  // layer rebuilds), plus a visibility toggle.
  showRoutes: boolean
  routesVersion: number

  setFlights: (flights: FlightState[]) => void
  setViewBBox: (b: BBox | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setDemoMode: (demoMode: boolean) => void
  setCountries: (countries: Country[]) => void
  setHoveredCountry: (c: Country | null) => void
  setSelectedCountry: (c: Country | null) => void
  setSelectedFlight: (id: string | null) => void
  setRegion: (r: Region) => void
  setShowRoutes: (v: boolean) => void
  bumpRoutes: () => void
}

export const useStore = create<AppState>((set) => ({
  flights: [],
  flightsById: new Map(),
  lastUpdate: 0,
  loading: false,
  error: null,
  demoMode: false,

  countries: [],
  hoveredCountry: null,
  selectedCountry: null,

  selectedFlightId: null,
  region: REGIONS[1], // default to North America — dense + fast to load
  viewBBox: REGIONS[1].bbox,
  showRoutes: true,
  routesVersion: 0,

  setFlights: (flights) =>
    set(() => {
      const flightsById = new Map<string, FlightState>()
      for (const f of flights) flightsById.set(f.icao24, f)
      return { flights, flightsById, lastUpdate: Date.now() }
    }),
  setViewBBox: (viewBBox) => set({ viewBBox }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setDemoMode: (demoMode) => set({ demoMode }),
  setCountries: (countries) => set({ countries }),
  setHoveredCountry: (hoveredCountry) => set({ hoveredCountry }),
  setSelectedCountry: (selectedCountry) => set({ selectedCountry }),
  setSelectedFlight: (selectedFlightId) => set({ selectedFlightId }),
  setRegion: (region) => set({ region }),
  setShowRoutes: (showRoutes) => set({ showRoutes }),
  bumpRoutes: () => set((s) => ({ routesVersion: s.routesVersion + 1 })),
}))
