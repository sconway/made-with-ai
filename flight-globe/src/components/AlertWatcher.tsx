import { useEffect, useRef } from 'react'
import { useStore } from '../store/useStore'
import { callsignLookupVariants } from '../lib/callsignVariants'
import { flightServesCountry } from '../lib/countryFlights'
import { pointInBBox, pointInPolygons } from '../lib/geo'
import type { Country } from '../lib/countries'
import type { FlightState } from '../lib/flight'

function normCs(s: string): string {
  return s.trim().toUpperCase().replace(/\s+/g, '')
}

function callsignMatches(flight: FlightState, query: string): boolean {
  const variants = new Set(callsignLookupVariants(query).map(normCs))
  variants.add(normCs(query))
  const cs = normCs(flight.callsign || '')
  if (!cs) return false
  if (variants.has(cs)) return true
  for (const v of variants) {
    if (v.length >= 4 && cs.startsWith(v) && cs.length <= v.length + 1) return true
  }
  // Also match ICAO24 hex watches.
  if (normCs(flight.icao24) === normCs(query)) return true
  return false
}

function overCountry(flight: FlightState, country: Country): boolean {
  if (!pointInBBox(flight.lon, flight.lat, country.bbox)) return false
  return pointInPolygons(flight.lon, flight.lat, country.polys)
}

/**
 * Watches the live feed for alert rules and pushes in-app toasts (once per
 * aircraft per watch until it leaves the feed).
 */
export function AlertWatcher() {
  const flights = useStore((s) => s.flights)
  const lastUpdate = useStore((s) => s.lastUpdate)
  const watches = useStore((s) => s.alertWatches)
  const countries = useStore((s) => s.countries)
  const pushAlertToast = useStore((s) => s.pushAlertToast)
  /** watchId:icao24 → still present */
  const armedRef = useRef(new Set<string>())
  const presentRef = useRef(new Set<string>())

  useEffect(() => {
    if (watches.length === 0 || lastUpdate <= 0) return

    const countryById = new Map(countries.map((c) => [c.id, c]))
    const present = new Set<string>()

    for (const f of flights) {
      present.add(f.icao24)
      for (const w of watches) {
        const key = `${w.id}:${f.icao24}`
        let hit = false
        if (w.kind === 'callsign') {
          hit = callsignMatches(f, w.value)
        } else {
          const country = countryById.get(w.value)
          if (country) {
            hit = overCountry(f, country) || flightServesCountry(f, country)
          }
        }
        if (!hit) continue
        if (armedRef.current.has(key)) continue
        armedRef.current.add(key)
        const cs = (f.callsign || f.icao24).trim().toUpperCase()
        pushAlertToast({
          title: w.kind === 'callsign' ? 'Flight spotted' : 'Country match',
          body:
            w.kind === 'callsign'
              ? `${cs} matched “${w.label}”`
              : `${cs} · ${w.label}`,
          flightId: f.icao24,
        })
      }
    }

    // Drop armed keys for aircraft that left the feed so a reappearance alerts again.
    for (const key of [...armedRef.current]) {
      const icao = key.slice(key.indexOf(':') + 1)
      if (!present.has(icao)) armedRef.current.delete(key)
    }
    presentRef.current = present
  }, [flights, lastUpdate, watches, countries, pushAlertToast])

  // Drop armed keys for removed watches.
  useEffect(() => {
    const ids = new Set(watches.map((w) => w.id))
    for (const key of [...armedRef.current]) {
      const watchId = key.slice(0, key.indexOf(':'))
      if (!ids.has(watchId)) armedRef.current.delete(key)
    }
  }, [watches])

  return null
}
