// One Euro Filter — adaptive low-pass smoothing for noisy pointer/landmark
// signals. It smooths heavily when the value is changing slowly (killing the
// frame-to-frame jitter while a fingertip hovers over a key) and loosens as the
// value speeds up (so a quick downward key press still tracks with minimal lag).
// Reference: Casiez, Roussel & Vogel, "1€ Filter" (CHI 2012).

// --- Tunable smoothing (lower = steadier but laggier, higher = snappier) ---
// Baseline cutoff when the fingertip is roughly still.
const MIN_CUTOFF = 2.4;
// How aggressively the filter loosens as the fingertip moves faster.
const BETA = 0.08;
// Stop extrapolating beyond this gap so a dropped hand doesn't fly off-screen.
const MAX_PREDICT_MS = 80;
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
        px: x,
        py: y,
        vx: 0,
        vy: 0,
        sx: x,
        sy: y,
      };
      this.#filters.set(key, entry);
    }

    let dt = (timestampMs - entry.t) / 1000;
    if (!(dt > MIN_DT)) dt = DEFAULT_DT; // first sample or a backwards/zero step

    entry.vx = (x - entry.px) / dt;
    entry.vy = (y - entry.py) / dt;
    entry.px = x;
    entry.py = y;
    entry.t = timestampMs;
    entry.sx = entry.x.filter(x, dt);
    entry.sy = entry.y.filter(y, dt);

    return { x: entry.sx, y: entry.sy };
  }

  /** Extrapolate the last smoothed position for display frames between detections. */
  predict(key, timestampMs) {
    const entry = this.#filters.get(key);
    if (!entry) return null;

    const dtMs = timestampMs - entry.t;
    if (dtMs <= 0) return { x: entry.sx, y: entry.sy };

    const dt = Math.min(dtMs, MAX_PREDICT_MS) / 1000;
    return {
      x: entry.sx + entry.vx * dt,
      y: entry.sy + entry.vy * dt,
    };
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
