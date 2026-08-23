import { useStore } from '../store/useStore'
import {
  altBandFromFilters,
  filtersFromAltBand,
  filtersFromSpeedBand,
  speedBandFromFilters,
  trafficFiltersActive,
  type AltBand,
  type SpeedBand,
  type TrafficFilters,
} from '../lib/filters'
import type { TrailMode } from '../store/useStore'

function Segmented<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
}: {
  value: T
  options: { id: T; label: string; title?: string }[]
  onChange: (v: T) => void
  ariaLabel: string
}) {
  return (
    <div className="filter-seg" role="group" aria-label={ariaLabel}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          title={o.title}
          className={value === o.id ? 'active' : undefined}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function FlightFilters() {
  const filters = useStore((s) => s.trafficFilters)
  const setTrafficFilters = useStore((s) => s.setTrafficFilters)
  const resetTrafficFilters = useStore((s) => s.resetTrafficFilters)
  const trailMode = useStore((s) => s.trailMode)
  const setTrailMode = useStore((s) => s.setTrailMode)
  const active = trafficFiltersActive(filters)

  const patch = (partial: Partial<TrafficFilters>) =>
    setTrafficFilters({ ...filters, ...partial })

  return (
    <div className="flight-filters">
      <div className="flight-filters-row">
        <span className="flight-filters-label">Phase</span>
        <Segmented
          ariaLabel="Flight phase"
          value={filters.phase}
          onChange={(phase) => patch({ phase })}
          options={[
            { id: 'all', label: 'All' },
            { id: 'airborne', label: 'Air' },
            { id: 'ground', label: 'Gnd' },
          ]}
        />
      </div>

      <div className="flight-filters-row">
        <span className="flight-filters-label">Alt</span>
        <Segmented<AltBand>
          ariaLabel="Altitude band"
          value={altBandFromFilters(filters)}
          onChange={(band) => patch(filtersFromAltBand(band))}
          options={[
            { id: 'any', label: 'Any' },
            { id: 'low', label: 'Low', title: 'Below ~FL180' },
            { id: 'mid', label: 'Mid', title: '~FL180–FL350' },
            { id: 'high', label: 'High', title: 'Above ~FL350' },
          ]}
        />
      </div>

      <div className="flight-filters-row">
        <span className="flight-filters-label">Spd</span>
        <Segmented<SpeedBand>
          ariaLabel="Speed band"
          value={speedBandFromFilters(filters)}
          onChange={(band) => patch(filtersFromSpeedBand(band))}
          options={[
            { id: 'any', label: 'Any' },
            { id: 'slow', label: '<250', title: 'Under 250 kt' },
            { id: 'cruise', label: '250–450', title: '250–450 kt' },
            { id: 'fast', label: '450+', title: 'Over 450 kt' },
          ]}
        />
      </div>

      <div className="flight-filters-row">
        <span className="flight-filters-label">Kind</span>
        <Segmented
          ariaLabel="Traffic kind"
          value={filters.kind}
          onChange={(kind) => patch({ kind })}
          options={[
            { id: 'all', label: 'All' },
            {
              id: 'commercial',
              label: 'Airline',
              title: 'Airline-style callsigns',
            },
            {
              id: 'other',
              label: 'GA',
              title: 'General aviation / other',
            },
          ]}
        />
      </div>

      <div className="flight-filters-row">
        <span className="flight-filters-label">Route</span>
        <Segmented
          ariaLabel="Route data"
          value={filters.route ?? 'all'}
          onChange={(route) => patch({ route })}
          options={[
            { id: 'all', label: 'All' },
            {
              id: 'known',
              label: 'Known',
              title: 'Only flights with origin/destination',
            },
            {
              id: 'unknown',
              label: 'None',
              title: 'Only flights without route data yet',
            },
          ]}
        />
      </div>

      <div className="flight-filters-row flight-filters-airline">
        <span className="flight-filters-label">Aln</span>
        <input
          type="text"
          value={filters.airline}
          maxLength={3}
          placeholder="UAL"
          spellCheck={false}
          aria-label="Airline ICAO code"
          onChange={(e) =>
            patch({
              airline: e.target.value
                .toUpperCase()
                .replace(/[^A-Z]/g, '')
                .slice(0, 3),
            })
          }
        />
        {active && (
          <button
            type="button"
            className="flight-filters-reset"
            onClick={resetTrafficFilters}
          >
            Reset
          </button>
        )}
      </div>

      <div className="flight-filters-row">
        <span className="flight-filters-label">Trail</span>
        <Segmented<TrailMode>
          ariaLabel="Trail mode"
          value={trailMode}
          onChange={setTrailMode}
          options={[
            { id: 'off', label: 'Off' },
            {
              id: 'selected',
              label: 'Sel',
              title: 'Trail on selected / pinned',
            },
            { id: 'all', label: 'All', title: 'Short trails on visible traffic' },
          ]}
        />
      </div>
    </div>
  )
}
