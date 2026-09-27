import { useEffect, useMemo } from 'react'
import { useStore } from '../store/useStore'
import { findAirport } from '../lib/airports'
import { applyDocumentSeo, buildSeo } from '../lib/seo'

function siteOrigin(): string {
  const env = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, '')
  if (env) return env
  return window.location.origin
}

/** Keeps document title, social tags, and JSON-LD in sync with the current view. */
export function SeoHead() {
  const regionId = useStore((s) => s.region.id)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const flightsById = useStore((s) => s.flightsById)
  const followFlight = useStore((s) => s.followFlight)
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const countryName = useStore((s) => s.selectedCountry?.name ?? null)

  const flight = selectedFlightId ? flightsById.get(selectedFlightId) : undefined
  const callsign = flight?.callsign ?? null
  const icao = flight?.icao24 ?? null

  const page = useMemo(
    () =>
      buildSeo({
        origin: siteOrigin(),
        regionId,
        callsign,
        icao,
        airport: searchAirportIata ? findAirport(searchAirportIata) ?? null : null,
        countryName,
        follow: followFlight,
      }),
    [regionId, callsign, icao, searchAirportIata, countryName, followFlight],
  )

  useEffect(() => {
    applyDocumentSeo(page)
  }, [page])

  return null
}
