import { INSTRUMENTS } from './audio.js';

// Finger order and display labels for the toggle list. Colors mirror the dot
// colors in main.js (via the CSS custom properties of the same name).
const FINGERS = [
  { name: 'thumb', label: 'Thumb' },
  { name: 'index', label: 'Index' },
  { name: 'middle', label: 'Middle' },
  { name: 'ring', label: 'Ring' },
  { name: 'pinky', label: 'Pinky' },
];

const STORAGE_KEY = 'hand-piano-settings';

const DEFAULTS = {
  fingers: Object.fromEntries(FINGERS.map((f) => [f.name, true])),
  pressThreshold: 12,
  instrument: 'grand',
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULTS);
    const parsed = JSON.parse(raw);
    return {
      fingers: { ...DEFAULTS.fingers, ...(parsed.fingers ?? {}) },
      pressThreshold: Number(parsed.pressThreshold) || DEFAULTS.pressThreshold,
      instrument: INSTRUMENTS.some((i) => i.id === parsed.instrument)
        ? parsed.instrument
        : DEFAULTS.instrument,
    };
  } catch {
    return structuredClone(DEFAULTS);
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private mode or storage disabled — settings just won't persist.
  }
}

/**
 * Wires up the settings panel UI. Callbacks fire with the initial stored value
 * immediately, then again whenever the user changes a control.
 *
 * @returns {{ isFingerEnabled: (name: string) => boolean }}
 */
export function initSettings({ onFingersChange, onThresholdChange, onInstrumentChange }) {
  const state = loadState();

  const toggle = document.getElementById('settings-toggle');
  const panel = document.getElementById('settings-panel');
  const fingerList = document.getElementById('finger-options');
  const thresholdInput = document.getElementById('press-threshold');
  const thresholdValue = document.getElementById('press-threshold-value');
  const instrumentSelect = document.getElementById('instrument-select');

  // --- Finger toggles --------------------------------------------------------
  for (const finger of FINGERS) {
    const id = `finger-${finger.name}`;
    const row = document.createElement('label');
    row.className = 'finger-row';
    row.htmlFor = id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.checked = state.fingers[finger.name];

    const swatch = document.createElement('span');
    swatch.className = 'finger-swatch';
    swatch.style.background = `var(--${finger.name})`;

    const text = document.createElement('span');
    text.textContent = finger.label;

    checkbox.addEventListener('change', () => {
      state.fingers[finger.name] = checkbox.checked;
      saveState(state);
      onFingersChange?.(state.fingers);
    });

    row.append(checkbox, swatch, text);
    fingerList.append(row);
  }

  // --- Press threshold -------------------------------------------------------
  thresholdInput.value = String(state.pressThreshold);
  thresholdValue.textContent = `${state.pressThreshold} px`;
  thresholdInput.addEventListener('input', () => {
    const px = Number(thresholdInput.value);
    state.pressThreshold = px;
    thresholdValue.textContent = `${px} px`;
    saveState(state);
    onThresholdChange?.(px);
  });

  // --- Instrument ------------------------------------------------------------
  for (const instrument of INSTRUMENTS) {
    const option = document.createElement('option');
    option.value = instrument.id;
    option.textContent = instrument.label;
    instrumentSelect.append(option);
  }
  instrumentSelect.value = state.instrument;
  instrumentSelect.addEventListener('change', () => {
    state.instrument = instrumentSelect.value;
    saveState(state);
    onInstrumentChange?.(state.instrument);
  });

  // --- Open / close ----------------------------------------------------------
  function setOpen(open) {
    panel.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!panel.classList.contains('open'));
  });
  panel.addEventListener('click', (event) => event.stopPropagation());
  document.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  // Push the stored values into the app on startup.
  onFingersChange?.(state.fingers);
  onThresholdChange?.(state.pressThreshold);
  onInstrumentChange?.(state.instrument);

  return {
    isFingerEnabled: (name) => state.fingers[name] !== false,
  };
}
