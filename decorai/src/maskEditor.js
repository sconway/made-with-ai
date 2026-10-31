/**
 * Region mask editor — "change only this" / "keep only this".
 *
 * The app could only ever restyle a whole room. The most common real
 * constraint a homeowner has is the opposite: *keep my sofa, change the rest*,
 * or *just the walls*. A sentence can't express that reliably; a mask can.
 *
 * Works on any <img> — the uploaded photo (Quick Edit) or a generated result.
 * A canvas is laid over the image and the user paints the region they mean.
 *
 * A "change this" run has three parts, each fixing a real failure:
 *
 *   1. The model is SHOWN the target — ONE image: the photo with the painted
 *      area marked in magenta (buildRegionMarkup), on every tier. Without it,
 *      "remove this" names nothing and the model often returns the room
 *      unchanged. Earlier versions sent a clean photo plus a separate guide
 *      (free) or OpenAI's mask field (premium); models didn't connect the
 *      guide to the photo, and gpt-image never sees a mask as an image.
 *   2. The model gets the FULL photo, so whole objects are in view. An
 *      earlier version sent a crop around the brush strokes; a stroke on one
 *      end of a sofa cropped off the rest of it.
 *   3. The result keeps the OBJECT the model changed, not the brush strokes
 *      (compositeRegionEdit). People paint loosely over part of an item;
 *      keeping only painted pixels gave half-recoloured couches. Changes
 *      that don't touch the stroke are discarded, so the rest of the room
 *      stays exactly as it was.
 *
 * A "remove this" run doesn't use an instruction model at all. Those models,
 * given a marked object and "remove this", cleaned off the marker and kept
 * the object. It works the way phone photo erasers do: the painted area
 * (grown a little, toEraseMaskDataUrl) goes to a mask-based eraser model.
 * The result is put back with compositeRegionEdit, like a "change this" run:
 * the eraser also clears the object's shadow just outside the mask, and
 * pasting back only the masked area cut that shadow off in a visible seam.
 *
 * ── Geometry ──────────────────────────────────────────────────────────────
 * Strokes are stored in the IMAGE's normalised coordinate space (0..1 of its
 * natural width/height), not the container's. The images in this app are
 * displayed with object-fit: cover — the result card crops to a 240px strip,
 * the configure photo caps its height — so a container-relative point is not
 * the same image pixel. Every pointer position is mapped through the image's
 * rendered content rect (object-fit + object-position) before it's stored.
 */

const BRUSH_MIN = 8;
const BRUSH_MAX = 160;

/** "50% 50%", "left top", "center" … → fractional { x, y }. */
function parseObjectPosition(value) {
    const kw = { left: 0, top: 0, center: 0.5, right: 1, bottom: 1 };
    const frac = (p) => {
        if (p == null) return 0.5;
        if (p in kw) return kw[p];
        if (p.endsWith('%')) return parseFloat(p) / 100;
        return 0.5; // px offsets aren't used in this app
    };
    let [a, b] = String(value || '50% 50%').trim().split(/\s+/);
    // Keyword order may be swapped ("top left").
    if (a === 'top' || a === 'bottom') [a, b] = [b, a];
    return { x: frac(a), y: frac(b ?? 'center') };
}

export class MaskEditor {
    /**
     * @param {HTMLElement} container positioned ancestor to host the canvas
     * @param {HTMLImageElement} sourceImg the image being masked
     */
    constructor(container, sourceImg) {
        this.container = container;
        this.sourceImg = sourceImg;
        this.sourceSrc = sourceImg.currentSrc || sourceImg.src;
        this.mode = 'change';
        this.brushSize = 48;
        this.erasing = false;
        this.onChange = null;
        /** Called when the image is replaced under the mask — tear down. */
        this.onSourceChanged = null;
        /** Called as a stroke begins (e.g. to get a menu out of the way). */
        this.onStrokeStart = null;
        /** Called after the canvas is re-laid over the image. */
        this.onLayout = null;

        // { erase, size, points: [{x,y}] } — x/y and size are fractions of the
        // image's natural width/height (size: of its width).
        this.strokes = [];
        this._current = null;
        this._content = null;

        this.canvas = document.createElement('canvas');
        this.canvas.className = 'mask-canvas';
        this.canvas.setAttribute('aria-label', 'Region mask — drag to paint the area you mean');
        this.ctx = this.canvas.getContext('2d');
        container.appendChild(this.canvas);

        this._fit = this._fit.bind(this);
        window.addEventListener('resize', this._fit);
        if (typeof ResizeObserver === 'function') {
            this._ro = new ResizeObserver(this._fit);
            this._ro.observe(sourceImg);
            this._ro.observe(container);
        }
        // A mask painted on one image is meaningless on another.
        this._mo = new MutationObserver(() => {
            if ((sourceImg.currentSrc || sourceImg.src) !== this.sourceSrc) this.onSourceChanged?.();
        });
        this._mo.observe(sourceImg, { attributes: true, attributeFilter: ['src'] });
        if (!sourceImg.naturalWidth) sourceImg.addEventListener('load', this._fit, { once: true });

        this._bindPointer();
        this._fit();
    }

    /** True while the image this mask was painted on is still on the page, unchanged. */
    isValid() {
        return this.sourceImg.isConnected
            && (this.sourceImg.currentSrc || this.sourceImg.src) === this.sourceSrc;
    }

