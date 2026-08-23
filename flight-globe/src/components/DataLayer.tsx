import { useEffect, useRef } from 'react'
import { useStore } from '../store/useStore'
import { loadCountries } from '../lib/countries'
import { fetchFlightsForBBox } from '../lib/airplaneslive'
import { fetchStates } from '../lib/opensky'
import {
  fetchFlightsFromBackend,
  fetchPlaybackMeta,
  useBackend,
} from '../lib/api'
import { bboxKey, intervalForBBox } from '../lib/viewport'
import { filterFlightsToBBox } from '../lib/visibleFlights'
import type { BBox } from '../lib/geo'
import type { FlightState } from '../lib/flight'

const MAX_BACKOFF = 8
const PENDING_RETRY_MS = 2500
const PLAYBACK_META_MS = 10_000

const SOURCE =
  import.meta.env.VITE_FLIGHT_SOURCE === 'opensky' ? 'opensky' : 'airplaneslive'

function fetchDirect(bbox: BBox | null): Promise<FlightState[]> {
  return SOURCE === 'opensky'
    ? fetchStates(bbox ?? undefined)
    : fetchFlightsForBBox(bbox)
}

/** User-facing copy only — never leak infra, vendors, or how to run the app. */
function upstreamMessage(raw: string): string {
  if (/429|too many|busy|rate/i.test(raw)) {
    return 'Live traffic is temporarily limited. Retrying…'
  }
  return 'Live traffic is temporarily unavailable. Retrying…'
}

function liveDataErrorMessage(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err)
  if (/429|too many/i.test(msg)) {
    return 'Live traffic is temporarily limited. Retrying…'
  }
  if (/failed to fetch|networkerror|load failed|fetch/i.test(msg)) {
    return 'Unable to load live traffic. Check your connection and try again.'
  }
  if (/401|403|unauthor|forbidden/i.test(msg)) {
    return 'Live traffic is temporarily unavailable. Retrying…'
  }
  return 'Live traffic is temporarily unavailable. Retrying…'
}

/**
 * Loads country geometry once, then polls flight data for the active region
 * (or selected country). When playback is scrubbed off live, fetches a
 * historical snapshot instead of the live cache.
 */
export function DataLayer() {
  const setCountries = useStore((s) => s.setCountries)
  const setFlights = useStore((s) => s.setFlights)
  const setLoading = useStore((s) => s.setLoading)
  const setError = useStore((s) => s.setError)
  const setPlaybackRange = useStore((s) => s.setPlaybackRange)
  const region = useStore((s) => s.region)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const playbackLive = useStore((s) => s.playbackLive)
  const playbackAt = useStore((s) => s.playbackAt)

  const hadLiveData = useRef(false)
  const backend = useBackend()

  useEffect(() => {
    loadCountries()
      .then(setCountries)
      .catch(() => setError('Unable to load map data.'))
  }, [setCountries, setError])

  // Keep playback scrubber bounds fresh from the shared history ring.
  useEffect(() => {
    if (!backend) return
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const run = async () => {
      try {
        const meta = await fetchPlaybackMeta()
        if (cancelled) return
        setPlaybackRange(meta.earliest, meta.latest)
      } catch {
        /* ignore — bar just stays empty until history exists */
      }
      if (!cancelled) timer = setTimeout(run, PLAYBACK_META_MS)
    }
    run()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [backend, setPlaybackRange])

  const bbox: BBox | null = selectedCountry?.bbox ?? region.bbox
  const histKey = playbackLive ? 'live' : `at:${playbackAt ?? 0}`
  const key = `${backend ? 'be' : 'direct'}|${selectedCountry?.id ?? 'none'}|${region.id}|${bboxKey(bbox)}|${histKey}`

  useEffect(() => {
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>
    let backoff = 1
    const base = backend ? Math.min(intervalForBBox(bbox), 12_000) : intervalForBBox(bbox)

    const run = async () => {
      // Don't flash the global loading toast while scrubbing/playing history —
      // those fetches are frequent and would bounce the bottom UI.
      if (playbackLive) setLoading(true)
      try {
        let states: FlightState[]
        let nextDelay = base

        if (backend) {
          const data = await fetchFlightsFromBackend({
            ...(selectedCountry?.bbox
              ? { bbox: selectedCountry.bbox }
              : { scope: region.id }),
            at: playbackLive ? null : playbackAt,
          })

          if (cancelled) return

          if (data.pending || (playbackLive && data.error)) {
            if (data.error) setError(upstreamMessage(data.error))
            else setError('Loading live traffic…')
            // Live or nothing — clear the globe rather than keep drawing stale traffic.
            setFlights([])
            hadLiveData.current = false
            nextDelay = PENDING_RETRY_MS
            backoff = 1
          } else {
            states = data.flights
            hadLiveData.current = states.length > 0
            setFlights(states, data.updatedAt || Date.now())
            setError(null)
            backoff = 1
            // Historical scrub: don't keep polling the same frame.
            nextDelay = playbackLive ? base : 60_000
          }
        } else {
          if (!playbackLive) {
            setError('Playback isn’t available right now.')
            setLoading(false)
            return
          }
          states = await fetchDirect(bbox)
          states = filterFlightsToBBox(states, bbox)
          if (cancelled) return
          hadLiveData.current = true
          setFlights(states)
          setError(null)
          backoff = 1
          nextDelay = base
        }

        if (!cancelled) {
          setLoading(false)
          timer = setTimeout(run, nextDelay * (backend ? 1 : backoff))
        }
        return
      } catch (e) {
        if (cancelled) return
        backoff = Math.min(backoff * 2, MAX_BACKOFF)
        if (!hadLiveData.current) setFlights([])
        else if (playbackLive) {
          setFlights([])
          hadLiveData.current = false
        }
        setError(liveDataErrorMessage(e))
        setLoading(false)
        timer = setTimeout(run, base * backoff)
      }
    }

    run()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return null
}
