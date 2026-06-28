import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { PianoAudio } from './audio.js';
import { Keyboard3D } from './keyboard3d.js';
import { PressDetector } from './pressDetector.js';
import { isFingerCurled, isFingerVisible } from './fingerVisibility.js';
import { PointSmoother } from './smoothing.js';

const FINGERS = [
  { name: 'thumb', tip: 4, pip: 3, mcp: 2, color: '#ff6b6b' },
  { name: 'index', tip: 8, pip: 6, mcp: 5, color: '#ffd93d' },
  { name: 'middle', tip: 12, pip: 10, mcp: 9, color: '#6bcb77' },
  { name: 'ring', tip: 16, pip: 14, mcp: 13, color: '#4d96ff' },
  { name: 'pinky', tip: 20, pip: 18, mcp: 17, color: '#c77dff' },
];

const DOT_RADIUS = 9;
const MODEL_LOAD_TIMEOUT_MS = 45000;
const WASM_PATH = `${import.meta.env.BASE_URL}wasm`;
const MODEL_PATH = `${import.meta.env.BASE_URL}models/hand_landmarker.task`;

const video = document.getElementById('webcam');
const sceneCanvas = document.getElementById('scene');
const overlay = document.getElementById('overlay');
const statusEl = document.getElementById('status');
const overlayCtx = overlay.getContext('2d');
const pianoAudio = new PianoAudio();
const pressDetector = new PressDetector();
const keyboard = new Keyboard3D(sceneCanvas);
// Smooths each fingertip's screen position to remove tracking jitter, keyed by
// `${handSide}-${finger}`. Stabilizes both the drawn dots and the key hover/press.
const tipSmoother = new PointSmoother();

let handLandmarker;
let animationFrameId;
let lastVideoTime = -1;
const activeMidis = new Set();

let cachedLandmarks = null;
let cachedHandedness = null;
let cachedPressedMidis = new Set();
let cachedTipPositions = new Map();

function setStatus(message, { hidden = false, error = false } = {}) {
  statusEl.textContent = message;
  statusEl.classList.toggle('hidden', hidden);
  statusEl.classList.toggle('error', error);
}

function resize() {
  const width = overlay.clientWidth;
  const height = overlay.clientHeight;
  overlay.width = width;
  overlay.height = height;
  keyboard.resize(width, height);
  keyboard.render();
  resetTrackingState();
}

