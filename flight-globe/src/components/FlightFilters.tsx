import { useEffect, useState, type InputHTMLAttributes } from 'react'
import { useStore } from '../store/useStore'
import {
  altBandFromFilters,
  describeFilters,
  encodeFilters,
  filtersFromAltBand,
  filtersFromSpeedBand,
  normalizeAirportCode,
  normalizeRegPrefix,
  normalizeSquawk,
  parseTypeList,
  speedBandFromFilters,
  trafficFiltersActive,
  type AltBand,
  type MilitaryMode,
  type SpeedBand,
  type TrafficFilters,
  EMITTER_CATEGORIES,
  CATEGORY_LABEL,
} from '../lib/filters'
import {
  AIRCRAFT_FAMILIES,
  FAMILY_LABEL,
  type AircraftFamily,
} from '../lib/aircraftFamily'
import {
  deleteFilterPreset,
  readFilterPresets,
  saveFilterPreset,
  type FilterPreset,
} from '../lib/prefs'
import { copyText, serializeDeepLink } from '../lib/deepLink'
import type { ColorMode, TrailMode, WeatherMode } from '../store/useStore'

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

/** Text input that keeps the user's draft while committing a normalized value. */
function DraftInput({
  value,
  normalize,
  onCommit,
  ...rest
}: {
  value: string
  normalize: (raw: string) => string
  onCommit: (normalized: string) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) {
  const [draft, setDraft] = useState(value)
  useEffect(() => {
    if (normalize(draft) !== value) setDraft(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync only on external change
  }, [value])
  return (
    <input
      type="text"
      spellCheck={false}
      autoComplete="off"
      {...rest}
      value={draft}
      onChange={(e) => {
        setDraft(e.target.value)
        const next = normalize(e.target.value)
        if (next !== value) onCommit(next)
      }}
      onBlur={() => setDraft(value)}
    />
  )
}

function ActiveFilterChips({
  filters,
  onPatch,
  onReset,
}: {
  filters: TrafficFilters
  onPatch: (p: Partial<TrafficFilters>) => void
  onReset: () => void
}) {
  const chips = describeFilters(filters)
  if (chips.length === 0) return null
  return (
    <div className="filter-chips" aria-label="Active filters">
      {chips.map((c) => (
        <button
          key={c.id}
          type="button"
          className="filter-chip"
          title={`Remove ${c.label}`}
          onClick={() => onPatch(c.clear)}
        >
          {c.label}
          <span aria-hidden="true">×</span>
        </button>
      ))}
      <button type="button" className="flight-filters-reset" onClick={onReset}>
        Clear all
      </button>
    </div>
  )
}

function FilterPresets({
  filters,
  onApply,
}: {
  filters: TrafficFilters
  onApply: (f: TrafficFilters) => void
}) {
  const [presets, setPresets] = useState<FilterPreset[]>(() => readFilterPresets())
  const [naming, setNaming] = useState(false)
  const [name, setName] = useState('')
  const [linkLabel, setLinkLabel] = useState('Copy link')
  const active = trafficFiltersActive(filters)
  const currentKey = encodeFilters(filters)

  const save = () => {
    if (!name.trim()) return
    setPresets(saveFilterPreset(name, filters))
    setName('')
    setNaming(false)
  }

  const copyLink = async () => {
    const url = new URL(window.location.href)
    url.search = serializeDeepLink({ filters })
    url.hash = ''
    const ok = await copyText(url.toString())
    setLinkLabel(ok ? 'Copied' : 'Failed')
    window.setTimeout(() => setLinkLabel('Copy link'), 1600)
  }

  return (
    <div className="filter-presets">
      {presets.length > 0 && (
        <div className="filter-chips" aria-label="Saved filter presets">
          {presets.map((p) => (
            <span
              key={p.name}
              className={`filter-preset${encodeFilters(p.filters) === currentKey ? ' active' : ''}`}
            >
              <button type="button" onClick={() => onApply(p.filters)} title="Apply preset">
                {p.name}
              </button>
              <button
                type="button"
                aria-label={`Delete preset ${p.name}`}
                title="Delete preset"
                onClick={() => setPresets(deleteFilterPreset(p.name))}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
      {active && (
        <div className="flight-filters-row flight-filters-airline">
          {naming ? (
            <>
              <input
                type="text"
                autoFocus
                value={name}
                maxLength={40}
                placeholder="Preset name"
                aria-label="Preset name"
                className="filter-preset-name"
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') save()
                  if (e.key === 'Escape') setNaming(false)
                }}
              />
              <button type="button" className="flight-filters-reset" onClick={save}>
                Save
              </button>
              <button
                type="button"
                className="flight-filters-reset"
                onClick={() => setNaming(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="flight-filters-reset"
                onClick={() => setNaming(true)}
              >
                Save preset
              </button>
              <button
                type="button"
                className="flight-filters-reset"
                title="Copy a link that opens the app with these filters"
                onClick={copyLink}
              >
                {linkLabel}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export function FlightFilters() {
  const filters = useStore((s) => s.trafficFilters)
  const setTrafficFilters = useStore((s) => s.setTrafficFilters)
  const resetTrafficFilters = useStore((s) => s.resetTrafficFilters)
  const trailMode = useStore((s) => s.trailMode)
  const setTrailMode = useStore((s) => s.setTrailMode)
  const weatherMode = useStore((s) => s.weatherMode)
  const setWeatherMode = useStore((s) => s.setWeatherMode)
  const colorMode = useStore((s) => s.colorMode)
  const setColorMode = useStore((s) => s.setColorMode)

  const patch = (partial: Partial<TrafficFilters>) =>
    setTrafficFilters({ ...filters, ...partial })

  const toggleFamily = (fam: AircraftFamily) =>
    patch({
      families: filters.families.includes(fam)
        ? filters.families.filter((f) => f !== fam)
        : AIRCRAFT_FAMILIES.filter((f) => f === fam || filters.families.includes(f)),
    })

  return (
    <div className="flight-filters">
      <ActiveFilterChips
        filters={filters}
        onPatch={patch}
        onReset={resetTrafficFilters}
      />
      <FilterPresets filters={filters} onApply={setTrafficFilters} />
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
      </div>

      <div className="flight-filters-row flight-filters-top">
        <span className="flight-filters-label">Fam</span>
        <div className="filter-toggles" role="group" aria-label="Aircraft family">
          {AIRCRAFT_FAMILIES.map((fam) => (
            <button
              key={fam}
              type="button"
              aria-pressed={filters.families.includes(fam)}
              className={filters.families.includes(fam) ? 'active' : undefined}
              onClick={() => toggleFamily(fam)}
            >
              {FAMILY_LABEL[fam]}
            </button>
          ))}
        </div>
      </div>

      <div className="flight-filters-row flight-filters-airline">
        <span className="flight-filters-label">Type</span>
        <DraftInput
          value={filters.types.join(', ')}
          normalize={(raw) => parseTypeList(raw).join(', ')}
          onCommit={(v) => patch({ types: parseTypeList(v) })}
          placeholder="B738, A32*, B77*"
          aria-label="ICAO aircraft types"
          title="ICAO type codes, comma separated. A trailing * matches a prefix."
        />
        <button
          type="button"
          className={`filter-toggle-btn${filters.hideUnknown ? ' active' : ''}`}
          aria-pressed={filters.hideUnknown}
          title="Hide aircraft whose type, family, category, or registration is still unknown"
          onClick={() => patch({ hideUnknown: !filters.hideUnknown })}
        >
          Hide unknown
        </button>
      </div>

      <div className="flight-filters-row flight-filters-top">
        <span className="flight-filters-label">Cat</span>
        <div className="filter-toggles" role="group" aria-label="ADS-B category">
          {EMITTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filters.categories.includes(cat)}
              className={filters.categories.includes(cat) ? 'active' : undefined}
              onClick={() =>
                patch({
                  categories: filters.categories.includes(cat)
                    ? filters.categories.filter((c) => c !== cat)
                    : EMITTER_CATEGORIES.filter(
                        (c) => c === cat || filters.categories.includes(c),
                      ),
                })
              }
            >
              {CATEGORY_LABEL[cat]}
            </button>
          ))}
        </div>
      </div>

      <div className="flight-filters-row">
        <span className="flight-filters-label">Mil</span>
        <Segmented<MilitaryMode>
          ariaLabel="Military / government"
          value={filters.military}
          onChange={(military) => patch({ military })}
          options={[
            { id: 'all', label: 'All' },
            { id: 'only', label: 'Only', title: 'Likely military / government only' },
            { id: 'hide', label: 'Hide', title: 'Hide likely military / government' },
          ]}
        />
      </div>

      <div className="flight-filters-row flight-filters-airline">
        <span className="flight-filters-label">Sqk</span>
        <DraftInput
          value={filters.squawk === 'emergency' ? '' : filters.squawk}
          normalize={normalizeSquawk}
          onCommit={(squawk) => patch({ squawk })}
          inputMode="numeric"
          maxLength={4}
          placeholder="7000"
          aria-label="Squawk code"
          title="Squawk code; fewer than 4 digits matches a prefix"
        />
        <button
          type="button"
          className={`filter-toggle-btn${filters.squawk === 'emergency' ? ' active' : ''}`}
          aria-pressed={filters.squawk === 'emergency'}
          title="7500 / 7600 / 7700"
          onClick={() =>
            patch({ squawk: filters.squawk === 'emergency' ? '' : 'emergency' })
          }
        >
          Emergency
        </button>
      </div>

      <div className="flight-filters-row flight-filters-airline">
        <span className="flight-filters-label">Apt</span>
        <DraftInput
          value={filters.airport}
          normalize={normalizeAirportCode}
          onCommit={(airport) => patch({ airport })}
          maxLength={4}
          placeholder="JFK / EGLL"
          aria-label="Origin or destination airport"
          title="Flights to or from this airport (needs route data)"
        />
        <span className="flight-filters-label">Reg</span>
        <DraftInput
          value={filters.regPrefix}
          normalize={normalizeRegPrefix}
          onCommit={(regPrefix) => patch({ regPrefix })}
          maxLength={8}
          placeholder="N, G-"
          aria-label="Registration prefix"
          title="Registration prefix (N = USA, G- = UK, D- = Germany…)"
        />
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

      <div className="flight-filters-row">
        <span className="flight-filters-label">Color</span>
        <Segmented<ColorMode>
          ariaLabel="Plane color mode"
          value={colorMode}
          onChange={setColorMode}
          options={[
            {
              id: 'alt',
              label: 'Alt',
              title: 'Low orange → high cyan',
            },
            {
              id: 'speed',
              label: 'Spd',
              title: 'Slow gold → fast blue',
            },
            {
              id: 'airline',
              label: 'Aln',
              title: 'Color by ICAO airline code',
            },
          ]}
        />
      </div>

      <div className="flight-filters-row">
        <span className="flight-filters-label">Wx</span>
        <Segmented<WeatherMode>
          ariaLabel="Weather overlay"
          value={weatherMode}
          onChange={setWeatherMode}
          options={[
            { id: 'off', label: 'Off' },
            {
              id: 'radar',
              label: 'Radar',
              title: 'Precipitation on country / 2D map',
            },
          ]}
        />
      </div>
    </div>
  )
}
