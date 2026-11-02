// "Check what we found" step: the drawing is shown exactly as imported, colored by what each
// piece was detected as. The legend filters the preview; clicking anything on the plan changes
// what it is, and clicking a room name renames it. The vision model reviews in the background.
// Nothing is traced.
import { CATEGORIES, HIDDEN_BY_DEFAULT } from './groups.js';
import { setPlanSize, buildFromReview } from './index.js';
import { matchFurniture } from './reconstruct.js';
import { FURNITURE_ROOMS, furnitureName, guessFurnitureType, fitsFurniture } from './furniture.js';

const COLORS = {
    wall: '#2f2b27', door: '#1f9d55', window: '#2f6fe0', furniture: '#d97706',
    stairs: '#7c3aed', detail: '#8b8f97', text: '#6b7280', annotation: '#b9bdc4'
};
const ORDER = Object.fromEntries(CATEGORIES.map((c, i) => [c.id, i]));
// what each category is called on its own, for the "what is this?" buttons
const PICK = [
    ['wall', 'Wall'], ['door', 'Door'], ['window', 'Window'], ['furniture', 'Furniture'],
    ['stairs', 'Stairs'], ['detail', 'Other detail'], ['annotation', 'Ignore it']
];
const LEGEND_LABEL = { annotation: 'Notes and dimensions', detail: 'Other detail', furniture: 'Furniture' };
// categories the walls, doors and windows are built from; a disagreement about these matters
const STRUCTURAL = new Set(['wall', 'door', 'window', 'stairs']);

const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const r1 = (v) => Math.round(v * 100) / 100;
const label = (c) => CATEGORIES.find(x => x.id === c)?.label || c;
// "AI thinks this is …" / "Its shape looks like …"
const PHRASE = { wall: 'a wall', door: 'a door', window: 'a window', furniture: 'furniture', stairs: 'stairs', detail: 'drawing detail', annotation: 'a note or dimension', text: 'text' };
const phrase = (c) => PHRASE[c] || c;
const aName = (typeId) => { const n = furnitureName(typeId).toLowerCase(); return `${/^[aeiou]/.test(n) ? 'an' : 'a'} ${n}`; };

/**
 * @param analysis   from analyzePlanFile (groups/objects/roomLabels are edited in place)
 * @param aiPromise  promise of the AI review (resolves after classifyWithAI updated `analysis`), or null
 * @returns Promise<{ convertFurniture: boolean } | null>  null when cancelled
 */
