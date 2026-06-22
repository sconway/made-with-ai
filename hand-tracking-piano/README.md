# Hand Tracking Piano

A Guitar Hero-style piano teaching app. Hold your hands over the on-screen keyboard and press down with your fingertips to play notes.

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
- Renders a two-octave piano keyboard at the bottom of the screen
- Detects when a fingertip is pressing down over a key and plays the matching note via the Web Audio API
- Keys light up while held
