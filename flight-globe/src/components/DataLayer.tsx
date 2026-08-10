import { useEffect, useRef } from 'react'
import { useStore } from '../store/useStore'
import { loadCountries } from '../lib/countries'
import { fetchFlightsForBBox } from '../lib/airplaneslive'
import { fetchStates } from '../lib/opensky'
import { loadDemoFlights } from '../lib/demo'
import { bboxKey, intervalForBBox } from '../lib/viewport'
import type { BBox } from '../lib/geo'
import type { FlightState } from '../lib/flight'

const MAX_BACKOFF = 8
const FAILS_BEFORE_DEMO = 2

// Provider selection. Default is the keyless airplanes.live; set
// VITE_FLIGHT_SOURCE=opensky (plus OpenSky credentials in .env) for full
// bounding-box coverage. See README.
const SOURCE =
  import.meta.env.VITE_FLIGHT_SOURCE === 'opensky' ? 'opensky' : 'airplaneslive'

function fetchForBBox(bbox: BBox | null): Promise<FlightState[]> {
  return SOURCE === 'opensky'
    ? fetchStates(bbox ?? undefined)
    : fetchFlightsForBBox(bbox)
}

/**
 * Loads country geometry once, then polls the selected flight source for the
 * current view. The query bbox follows the camera (viewBBox) or, when a country
 * is selected, that country's box — so coverage spreads across the whole visible
 * area. Cadence scales with the area; errors back off, then fall back to demo.
 */
export function DataLayer() {
  const setCountries = useStore((s) => s.setCountries)
  const setFlights = useStore((s) => s.setFlights)
  const setLoading = useStore((s) => s.setLoading)
  const setError = useStore((s) => s.setError)
  const setDemoMode = useStore((s) => s.setDemoMode)
  const viewBBox = useStore((s) => s.viewBBox)
  const selectedCountry = useStore((s) => s.selectedCountry)

  const failCount = useRef(0)
  const inDemo = useRef(false)
  const demoData = useRef<FlightState[] | null>(null)

  useEffect(() => {
    loadCountries()
      .then(setCountries)
      .catch((e) => setError(`Countries failed: ${e.message}`))
  }, [setCountries, setError])

  // Force offline demo data (for previews / no network): append ?demo=1.
  const forceDemo =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('demo')

  const bbox: BBox | null = selectedCountry?.bbox ?? viewBBox
  const key = bboxKey(bbox)

  useEffect(() => {
    if (forceDemo) {
      let done = false
      loadDemoFlights().then((d) => {
        if (done) return
        setDemoMode(true)
        setFlights(d)
        setError('Demo mode — bundled sample data')
      })
      return () => {
        done = true
      }
    }

    let cancelled = false
    let timer: ReturnType<typeof setTimeout>
    let backoff = 1
    const base = intervalForBBox(bbox)

    const enterDemo = async () => {
      if (!demoData.current) {
        try {
          demoData.current = await loadDemoFlights()
        } catch {
          return
        }
      }
      if (cancelled) return
      inDemo.current = true
      setDemoMode(true)
      setFlights(demoData.current)
      setError('Live feed unavailable — showing sample data')
    }

    const run = async () => {
      setLoading(true)
      try {
        const states = await fetchForBBox(bbox)
        if (cancelled) return
        failCount.current = 0
        inDemo.current = false
        setDemoMode(false)
        setFlights(states)
        setError(null)
        backoff = 1
      } catch (e) {
        if (cancelled) return
        failCount.current++
        backoff = Math.min(backoff * 2, MAX_BACKOFF)
        if (failCount.current >= FAILS_BEFORE_DEMO && !inDemo.current) {
          await enterDemo()
        } else if (!inDemo.current) {
          const msg = (e as Error).message
          setError(
            /429|too many/i.test(msg)
              ? 'Rate limited — slowing updates'
              : `Data source error — retrying (${msg})`,
          )
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
          timer = setTimeout(run, base * backoff)
        }
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
