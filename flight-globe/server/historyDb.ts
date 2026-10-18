import { mkdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Database from 'better-sqlite3'
import type { FlightState } from './types'

/**
 * Durable position history (SQLite). One row per aircraft per poll, integer
 * packed. Full resolution for FULL_RES_MS, then one poll per THIN_STEP_S, then
 * dropped after the retention window.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const DAY_MS = 24 * 60 * 60 * 1000
const RETENTION_MS =
  Math.max(1, Number(process.env.HISTORY_RETENTION_DAYS) || 7) * DAY_MS
const FULL_RES_MS = 48 * 60 * 60 * 1000
const THIN_STEP_S = 6 * 60
const PRUNE_EVERY_MS = 60 * 60 * 1000

export interface HistoryRow {
  t: number
  hex: number
  lat: number
  lon: number
  alt: number | null
  galt: number | null
  spd: number | null
  trk: number | null
  vr: number | null
  gnd: number
  cs: number | null
  cc: number | null
  sq: number | null
}

let db: Database.Database | null = null
let dbPath = ''
let lastPrune = 0
let lastKeptPollS = 0

const strIds = new Map<string, number>()
const strById = new Map<number, string>()

let stmts: {
  insertPoll: Database.Statement
  insertPos: Database.Statement
  insertStr: Database.Statement
  pollExists: Database.Statement
  pollBefore: Database.Statement
  pollAfter: Database.Statement
  pollRange: Database.Statement
  posAt: Database.Statement
  posForHex: Database.Statement
} | null = null

function defaultPath(mock: boolean): string {
  return path.join(__dirname, 'data', mock ? 'history-mock.db' : 'history.db')
}

export function openHistoryDb(mock: boolean): void {
  if (db) return
  dbPath = process.env.HISTORY_DB_PATH || defaultPath(mock)
  mkdirSync(path.dirname(dbPath), { recursive: true })
  db = new Database(dbPath)
  db.pragma('journal_mode = WAL')
  db.pragma('synchronous = NORMAL')
  db.exec(`
    CREATE TABLE IF NOT EXISTS polls (
      t INTEGER PRIMARY KEY,
      count INTEGER NOT NULL,
      keep INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS strs (
      id INTEGER PRIMARY KEY,
      s TEXT NOT NULL UNIQUE
    );
    CREATE TABLE IF NOT EXISTS pos (
      hex INTEGER NOT NULL,
      t INTEGER NOT NULL,
      lat INTEGER NOT NULL,
      lon INTEGER NOT NULL,
      alt INTEGER,
      galt INTEGER,
      spd INTEGER,
      trk INTEGER,
      vr INTEGER,
      gnd INTEGER NOT NULL,
      cs INTEGER,
      cc INTEGER,
      sq INTEGER,
      PRIMARY KEY (hex, t)
    ) WITHOUT ROWID;
    CREATE INDEX IF NOT EXISTS pos_t ON pos(t);
  `)

  stmts = {
    insertPoll: db.prepare('INSERT INTO polls (t, count, keep) VALUES (?, ?, ?)'),
    insertPos: db.prepare(
      `INSERT OR IGNORE INTO pos (hex, t, lat, lon, alt, galt, spd, trk, vr, gnd, cs, cc, sq)
       VALUES (@hex, @t, @lat, @lon, @alt, @galt, @spd, @trk, @vr, @gnd, @cs, @cc, @sq)`,
    ),
    insertStr: db.prepare('INSERT INTO strs (s) VALUES (?)'),
    pollExists: db.prepare('SELECT 1 FROM polls WHERE t = ?'),
    pollBefore: db.prepare('SELECT t FROM polls WHERE t <= ? ORDER BY t DESC LIMIT 1'),
    pollAfter: db.prepare('SELECT t FROM polls WHERE t >= ? ORDER BY t ASC LIMIT 1'),
    pollRange: db.prepare('SELECT MIN(t) AS lo, MAX(t) AS hi, COUNT(*) AS n FROM polls'),
    posAt: db.prepare('SELECT * FROM pos WHERE t = ?'),
    posForHex: db.prepare(
      'SELECT * FROM pos WHERE hex = ? AND t >= ? AND t <= ? ORDER BY t',
    ),
  }

  for (const row of db.prepare('SELECT id, s FROM strs').all() as Array<{
    id: number
    s: string
  }>) {
    strIds.set(row.s, row.id)
    strById.set(row.id, row.s)
  }
  const lastKept = db
    .prepare('SELECT MAX(t) AS t FROM polls WHERE keep = 1')
    .get() as { t: number | null }
  lastKeptPollS = lastKept.t ?? 0

  prune(Date.now())
  console.log(`[history] sqlite ${dbPath} (${historyDbStats().polls} polls)`)
}

function strId(s: string | null | undefined): number | null {
  const v = (s ?? '').trim()
  if (!v) return null
  const hit = strIds.get(v)
  if (hit != null) return hit
  const id = Number(stmts!.insertStr.run(v).lastInsertRowid)
  strIds.set(v, id)
  strById.set(id, v)
  return id
}

export function strOf(id: number | null): string {
  return id == null ? '' : strById.get(id) ?? ''
}

function intOrNull(v: number | null | undefined, scale = 1): number | null {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * scale)
}

function hexInt(icao24: string): number | null {
  const n = parseInt(icao24, 16)
  return Number.isFinite(n) && /^[0-9a-f]{6}$/i.test(icao24) ? n : null
}

export function hexStr(n: number): string {
  return n.toString(16).padStart(6, '0')
}

/** Store one poll. Idempotent per poll time (restores from disk re-push the same snapshot). */
export function recordPoll(flights: FlightState[], atMs: number): void {
  if (!db || !stmts) return
  const t = Math.floor(atMs / 1000)
  if (stmts.pollExists.get(t)) return
  const keep = t - lastKeptPollS >= THIN_STEP_S ? 1 : 0
  const started = Date.now()
  db.transaction(() => {
    stmts!.insertPoll.run(t, flights.length, keep)
    for (const f of flights) {
      const hex = hexInt(f.icao24)
      if (hex == null) continue
      stmts!.insertPos.run({
        hex,
        t,
        lat: Math.round(f.lat * 1e5),
        lon: Math.round(f.lon * 1e5),
        alt: intOrNull(f.baroAltitude),
        galt: intOrNull(f.geoAltitude),
        spd: intOrNull(f.velocity, 10),
        trk: intOrNull(f.track),
        vr: intOrNull(f.verticalRate, 10),
        gnd: f.onGround ? 1 : 0,
        cs: strId(f.callsign),
        cc: strId(f.originCountry),
        sq: f.squawk && /^\d{4}$/.test(f.squawk) ? Number(f.squawk) : null,
      })
    }
  })()
  if (keep) lastKeptPollS = t
  const ms = Date.now() - started
  if (ms > 500) console.warn(`[history] slow insert: ${flights.length} rows in ${ms}ms`)
  if (Date.now() - lastPrune > PRUNE_EVERY_MS) prune(Date.now())
}

function prune(nowMs: number): void {
  if (!db) return
  lastPrune = nowMs
  const cutoff = Math.floor((nowMs - RETENTION_MS) / 1000)
  const thinBefore = Math.floor((nowMs - FULL_RES_MS) / 1000)
  const started = Date.now()
  db.transaction(() => {
    db!.prepare('DELETE FROM pos WHERE t < ?').run(cutoff)
    db!.prepare('DELETE FROM polls WHERE t < ?').run(cutoff)
    db!.prepare(
      'DELETE FROM pos WHERE t < ? AND t IN (SELECT t FROM polls WHERE keep = 0 AND t < ?)',
    ).run(thinBefore, thinBefore)
    db!.prepare('DELETE FROM polls WHERE keep = 0 AND t < ?').run(thinBefore)
  })()
  const ms = Date.now() - started
  if (ms > 1000) console.log(`[history] prune took ${ms}ms`)
}

function rowToFlight(r: HistoryRow): FlightState {
  return {
    icao24: hexStr(r.hex),
    callsign: strOf(r.cs),
    originCountry: strOf(r.cc),
    lat: r.lat / 1e5,
    lon: r.lon / 1e5,
    baroAltitude: r.alt,
    geoAltitude: r.galt,
    onGround: r.gnd === 1,
    velocity: r.spd == null ? null : r.spd / 10,
    track: r.trk,
    verticalRate: r.vr == null ? null : r.vr / 10,
    lastContact: r.t,
    squawk: r.sq == null ? null : String(r.sq).padStart(4, '0'),
  }
}

const snapCache = new Map<number, FlightState[]>()
const SNAP_CACHE_MAX = 6

function snapshotFlights(tS: number): FlightState[] {
  const hit = snapCache.get(tS)
  if (hit) return hit
  const rows = stmts!.posAt.all(tS) as HistoryRow[]
  const flights = rows.map(rowToFlight)
  snapCache.set(tS, flights)
  while (snapCache.size > SNAP_CACHE_MAX) {
    snapCache.delete(snapCache.keys().next().value!)
  }
  return flights
}

/** Stored polls bracketing `atMs`, as full world snapshots. */
export function dbBracket(atMs: number): {
  a: { t: number; flights: FlightState[] }
  b: { t: number; flights: FlightState[] }
} | null {
  if (!db || !stmts) return null
  const atS = Math.floor(atMs / 1000)
  const before = stmts.pollBefore.get(atS) as { t: number } | undefined
  const after = stmts.pollAfter.get(atS) as { t: number } | undefined
  const aT = before?.t ?? after?.t
  const bT = after?.t ?? before?.t
  if (aT == null || bT == null) return null
  return {
    a: { t: aT * 1000, flights: snapshotFlights(aT) },
    b: { t: bT * 1000, flights: aT === bT ? snapshotFlights(aT) : snapshotFlights(bT) },
  }
}

export function aircraftRows(hex: string, fromMs: number, toMs: number): HistoryRow[] {
  if (!db || !stmts) return []
  const n = hexInt(hex)
  if (n == null) return []
  return stmts.posForHex.all(
    n,
    Math.floor(fromMs / 1000),
    Math.ceil(toMs / 1000),
  ) as HistoryRow[]
}

export function historyDbStats(): {
  earliest: number | null
  latest: number | null
  polls: number
  sizeBytes: number
  retentionDays: number
} {
  const range = stmts?.pollRange.get() as
    | { lo: number | null; hi: number | null; n: number }
    | undefined
  let sizeBytes = 0
  for (const suffix of ['', '-wal']) {
    try {
      sizeBytes += statSync(dbPath + suffix).size
    } catch {
      /* not created yet */
    }
  }
  return {
    earliest: range?.lo != null ? range.lo * 1000 : null,
    latest: range?.hi != null ? range.hi * 1000 : null,
    polls: range?.n ?? 0,
    sizeBytes,
    retentionDays: RETENTION_MS / DAY_MS,
  }
}

export function closeHistoryDb(): void {
  db?.close()
  db = null
  stmts = null
}
