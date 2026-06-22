# Hand Tracking

A simple webcam hand tracking demo. Each fingertip is highlighted with a different color when a hand is detected.

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

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## How it works

- Uses the browser webcam via `getUserMedia`
- Tracks up to two hands with [MediaPipe Hand Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker)
- Draws colored dots on each fingertip over a mirrored video feed

| Finger | Color |
|--------|-------|
| Thumb  | Red |
| Index  | Yellow |
| Middle | Green |
| Ring   | Blue |
| Pinky  | Purple |
