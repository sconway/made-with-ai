import * as THREE from 'three';
import { WHITE_KEYS, BLACK_KEYS, whiteIndexBefore } from './notes.js';

// --- World-space layout (arbitrary units; the camera frames them on resize) ---
const WHITE_W = 1; // slot width per white key
const WHITE_GAP = 0.08; // gap between adjacent white keys
const WHITE_DEPTH = 6.4; // length of a white key (near <-> far)
const WHITE_THICK = 0.7; // vertical thickness of the key body
const BLACK_W = 0.58;
const BLACK_DEPTH = 3.95;
const BLACK_THICK = 0.95;
const BLACK_RAISE = 0.5; // how far the black key top sits above the white tops

// --- Press animation ---
const PRESS_ANGLE = 0.075; // radians the key pivots down when pressed
const ROT_LERP = 0.4; // key dip smoothing
const EMISSIVE_LERP = 0.35; // highlight smoothing

// --- Colors ---
const WHITE_COLOR = 0xeceef5;
const BLACK_COLOR = 0x0b0c12;
const KEY_OPACITY = 0.74; // keys are translucent so the webcam fingers show through
const ACTIVE_EMISSIVE = new THREE.Color(0xffc23d); // pressed = warm gold
const BASE_EMISSIVE = new THREE.Color(0x000000);

// --- Camera framing ---
const FOV = 42;
const PITCH_DEG = 23; // how far above the keyboard the camera sits
const LOOK_HEIGHT = 5.5; // raises the look target so the board sits lower on screen
const BOARD_TILT = 0.16; // radians the whole board leans back ("rotated upwards")

export class Keyboard3D {
  #renderer;
  #scene;
  #camera;
  #board;
  #keys = []; // { midi, note, mesh, pivot, material, baseColor }
  #keyMeshes = [];
  #raycaster = new THREE.Raycaster();
  #ndc = new THREE.Vector2();
  #totalWidth;
  #width = 1;
  #height = 1;

  constructor(canvas) {
    this.#renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.#renderer.setClearColor(0x000000, 0);
    this.#renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    this.#scene = new THREE.Scene();
    this.#camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 200);

    this.#totalWidth = WHITE_KEYS.length * WHITE_W;

    this.#buildLights();
    this.#buildBoard();
  }

  #buildLights() {
    this.#scene.add(new THREE.HemisphereLight(0xcfe0ff, 0x14151c, 0.85));

    const key = new THREE.DirectionalLight(0xffffff, 1.25);
    key.position.set(-6, 12, 14);
    this.#scene.add(key);

    const fill = new THREE.DirectionalLight(0x9fb4ff, 0.45);
    fill.position.set(8, 6, 4);
    this.#scene.add(fill);

