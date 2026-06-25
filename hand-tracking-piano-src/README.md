# Hand Tracking Piano

A Guitar Hero-style piano teaching app. Hold your hands over the on-screen keyboard and press down with your fingertips to play notes.

**Live demo:** https://sconway.github.io/made-with-ai/hand-tracker-piano/

## Run locally

```bash
npm install
npm run dev
```

The first install copies MediaPipe WASM locally and downloads the hand model (~8 MB) into `public/`. If loading hangs, run:

```bash
npm run setup
```

Then restart the dev server and reload the page.

## Build

```bash
npm run build
npm run preview
```

## How it works

- Uses the browser webcam via `getUserMedia`
- Tracks up to two hands with [MediaPipe Hand Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker)
- Renders a 3D piano keyboard with [three.js](https://threejs.org/), tilted up slightly so the key tops stay in view, composited over the mirrored webcam feed
- Maps each fingertip's on-screen position to a key by raycasting into the 3D scene, so hover/press targeting matches the perspective view exactly (including black-key-over-white priority)
- Detects when a fingertip presses down — using the tip's downward motion relative to the rest of the hand, so moving your whole hand down doesn't trigger a note — and plays the matching note via the Web Audio API
- Keys glow in your finger color on hover, then light up gold and physically depress when pressed
