import { useEffect, useRef } from 'react'
import { useStore } from '../store/useStore'
import {
  deepLinkFromApp,
  findFlightForDeepLink,
  parseDeepLink,
  regionById,
  serializeDeepLink,
  type DeepLink,
} from '../lib/deepLink'
import { findAirport } from '../lib/airports'

/**
 * One-shot URL → store bootstrap, then store → URL replaceState sync.
 *
 * Design goals vs regressions:
 * - Bootstrap runs once (module flag survives StrictMode double-mount).
 * - Pending flight intent resolves when the aircraft appears; cancelled if the
 *   user selects a different flight first.
 * - URL writes use replaceState only (no history spam) and never push camera
 *   orbit into the query (lat/lon only come from the Share button).
 * - Sync starts after bootstrap so we don't clobber the inbound link.
 */
let bootstrapped = false

export function DeepLinkSync() {
  const region = useStore((s) => s.region)
  const setRegion = useStore((s) => s.setRegion)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const flightsById = useStore((s) => s.flightsById)
  const flights = useStore((s) => s.flights)
  const followFlight = useStore((s) => s.followFlight)
  const setFollowFlight = useStore((s) => s.setFollowFlight)
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const setSearchAirportIata = useStore((s) => s.setSearchAirportIata)
  const setSearchQuery = useStore((s) => s.setSearchQuery)
  const focusCamera = useStore((s) => s.focusCamera)
  const lastUpdate = useStore((s) => s.lastUpdate)

  const pendingRef = useRef<DeepLink | null>(null)
  const syncReadyRef = useRef(false)
  const applyingUrlRef = useRef(false)

  // URL → store (once).
  useEffect(() => {
    if (bootstrapped) {
      syncReadyRef.current = true
      return
    }
    bootstrapped = true
    applyingUrlRef.current = true

    const link = parseDeepLink(window.location.search)
    const hasIntent =
      link.regionId != null ||
      link.icao != null ||
      link.flight != null ||
      link.airport != null ||
      link.lat != null ||
      link.follow === true

    if (hasIntent) {
      const r = regionById(link.regionId)
      if (r) {
        setRegion(r)
      } else if (link.icao || link.flight) {
        // Flight links without a region use World so the aircraft isn't missed
        // because the default region filter excludes it.
        const world = regionById('world')
        if (world) setRegion(world)
      }

      if (link.airport) {
        const ap = findAirport(link.airport)
        if (ap) {
          setSearchAirportIata(ap.iata)
          setSearchQuery(ap.iata)
          if (link.lat == null && !link.icao && !link.flight) {
            focusCamera(ap.lat, ap.lon, link.dist ?? 1.75)
          }
        }
      }

      if (link.lat != null && link.lon != null) {
        focusCamera(link.lat, link.lon, link.dist ?? 2.15)
      }

      if (link.icao || link.flight) {
        pendingRef.current = {
          icao: link.icao,
          flight: link.flight,
          follow: link.follow,
        }
      }
    }

    // Allow store→URL after this tick so bootstrap writes don't erase params
    // before pending flight resolution (serialize may omit empty selection).
    queueMicrotask(() => {
      applyingUrlRef.current = false
      syncReadyRef.current = true
      // Normalize the address bar to our canonical param order / names.
      writeUrlFromStore()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- bootstrap once
  }, [])

  // Resolve pending flight when the feed has it.
  useEffect(() => {
    const pending = pendingRef.current
    if (!pending || applyingUrlRef.current) return
    if (lastUpdate <= 0 && flights.length === 0) return

    const hit = findFlightForDeepLink(flights, pending)
    if (!hit) return

    applyingUrlRef.current = true
    pendingRef.current = null
    setSelectedFlight(hit.icao24)
    focusCamera(hit.lat, hit.lon, 1.85)
    if (pending.follow) setFollowFlight(true)
    queueMicrotask(() => {
      applyingUrlRef.current = false
      writeUrlFromStore()
    })
  }, [
    flights,
    lastUpdate,
    setSelectedFlight,
    focusCamera,
    setFollowFlight,
  ])

  // User selected something else while a URL flight was still pending → drop it.
  useEffect(() => {
    const pending = pendingRef.current
    if (!pending || !selectedFlightId || applyingUrlRef.current) return
    const selected = flightsById.get(selectedFlightId)
    if (!selected) return
    const match = findFlightForDeepLink([selected], pending)
    if (!match) pendingRef.current = null
  }, [selectedFlightId, flightsById])

  function writeUrlFromStore() {
    if (!syncReadyRef.current || applyingUrlRef.current) return
    const s = useStore.getState()
    const selected = s.selectedFlightId
      ? s.flightsById.get(s.selectedFlightId)
      : undefined
    const link = deepLinkFromApp({
      regionId: s.region.id,
      selected: selected ?? null,
      airportIata: s.searchAirportIata,
      follow: s.followFlight,
      includeCamera: false,
    })
    // Keep pending icao/flight in the bar until resolved so refresh still works.
    const pending = pendingRef.current
    if (pending && !selected) {
      if (pending.icao) link.icao = pending.icao
      if (pending.flight) link.flight = pending.flight
      if (pending.follow) link.follow = true
    }
    const next = serializeDeepLink(link)
    const current = window.location.search || ''
    if (next === current) return
    const path = `${window.location.pathname}${next}${window.location.hash}`
    window.history.replaceState(null, '', path)
  }

  // Store → URL.
  useEffect(() => {
    writeUrlFromStore()
  }, [
    region.id,
    selectedFlightId,
    followFlight,
    searchAirportIata,
    flightsById,
  ])

  return null
}