    this.#scene.add(new THREE.AmbientLight(0xffffff, 0.25));
  }

  #buildBoard() {
    // The board group is centered at the origin in Z and tilted back slightly.
    this.#board = new THREE.Group();
    this.#board.position.z = -WHITE_DEPTH / 2;
    this.#board.rotation.x = BOARD_TILT;
    this.#scene.add(this.#board);

    const halfWidth = this.#totalWidth / 2;
    const whiteX = (index) => index * WHITE_W + WHITE_W / 2 - halfWidth;

    // Dark frame/base under the keys for a grounded, premium look.
    const baseDepth = WHITE_DEPTH + 0.9;
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(this.#totalWidth + 0.5, 0.6, baseDepth),
      new THREE.MeshStandardMaterial({ color: 0x191b24, roughness: 0.85, metalness: 0.1 }),
    );
    base.position.set(0, -WHITE_THICK - 0.32, WHITE_DEPTH / 2 - 0.15);
    this.#board.add(base);

    // White keys.
    WHITE_KEYS.forEach((note, index) => {
      this.#addKey({
        note,
        x: whiteX(index),
        width: WHITE_W - WHITE_GAP,
        depth: WHITE_DEPTH,
        thickness: WHITE_THICK,
        topY: 0,
        color: WHITE_COLOR,
        roughness: 0.55,
      });
    });

    // Black keys sit between specific white keys, raised and toward the back.
    for (const note of BLACK_KEYS) {
      const leftWhite = whiteIndexBefore(note);
      if (leftWhite === -1) continue;
      const x = (leftWhite + 1) * WHITE_W - halfWidth; // boundary between two whites
      this.#addKey({
        note,
        x,
        width: BLACK_W,
        depth: BLACK_DEPTH,
        thickness: BLACK_THICK,
        topY: BLACK_RAISE,
        color: BLACK_COLOR,
        roughness: 0.35,
      });
    }
  }

  #addKey({ note, x, width, depth, thickness, topY, color, roughness }) {
    // Pivot at the back-top edge of the key so it tips down at the front when pressed.
    const pivot = new THREE.Group();
    pivot.position.set(x, topY, 0);
    this.#board.add(pivot);

    const material = new THREE.MeshStandardMaterial({
      color,
      roughness,
      metalness: 0.08,
      emissive: BASE_EMISSIVE.clone(),
      emissiveIntensity: 0,
      transparent: true,
      opacity: KEY_OPACITY,
    });

    const geometry = new THREE.BoxGeometry(width, thickness, depth);
    const mesh = new THREE.Mesh(geometry, material);
    // Key body hangs below its top surface and extends toward the player (+Z).
    mesh.position.set(0, -thickness / 2, depth / 2);
    mesh.userData.midi = note.midi;
    mesh.userData.note = note;
    pivot.add(mesh);

    const entry = {
      midi: note.midi,
      note,
      mesh,
      pivot,
      material,
      baseColor: new THREE.Color(color),
      // front-top point used to anchor the on-screen note label
      labelLocal: new THREE.Vector3(0, topY + 0.02, depth * 0.74),
      labelPivot: pivot,
    };
    this.#keys.push(entry);
    this.#keyMeshes.push(mesh);
  }

  resize(width, height) {
    this.#width = Math.max(1, width);
    this.#height = Math.max(1, height);
    this.#renderer.setSize(this.#width, this.#height, false);
    this.#camera.aspect = this.#width / this.#height;
    this.#fitCamera();
    this.#camera.updateProjectionMatrix();
  }

  #fitCamera() {
    const aspect = this.#width / this.#height;
    const vFov = THREE.MathUtils.degToRad(FOV);
    const hHalfTan = Math.tan(vFov / 2) * aspect;

    const halfWidth = this.#totalWidth / 2 - 0.1;
    const distForWidth = halfWidth / hHalfTan;

    const halfDepth = WHITE_DEPTH / 2 + 0.6;
    const distForDepth = halfDepth / Math.tan(vFov / 2);

    const distance = Math.max(distForWidth, distForDepth) * 1.0;
    const pitch = THREE.MathUtils.degToRad(PITCH_DEG);

    this.#camera.position.set(
      0,
      LOOK_HEIGHT + distance * Math.sin(pitch),
      distance * Math.cos(pitch),
    );
    this.#camera.lookAt(0, LOOK_HEIGHT, 0);
  }

  /**
   * Raycast a normalized-device-coordinate point (x,y in [-1,1]) into the scene.
   * Returns the closest key the ray hits, or null.
   */
  hitTest(ndcX, ndcY) {
    this.#ndc.set(ndcX, ndcY);
    this.#raycaster.setFromCamera(this.#ndc, this.#camera);
    const hits = this.#raycaster.intersectObjects(this.#keyMeshes, false);
    if (!hits.length) return null;
    const mesh = hits[0].object;
    return { midi: mesh.userData.midi, note: mesh.userData.note };
  }

  render({ activeMidis = new Set(), hoverMidis = new Map() } = {}) {
    for (const entry of this.#keys) {
      const pressed = activeMidis.has(entry.midi);
      const hoverColor = hoverMidis.get(entry.midi);

      // Key dip.
      const targetRot = pressed ? PRESS_ANGLE : 0;
      entry.pivot.rotation.x += (targetRot - entry.pivot.rotation.x) * ROT_LERP;

      // Highlight: pressed wins over hover.
      let targetColor;
      let targetIntensity;
      if (pressed) {
        targetColor = ACTIVE_EMISSIVE;
        targetIntensity = 0.95;
      } else if (hoverColor) {
        targetColor = this.#colorFor(hoverColor);
        targetIntensity = 0.5;
      } else {
        targetColor = BASE_EMISSIVE;
        targetIntensity = 0;
      }

      entry.material.emissive.lerp(targetColor, EMISSIVE_LERP);
      entry.material.emissiveIntensity +=
        (targetIntensity - entry.material.emissiveIntensity) * EMISSIVE_LERP;
    }

    this.#renderer.render(this.#scene, this.#camera);
  }

  #colorCache = new Map();
  #colorFor(hex) {
    let color = this.#colorCache.get(hex);
    if (!color) {
      color = new THREE.Color(hex);
      this.#colorCache.set(hex, color);
    }
    return color;
  }

  /**
   * Project each white key's front-top point to screen pixels so the caller can
   * draw note labels aligned with the 3D keys. Returns CSS-pixel coordinates.
   */
  getLabelAnchors() {
    const anchors = [];
    const v = new THREE.Vector3();
    for (const entry of this.#keys) {
      if (entry.note.type !== 'white') continue;
      v.copy(entry.labelLocal);
      entry.labelPivot.localToWorld(v);
      v.project(this.#camera);
      if (v.z > 1) continue; // behind camera
      anchors.push({
        midi: entry.midi,
        name: entry.note.name,
        x: (v.x * 0.5 + 0.5) * this.#width,
        y: (1 - (v.y * 0.5 + 0.5)) * this.#height,
      });
    }
    return anchors;
  }

  dispose() {
    for (const entry of this.#keys) {
      entry.mesh.geometry.dispose();
      entry.material.dispose();
    }
    this.#renderer.dispose();
  }
}