    /**
     * Where the image's pixels actually render, in canvas-local CSS px.
     * Accounts for object-fit and object-position, so with `cover` the rect
     * is larger than the element (part of the image is cropped off) and with
     * `contain` it's smaller (letterboxed).
     */
    _contentRect() {
        const el = this.sourceImg.getBoundingClientRect();
        const nw = this.sourceImg.naturalWidth;
        const nh = this.sourceImg.naturalHeight;
        if (!el.width || !el.height || !nw || !nh) return null;
        const cs = getComputedStyle(this.sourceImg);
        let sx = el.width / nw;
        let sy = el.height / nh;
        switch (cs.objectFit) {
            case 'contain': sx = sy = Math.min(sx, sy); break;
            case 'cover': sx = sy = Math.max(sx, sy); break;
            case 'none': sx = sy = 1; break;
            case 'scale-down': sx = sy = Math.min(1, sx, sy); break;
            default: break; // fill
        }
        const w = nw * sx;
        const h = nh * sy;
        const pos = parseObjectPosition(cs.objectPosition);
        return { left: (el.width - w) * pos.x, top: (el.height - h) * pos.y, width: w, height: h };
    }

    /** Lay the canvas exactly over the image element. */
    _fit() {
        const c = this.container.getBoundingClientRect();
        const i = this.sourceImg.getBoundingClientRect();
        if (!i.width || !i.height) return;
        const dpr = window.devicePixelRatio || 1;
        Object.assign(this.canvas.style, {
            left: `${i.left - c.left - this.container.clientLeft}px`,
            top: `${i.top - c.top - this.container.clientTop}px`,
            width: `${i.width}px`,
            height: `${i.height}px`,
        });
        this.canvas.width = Math.round(i.width * dpr);
        this.canvas.height = Math.round(i.height * dpr);
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this._content = this._contentRect();
        this._redraw();
        this.onLayout?.();
    }

    _bindPointer() {
        const toImage = (e) => {
            const r = this.canvas.getBoundingClientRect();
            const k = this._content;
            return { x: (e.clientX - r.left - k.left) / k.width, y: (e.clientY - r.top - k.top) / k.height };
        };

        // ── Touch: drawing and scrolling with one finger ─────────────────────
        // The canvas has to claim every touch (touch-action: none) or the
        // browser would scroll instead of paint — and on a phone it covers most
        // of the screen. So the canvas decides, from how a one-finger gesture
        // starts, which the user meant:
        //   - a fast swipe that's mostly up or down, on a page that can
        //     actually scroll → scroll, with momentum like the browser's own.
        //     "Fast" is the first 12px in under 24ms (~500px/s): a scrolling
        //     flick starts well above that, ordinary drawing well below;
        //   - anything else (press and drag, slower or sideways movement, a
        //     tap) → draw, starting immediately.
        // The stroke is drawn from the first touch so drawing never lags; if
        // the gesture turns out to be a scroll, that stroke is taken back.
        // Two fingers always scroll, too.
        const touches = new Map(); // pointerId → { x, y } in client px
        let panning = false;       // two-finger scroll
        let lastMid = null;
        let pending = null;        // one finger, intent not decided yet
        let flick = null;          // one-finger scroll in progress
        let momentum = 0;          // rAF id of the scroll's glide after release
        const SLOP_PX = 12;        // movement before a gesture is judged
        const FLICK_MS = 24;       // a scroll gets past the slop this fast…
        const VERTICAL = 1.5;      // …and moves at least this much more up/down than sideways
        // A second finger this soon after the first means the first never
        // meant to paint; later than this, its stroke is kept.
        const TWO_FINGER_GRACE_MS = 250;

        const midpoint = () => {
            let x = 0;
            let y = 0;
            for (const p of touches.values()) { x += p.x; y += p.y; }
            return { x: x / touches.size, y: y / touches.size };
        };
        const pageCanScroll = () => {
            const root = document.scrollingElement || document.documentElement;
            return root.scrollHeight > window.innerHeight + 1;
        };
        const capture = (id) => {
            try { this.canvas.setPointerCapture?.(id); } catch { /* pointer already gone */ }
        };
        const release = (id) => {
            try {
                if (this.canvas.hasPointerCapture?.(id)) this.canvas.releasePointerCapture(id);
            } catch { /* pointer already gone */ }
        };
        // Like a native scroll, a glide stops as soon as anything is touched
        // (or the page is scrolled another way).
        const stopMomentum = () => {
            cancelAnimationFrame(momentum);
            momentum = 0;
            document.removeEventListener('pointerdown', stopMomentum, true);
            document.removeEventListener('wheel', stopMomentum, true);
        };
        const takeBackStroke = () => {
            if (!this._current) return;
            this.strokes.splice(this.strokes.indexOf(this._current), 1);
            this._current = null;
            this._redraw();
            this.onChange?.();
        };
        // The glide after a flick: carry on at the release speed, slowing the
        // way a native scroll does.
        const glide = (velocity) => {
            let v = velocity; // px per ms, positive = scroll down
            let last = performance.now();
            const step = (now) => {
                const dt = Math.min(32, now - last);
                last = now;
                window.scrollBy(0, v * dt);
                v *= Math.pow(0.95, dt / 16);
                if (Math.abs(v) > 0.02) momentum = requestAnimationFrame(step);
                else stopMomentum();
            };
            if (Math.abs(v) <= 0.1) return;
            document.addEventListener('pointerdown', stopMomentum, true);
            document.addEventListener('wheel', stopMomentum, true);
            momentum = requestAnimationFrame(step);
        };

        this.canvas.addEventListener('pointerdown', (e) => {
            if (!this._content) return;
            // Painting must not also drag a compare divider or open an overlay.
            e.preventDefault();
            e.stopPropagation();
            capture(e.pointerId);
            if (e.pointerType === 'touch') {
                stopMomentum();
                // The first finger of a new gesture: anything still tracked is
                // stale (a lift the browser never reported). Starting clean
                // stops one lost event from leaving the canvas stuck.
                if (e.isPrimary || !touches.size) {
                    touches.clear();
                    panning = false;
                    flick = null;
                    pending = null;
                }
                touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
                if (touches.size >= 2) {
                    if (this._current) {
                        if (performance.now() - this._current.startedAt < TWO_FINGER_GRACE_MS) takeBackStroke();
                        else { this._current = null; this.onChange?.(); }
                    }
                    pending = null;
                    flick = null;
                    panning = true;
                    lastMid = midpoint();
                    return;
                }
                if (panning) return; // a finger put back down mid-scroll keeps scrolling
                pending = { id: e.pointerId, x0: e.clientX, y0: e.clientY, t0: performance.now() };
            }
            this._current = {
                erase: this.erasing,
                size: this.brushSize / this._content.width,
                points: [toImage(e)],
                startedAt: performance.now(),
            };
            this.strokes.push(this._current);
            this._redraw();
            this.onStrokeStart?.();
        });

        this.canvas.addEventListener('pointermove', (e) => {
            if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
                touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
                if (panning) {
                    e.preventDefault();
                    const mid = midpoint();
                    window.scrollBy(lastMid.x - mid.x, lastMid.y - mid.y);
                    lastMid = mid;
                    return;
                }
                if (flick && e.pointerId === flick.id) {
                    e.preventDefault();
                    const now = performance.now();
                    const dy = flick.y - e.clientY;
                    window.scrollBy(0, dy);
                    const dt = Math.max(1, now - flick.t);
                    flick.v = 0.8 * (dy / dt) + 0.2 * flick.v; // smoothed, px/ms
                    flick.y = e.clientY;
                    flick.t = now;
                    return;
                }
                if (pending && e.pointerId === pending.id) {
                    const dx = e.clientX - pending.x0;
                    const dy = e.clientY - pending.y0;
                    if (Math.hypot(dx, dy) >= SLOP_PX) {
                        const quick = performance.now() - pending.t0 < FLICK_MS;
                        const vertical = Math.abs(dy) > VERTICAL * Math.abs(dx);
                        if (quick && vertical && pageCanScroll()) {
                            takeBackStroke();
                            window.scrollBy(0, -dy);
                            flick = { id: e.pointerId, y: e.clientY, t: performance.now(), v: 0 };
                            pending = null;
                            e.preventDefault();
                            return;
                        }
                        pending = null; // it's a stroke
                    }
                }
            }
            if (!this._current) return;
            e.preventDefault();
            this._current.points.push(toImage(e));
            this._redraw();
        });

