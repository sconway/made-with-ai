import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { PianoAudio } from './audio.js';
import {
  drawKeyboard,
  getHitTestMetrics,
  getKeyboardBounds,
  hitTestKeyAt,
} from './keyboard.js';
import { PressDetector } from './pressDetector.js';
import { isFingerVisible } from './fingerVisibility.js';

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
const canvas = document.getElementById('overlay');
const statusEl = document.getElementById('status');
const ctx = canvas.getContext('2d');
const pianoAudio = new PianoAudio();
const pressDetector = new PressDetector();

let handLandmarker;
let animationFrameId;
const activeMidis = new Set();

function setStatus(message, { hidden = false, error = false } = {}) {
  statusEl.textContent = message;
  statusEl.classList.toggle('hidden', hidden);
  statusEl.classList.toggle('error', error);
}

function resizeCanvas() {
  const { clientWidth, clientHeight } = canvas;
  canvas.width = clientWidth;
  canvas.height = clientHeight;
  pressDetector.reset();
  pressDetector.setKeyMetrics(getHitTestMetrics());
}

function getVideoCoverTransform() {
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;
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

function toScreen(point) {
  const { drawWidth, drawHeight, offsetX, offsetY } = getVideoCoverTransform();

  return {
    x: (1 - point.x) * drawWidth + offsetX,
    y: point.y * drawHeight + offsetY,
  };
}

function getHandSide(handIndex, handedness) {
  const label = handedness?.[handIndex]?.[0]?.categoryName;
  if (label === 'Left') return 0;
  if (label === 'Right') return 1;
  return handIndex;
}

function shouldTrackFinger(hand, handSide, finger, tipY, keyboardBounds) {
  if (isFingerVisible(hand, finger.name)) return true;

  const hovering = pressDetector.getHoverMidi(handSide, finger.name) != null;
  const isPressed = pressDetector.isPressed(handSide, finger.name);
  return (hovering || isPressed) && tipY >= keyboardBounds.y;
}

function resolveKeyHit(tipX, tipY) {
  return hitTestKeyAt(tipX, tipY, canvas.width, canvas.height);
}

function updatePresses(landmarks, handedness) {
  const activeKeys = new Set();
  const keyboardBounds = getKeyboardBounds(canvas.width, canvas.height);

  landmarks.forEach((hand, handIndex) => {
    const handSide = getHandSide(handIndex, handedness);
    const wrist = toScreen(hand[0]);

    for (const finger of FINGERS) {
      const tip = toScreen(hand[finger.tip]);
      if (!shouldTrackFinger(hand, handSide, finger, tip.y, keyboardBounds)) continue;

      const mcp = toScreen(hand[finger.mcp]);
      const stateKey = `${handSide}-${finger.name}`;
      activeKeys.add(stateKey);

      const hit =
        tip.y >= keyboardBounds.y ? resolveKeyHit(tip.x, tip.y) : null;

      pressDetector.update({
        handIndex: handSide,
        fingerName: finger.name,
        tipX: tip.x,
        tipY: tip.y,
        mcpY: mcp.y,
        wristY: wrist.y,
        midi: hit?.note.midi ?? null,
      });
    }
  });

  pressDetector.pruneMissing(activeKeys);
  return pressDetector.getActiveMidis();
}

function getHoverMidis(landmarks, handedness) {
  const hoverMidis = new Map();
  const keyboardBounds = getKeyboardBounds(canvas.width, canvas.height);

  landmarks.forEach((hand, handIndex) => {
    const handSide = getHandSide(handIndex, handedness);

    for (const finger of FINGERS) {
      const tip = toScreen(hand[finger.tip]);
      if (!shouldTrackFinger(hand, handSide, finger, tip.y, keyboardBounds)) continue;
      if (tip.y < keyboardBounds.y) continue;

      const hit = resolveKeyHit(tip.x, tip.y);
      if (hit) hoverMidis.set(hit.note.midi, finger.color);
    }
  });

  return hoverMidis;
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

function drawFingerDots(landmarks, handedness) {
  landmarks.forEach((hand, handIndex) => {
    const handSide = getHandSide(handIndex, handedness);

    for (const finger of FINGERS) {
      const point = hand[finger.tip];
      if (!point) continue;

      const { x, y } = toScreen(point);
      if (!isFingerVisible(hand, finger.name) && !pressDetector.getHoverMidi(handSide, finger.name)) {
        continue;
      }

      const pressing = pressDetector.isPressed(handSide, finger.name);
      const hovering = pressDetector.getHoverMidi(handSide, finger.name) != null;

      ctx.beginPath();
      ctx.arc(x, y, pressing || hovering ? DOT_RADIUS + 2 : DOT_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = finger.color;
      ctx.fill();

      ctx.lineWidth = pressing ? 4 : hovering ? 3.5 : 3;
      ctx.strokeStyle = pressing || hovering ? '#ffffff' : 'rgba(255, 255, 255, 0.85)';
      ctx.stroke();
    }
  });
}

function drawFrame(landmarks, handedness) {
  const hoverMidis = getHoverMidis(landmarks, handedness);
  const pressedKeys = updatePresses(landmarks, handedness);
  syncAudio(pressedKeys);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawKeyboard(ctx, canvas.width, canvas.height, { activeMidis: pressedKeys, hoverMidis });
  drawFingerDots(landmarks, handedness);
}

function renderLoop() {
  if (!handLandmarker || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
    animationFrameId = requestAnimationFrame(renderLoop);
    return;
  }

  const results = handLandmarker.detectForVideo(video, performance.now());

  if (results.landmarks?.length) {
    drawFrame(results.landmarks, results.handedness);
  } else {
    pressDetector.reset();
    syncAudio(new Set());
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawKeyboard(ctx, canvas.width, canvas.height);
  }

  animationFrameId = requestAnimationFrame(renderLoop);
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
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    setStatus('Requesting camera access…');
    await initCamera();

    setStatus('Loading hand tracking model…');
    await initHandLandmarker();
    await pianoAudio.init();

    setStatus('Ready — hover over a key, then press downward to play', { hidden: true });
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
