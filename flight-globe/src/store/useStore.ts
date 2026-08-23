import { create } from 'zustand'
import type { FlightState } from '../lib/opensky'
import type { Country } from '../lib/countries'
import type { BBox } from '../lib/geo'
import { REGIONS, type Region } from '../lib/regions'
import {
  DEFAULT_TRAFFIC_FILTERS,
  type TrafficFilters,
} from '../lib/filters'
import { observeEmergencySquawks } from '../lib/squawk'

export type TrailMode = 'off' | 'selected' | 'all'

/** Max comparison paths kept on the globe alongside the selection. */
export const MAX_PINNED_FLIGHTS = 8

export type AlertWatchKind = 'callsign' | 'country'

export interface AlertWatch {
  id: string
  kind: AlertWatchKind
  /** Normalized callsign query, or country id. */
  value: string
  label: string
}

export interface AlertToast {
  id: string
  title: string
  body: string
  flightId: string | null
  createdAt: number
}

/** One-shot camera fly-to request (search, follow prep, etc.). */
export interface CameraFocus {
  lat: number
  lon: number
  /** Camera distance from globe center. */
  dist: number
  /** Bumps so identical lat/lon still retriggers the rig. */
  nonce: number
}

interface AppState {
  flights: FlightState[]
  flightsById: Map<string, FlightState>
  lastUpdate: number
  loading: boolean
  error: string | null

  countries: Country[]
  hoveredCountry: Country | null
  selectedCountry: Country | null

  selectedFlightId: string | null
  hoveredFlightId: string | null
  /** Screen-space pointer for the flight hover tip (client coords). */
  hoverPointer: { x: number; y: number } | null
  region: Region

  // Visible area of the globe (from the camera). null = ~whole globe. Drives
  // which flights we request.
  viewBBox: BBox | null

  // Bumped as adsbdb route lookups resolve so UIs that depend on routes refresh.
  routesVersion: number

  cameraFocus: CameraFocus | null
  /** When set, sidebar prefers flights related to this airport IATA. */
  searchAirportIata: string | null
  /** Active free-text search — non-empty hides non-matching aircraft on the globe. */
  searchQuery: string

  /** True = follow live feed; false = historical scrub. */
  playbackLive: boolean
  /** Scrubber time (unix ms) when not live. */
  playbackAt: number | null
  playbackEarliest: number | null
  playbackLatest: number | null
  playbackPlaying: boolean
  /** Camera continuously tracks the selected flight. */
  followFlight: boolean
  /** Extra flights whose routes stay drawn for comparison. */
  pinnedFlightIds: string[]
  /** Altitude / phase / airline / speed filters for globe + sidebar. */
  trafficFilters: TrafficFilters
  /** Breadcrumb trails behind aircraft. */
  trailMode: TrailMode
  /** Active callsign / country watches. */
  alertWatches: AlertWatch[]
  /** Ephemeral in-app alert toasts. */
  alertToasts: AlertToast[]
  /** Bumped when confirmed unusual-squawk set changes. */
  emergencyVersion: number

