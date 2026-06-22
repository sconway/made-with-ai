import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';

const FINGER_TIPS = [
  { name: 'thumb', index: 4, color: '#ff6b6b' },
  { name: 'index', index: 8, color: '#ffd93d' },
  { name: 'middle', index: 12, color: '#6bcb77' },
  { name: 'ring', index: 16, color: '#4d96ff' },
  { name: 'pinky', index: 20, color: '#c77dff' },
];

const DOT_RADIUS = 14;
const MAX_TRAIL_POINTS = 18;
const MIN_TRAIL_DISTANCE = 4;
const MODEL_LOAD_TIMEOUT_MS = 45000;
const WASM_PATH = `${import.meta.env.BASE_URL}wasm`;
const MODEL_PATH = `${import.meta.env.BASE_URL}models/hand_landmarker.task`;

const video = document.getElementById('webcam');
const canvas = document.getElementById('overlay');
const statusEl = document.getElementById('status');
const ctx = canvas.getContext('2d');

let handLandmarker;
let animationFrameId;
const trails = new Map();

function setStatus(message, { hidden = false, error = false } = {}) {
  statusEl.textContent = message;
  statusEl.classList.toggle('hidden', hidden);
  statusEl.classList.toggle('error', error);
}

function resizeCanvas() {
  const { clientWidth, clientHeight } = canvas;
  canvas.width = clientWidth;
  canvas.height = clientHeight;
  trails.clear();
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

function trailKey(handIndex, fingerName) {
  return `${handIndex}-${fingerName}`;
}

function colorWithAlpha(hex, alpha) {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function updateTrails(landmarks) {
  const activeKeys = new Set();

  landmarks.forEach((hand, handIndex) => {
    for (const finger of FINGER_TIPS) {
      const point = hand[finger.index];
      if (!point) continue;

      const key = trailKey(handIndex, finger.name);
      activeKeys.add(key);

      const pos = toScreen(point);
      let trail = trails.get(key);
      if (!trail) {
        trail = [];
        trails.set(key, trail);
      }

      const last = trail.at(-1);
      if (!last || Math.hypot(pos.x - last.x, pos.y - last.y) >= MIN_TRAIL_DISTANCE) {
        trail.push(pos);
        if (trail.length > MAX_TRAIL_POINTS) trail.shift();
      } else {
        trail[trail.length - 1] = pos;
      }
    }
  });

  for (const key of trails.keys()) {
    if (!activeKeys.has(key)) trails.delete(key);
  }
}

function drawTrails() {
  for (const [key, points] of trails) {
    const fingerName = key.split('-').slice(1).join('-');
    const finger = FINGER_TIPS.find((item) => item.name === fingerName);
    if (!finger || points.length < 2) continue;

    for (let i = 1; i < points.length; i++) {
      const progress = i / (points.length - 1);

      ctx.beginPath();
      ctx.moveTo(points[i - 1].x, points[i - 1].y);
      ctx.lineTo(points[i].x, points[i].y);
      ctx.strokeStyle = colorWithAlpha(finger.color, 0.1 + progress * 0.5);
      ctx.lineWidth = 1.5 + progress * 7;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }
}

function drawFingerDots(landmarks) {
  for (const hand of landmarks) {
    for (const finger of FINGER_TIPS) {
      const point = hand[finger.index];
      if (!point) continue;

      const { x, y } = toScreen(point);

      ctx.beginPath();
      ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = finger.color;
      ctx.fill();

      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.stroke();
    }
  }
}

function drawFrame(landmarks) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateTrails(landmarks);
  drawTrails();
  drawFingerDots(landmarks);
}

function renderLoop() {
  if (!handLandmarker || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
    animationFrameId = requestAnimationFrame(renderLoop);
    return;
  }

  const results = handLandmarker.detectForVideo(video, performance.now());

  if (results.landmarks?.length) {
    drawFrame(results.landmarks);
  } else {
    trails.clear();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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

    setStatus('Ready', { hidden: true });
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
  video.srcObject?.getTracks().forEach((track) => track.stop());
  handLandmarker?.close();
});

init();