function getVideoCoverTransform() {
  const displayWidth = overlay.clientWidth;
  const displayHeight = overlay.clientHeight;
  const videoWidth = video.videoWidth || displayWidth;
  const videoHeight = video.videoHeight || displayHeight;

  const videoAspect = videoWidth / videoHeight;
  const displayAspect = displayWidth / displayHeight;

  let drawWidth;
  let drawHeight;
  let offsetX;
  let offsetY;

  if (videoAspect > displayAspect) {
    drawHeight = displayHeight;
    drawWidth = drawHeight * videoAspect;
    offsetX = (displayWidth - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = displayWidth;
    drawHeight = drawWidth / videoAspect;
    offsetX = 0;
    offsetY = (displayHeight - drawHeight) / 2;
  }

  return { drawWidth, drawHeight, offsetX, offsetY };
}

// MediaPipe landmarks are in the un-mirrored video frame. The webcam is shown
// mirrored, so we flip X to get the on-screen pixel position the user sees.
function toScreen(point) {
  const { drawWidth, drawHeight, offsetX, offsetY } = getVideoCoverTransform();

  return {
    x: (1 - point.x) * drawWidth + offsetX,
    y: point.y * drawHeight + offsetY,
  };
}

// Convert a screen-pixel position to normalized device coordinates for the
// 3D raycaster. The scene canvas covers the same box as the overlay.
function toNdc(screenX, screenY) {
  return {
    x: (screenX / overlay.clientWidth) * 2 - 1,
    y: -(screenY / overlay.clientHeight) * 2 + 1,
  };
}

function getHandSide(handIndex, handedness) {
  const label = handedness?.[handIndex]?.[0]?.categoryName;
  if (label === 'Left') return 0;
  if (label === 'Right') return 1;
  return handIndex;
}

// Stretched-out fingers shown last frame, keyed by `${handSide}-${finger}`. Used
// for visibility hysteresis so a finger doesn't flicker off as it bends slightly.
const shownFingers = new Set();

function resolveActive(hand, handSide, finger, stateKey) {
  const pressed = pressDetector.isPressed(handSide, finger.name);
  const extended = isFingerVisible(hand, finger.name, { lenient: true });
  const curled = isFingerCurled(hand, finger.name);

  if (pressed || extended) {
    shownFingers.add(stateKey);
    return true;
  }

  // Keep showing a finger that was recently extended until it clearly curls away.
  if (shownFingers.has(stateKey) && !curled) {
    return true;
  }

  shownFingers.delete(stateKey);
  return false;
}

// Single pass over the hands: feed the press detector and collect the keys
// that are currently hovered (per finger color) and pressed.
function updateHands(landmarks, handedness, now) {
  const activeKeys = new Set();
  const hoverMidis = new Map();
  const tipPositions = new Map();

  landmarks.forEach((hand, handIndex) => {
    const handSide = getHandSide(handIndex, handedness);
    const wrist = toScreen(hand[0]);

    for (const finger of FINGERS) {
      const stateKey = `${handSide}-${finger.name}`;
      if (!resolveActive(hand, handSide, finger, stateKey)) continue;

      const rawTip = toScreen(hand[finger.tip]);
      const tip = tipSmoother.smooth(stateKey, rawTip.x, rawTip.y, now);
      const mcp = toScreen(hand[finger.mcp]);
      const ndc = toNdc(tip.x, tip.y);
      const hit = keyboard.hitTest(ndc.x, ndc.y);

      activeKeys.add(stateKey);
      tipPositions.set(stateKey, tip);

      pressDetector.update({
        handIndex: handSide,
        fingerName: finger.name,
        tipX: tip.x,
        tipY: tip.y,
        mcpY: mcp.y,
        wristY: wrist.y,
        midi: hit?.midi ?? null,
      });

      if (hit) hoverMidis.set(hit.midi, finger.color);
    }
  });

  pressDetector.pruneMissing(activeKeys);
  tipSmoother.prune(activeKeys);
  return { pressedMidis: pressDetector.getActiveMidis(), hoverMidis, tipPositions };
}

function computeHoverMidis(landmarks, handedness, tipPositions) {
  const hoverMidis = new Map();

  landmarks.forEach((hand, handIndex) => {
    const handSide = getHandSide(handIndex, handedness);

    for (const finger of FINGERS) {
      const stateKey = `${handSide}-${finger.name}`;
      if (!shownFingers.has(stateKey)) continue;

      const tip = tipPositions.get(stateKey);
      if (!tip) continue;

      const ndc = toNdc(tip.x, tip.y);
      const hit = keyboard.hitTest(ndc.x, ndc.y);
      if (hit) hoverMidis.set(hit.midi, finger.color);
    }
  });

  return hoverMidis;
}

function getDisplayTipPositions(now) {
  const display = new Map();

  for (const stateKey of shownFingers) {
    const predicted = tipSmoother.predict(stateKey, now);
    const cached = cachedTipPositions.get(stateKey);
    if (predicted) display.set(stateKey, predicted);
    else if (cached) display.set(stateKey, cached);
  }

  return display;
}

function resetTrackingState() {
  pressDetector.reset();
  tipSmoother.reset();
  shownFingers.clear();
  cachedLandmarks = null;
  cachedHandedness = null;
  cachedPressedMidis = new Set();
  cachedTipPositions = new Map();
  syncAudio(new Set());
}

function syncAudio(nextMidis) {
  for (const midi of nextMidis) {
    if (!activeMidis.has(midi)) pianoAudio.noteOn(midi);
  }

  for (const midi of activeMidis) {
    if (!nextMidis.has(midi)) pianoAudio.noteOff(midi);
  }

  activeMidis.clear();
  for (const midi of nextMidis) activeMidis.add(midi);
}

function drawNoteLabels(activeMidis, hoverMidis) {
  const anchors = keyboard.getLabelAnchors();
  overlayCtx.textAlign = 'center';
  overlayCtx.textBaseline = 'middle';

  for (const anchor of anchors) {
    const active = activeMidis.has(anchor.midi);
    const hovered = hoverMidis.has(anchor.midi);
    const highlighted = active || hovered;

    overlayCtx.font = `600 ${highlighted ? 12 : 10}px Inter, system-ui, sans-serif`;
    overlayCtx.fillStyle = highlighted
      ? 'rgba(255, 255, 255, 0.95)'
      : 'rgba(255, 255, 255, 0.45)';
    overlayCtx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    overlayCtx.shadowBlur = 3;
    overlayCtx.fillText(anchor.name, anchor.x, anchor.y);
  }
  overlayCtx.shadowBlur = 0;
}

function drawFingerDots(landmarks, handedness, tipPositions) {
  landmarks.forEach((hand, handIndex) => {
    const handSide = getHandSide(handIndex, handedness);

    for (const finger of FINGERS) {
      const point = hand[finger.tip];
      if (!point) continue;

      // Draw exactly the fingers updateHands resolved as active this frame, so a
      // curled fist finger is hidden while a slightly-bent playing finger stays.
      const stateKey = `${handSide}-${finger.name}`;
      if (!shownFingers.has(stateKey)) continue;

      // Reuse the smoothed tip from updateHands so the dot matches the hover/press
      // position; fall back to the raw landmark if this finger wasn't tracked.
      const { x, y } = tipPositions.get(stateKey) ?? toScreen(point);
      const pressing = pressDetector.isPressed(handSide, finger.name);
      const hovering = pressDetector.getHoverMidi(handSide, finger.name) != null;

      overlayCtx.beginPath();
      overlayCtx.arc(x, y, pressing || hovering ? DOT_RADIUS + 2 : DOT_RADIUS, 0, Math.PI * 2);
      overlayCtx.fillStyle = finger.color;
      overlayCtx.fill();

      overlayCtx.lineWidth = pressing ? 4 : hovering ? 3.5 : 3;
      overlayCtx.strokeStyle = pressing || hovering ? '#ffffff' : 'rgba(255, 255, 255, 0.85)';
      overlayCtx.stroke();
    }
  });
}

function runDetection(now) {
  if (video.currentTime === lastVideoTime) return;
  lastVideoTime = video.currentTime;

  const results = handLandmarker.detectForVideo(video, now);

  if (results.landmarks?.length) {
    cachedLandmarks = results.landmarks;
    cachedHandedness = results.handedness;
    const { pressedMidis, tipPositions } = updateHands(
      cachedLandmarks,
      cachedHandedness,
      now,
    );
    cachedPressedMidis = pressedMidis;
    cachedTipPositions = tipPositions;
    syncAudio(pressedMidis);
    return;
  }

  resetTrackingState();
}

function renderFrame(now) {
  const tipPositions = cachedLandmarks ? getDisplayTipPositions(now) : new Map();
  const hoverMidis = cachedLandmarks
    ? computeHoverMidis(cachedLandmarks, cachedHandedness, tipPositions)
    : new Map();

  keyboard.render({ activeMidis: cachedPressedMidis, hoverMidis });

  overlayCtx.clearRect(0, 0, overlay.width, overlay.height);
  drawNoteLabels(cachedPressedMidis, hoverMidis);

  if (cachedLandmarks) {
    drawFingerDots(cachedLandmarks, cachedHandedness, tipPositions);
  }
}

function renderLoop() {
  animationFrameId = requestAnimationFrame(renderLoop);

  if (!handLandmarker || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
    return;
  }

  const now = performance.now();
  runDetection(now);
  renderFrame(now);
}

function withTimeout(promise, timeoutMs, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error(message)), timeoutMs);
    }),
  ]);
}

