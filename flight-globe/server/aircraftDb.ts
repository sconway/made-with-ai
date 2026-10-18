import { mkdirSync } from 'node:fs'
import path from 'node:path'
import readline from 'node:readline'
import { Readable } from 'node:stream'
import { fileURLToPath } from 'node:url'
import Database from 'better-sqlite3'
import type { FlightState } from './types'

/**
 * Airframe metadata by ICAO24 hex (type, registration, ICAO class, operator),
 * imported once from OpenSky's public aircraft database. Lets every poll carry
 * types without per-aircraft lookups; newer airframes fall back to adsbdb in the client.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SOURCE_URL =
  process.env.AIRCRAFT_DB_URL ||
  'https://s3.opensky-network.org/data-samples/metadata/aircraftDatabase.csv'
const BATCH = 5000
const MEMO_MAX = 80_000

/** US military ICAO24 allocation. Other nations are caught by operator name. */
const US_MIL_LO = 0xadf7c8
const US_MIL_HI = 0xafffff

const MILITARY_RE =
  /\b(air force|navy|naval air|army|marine corps|military|coast guard|national guard|luftwaffe|bundeswehr|arm[eé]e de l|fuerza a[eé]rea|for[cç]a a[eé]rea|aeronautica militare|ministry of defen[cs]e|department of defen[cs]e|defen[cs]e force|royal air|luchtmacht|flygvapnet|ilmavoimat|heer|marine nationale)\b/i

export interface AircraftInfo {
  reg: string | null
  type: string | null
  cls: string | null
  op: string | null
  mil: boolean
}

let db: Database.Database | null = null
let lookupStmt: Database.Statement | null = null
let ready = false
let importing = false
const memo = new Map<number, AircraftInfo | null>()

export function aircraftDbReady(): boolean {
  return ready
}

/** Opens the DB and starts a background import on first run. Never throws. */
export function openAircraftDb(): void {
  if (process.env.AIRCRAFT_DB === '0') return
  try {
    const file =
      process.env.AIRCRAFT_DB_PATH || path.join(__dirname, 'data', 'aircraft.db')
    mkdirSync(path.dirname(file), { recursive: true })
    db = new Database(file)
    db.pragma('journal_mode = WAL')
    db.exec(`
      CREATE TABLE IF NOT EXISTS aircraft (
        hex INTEGER PRIMARY KEY,
        reg TEXT, type TEXT, cls TEXT, op TEXT, mil INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT);
    `)
    lookupStmt = db.prepare('SELECT reg, type, cls, op, mil FROM aircraft WHERE hex = ?')
    const done = db.prepare("SELECT v FROM meta WHERE k = 'imported'").get() as
      | { v: string }
      | undefined
    if (done) {
      ready = true
      const n = (db.prepare('SELECT COUNT(*) AS n FROM aircraft').get() as { n: number }).n
      console.log(`[aircraft-db] ${n.toLocaleString()} airframes (imported ${done.v})`)
    } else {
      void importDatabase()
    }
  } catch (e) {
    console.error('[aircraft-db] disabled:', e instanceof Error ? e.message : e)
    db = null
  }
}

/** Minimal CSV line split: every field is double-quoted, `""` escapes a quote. */
function splitCsv(line: string): string[] | null {
  const out: string[] = []
  let i = 0
  while (i < line.length) {
    if (line[i] !== '"') {
      const j = line.indexOf(',', i)
      out.push(j < 0 ? line.slice(i) : line.slice(i, j))
      if (j < 0) return out
      i = j + 1
      continue
    }
    let s = ''
    i++
    for (;;) {
      const q = line.indexOf('"', i)
      if (q < 0) return null
      s += line.slice(i, q)
      if (line[q + 1] === '"') {
        s += '"'
        i = q + 2
        continue
      }
      i = q + 1
      break
    }
    out.push(s)
    if (line[i] === ',') i++
    else break
  }
  return out
}

function clean(v: string | undefined, max = 60): string | null {
  const s = (v ?? '').trim()
  return s ? s.slice(0, max) : null
}