        const end = (e) => {
            release(e.pointerId);
            if (e.pointerType === 'touch') {
                const tracked = touches.delete(e.pointerId);
                if (pending?.id === e.pointerId) pending = null;
                if (flick && flick.id === e.pointerId) {
                    // Released mid-swipe: glide on, unless the finger had stopped.
                    const v = performance.now() - flick.t < 80 ? flick.v : 0;
                    flick = null;
                    glide(v);
                    return;
                }
                if (panning) {
                    // Lifting one finger carries on with the other; lifting both ends it.
                    if (touches.size) lastMid = midpoint();
                    else panning = false;
                    return;
                }
                if (!tracked) return; // already handled (e.g. pointerup, then lostpointercapture)
            }
            if (!this._current) return;
            this._current = null;
            this.onChange?.();
        };
        this.canvas.addEventListener('pointerup', end);
        this.canvas.addEventListener('pointercancel', end);
        // Some browsers drop the capture without a pointerup; treat it as one.
        this.canvas.addEventListener('lostpointercapture', end);
    }

    /**
     * Paint the strokes, mapping image-normalised coordinates onto a target
     * rect: (ox, oy, sw, sh) is where the full image lands on that context.
     */
    _paintStrokes(ctx, ox, oy, sw, sh, paint) {
        for (const stroke of this.strokes) {
            ctx.save();
            ctx.globalCompositeOperation = stroke.erase ? 'destination-out' : 'source-over';
            ctx.strokeStyle = paint;
            ctx.fillStyle = paint;
            ctx.lineWidth = stroke.size * sw;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            const pts = stroke.points;
            const X = (p) => ox + p.x * sw;
            const Y = (p) => oy + p.y * sh;
            ctx.beginPath();
            if (pts.length === 1) {
                ctx.arc(X(pts[0]), Y(pts[0]), (stroke.size * sw) / 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.moveTo(X(pts[0]), Y(pts[0]));
                for (let i = 1; i < pts.length; i++) ctx.lineTo(X(pts[i]), Y(pts[i]));
                ctx.stroke();
            }
            ctx.restore();
        }
    }

    _redraw() {
        const w = this.canvas.width / (window.devicePixelRatio || 1);
        const h = this.canvas.height / (window.devicePixelRatio || 1);
        this.ctx.clearRect(0, 0, w, h);
        const k = this._content;
        if (!k) return;
        // Clip to the image's pixels: with `contain` the letterbox isn't part
        // of the image, and a stroke there would promise an edit that can't happen.
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rect(k.left, k.top, k.width, k.height);
        this.ctx.clip();
        this._paintStrokes(this.ctx, k.left, k.top, k.width, k.height, 'rgba(99, 102, 241, 0.55)');
        this.ctx.restore();
    }

    /** 'change' | 'keep' | 'remove' — what the painted area means. */
    setMode(mode) {
        this.mode = ['keep', 'remove'].includes(mode) ? mode : 'change';
        this.onChange?.();
    }
    setBrushSize(px) { this.brushSize = Math.max(BRUSH_MIN, Math.min(BRUSH_MAX, Number(px) || 48)); }
    setErasing(on) { this.erasing = !!on; }

    clear() {
        this.strokes = [];
        this._redraw();
        this.onChange?.();
    }

    /** Take back the last stroke. */
    undo() {
        if (!this.strokes.length) return;
        this.strokes.pop();
        this._redraw();
        this.onChange?.();
    }

    /**
     * Where the painted area is on screen, as a viewport rect (like
     * getBoundingClientRect), clipped to the image. Null when nothing is
     * painted. Erase strokes are ignored — close enough for placing a menu.
     */
    selectionRect() {
        const k = this._content;
        if (!k || !this.hasMask()) return null;
        const aspect = k.width / k.height;
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        for (const s of this.strokes) {
            if (s.erase) continue;
            const rx = s.size / 2;
            const ry = rx * aspect;
            for (const p of s.points) {
                x0 = Math.min(x0, p.x - rx); x1 = Math.max(x1, p.x + rx);
                y0 = Math.min(y0, p.y - ry); y1 = Math.max(y1, p.y + ry);
            }
        }
        const c = this.canvas.getBoundingClientRect();
        const clamp = (v) => Math.min(1, Math.max(0, v));
        const left = c.left + k.left + clamp(x0) * k.width;
        const right = c.left + k.left + clamp(x1) * k.width;
        const top = c.top + k.top + clamp(y0) * k.height;
        const bottom = c.top + k.top + clamp(y1) * k.height;
        return { left, top, right, bottom, width: right - left, height: bottom - top };
    }

    /**
     * True when a paint stroke exists. Cheap and used for UI state; it does
     * NOT account for erase strokes cancelling the paint out — the export
     * functions check the rendered result for that.
     */
    hasMask() { return this.strokes.some((s) => !s.erase); }

    _naturalSize() {
        const w = this.sourceImg.naturalWidth || this.sourceImg.width;
        const h = this.sourceImg.naturalHeight || this.sourceImg.height;
        return w && h ? { w, h } : null;
    }

    /** The painted selection at the image's natural size, or null if empty. */
    _renderSelection() {
        if (!this.hasMask()) return null;
        const size = this._naturalSize();
        if (!size) return null;
        const sel = document.createElement('canvas');
        sel.width = size.w;
        sel.height = size.h;
        const sctx = sel.getContext('2d');
        this._paintStrokes(sctx, 0, 0, size.w, size.h, 'rgba(0,0,0,1)');
        const { data } = sctx.getImageData(0, 0, size.w, size.h);
        // Paint can be fully cancelled by erasing; an empty selection must
        // read as "no mask", not as an edit of nothing that still costs a run.
        let any = false;
        for (let i = 3; i < data.length; i += 16) { if (data[i]) { any = true; break; } }
        return any ? { sel, data, ...size } : null;
    }

    /** The painted area at natural size: opaque where painted. Not feathered. */
    toStrokeMaskDataUrl() {
        const r = this._renderSelection();
        return r ? r.sel.toDataURL('image/png') : null;
    }

    /**
     * Alpha mask for a "keep this" composite, at the image's natural size.
     * OPAQUE = take this pixel from the edit; transparent = keep the original.
     * Edges are feathered so a slight lighting difference doesn't show as a cut.
     */
    toCompositeMaskDataUrl(mode = this.mode) {
        const r = this._renderSelection();
        if (!r) return null;
        const out = document.createElement('canvas');
        out.width = r.w;
        out.height = r.h;
        const octx = out.getContext('2d');
        // ~0.5% of the short edge: wide enough to hide a seam, tight enough
        // that the region still reads as the one the user painted.
        const feather = Math.max(2, Math.round(Math.min(r.w, r.h) * 0.005));
        if (mode === 'change') {
            octx.filter = `blur(${feather}px)`;
            octx.drawImage(r.sel, 0, 0);
        } else {
            // 'keep': the edit shows everywhere EXCEPT the paint.
            octx.fillStyle = '#000';
            octx.fillRect(0, 0, r.w, r.h);
            octx.globalCompositeOperation = 'destination-out';
            octx.filter = `blur(${feather}px)`;
            octx.drawImage(r.sel, 0, 0);
        }
        return out.toDataURL('image/png');
    }

    /**
     * The mask for a "remove this" erase, at the image's natural size:
     * white = erase, black = keep. Grown past the brush strokes so the
     * object's anti-aliased edge goes too; an eraser fills exactly what it's
     * given, and a 1px rim left a ghost outline.
     */
    toEraseMaskDataUrl() {
        const r = this._renderSelection();
        if (!r) return null;
        const grow = Math.max(3, Math.round(Math.min(r.w, r.h) * 0.012));
        const grown = document.createElement('canvas');
        grown.width = r.w;
        grown.height = r.h;
        const gctx = grown.getContext('2d');
        for (let a = 0; a < 16; a++) {
            const t = (a / 16) * Math.PI * 2;
            gctx.drawImage(r.sel, Math.round(Math.cos(t) * grow), Math.round(Math.sin(t) * grow));
        }
        gctx.drawImage(r.sel, 0, 0);

        const mask = document.createElement('canvas');
        mask.width = r.w;
        mask.height = r.h;
        const mctx = mask.getContext('2d');
        mctx.drawImage(grown, 0, 0);
        mctx.globalCompositeOperation = 'source-in';
        mctx.fillStyle = '#fff';
        mctx.fillRect(0, 0, r.w, r.h);
        mctx.globalCompositeOperation = 'destination-over';
        mctx.fillStyle = '#000';
        mctx.fillRect(0, 0, r.w, r.h);
        return mask.toDataURL('image/png');
    }

    destroy() {
        window.removeEventListener('resize', this._fit);
        this._ro?.disconnect();
        this._mo?.disconnect();
        this.canvas.remove();
    }
}

