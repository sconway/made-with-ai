/**
 * Generation events: what each model served, failed, and took.
 *
 * One row per image generation, written when it starts and completed when its
 * outcome is known, so spend and failure rates can be read per model per day
 * (see the generation_daily_stats view in sql/generation_events.sql).
 *
 * Strictly best-effort: a failed write must never fail or slow a generation,
 * so nothing here is awaited by a request and every error is swallowed. Until
 * the SQL has been run the events still go to the log as `[gen] {...}` lines.
 *
 * @param {object} deps
 * @param {object|null} deps.supabase  service-role client, or null
 * @param {Record<string, number>} [deps.costs]  model → estimated dollars per
 *   run (MODEL_COST_USD). Prices change and differ by account, so none are
 *   assumed; a model missing from the map gets a null cost.
 */
export function createGenerationEvents({ supabase, costs = {} }) {
  let writeFailureWarned = false;

  function writeFailed(error) {
    if (writeFailureWarned) return;
    writeFailureWarned = true;
    console.warn(
      '[gen] Could not write to generation_events — events are only being logged. ' +
        'Run sql/generation_events.sql in Supabase.',
      error?.message || error,
    );
  }

  const costOf = (label) => (Number.isFinite(costs[label]) ? costs[label] : null);
  const ms = (v) => (Number.isFinite(v) ? Math.round(v) : null);
  const clip = (v) => (v ? String(v).slice(0, 300) : null);

  /** A generation was accepted by the provider. `predictionId` links the outcome. */
  function recordGenerationStarted({ provider, model, predictionId = null, userId = null }) {
    const label = modelLabel(model);
    console.log('[gen]', JSON.stringify({ event: 'started', provider, model: label, predictionId, signedIn: !!userId }));
    if (!supabase) return;
    supabase
      .from('generation_events')
      .insert({
        provider,
        model: label,
        prediction_id: predictionId,
        user_id: userId,
        outcome: 'started',
        est_cost_usd: costOf(label),
      })
      .then(({ error }) => { if (error) writeFailed(error); })
      .catch(writeFailed);
  }

  /**
   * A started generation reached a terminal state. Only a row still marked
   * 'started' is updated, so the repeated polls that see the same terminal
   * status record it once.
   */
  function recordGenerationOutcome({ predictionId, outcome, durationMs = null, error = null }) {
    if (!predictionId) return;
    console.log('[gen]', JSON.stringify({ event: outcome, predictionId, durationMs }));
    if (!supabase) return;
    supabase
      .from('generation_events')
      .update({
        outcome,
        duration_ms: ms(durationMs),
        error: clip(error),
        completed_at: new Date().toISOString(),
      })
      .eq('prediction_id', predictionId)
      .eq('outcome', 'started')
      .then(({ error: e }) => { if (e) writeFailed(e); })
      .catch(writeFailed);
  }

  /** A generation that starts and finishes inside one request (OpenAI). */
  function recordGenerationComplete({ provider, model, userId = null, outcome, durationMs, error = null }) {
    const label = modelLabel(model);
    console.log('[gen]', JSON.stringify({ event: outcome, provider, model: label, durationMs }));
    if (!supabase) return;
    supabase
      .from('generation_events')
      .insert({
        provider,
        model: label,
        user_id: userId,
        outcome,
        duration_ms: ms(durationMs),
        error: clip(error),
        // A run the provider rejected or that timed out is not billed as an image.
        est_cost_usd: outcome === 'succeeded' ? costOf(label) : null,
        completed_at: new Date().toISOString(),
      })
      .then(({ error: e }) => { if (e) writeFailed(e); })
      .catch(writeFailed);
  }

  return { recordGenerationStarted, recordGenerationOutcome, recordGenerationComplete };
}

/** "owner/name:hash" → "owner/name": group by model, not by pinned version. */
export function modelLabel(ref) {
  return String(ref || 'unknown').split(':')[0].slice(0, 120);
}

/** Parse MODEL_COST_USD. Invalid JSON disables cost estimates rather than crashing. */
export function parseModelCosts(raw) {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    console.warn('[gen] MODEL_COST_USD is not valid JSON — cost estimates disabled');
    return {};
  }
}
