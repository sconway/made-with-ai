// Assigns each detected hand a STABLE slot id across frames based on where the
// wrist is, not MediaPipe's Left/Right handedness label. The label is derived
// from palm orientation and flips unpredictably when the back of the hand faces
// the camera — exactly the posture used to play over the keys — which made two
// hands collapse onto the same tracking key (dots snapping left/right) or a
// single hand's key flip every frame (constant retracking). Spatial matching is
// immune to both: two hands always get two distinct, persistent slots.

// Max normalized wrist movement between frames to still count as the same hand.
// Landmark coords are 0..1; a real hand won't jump more than this per frame.
const MATCH_DIST = 0.25;

export class HandSlotTracker {
  #prev = new Map(); // slot id -> { x, y } wrist anchor from last frame

  /**
   * @param {Array} landmarks MediaPipe hand landmark arrays for this frame.
   * @returns {number[]} parallel array giving each hand a stable slot id.
   */
  assign(landmarks) {
    const anchors = landmarks.map((hand) => hand[0]); // wrist landmark
    const slots = new Array(landmarks.length).fill(-1);

    // Greedy nearest-neighbour: pair the globally closest (hand, previous slot)
    // first, so the obvious matches win before the ambiguous ones.
    const pairs = [];
    anchors.forEach((anchor, handIndex) => {
      for (const [slot, prev] of this.#prev) {
        const d = Math.hypot(anchor.x - prev.x, anchor.y - prev.y);
        if (d <= MATCH_DIST) pairs.push({ d, handIndex, slot });
      }
    });
    pairs.sort((a, b) => a.d - b.d);

    const usedHand = new Set();
    const usedSlot = new Set();
    for (const { handIndex, slot } of pairs) {
      if (usedHand.has(handIndex) || usedSlot.has(slot)) continue;
      slots[handIndex] = slot;
      usedHand.add(handIndex);
      usedSlot.add(slot);
    }

    // Hands with no nearby previous slot (just appeared) get the smallest free id.
    const next = new Map();
    anchors.forEach((anchor, handIndex) => {
      if (slots[handIndex] === -1) {
        let slot = 0;
        while (usedSlot.has(slot)) slot += 1;
        slots[handIndex] = slot;
        usedSlot.add(slot);
      }
      next.set(slots[handIndex], anchor);
    });

    this.#prev = next;
    return slots;
  }

  reset() {
    this.#prev.clear();
  }
}
