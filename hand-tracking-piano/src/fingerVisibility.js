const FINGER_JOINTS = {
  thumb: { tip: 4, pip: 3, mcp: 2 },
  index: { tip: 8, pip: 6, mcp: 5 },
  middle: { tip: 12, pip: 10, mcp: 9 },
  ring: { tip: 16, pip: 14, mcp: 13 },
  pinky: { tip: 20, pip: 18, mcp: 17 },
};

// --- Tunable thresholds -------------------------------------------------------
// Two bands give the detector hysteresis: a finger must clear the STRICT bar to
// switch on, but only needs to stay above the looser LENIENT bar to stay on (see
// the caller's per-finger state). This keeps a finger detected as it bends
// slightly inward to press a key, while a fully curled fist finger — well below
// even the lenient bar — still drops out.
const STRICT = {
  digitStraight: 0.8, // chord/path of the finger's two segments (1.0 = straight)
  digitExtended: 1.05, // tip must be this much farther from the wrist than the PIP
  digitNotTucked: 0.9, // tip distance from palm vs the PIP's distance from palm
  thumbStraight: 0.9, // chord/path along the whole thumb (base -> tip)
  thumbAbduct: 0.75, // thumb tip splay from the index knuckle, in palm widths
};
const LENIENT = {
  digitStraight: 0.6,
  digitExtended: 0.97,
  digitNotTucked: 0.78,
  thumbStraight: 0.78,
  thumbAbduct: 0.55,
};

function dist3(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = (a.z ?? 0) - (b.z ?? 0);
  return Math.hypot(dx, dy, dz);
}

function getPalmCenter(hand) {
  const base = [0, 5, 9, 13, 17];
  const center = { x: 0, y: 0, z: 0 };

  for (const index of base) {
    center.x += hand[index].x;
    center.y += hand[index].y;
    center.z += hand[index].z ?? 0;
  }

  center.x /= base.length;
  center.y /= base.length;
  center.z /= base.length;
  return center;
}

function isThumbVisible(hand, joints, t) {
  const tip = hand[joints.tip]; // 4
  const ip = hand[joints.pip]; // 3 (thumb IP joint)
  const mcp = hand[joints.mcp]; // 2
  const cmc = hand[1]; // thumb base
  const indexMcp = hand[5];
  const pinkyMcp = hand[17];

  // Straightness over the whole thumb (base -> tip) is the primary signal: an
  // extended thumb is nearly straight (~1.0), while curling it into a fist bends
  // the MCP and IP joints and pulls the tip back toward the base, dropping this
  // chord/path ratio well below 1. This rejects the curled/wrapped fist thumb.
  const chord = dist3(cmc, tip);
  const path = dist3(cmc, mcp) + dist3(mcp, ip) + dist3(ip, tip);
  const straight = chord / (path || 1) > t.thumbStraight;

  // Abduction rejects a thumb that stays fairly straight but lies against the
  // side of a fist: a genuinely extended thumb splays away from the index
  // knuckle. Normalized by palm width so it's independent of camera distance.
  const palmWidth = dist3(indexMcp, pinkyMcp) || 1;
  const abducted = dist3(tip, indexMcp) > palmWidth * t.thumbAbduct;

  return straight && abducted;
}

function isDigitVisible(hand, joints, t) {
  const wrist = hand[0];
  const tip = hand[joints.tip];
  const pip = hand[joints.pip];
  const mcp = hand[joints.mcp];
  const palm = getPalmCenter(hand);

  const tipFromWrist = dist3(tip, wrist);
  const pipFromWrist = dist3(pip, wrist);
  const tipFromPalm = dist3(tip, palm);
  const pipFromPalm = dist3(pip, palm);
  const tipToPip = dist3(tip, pip);
  const pipToMcp = dist3(pip, mcp);
  const tipToMcp = dist3(tip, mcp);

  // Straightness is the strongest, orientation-independent curl signal: an
  // extended finger reaches nearly the full summed length of its two segments
  // from the knuckle (MCP) to the tip, while a curled finger folds the tip back
  // toward the knuckle and collapses this ratio. A straight finger is ~1.0; a
  // finger bent 90° at the PIP is ~0.71; a tightly curled fist finger is ~0.4.
  const straightness = tipToMcp / (tipToPip + pipToMcp || 1);

  const extended = tipFromWrist > pipFromWrist * t.digitExtended;
  const notTucked = tipFromPalm > pipFromPalm * t.digitNotTucked;
  const straight = straightness > t.digitStraight;

  return extended && notTucked && straight;
}

/**
 * Whether a finger is extended enough to track. Pass `{ lenient: true }` for the
 * lower hysteresis band — used to keep an already-shown finger from flickering
 * off as it bends slightly to press a key.
 */
export function isFingerVisible(hand, fingerName, { lenient = false } = {}) {
  const joints = FINGER_JOINTS[fingerName];
  if (!joints) return false;

  const t = lenient ? LENIENT : STRICT;
  if (fingerName === 'thumb') return isThumbVisible(hand, joints, t);
  return isDigitVisible(hand, joints, t);
}

export function getVisibleFingers(hand) {
  return Object.keys(FINGER_JOINTS).filter((name) => isFingerVisible(hand, name));
}
