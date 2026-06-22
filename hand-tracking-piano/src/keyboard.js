const WHITE_PATTERN = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const BLACK_AFTER = {
  C: 'C#',
  D: 'D#',
  F: 'F#',
  G: 'G#',
  A: 'A#',
};

const START_MIDI = 60; // C4
const OCTAVES = 4;

export const KEYBOARD_HEIGHT_RATIO = 0.26;
export const KEY_WIDTH_SCALE = 0.9;
export const KEY_HEIGHT_SCALE = 0.94;

export const FINGER_LANES = {
  pinky: 0,
  ring: 1,
  middle: 2,
  index: 3,
  thumb: 4,
};

const HIT_INSET_RATIO = 0.06;
const BLACK_HIT_INSET_RATIO = 0.06;

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

export function getKeyboardBounds(width, height) {
  const keyboardHeight = height * KEYBOARD_HEIGHT_RATIO;
  return {
    x: 0,
    y: height - keyboardHeight,
    width,
    height: keyboardHeight,
  };
}

function layoutKeys(width, height) {
  const bounds = getKeyboardBounds(width, height);
  const slotWidth = bounds.width / WHITE_KEYS.length;
  const whiteKeyWidth = slotWidth * KEY_WIDTH_SCALE;
  const whiteKeyHeight = bounds.height * KEY_HEIGHT_SCALE;
  const blackKeyWidth = whiteKeyWidth * 0.68;
  const blackKeyHeight = bounds.height * 0.62;
  const keyGap = 0.5;

  const whiteRects = WHITE_KEYS.map((note, index) => ({
    note,
    x: bounds.x + index * slotWidth + (slotWidth - whiteKeyWidth) / 2,
    y: bounds.y + bounds.height - whiteKeyHeight,
    width: Math.max(whiteKeyWidth - keyGap, 4),
    height: whiteKeyHeight,
  }));

  const blackRects = [];
  for (const note of BLACK_KEYS) {
    const whiteIndex = WHITE_KEYS.findIndex((white) => white.midi === note.parentWhite);
    if (whiteIndex === -1) continue;

    blackRects.push({
      note,
      x: bounds.x + (whiteIndex + 1) * slotWidth - blackKeyWidth / 2,
      y: bounds.y + bounds.height - whiteKeyHeight,
      width: blackKeyWidth,
      height: blackKeyHeight,
    });
  }

  return { bounds, whiteRects, blackRects };
}

function pointInRect(x, y, rect) {
  return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
}

function insetRect(rect, ratio) {
  const insetX = rect.width * ratio;
  return {
    ...rect,
    x: rect.x + insetX,
    width: Math.max(rect.width - insetX * 2, 4),
  };
}

export function getHitTestMetrics() {
  return {};
}

function rectCenterX(rect) {
  return rect.x + rect.width / 2;
}

/** Hit test aligned to drawn keys — generous X/Y so fingertip above a key counts. */
export function hitTestKeyAt(x, y, width, height) {
  const { bounds, whiteRects, blackRects } = layoutKeys(width, height);
  if (y < bounds.y || y > bounds.y + bounds.height) return null;

  for (const rect of blackRects) {
    const xPad = rect.width * 0.2;
    if (
      x >= rect.x - xPad &&
      x <= rect.x + rect.width + xPad &&
      y >= bounds.y &&
      y <= rect.y + rect.height
    ) {
      return { note: rect.note, rect };
    }
  }

  let best = null;
  let bestDistance = Infinity;

  for (const rect of whiteRects) {
    const xPad = rect.width * 0.35;
    if (x < rect.x - xPad || x > rect.x + rect.width + xPad) continue;
    if (y < bounds.y || y > rect.y + rect.height) continue;

    const distance = Math.abs(rectCenterX(rect) - x);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = rect;
    }
  }

  if (!best) return null;
  return { note: best.note, rect: best };
}

/** @deprecated Lanes are visual guides only; use hitTestKeyAt for interaction. */
export function hitTestKeyForFinger(x, y, width, height, fingerName, handIndex) {
  return hitTestKeyAt(x, y, width, height);
}

function getHandHalfBounds(bounds, handIndex) {
  const halfWidth = bounds.width / 2;
  return {
    x: bounds.x + handIndex * halfWidth,
    y: bounds.y,
    width: halfWidth,
    height: bounds.height,
  };
}

