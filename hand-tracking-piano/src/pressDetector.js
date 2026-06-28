const HISTORY_LENGTH = 10;
const PRESS_WINDOW = 3;
const DEFAULT_PRESS_DOWN_PX = 12;
const MIN_RELATIVE_RATIO = 0.5;
const MIN_FRAMES_OVER_KEY = 3;

// The tip-travel and release thresholds scale with the press-down threshold so
// the press/release feel stays balanced as the user adjusts sensitivity.
const TIP_DOWN_RATIO = 8 / 12;
const RELEASE_UP_RATIO = 6 / 12;

export class PressDetector {
  #history = new Map();
  #state = new Map();
  #pressDownPx = DEFAULT_PRESS_DOWN_PX;
  #minTipDownPx = DEFAULT_PRESS_DOWN_PX * TIP_DOWN_RATIO;
  #releaseUpPx = DEFAULT_PRESS_DOWN_PX * RELEASE_UP_RATIO;

  reset() {
    this.#history.clear();
    this.#state.clear();
  }

  /** Downward tip travel (in px, relative to the hand) that counts as a press. */
  setPressThreshold(px) {
    const clamped = Math.max(4, Math.min(40, px));
    this.#pressDownPx = clamped;
    this.#minTipDownPx = clamped * TIP_DOWN_RATIO;
    this.#releaseUpPx = clamped * RELEASE_UP_RATIO;
  }

  setKeyMetrics() {
    // Kept for API compatibility with resize handler.
  }

  #key(handIndex, fingerName) {
    return `${handIndex}-${fingerName}`;
  }

  #record(key, sample) {
    let history = this.#history.get(key);
    if (!history) {
      history = [];
      this.#history.set(key, history);
    }

    history.push(sample);
    if (history.length > HISTORY_LENGTH) history.shift();
  }

  #handDelta(current, past) {
    return (current.mcpY - past.mcpY + current.wristY - past.wristY) / 2;
  }

  #framesOverKey(key) {
    const history = this.#history.get(key);
    if (!history) return 0;

    let count = 0;
    for (let index = history.length - 1; index >= 0; index -= 1) {
      if (history[index].midi == null) break;
      count += 1;
    }
    return count;
  }

  #isPressingDown(key) {
    const history = this.#history.get(key);
    if (!history || history.length <= PRESS_WINDOW) return false;

    const current = history.at(-1);
    const past = history.at(-1 - PRESS_WINDOW);
    if (current.midi == null) return false;
    if (this.#framesOverKey(key) < MIN_FRAMES_OVER_KEY) return false;

    const tipDelta = current.tipY - past.tipY;
    const handDelta = this.#handDelta(current, past);
    const relativeDown = tipDelta - handDelta;
    const sameKey = past.midi == null || past.midi === current.midi;

    return (
      sameKey &&
      relativeDown >= this.#pressDownPx &&
      tipDelta >= this.#minTipDownPx &&
      relativeDown >= Math.abs(tipDelta) * MIN_RELATIVE_RATIO
    );
  }

  #isReleasing(key) {
    const history = this.#history.get(key);
    if (!history || history.length <= PRESS_WINDOW) return false;

    const current = history.at(-1);
    const past = history.at(-1 - PRESS_WINDOW);
    const relativeUp = current.tipY - past.tipY - this.#handDelta(current, past);

    return relativeUp <= -this.#releaseUpPx || current.midi == null;
  }

  update({ handIndex, fingerName, tipX, tipY, mcpY, wristY, midi }) {
    const key = this.#key(handIndex, fingerName);
    this.#record(key, { tipX, tipY, mcpY, wristY, midi, t: performance.now() });

    const current = this.#history.get(key)?.at(-1);
    if (!current) return { pressed: false, activeMidi: null };

    let state = this.#state.get(key);
    if (!state) {
      state = { armed: true, activeMidi: null };
      this.#state.set(key, state);
    }

    if (!state.armed) {
      if (this.#isReleasing(key)) {
        state.armed = true;
        state.activeMidi = null;
      }
    } else if (current.midi != null && this.#isPressingDown(key)) {
      state.armed = false;
      state.activeMidi = current.midi;
    }

    return {
      pressed: !state.armed,
      activeMidi: state.activeMidi,
    };
  }

  isPressed(handIndex, fingerName) {
    const state = this.#state.get(this.#key(handIndex, fingerName));
    return Boolean(state && !state.armed);
  }

  getHoverMidi(handIndex, fingerName) {
    const history = this.#history.get(this.#key(handIndex, fingerName));
    return history?.at(-1)?.midi ?? null;
  }

  getActiveMidis() {
    const midis = new Set();
    for (const state of this.#state.values()) {
      if (state.activeMidi != null) midis.add(state.activeMidi);
    }
    return midis;
  }

  pruneMissing(activeKeys) {
    for (const key of this.#history.keys()) {
      if (!activeKeys.has(key)) {
        this.#history.delete(key);
        this.#state.delete(key);
      }
    }
  }
}
