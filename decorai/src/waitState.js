/**
 * Generation wait state.
 *
 * A premium generation takes up to a minute. The previous experience was a
 * spinner and one static sentence — the single place in the app most likely to
 * lose someone, because nothing on screen changes and there's no signal that
 * progress is being made.
 *
 * This advances the copy through phases that reflect what the pipeline is
 * genuinely doing, and drives a determinate-looking progress bar that eases
 * toward completion without ever claiming to be finished. It never reaches
 * 100% on its own — arrival of the image is what completes it, so the bar
 * cannot lie.
 *
 * Honesty note: the backend exposes no progress events, so timings are
 * estimates. The phases are ordered to match the real pipeline and the bar
 * decelerates rather than faking precision.
 */

const PHASES = [
  { at: 0,     text: 'Reading your room…' },
  { at: 4000,  text: 'Understanding the layout…' },
  { at: 11000, text: 'Planning the arrangement…' },
  { at: 20000, text: 'Placing furniture…' },
  { at: 32000, text: 'Rendering materials and light…' },
  { at: 46000, text: 'Finishing details…' },
  { at: 62000, text: 'Almost there — final pass…' },
];

/** Asymptotic approach to (but never reaching) 100%. */
function progressFor(elapsedMs) {
  // ~90% at 60s, still climbing after — never completes without the image.
  return 1 - Math.exp(-elapsedMs / 26000);
}

let ticker = null;
const started = new WeakMap();

function tick() {
  const nodes = document.querySelectorAll('[data-wait-phase]');
  if (!nodes.length) {
    stop();
    return;
  }

  const now = performance.now();
  nodes.forEach(node => {
    if (!started.has(node)) started.set(node, now);
    const elapsed = now - started.get(node);

    // Advance the phase copy
    let phase = PHASES[0];
    for (const candidate of PHASES) {
      if (elapsed >= candidate.at) phase = candidate;
    }
    if (node.textContent !== phase.text) node.textContent = phase.text;

    // Drive the sibling progress bar, if present
    const fill = node.closest('.image-loader')?.querySelector('.image-loader-progress-fill');
    if (fill) fill.style.transform = `scaleX(${progressFor(elapsed).toFixed(3)})`;
  });
}

function start() {
  if (ticker) return;
  tick();
  ticker = setInterval(tick, 500);
}

function stop() {
  if (!ticker) return;
  clearInterval(ticker);
  ticker = null;
}

/**
 * Watch for wait states entering or leaving the DOM and run the ticker only
 * while at least one is present. No call sites in the generation logic needed
 * to change.
 */
export function initWaitState() {
  const observer = new MutationObserver(() => {
    if (document.querySelector('[data-wait-phase]')) start();
    else stop();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  if (document.querySelector('[data-wait-phase]')) start();
}

/** Markup for a card-level wait state. Shared by both loader call sites. */
export function waitStateMarkup() {
  return `
    <div class="image-loader" aria-label="Generating your design">
      <div class="image-loader-shimmer" aria-hidden="true"></div>
      <div class="image-loader-panel">
        <div class="image-loader-progress" aria-hidden="true">
          <div class="image-loader-progress-fill"></div>
        </div>
        <p class="image-loader-phase" data-wait-phase role="status" aria-live="polite">Reading your room…</p>
      </div>
    </div>`;
}