function makeCanvas(w, h) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
}

/**
 * The photo the model edits: the painted area marked in magenta — a
 * translucent tint so the object stays visible underneath (a recolour needs
 * to see what it's recolouring), plus a solid outline so the boundary reads
 * as a drawn marker, not a pink sofa. Magenta because it almost never occurs
 * in a room, so the model can't mistake it for décor, and so any the model
 * leaves behind can be detected (markerResidue).
 */
export async function buildRegionMarkup(srcUrl, strokeMaskUrl) {
    const [img, stroke] = await Promise.all([srcUrl, strokeMaskUrl].map(loadImageEl));
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    const solid = makeCanvas(w, h);
    const sctx = solid.getContext('2d');
    sctx.drawImage(stroke, 0, 0, w, h);
    sctx.globalCompositeOperation = 'source-in';
    sctx.fillStyle = MARKER;
    sctx.fillRect(0, 0, w, h);

    // Outline: the stroke stamped around a circle, minus the stroke itself.
    const ring = makeCanvas(w, h);
    const rctx = ring.getContext('2d');
    const r = Math.max(3, Math.round(Math.min(w, h) * 0.006));
    for (let a = 0; a < 16; a++) {
        const t = (a / 16) * Math.PI * 2;
        rctx.drawImage(solid, Math.round(Math.cos(t) * r), Math.round(Math.sin(t) * r));
    }
    rctx.globalCompositeOperation = 'destination-out';
    rctx.drawImage(solid, 0, 0);

    const out = makeCanvas(w, h);
    const octx = out.getContext('2d');
    octx.drawImage(img, 0, 0, w, h);
    octx.globalAlpha = 0.4;
    octx.drawImage(solid, 0, 0);
    octx.globalAlpha = 1;
    octx.drawImage(ring, 0, 0);
    return out.toDataURL('image/png');
}

