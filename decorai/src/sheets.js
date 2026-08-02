/**
 * Sheet primitive — one overlay behaviour for all 12 modals.
 *
 * Below 640px a `.modal` presents as a bottom sheet (styling lives in
 * styles.css); above it, a centred dialog. This module adds the behaviour that
 * makes a sheet feel native rather than like a repositioned modal:
 *
 *   - drag-to-dismiss from the grabber, tracking the finger
 *   - focus trap while open, focus restored to the trigger on close
 *   - Escape to close
 *   - background scroll lock
 *
 * It deliberately does NOT own opening/closing. Every modal keeps its existing
 * open/close logic; this observes `.show` and layers behaviour on top, so no
 * existing call site had to change.
 */

const FOCUSABLE = [
  'a[href]', 'button:not([disabled])', 'input:not([disabled])',
  'select:not([disabled])', 'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const MOBILE_QUERY = '(max-width: 639px)';
/** Fraction of sheet height past which release dismisses rather than snaps back. */
const DISMISS_RATIO = 0.3;
const DISMISS_VELOCITY = 0.5; // px/ms — a fast flick dismisses regardless of distance

let lastFocused = null;
let openCount = 0;

function isMobile() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function isOpen(modal) {
  return modal.classList.contains('show') ||
    (modal.style.display && modal.style.display !== 'none' && !modal.classList.contains('hidden'));
}

/** Find the control that closes this modal, preferring an explicit marker. */
function closeControl(modal) {
  return modal.querySelector('[data-sheet-close]') ||
    modal.querySelector('.close-modal-btn') ||
    modal.querySelector('.feng-shui-close') ||
    modal.querySelector('.ww-modal-close');
}

function requestClose(modal) {
  const control = closeControl(modal);
  if (control) {
    control.click();
    return true;
  }
  // No close affordance (alert/confirm dialogs handle their own buttons)
  return false;
}

// ── Focus management ───────────────────────────────────────────────────────

function trapFocus(e, modal) {
  if (e.key !== 'Tab') return;
  const items = [...modal.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function onOpen(modal) {
  openCount += 1;
  if (openCount === 1) {
    lastFocused = document.activeElement;
    document.body.classList.add('has-sheet-open');
  }

  modal._sheetKeyHandler = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      requestClose(modal);
      return;
    }
    trapFocus(e, modal);
  };
  modal.addEventListener('keydown', modal._sheetKeyHandler);

  // Move focus into the sheet, preferring the first meaningful control over
  // the close button so keyboard users don't land on "dismiss".
  requestAnimationFrame(() => {
    const items = [...modal.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null);
    const preferred = items.find(el => !el.matches('.close-modal-btn, [data-sheet-close]')) || items[0];
    preferred?.focus({ preventScroll: true });
  });

  if (isMobile()) attachDrag(modal);
}

function onClose(modal) {
  openCount = Math.max(0, openCount - 1);
  if (modal._sheetKeyHandler) {
    modal.removeEventListener('keydown', modal._sheetKeyHandler);
    modal._sheetKeyHandler = null;
  }
  detachDrag(modal);

  if (openCount === 0) {
    document.body.classList.remove('has-sheet-open');

    // Move focus out of the now-hidden sheet. Restoring to the trigger is the
    // goal, but if it's gone (or was never focusable — e.g. the sheet was
    // opened programmatically) we must still blur, or focus is stranded on a
    // control inside a hidden dialog and the next Tab starts from nowhere.
    const restorable = lastFocused
      && document.contains(lastFocused)
      && typeof lastFocused.focus === 'function'
      && lastFocused !== document.body;

    if (restorable) {
      lastFocused.focus({ preventScroll: true });
    }
    if (!restorable || document.activeElement === modal || modal.contains(document.activeElement)) {
      document.activeElement?.blur?.();
    }
    lastFocused = null;
  }
}

// ── Drag to dismiss ────────────────────────────────────────────────────────

function attachDrag(modal) {
  const panel = modal.querySelector('.modal-content, .ww-modal-panel');
  if (!panel || panel._sheetDrag) return;

  // Grabber: the visual affordance that this can be dragged down.
  let grabber = panel.querySelector('.sheet-grabber');
  if (!grabber) {
    grabber = document.createElement('div');
    grabber.className = 'sheet-grabber';
    grabber.setAttribute('aria-hidden', 'true');
    panel.prepend(grabber);
  }

  let startY = 0;
  let startTime = 0;
  let currentY = 0;
  let dragging = false;

  const onDown = (e) => {
    // Only drag from the grabber or the header — never from scrollable content,
    // otherwise the sheet fights the user's scroll.
    const fromHandle = e.target.closest('.sheet-grabber, .modal-header, .ww-modal-header');
    if (!fromHandle) return;
    if (e.target.closest('button, a, input, select, textarea')) return;

    dragging = true;
    startY = e.clientY;
    startTime = performance.now();
    currentY = 0;
    panel.style.transition = 'none';
    panel.setPointerCapture?.(e.pointerId);
  };

  const onMove = (e) => {
    if (!dragging) return;
    currentY = Math.max(0, e.clientY - startY); // downward only
    panel.style.transform = `translateY(${currentY}px)`;
    // Fade the scrim proportionally so dismissal feels physical
    const progress = Math.min(1, currentY / panel.offsetHeight);
    modal.style.setProperty('--sheet-drag-progress', String(1 - progress * 0.6));
  };

  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    panel.style.transition = '';

    const elapsed = Math.max(1, performance.now() - startTime);
    const velocity = currentY / elapsed;
    const past = currentY > panel.offsetHeight * DISMISS_RATIO;

    if (past || velocity > DISMISS_VELOCITY) {
      panel.style.transform = `translateY(${panel.offsetHeight}px)`;
      const closed = requestClose(modal);
      // If nothing could close it, snap back rather than stranding the user
      setTimeout(() => {
        panel.style.transform = '';
        modal.style.removeProperty('--sheet-drag-progress');
      }, closed ? 220 : 0);
    } else {
      panel.style.transform = '';
      modal.style.removeProperty('--sheet-drag-progress');
    }
  };

  panel.addEventListener('pointerdown', onDown);
  panel.addEventListener('pointermove', onMove);
  panel.addEventListener('pointerup', onUp);
  panel.addEventListener('pointercancel', onUp);

  panel._sheetDrag = { onDown, onMove, onUp };
}

