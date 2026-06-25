// One Euro Filter — adaptive low-pass smoothing for noisy pointer/landmark
// signals. It smooths heavily when the value is changing slowly (killing the
// frame-to-frame jitter while a fingertip hovers over a key) and loosens as the
// value speeds up (so a quick downward key press still tracks with minimal lag).
// Reference: Casiez, Roussel & Vogel, "1€ Filter" (CHI 2012).

// --- Tunable smoothing (lower = steadier but laggier, higher = snappier) ---
// Baseline cutoff frequency (Hz) used when the fingertip is roughly still. Lower
// it for calmer dots; raise it if hovering feels sluggish.
const MIN_CUTOFF = 1.2;
// How aggressively the filter loosens as the fingertip moves faster. Raise it if
// fast presses feel laggy; lower it if quick motion looks noisy.
const BETA = 0.015;
// Cutoff for the internal speed estimate; 1.0 is the standard default.
const D_CUTOFF = 1.0;

const DEFAULT_DT = 1 / 60; // assumed frame delta for the first sample
const MIN_DT = 1 / 240; // floor so a clock hiccup can't blow up the speed term

function smoothingAlpha(cutoff, dt) {
  const tau = 1 / (2 * Math.PI * cutoff);
  return 1 / (1 + tau / dt);
}

class LowPassFilter {
  #value = null;

  filter(value, alpha) {
    this.#value =
      this.#value == null ? value : alpha * value + (1 - alpha) * this.#value;
    return this.#value;
  }
}

class OneEuroFilter {
  #minCutoff;
  #beta;
  #dCutoff;
  #x = new LowPassFilter();
  #dx = new LowPassFilter();
  #lastValue = null;

  constructor({ minCutoff = MIN_CUTOFF, beta = BETA, dCutoff = D_CUTOFF } = {}) {
    this.#minCutoff = minCutoff;
    this.#beta = beta;
    this.#dCutoff = dCutoff;
  }

  filter(value, dt) {
    const speed = this.#lastValue == null ? 0 : (value - this.#lastValue) / dt;
    this.#lastValue = value;

    const edValue = this.#dx.filter(speed, smoothingAlpha(this.#dCutoff, dt));
    const cutoff = this.#minCutoff + this.#beta * Math.abs(edValue);
    return this.#x.filter(value, smoothingAlpha(cutoff, dt));
  }
}

/**
 * Smooths a set of 2D points (e.g. fingertip screen positions) independently,
 * keyed by a caller-supplied id. Each id keeps its own filter state across
 * frames; drop stale ids with prune() so memory and state don't accumulate.
 */
export class PointSmoother {
  #filters = new Map(); // key -> { x, y, t }
  #options;

  constructor(options) {
    this.#options = options;
  }

  smooth(key, x, y, timestampMs) {
    let entry = this.#filters.get(key);
    if (!entry) {
      entry = {
        x: new OneEuroFilter(this.#options),
        y: new OneEuroFilter(this.#options),
        t: timestampMs,
      };
      this.#filters.set(key, entry);
    }

    let dt = (timestampMs - entry.t) / 1000;
    if (!(dt > MIN_DT)) dt = DEFAULT_DT; // first sample or a backwards/zero step
    entry.t = timestampMs;

    return { x: entry.x.filter(x, dt), y: entry.y.filter(y, dt) };
  }

  prune(activeKeys) {
    for (const key of this.#filters.keys()) {
      if (!activeKeys.has(key)) this.#filters.delete(key);
    }
  }

  reset() {
    this.#filters.clear();
  }
}
