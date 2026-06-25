import { cpSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const wasmSrc = join(root, 'node_modules/@mediapipe/tasks-vision/wasm');
const wasmDest = join(root, 'public/wasm');
const modelDir = join(root, 'public/models');
const modelDest = join(modelDir, 'hand_landmarker.task');
const modelUrl =
  'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

mkdirSync(modelDir, { recursive: true });
cpSync(wasmSrc, wasmDest, { recursive: true });

if (!existsSync(modelDest)) {
  console.log('Downloading hand landmarker model…');
  const response = await fetch(modelUrl);
  if (!response.ok) {
    throw new Error(`Failed to download model (${response.status})`);
  }
  writeFileSync(modelDest, Buffer.from(await response.arrayBuffer()));
  console.log('Model saved to public/models/hand_landmarker.task');
} else {
  console.log('Hand landmarker model already present');
}

console.log('MediaPipe assets ready in public/');