/**
 * Images for asking a vision model what the user selected: the whole photo
 * with the marker (so it can see where), and a close-up of the clean photo
 * around the strokes (so it sees the object's real colours, not the tint).
 * Both are small JPEGs. Returns null when nothing is painted.
 */
export async function buildRegionLookup(srcUrl, strokeMaskUrl) {
    const [img, stroke, markedUrl] = await Promise.all([
        loadImageEl(srcUrl),
        loadImageEl(strokeMaskUrl),
        buildRegionMarkup(srcUrl, strokeMaskUrl),
    ]);
    const W = img.naturalWidth;
    const H = img.naturalHeight;

    // Bounding box of the strokes, found on a small grid.
    const s = Math.min(1, 256 / Math.max(W, H));
    const w = Math.max(1, Math.round(W * s));
    const h = Math.max(1, Math.round(H * s));
    const grid = makeCanvas(w, h).getContext('2d', { willReadFrequently: true });
    grid.drawImage(stroke, 0, 0, w, h);
    const a = grid.getImageData(0, 0, w, h).data;
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (a[(y * w + x) * 4 + 3] > 127) {
                if (x < x0) x0 = x; if (x > x1) x1 = x;
                if (y < y0) y0 = y; if (y > y1) y1 = y;
            }
        }
    }
    if (x1 < 0) return null;

    const shrink = (source, sx, sy, sw, sh, max) => {
        const k = Math.min(1, max / Math.max(sw, sh));
        const c = makeCanvas(Math.max(1, Math.round(sw * k)), Math.max(1, Math.round(sh * k)));
        c.getContext('2d').drawImage(source, sx, sy, sw, sh, 0, 0, c.width, c.height);
        return c.toDataURL('image/jpeg', 0.85);
    };

    // Pad the box generously: a stroke often covers only part of the object.
    const bx = x0 / s, by = y0 / s, bw = (x1 - x0 + 1) / s, bh = (y1 - y0 + 1) / s;
    const pad = Math.max(bw, bh);
    const cx = Math.max(0, bx - pad);
    const cy = Math.max(0, by - pad);
    const cw = Math.min(W, bx + bw + pad) - cx;
    const ch = Math.min(H, by + bh + pad) - cy;

    const marked = await loadImageEl(markedUrl);
    return {
        marked: shrink(marked, 0, 0, W, H, 1024),
        crop: shrink(img, cx, cy, cw, ch, 768),
    };
}

