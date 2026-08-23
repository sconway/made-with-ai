import { useEffect, useRef } from 'react'
import { useStore } from '../store/useStore'
import {
  bestAirportForQuery,
  bestFlightForQuery,
  scoreFlight,
} from '../lib/search'

/**
 * Sidebar search field. Filters/sorts the flight list (and globe) by query —
 * no separate results dropdown. Enter jumps to the best flight match, or an
 * airport hub when that's the stronger hit.
 */
export function SearchBox() {
  const flights = useStore((s) => s.flights)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const setSelectedCountry = useStore((s) => s.setSelectedCountry)
  const focusCamera = useStore((s) => s.focusCamera)
  const setSearchAirportIata = useStore((s) => s.setSearchAirportIata)
  const setSearchQuery = useStore((s) => s.setSearchQuery)
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const searchQuery = useStore((s) => s.searchQuery)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const t = e.target as HTMLElement | null
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const clear = () => {
    setSearchQuery('')
    setSearchAirportIata(null)
    inputRef.current?.focus()
  }

  const commitSearch = () => {
    const q = searchQuery.trim()
    if (!q) return

    setSelectedCountry(null)

    const flight = bestFlightForQuery(flights, q)
    const flightScore = flight ? scoreFlight(flight, q) : 0
    const airport = bestAirportForQuery(q)
    const qn = q.toUpperCase().replace(/\s+/g, '')
    const airportExact =
      airport != null && (airport.iata === qn || airport.icao === qn)

    // Exact hub code (JFK / KJFK) or a weak/no flight hit → airport filter.
    // Strong callsign match still wins over a coincidental hub code.
    if (airport && flightScore < 94 && (airportExact || flightScore < 72)) {
      setSelectedFlight(null)
      setSearchAirportIata(airport.iata)
      setSearchQuery(airport.iata)
      focusCamera(airport.lat, airport.lon, 1.75)
      return
    }

    if (flight) {
      setSearchAirportIata(null)
      setSelectedFlight(flight.icao24)
      focusCamera(flight.lat, flight.lon, 1.85)
      return
    }

    if (airport) {
      setSelectedFlight(null)
      setSearchAirportIata(airport.iata)
      setSearchQuery(airport.iata)
      focusCamera(airport.lat, airport.lon, 1.75)
    }
  }

  return (
    <div className="search-box">
      <div className="search-field">
        <span className="search-icon" aria-hidden>
          ⌕
        </span>
        <input
          ref={inputRef}
          type="search"
          value={searchQuery}
          placeholder="Search flight, airline, airport…"
          aria-label="Search flights and airports"
          autoComplete="off"
          onChange={(e) => {
            const next = e.target.value
            setSearchQuery(next)
            if (searchAirportIata) setSearchAirportIata(null)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              commitSearch()
            } else if (e.key === 'Escape') {
              if (searchQuery || searchAirportIata) clear()
              else inputRef.current?.blur()
            }
          }}
        />
        {(searchQuery || searchAirportIata) && (
          <button type="button" className="search-clear" onClick={clear}>
            Clear
          </button>
        )}
      </div>
    </div>
  )
}
