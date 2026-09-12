/**
 * Rebuild src/data/airports.json from OurAirports.
 *
 *   node scripts/build-airports.mjs
 *
 * Source: https://ourairports.com/data/ (Unlicense)
 * Keeps large/medium/small airports that have a 3-character IATA code
 * and valid coordinates — those are the fields we can search, pin, and
 * match to live routes.
 */
import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SRC =
  'https://davidmegginson.github.io/ourairports-data/airports.csv'
const SIZE = {
  large_airport: 'l',
  medium_airport: 'm',
  small_airport: 's',
}

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let i = 0
  let inQuotes = false
  while (i < text.length) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i += 2
          continue
        }
        inQuotes = false
        i++
        continue
      }
      field += c
      i++
      continue
    }
    if (c === '"') {
      inQuotes = true
      i++
      continue
    }
    if (c === ',') {
      row.push(field)
      field = ''
      i++
      continue
    }
    if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(field)
      if (row.some((x) => x !== '')) rows.push(row)
      row = []
      field = ''
      i++
      continue
    }
    field += c
    i++
  }
  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

const csv = await (await fetch(SRC)).text()
const table = parseCsv(csv)
const header = table[0]
const idx = Object.fromEntries(header.map((h, i) => [h.replaceAll('"', ''), i]))

const iataRe = /^[A-Z0-9]{3}$/
const out = []
for (let r = 1; r < table.length; r++) {
  const row = table[r]
  const size = SIZE[row[idx.type]]
  if (!size) continue
  const iata = (row[idx.iata_code] || '').trim().toUpperCase()
  if (!iataRe.test(iata)) continue
  const lat = Number(row[idx.latitude_deg])
  const lon = Number(row[idx.longitude_deg])
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) continue
  let icao = (row[idx.icao_code] || '').trim().toUpperCase()
  if (!icao) icao = (row[idx.gps_code] || '').trim().toUpperCase()
  if (!icao) icao = (row[idx.ident] || '').trim().toUpperCase()
  const name = (row[idx.name] || '').trim() || iata
  const city = (row[idx.municipality] || '').trim() || name
  out.push([
    iata,
    icao,
    name,
    city,
    Math.round(lat * 10000) / 10000,
    Math.round(lon * 10000) / 10000,
    size,
  ])
}

const order = { l: 0, m: 1, s: 2 }
out.sort((a, b) => order[a[6]] - order[b[6]] || a[0].localeCompare(b[0]))

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const dest = path.join(root, 'src/data/airports.json')
await mkdir(path.dirname(dest), { recursive: true })
await writeFile(dest, JSON.stringify(out))
console.log(`wrote ${out.length} airports → ${path.relative(root, dest)}`)
