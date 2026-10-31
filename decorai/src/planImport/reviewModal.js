// "Review imported layers" step (Robin-style): the drawing is shown exactly as imported,
// colored by what each layer is. The user can toggle layers, change a layer's category and
// edit room names while (or after) the vision model reviews them. Nothing is traced.
import { CATEGORIES, HIDDEN_BY_DEFAULT } from './groups.js';
import { setPlanSize } from './index.js';

const COLORS = {
    wall: '#2f2b27', door: '#1f9d55', window: '#2f6fe0', furniture: '#d97706',
    stairs: '#7c3aed', detail: '#8b8f97', text: '#6b7280', annotation: '#b9bdc4'
};
const ORDER = Object.fromEntries(CATEGORIES.map((c, i) => [c.id, i]));

const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const r1 = (v) => Math.round(v * 100) / 100;

/**
 * @param analysis   from analyzePlanFile (groups/roomLabels are edited in place)
 * @param aiPromise  promise of the AI review (resolves after classifyWithAI updated `analysis`), or null
 * @returns Promise<{ convertFurniture: boolean } | null>  null when cancelled
 */
export function openPlanReview(analysis, aiPromise) {
    return new Promise((resolve) => {
        const { prims, groups } = analysis;
        const hasBlocks = groups.some(g => g.kind === 'block');
        const prevFocus = document.activeElement;

        const modal = document.createElement('div');
        modal.className = 'modal show plan-review-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'plan-review-title');
        modal.innerHTML = `
            <div class="modal-content plan-review-content">
                <div class="modal-header">
                    <div>
                        <h2 id="plan-review-title">Review imported layers</h2>
                        <p class="plan-review-subtitle">${esc(analysis.fileName || '')} · ${groups.length} layers</p>
                    </div>
                    <button type="button" class="close-modal-btn" data-action="cancel" aria-label="Cancel import">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                <div class="modal-body plan-review-body">
                    <div class="plan-review-side">
                        <div class="plan-review-status" aria-live="polite"></div>
                        ${analysis.sizeFt ? `
                        <h3 class="plan-review-section-title" id="plan-review-size-title">Size</h3>
                        <div class="plan-review-size" role="group" aria-labelledby="plan-review-size-title">
                            <label>Width <input type="number" inputmode="decimal" min="1" max="2000" step="0.1" data-dim="w"> ft</label>
                            <span aria-hidden="true">×</span>
                            <label>Depth <input type="number" inputmode="decimal" min="1" max="2000" step="0.1" data-dim="h"> ft</label>
                        </div>
                        <p class="plan-review-hint plan-review-size-note"></p>` : ''}
                        <h3 class="plan-review-section-title">Layers</h3>
                        ${groups.some(g => g.objects?.length) ? '<p class="plan-review-hint">Mixed layers are split into objects that are labeled one by one. Click any object in the preview to change it.</p>' : ''}
                        <ul class="plan-review-layers"></ul>
                        <h3 class="plan-review-section-title">Room names</h3>
                        <ul class="plan-review-rooms"></ul>
                        ${hasBlocks ? `<label class="plan-review-option"><input type="checkbox" data-role="convert" checked> Turn furniture blocks into editable furniture</label>` : ''}
                    </div>
                    <div class="plan-review-preview">
                        <svg class="plan-review-svg" role="img" aria-label="Preview of the imported drawing. Click an object to change what it is."></svg>
                        <ul class="plan-review-legend"></ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="secondary-btn" data-action="cancel">Cancel</button>
                    <button type="button" class="primary-btn" data-action="confirm" data-initial-focus>Import layout</button>
                </div>
            </div>`;
        document.body.appendChild(modal);

        const statusEl = modal.querySelector('.plan-review-status');
        const layersEl = modal.querySelector('.plan-review-layers');
        const roomsEl = modal.querySelector('.plan-review-rooms');
        const svg = modal.querySelector('.plan-review-svg');
        const legendEl = modal.querySelector('.plan-review-legend');
        const confirmBtn = modal.querySelector('[data-action="confirm"]');

        // ── preview ────────────────────────────────────────────────────
        const b = bounds(prims);
        const pad = Math.max(b.maxX - b.minX, b.maxY - b.minY) * 0.02;
        svg.setAttribute('viewBox', `${r1(b.minX - pad)} ${r1(b.minY - pad)} ${r1(b.maxX - b.minX + pad * 2)} ${r1(b.maxY - b.minY + pad * 2)}`);
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        const groupEls = new Map();
        for (const g of [...groups].sort((a, c) => (a.category === 'wall') - (c.category === 'wall'))) {
            const el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            el.dataset.id = g.id;
            el.innerHTML = groupMarkup(prims, g);
            svg.appendChild(el);
            groupEls.set(g.id, el);
        }

        // ── click an object in the preview to relabel just that object ──
        const objById = new Map(groups.flatMap(g => (g.objects || []).map(o => [o.id, { o, g }])));
        const popover = document.createElement('div');
        popover.className = 'plan-review-popover';
        popover.hidden = true;
        popover.innerHTML = `<label><span class="plan-review-popover-title"></span>
            <select aria-label="Category for this object">${CATEGORIES.filter(c => c.id !== 'text').map(c => `<option value="${c.id}">${esc(c.label)}</option>`).join('')}</select></label>`;
        modal.querySelector('.plan-review-preview').appendChild(popover);
        let popTarget = null;
        svg.addEventListener('click', (e) => {
            const el = e.target.closest('[data-obj]');
            if (!el) { popover.hidden = true; return; }
            const hit = objById.get(el.dataset.obj);
            if (!hit) return;
            popTarget = hit;
            const box = modal.querySelector('.plan-review-preview').getBoundingClientRect();
            popover.style.left = `${Math.min(e.clientX - box.left + 8, box.width - 220)}px`;
            popover.style.top = `${Math.min(e.clientY - box.top + 8, box.height - 90)}px`;
            popover.querySelector('.plan-review-popover-title').textContent = `${hit.o.id} · ${hit.o.sizeFt.w} × ${hit.o.sizeFt.h} ft${hit.o.aiCategory ? ' · ✨ AI' : ''}`;
            popover.querySelector('select').value = hit.o.category || hit.g.category;
            popover.hidden = false;
            popover.querySelector('select').focus();
        });
        popover.querySelector('select').addEventListener('change', (e) => {
            if (!popTarget) return;
            popTarget.o.category = e.target.value;
            popTarget.o.userSet = true;
            popover.hidden = true;
            refresh();
        });

        // ── layer rows ─────────────────────────────────────────────────
        const options = CATEGORIES.map(c => `<option value="${c.id}">${esc(c.label)}</option>`).join('');
        const rowFor = new Map();
        const sorted = () => [...groups].sort((a, c) => (ORDER[a.category] - ORDER[c.category]) || (c.lengthFt - a.lengthFt));
        for (const g of groups) {
            const li = document.createElement('li');
            li.className = 'plan-review-layer';
            li.dataset.id = g.id;
            li.innerHTML = `
                <button type="button" class="plan-review-eye" aria-label="Show ${esc(g.name)}" aria-pressed="true">
                    <svg class="eye-on" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg class="eye-off" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </button>
                <span class="plan-review-swatch" aria-hidden="true"></span>
                <span class="plan-review-name">
                    <span class="plan-review-label">${esc(g.name)}</span>
                    <span class="plan-review-meta">${esc(metaText(g))}</span>
                </span>
                <span class="plan-review-ai" title="Set by AI review" aria-label="Set by AI review" hidden>✨</span>
                <select class="plan-review-select" aria-label="Category for ${esc(g.name)}">${options}</select>`;
            rowFor.set(g.id, li);
            li.querySelector('.plan-review-eye').addEventListener('click', () => {
                g.visible = !g.visible;
                g.userSet = true;
                refresh();
            });
            li.querySelector('select').addEventListener('change', (e) => {
                g.category = e.target.value;
                g.visible = !HIDDEN_BY_DEFAULT.has(g.category);
                g.userSet = true;
                // choosing a category for the layer applies to everything in it
                for (const o of g.objects || []) { o.category = null; o.userSet = true; }
                refresh();
            });
            // spotlight this layer in the preview while the row is pointed at or tabbed to
            const spot = (on) => {
                groupEls.get(g.id)?.classList.toggle('is-hot', on);
                svg.classList.toggle('has-hot', !!svg.querySelector(':scope > .is-hot'));
            };
            li.addEventListener('mouseenter', () => spot(true));
            li.addEventListener('mouseleave', () => spot(li.matches(':focus-within:has(:focus-visible)')));
            li.addEventListener('focusin', (e) => { if (e.target.matches(':focus-visible')) spot(true); });
            li.addEventListener('focusout', () => spot(li.matches(':hover')));
        }

        // ── overall size: shows the scale that was read, and fixes it when it's wrong ──
        const sizeInputs = [...modal.querySelectorAll('.plan-review-size input')];
        const sizeNote = modal.querySelector('.plan-review-size-note');
        function renderSize() {
            if (!analysis.sizeFt) return;
            for (const inp of sizeInputs) if (document.activeElement !== inp) inp.value = analysis.sizeFt[inp.dataset.dim];
            const { source = '', confidence } = analysis.scale;
            const unsure = confidence === 'low' || confidence === 'none';
            sizeNote.classList.toggle('is-warn', unsure);
            sizeNote.textContent = source === 'size you entered' ? 'Scaled to the size you entered.'
                : unsure ? `The scale is a guess (${source}). Type the real width or depth and the rest scales to match.`
                    : `Scale from the ${source === 'file units' ? 'file’s units' : source}. If the size is off, type the real width or depth.`;
        }
        for (const inp of sizeInputs) {
            inp.addEventListener('change', () => {
                const v = parseFloat(inp.value);
                if (v > 0) setPlanSize(analysis, inp.dataset.dim, v);
                renderSize();
            });
        }

        function renderRooms() {
            roomsEl.innerHTML = '';
            if (!analysis.roomLabels.length) {
                roomsEl.innerHTML = `<li class="plan-review-empty">No room names found.</li>`;
                return;
            }
            analysis.roomLabels.forEach((r) => {
                const li = document.createElement('li');
                li.className = 'plan-review-room';
                const original = prims.texts[r.index]?.text || '';
                li.innerHTML = `
                    <input type="checkbox" ${r.excluded ? '' : 'checked'} aria-label="Use “${esc(r.name)}” as a room name">
                    <input type="text" class="plan-review-room-name" value="${esc(r.name)}" aria-label="Room name (drawing says “${esc(original)}”)">`;
                li.querySelector('[type="checkbox"]').addEventListener('change', (e) => { r.excluded = !e.target.checked; });
                li.querySelector('[type="text"]').addEventListener('input', (e) => { r.name = e.target.value; });
                roomsEl.appendChild(li);
            });
        }

        function refresh() {
            layersEl.innerHTML = '';
            for (const g of sorted()) {
                const li = rowFor.get(g.id);
                li.classList.toggle('is-hidden', !g.visible);
                const eye = li.querySelector('.plan-review-eye');
                eye.setAttribute('aria-pressed', String(g.visible));
                eye.setAttribute('aria-label', `${g.visible ? 'Hide' : 'Show'} ${g.name}`);
                li.querySelector('.plan-review-swatch').style.background = COLORS[g.category];
                li.querySelector('select').value = g.category;
                li.querySelector('.plan-review-ai').hidden = !(g.aiCategory && g.aiCategory === g.category);
                layersEl.appendChild(li);
                const el = groupEls.get(g.id);
                el.style.display = g.visible ? '' : 'none';
                el.setAttribute('class', `pr-cat-${g.category}${el.classList.contains('is-hot') ? ' is-hot' : ''}`);
                for (const o of g.objects || []) {
                    const oe = el.querySelector(`[data-obj="${o.id}"]`);
                    if (!oe) continue;
                    const cat = o.category || g.category;
                    oe.setAttribute('class', `pr-obj pr-cat-${cat}${HIDDEN_BY_DEFAULT.has(cat) ? ' is-noise' : ''}`);
                }
                li.querySelector('.plan-review-meta').textContent = metaText(g);
            }
            // texts the AI marked as annotation are hidden in the preview too
            svg.querySelectorAll('text[data-t]').forEach(t => {
                const i = +t.dataset.t;
                const isRoom = analysis.roomLabels.some(r => r.index === i && !r.excluded);
                t.classList.toggle('is-room', isRoom);
                t.style.display = analysis.hiddenTexts?.has(i) ? 'none' : '';
            });
            const used = [...new Set(groups.filter(g => g.visible).flatMap(g => [g.category, ...(g.objects || []).map(o => o.category).filter(Boolean)]))]
                .filter(c => !HIDDEN_BY_DEFAULT.has(c)).sort((a, c) => ORDER[a] - ORDER[c]);
            legendEl.innerHTML = used.map(c => `<li><span style="background:${COLORS[c]}"></span>${esc(CATEGORIES.find(x => x.id === c).label)}</li>`).join('');
        }

        function setStatus(kind, text) {
            statusEl.className = `plan-review-status is-${kind}`;
            statusEl.innerHTML = (kind === 'busy' ? '<span class="plan-review-spinner" aria-hidden="true"></span>' : kind === 'ai' ? '<span aria-hidden="true">✨</span>' : '') + `<span>${esc(text)}</span>`;
        }

        renderSize();
        renderRooms();
        refresh();
        let closed = false;
        if (aiPromise) {
            setStatus('busy', 'AI is reviewing the layers… you can start adjusting meanwhile.');
            aiPromise.then(() => {
                if (closed) return;
                const changed = groups.filter(g => g.aiCategory && g.aiCategory !== g.heuristicCategory).length;
                setStatus('ai', `Reviewed by AI. Walls, doors and windows are detected and the noise is hidden${changed ? ` (${changed} layer${changed === 1 ? '' : 's'} re-labeled)` : ''}. Check anything that looks off.`);
                renderRooms();
                refresh();
            }).catch((err) => {
                if (closed) return;
                setStatus('warn', `AI review unavailable (${err?.message || 'error'}). Showing automatic guesses.`);
            });
        } else {
            setStatus('warn', 'Showing automatic guesses. Check the layer categories.');
        }

        const close = (result) => {
            if (closed) return;
            closed = true;
            document.removeEventListener('keydown', onKey, true);
            modal.remove();
            prevFocus?.focus?.();
            resolve(result);
        };
        const onKey = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault(); e.stopPropagation();
                if (!popover.hidden) { popover.hidden = true; return; }
                close(null);
            }
            if (e.key === 'Tab') trapFocus(modal, e);
        };
        document.addEventListener('keydown', onKey, true);
        modal.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]')?.dataset.action;
            if (action === 'cancel' || e.target === modal) close(null);
            if (action === 'confirm') {
                analysis.roomLabels = analysis.roomLabels.filter(r => !r.excluded && r.name.trim());
                close({ convertFurniture: !!modal.querySelector('[data-role="convert"]')?.checked });
            }
        });
        confirmBtn.focus();
    });
}