function detachDrag(modal) {
  const panel = modal.querySelector('.modal-content, .ww-modal-panel');
  if (!panel || !panel._sheetDrag) return;
  const { onDown, onMove, onUp } = panel._sheetDrag;
  panel.removeEventListener('pointerdown', onDown);
  panel.removeEventListener('pointermove', onMove);
  panel.removeEventListener('pointerup', onUp);
  panel.removeEventListener('pointercancel', onUp);
  panel.style.transform = '';
  panel.style.transition = '';
  modal.style.removeProperty('--sheet-drag-progress');
  panel._sheetDrag = null;
}

// ── Wiring ─────────────────────────────────────────────────────────────────

function observe(modal) {
  let wasOpen = isOpen(modal);
  const observer = new MutationObserver(() => {
    const nowOpen = isOpen(modal);
    if (nowOpen === wasOpen) return;
    wasOpen = nowOpen;
    if (nowOpen) onOpen(modal);
    else onClose(modal);
  });
  observer.observe(modal, { attributes: true, attributeFilter: ['class', 'style'] });

  // Clicking the scrim closes — standard for both sheets and dialogs.
  modal.addEventListener('click', (e) => {
    if (e.target === modal) requestClose(modal);
  });

  if (wasOpen) onOpen(modal);
}

export function initSheets() {
  document.querySelectorAll('.modal, .ww-modal').forEach(observe);

  // Modals added later (none today, but the editors build DOM dynamically)
  const bodyObserver = new MutationObserver((records) => {
    records.forEach(record => {
      record.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.matches?.('.modal, .ww-modal')) observe(node);
        node.querySelectorAll?.('.modal, .ww-modal').forEach(observe);
      });
    });
  });
  bodyObserver.observe(document.body, { childList: true, subtree: true });
}
