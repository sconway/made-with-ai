const A4 = 440;
const A4_MIDI = 69;

function midiToFrequency(midi) {
  return A4 * 2 ** ((midi - A4_MIDI) / 12);
}

// Grand-piano harmonic spectrum: a strong fundamental with a gentle, slightly
// uneven rolloff through the upper partials.
const PIANO_PARTIALS = [1.0, 0.62, 0.45, 0.3, 0.22, 0.16, 0.12, 0.09, 0.07, 0.05, 0.04, 0.03].map(
  (gain, i) => ({ ratio: i + 1, gain }),
);

// Each preset drives the same synthesis path in noteOn; the differences between
// instruments are entirely in these parameters. `sustain` is the key switch:
// pianos/EP strike and decay while held, organ/synth hold steady until release.
const PRESETS = {
  grand: {
    id: 'grand',
    label: 'Grand Piano',
    oscType: 'sine',
    partials: PIANO_PARTIALS,
    inharmonic: true,
    sustain: false,
    peak: 0.15,
    attack: 0.004,
    baseDecay: 9.5,
    release: 0.22,
    detune: 4,
    hammer: 1,
    vibrato: null,
    filter: { start: 2200, vel: 4200, ringHz: (f) => Math.max(f * 4, 800), ring: 1.0, q: 0.4 },
  },
  electric: {
    id: 'electric',
    label: 'Electric Piano',
    oscType: 'sine',
    // Rhodes-like tine: fundamental plus a strong, slightly bell-y upper partial.
    partials: [
      { ratio: 1, gain: 1.0 },
      { ratio: 3, gain: 0.5 },
      { ratio: 5, gain: 0.18 },
      { ratio: 7, gain: 0.08 },
      { ratio: 14, gain: 0.05 }, // inharmonic "bark" near the attack
    ],
    inharmonic: true,
    sustain: false,
    peak: 0.17,
    attack: 0.003,
    baseDecay: 5.5,
    release: 0.3,
    detune: 2,
    hammer: 0.4,
    vibrato: { rate: 5.2, depth: 5 },
    filter: { start: 3200, vel: 2600, ringHz: (f) => Math.max(f * 3, 700), ring: 0.8, q: 1.0 },
  },
  organ: {
    id: 'organ',
    label: 'Organ',
    oscType: 'sine',
    // Hammond-style drawbars: 8' + 4' + 2⅔' (the fifth) + 2' + 1'.
    partials: [
      { ratio: 1, gain: 1.0 },
      { ratio: 2, gain: 0.7 },
      { ratio: 3, gain: 0.5 },
      { ratio: 4, gain: 0.35 },
      { ratio: 8, gain: 0.2 },
    ],
    inharmonic: false,
    sustain: true,
    peak: 0.1,
    attack: 0.02,
    release: 0.12,
    detune: 1,
    hammer: 0,
    vibrato: { rate: 6.2, depth: 3 },
    filter: { start: 9000, vel: 0, ringHz: () => 9000, ring: 0.05, q: 0.3 },
  },
  synth: {
    id: 'synth',
    label: 'Synth Lead',
    oscType: 'sawtooth',
    // A single rich sawtooth; the unison detune below fattens it.
    partials: [{ ratio: 1, gain: 1.0 }],
    inharmonic: false,
    sustain: true,
    peak: 0.11,
    attack: 0.012,
    release: 0.18,
    detune: 10,
    unison: 3,
    hammer: 0,
    vibrato: { rate: 5.5, depth: 6 },
    // Resonant low-pass sweep gives the classic synth pluck-into-hold character.
    filter: { start: 900, vel: 4500, ringHz: (f) => Math.max(f * 3, 1200), ring: 0.5, q: 7 },
  },
};

// Ordered list for building the settings menu; keep `grand` first as the default.
export const INSTRUMENTS = ['grand', 'electric', 'organ', 'synth'].map((id) => ({
  id,
  label: PRESETS[id].label,
}));

export class PianoAudio {
  #context;
  #master;
  #voices = new Map();
  #preset = PRESETS.grand;