const MARKER = 'rgb(255, 0, 255)';

/** Strongly magenta-ish: hue ~285–335°, saturated, not dark. */
function isMarkerColour(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max < 90 || max - min < 0.38 * max) return false;
    if (g !== min) return false;
    // Red and blue both well above green, and close to each other.
    return r - g > 60 && b - g > 60 && Math.abs(r - b) < 0.45 * max;
}

/**
 * How much of the marker the model left in its output: the fraction of the
 * painted area (plus the outline around it) that is magenta in the edit but
 * wasn't in the original. A model that returns the marked photo as-is scores
 * high here while looking "changed" to regionKeepMask, so this is the only
 * way to catch it. Pure function over RGBA arrays.
 */
export function markerResidue(orig, edit, stroke, w, h) {
    const near = dilate(Uint8Array.from({ length: w * h }, (_, i) => (stroke[i * 4 + 3] > 127 ? 1 : 0)), w, h, 2);
    let area = 0;
    let left = 0;
    for (let i = 0; i < w * h; i++) {
        if (!near[i]) continue;
        area++;
        const j = i * 4;
        if (isMarkerColour(edit[j], edit[j + 1], edit[j + 2])
            && !isMarkerColour(orig[j], orig[j + 1], orig[j + 2])) left++;
    }
    return area ? left / area : 0;
}

// ── Change detection ──────────────────────────────────────────────────────
// Small binary-image helpers on a low-resolution grid. Low resolution is a
// feature here: it averages away the re-encoding noise every generative edit
// leaves behind, and keeps the flood fill cheap.

const WORK_SIZE = 384;

/** Count of set cells in a (2r+1)² window around each cell. */
function windowCount(src, w, h, r) {
    const rows = new Uint16Array(w * h);
    for (let y = 0; y < h; y++) {
        const o = y * w;
        let acc = 0;
        for (let x = -r; x < w; x++) {
            if (x + r < w) acc += src[o + x + r];
            if (x - r - 1 >= 0) acc -= src[o + x - r - 1];
            if (x >= 0) rows[o + x] = acc;
        }
    }
    const out = new Uint16Array(w * h);
    for (let x = 0; x < w; x++) {
        let acc = 0;
        for (let y = -r; y < h; y++) {
            if (y + r < h) acc += rows[(y + r) * w + x];
            if (y - r - 1 >= 0) acc -= rows[(y - r - 1) * w + x];
            if (y >= 0) out[y * w + x] = acc;
        }
    }
    return out;
}
const dilate = (src, w, h, r) => windowCount(src, w, h, r).map((c) => (c > 0 ? 1 : 0));
const erode = (src, w, h, r) => {
    const inv = src.map((v) => 1 - v);
    return dilate(inv, w, h, r).map((v) => 1 - v);
};
const openMask = (m, w, h, r) => dilate(erode(m, w, h, r), w, h, r);
const closeMask = (m, w, h, r) => erode(dilate(m, w, h, r), w, h, r);

/** Every 4-connected component of `mask` that has a cell where `touch` is set. */
function componentsTouching(mask, touch, w, h) {
    const keep = new Uint8Array(w * h);
    const seen = new Uint8Array(w * h);
    const stack = new Int32Array(w * h);
    const members = new Int32Array(w * h);
    for (let start = 0; start < w * h; start++) {
        if (!mask[start] || seen[start]) continue;
        let sp = 0;
        let count = 0;
        let touches = false;
        stack[sp++] = start;
        seen[start] = 1;
        while (sp) {
            const i = stack[--sp];
            members[count++] = i;
            if (touch[i]) touches = true;
            const x = i % w;
            const n = [x > 0 ? i - 1 : -1, x < w - 1 ? i + 1 : -1, i - w, i + w];
            for (const j of n) {
                if (j < 0 || j >= w * h || seen[j] || !mask[j]) continue;
                seen[j] = 1;
                stack[sp++] = j;
            }
        }
        if (touches) for (let k = 0; k < count; k++) keep[members[k]] = 1;
    }
    return keep;
}

/**
 * Label 4-connected components of `mask`. For each: whether it touches
 * `touch`, its size, and its mean colour change (edit − original) — the
 * "kind" of change, used to tell the rest of the target apart from an
 * unrelated edit.
 */
function labelComponents(mask, touch, orig, edit, w, h) {
    const labels = new Int32Array(w * h).fill(-1);
    const stack = new Int32Array(w * h);
    const comps = [];
    for (let start = 0; start < w * h; start++) {
        if (!mask[start] || labels[start] !== -1) continue;
        const id = comps.length;
        const c = { touches: false, size: 0, dr: 0, dg: 0, db: 0 };
        let sp = 0;
        stack[sp++] = start;
        labels[start] = id;
        while (sp) {
            const i = stack[--sp];
            const j = i * 4;
            c.size++;
            c.dr += edit[j] - orig[j];
            c.dg += edit[j + 1] - orig[j + 1];
            c.db += edit[j + 2] - orig[j + 2];
            if (touch[i]) c.touches = true;
            const x = i % w;
            const nb = [x > 0 ? i - 1 : -1, x < w - 1 ? i + 1 : -1, i - w, i + w];
            for (const k of nb) {
                if (k < 0 || k >= w * h || labels[k] !== -1 || !mask[k]) continue;
                labels[k] = id;
                stack[sp++] = k;
            }
        }
        c.dr /= c.size; c.dg /= c.size; c.db /= c.size;
        comps.push(c);
    }
    return { labels, comps };
}

