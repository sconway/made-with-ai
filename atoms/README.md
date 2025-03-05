# Atomic Visualization

A 3D visualization of an atomic model using Three.js and React. This project demonstrates a simplified Bohr model of an atom with interactive controls.

## Features

- 3D visualization of atomic structure
- Interactive orbit controls (rotate and zoom)
- Animated electrons orbiting in shells
- Pulsating nucleus
- Play/Pause controls
- Responsive design

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd atoms
```

2. Install dependencies:

```bash
npm install
```

## Running the Project

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Controls

- Left click + drag: Rotate the view
- Right click + drag: Pan
- Scroll: Zoom in/out
- Play/Pause button: Toggle animation

## Technologies Used

- React
- Three.js
- Vite
- CSS3