async function importDatabase(): Promise<void> {
  if (!db || importing) return
  importing = true
  const started = Date.now()
  console.log(`[aircraft-db] importing ${SOURCE_URL} (one-time, ~95 MB)…`)
  try {
    const res = await fetch(SOURCE_URL)
    if (!res.ok || !res.body) throw new Error(`download ${res.status}`)
    const rl = readline.createInterface({
      input: Readable.fromWeb(res.body as never),
      crlfDelay: Infinity,
    })
    const insert = db.prepare(
      'INSERT OR REPLACE INTO aircraft (hex, reg, type, cls, op, mil) VALUES (?, ?, ?, ?, ?, ?)',
    )
    const flush = db.transaction((rows: unknown[][]) => {
      for (const r of rows) insert.run(...r)
    })
    db.exec('DELETE FROM aircraft')

    let header: string[] | null = null
    let col: Record<string, number> = {}
    let pending = ''
    let batch: unknown[][] = []
    let total = 0
    for await (const raw of rl) {
      const line = pending ? `${pending}\n${raw}` : raw
      const fields = splitCsv(line)
      if (!fields) {
        // Quoted field spans lines (notes); keep reading.
        pending = line.length < 20_000 ? line : ''
        continue
      }
      pending = ''
      if (!header) {
        header = fields
        col = Object.fromEntries(header.map((h, i) => [h, i]))
        continue
      }
      const hex = parseInt(fields[col.icao24!] ?? '', 16)
      if (!Number.isFinite(hex) || hex <= 0 || hex > 0xffffff) continue
      const type = clean(fields[col.typecode!], 4)?.toUpperCase() ?? null
      const reg = clean(fields[col.registration!], 12)?.toUpperCase() ?? null
      if (!type && !reg) continue
      const op = clean(fields[col.operator!]) ?? clean(fields[col.owner!])
      const mil =
        (hex >= US_MIL_LO && hex <= US_MIL_HI) ||
        MILITARY_RE.test(`${fields[col.operator!] ?? ''} ${fields[col.owner!] ?? ''}`)
      batch.push([
        hex,
        reg,
        type === 'ZZZZ' ? null : type,
        clean(fields[col.icaoaircrafttype!], 3)?.toUpperCase() ?? null,
        op,
        mil ? 1 : 0,
      ])
      if (batch.length >= BATCH) {
        flush(batch)
        total += batch.length
        batch = []
        // Let the HTTP server breathe between batches.
        await new Promise((r) => setImmediate(r))
      }
    }
    if (batch.length) {
      flush(batch)
      total += batch.length
    }
    db.prepare("INSERT OR REPLACE INTO meta (k, v) VALUES ('imported', ?)").run(
      new Date().toISOString(),
    )
    memo.clear()
    ready = true
    console.log(
      `[aircraft-db] imported ${total.toLocaleString()} airframes in ${Math.round((Date.now() - started) / 1000)}s`,
    )
  } catch (e) {
    console.error('[aircraft-db] import failed (retry on next start):', e instanceof Error ? e.message : e)
  } finally {
    importing = false
  }
}

export function aircraftInfo(icao24: string): AircraftInfo | null {
  if (!ready || !lookupStmt) return null
  const hex = parseInt(icao24, 16)
  if (!Number.isFinite(hex)) return null
  if (memo.has(hex)) return memo.get(hex)!
  const row = lookupStmt.get(hex) as
    | { reg: string | null; type: string | null; cls: string | null; op: string | null; mil: number }
    | undefined
  const info = row
    ? { reg: row.reg, type: row.type, cls: row.cls, op: row.op, mil: row.mil === 1 }
    : hex >= US_MIL_LO && hex <= US_MIL_HI
      ? { reg: null, type: null, cls: null, op: null, mil: true }
      : null
  if (memo.size >= MEMO_MAX) memo.clear()
  memo.set(hex, info)
  return info
}

/** Copies of `flights` with airframe metadata filled in where the feed lacks it. */
export function enrichFlights(flights: FlightState[]): FlightState[] {
  if (!ready) return flights
  return flights.map((f) => {
    const info = aircraftInfo(f.icao24)
    if (!info) return f
    const out: FlightState = { ...f }
    if (!out.typeCode && info.type) out.typeCode = info.type
    if (!out.registration && info.reg) out.registration = info.reg
    if (info.cls) out.typeClass = info.cls
    if (info.op) out.operator = info.op
    if (info.mil) out.military = true
    return out
  })
}
