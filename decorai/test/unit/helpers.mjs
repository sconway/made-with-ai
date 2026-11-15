// Shared fakes for the unit tests. No network, no database.

/**
 * A fake Supabase client whose RPCs are plain functions.
 * @param {Record<string, (args: object) => any>} rpcs  name → handler returning
 *   the RPC's `data` (or throwing { message } to simulate a database error)
 */
export function fakeSupabase(rpcs = {}) {
  const calls = [];
  const tables = [];
  return {
    calls,
    tables,
    async rpc(name, args) {
      calls.push({ name, args });
      const handler = rpcs[name];
      if (!handler) return { data: null, error: { message: `function ${name} does not exist` } };
      try {
        return { data: await handler(args), error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
    // Minimal query builder: records what was asked, resolves like PostgREST.
    from(table) {
      const call = { table, op: null, row: null, filters: [] };
      tables.push(call);
      const builder = {
        insert(row) { call.op = 'insert'; call.row = row; return builder; },
        update(row) { call.op = 'update'; call.row = row; return builder; },
        eq(column, value) { call.filters.push([column, value]); return builder; },
        then(resolve, reject) {
          return Promise.resolve({ error: rpcs.__tableError || null }).then(resolve, reject);
        },
      };
      return builder;
    },
  };
}

/** Silence and capture console output for the duration of `fn`. */
export async function captureConsole(fn) {
  const original = { log: console.log, warn: console.warn, error: console.error };
  const out = { log: [], warn: [], error: [] };
  for (const level of Object.keys(out)) {
    console[level] = (...args) => out[level].push(args.map(String).join(' '));
  }
  try {
    await fn(out);
  } finally {
    Object.assign(console, original);
  }
  return out;
}

/** Fake Express req/res/next for middleware tests. */
export function fakeHttp(req = {}) {
  const res = {
    statusCode: 200,
    headers: {},
    body: undefined,
    set(name, value) { this.headers[name] = value; return this; },
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; },
  };
  let nextCalls = 0;
  return { req, res, next: () => { nextCalls += 1; }, get nextCalls() { return nextCalls; } };
}

export const tick = () => new Promise((resolve) => setTimeout(resolve, 5));
