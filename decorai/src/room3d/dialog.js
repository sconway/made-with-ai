// "Render a room" dialog. The whole floor is shown as a small plan; one room is chosen at a
// time, a camera marker shows where the shot is taken from, and the render is built from a 3D
// guide of the entire floor so doorways, windows and neighboring rooms come out right.
import { renderGuide, viewpointsFor, describeRoom, roomBrief } from './scene.js';

export const ROOM_STYLES = [
    { id: 'modern', label: 'Modern', desc: 'Clean lines, a neutral palette', swatches: ['#e7e3dc', '#a89f91', '#2b2a28'],
      prompt: 'modern contemporary interior design, clean lines, neutral palette, designer furniture' },
    { id: 'scandinavian', label: 'Scandinavian', desc: 'Pale oak, white walls, soft daylight', swatches: ['#f4f1ea', '#d9c4a3', '#9fb2a8'],
      prompt: 'scandinavian interior, light oak floors, white walls, cozy minimal styling, soft daylight' },
    { id: 'cozy', label: 'Warm and layered', desc: 'Soft textiles and lamplight', swatches: ['#e9dccb', '#c9a27e', '#8c5a3c'],
      prompt: 'cozy warm interior, soft layered textiles and rugs, warm lamplight, inviting' },
    { id: 'minimalist', label: 'Minimal', desc: 'Uncluttered, muted, calm', swatches: ['#f2f2ef', '#cfcac1', '#7d7a73'],
      prompt: 'minimalist interior, uncluttered, muted tones, refined simple furniture, calm' },
    { id: 'industrial', label: 'Industrial', desc: 'Brick, concrete and black steel', swatches: ['#9a5b42', '#8d8d88', '#2a2a2a'],
      prompt: 'industrial loft interior, exposed brick, polished concrete, black steel accents, leather' },
    { id: 'luxury', label: 'Classic luxury', desc: 'Marble, brass and rich fabrics', swatches: ['#efe9e1', '#b08d57', '#2f3d4a'],
      prompt: 'luxury interior, elegant furnishings, marble and brass, rich fabrics, sophisticated' }
];

const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const r2 = (v) => Math.round(v * 100) / 100;

// remembered between openings while the page is open
const memory = { styleId: 'modern', renders: new Map() }; // key `${roomKey}` → [{ url, viewLabel, styleLabel }]

/**
 * @param plan   { rooms: [{ id, key, name, points }], walls, furniture } in feet (see scene.js)
 * @param opts.generate  async (guideDataUrl, { stylePrompt, roomBrief, roomName }) => imageUrl
 * @param opts.onQuota   called when generation is refused for quota (dialog closes first)
 * @param opts.initialRoomId optional
 */
