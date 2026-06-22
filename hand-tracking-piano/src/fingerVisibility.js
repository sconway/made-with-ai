const FINGER_JOINTS = {
  thumb: { tip: 4, pip: 3, mcp: 2 },
  index: { tip: 8, pip: 6, mcp: 5 },
  middle: { tip: 12, pip: 10, mcp: 9 },
  ring: { tip: 16, pip: 14, mcp: 13 },
  pinky: { tip: 20, pip: 18, mcp: 17 },
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

function isThumbVisible(hand, joints) {
  const wrist = hand[0];
  const tip = hand[joints.tip];
  const pip = hand[joints.pip];
  const palm = getPalmCenter(hand);

  const tipFromWrist = dist3(tip, wrist);
  const pipFromWrist = dist3(pip, wrist);
  const tipFromPalm = dist3(tip, palm);
  const pipFromPalm = dist3(pip, palm);

  return tipFromWrist > pipFromWrist * 1.04 && tipFromPalm > pipFromPalm * 0.9;
}

function isDigitVisible(hand, joints) {
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

  const extended = tipFromWrist > pipFromWrist * 1.04;
  const notTucked = tipFromPalm > pipFromPalm * 0.88;
  const unfolded = tipToPip > pipToMcp * 0.32;

  return extended && notTucked && unfolded;
}

export function isFingerVisible(hand, fingerName) {
  const joints = FINGER_JOINTS[fingerName];
  if (!joints) return false;

  if (fingerName === 'thumb') return isThumbVisible(hand, joints);
  return isDigitVisible(hand, joints);
}

export function getVisibleFingers(hand) {
  return Object.keys(FINGER_JOINTS).filter((name) => isFingerVisible(hand, name));
}
