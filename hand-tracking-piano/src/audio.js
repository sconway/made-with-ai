const A4 = 440;
const A4_MIDI = 69;

function midiToFrequency(midi) {
  return A4 * 2 ** ((midi - A4_MIDI) / 12);
}

// Relative amplitude of each partial (index 0 == fundamental). Loosely models a
// grand piano's spectrum: a strong fundamental with a gentle, slightly uneven
// rolloff through the upper harmonics.
const PARTIAL_GAINS = [1.0, 0.62, 0.45, 0.3, 0.22, 0.16, 0.12, 0.09, 0.07, 0.05, 0.04, 0.03];

export class PianoAudio {
  #context;
  #master;
  #voices = new Map();

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

  noteOn(midi, velocity = 0.85) {
    if (!this.#context || this.#voices.has(midi)) return;

    const ctx = this.#context;
    const now = ctx.currentTime;
    const frequency = midiToFrequency(midi);

    // Per-voice envelope -> tone-shaping lowpass -> master bus.
    const voiceGain = ctx.createGain();
    voiceGain.gain.value = 1;

    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    // Harder strikes start brighter; the filter closes as the note rings out,
    // mirroring how a real string loses its highs first.
    const brightness = 2200 + velocity * 4200;
    tone.frequency.setValueAtTime(brightness, now);
    tone.frequency.exponentialRampToValueAtTime(Math.max(frequency * 4, 800), now + 1.0);
    tone.Q.value = 0.4;

    voiceGain.connect(tone);
    tone.connect(this.#master);

    // Inharmonicity coefficient: stiff strings stretch upper partials sharp,
    // and the effect grows toward the treble.
    const inharmonicity = 0.0004 + Math.max(0, midi - 21) * 0.000006;

    // Long bass strings sustain far longer than short treble strings.
    const baseDecay = 9.5 * 2 ** (-(midi - 60) / 26);

    const peak = 0.15 * (0.4 + 0.6 * velocity);
    const oscillators = [];

    for (let i = 0; i < PARTIAL_GAINS.length; i += 1) {
      const n = i + 1;
      const partialFreq = frequency * n * Math.sqrt(1 + inharmonicity * n * n);
      if (partialFreq > 16000 || partialFreq > ctx.sampleRate / 2) break;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = partialFreq;
      // A touch of random detune keeps the tone lively rather than sterile.
      osc.detune.value = (Math.random() - 0.5) * 4;

      const partialGain = ctx.createGain();
      const level = PARTIAL_GAINS[i] * peak;
      // Higher partials fade faster, so the bright attack settles into a
      // rounder, near-sinusoidal tail.
      const decay = baseDecay / (1 + 0.55 * i);

      partialGain.gain.setValueAtTime(0.0001, now);
      partialGain.gain.exponentialRampToValueAtTime(level, now + 0.004);
      partialGain.gain.exponentialRampToValueAtTime(level * 0.0008, now + 0.02 + decay);

      osc.connect(partialGain);
      partialGain.connect(voiceGain);
      osc.start(now);
      osc.stop(now + 0.05 + decay);
      oscillators.push(osc);
    }

    // Hammer transient: a brief filtered noise burst supplies the percussive
    // "thunk" of the felt striking the strings.
    this.#playHammer(now, frequency, velocity, voiceGain);

    this.#voices.set(midi, { voiceGain, oscillators });
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
    // Damper drop: releasing the key mutes the string fairly quickly.
    const release = 0.22;

    voice.voiceGain.gain.cancelScheduledValues(now);
    voice.voiceGain.gain.setValueAtTime(Math.max(voice.voiceGain.gain.value, 0.0001), now);
    voice.voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + release);

    const stopAt = now + release + 0.02;
    for (const osc of voice.oscillators) {
      try {
        osc.stop(stopAt);
      } catch {
        // Oscillator may have already finished its natural decay; ignore.
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