/** Is change `a` the same kind as change `b`? Same direction, similar size. */
function sameKindOfChange(a, b) {
    const ma = Math.hypot(a.dr, a.dg, a.db);
    const mb = Math.hypot(b.dr, b.dg, b.db);
    if (!ma || !mb) return false;
    const cos = (a.dr * b.dr + a.dg * b.dg + a.db * b.db) / (ma * mb);
    const ratio = ma / mb;
    return cos > 0.85 && ratio > 0.5 && ratio < 2;
}

/**
 * Decide which pixels of an edit to keep, at low resolution.
 *
 * object  = strong changes that touch the stroke — the thing the user pointed
 *           at, however much of it they actually painted — plus strong changes
 *           elsewhere of the SAME KIND (same colour shift): the parts of the
 *           target the model reached that aren't connected to the stroke, like
 *           a headboard on the far side of the duvet. A different kind of
 *           change elsewhere is treated as unrelated and restored.
 * grown   = the object plus WEAKER change connected to it — the light a
 *           removed lamp cast on the wall, a shadow, a reflection. Those
 *           change gradually, so a single threshold cut through them and the
 *           restored half showed as a ghost of the object. Growth stops at
 *           any OTHER object the model changed, so it can't hop across.
 * margin  = the keep area is pushed slightly past the object's edge, so the
 *           feathered transition lands on background the model left alone.
 *           Feathering exactly on the edge blended the original's outline
 *           back in.
 *
 * Both thresholds adapt to the edit's noise floor: a model that re-renders
 * the whole frame slightly differently raises them with it. If growth still
 * runs away across the frame, only the object is kept.
 *
 * Pure function over pixel arrays so it can be tested without a browser.
 */
export function regionKeepMask(orig, edit, stroke, w, h) {
    const n = w * h;
    const diff = new Uint8Array(n);
    const hist = new Uint32Array(256);
    for (let i = 0; i < n; i++) {
        const j = i * 4;
        const d = Math.max(
            Math.abs(orig[j] - edit[j]),
            Math.abs(orig[j + 1] - edit[j + 1]),
            Math.abs(orig[j + 2] - edit[j + 2]),
        );
        diff[i] = d;
        hist[d]++;
    }
    let acc = 0;
    let median = 0;
    for (let v = 0; v < 256; v++) { acc += hist[v]; if (acc >= n / 2) { median = v; break; } }
    const high = Math.max(24, median * 3);
    const low = Math.max(10, Math.round(median * 1.6) + 4);

    let strong = new Uint8Array(n);
    let weak = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
        strong[i] = diff[i] > high ? 1 : 0;
        weak[i] = diff[i] > low ? 1 : 0;
    }
    // Open: drop speckle and the thin lines a 1–2px misalignment draws along
    // every edge. Close: fill the gaps a textured surface leaves in a change.
    strong = closeMask(openMask(strong, w, h, 1), w, h, 3);
    weak = closeMask(openMask(weak, w, h, 1), w, h, 2);

    const s = new Uint8Array(n);
    let strokeCount = 0;
    let strokeChanged = 0;
    for (let i = 0; i < n; i++) {
        if (stroke[i * 4 + 3] > 127) {
            s[i] = 1;
            strokeCount++;
            if (diff[i] > high) strokeChanged++;
        }
    }
    const near = dilate(s, w, h, 4);
    const { labels, comps } = labelComponents(strong, near, orig, edit, w, h);

    // The target is every strong change touching the stroke, PLUS any other
    // strong change of the same kind: the model applied the instruction to
    // the whole object, and the parts it reached may not be connected (a
    // duvet sits between a bed's footboard and its headboard). Cutting those
    // off left half-recoloured furniture.
    let targetSize = 0;
    const target = { dr: 0, dg: 0, db: 0 };
    for (const c of comps) if (c.touches) {
        target.dr += c.dr * c.size; target.dg += c.dg * c.size; target.db += c.db * c.size;
        targetSize += c.size;
    }
    if (targetSize) { target.dr /= targetSize; target.dg /= targetSize; target.db /= targetSize; }
    const keepComp = comps.map((c) => c.touches || (targetSize > 0 && sameKindOfChange(c, target)));

    const object = new Uint8Array(n);
    const others = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
        if (labels[i] < 0) continue;
        if (keepComp[labels[i]]) object[i] = 1;
        else others[i] = 1;
    }
    // A DIFFERENT kind of change elsewhere is a wall the growth can't cross.
    // Without it, faint re-render changes (a window's view redrawn slightly
    // differently) bridged the gap and dragged an unrelated change in with ours.
    const barrier = dilate(others, w, h, 3);

    const weakOrObject = new Uint8Array(n);
    for (let i = 0; i < n; i++) weakOrObject[i] = (weak[i] && !barrier[i]) || object[i] ? 1 : 0;
    const grown = componentsTouching(weakOrObject, object, w, h);

    let objectCount = 0;
    let grownCount = 0;
    for (let i = 0; i < n; i++) { objectCount += object[i]; grownCount += grown[i]; }
    const runaway = grownCount > n * 0.5 && objectCount < n * 0.3;

    let keep = new Uint8Array(n);
    for (let i = 0; i < n; i++) keep[i] = (runaway ? object[i] : grown[i]) | s[i];
    keep = closeMask(keep, w, h, 2);
    const margin = Math.max(2, Math.round(Math.min(w, h) * 0.015));
    keep = dilate(keep, w, h, margin);
    // …but the margin must not spill onto another object the model changed,
    // or it paints a sliver of that change along the object's edge.
    const fence = dilate(others, w, h, margin);
    for (let i = 0; i < n; i++) if (fence[i] && !s[i]) keep[i] = 0;
    // Stay off the outermost cells so the upscaled, blurred mask fades in
    // rather than ending in a hard line at the frame edge.
    for (let x = 0; x < w; x++) { keep[x] = 0; keep[(h - 1) * w + x] = 0; }
    for (let y = 0; y < h; y++) { keep[y * w] = 0; keep[y * w + w - 1] = 0; }

    return {
        keep,
        strokeChanged: strokeCount ? strokeChanged / strokeCount : 0,
        threshold: high,
        low,
        runaway,
    };
}

