/** Visual family for close-range aircraft meshes (not display names). */

export type AircraftFamily =
  | 'narrow'
  | 'wide'
  | 'jumbo'
  | 'regional'
  | 'turbo'
  | 'bizjet'
  | 'ga'
  | 'helo'

export const AIRCRAFT_FAMILIES: AircraftFamily[] = [
  'narrow',
  'wide',
  'jumbo',
  'regional',
  'turbo',
  'bizjet',
  'ga',
  'helo',
]

/** Size vs the narrowbody glyph (wingspan ~0.028). */
export const FAMILY_SCALE: Record<AircraftFamily, number> = {
  narrow: 1,
  wide: 1.16,
  jumbo: 1.28,
  regional: 0.84,
  turbo: 0.86,
  bizjet: 0.8,
  ga: 0.62,
  helo: 0.7,
}

const HELO = new Set([
  'A109',
  'A119',
  'A139',
  'A169',
  'A189',
  'AS50',
  'AS55',
  'AS65',
  'AW13',
  'AW14',
  'AW16',
  'AW18',
  'B06',
  'B06T',
  'B212',
  'B214',
  'B222',
  'B230',
  'B407',
  'B412',
  'B427',
  'B429',
  'B430',
  'B47G',
  'CH47',
  'EC20',
  'EC30',
  'EC35',
  'EC45',
  'EC55',
  'H60',
  'MI8',
  'MI17',
  'R22',
  'R44',
  'R66',
  'S76',
  'S92',
  'UH1',
  'UH60',
])

const JUMBO = new Set(['A388', 'B741', 'B742', 'B743', 'B744', 'B748', 'B74S'])

const WIDE = new Set([
  'A332',
  'A333',
  'A338',
  'A339',
  'A342',
  'A343',
  'A345',
  'A346',
  'A359',
  'A35K',
  'A3ST',
  'A124',
  'A225',
  'B762',
  'B763',
  'B764',
  'B772',
  'B77L',
  'B773',
  'B77W',
  'B778',
  'B779',
  'B788',
  'B789',
  'B78X',
  'C17',
  'C17A',
  'DC10',
  'IL76',
  'IL96',
  'MD11',
])

const TURBO = new Set([
  'AT43',
  'AT45',
  'AT46',
  'AT72',
  'AT73',
  'AT75',
  'AT76',
  'D228',
  'DH8A',
  'DH8B',
  'DH8C',
  'DH8D',
  'E120',
  'SB20',
  'SF34',
])

const REGIONAL = new Set([
  'B461',
  'B462',
  'B463',
  'CRJ2',
  'CRJ7',
  'CRJ9',
  'CRJX',
  'D328',
  'E135',
  'E145',
  'E170',
  'E175',
  'E190',
  'E195',
  'E290',
  'E295',
  'E75L',
  'E75S',
  'J328',
  'RJ1H',
  'RJ85',
  'SU95',
])

const BIZJET = new Set([
  'BE40',
  'C25A',
  'C25B',
  'C25C',
  'C56X',
  'C680',
  'C68A',
  'C700',
  'CL30',
  'CL35',
  'CL60',
  'E35L',
  'E50P',
  'E55P',
  'F2TH',
  'F900',
  'FA7X',
  'FA8X',
  'G150',
  'G280',
  'GALX',
  'GL5T',
  'GLEX',
  'GLF4',
  'GLF5',
  'GLF6',
  'H25B',
  'HDJT',
  'LJ35',
  'LJ45',
  'LJ60',
  'PC24',
])

const GA = new Set([
  'BE20',
  'BE30',
  'C172',
  'C182',
  'C208',
  'DA40',
  'DA42',
  'DA62',
  'E110',
  'P28A',
  'PC12',
  'SR22',
  'TBM7',
  'TBM8',
  'TBM9',
])

function prefixFamily(code: string): AircraftFamily | null {
  if (code.startsWith('B74') || code === 'A388') return 'jumbo'
  if (
    code.startsWith('A33') ||
    code.startsWith('A34') ||
    code.startsWith('A35') ||
    code.startsWith('B76') ||
    code.startsWith('B77') ||
    code.startsWith('B78')
  ) {
    return 'wide'
  }
  if (code.startsWith('AT') || code.startsWith('DH8')) return 'turbo'
  if (code.startsWith('CRJ') || code.startsWith('E17') || code.startsWith('E19')) {
    return 'regional'
  }
  if (code.startsWith('GLF') || code.startsWith('C25') || code.startsWith('CL')) {
    return 'bizjet'
  }
  if (code.startsWith('C17') && code !== 'C17' && code !== 'C17A') return 'ga'
  if (code.startsWith('B73') || code.startsWith('A32') || code.startsWith('A31')) {
    return 'narrow'
  }
  return null
}

function categoryFamily(category: string): AircraftFamily | null {
  const c = category.toUpperCase()
  if (c === 'A7' || c.startsWith('A7')) return 'helo'
  if (c === 'A1') return 'ga'
  if (c === 'A2') return 'regional'
  if (c === 'A4' || c === 'A5') return 'wide'
  if (c === 'A3' || c === 'A6') return 'narrow'
  return null
}

/** Map an ICAO type / ADS-B category to the close-up mesh family. */
export function aircraftFamily(
  typeCode?: string | null,
  category?: string | null,
): AircraftFamily {
  const code = (typeCode || '').trim().toUpperCase()
  if (code) {
    if (HELO.has(code)) return 'helo'
    if (JUMBO.has(code)) return 'jumbo'
    if (WIDE.has(code)) return 'wide'
    if (TURBO.has(code)) return 'turbo'
    if (REGIONAL.has(code)) return 'regional'
    if (BIZJET.has(code)) return 'bizjet'
    if (GA.has(code)) return 'ga'
    const fromPrefix = prefixFamily(code)
    if (fromPrefix) return fromPrefix
  }
  const cat = (category || '').trim()
  if (cat) {
    const fromCat = categoryFamily(cat)
    if (fromCat) return fromCat
  }
  return 'narrow'
}
