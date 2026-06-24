// Shared piano note model. Pure data — no rendering or interaction logic.

const WHITE_PATTERN = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const BLACK_AFTER = {
  C: 'C#',
  D: 'D#',
  F: 'F#',
  G: 'G#',
  A: 'A#',
};

export const START_MIDI = 60; // C4
export const OCTAVES = 4;

function buildNotes() {
  const notes = [];
  let midi = START_MIDI;

  for (let octave = 0; octave < OCTAVES; octave += 1) {
    for (const name of WHITE_PATTERN) {
      notes.push({ midi, name, type: 'white', blackName: BLACK_AFTER[name] ?? null });
      midi += 1;
      if (BLACK_AFTER[name]) {
        notes.push({ midi, name: BLACK_AFTER[name], type: 'black', parentWhite: notes.at(-1).midi - 1 });
        midi += 1;
      }
    }
  }

  notes.push({ midi, name: 'C', type: 'white', blackName: null, octaveEnd: true });
  return notes;
}

export const ALL_NOTES = buildNotes();
export const WHITE_KEYS = ALL_NOTES.filter((note) => note.type === 'white');
export const BLACK_KEYS = ALL_NOTES.filter((note) => note.type === 'black');

/** Index into WHITE_KEYS of the white key a given black key sits to the right of. */
export function whiteIndexBefore(blackNote) {
  return WHITE_KEYS.findIndex((white) => white.midi === blackNote.parentWhite);
}
