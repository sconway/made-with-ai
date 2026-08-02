/**
 * Before/after compare — drag divider.
 *
 * Replaces a "Show Original Image" checkbox. Two reasons:
 *
 * 1. Continuity. decoraityourspace.com sells the product with a drag divider.
 *    Someone who just used it there and then meets a checkbox in the app has
 *    been handed a different, worse tool for the same job.
 * 2. Direct manipulation. Comparing two images is a spatial task. A checkbox
 *    forces you to hold both states in memory; a divider lets you put the edge
 *    exactly where the sofa used to be.
 *
 * Works with pointer, touch, and keyboard (arrows / Home / End), and exposes a
 * slider role so the position is announced.
 */

const CLIP_VAR = '--compare-position';

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function setPosition(container, percent) {
  const value = clamp(percent, 0, 100);
  container.style.setProperty(CLIP_VAR, `${value}%`);
  const handle = container.querySelector('.compare-handle');
  if (handle) {
    handle.setAttribute('aria-valuenow', String(Math.round(value)));
  }
  container._comparePosition = value;
}

function getPosition(container) {
  return typeof container._comparePosition === 'number' ? container._comparePosition : 50;
}

function positionFromEvent(container, clientX) {
  const rect = container.getBoundingClientRect();
  if (!rect.width) return 50;
  return ((clientX - rect.left) / rect.width) * 100;
}

/**
 * Upgrade one reveal container into a compare control.
 * Idempotent — safe to call on re-render.
 */
export function enhanceCompare(container) {
  if (!container || container.dataset.compareReady === 'true') return;
  const original = container.querySelector('.original-image');
  const generated = container.querySelector('.generated-image');
  if (!original || !generated) return;

  container.dataset.compareReady = 'true';
  container.classList.add('compare-container');

  // Handle + labels
  const handle = document.createElement('div');
  handle.className = 'compare-handle';
  handle.tabIndex = 0;
  handle.setAttribute('role', 'slider');
  handle.setAttribute('aria-label', 'Compare original and redesigned room');
  handle.setAttribute('aria-valuemin', '0');
  handle.setAttribute('aria-valuemax', '100');
  handle.setAttribute('aria-valuenow', '50');
  handle.innerHTML = '<span class="compare-handle-grip" aria-hidden="true"></span>';

  const beforeLabel = document.createElement('span');
  beforeLabel.className = 'compare-label compare-label--before';
  beforeLabel.textContent = 'Before';

  const afterLabel = document.createElement('span');
  afterLabel.className = 'compare-label compare-label--after';
  afterLabel.textContent = 'After';

  container.append(beforeLabel, afterLabel, handle);
  setPosition(container, 50);

  // ── Pointer dragging ──
  let dragging = false;

  const onDown = (e) => {
    // Ignore clicks on the labels themselves
    if (e.target.closest('.compare-label')) return;
    dragging = true;
    container.classList.add('is-dragging');
    container.setPointerCapture?.(e.pointerId);
    setPosition(container, positionFromEvent(container, e.clientX));
    e.preventDefault();
  };

  const onMove = (e) => {
    if (!dragging) return;
    setPosition(container, positionFromEvent(container, e.clientX));
  };

  const onUp = (e) => {
    if (!dragging) return;
    dragging = false;
    container.classList.remove('is-dragging');
    container.releasePointerCapture?.(e.pointerId);
  };

  container.addEventListener('pointerdown', onDown);
  container.addEventListener('pointermove', onMove);
  container.addEventListener('pointerup', onUp);
  container.addEventListener('pointercancel', onUp);

  // ── Keyboard ──
  handle.addEventListener('keydown', (e) => {
    const step = e.shiftKey ? 10 : 2;
    const current = getPosition(container);
    switch (e.key) {
      case 'ArrowLeft':  setPosition(container, current - step); break;
      case 'ArrowRight': setPosition(container, current + step); break;
      case 'Home':       setPosition(container, 0); break;
      case 'End':        setPosition(container, 100); break;
      default: return;
    }
    e.preventDefault();
  });

  // Double-tap/click snaps back to centre
  container.addEventListener('dblclick', () => setPosition(container, 50));
}

/** Enhance every compare container currently on the page. */
export function refreshCompare(root = document) {
  root.querySelectorAll('.image-reveal-container:not(.reveal-loading)').forEach(enhanceCompare);
}

/**
 * Watch for design cards being (re)rendered and upgrade them automatically, so
 * the generation code paths didn't need to change.
 */
export function initCompare() {
  const observer = new MutationObserver(() => refreshCompare());
  observer.observe(document.body, { childList: true, subtree: true });
  refreshCompare();
}