async function initCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('Camera API is not available in this browser.');
  }

  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'user',
      width: { ideal: 1280 },
      height: { ideal: 720 },
    },
    audio: false,
  });

  video.srcObject = stream;

  await new Promise((resolve, reject) => {
    video.onloadedmetadata = async () => {
      try {
        await video.play();
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    video.onerror = () => reject(new Error('Could not start the webcam video stream.'));
  });
}

async function createHandLandmarker(vision, delegate) {
  return HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: MODEL_PATH,
      delegate,
    },
    runningMode: 'VIDEO',
    numHands: 2,
    minHandDetectionConfidence: 0.35,
    minHandPresenceConfidence: 0.35,
    minTrackingConfidence: 0.35,
  });
}

async function initHandLandmarker() {
  const vision = await FilesetResolver.forVisionTasks(WASM_PATH);

  let lastError;
  for (const delegate of ['GPU', 'CPU']) {
    try {
      handLandmarker = await withTimeout(
        createHandLandmarker(vision, delegate),
        MODEL_LOAD_TIMEOUT_MS,
        `Timed out loading the hand tracking model (${delegate}). Run "npm run setup" and reload.`,
      );
      return;
    } catch (error) {
      lastError = error;
      console.warn(`Hand landmarker failed with ${delegate} delegate:`, error);
      handLandmarker?.close();
      handLandmarker = undefined;
    }
  }

  throw lastError ?? new Error('Could not initialize hand tracking.');
}

async function init() {
  try {
    resize();
    window.addEventListener('resize', resize);

    setStatus('Requesting camera access…');
    await initCamera();

    setStatus('Loading hand tracking model…');
    await initHandLandmarker();
    await pianoAudio.init();

    setStatus('Ready — hover a fingertip over a key, then press downward to play', { hidden: true });
    renderLoop();
  } catch (error) {
    console.error(error);

    let message = 'Could not start hand tracking. Reload the page and try again.';
    if (error?.name === 'NotAllowedError') {
      message = 'Camera access was denied. Allow webcam access and reload.';
    } else if (error?.name === 'NotFoundError') {
      message = 'No camera was found. Connect a webcam and reload.';
    } else if (error?.message?.includes('Timed out')) {
      message = `${error.message} If this keeps happening, run "npm run setup" in the project folder.`;
    } else if (error?.message) {
      message = error.message;
    }

    setStatus(message, { error: true });
  }
}

window.addEventListener('beforeunload', () => {
  cancelAnimationFrame(animationFrameId);
  pianoAudio.releaseAll();
  video.srcObject?.getTracks().forEach((track) => track.stop());
  handLandmarker?.close();
});

init();