export function openRoomRenderDialog(plan, { generate, onQuota, initialRoomId } = {}) {
    const rooms = plan.rooms;
    if (!rooms.length) return;
    const state = {
        room: rooms.find(r => r.id === initialRoomId) || rooms[0],
        views: [], view: null,
        style: ROOM_STYLES.find(s => s.id === memory.styleId) || ROOM_STYLES[0],
        guide: null, shown: 'guide', current: null, busy: false
    };
    const prevFocus = document.activeElement;

    const modal = document.createElement('div');
    modal.className = 'modal show rr-modal';
    modal.innerHTML = `
        <div class="rr-dialog" role="dialog" aria-modal="true" aria-labelledby="rr-title">
            <header class="rr-header">
                <div>
                    <h2 class="rr-title" id="rr-title">Render a room</h2>
                    <p class="rr-sub">Pick a room on the plan, a style, and where the camera stands.</p>
                </div>
                <button type="button" class="rr-close" data-action="close" aria-label="Close">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </header>
            <div class="rr-body">
                <aside class="rr-side">
                    <div class="rr-plan-wrap">
                        <svg class="rr-plan" role="radiogroup" aria-label="Rooms"></svg>
                    </div>
                    <div class="rr-room-meta">
                        <h3 class="rr-room-name"></h3>
                        <p class="rr-room-facts"></p>
                    </div>
                    <fieldset class="rr-group">
                        <legend class="rr-h">Camera</legend>
                        <div class="rr-views"></div>
                    </fieldset>
                    <fieldset class="rr-group">
                        <legend class="rr-h">Style</legend>
                        <div class="rr-styles"></div>
                    </fieldset>
                </aside>
                <section class="rr-main" aria-label="Preview">
                    <div class="rr-stage">
                        <img class="rr-image" alt="">
                        <div class="rr-stage-tabs" role="tablist" aria-label="Preview" hidden>
                            <button type="button" role="tab" data-show="guide">3D guide</button>
                            <button type="button" role="tab" data-show="render">Render</button>
                        </div>
                        <div class="rr-working" hidden>
                            <div class="rr-working-bar"><span></span></div>
                            <p class="rr-working-text"></p>
                        </div>
                        <p class="rr-stage-error" role="alert" hidden></p>
                    </div>
                    <div class="rr-caption">
                        <p class="rr-caption-view"></p>
                        <ol class="rr-history" aria-label="Renders of this room"></ol>
                    </div>
                </section>
            </div>
            <footer class="rr-footer">
                <p class="rr-note">Each render uses one premium generation and takes about a minute.</p>
                <div class="rr-actions">
                    <button type="button" class="rr-btn rr-btn--quiet" data-action="download" disabled>Download</button>
                    <button type="button" class="rr-btn rr-btn--primary" data-action="render">Render room</button>
                </div>
            </footer>
        </div>`;
    document.body.appendChild(modal);
    document.body.classList.add('rr-open');

    const $ = (sel) => modal.querySelector(sel);
    const planSvg = $('.rr-plan'), image = $('.rr-image'), tabs = $('.rr-stage-tabs');
    const renderBtn = $('[data-action="render"]'), downloadBtn = $('[data-action="download"]');

    // ── plan ────────────────────────────────────────────────────────────
    const all = rooms.flatMap(r => r.points);
    const minX = Math.min(...all.map(p => p.x)), maxX = Math.max(...all.map(p => p.x));
    const minY = Math.min(...all.map(p => p.y)), maxY = Math.max(...all.map(p => p.y));
    const span = Math.max(maxX - minX, maxY - minY);
    const pad = span * 0.06;
    planSvg.setAttribute('viewBox', `${r2(minX - pad)} ${r2(minY - pad)} ${r2(maxX - minX + pad * 2)} ${r2(maxY - minY + pad * 2)}`);
    const labelSize = span / 32;

    function drawPlan() {
        const roomEls = rooms.map(r => {
            const pts = r.points.map(p => `${r2(p.x)},${r2(p.y)}`).join(' ');
            const c = r.points.reduce((a, p) => ({ x: a.x + p.x / r.points.length, y: a.y + p.y / r.points.length }), { x: 0, y: 0 });
            const on = r === state.room;
            const area = describeRoom(plan, r).areaFt;
            const name = r.name || 'Unnamed room';
            return `<g class="rr-room${on ? ' is-on' : ''}" data-room="${esc(r.id)}" role="radio" tabindex="${on ? 0 : -1}" aria-checked="${on}" aria-label="${esc(name)}, ${Math.round(area)} square feet">
                <polygon points="${pts}"/>
                ${area > 25 ? `<text x="${r2(c.x)}" y="${r2(c.y)}" font-size="${r2(labelSize)}">${esc(r.name || '')}</text>` : ''}
            </g>`;
        }).join('');
        const wallEls = plan.walls.map(w => {
            const dx = w.b.x - w.a.x, dy = w.b.y - w.a.y, L = Math.hypot(dx, dy) || 1;
            const at = (t) => `${r2(w.a.x + (dx / L) * t)},${r2(w.a.y + (dy / L) * t)}`;
            const ops = (w.openings || []).map(o => [Math.max(0, o.position * L - o.width / 2), Math.min(L, o.position * L + o.width / 2), o.type]).sort((a, b) => a[0] - b[0]);
            let d = '', glass = '', cur = 0;
            for (const [s, e, type] of ops) {
                if (s > cur) d += `M${at(cur)}L${at(s)}`;
                if (type === 'window') glass += `M${at(s)}L${at(e)}`;
                cur = Math.max(cur, e);
            }
            if (cur < L) d += `M${at(cur)}L${at(L)}`;
            const t = r2(Math.max(w.thickness, span / 220));
            return `${d ? `<path class="rr-wall" d="${d}" stroke-width="${t}"/>` : ''}${glass ? `<path class="rr-glass" d="${glass}" stroke-width="${r2(t * 0.35)}"/>` : ''}`;
        }).join('');
        // camera: marker + view cone; other positions in this room as small hollow dots
        let cam = '';
        if (state.view) {
            const v = state.view, ang = Math.atan2(v.look.y - v.pos.y, v.look.x - v.pos.x), half = ((v.fov || 84) * Math.PI) / 360;
            const reach = Math.min(Math.max(span / 5, 6), 14);
            const p1 = { x: v.pos.x + Math.cos(ang - half) * reach, y: v.pos.y + Math.sin(ang - half) * reach };
            const p2 = { x: v.pos.x + Math.cos(ang + half) * reach, y: v.pos.y + Math.sin(ang + half) * reach };
            const others = state.views.filter(o => o !== v).map(o =>
                `<circle class="rr-cam-alt" data-view="${o.id}" cx="${r2(o.pos.x)}" cy="${r2(o.pos.y)}" r="${r2(span / 90)}"><title>${esc(o.label)}</title></circle>`).join('');
            cam = `<path class="rr-cone" d="M${r2(v.pos.x)},${r2(v.pos.y)} L${r2(p1.x)},${r2(p1.y)} A${r2(reach)},${r2(reach)} 0 0 1 ${r2(p2.x)},${r2(p2.y)} Z"/>
                ${others}<circle class="rr-cam" cx="${r2(v.pos.x)}" cy="${r2(v.pos.y)}" r="${r2(span / 70)}"/>`;
        }
        planSvg.innerHTML = `<g class="rr-rooms">${roomEls}</g><g class="rr-walls">${wallEls}</g><g class="rr-camera">${cam}</g>`;
    }

    planSvg.addEventListener('click', (e) => {
        if (state.busy) return;
        const alt = e.target.closest('[data-view]');
        if (alt) { selectView(state.views.find(v => v.id === alt.dataset.view)); return; }
        const g = e.target.closest('[data-room]');
        if (g) selectRoom(rooms.find(r => r.id === g.dataset.room));
    });
    planSvg.addEventListener('keydown', (e) => {
        const g = e.target.closest('[data-room]');
        if (!g || state.busy) return;
        const i = rooms.findIndex(r => r.id === g.dataset.room);
        let next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = rooms[(i + 1) % rooms.length];
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = rooms[(i - 1 + rooms.length) % rooms.length];
        if (e.key === ' ' || e.key === 'Enter') next = rooms[i];
        if (!next) return;
        e.preventDefault();
        selectRoom(next);
        planSvg.querySelector(`[data-room="${CSS.escape(next.id)}"]`)?.focus();
    });

    // ── camera + style lists ────────────────────────────────────────────
    function drawViews() {
        $('.rr-views').innerHTML = state.views.map(v => `
            <label class="rr-option${v === state.view ? ' is-on' : ''}">
                <input type="radio" name="rr-view" value="${v.id}" ${v === state.view ? 'checked' : ''} ${state.busy ? 'disabled' : ''}>
                <span>${esc(v.label)}</span>
            </label>`).join('') || '<p class="rr-empty">This room is too small to place a camera in.</p>';
    }
    $('.rr-views').addEventListener('change', (e) => selectView(state.views.find(v => v.id === e.target.value)));

    function drawStyles() {
        $('.rr-styles').innerHTML = ROOM_STYLES.map(s => `
            <label class="rr-style${s === state.style ? ' is-on' : ''}">
                <input type="radio" name="rr-style" value="${s.id}" ${s === state.style ? 'checked' : ''} ${state.busy ? 'disabled' : ''}>
                <span class="rr-swatches" aria-hidden="true">${s.swatches.map(c => `<i style="background:${c}"></i>`).join('')}</span>
                <span class="rr-style-text"><span class="rr-style-name">${esc(s.label)}</span><span class="rr-style-desc">${esc(s.desc)}</span></span>
            </label>`).join('');
    }
    $('.rr-styles').addEventListener('change', (e) => {
        state.style = ROOM_STYLES.find(s => s.id === e.target.value) || state.style;
        memory.styleId = state.style.id;
        drawStyles();
    });

    // ── stage ───────────────────────────────────────────────────────────
    const rendersFor = (room) => memory.renders.get(room.key) || [];

    function drawStage() {
        const list = rendersFor(state.room);
        const showRender = state.shown === 'render' && state.current;
        image.src = showRender ? state.current.url : (state.guide || '');
        image.alt = showRender
            ? `Render of ${state.room.name || 'the room'}, ${state.current.styleLabel.toLowerCase()} style, ${state.current.viewLabel.toLowerCase()}`
            : `3D guide of ${state.room.name || 'the room'} that the render is based on`;
        tabs.hidden = !state.current;
        tabs.querySelectorAll('[role="tab"]').forEach(t => {
            const on = t.dataset.show === (showRender ? 'render' : 'guide');
            t.setAttribute('aria-selected', String(on));
            t.tabIndex = on ? 0 : -1;
        });
        $('.rr-caption-view').textContent = showRender
            ? `${state.current.styleLabel}, ${state.current.viewLabel.charAt(0).toLowerCase()}${state.current.viewLabel.slice(1)}`
            : (state.view ? `3D guide, ${state.view.label.charAt(0).toLowerCase()}${state.view.label.slice(1)}` : '');
        $('.rr-history').innerHTML = list.map((r, i) => `
            <li><button type="button" class="${r === state.current && showRender ? 'is-on' : ''}" data-render="${i}" aria-label="Show render ${i + 1}: ${esc(r.styleLabel)}, ${esc(r.viewLabel)}">
                <img src="${esc(r.url)}" alt=""></button></li>`).join('');
        downloadBtn.disabled = !showRender;
        renderBtn.textContent = state.busy ? 'Rendering…' : (list.length ? 'Render again' : 'Render room');
        renderBtn.disabled = state.busy || !state.guide;
    }
    tabs.addEventListener('click', (e) => {
        const t = e.target.closest('[data-show]');
        if (!t) return;
        state.shown = t.dataset.show;
        drawStage();
    });
    $('.rr-history').addEventListener('click', (e) => {
        const b = e.target.closest('[data-render]');
        if (!b) return;
        state.current = rendersFor(state.room)[+b.dataset.render];
        state.shown = 'render';
        drawStage();
    });

    function refreshGuide() {
        state.guide = null;
        if (state.view) {
            try { state.guide = renderGuide(plan, state.room, state.view); } catch (err) { console.error('3D guide failed:', err); }
        }
        $('.rr-stage-error').hidden = true;
        drawStage();
    }

    function selectRoom(room) {
        if (!room) return;
        state.room = room;
        state.views = viewpointsFor(plan, room);
        state.view = state.views[0] || null;
        const list = rendersFor(room);
        state.current = list[list.length - 1] || null;
        state.shown = state.current ? 'render' : 'guide';
        const f = describeRoom(plan, room);
        $('.rr-room-name').textContent = room.name || 'Unnamed room';
        $('.rr-room-facts').textContent = `${Math.round(f.widthFt)} × ${Math.round(f.depthFt)} ft, ${Math.round(f.areaFt)} sq ft`
            + (f.windows.length ? `, ${f.windows.length} window${f.windows.length === 1 ? '' : 's'}` : '');
        drawPlan(); drawViews(); refreshGuide();
    }

    function selectView(view) {
        if (!view || state.busy) return;
        state.view = view;
        state.shown = 'guide';
        drawPlan(); drawViews(); refreshGuide();
    }

    // ── render ──────────────────────────────────────────────────────────
    async function render() {
        if (state.busy || !state.guide || !state.view) return;
        const room = state.room, view = state.view, style = state.style, guide = state.guide;
        state.busy = true;
        state.shown = 'guide';
        $('.rr-working').hidden = false;
        $('.rr-working-text').textContent = room.name ? `Rendering ${room.name}…` : 'Rendering the room…';
        $('.rr-stage-error').hidden = true;
        modal.classList.add('is-busy');
        drawViews(); drawStyles(); drawStage();
        try {
            const url = await generate(guide, { stylePrompt: style.prompt, roomBrief: roomBrief(plan, room, view), roomName: room.name || '' });
            if (!url) throw new Error('The render came back empty. Try again.');
            const entry = { url, viewLabel: view.label, styleLabel: style.label };
            memory.renders.set(room.key, [...rendersFor(room), entry]);
            if (state.room === room) { state.current = entry; state.shown = 'render'; }
        } catch (err) {
            if (err && err.code === 'QUOTA_EXCEEDED') { close(); onQuota?.(); return; }
            const msg = $('.rr-stage-error');
            msg.textContent = err?.message ? `Render failed: ${err.message}` : 'Render failed. Try again.';
            msg.hidden = false;
        } finally {
            state.busy = false;
            modal.classList.remove('is-busy');
            if (!modal.isConnected) return;
            $('.rr-working').hidden = true;
            drawViews(); drawStyles(); drawStage();
        }
    }

    async function download() {
        if (!state.current) return;
        const name = `${(state.room.name || 'room').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${state.current.styleLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`;
        try {
            const blob = await (await fetch(state.current.url)).blob();
            const href = URL.createObjectURL(blob);
            const a = Object.assign(document.createElement('a'), { href, download: name });
            document.body.appendChild(a); a.click(); a.remove();
            setTimeout(() => URL.revokeObjectURL(href), 1000);
        } catch {
            window.open(state.current.url, '_blank', 'noopener');
        }
    }

    // ── open / close ────────────────────────────────────────────────────
    function close() {
        document.removeEventListener('keydown', onKey, true);
        modal.remove();
        document.body.classList.remove('rr-open');
        prevFocus?.focus?.();
    }
    function onKey(e) {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); return; }
        if (e.key !== 'Tab') return;
        const els = [...modal.querySelectorAll('button, input, [tabindex="0"]')].filter(el => !el.disabled && el.offsetParent !== null);
        if (!els.length) return;
        if (e.shiftKey && document.activeElement === els[0]) { e.preventDefault(); els[els.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === els[els.length - 1]) { e.preventDefault(); els[0].focus(); }
    }
    document.addEventListener('keydown', onKey, true);
    modal.addEventListener('click', (e) => {
        const action = e.target.closest('[data-action]')?.dataset.action;
        if (action === 'close' || e.target === modal) close();
        if (action === 'render') render();
        if (action === 'download') download();
    });

    drawStyles();
    selectRoom(state.room);
    renderBtn.focus();
}