export function openPlanReview(analysis, aiPromise) {
    return new Promise((resolve) => {
        const { prims, groups } = analysis;
        const prevFocus = document.activeElement;

        const modal = document.createElement('div');
        modal.className = 'modal show plan-review-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'plan-review-title');
        modal.innerHTML = `
            <div class="modal-content plan-review-content">
                <div class="modal-header">
                    <div class="plan-review-heading">
                        <h2 id="plan-review-title">Check what we found</h2>
                        <p class="plan-review-subtitle">${esc(analysis.fileName || '')}</p>
                    </div>
                    <div class="plan-review-head-actions">
                        ${analysis.sizeFt ? `
                        <button type="button" class="plan-review-size-btn" aria-expanded="false" aria-controls="plan-review-size-pop">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17 17 3l4 4L7 21z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/></svg>
                            <span class="plan-review-size-text"></span>
                        </button>
                        <div class="plan-review-size-pop" id="plan-review-size-pop" role="group" aria-label="Plan size" hidden>
                            <div class="plan-review-size">
                                <label>Width <input type="number" inputmode="decimal" min="1" max="2000" step="0.1" data-dim="w"> ft</label>
                                <span aria-hidden="true">×</span>
                                <label>Depth <input type="number" inputmode="decimal" min="1" max="2000" step="0.1" data-dim="h"> ft</label>
                            </div>
                            <p class="plan-review-size-note"></p>
                        </div>` : ''}
                        <button type="button" class="close-modal-btn" data-action="cancel" aria-label="Cancel import">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                    </div>
                </div>
                <div class="modal-body plan-review-body">
                    <div class="plan-review-status" aria-live="polite"></div>
                    <div class="plan-review-scale-ask" hidden>
                        <span>No scale was found in this drawing, so the size is a guess.</span>
                        <button type="button" class="secondary-btn" data-action="set-size">Set the size</button>
                    </div>
                    <div class="plan-review-preview">
                        <svg class="plan-review-svg" role="img" aria-label="Preview of the imported drawing. Click anything to change what it is, or a room name to rename it."></svg>
                        <div class="plan-review-popover" role="dialog" aria-label="Change what this is" hidden>
                            <div class="plan-review-pop-head">
                                <span class="plan-review-pop-title"></span>
                                <span class="plan-review-pop-meta"></span>
                            </div>
                            <div class="plan-review-cats" role="group" aria-label="What this is"></div>
                            <div class="plan-review-ftype" hidden>
                                <label for="plan-review-ftype-select">Furniture type</label>
                                <select id="plan-review-ftype-select" class="plan-review-ftype-select"></select>
                                <p class="plan-review-ftype-result" aria-live="polite"></p>
                            </div>
                            <label class="plan-review-similar"><input type="checkbox" checked> <span></span></label>
                            <p class="plan-review-pop-note"></p>
                            <div class="plan-review-pop-step" hidden><span></span><button type="button" class="plan-review-link" data-action="next">Skip</button></div>
                        </div>
                        <div class="plan-review-popover plan-review-room-pop" role="dialog" aria-label="Room name" hidden>
                            <div class="plan-review-room-edit">
                                <label class="plan-review-pop-title" for="plan-review-room-input">Room name</label>
                                <input type="text" id="plan-review-room-input" class="plan-review-room-name" autocomplete="off">
                                <p class="plan-review-room-err" role="alert"></p>
                                <div class="plan-review-pop-actions">
                                    <button type="button" class="plan-review-link" data-action="not-room">Not a room</button>
                                    <button type="button" class="secondary-btn" data-action="room-done">Done</button>
                                </div>
                            </div>
                            <div class="plan-review-room-add">
                                <p class="plan-review-pop-title"></p>
                                <button type="button" class="secondary-btn" data-action="use-room">Use as a room name</button>
                            </div>
                        </div>
                    </div>
                    <div class="plan-review-legend-row">
                        <ul class="plan-review-legend" aria-label="Show or hide on the preview"></ul>
                        <p class="plan-review-hint">Click anything on the plan to change what it is. Click a room name to rename it.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="secondary-btn" data-action="cancel">Cancel</button>
                    <button type="button" class="primary-btn" data-action="confirm" data-initial-focus>Import layout</button>
                </div>
            </div>`;
        document.body.appendChild(modal);

        const $ = (sel) => modal.querySelector(sel);
        const statusEl = $('.plan-review-status');
        const scaleAsk = $('.plan-review-scale-ask');
        const preview = $('.plan-review-preview');
        const svg = $('.plan-review-svg');
        const legendEl = $('.plan-review-legend');
        const pop = $('.plan-review-popover:not(.plan-review-room-pop)');
        const roomPop = $('.plan-review-room-pop');
        const sizeBtn = $('.plan-review-size-btn');
        const sizePop = $('.plan-review-size-pop');
        const confirmBtn = $('[data-action="confirm"]');

        // ── preview ────────────────────────────────────────────────────
        const b = bounds(prims);
        const span = Math.max(b.maxX - b.minX, b.maxY - b.minY);
        const pad = span * 0.02;
        svg.setAttribute('viewBox', `${r1(b.minX - pad)} ${r1(b.minY - pad)} ${r1(b.maxX - b.minX + pad * 2)} ${r1(b.maxY - b.minY + pad * 2)}`);
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        for (const g of [...groups].sort((a, c) => (a.category === 'wall') - (c.category === 'wall'))) {
            const el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            el.dataset.id = g.id;
            el.innerHTML = groupMarkup(prims, g, (b.maxX - b.minX) * (b.maxY - b.minY));
            svg.appendChild(el);
        }
        const rings = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        rings.setAttribute('class', 'pr-rings');
        svg.appendChild(rings);

        const groupById = new Map(groups.map(g => [g.id, g]));
        const objById = new Map(groups.flatMap(g => (g.objects || []).map(o => [o.id, { o, g }])));
        const allObjects = [...objById.values()];
        const units = [...svg.querySelectorAll('.pr-unit')];
        const catOfUnit = (u) => {
            if (u.dataset.obj) { const hit = objById.get(u.dataset.obj); return hit.o.category || hit.g.category; }
            return groupById.get(u.dataset.g)?.category;
        };

        const hiddenCats = new Set(HIDDEN_BY_DEFAULT); // preview filter only; "Ignore it" is what leaves things out
        let hotCat = null;
        let aiDone = false;
        let closed = false;

        // AI and the shape-based guess disagree about something walls, doors or windows are built from
        const isUnsure = (o) => aiDone && !o.userSet && o.aiCategory && o.heuristicCategory
            && o.aiCategory !== o.heuristicCategory && (STRUCTURAL.has(o.aiCategory) || STRUCTURAL.has(o.heuristicCategory));
        const unsureList = () => allObjects.filter(({ o }) => isUnsure(o));

        function refresh() {
            for (const u of units) {
                const cat = catOfUnit(u);
                const cls = ['pr-unit', `pr-cat-${cat}`];
                if (HIDDEN_BY_DEFAULT.has(cat)) cls.push('is-noise');
                if (cat === 'text') cls.push('is-text');
                u.setAttribute('class', cls.join(' '));
                u.style.display = hiddenCats.has(cat) ? 'none' : '';
            }
            applyHot();
            // room names show what they'll be called; notes the AI hid show only with the notes
            svg.querySelectorAll('text[data-t]').forEach(t => {
                const i = +t.dataset.t;
                const room = analysis.roomLabels.find(r => r.index === i && !r.excluded);
                t.classList.toggle('is-room', !!room);
                t.textContent = room ? room.name : prims.texts[i]?.text || '';
                const hidden = !room && analysis.hiddenTexts?.has(i);
                t.classList.toggle('is-noise-text', !!hidden);
                t.style.display = hidden && hiddenCats.has('annotation') ? 'none' : '';
            });
            renderRings();
            renderLegend();
            renderStatus();
        }

        function renderRings() {
            const list = unsureList();
            rings.innerHTML = list.map(({ o }) => {
                const bb = o.bbox;
                const r = Math.max(bb.maxX - bb.minX, bb.maxY - bb.minY) * 0.75 + span * 0.006;
                return `<circle cx="${r1((bb.minX + bb.maxX) / 2)}" cy="${r1((bb.minY + bb.maxY) / 2)}" r="${r1(r)}" vector-effect="non-scaling-stroke"/>`;
            }).join('');
        }

        // ── legend: what was found, with live counts; click to show or hide, point to spotlight ──
        let counts = null;
        function renderLegend() {
            const present = new Set(units.map(catOfUnit).filter(c => c && c !== 'text'));
            if (analysis.hiddenTexts?.size) present.add('annotation');
            const countOf = { wall: counts?.walls, door: counts?.doors, window: counts?.windows, stairs: counts?.stairs, furniture: counts?.furniture };
            // windows (or doors) found inside the wall lines have no layer of their own: count them
            // anyway, as a plain entry with nothing to show or hide
            for (const c of Object.keys(countOf)) if (countOf[c] > 0) present.add(c);
            const cats = [...present].sort((a, c) => ORDER[a] - ORDER[c]);
            const drawn = new Set(units.map(catOfUnit));
            legendEl.innerHTML = cats.map(c => {
                const on = !hiddenCats.has(c);
                const n = countOf[c];
                const name = LEGEND_LABEL[c] || label(c);
                const inner = `<span class="plan-review-swatch" style="--swatch:${COLORS[c]}" aria-hidden="true"></span>${esc(name)}${typeof n === 'number' ? ` <span class="plan-review-count">${n}</span>` : ''}`;
                if (!drawn.has(c) && !(c === 'annotation' && analysis.hiddenTexts?.size)) return `<li><span class="plan-review-chip is-static">${inner}</span></li>`;
                return `<li><button type="button" class="plan-review-chip${on ? '' : ' is-off'}" data-cat="${c}" aria-pressed="${on}">${inner}</button></li>`;
            }).join('');
        }
        legendEl.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-cat]');
            if (!btn) return;
            const c = btn.dataset.cat;
            if (hiddenCats.has(c)) hiddenCats.delete(c); else hiddenCats.add(c);
            if (hiddenCats.has(c) && hotCat === c) hotCat = null;
            refresh();
            legendEl.querySelector(`[data-cat="${c}"]`)?.focus();
        });
        // the spotlight only touches the preview, so the legend under the pointer stays put
        function applyHot() {
            for (const u of units) u.classList.toggle('is-hot', !!hotCat && catOfUnit(u) === hotCat);
            svg.classList.toggle('has-hot', !!hotCat);
        }
        const spot = (c) => { const next = c && !hiddenCats.has(c) ? c : null; if (next !== hotCat) { hotCat = next; applyHot(); } };
        legendEl.addEventListener('mouseover', (e) => spot(e.target.closest('[data-cat]')?.dataset.cat));
        legendEl.addEventListener('mouseleave', () => spot(null));
        legendEl.addEventListener('focusin', (e) => { if (e.target.matches(':focus-visible')) spot(e.target.dataset.cat); });
        legendEl.addEventListener('focusout', () => { if (!legendEl.matches(':hover')) spot(null); });

        // counts come from the same build the import runs, so they match what you'll get
        let countTimer = 0, countSeq = 0;
        function recount() {
            clearTimeout(countTimer);
            countTimer = setTimeout(async () => {
                const seq = ++countSeq;
                try {
                    const { report } = await buildFromReview(analysis, { countsOnly: true });
                    if (seq !== countSeq || closed) return;
                    counts = report;
                    renderLegend();
                } catch (err) { console.warn('Plan review: counting failed', err); }
            }, 150);
        }

        // ── status line ────────────────────────────────────────────────
        let statusKind = aiPromise ? 'busy' : 'warn';
        let statusError = '';
        function renderStatus() {
            const n = unsureList().length;
            let text;
            if (statusKind === 'busy') text = 'AI is checking the drawing. You can start fixing things now.';
            else if (statusKind === 'warn') text = statusError
                ? `AI check unavailable (${statusError}). These are automatic guesses, so check the doors and windows.`
                : 'These are automatic guesses. Check the doors and windows.';
            else text = n ? `AI checked the drawing. ${n} thing${n === 1 ? '' : 's'} could go either way.` : 'AI checked the drawing. Click anything that looks wrong to change it.';
            const icon = statusKind === 'busy' ? '<span class="plan-review-spinner" aria-hidden="true"></span>' : statusKind === 'ai' ? '<span aria-hidden="true">✨</span>' : '';
            statusEl.className = `plan-review-status is-${statusKind}`;
            statusEl.innerHTML = `${icon}<span>${esc(text)}</span>${statusKind === 'ai' && n ? '<button type="button" class="secondary-btn plan-review-status-btn" data-action="walk">Show me</button>' : ''}`;
        }

        // ── click anything to change what it is ────────────────────────
        let target = null;     // { o, g } for an object, { g } for a whole layer
        let walk = null;       // { list, i } while stepping through the unsure ones
        const placeNear = (el, box) => {
            const area = preview.getBoundingClientRect();
            const r = el.getBoundingClientRect();
            box.hidden = false;
            const w = box.offsetWidth, h = box.offsetHeight;
            let x = r.right - area.left + 10;
            if (x + w > area.width - 8) x = r.left - area.left - w - 10;
            if (x < 8) x = Math.min(Math.max(8, r.left - area.left), area.width - w - 8);
            let y = r.top - area.top + r.height / 2 - h / 2;
            y = Math.min(Math.max(8, y), area.height - h - 8);
            box.style.left = `${Math.round(x)}px`;
            box.style.top = `${Math.round(y)}px`;
        };
        const sameSize = (a, c) => {
            const da = [a.sizeFt.w, a.sizeFt.h].sort((x, y) => x - y), dc = [c.sizeFt.w, c.sizeFt.h].sort((x, y) => x - y);
            return da.every((v, i) => Math.abs(v - dc[i]) <= Math.max(0.3, v * 0.1));
        };
        const similarTo = (hit) => allObjects.filter(x => x.o !== hit.o && !x.o.userSet
            && (x.o.category || x.g.category) === (hit.o.category || hit.g.category)
            && x.o.heuristicCategory === hit.o.heuristicCategory && x.o.sizeFt && hit.o.sizeFt && sameSize(x.o, hit.o));

        let targetEl = null;
        function openPop(hit, el, { keepSimilar = false } = {}) {
            const simWas = pop.querySelector('.plan-review-similar input').checked;
            closePops();
            target = hit;
            targetEl = el;
            const cur = hit.o ? (hit.o.category || hit.g.category) : hit.g.category;
            const title = pop.querySelector('.plan-review-pop-title'), meta = pop.querySelector('.plan-review-pop-meta'), note = pop.querySelector('.plan-review-pop-note');
            if (hit.o && isUnsure(hit.o)) {
                title.textContent = `AI thinks this is ${phrase(hit.o.aiCategory)}`;
                meta.textContent = `Its shape looks like ${phrase(hit.o.heuristicCategory)}`;
            } else {
                title.textContent = hit.o ? 'What is this?' : 'What is this layer?';
                meta.textContent = hit.o?.sizeFt ? `${hit.o.sizeFt.w} × ${hit.o.sizeFt.h} ft` : '';
            }
            const shapes = hit.g.segments.length + hit.g.arcs.length + (hit.g.curves?.length || 0);
            note.textContent = hit.o ? '' : `Changes all of “${hit.g.name}” (${shapes} shape${shapes === 1 ? '' : 's'}).`;
            note.hidden = !!hit.o;
            pop.querySelector('.plan-review-cats').innerHTML = PICK.map(([id, name]) => `
                <button type="button" class="plan-review-cat" data-pick="${id}" aria-pressed="${id === cur}">
                    <span class="plan-review-swatch" style="--swatch:${COLORS[id]}" aria-hidden="true"></span>${esc(name)}
                </button>`).join('');
            const similar = hit.o ? similarTo(hit) : [];
            const simLabel = pop.querySelector('.plan-review-similar');
            simLabel.hidden = !similar.length;
            simLabel.querySelector('span').textContent = `Also change ${similar.length} more like this`;
            // ticked for the unsure ones (likely the same mistake); a choice to make for anything else
            simLabel.querySelector('input').checked = keepSimilar ? simWas : !!(hit.o && isUnsure(hit.o));
            const ftype = pop.querySelector('.plan-review-ftype');
            ftype.hidden = cur !== 'furniture';
            if (cur === 'furniture') renderType(hit);
            const step = pop.querySelector('.plan-review-pop-step');
            step.hidden = !walk;
            if (walk) {
                step.querySelector('span').textContent = `${walk.i + 1} of ${walk.list.length}`;
                step.querySelector('button').textContent = hit.o && isUnsure(hit.o) ? 'Skip' : 'Next';
            }
            el.classList.add('is-picked');
            placeNear(el, pop);
            (keepSimilar && cur === 'furniture' ? ftypeSelect : pop.querySelector('[aria-pressed="true"]'))?.focus();
        }

        // ── furniture type: which catalog item a piece becomes ─────────
        const ftypeSelect = pop.querySelector('.plan-review-ftype-select');
        const ftypeResult = pop.querySelector('.plan-review-ftype-result');
        // the type a piece has without a pick of its own: its layer's pick, else the AI's
        const inheritedType = (o, g) => (g.userType && g.furnitureType) || o.aiFurnitureType || (o.category ? null : g.aiFurnitureType) || null;
        // what "Automatic" ends up as: that, else a name written in it or a bed by its shape
        function autoType(hit) {
            const { o, g } = hit;
            if (!o) return g.aiFurnitureType || (g.kind === 'block' ? matchFurniture(g.name) : null);
            const t = inheritedType(o, g);
            if (t) return t;
            try { return guessFurnitureType(o, prims, analysis.scale.feetPerUnit); } catch { return null; }
        }
        function renderType(hit) {
            const x = hit.o || hit.g;
            const auto = autoType(hit);
            const autoName = auto && auto !== 'none' ? ` (${furnitureName(auto)})` : '';
            ftypeSelect.innerHTML = `<option value="">Automatic${esc(autoName)}</option><option value="none">Keep as drawn lines</option>`
                + FURNITURE_ROOMS.map(([room, ids]) => `<optgroup label="${esc(room)}">${ids.map(id => `<option value="${id}">${esc(furnitureName(id))}</option>`).join('')}</optgroup>`).join('');
            ftypeSelect.value = x.userType ? (x.furnitureType || '') : '';
            const chosen = x.userType ? x.furnitureType : auto;
            let text;
            if (chosen === 'none') text = 'Stays as drawn lines.';
            else if (!hit.o) text = chosen ? `Each piece becomes ${aName(chosen)} where it’s the right size.` : 'Each piece gets its own type where one can be found. The rest stay as drawn lines.';
            else if (!chosen) text = 'Stays as drawn lines: no type found. Pick one to make it movable furniture.';
            else if (hit.o.sizeFt && !fitsFurniture(chosen, hit.o.sizeFt.w, hit.o.sizeFt.h)) text = `Stays as drawn lines: it isn’t the size of ${aName(chosen)}.`;
            else text = `Becomes ${aName(chosen)}.`;
            ftypeResult.textContent = text;
        }
        // set (or clear, for "Automatic") the type someone picked
        const setObjectType = (o, g, value) => {
            o.userType = !!value;
            o.furnitureType = value || inheritedType(o, g);
        };
        ftypeSelect.addEventListener('change', () => {
            if (!target) return;
            const value = ftypeSelect.value;
            const { o, g } = target;
            if (o) {
                const sim = pop.querySelector('.plan-review-similar');
                const list = [target, ...(!sim.hidden && sim.querySelector('input').checked ? similarTo(target) : [])];
                for (const x of list) setObjectType(x.o, x.g, value);
            } else {
                g.userType = !!value;
                g.furnitureType = value || g.aiFurnitureType || null; // its pieces follow (buildFromReview)
            }
            renderType(target);
            recount();
        });

        function choose(cat) {
            if (!target) return;
            const { o, g } = target;
            if (o) {
                const sim = pop.querySelector('.plan-review-similar');
                const list = [target, ...(!sim.hidden && sim.querySelector('input').checked ? similarTo(target) : [])];
                for (const x of list) {
                    x.o.category = cat;
                    x.o.userSet = true; // also when it's the same: you confirmed it
                    if (!HIDDEN_BY_DEFAULT.has(cat)) x.g.visible = true;
                }
            } else {
                g.category = cat;
                g.userSet = true;
                g.visible = !HIDDEN_BY_DEFAULT.has(cat) || (g.objects || []).some(x => x.category && !HIDDEN_BY_DEFAULT.has(x.category));
            }
            refresh();
            recount();
            // furniture: stay open so its type can be picked
            if (cat === 'furniture' && targetEl) { openPop(target, targetEl, { keepSimilar: true }); return; }
            nextInWalk();
        }

        function nextInWalk() {
            if (!walk) { closePops(); return; }
            walk.i++;
            // skip ones that got changed along the way ("also change N more")
            while (walk.i < walk.list.length && !isUnsure(walk.list[walk.i].o)) walk.i++;
            const nxt = walk.list[walk.i];
            if (!nxt) { walk = null; closePops(); (statusEl.querySelector('button') || confirmBtn).focus(); return; }
            const el = svg.querySelector(`[data-obj="${CSS.escape(nxt.o.id)}"]`);
            if (el) openPop(nxt, el); else nextInWalk();
        }

        pop.addEventListener('click', (e) => {
            const pick = e.target.closest('[data-pick]');
            if (pick) choose(pick.dataset.pick);
            if (e.target.closest('[data-action="next"]')) nextInWalk();
        });

        // ── room names ─────────────────────────────────────────────────
        let roomIdx = null;
        function openRoom(i, el) {
            closePops();
            roomIdx = i;
            const room = analysis.roomLabels.find(r => r.index === i);
            const isRoom = room && !room.excluded;
            $('.plan-review-room-edit').hidden = !isRoom;
            $('.plan-review-room-add').hidden = isRoom;
            $('.plan-review-room-err').textContent = '';
            if (isRoom) {
                const input = $('.plan-review-room-name');
                input.value = room.name;
                placeNear(el, roomPop);
                input.focus();
                input.select();
            } else {
                roomPop.querySelector('.plan-review-room-add .plan-review-pop-title').textContent = `“${prims.texts[i]?.text || ''}”`;
                placeNear(el, roomPop);
                $('[data-action="use-room"]').focus();
            }
        }
        function saveRoom() {
            const room = analysis.roomLabels.find(r => r.index === roomIdx);
            const name = $('.plan-review-room-name').value.trim();
            if (!name) { $('.plan-review-room-err').textContent = 'Enter a name, or choose Not a room.'; return; }
            if (room) room.name = name;
            closePops();
            refresh();
        }
        $('.plan-review-room-name').addEventListener('input', () => { $('.plan-review-room-err').textContent = ''; });
        $('.plan-review-room-name').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); saveRoom(); } });
        roomPop.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]')?.dataset.action;
            const room = analysis.roomLabels.find(r => r.index === roomIdx);
            if (action === 'room-done') saveRoom();
            if (action === 'not-room' && room) { room.excluded = true; closePops(); refresh(); }
            if (action === 'use-room') {
                if (room) room.excluded = false;
                else analysis.roomLabels.push({ index: roomIdx, name: prims.texts[roomIdx]?.text?.trim() || 'Room', source: 'user' });
                refresh();
                const el = svg.querySelector(`text[data-t="${roomIdx}"]`);
                if (el) openRoom(roomIdx, el);
            }
        });

        function closePops() {
            pop.hidden = true;
            roomPop.hidden = true;
            svg.querySelectorAll('.is-picked').forEach(el => el.classList.remove('is-picked'));
            target = null;
            targetEl = null;
        }

        // where things overlap, the most specific wins: a name, then the smallest object, then the layer
        const area = (o) => (o.bbox.maxX - o.bbox.minX) * (o.bbox.maxY - o.bbox.minY);
        svg.addEventListener('click', (e) => {
            walk = null;
            const hits = document.elementsFromPoint(e.clientX, e.clientY).filter(el => svg.contains(el) && el !== svg);
            const t = hits.find(el => el.matches('text[data-t]'));
            if (t) { openRoom(+t.dataset.t, t); return; }
            const ou = [...new Set(hits.map(el => el.closest('[data-obj]')).filter(Boolean))]
                .sort((x, y) => area(objById.get(x.dataset.obj).o) - area(objById.get(y.dataset.obj).o))[0];
            if (ou) { openPop(objById.get(ou.dataset.obj), ou); return; }
            const gu = hits.map(el => el.closest('[data-g]')).find(el => el && groupById.get(el.dataset.g)?.category !== 'text');
            if (gu) { openPop({ g: groupById.get(gu.dataset.g) }, gu); return; }
            closePops();
        });

        // ── overall size: shows the scale that was read, and fixes it when it's wrong ──
        const sizeInputs = [...modal.querySelectorAll('.plan-review-size input')];
        const sizeNote = $('.plan-review-size-note');
        function renderSize() {
            if (!analysis.sizeFt) return;
            const { w, h } = analysis.sizeFt;
            const { source = '', confidence } = analysis.scale;
            const unsure = confidence === 'low' || confidence === 'none';
            $('.plan-review-size-text').textContent = unsure ? 'Size unknown' : `${w} × ${h} ft`;
            sizeBtn.classList.toggle('is-warn', unsure);
            sizeBtn.setAttribute('aria-label', unsure ? `Plan size is a guess: ${w} by ${h} feet. Change it` : `Plan size ${w} by ${h} feet. Change it`);
            scaleAsk.hidden = !unsure;
            for (const inp of sizeInputs) if (document.activeElement !== inp) inp.value = analysis.sizeFt[inp.dataset.dim];
            sizeNote.classList.toggle('is-warn', unsure);
            sizeNote.textContent = source === 'size you entered' ? 'Scaled to the size you entered.'
                : unsure ? `This is a guess (${source}). Type the real width or depth and the rest scales to match.`
                    : `Scale from the ${source === 'file units' ? 'file’s units' : source}. If it’s off, type the real width or depth.`;
        }
        const toggleSize = (open, focusInput) => {
            if (!sizePop) return;
            sizePop.hidden = !open;
            sizeBtn.setAttribute('aria-expanded', String(open));
            if (open && focusInput) { sizeInputs[0]?.focus(); sizeInputs[0]?.select(); }
        };
        sizeBtn?.addEventListener('click', () => toggleSize(sizePop.hidden, true));
        // typing a size confirms it, even when it's the same as the guess
        for (const inp of sizeInputs) {
            let typed = false;
            const commit = () => {
                if (!typed) return;
                typed = false;
                const v = parseFloat(inp.value);
                if (v > 0) { setPlanSize(analysis, inp.dataset.dim, v); recount(); }
                renderSize();
            };
            inp.addEventListener('input', () => { typed = true; });
            inp.addEventListener('change', commit);
            inp.addEventListener('blur', commit);
            inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); commit(); } });
        }

        renderSize();
        refresh();
        recount();

        if (aiPromise) {
            aiPromise.then(() => {
                if (closed) return;
                aiDone = true;
                statusKind = 'ai';
                refresh();
                recount();
            }).catch((err) => {
                if (closed) return;
                statusKind = 'warn';
                statusError = err?.name === 'AbortError' ? '' : (err?.message || 'error');
                refresh();
            });
        }

        const close = (result) => {
            if (closed) return;
            closed = true;
            clearTimeout(countTimer);
            document.removeEventListener('keydown', onKey, true);
            document.removeEventListener('pointerdown', onOutside, true);
            modal.remove();
            prevFocus?.focus?.();
            resolve(result);
        };
        const onKey = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault(); e.stopPropagation();
                if (!pop.hidden || !roomPop.hidden) { walk = null; closePops(); return; }
                if (sizePop && !sizePop.hidden) { toggleSize(false); sizeBtn.focus(); return; }
                close(null);
            }
            if (e.key === 'Tab') trapFocus(modal, e);
        };
        // the size box closes when you click elsewhere
        const onOutside = (e) => {
            if (sizePop && !sizePop.hidden && !e.target.closest('.plan-review-size-pop, .plan-review-size-btn, [data-action="set-size"]')) toggleSize(false);
        };
        document.addEventListener('keydown', onKey, true);
        document.addEventListener('pointerdown', onOutside, true);
        modal.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]')?.dataset.action;
            if (action === 'cancel' || e.target === modal) close(null);
            if (action === 'set-size') toggleSize(true, true);
            if (action === 'walk') {
                const list = unsureList();
                if (!list.length) return;
                walk = { list, i: 0 };
                const el = svg.querySelector(`[data-obj="${CSS.escape(list[0].o.id)}"]`);
                if (el) openPop(list[0], el);
            }
            if (action === 'confirm') {
                analysis.roomLabels = analysis.roomLabels.filter(r => !r.excluded && r.name.trim());
                // furniture blocks always become editable furniture; hide the Furniture layer to skip them
                close({ convertFurniture: true });
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

// One clickable unit per object, plus one for the rest of the layer. Thin lines get a wider
// invisible copy so they're easy to click.
function groupMarkup(prims, g, planArea) {
    const inObj = { segments: new Set(), arcs: new Set(), curves: new Set() };
    let out = '';
    for (const o of g.objects || []) {
        o.segments.forEach(i => inObj.segments.add(i)); o.arcs.forEach(i => inObj.arcs.add(i)); o.curves.forEach(i => inObj.curves.add(i));
        const d = pathFor(prims, o);
        const bb = o.bbox, pad = Math.max(bb.maxX - bb.minX, bb.maxY - bb.minY) * 0.05 + 1e-3;
        // small things (a door, a sofa) are clickable anywhere in their box; big ones (all the
        // walls at once) only on their lines, so they don't cover everything else
        const small = (bb.maxX - bb.minX) * (bb.maxY - bb.minY) < planArea * 0.15;
        const hit = small
            ? `<rect class="pr-hit" x="${r1(bb.minX - pad)}" y="${r1(bb.minY - pad)}" width="${r1(bb.maxX - bb.minX + pad * 2)}" height="${r1(bb.maxY - bb.minY + pad * 2)}"/>`
            : d ? `<path class="pr-hitline" d="${d}" vector-effect="non-scaling-stroke"/>` : '';
        out += `<g class="pr-unit" data-obj="${esc(o.id)}">${hit}${d ? `<path d="${d}" vector-effect="non-scaling-stroke"/>` : ''}</g>`;
    }
    const rest = {
        segments: g.segments.filter(i => !inObj.segments.has(i)),
        arcs: g.arcs.filter(i => !inObj.arcs.has(i)),
        curves: (g.curves || []).filter(i => !inObj.curves.has(i))
    };
    const d = pathFor(prims, rest);
    let texts = '';
    for (const i of g.texts) {
        const t = prims.texts[i];
        const rot = t.rotation ? ` transform="rotate(${t.rotation} ${r1(t.x)} ${r1(t.y)})"` : '';
        texts += `<text data-t="${i}" x="${r1(t.x)}" y="${r1(t.y)}" font-size="${r1(Math.max(t.height || 0, 1e-3))}"${rot}>${esc(t.text)}</text>`;
    }
    const restMarkup = d || texts
        ? `<g class="pr-unit" data-g="${esc(g.id)}">${d ? `<path class="pr-hitline" d="${d}" vector-effect="non-scaling-stroke"/><path d="${d}" vector-effect="non-scaling-stroke"/>` : ''}${texts}</g>`
        : '';
    return restMarkup + out;
}
