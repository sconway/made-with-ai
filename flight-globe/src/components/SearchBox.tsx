import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore } from '../store/useStore'
import {
  searchTraffic,
  type SearchHit,
} from '../lib/search'

/**
 * Sidebar search with autocomplete over live flights, airports, and airlines.
 * Enter or a suggestion applies the filter / jumps to the match.
 */
export function SearchBox() {
  const flights = useStore((s) => s.flights)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const focusCamera = useStore((s) => s.focusCamera)
  const setSearchAirportIata = useStore((s) => s.setSearchAirportIata)
  const setSearchQuery = useStore((s) => s.setSearchQuery)
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const searchQuery = useStore((s) => s.searchQuery)
  const routesVersion = useStore((s) => s.routesVersion)
  void routesVersion

  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  const hits = useMemo(
    () => searchTraffic(searchQuery, flights, 8),
    [searchQuery, flights, routesVersion],
  )

  useEffect(() => {
    setActive(0)
  }, [searchQuery])

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
    setOpen(false)
    inputRef.current?.focus()
  }

  const applyHit = (hit: SearchHit) => {
    if (hit.kind === 'airport') {
      setSelectedFlight(null)
      setSearchAirportIata(hit.airport.iata)
      setSearchQuery(hit.airport.iata)
      if (!selectedCountry) {
        focusCamera(hit.airport.lat, hit.airport.lon, 1.75)
      }
    } else if (hit.kind === 'flight') {
      setSearchAirportIata(null)
      setSearchQuery(hit.label)
      setSelectedFlight(hit.flight.icao24)
      if (!selectedCountry) {
        focusCamera(hit.flight.lat, hit.flight.lon, 1.85)
      }
    } else {
      setSearchAirportIata(null)
      setSelectedFlight(null)
      setSearchQuery(hit.name)
    }
    setOpen(false)
  }

  const commitSearch = () => {
    const q = searchQuery.trim()
    if (!q) return
    if (open && hits[active]) {
      applyHit(hits[active]!)
      return
    }
    if (hits[0]) {
      applyHit(hits[0])
      return
    }
  }

  const showList = open && hits.length > 0

  return (
    <div className="search-box">
      <div className={`search-field${showList ? ' has-suggest' : ''}`}>
        <span className="search-icon" aria-hidden>
          ⌕
        </span>
        <input
          ref={inputRef}
          type="search"
          value={searchQuery}
          placeholder="Search flight, airline, airport…"
          aria-label="Search flights and airports"
          aria-autocomplete="list"
          aria-expanded={showList}
          aria-controls="search-suggest"
          autoComplete="off"
          onChange={(e) => {
            const next = e.target.value
            setSearchQuery(next)
            if (searchAirportIata) setSearchAirportIata(null)
            setOpen(next.trim().length >= 2)
          }}
          onFocus={() => {
            if (searchQuery.trim().length >= 2 && hits.length > 0) setOpen(true)
          }}
          onBlur={() => {
            window.setTimeout(() => setOpen(false), 120)
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' && hits.length > 0) {
              e.preventDefault()
              setOpen(true)
              setActive((i) => (i + 1) % hits.length)
            } else if (e.key === 'ArrowUp' && hits.length > 0) {
              e.preventDefault()
              setOpen(true)
              setActive((i) => (i - 1 + hits.length) % hits.length)
            } else if (e.key === 'Enter') {
              e.preventDefault()
              commitSearch()
            } else if (e.key === 'Escape') {
              if (showList) {
                e.preventDefault()
                setOpen(false)
              } else if (searchQuery || searchAirportIata) {
                clear()
              } else {
                inputRef.current?.blur()
              }
            }
          }}
        />
        {(searchQuery || searchAirportIata) && (
          <button type="button" className="search-clear" onClick={clear}>
            Clear
          </button>
        )}
      </div>
      {showList && (
        <ul
          ref={listRef}
          id="search-suggest"
          className="search-suggest"
          role="listbox"
        >
          {hits.map((hit, i) => (
            <li key={`${hit.kind}-${hit.label}-${i}`} role="none">
              <button
                type="button"
                role="option"
                aria-selected={i === active}
                className={`search-suggest-item${i === active ? ' active' : ''}`}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setActive(i)}
                onClick={() => applyHit(hit)}
              >
                <span className="search-suggest-kind">
                  {hit.kind === 'airport'
                    ? 'Airport'
                    : hit.kind === 'airline'
                      ? 'Airline'
                      : 'Flight'}
                </span>
                <span className="search-suggest-main">
                  <strong>{hit.label}</strong>
                  <small>
                    {hit.kind === 'airport' && hit.relatedCount > 0
                      ? `${hit.detail} · ${hit.relatedCount} live`
                      : hit.detail}
                  </small>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