function trapFocus(root, e) {
    const els = [...root.querySelectorAll('button, input, select, [tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled && el.offsetParent !== null);
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function metaText(g) {
    if (g.objects && g.objects.length) {
        const counts = {};
        for (const o of g.objects) { const c = o.category || g.category; counts[c] = (counts[c] || 0) + 1; }
        const label = (c) => CATEGORIES.find(x => x.id === c)?.label.split(' ')[0].toLowerCase() || c;
        const parts = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([c, n]) => `${n} ${label(c)}`);
        return `${g.objects.length} objects · ${parts.join(', ')}`;
    }
    if (g.kind === 'block') return `Block${g.instances ? ` ×${g.instances}` : ''}${g.sizeFt ? ` · ${g.sizeFt.w}×${g.sizeFt.h} ft` : ''}`;
    if (g.kind === 'text') return `${g.texts.length} text item${g.texts.length === 1 ? '' : 's'}`;
    if (g.kind === 'detected') return `Found by their tread pattern · ${g.segments.length} lines`;
    const n = g.segments.length + g.arcs.length + (g.curves?.length || 0);
    return `${g.kind === 'layer' ? 'CAD layer' : 'Drawing style'} · ${n} shape${n === 1 ? '' : 's'}`;
}

function bounds(prims) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const add = (x, y) => { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; };
    for (const s of prims.segments) { add(s.x1, s.y1); add(s.x2, s.y2); }
    for (const a of prims.arcs) { add(a.sx, a.sy); add(a.ex, a.ey); }
    if (!isFinite(minX)) return { minX: 0, minY: 0, maxX: 1, maxY: 1 };
    return { minX, minY, maxX, maxY };
}

function pathFor(prims, sel) {
    let d = '';
    for (const i of sel.segments) {
        const s = prims.segments[i];
        d += `M${r1(s.x1)} ${r1(s.y1)}L${r1(s.x2)} ${r1(s.y2)}`;
    }
    for (const i of sel.arcs) {
        const a = prims.arcs[i];
        const cx = 2 * a.mx - (a.sx + a.ex) / 2, cy = 2 * a.my - (a.sy + a.ey) / 2;
        d += `M${r1(a.sx)} ${r1(a.sy)}Q${r1(cx)} ${r1(cy)} ${r1(a.ex)} ${r1(a.ey)}`;
    }
    for (const i of sel.curves || []) {
        const c = prims.curves[i];
        d += `M${r1(c.x0)} ${r1(c.y0)}C${r1(c.x1)} ${r1(c.y1)} ${r1(c.x2)} ${r1(c.y2)} ${r1(c.x3)} ${r1(c.y3)}`;
    }
    return d;
}

function groupMarkup(prims, g) {
    if (g.objects && g.objects.length) {
        // each object is its own element so it can be colored and relabeled on its own
        const inObj = { segments: new Set(), arcs: new Set(), curves: new Set() };
        let out = '';
        for (const o of g.objects) {
            o.segments.forEach(i => inObj.segments.add(i)); o.arcs.forEach(i => inObj.arcs.add(i)); o.curves.forEach(i => inObj.curves.add(i));
            const d = pathFor(prims, o);
            const b = o.bbox, pad = Math.max(b.maxX - b.minX, b.maxY - b.minY) * 0.05 + 1e-3;
            out += `<g data-obj="${o.id}"><rect class="pr-hit" x="${r1(b.minX - pad)}" y="${r1(b.minY - pad)}" width="${r1(b.maxX - b.minX + pad * 2)}" height="${r1(b.maxY - b.minY + pad * 2)}"/>${d ? `<path d="${d}" vector-effect="non-scaling-stroke"/>` : ''}</g>`;
        }
        const rest = {
            segments: g.segments.filter(i => !inObj.segments.has(i)),
            arcs: g.arcs.filter(i => !inObj.arcs.has(i)),
            curves: (g.curves || []).filter(i => !inObj.curves.has(i))
        };
        const d = pathFor(prims, rest);
        return (d ? `<path d="${d}" vector-effect="non-scaling-stroke"/>` : '') + out;
    }
    let d = '';
    for (const i of g.segments) {
        const s = prims.segments[i];
        d += `M${r1(s.x1)} ${r1(s.y1)}L${r1(s.x2)} ${r1(s.y2)}`;
    }
    for (const i of g.arcs) {
        const a = prims.arcs[i];
        const cx = 2 * a.mx - (a.sx + a.ex) / 2, cy = 2 * a.my - (a.sy + a.ey) / 2;
        d += `M${r1(a.sx)} ${r1(a.sy)}Q${r1(cx)} ${r1(cy)} ${r1(a.ex)} ${r1(a.ey)}`;
    }
    for (const i of g.curves || []) {
        const c = prims.curves[i];
        d += `M${r1(c.x0)} ${r1(c.y0)}C${r1(c.x1)} ${r1(c.y1)} ${r1(c.x2)} ${r1(c.y2)} ${r1(c.x3)} ${r1(c.y3)}`;
    }
    let out = d ? `<path d="${d}" vector-effect="non-scaling-stroke"/>` : '';
    for (const i of g.texts) {
        const t = prims.texts[i];
        const rot = t.rotation ? ` transform="rotate(${t.rotation} ${r1(t.x)} ${r1(t.y)})"` : '';
        out += `<text data-t="${i}" x="${r1(t.x)}" y="${r1(t.y)}" font-size="${r1(Math.max(t.height || 0, 1e-3))}"${rot}>${esc(t.text)}</text>`;
    }
    return out;
}