export function getFingerLaneBounds(width, height, handIndex, laneIndex) {
  const { bounds } = layoutKeys(width, height);
  const half = getHandHalfBounds(bounds, handIndex);
  const laneWidth = half.width / 5;

  return {
    x: half.x + laneIndex * laneWidth,
    y: half.y,
    width: laneWidth,
    height: half.height,
  };
}

export function hitTestKey(x, y, width, height) {
  const { bounds, whiteRects, blackRects } = layoutKeys(width, height);
  if (!pointInRect(x, y, bounds)) return null;

  for (const rect of blackRects) {
    if (pointInRect(x, y, insetRect(rect, BLACK_HIT_INSET_RATIO))) {
      return { note: rect.note, rect };
    }
  }

  for (const rect of whiteRects) {
    if (pointInRect(x, y, insetRect(rect, HIT_INSET_RATIO))) {
      return { note: rect.note, rect };
    }
  }

  return null;
}

export function drawKeyboard(ctx, width, height, { activeMidis = new Set(), hoverMidis = new Map() } = {}) {
  const { bounds, whiteRects, blackRects } = layoutKeys(width, height);

  ctx.save();

  drawLaneGuides(ctx, width, height);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(bounds.x, bounds.y);
  ctx.lineTo(bounds.x + bounds.width, bounds.y);
  ctx.stroke();

  for (const rect of whiteRects) {
    const active = activeMidis.has(rect.note.midi);
    const hoverColor = hoverMidis.get(rect.note.midi);

    if (hoverColor && !active) {
      ctx.fillStyle = hexToRgba(hoverColor, 0.55);
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height * 0.22);
    }

    ctx.fillStyle = active
      ? 'rgba(255, 246, 200, 0.65)'
      : hoverColor
        ? hexToRgba(hoverColor, 0.48)
        : 'rgba(255, 255, 255, 0.22)';
    ctx.strokeStyle = active
      ? 'rgba(255, 210, 80, 1)'
      : hoverColor
        ? hexToRgba(hoverColor, 1)
        : 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = active ? 2.5 : hoverColor ? 2.5 : 1.5;
    ctx.beginPath();
    ctx.roundRect(rect.x, rect.y, rect.width, rect.height, [0, 0, 4, 4]);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = active || hoverColor ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.75)';
    ctx.font = `600 ${Math.max(7, Math.round(rect.width * 0.28))}px Inter, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
    ctx.shadowBlur = 3;
    ctx.fillText(rect.note.name, rect.x + rect.width / 2, rect.y + rect.height - 5);
    ctx.shadowBlur = 0;
  }

  for (const rect of blackRects) {
    const active = activeMidis.has(rect.note.midi);
    const hoverColor = hoverMidis.get(rect.note.midi);

    if (hoverColor && !active) {
      ctx.fillStyle = hexToRgba(hoverColor, 0.45);
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height * 0.28);
    }

    ctx.fillStyle = active
      ? 'rgba(40, 36, 32, 0.82)'
      : hoverColor
        ? hexToRgba(hoverColor, 0.42)
        : 'rgba(0, 0, 0, 0.42)';
    ctx.strokeStyle = active
      ? 'rgba(255, 210, 80, 1)'
      : hoverColor
        ? hexToRgba(hoverColor, 1)
        : 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = active ? 2.5 : hoverColor ? 2.5 : 1;
    ctx.beginPath();
    ctx.roundRect(rect.x, rect.y, rect.width, rect.height, [0, 0, 4, 4]);
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

function hexToRgba(hex, alpha) {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const LANE_LABELS = ['P', 'R', 'M', 'I', 'T'];

function drawLaneGuides(ctx, width, height) {
  const { bounds } = layoutKeys(width, height);

  for (let handIndex = 0; handIndex < 2; handIndex += 1) {
    const half = getHandHalfBounds(bounds, handIndex);
    const laneWidth = half.width / 5;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fillRect(half.x, half.y, half.width, half.height);

    for (let lane = 0; lane < 5; lane += 1) {
      const x = half.x + lane * laneWidth;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, half.y);
      ctx.lineTo(x, half.y + half.height);
      ctx.stroke();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.font = '600 8px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(LANE_LABELS[lane], x + laneWidth / 2, half.y + 10);
    }

    if (handIndex === 0) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(half.x + half.width, half.y);
      ctx.lineTo(half.x + half.width, half.y + half.height);
      ctx.stroke();
    }
  }
}
