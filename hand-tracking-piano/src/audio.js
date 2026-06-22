const A4 = 440;
const A4_MIDI = 69;

function midiToFrequency(midi) {
  return A4 * 2 ** ((midi - A4_MIDI) / 12);
}

export class PianoAudio {
  #context;
  #voices = new Map();

  async init() {
    this.#context = new AudioContext();
    if (this.#context.state === 'suspended') {
      await this.#context.resume();
    }
  }

  noteOn(midi, velocity = 0.85) {
    if (!this.#context || this.#voices.has(midi)) return;

    const now = this.#context.currentTime;
    const gain = this.#context.createGain();
    const filter = this.#context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 3200;
    filter.Q.value = 0.6;

    gain.connect(filter);
    filter.connect(this.#context.destination);

    const frequency = midiToFrequency(midi);
    const oscillators = [
      { type: 'triangle', detune: 0, gain: 0.55 },
      { type: 'sine', detune: 4, gain: 0.25 },
      { type: 'sine', detune: -3, gain: 0.2 },
    ].map(({ type, detune, gain: level }) => {
      const osc = this.#context.createOscillator();
      osc.type = type;
      osc.frequency.value = frequency;
      osc.detune.value = detune;
      const oscGain = this.#context.createGain();
      oscGain.gain.value = level;
      osc.connect(oscGain);
      oscGain.connect(gain);
      osc.start(now);
      return { osc, oscGain };
    });

    const peak = 0.22 * velocity;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(peak * 0.65, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    this.#voices.set(midi, { gain, filter, oscillators, releaseAt: now + 1.4 });
  }

  noteOff(midi) {
    const voice = this.#voices.get(midi);
    if (!voice || !this.#context) return;

    const now = this.#context.currentTime;
    voice.gain.gain.cancelScheduledValues(now);
    voice.gain.gain.setValueAtTime(Math.max(voice.gain.gain.value, 0.001), now);
    voice.gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    const stopAt = now + 0.1;
    for (const { osc } of voice.oscillators) {
      osc.stop(stopAt);
    }

    this.#voices.delete(midi);
  }

  releaseAll() {
    for (const midi of [...this.#voices.keys()]) {
      this.noteOff(midi);
    }
  }
}