  setFlights: (flights: FlightState[], updatedAt?: number) => void
  setViewBBox: (b: BBox | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setCountries: (countries: Country[]) => void
  setHoveredCountry: (c: Country | null) => void
  setSelectedCountry: (c: Country | null) => void
  setSelectedFlight: (id: string | null) => void
  setHoveredFlight: (
    id: string | null,
    pointer?: { x: number; y: number } | null,
  ) => void
  setRegion: (r: Region) => void
  bumpRoutes: () => void
  focusCamera: (lat: number, lon: number, dist?: number) => void
  setSearchAirportIata: (iata: string | null) => void
  setSearchQuery: (query: string) => void
  setPlaybackLive: (live: boolean) => void
  setPlaybackAt: (at: number | null) => void
  setPlaybackRange: (earliest: number | null, latest: number | null) => void
  setPlaybackPlaying: (playing: boolean) => void
  setFollowFlight: (follow: boolean) => void
  togglePinnedFlight: (id: string) => void
  setTrafficFilters: (filters: TrafficFilters) => void
  resetTrafficFilters: () => void
  setTrailMode: (mode: TrailMode) => void
  addAlertWatch: (watch: Omit<AlertWatch, 'id'>) => void
  removeAlertWatch: (id: string) => void
  pushAlertToast: (toast: Omit<AlertToast, 'id' | 'createdAt'>) => void
  dismissAlertToast: (id: string) => void
}

export const useStore = create<AppState>((set) => ({
  flights: [],
  flightsById: new Map(),
  lastUpdate: 0,
  loading: false,
  error: null,

  countries: [],
  hoveredCountry: null,
  selectedCountry: null,

  selectedFlightId: null,
  hoveredFlightId: null,
  hoverPointer: null,
  region: REGIONS[1], // default to North America — dense + fast to load
  viewBBox: REGIONS[1].bbox,
  routesVersion: 0,
  cameraFocus: null,
  searchAirportIata: null,
  searchQuery: '',
  playbackLive: true,
  playbackAt: null,
  playbackEarliest: null,
  playbackLatest: null,
  playbackPlaying: false,
  followFlight: false,
  pinnedFlightIds: [],
  trafficFilters: { ...DEFAULT_TRAFFIC_FILTERS },
  trailMode: 'selected',
  alertWatches: [],
  alertToasts: [],
  emergencyVersion: 0,

  setFlights: (flights, updatedAt = Date.now()) =>
    set((s) => {
      const flightsById = new Map<string, FlightState>()
      for (const f of flights) flightsById.set(f.icao24, f)

      // During playback, hold selected/pinned aircraft across sparse frames so
      // the path and sidebar row don't blink out between history samples.
      const keep = [
        ...(s.selectedFlightId ? [s.selectedFlightId] : []),
        ...s.pinnedFlightIds,
      ]
      const merged = flights.slice()
      for (const id of keep) {
        if (flightsById.has(id)) continue
        const prev = s.flightsById.get(id)
        if (!prev) continue
        flightsById.set(id, prev)
        merged.push(prev)
      }

      let emergencyVersion = s.emergencyVersion
      // Only advance squawk streaks on live snapshots — playback frames would
      // falsely confirm (or clear) unusual codes.
      if (s.playbackLive) {
        if (observeEmergencySquawks(merged, updatedAt)) {
          emergencyVersion += 1
        }
      }

      return {
        flights: merged,
        flightsById,
        lastUpdate: updatedAt,
        emergencyVersion,
      }
    }),
  setViewBBox: (viewBBox) => set({ viewBBox }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setCountries: (countries) => set({ countries }),
  setHoveredCountry: (hoveredCountry) => set({ hoveredCountry }),
  setSelectedCountry: (selectedCountry) =>
    set({
      selectedCountry,
      selectedFlightId: null,
      hoveredFlightId: null,
      hoverPointer: null,
      searchAirportIata: null,
      searchQuery: '',
    }),
  setSelectedFlight: (selectedFlightId) =>
    set((s) => {
      // Deselect clears follow. Selecting another plane while following
      // transfers focus to that flight (single-follow, not multi-cam).
      if (!selectedFlightId) {
        return { selectedFlightId: null, followFlight: false }
      }
      return {
        selectedFlightId,
        followFlight: s.followFlight,
      }
    }),
  setHoveredFlight: (hoveredFlightId, pointer) =>
    set((s) => {
      if (hoveredFlightId == null) {
        return { hoveredFlightId: null, hoverPointer: null }
      }
      return {
        hoveredFlightId,
        hoverPointer: pointer !== undefined ? pointer : s.hoverPointer,
      }
    }),
  setRegion: (region) => set({ region, searchAirportIata: null, searchQuery: '' }),
  bumpRoutes: () => set((s) => ({ routesVersion: s.routesVersion + 1 })),
  focusCamera: (lat, lon, dist = 2.15) =>
    set((s) => ({
      cameraFocus: {
        lat,
        lon,
        dist,
        nonce: (s.cameraFocus?.nonce ?? 0) + 1,
      },
    })),
  setSearchAirportIata: (searchAirportIata) => set({ searchAirportIata }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setPlaybackLive: (playbackLive) =>
    set((s) => ({
      playbackLive,
      playbackPlaying: playbackLive ? false : s.playbackPlaying,
      playbackAt: playbackLive
        ? null
        : (s.playbackAt ?? s.playbackLatest ?? Date.now()),
    })),
  setPlaybackAt: (playbackAt) =>
    set({ playbackAt, playbackLive: false }),
  setPlaybackRange: (playbackEarliest, playbackLatest) =>
    set({ playbackEarliest, playbackLatest }),
  setPlaybackPlaying: (playbackPlaying) =>
    set((s) => ({
      playbackPlaying,
      playbackLive: playbackPlaying ? false : s.playbackLive,
    })),
  setFollowFlight: (followFlight) => set({ followFlight }),
  togglePinnedFlight: (id) =>
    set((s) => {
      if (s.pinnedFlightIds.includes(id)) {
        return { pinnedFlightIds: s.pinnedFlightIds.filter((x) => x !== id) }
      }
      if (s.pinnedFlightIds.length >= MAX_PINNED_FLIGHTS) return s
      return { pinnedFlightIds: [...s.pinnedFlightIds, id] }
    }),
  setTrafficFilters: (trafficFilters) => set({ trafficFilters }),
  resetTrafficFilters: () =>
    set({ trafficFilters: { ...DEFAULT_TRAFFIC_FILTERS } }),
  setTrailMode: (trailMode) => set({ trailMode }),
  addAlertWatch: (watch) =>
    set((s) => {
      const value = watch.value.trim()
      if (!value) return s
      const dup = s.alertWatches.some(
        (w) => w.kind === watch.kind && w.value === value,
      )
      if (dup) return s
      if (s.alertWatches.length >= 12) return s
      const id = `${watch.kind}-${value}-${Date.now().toString(36)}`
      return {
        alertWatches: [...s.alertWatches, { ...watch, id, value }],
      }
    }),
  removeAlertWatch: (id) =>
    set((s) => ({
      alertWatches: s.alertWatches.filter((w) => w.id !== id),
    })),
  pushAlertToast: (toast) =>
    set((s) => {
      const id = `toast-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
      const next = [
        { ...toast, id, createdAt: Date.now() },
        ...s.alertToasts,
      ].slice(0, 5)
      return { alertToasts: next }
    }),
  dismissAlertToast: (id) =>
    set((s) => ({
      alertToasts: s.alertToasts.filter((t) => t.id !== id),
    })),
}))