  async init() {
    this.#context = new AudioContext();
    if (this.#context.state === 'suspended') {
      await this.#context.resume();
    }

    // Master bus with a gentle compressor so simultaneous notes don't clip.
    this.#master = this.#context.createGain();
    this.#master.gain.value = 0.85;

    const compressor = this.#context.createDynamicsCompressor();
    compressor.threshold.value = -12;
    compressor.knee.value = 18;
    compressor.ratio.value = 3;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.25;

    this.#master.connect(compressor);
    compressor.connect(this.#context.destination);
  }

  /** Switch the instrument used for notes played from now on. */
  setInstrument(id) {
    if (PRESETS[id]) this.#preset = PRESETS[id];
  }

  noteOn(midi, velocity = 0.85) {
    if (!this.#context || this.#voices.has(midi)) return;

    const ctx = this.#context;
    const preset = this.#preset;
    const now = ctx.currentTime;
    const frequency = midiToFrequency(midi);

    // Per-voice envelope -> tone-shaping lowpass -> master bus.
    const voiceGain = ctx.createGain();
    voiceGain.gain.value = 1;

    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    // Harder strikes start brighter; the filter closes as the note rings out,
    // mirroring how a struck string loses its highs first. Organ holds open.
    const brightness = preset.filter.start + velocity * preset.filter.vel;
    tone.frequency.setValueAtTime(brightness, now);
    if (preset.filter.ring > 0.06) {
      tone.frequency.exponentialRampToValueAtTime(
        preset.filter.ringHz(frequency),
        now + preset.filter.ring,
      );
    }
    tone.Q.value = preset.filter.q;

    voiceGain.connect(tone);
    tone.connect(this.#master);

    // Inharmonicity coefficient: stiff strings stretch upper partials sharp,
    // and the effect grows toward the treble. Disabled for organ/synth.
    const inharmonicity = preset.inharmonic
      ? 0.0004 + Math.max(0, midi - 21) * 0.000006
      : 0;

    // Long bass strings sustain far longer than short treble strings.
    const baseDecay = preset.baseDecay * 2 ** (-(midi - 60) / 26);
    const peak = preset.peak * (0.4 + 0.6 * velocity);
    const nodes = [];

    // Optional vibrato/tremolo LFO shared by every partial of this voice.
    let vibrato = null;
    if (preset.vibrato) {
      vibrato = ctx.createOscillator();
      vibrato.frequency.value = preset.vibrato.rate;
      const vibratoGain = ctx.createGain();
      vibratoGain.gain.value = preset.vibrato.depth; // cents
      vibrato.connect(vibratoGain);
      vibrato.start(now);
      nodes.push(vibrato);
      vibrato.__depthGain = vibratoGain;
    }

    const unison = preset.unison ?? 1;

    for (const partial of preset.partials) {
      const ratio = partial.ratio;
      const partialFreq =
        frequency * ratio * Math.sqrt(1 + inharmonicity * ratio * ratio);
      if (partialFreq > 16000 || partialFreq > ctx.sampleRate / 2) continue;

      const partialGain = ctx.createGain();
      const level = partial.gain * peak;

      if (preset.sustain) {
        // Hold the partial steady until the key is released.
        partialGain.gain.setValueAtTime(0.0001, now);
        partialGain.gain.exponentialRampToValueAtTime(level, now + preset.attack + 0.01);
      } else {
        // Struck note: bright attack, then a decay whose upper partials fade
        // faster so the tone settles into a rounder tail.
        const partialIndex = preset.partials.indexOf(partial);
        const decay = baseDecay / (1 + 0.55 * partialIndex);
        partialGain.gain.setValueAtTime(0.0001, now);
        partialGain.gain.exponentialRampToValueAtTime(level, now + preset.attack);
        partialGain.gain.exponentialRampToValueAtTime(level * 0.0008, now + 0.02 + decay);
      }

      partialGain.connect(voiceGain);

      for (let u = 0; u < unison; u += 1) {
        const osc = ctx.createOscillator();
        osc.type = preset.oscType;
        osc.frequency.value = partialFreq;
        // Spread unison voices across the detune range; mono voices get a touch
        // of random detune so the tone stays lively rather than sterile.
        const spread =
          unison > 1 ? (u / (unison - 1) - 0.5) * 2 * preset.detune : (Math.random() - 0.5) * preset.detune;
        osc.detune.value = spread;
        if (vibrato) vibrato.__depthGain.connect(osc.detune);

        osc.connect(partialGain);
        osc.start(now);
        if (!preset.sustain) osc.stop(now + 0.05 + baseDecay);
        nodes.push(osc);
      }
    }

    // Hammer transient: a brief filtered noise burst supplies the percussive
    // "thunk" of felt striking strings. Tonal instruments skip it.
    if (preset.hammer > 0) {
      this.#playHammer(now, frequency, velocity * preset.hammer, voiceGain);
    }

    this.#voices.set(midi, { voiceGain, nodes, release: preset.release });
  }

  #playHammer(now, frequency, velocity, destination) {
    const ctx = this.#context;
    const duration = 0.05;
    const length = Math.ceil(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) {
      data[i] = Math.random() * 2 - 1;
    }

    const src = ctx.createBufferSource();
    src.buffer = buffer;

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = Math.min(frequency * 3, 6000);
    bandpass.Q.value = 0.7;

    const gain = ctx.createGain();
    const level = 0.05 * velocity;
    gain.gain.setValueAtTime(level, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    src.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(destination);
    src.start(now);
    src.stop(now + duration);
  }

  noteOff(midi) {
    const voice = this.#voices.get(midi);
    if (!voice || !this.#context) return;

    const now = this.#context.currentTime;
    // Damper drop: releasing the key mutes the voice over its release time.
    const release = voice.release ?? 0.22;

    voice.voiceGain.gain.cancelScheduledValues(now);
    voice.voiceGain.gain.setValueAtTime(Math.max(voice.voiceGain.gain.value, 0.0001), now);
    voice.voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + release);

    const stopAt = now + release + 0.02;
    for (const node of voice.nodes) {
      try {
        node.stop(stopAt);
      } catch {
        // Node may have already finished its natural decay; ignore.
      }
    }

    this.#voices.delete(midi);
  }

  releaseAll() {
    for (const midi of [...this.#voices.keys()]) {
      this.noteOff(midi);
    }
  }
}