/**
 * Put a "change this" edit back into the original.
 *
 * Keeps what the model changed on the object the user pointed at, and
 * restores everything else exactly. Model-agnostic, so it works on every tier.
 *
 * @param originalSrc   the full image the user painted on
 * @param editedSrc     what the model returned (any size; scaled to fit)
 * @param strokeMaskUrl the painted area at natural size (opaque = painted)
 * @returns {{ url: string, strokeChanged: number, markerLeft: number }} —
 *   strokeChanged is the fraction of the painted area the model actually
 *   changed; near zero means it ignored the instruction. markerLeft is the
 *   fraction still showing the magenta marker (markerResidue). On any
 *   failure, the raw edit is returned.
 */
export async function compositeRegionEdit(originalSrc, editedSrc, strokeMaskUrl) {
    try {
        const [original, edited, stroke] = await Promise.all(
            [originalSrc, editedSrc, strokeMaskUrl].map(loadImageEl),
        );
        const W = original.naturalWidth;
        const H = original.naturalHeight;
        if (!W || !H) return { url: editedSrc, strokeChanged: 1, markerLeft: 0 };

        const s = Math.min(1, WORK_SIZE / Math.max(W, H));
        const w = Math.max(8, Math.round(W * s));
        const h = Math.max(8, Math.round(H * s));
        const grab = (img, blur) => {
            const c = makeCanvas(w, h);
            const x = c.getContext('2d', { willReadFrequently: true });
            if (blur) x.filter = `blur(${blur}px)`;
            x.drawImage(img, 0, 0, w, h);
            return x.getImageData(0, 0, w, h).data;
        };
        const [o, e, st] = [grab(original, 1), grab(edited, 1), grab(stroke, 0)];
        const { keep, strokeChanged } = regionKeepMask(o, e, st, w, h);
        const markerLeft = markerResidue(o, e, st, w, h);

        // Keep-mask → alpha, upscaled to full size with a feathered edge.
        const small = makeCanvas(w, h);
        const sctx = small.getContext('2d');
        const id = sctx.createImageData(w, h);
        for (let i = 0; i < w * h; i++) id.data[i * 4 + 3] = keep[i] ? 255 : 0;
        sctx.putImageData(id, 0, 0);
        const alpha = makeCanvas(W, H);
        const actx = alpha.getContext('2d');
        actx.filter = `blur(${Math.max(2, Math.round(Math.min(W, H) * 0.006))}px)`;
        actx.drawImage(small, 0, 0, W, H);

        const layer = makeCanvas(W, H);
        const lctx = layer.getContext('2d');
        lctx.drawImage(edited, 0, 0, W, H);
        lctx.globalCompositeOperation = 'destination-in';
        lctx.drawImage(alpha, 0, 0);

        const out = makeCanvas(W, H);
        const octx = out.getContext('2d');
        octx.drawImage(original, 0, 0, W, H);
        octx.drawImage(layer, 0, 0);
        return { url: out.toDataURL('image/png'), strokeChanged, markerLeft };
    } catch (err) {
        // A failed composite must never lose a generation the user paid for.
        console.warn('[mask] composite failed, showing the raw result:', err);
        return { url: editedSrc, strokeChanged: 1, markerLeft: 0 };
    }
}

/**
 * Put a "keep this" edit back: the edit everywhere except the painted area,
 * which is restored exactly through a feathered mask.
 *
 * @param maskUrl full-size alpha from toCompositeMaskDataUrl (opaque = edit)
 * @returns a PNG data URL, or editedSrc unchanged if anything fails
 */
export async function compositeMaskedResult(originalSrc, editedSrc, maskUrl) {
    try {
        const [original, edited, mask] = await Promise.all(
            [originalSrc, editedSrc, maskUrl].map(loadImageEl),
        );
        const w = original.naturalWidth;
        const h = original.naturalHeight;
        if (!w || !h) return editedSrc;
        const layer = makeCanvas(w, h);
        const lctx = layer.getContext('2d');
        lctx.drawImage(edited, 0, 0, w, h);
        lctx.globalCompositeOperation = 'destination-in';
        lctx.drawImage(mask, 0, 0, w, h);
        const out = makeCanvas(w, h);
        const octx = out.getContext('2d');
        octx.drawImage(original, 0, 0, w, h);
        octx.drawImage(layer, 0, 0);
        return out.toDataURL('image/png');
    } catch (err) {
        console.warn('[mask] composite failed, showing the raw result:', err);
        return editedSrc;
    }
}

function loadImageEl(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('image load failed'));
        img.src = src;
    });
}
