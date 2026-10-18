import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import type { FlightState } from '../src/lib/flight'
import {
  DEFAULT_TRAFFIC_FILTERS,
  decodeFilters,
  describeFilters,
  encodeFilters,
  flightMatchesTrafficFilters,
  parseTypeList,
  sanitizeTrafficFilters,
  type TrafficFilters,
} from '../src/lib/filters'
import { isLikelyMilitary } from '../src/lib/military'
import { emitterCategory } from '../src/lib/emitterCategory'

function flight(partial: Partial<FlightState>): FlightState {
  return {
    icao24: 'abc123',
    callsign: 'UAL100',
    originCountry: 'United States',
    lon: -80,
    lat: 40,
    baroAltitude: 10_000,
    geoAltitude: 10_200,
    onGround: false,
    velocity: 200,
    track: 90,
    verticalRate: 0,
    lastContact: 0,
    ...partial,
  }
}

function filters(partial: Partial<TrafficFilters>): TrafficFilters {
  return { ...DEFAULT_TRAFFIC_FILTERS, ...partial }
}

describe('parseTypeList', () => {
  it('normalizes codes and prefix wildcards', () => {
    assert.deepEqual(parseTypeList('B738, a32*  B77W'), ['B738', 'A32*', 'B77W'])
  })
})

describe('flightMatchesTrafficFilters', () => {
  it('keeps everything when filters are default', () => {
    assert.equal(flightMatchesTrafficFilters(flight({}), DEFAULT_TRAFFIC_FILTERS), true)
  })

  it('filters phase, altitude, and airline', () => {
    const grounded = flight({ onGround: true, velocity: 5 })
    assert.equal(flightMatchesTrafficFilters(grounded, filters({ phase: 'airborne' })), false)
    assert.equal(
      flightMatchesTrafficFilters(flight({ geoAltitude: 4000 }), filters({ altMinM: 5500 })),
      false,
    )
    assert.equal(flightMatchesTrafficFilters(flight({ callsign: 'BAW1' }), filters({ airline: 'UAL' })), false)
    assert.equal(flightMatchesTrafficFilters(flight({ callsign: 'UAL123' }), filters({ airline: 'UAL' })), true)
  })

  it('matches ICAO types with a prefix wildcard', () => {
    const b738 = flight({ typeCode: 'B738' })
    assert.equal(flightMatchesTrafficFilters(b738, filters({ types: ['B77*'] })), false)
    assert.equal(flightMatchesTrafficFilters(b738, filters({ types: ['B73*'] })), true)
  })

  it('keeps unknown types unless hideUnknown is on', () => {
    const unknown = flight({ typeCode: undefined })
    assert.equal(flightMatchesTrafficFilters(unknown, filters({ types: ['B738'] })), true)
    assert.equal(
      flightMatchesTrafficFilters(unknown, filters({ types: ['B738'], hideUnknown: true })),
      false,
    )
  })

  it('matches family and ADS-B category', () => {
    const helo = flight({ typeCode: 'B407', category: 'A7' })
    assert.equal(flightMatchesTrafficFilters(helo, filters({ families: ['helo'] })), true)
    assert.equal(flightMatchesTrafficFilters(helo, filters({ families: ['narrow'] })), false)
    assert.equal(flightMatchesTrafficFilters(helo, filters({ categories: ['rotor'] })), true)
    assert.equal(flightMatchesTrafficFilters(helo, filters({ categories: ['heavy'] })), false)
  })

  it('matches emergency squawk and registration prefix', () => {
    const emer = flight({ squawk: '7700', registration: 'N12345' })
    assert.equal(flightMatchesTrafficFilters(emer, filters({ squawk: 'emergency' })), true)
    assert.equal(flightMatchesTrafficFilters(emer, filters({ squawk: '1200' })), false)
    assert.equal(flightMatchesTrafficFilters(emer, filters({ regPrefix: 'N' })), true)
    assert.equal(flightMatchesTrafficFilters(emer, filters({ regPrefix: 'G-' })), false)
  })
})

describe('share encoding', () => {
  it('round-trips non-default filters through the URL payload', () => {
    const f = filters({ types: ['B77*'], military: 'only', hideUnknown: true })
    const decoded = decodeFilters(encodeFilters(f))
    assert.ok(decoded)
    assert.deepEqual(decoded.types, ['B77*'])
    assert.equal(decoded.military, 'only')
    assert.equal(decoded.hideUnknown, true)
  })

  it('rejects junk', () => {
    assert.equal(decodeFilters('%%%'), null)
    assert.deepEqual(sanitizeTrafficFilters({ phase: 'nope', types: 3 }).phase, 'all')
  })

  it('describes removable chips', () => {
    const chips = describeFilters(filters({ types: ['A388'], hideUnknown: true }))
    assert.ok(chips.some((c) => c.label === 'A388'))
    assert.ok(chips.some((c) => c.label === 'Hide unknown'))
  })
})

describe('military + category helpers', () => {
  it('flags the US military hex block and known callsigns', () => {
    assert.equal(isLikelyMilitary({ icao24: 'ae0001', callsign: 'N1' }), true)
    assert.equal(isLikelyMilitary({ icao24: 'abc123', callsign: 'RCH123' }), true)
    assert.equal(isLikelyMilitary({ icao24: 'abc123', callsign: 'UAL100' }), false)
    assert.equal(isLikelyMilitary({ icao24: 'abc123', callsign: 'SAMSON1' }), false)
  })

  it('maps OpenSky emitter codes', () => {
    assert.equal(emitterCategory('A1'), 'light')
    assert.equal(emitterCategory('A5'), 'heavy')
    assert.equal(emitterCategory('A7'), 'rotor')
    assert.equal(emitterCategory('B6'), 'uav')
    assert.equal(emitterCategory('A0'), null)
  })
})
