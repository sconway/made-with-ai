import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createGenerationEvents, modelLabel, parseModelCosts } from '../../lib/generationEvents.js';
import { fakeSupabase, captureConsole, tick } from './helpers.mjs';

describe('generation events', () => {
  test('a started run is inserted with its model, owner and estimated cost', async () => {
    const supabase = fakeSupabase();
    const events = createGenerationEvents({ supabase, costs: { 'google/nano-banana': 0.04 } });
    await captureConsole(async () => {
      events.recordGenerationStarted({ provider: 'replicate', model: 'google/nano-banana', predictionId: 'p1', userId: 'u1' });
      await tick();
    });
    assert.deepEqual(supabase.tables[0], {
      table: 'generation_events',
      op: 'insert',
      row: { provider: 'replicate', model: 'google/nano-banana', prediction_id: 'p1', user_id: 'u1', outcome: 'started', est_cost_usd: 0.04 },
      filters: [],
    });
  });

  test('an anonymous run has no user, and an unpriced model has no cost', async () => {
    const supabase = fakeSupabase();
    const events = createGenerationEvents({ supabase });
    await captureConsole(async () => {
      events.recordGenerationStarted({ provider: 'replicate', model: 'proplabs/virtual-staging:635d607e', predictionId: 'p2' });
      await tick();
    });
    const { row } = supabase.tables[0];
    assert.equal(row.model, 'proplabs/virtual-staging', 'version hash dropped so runs group by model');
    assert.equal(row.user_id, null);
    assert.equal(row.est_cost_usd, null);
  });

  test('an outcome only completes a row that is still "started" (repeat polls record once)', async () => {
    const supabase = fakeSupabase();
    const events = createGenerationEvents({ supabase });
    await captureConsole(async () => {
      events.recordGenerationOutcome({ predictionId: 'p1', outcome: 'succeeded', durationMs: 8123.7 });
      await tick();
    });
    const call = supabase.tables[0];
    assert.equal(call.op, 'update');
    assert.deepEqual(call.filters, [['prediction_id', 'p1'], ['outcome', 'started']]);
    assert.equal(call.row.outcome, 'succeeded');
    assert.equal(call.row.duration_ms, 8124);
  });

  test('an outcome with no prediction id writes nothing', async () => {
    const supabase = fakeSupabase();
    const events = createGenerationEvents({ supabase });
    await captureConsole(async () => { events.recordGenerationOutcome({ predictionId: null, outcome: 'failed' }); await tick(); });
    assert.equal(supabase.tables.length, 0);
  });

  test('provider error text is clipped', async () => {
    const supabase = fakeSupabase();
    const events = createGenerationEvents({ supabase });
    await captureConsole(async () => {
      events.recordGenerationOutcome({ predictionId: 'p', outcome: 'failed', error: 'x'.repeat(5000) });
      await tick();
    });
    assert.equal(supabase.tables[0].row.error.length, 300);
  });

  test('a one-request run is costed only when it succeeded', async () => {
    const supabase = fakeSupabase();
    const events = createGenerationEvents({ supabase, costs: { 'openai/gpt-image-2': 0.2 } });
    await captureConsole(async () => {
      events.recordGenerationComplete({ provider: 'openai', model: 'openai/gpt-image-2', userId: 'u', outcome: 'succeeded', durationMs: 40_000 });
      events.recordGenerationComplete({ provider: 'openai', model: 'openai/gpt-image-2', userId: 'u', outcome: 'timeout', durationMs: 180_000 });
      await tick();
    });
    assert.equal(supabase.tables[0].row.est_cost_usd, 0.2);
    assert.equal(supabase.tables[1].row.est_cost_usd, null);
    assert.equal(supabase.tables[1].row.outcome, 'timeout');
  });

  test('a missing table never throws and warns once, pointing at the SQL file', async () => {
    const supabase = fakeSupabase({ __tableError: { message: 'relation "generation_events" does not exist' } });
    const events = createGenerationEvents({ supabase });
    const out = await captureConsole(async () => {
      events.recordGenerationStarted({ provider: 'replicate', model: 'a/b', predictionId: 'p' });
      events.recordGenerationOutcome({ predictionId: 'p', outcome: 'succeeded' });
      events.recordGenerationComplete({ provider: 'openai', model: 'x', outcome: 'failed', durationMs: 1 });
      await tick();
    });
    assert.equal(out.warn.length, 1);
    assert.match(out.warn[0], /generation_events\.sql/);
  });

  test('with no database, events are still logged', async () => {
    const events = createGenerationEvents({ supabase: null });
    const out = await captureConsole(async () => {
      events.recordGenerationStarted({ provider: 'replicate', model: 'a/b', predictionId: 'p' });
    });
    assert.equal(out.log.length, 1);
    assert.match(out.log[0], /^\[gen\] \{.*"event":"started"/);
  });
});

describe('helpers', () => {
  test('modelLabel', () => {
    assert.equal(modelLabel('owner/name:abc123'), 'owner/name');
    assert.equal(modelLabel('google/nano-banana'), 'google/nano-banana');
    assert.equal(modelLabel(undefined), 'unknown');
  });

  test('parseModelCosts tolerates missing, invalid and wrong-shaped input', async () => {
    assert.deepEqual(parseModelCosts(undefined), {});
    assert.deepEqual(parseModelCosts('{"a/b":0.5}'), { 'a/b': 0.5 });
    assert.deepEqual(parseModelCosts('[1,2]'), {});
    const out = await captureConsole(async () => { assert.deepEqual(parseModelCosts('{not json'), {}); });
    assert.equal(out.warn.length, 1);
  });
});
