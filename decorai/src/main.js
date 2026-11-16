import feather from 'feather-icons';
import { createClient } from '@supabase/supabase-js';
import './woodworking/styles.css';
import {
    start as startRouter,
    navigate,
    syncUrl,
    authParam,
    setAuthParam,
    current as currentRoute,
    isApplying as routeIsApplying,
} from './router.js';
import { initSheets, trapFocus } from './sheets.js';
import { initWaitState, waitStateMarkup } from './waitState.js';
import { initCompare, enhanceCompare } from './compare.js';
import { showToast } from './toast.js';
import { placeholderMarkup, watchImage } from './placeholders.js';
import { useSavedEmpty, emptyStateElement } from './emptyStates.js';
import { MaskEditor, compositeMaskedResult, compositeRegionEdit, buildRegionMarkup, buildRegionLookup } from './maskEditor.js';
import { normalizeRoomPhoto, looksLikeImageFile } from './roomPhoto.js';
import {
    SAMPLE_ROOMS, pickDroppedFile, dragLooksWrong, notAPhoto, couldNotOpen, sampleFailed,
    cameraProblem, PROBLEM_ACTION_LABELS,
} from './uploadStates.js';
import { track, flushAnalytics } from './analytics.js';
import { initErrorReporting, reportError } from './errorReporting.js';
import { initShareDialog, openShareDialog } from './shareDialog.js';
import {
    describeGate, formatPrice, saveUpgradeReturn, takeUpgradeReturn, DEFAULT_SUBSCRIPTION, DEFAULT_SAVED_DESIGNS,
} from './upgrade.js';
import { buildShopList, hasAffiliateLinks, shopHint } from './shop.js';
import {
    LIBRARY_TABS, TAB_LABELS, normaliseTab, shouldShowSearch, filterLibraryItems, designsStatus, emptyState,
} from './library.js';

// First thing: errors thrown while the rest of this module sets up are exactly
// the ones that leave a visitor looking at a dead page.
initErrorReporting();
import {
    saveRedesignSession,
    loadRedesignSession,
    clearRedesignSession,
    toDurableImage,
    imageStillLoads,
    MAX_STORED_VERSIONS,
} from './sessionStore.js';

// Same-origin API routes (Vite dev proxies /api to the backend; production serves both).
const PROXY_SERVER_URL = '';

// Supabase client and auth state (initialized in initializeApp)
let supabase = null;
let authInitError = null;
/** False until the first auth/config check in initializeApp() finishes. */
let authReady = false;
let appConfig = null;
let currentUser = null;
let currentSession = null;

// Token state
let userTokens = 0;
// Subscription state
let userHasSubscription = false;
// Subscriber monthly image-generation usage: { used, limit, remaining }
let subscriptionUsage = { used: 0, limit: 50, remaining: 50 };
// Fetched layout state: restored once when user opens the layout editor after sign-in/load
let savedLayoutState = null;
let savedLayoutId = null;
let savedLayoutName = null;
// Currently loaded layout in the editor (so Save updates this one)
let currentLayoutId = null;

// DOM Elements
const uploadContainer = document.getElementById('upload-container');
const wizardContainer = document.getElementById('wizard-container');
const roomPreview = document.getElementById('room-preview');
const roomUpload = document.getElementById('room-upload');
const cameraBtn = document.getElementById('camera-btn');
const roomCapture = document.getElementById('room-capture');
const changeImageBtn = document.getElementById('change-image-btn');
const generateBtn = document.getElementById('generate-btn');
const defaultModelToggle = document.getElementById('default-model-toggle');
const defaultModelToggleResults = document.getElementById('default-model-toggle-results');
const resultsSection = document.getElementById('results-section');
const loadingIndicator = document.getElementById('loading-indicator');
const designCarousel = document.getElementById('design-carousel');
const backToOptionsBtn = document.getElementById('back-to-options-btn');
const regenerateBtn = document.getElementById('regenerate-btn');
const saveDesignBtn = document.getElementById('save-design-btn');
const refinementInput = document.getElementById('refinement-input');

// ===== REGION EDITING =====
// "Paint, then choose": brush over one thing in the photo, then pick what to
// do with it from a small menu beside the strokes — Remove it, or Change it…
// with a short instruction. Typed edits in the composer / refine box are for
// the whole image; a region only ever comes from this menu, so the two can't
// be confused.
//
// Quick Edit's photo is paintable the whole time the panel is open. A result
// needs "Edit one thing" first: dragging on it moves the compare divider.
// One editor is live at a time; it belongs to the image it was painted on and
// is torn down if that image is replaced.
let maskEditor = null;
let maskScope = null; // 'configure' | 'results'
let regionMenu = null;

const MASK_TARGETS = {
    configure: () => {
        const container = document.querySelector('.configure-photo .image-preview-wrapper');
        return { container, img: container?.querySelector('#room-preview') };
    },
    results: () => {
        const container = designCarousel?.querySelector('.design-card .image-reveal-container');
        return { container, img: container?.querySelector('.generated-image') };
    },
};

// Brush sizes in on-screen px (the editor scales strokes to the image).
const BRUSH_SIZES = { s: 24, m: 48, l: 96 };
let brushSizeKey = 'm';

/**
 * The live editor for a scope, but only while its image is still the one it
 * was painted on. Anything stale is torn down here, so no caller can act on a
 * mask that no longer matches the pixels.
 */
function activeMask(scope) {
    if (!maskEditor || maskScope !== scope) return null;
    if (!maskEditor.isValid()) { destroyMaskEditor(); return null; }
    return maskEditor;
}

function resultsRegionEls() {
    return {
        button: document.querySelector('.results-header .region-select-btn'),
        hint: document.querySelector('.results-header-hint'),
    };
}

/**
 * "Edit one thing" reads "Done" while painting is on, and the header's
 * subtitle (which normally explains the compare divider) says how to paint.
 */
function setResultsRegionUi(on) {
    const { button, hint } = resultsRegionEls();
    if (button) {
        button.setAttribute('aria-pressed', String(on));
        const label = button.querySelector('span');
        if (label) label.textContent = on ? 'Done' : 'Edit one thing';
    }
    if (hint) {
        hint.dataset.defaultText ||= hint.textContent;
        hint.textContent = on ? hint.dataset.regionHint : hint.dataset.defaultText;
    }
    // On phones the hint has its own row, shown only while painting.
    resultsSection?.classList.toggle('is-region-editing', on);
}

/** Tear the live editor down, with its menu. */
function destroyMaskEditor() {
    const scope = maskScope;
    if (maskEditor) maskEditor.destroy();
    maskEditor = null;
    maskScope = null;
    resetRegionMenu();
    document.querySelectorAll('.masking').forEach((el) => el.classList.remove('masking'));
    if (scope === 'results') setResultsRegionUi(false);
}

/** Make a scope's image paintable. False when there's no image to paint on. */
function startRegionEditor(scope) {
    destroyMaskEditor();
    const { container, img } = MASK_TARGETS[scope]();
    if (!container || !img || !img.getAttribute('src')) return false;
    // .masking shows the whole photo instead of a cropped thumbnail and moves
    // overlays out of the way. Set it before the editor measures.
    container.classList.add('masking');
    maskEditor = new MaskEditor(container, img);
    maskScope = scope;
    maskEditor.setMode('change');
    maskEditor.setBrushSize(BRUSH_SIZES[brushSizeKey]);
    maskEditor.onChange = updateRegionMenu;
    maskEditor.onStrokeStart = hideRegionMenu;
    maskEditor.onLayout = positionRegionMenu;
    maskEditor.onSourceChanged = () => {
        destroyMaskEditor();
        // Quick Edit's photo stays paintable when it's swapped for another.
        if (scope === 'configure' && isQuickEditMode()) {
            setTimeout(() => { if (isQuickEditMode() && !maskEditor) startRegionEditor('configure'); }, 0);
        }
    };
    return true;
}

/** "Edit one thing" on a result: on, or back to the compare view. */
function toggleResultsRegion() {
    if (maskScope === 'results') { destroyMaskEditor(); return; }
    if (!startRegionEditor('results')) {
        showToastMessage('Generate a design first, then pick something to edit.', 'info');
        return;
    }
    setResultsRegionUi(true);
}

function buildRegionMenu() {
    const el = document.createElement('div');
    el.className = 'region-menu hidden';
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', 'Edit what you painted');
    el.innerHTML = `
        <div class="region-menu-actions">
            <button type="button" class="region-menu-btn is-primary" data-act="remove">
                <i data-feather="trash-2"></i><span>Remove it</span>
            </button>
            <button type="button" class="region-menu-btn" data-act="change" aria-expanded="false">
                <i data-feather="edit-2"></i><span>Change it…</span>
            </button>
        </div>
        <form class="region-menu-change hidden">
            <input type="text" class="region-menu-input" placeholder="Make it green velvet" aria-label="How should it change?" maxlength="300" autocomplete="off">
            <button type="submit" class="region-menu-apply">Apply</button>
        </form>
        <div class="region-menu-tools">
            <div class="region-menu-sizes" role="radiogroup" aria-label="Brush size">
                ${Object.keys(BRUSH_SIZES).map((k) => `
                    <button type="button" class="region-menu-size" role="radio" data-size="${k}"
                        aria-checked="${k === brushSizeKey}"
                        aria-label="${{ s: 'Small', m: 'Medium', l: 'Large' }[k]} brush"
                        title="${{ s: 'Small', m: 'Medium', l: 'Large' }[k]} brush"><span class="region-menu-dot"></span></button>`).join('')}
            </div>
            <div class="region-menu-edits">
                <button type="button" class="region-menu-tool" data-act="undo" aria-label="Undo last stroke" title="Undo">
                    <i data-feather="corner-up-left"></i>
                </button>
                <button type="button" class="region-menu-tool" data-act="clear" aria-label="Clear selection" title="Clear">
                    <i data-feather="x"></i>
                </button>
            </div>
        </div>`;
    document.body.appendChild(el);

    const form = el.querySelector('.region-menu-change');
    const input = el.querySelector('.region-menu-input');
    const changeBtn = el.querySelector('[data-act="change"]');
    el.querySelector('[data-act="remove"]').addEventListener('click', runRegionRemove);
    changeBtn.addEventListener('click', () => {
        const open = form.classList.toggle('hidden') === false;
        changeBtn.setAttribute('aria-expanded', String(open));
        positionRegionMenu();
        if (open) input.focus();
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        runRegionChange(input.value);
    });
    input.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        form.classList.add('hidden');
        changeBtn.setAttribute('aria-expanded', 'false');
        changeBtn.focus();
        positionRegionMenu();
    });
    el.querySelector('[data-act="undo"]').addEventListener('click', () => maskEditor?.undo());
    el.querySelector('[data-act="clear"]').addEventListener('click', () => maskEditor?.clear());
    el.querySelectorAll('.region-menu-size').forEach((btn) => {
        btn.addEventListener('click', () => {
            brushSizeKey = btn.dataset.size;
            maskEditor?.setBrushSize(BRUSH_SIZES[brushSizeKey]);
            el.querySelectorAll('.region-menu-size').forEach((b) => {
                b.setAttribute('aria-checked', String(b === btn));
            });
        });
    });
    feather.replace();
    return el;
}

/** Show the menu while something is painted; hide it otherwise. */
function updateRegionMenu() {
    if (!maskEditor || !maskEditor.hasMask()) { hideRegionMenu(); return; }
    regionMenu ||= buildRegionMenu();
    const busy = isDesignGenerationInProgress();
    regionMenu.querySelectorAll('[data-act="remove"], .region-menu-apply').forEach((b) => { b.disabled = busy; });
    regionMenu.classList.remove('hidden');
    positionRegionMenu();
}

function hideRegionMenu() {
    regionMenu?.classList.add('hidden');
}

/** Hide the menu and forget a half-typed change. */
function resetRegionMenu() {
    if (!regionMenu) return;
    hideRegionMenu();
    regionMenu.querySelector('.region-menu-change')?.classList.add('hidden');
    regionMenu.querySelector('[data-act="change"]')?.setAttribute('aria-expanded', 'false');
    const input = regionMenu.querySelector('.region-menu-input');
    if (input) input.value = '';
}

/**
 * Level with the strokes, and off the image where there's room, so it never
 * covers what you're painting: right of the image, else left of it, else
 * inside it beside the strokes. Document coordinates, so it scrolls with the
 * page. With no room for any of those (phones), it becomes a bottom sheet —
 * placed by CSS, always in reach — that stands in for the composer.
 */
function positionRegionMenu() {
    if (!regionMenu || regionMenu.classList.contains('hidden') || !maskEditor) return;
    const photo = maskEditor.canvas.getBoundingClientRect();
    const box = maskEditor.selectionRect();
    if (!box || !photo.width) { hideRegionMenu(); return; }
    const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), Math.max(lo, hi));
    const gap = 12;
    const edge = 8;
    const vw = document.documentElement.clientWidth;

    regionMenu.classList.remove('is-docked');
    const m = regionMenu.getBoundingClientRect();
    const candidates = window.innerWidth < 640 ? [] : [
        photo.right + gap,                 // right of the image
        photo.left - gap - m.width,        // left of the image
        box.right + gap,                   // inside, right of the strokes
        box.left - gap - m.width,          // inside, left of the strokes
    ];
    const fits = (x, i) => (i < 2
        ? x >= edge && x + m.width <= vw - edge
        : x >= photo.left + edge && x + m.width <= photo.right - edge);
    const at = candidates.findIndex(fits);

    if (at === -1) {
        regionMenu.classList.add('is-docked');
        regionMenu.style.left = '';
        regionMenu.style.top = '';
        return;
    }
    const left = candidates[at];
    const top = clamp(box.top + box.height / 2 - m.height / 2, photo.top, photo.bottom - m.height);
    regionMenu.style.left = `${Math.round(left + window.scrollX)}px`;
    regionMenu.style.top = `${Math.round(top + window.scrollY)}px`;
}

function runRegionRemove() {
    if (!activeMask(maskScope)?.hasMask()) return;
    generateDesigns({ regionRemove: { scope: maskScope } });
}

function runRegionChange(text) {
    const scope = maskScope;
    const editor = activeMask(scope);
    const ask = String(text || '').trim();
    if (!editor?.hasMask()) return;
    const input = regionMenu?.querySelector('.region-menu-input');
    if (!ask) { input?.focus(); return; }
    const kind = regionInstructionKind(ask);
    // "Remove this" typed into Change it… is a Remove it.
    if (kind === 'erase') { runRegionRemove(); return; }
    const usePremium = scope === 'configure'
        ? !!quickEditPremiumToggle?.checked
        : getEffectiveDefaultModelPref() === 'premium';
    generateDesigns({
        quickEdit: {
            prompt: ask,
            label: usePremium ? 'Quick edit (premium)' : 'Quick edit',
            description: ask,
        },
        imageSource: scope === 'configure' ? currentUploadedImage : editor.sourceSrc,
        usePremium,
        regionScope: scope,
        regionMode: kind,
    });
}

/**
 * On phones the results view is exactly one window tall (see the
 * #results-section phone styles). It starts below the header and main's top
 * padding, which differ by screen, so that offset is measured.
 */
function fitResultsEditor() {
    const main = document.querySelector('main');
    if (!main) return;
    const top = main.getBoundingClientRect().top + window.scrollY
        + (parseFloat(getComputedStyle(main).paddingTop) || 0);
    document.documentElement.style.setProperty('--re-top', `${Math.round(top)}px`);
}

/**
 * iPad results layout: fit the image's space to the photo, so it isn't framed
 * by empty bands, and hand the room to the header and refine box. The CSS
 * says which case applies through --re-fit (unset everywhere else):
 *   portrait  — if the photo is shorter than its slot, size the image row to
 *               the photo, enlarge the header (.re-roomy) and let the refine
 *               box take the rest;
 *   landscape — if the photo is too wide to fill the height beside the
 *               panel, move the header across the top (.re-header-top);
 *               then make the panel as wide as the photo leaves room for,
 *               so it isn't flanked by side bands either.
 */
function fitResultsPhoto() {
    const section = resultsSection;
    if (!section || section.classList.contains('hidden')) return;
    for (const v of ['--re-image-row', '--re-composer-row', '--re-panel-w']) section.style.removeProperty(v);
    section.classList.remove('re-header-top', 're-roomy');
    const mode = getComputedStyle(section).getPropertyValue('--re-fit').trim();
    if (!mode) return;
    const card = section.querySelector('.design-card');
    const generated = card?.querySelector('.generated-image');
    const photo = generated?.naturalWidth ? generated : card?.querySelector('.original-image');
    if (!photo?.naturalWidth) return; // refits when it loads
    const ratio = photo.naturalWidth / photo.naturalHeight;
    const display = section.querySelector('.results-display');
    let slot = display?.getBoundingClientRect();
    if (!slot?.width || !slot.height) return;

    if (mode === 'portrait') {
        const photoHeight = Math.floor(slot.width / ratio);
        if (photoHeight < slot.height - 8) {
            // Spare height: a bigger header, if the photo still fits with it.
            section.classList.add('re-roomy');
            slot = display.getBoundingClientRect();
            if (photoHeight > slot.height) {
                section.classList.remove('re-roomy');
                return;
            }
            section.style.setProperty('--re-image-row', `${photoHeight}px`);
            section.style.setProperty('--re-composer-row', 'minmax(auto, 1fr)');
        }
    } else if (mode === 'landscape') {
        // Too wide to fill the height beside the panel: the header goes across
        // the top, taking height that would only have been bands.
        if (slot.width / ratio < slot.height - 8) {
            section.classList.add('re-header-top');
            slot = display.getBoundingClientRect();
        }
        const gap = parseFloat(getComputedStyle(section).columnGap) || 0;
        const photoWidth = slot.height * ratio;
        const panel = Math.round(Math.min(440, Math.max(320, section.clientWidth - gap - photoWidth)));
        section.style.setProperty('--re-panel-w', `${panel}px`);
    }
}

function initMaskControls() {
    resultsRegionEls().button?.addEventListener('click', toggleResultsRegion);
    window.addEventListener('resize', positionRegionMenu);
    // Measured when the view is shown: main's padding differs on the upload
    // landing page, so a measurement taken there is off.
    if (resultsSection) {
        // Only on show/hide: fitResultsPhoto changes this element's classes
        // itself, and reacting to those would loop.
        let wasHidden = resultsSection.classList.contains('hidden');
        new MutationObserver(() => {
            const hidden = resultsSection.classList.contains('hidden');
            if (hidden === wasHidden) return;
            wasHidden = hidden;
            if (hidden) return;
            fitResultsEditor();
            fitResultsPhoto();
        }).observe(resultsSection, { attributes: true, attributeFilter: ['class'] });
        // A new result or history version can have a different shape.
        designCarousel?.addEventListener('load', (e) => {
            if (e.target instanceof HTMLImageElement) fitResultsPhoto();
        }, true);
    }
    window.addEventListener('resize', fitResultsEditor);
    window.addEventListener('resize', fitResultsPhoto);

}

/**
 * Region plumbing shared by every path that runs a model for a design — the
 * first generation and each recovery path (retry, free backup, premium
 * upgrade). Without it, a failed region edit "recovers" into a whole-image
 * edit: the one thing the user said not to do.
 *
 * design.region = { mode, stroke, composite, eraseMask, source } is set when
 * the run starts. mode is 'change' | 'keep' | 'remove'.
 *
 * Returns { input, edit }. `input` is the clean photo, for the staging model,
 * which can't be told about a region. `edit` is what the instruction models
 * (Nano Banana, gpt-image) get: { image, prompt(instruction) }, or null.
 */
async function regionModelInput(design, instruction = '') {
    const r = design?.region;
    if (!r) return { input: design.sourceImage, edit: null };
    // The model always gets the FULL photo: with the target marked it can
    // find it, and it can see the whole object. (A crop around the brush
    // strokes cut a half-painted sofa in two.)
    // "Keep this, change the rest": name what to protect so the model leaves
    // it alone; the composite then restores the painted area exactly.
    if (r.mode === 'keep') {
        const target = await identifyRegionTarget(r);
        if (target) {
            return { input: r.source, edit: { image: r.source, prompt: (text) => regionKeepPrompt(text, target) } };
        }
        const marked = await buildRegionMarkup(r.source, r.stroke).catch(() => null);
        return { input: r.source, edit: marked ? { image: marked, prompt: regionKeepMarkerPrompt } : null };
    }
    if (r.mode !== 'change') return { input: r.source, edit: null };

    // A removal on the marked photo failed on both tiers: the models removed
    // the marker and kept the object. Told what to remove by name, on the
    // clean photo, they do it — so name it first. The composite still keeps
    // only changes touching the strokes.
    if (REMOVAL.test(trimInstruction(instruction))) {
        const target = await identifyRegionTarget(r);
        if (target) {
            return {
                input: r.source,
                edit: { image: r.source, prompt: (text) => regionRemovalPrompt(text, target) },
            };
        }
    }

    let marked = null;
    try {
        marked = await buildRegionMarkup(r.source, r.stroke);
    } catch (err) {
        console.warn('[mask] could not mark the target on the photo:', err);
    }
    return { input: r.source, edit: marked ? { image: marked, prompt: regionPrompt } : null };
}

/**
 * Ask a vision model what the strokes are on ("the grey sofa under the
 * window"). Cached on the region, so a retry or premium upgrade doesn't ask
 * again. Null on any failure — the caller falls back to the marker.
 */
function identifyRegionTarget(region) {
    if (!region.targetLookup) {
        region.targetLookup = (async () => {
            try {
                const lookup = await buildRegionLookup(region.source, region.stroke);
                if (!lookup) return null;
                const controller = new AbortController();
                const timer = setTimeout(() => controller.abort(), 20000);
                try {
                    const resp = await fetch(IDENTIFY_REGION_URL, {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                            ...(currentSession ? { 'Authorization': `Bearer ${currentSession.access_token}` } : {}),
                        },
                        body: JSON.stringify({ markedImage: lookup.marked, cropImage: lookup.crop }),
                        signal: controller.signal,
                    });
                    if (!resp.ok) return null;
                    const { target } = await resp.json();
                    console.log('[mask] selection identified as:', target);
                    return typeof target === 'string' && target ? target : null;
                } finally {
                    clearTimeout(timer);
                }
            } catch (err) {
                console.warn('[mask] could not identify the selection:', err);
                return null;
            }
        })();
        // Don't cache a failure: the next attempt may succeed.
        region.targetLookup.then((t) => { if (!t) region.targetLookup = null; });
    }
    return region.targetLookup;
}

/**
 * "Keep this and remove everything else" on the free model removes the small
 * things but tends to leave wall art, TVs and larger furniture; premium
 * empties the room. Say so once the result is on screen, with a one-tap
 * premium run of the same edit (same area, same instruction).
 */
function suggestPremiumForEmptyRoom(design) {
    if (!currentUser) return; // a signed-out visitor can't run premium yet
    if (design?.region?.mode !== 'keep' || design.modelUsed !== 'nano-banana') return;
    if (!REMOVAL.test(trimInstruction(design.nanoPrompt || design.prompt))) return;
    showToastMessage(
        'For a fully empty room, try Premium. Standard can leave wall art and large furniture behind.',
        'info',
        { actionLabel: 'Try Premium', onAction: () => regenerateWithPremiumModel(generatedDesigns.indexOf(design)) },
    );
}

async function applyRegion(design, imageUrl) {
    const r = design?.region;
    if (!r || !imageUrl) return imageUrl;
    if (r.mode === 'keep') return compositeMaskedResult(r.source, imageUrl, r.composite);
    if (r.mode === 'remove') {
        // The eraser returns a downscaled copy of the whole photo. Keep what it
        // erased (the object, plus the shadow it cast just past the strokes)
        // and restore everything else at full resolution.
        const { url, strokeChanged } = await compositeRegionEdit(r.source, imageUrl, r.stroke);
        if (strokeChanged < 0.15) {
            showToastMessage('That area barely changed. Try painting over all of the item, including its edges.', 'info');
        }
        return url;
    }
    const { url, strokeChanged, markerLeft } = await compositeRegionEdit(r.source, imageUrl, r.stroke);
    if (markerLeft > 0.1) {
        // The model returned the marked photo instead of editing it.
        console.warn(`[mask] ${Math.round(markerLeft * 100)}% of the marked area still shows the marker`);
        showToastMessage('The model left the highlight in place. Try again, or describe the item — e.g. "remove the floor lamp".', 'info');
    } else if (strokeChanged < 0.15) {
        // Say so, rather than presenting an unchanged room as a result.
        showToastMessage('The marked area barely changed. Try naming the item — e.g. "remove the floor lamp".', 'info');
    }
    return url;
}

const trimInstruction = (text) => String(text || '').trim().replace(/[.!\s]+$/, '');

const REMOVAL = /\b(remove|delete|erase|get rid of|take (?:out|away)|clear (?:out|away))\b/i;

// What "this" can be called in an instruction about the painted area.
const DEIXIS = String.raw`(?:this|these|that|those|it|them|the (?:selected|marked|highlighted|painted) (?:area|item|thing|part)s?)`;

// The instruction is about the REST of the photo, and the painted thing is
// what to protect: "keep this and remove everything else", "restyle
// everything except this", "don't touch it, paint the walls". These used to
// be read as removing (or changing) the painted thing — "remove" was the only
// word that mattered.
const INVERSE = new RegExp([
    String.raw`\b(?:everything|anything|all)\s+(?:else|but|except|apart|other)\b`,
    String.raw`\b(?:the\s+)?rest of (?:the )?(?:room|photo|picture|image|space)\b`,
    String.raw`\b(?:change|edit|remove|clear|empty|restyle|redo|paint)\s+the rest\b`,
    String.raw`\b(?:except|but not|other than|apart from|besides|aside from|excluding|save for)\s+(?:for\s+)?${DEIXIS}`,
    // "keep this" as its own clause — not "keep it green", which changes it.
    String.raw`\b(?:keep|leave|preserve|protect|save|retain)\s+(?:only\s+|just\s+)?${DEIXIS}(?=\s*(?:$|[,.;]|and\b|but\b|as (?:it )?is\b|the same\s*(?:$|[,.;]|and\b)|unchanged\b|untouched\b|intact\b|alone\b|exactly\b|where\b|in place\b))`,
    String.raw`\b(?:only|just)\s+keep\b`,
    String.raw`\b(?:don'?t|do not|never|without)\s+(?:change|changing|touch|touching|edit|editing|alter|altering|move|moving|remove|removing)\s+${DEIXIS}`,
    String.raw`\b(?:around|surrounding)\s+${DEIXIS}`,
].join('|'), 'i');

// Nothing but "remove this": the eraser does that better than any
// instruction model. "Remove this and add a lamp" is not one.
const PURE_REMOVAL = new RegExp(String.raw`^(?:please\s+)?(?:(?:remove|delete|erase|get rid of|take (?:out|away)|clear (?:out|away))(?:\s+${DEIXIS})?|(?:take|get|clear)\s+${DEIXIS}\s+(?:out|away))(?:\s+(?:from|out of) (?:the )?(?:room|photo|picture|image))?$`, 'i');

/**
 * What a "Change it…" instruction wants done with the painted area:
 * 'keep'  — protect it, apply the instruction to everything else;
 * 'erase' — just remove it (the eraser model);
 * 'change' — apply the instruction to it.
 */
function regionInstructionKind(text) {
    const ask = trimInstruction(text);
    if (INVERSE.test(ask)) return 'keep';
    if (PURE_REMOVAL.test(ask)) return 'erase';
    return 'change';
}

/**
 * What to do with the target, spelled out. "remove this" on its own failed on
 * the real model even with the target highlighted: "this" still had to be
 * linked to the highlight, and nothing said a removal means the legs and
 * shadow too, or what goes in the gap.
 */
function regionIntent(instruction, target) {
    const ask = trimInstruction(instruction);
    const deixis = `Words like "this", "these", "it" or "here" refer to ${target}.`;
    if (REMOVAL.test(ask)) {
        return `Instruction: ${ask}. ${deixis} Remove ${target} entirely — every part of it, `
            + 'including legs, base, cords and the shadow it casts — and fill the space naturally '
            + 'with whatever would be behind it (floor, rug, wall or furniture).';
    }
    return `Instruction: ${ask}. ${deixis} Apply it to the whole of ${target}, including any parts `
        + 'the highlight does not cover. If the instruction adds something, place it in the highlighted area.';
}

const REGION_FRAME = 'Do not change anything else. Keep the same framing, camera angle and composition, '
    + 'and keep the lighting and perspective consistent with the rest of the room.';

/**
 * Wrap an instruction for a model editing the marked photo (every tier).
 * The instruction alone ("remove this") points at nothing the model can see,
 * and the marker itself must not survive into the result.
 */
function regionPrompt(instruction) {
    return 'This is a photo of a room. One object or area has been marked on it with a magenta '
        + 'highlight — a translucent magenta tint with a solid magenta outline. That marker is not '
        + 'part of the room; it was drawn on top of the photo to show which thing the instruction is about. '
        + `${regionIntent(instruction, 'the highlighted target')} ${REGION_FRAME} `
        + 'Remove the marker completely: the result must contain no magenta tint or outline anywhere, '
        + 'and the target must show its real colours wherever it is not being changed.';
}

/**
 * A removal on the CLEAN photo, with the target named by identifyRegionTarget.
 * Keeps the user's words so anything else they asked for still happens.
 */
function regionRemovalPrompt(instruction, target) {
    const ask = trimInstruction(instruction);
    return `Remove ${target} from this photo of a room. `
        + `The user's instruction was: "${ask}". Words like "this", "these", "it" or "here" refer to ${target}. `
        + `Remove every part of ${target}, including legs, base, cords and the shadow it casts, `
        + 'and fill the space naturally with whatever would be behind it (floor, rug, wall or furniture). '
        + REGION_FRAME;
}

/**
 * The part of a "keep this, change the rest" prompt that's the same with or
 * without a name for the target. "Remove everything else" has to be told
 * what "everything" means, or the walls and floor go too.
 */
function regionKeepBody(ask, target) {
    return `Keep ${target} exactly as it is: the same position, size, shape, colours and texture. `
        + `Apply this instruction to the rest of the photo only: "${ask}". `
        + `Words like "this", "these", "it" or "here" refer to ${target}, so "everything else" and "the rest" mean everything except ${target}. `
        + (REMOVAL.test(ask)
            ? 'Removing everything else means taking out every other object: all furniture, storage units, '
                + 'lamps, rugs, tables, plants, wall art, mirrors, TVs and other electronics, and decor. Keep only '
                + 'the building itself — walls, floor, ceiling, windows, doors and built-in cabinetry. Fill the space '
                + 'they leave naturally, so it looks like an empty room. '
            : '')
        + 'Keep the same framing, camera angle and composition, and keep the lighting and perspective consistent.';
}

/** "Keep this, change the rest" on the clean photo, with the target named. */
function regionKeepPrompt(instruction, target) {
    return `This is a photo of a room. ${regionKeepBody(trimInstruction(instruction), target)}`;
}

/** The same, when the target couldn't be named: it's marked on the photo instead. */
function regionKeepMarkerPrompt(instruction) {
    return 'This is a photo of a room. One object or area has been marked on it with a magenta '
        + 'highlight — a translucent magenta tint with a solid magenta outline. That marker is not part '
        + 'of the room; it shows what to keep. '
        + `${regionKeepBody(trimInstruction(instruction), 'the highlighted target')} `
        + 'Remove the marker completely: the result must contain no magenta tint or outline anywhere.';
}
const itemsSelectionError = document.getElementById('items-selection-error');
const wizardFengShuiBtn = document.getElementById('wizard-feng-shui-btn');
const resultsFengShuiBtn = document.getElementById('results-feng-shui-btn');
const roomFengShuiModal = document.getElementById('room-feng-shui-modal');
const roomFengShuiBody = document.getElementById('room-feng-shui-body');
const roomFengShuiTitle = document.getElementById('room-feng-shui-title');
const roomFengShuiCloseBtn = document.getElementById('room-feng-shui-close');
const roomFengShuiFooter = document.getElementById('room-feng-shui-footer');
const fengShuiApplyBtn = document.getElementById('feng-shui-apply-btn');
const fengShuiContinueWizardBtn = document.getElementById('feng-shui-continue-wizard-btn');
const fengShuiApplyPremiumToggle = document.getElementById('feng-shui-apply-premium-toggle');
const wizardQuickEditBtn = document.getElementById('wizard-quick-edit-btn');
const quickEditPanel = document.getElementById('quick-edit-panel');
const quickEditInput = document.getElementById('quick-edit-input');
const quickEditApplyBtn = document.getElementById('quick-edit-apply');
const quickEditBackBtn = document.getElementById('quick-edit-back');
const quickEditPremiumToggle = document.getElementById('quick-edit-premium-toggle');

// (The per-step Next/Back buttons are gone — the 4-pane wizard is now a single
// configure view with one sticky primary action.)

// Auth elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const authModal = document.getElementById('auth-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginError = document.getElementById('login-error');
const loginResendBlock = document.getElementById('login-resend-block');
const loginResendBtn = document.getElementById('login-resend-btn');
const loginResendMessage = document.getElementById('login-resend-message');
const signupError = document.getElementById('signup-error');
const authModalTitle = document.getElementById('auth-modal-title');
const authSwitchBtn = document.getElementById('auth-switch-btn');
const authSwitchText = document.getElementById('auth-switch-text');
const signupSuccess = document.getElementById('signup-success');
const signupSuccessEmail = document.getElementById('signup-success-email');
const successCloseBtn = document.getElementById('success-close-btn');
const signupEmailExists = document.getElementById('signup-email-exists');
const signupEmailExistsMessage = document.getElementById('signup-email-exists-message');
const emailExistsSigninBtn = document.getElementById('email-exists-signin-btn');
const emailExistsResendBtn = document.getElementById('email-exists-resend-btn');
const emailExistsMagicLinkBtn = document.getElementById('email-exists-magic-link-btn');
const authFormsSection = document.getElementById('auth-forms-section');
const confirmEmailRequired = document.getElementById('confirm-email-required');
const confirmEmailFeatureName = document.getElementById('confirm-email-feature-name');
const confirmEmailAddress = document.getElementById('confirm-email-address');
const confirmEmailMessage = document.getElementById('confirm-email-message');
const confirmEmailResendBtn = document.getElementById('confirm-email-resend-btn');
const confirmEmailCloseBtn = document.getElementById('confirm-email-close-btn');
const authButtons = document.getElementById('auth-buttons');
const userMenu = document.getElementById('user-menu');
const userMenuBtn = document.getElementById('user-menu-btn');
const userDropdown = document.getElementById('user-dropdown');
const userEmailDisplay = document.getElementById('user-email-display');
const logoutBtn = document.getElementById('logout-btn');

// Token / payment elements
const tokensDisplay = document.getElementById('tokens-display');
const tokensCount = document.getElementById('tokens-count');
const subscriptionUsageDisplay = document.getElementById('subscription-usage-display');
const subscriptionUsageRemaining = document.getElementById('subscription-usage-remaining');
const subscriptionUsageLimit = document.getElementById('subscription-usage-limit');
const buyTokensBtn = document.getElementById('buy-tokens-btn');
const buyTokensModal = document.getElementById('buy-tokens-modal');
const closeBuyTokensModalBtn = document.getElementById('close-buy-tokens-modal-btn');
const modalTokensCount = document.getElementById('modal-tokens-count');
const tokenPacksContainer = document.getElementById('token-packs');

// Generic alert modal elements
const alertModal = document.getElementById('alert-modal');
const alertModalTitle = document.getElementById('alert-modal-title');
const alertModalMessage = document.getElementById('alert-modal-message');
const alertModalCloseBtn = document.getElementById('alert-modal-close');
const alertModalOkBtn = document.getElementById('alert-modal-ok');

// Generic confirm modal elements
const confirmModal = document.getElementById('confirm-modal');
const confirmModalTitle = document.getElementById('confirm-modal-title');
const confirmModalMessage = document.getElementById('confirm-modal-message');
const confirmModalCloseBtn = document.getElementById('confirm-modal-close');
const confirmModalCancelBtn = document.getElementById('confirm-modal-cancel');
const confirmModalConfirmBtn = document.getElementById('confirm-modal-confirm');

// Error message management
function showItemsSelectionError() {
    if (!itemsSelectionError) return;
    itemsSelectionError.classList.remove('hidden');

    // On mobile the Items section is a collapsed row, so revealing an error
    // inside it would be invisible — pressing Generate would appear to do
    // nothing at all. Open the section and scroll the error into view.
    const section = document.getElementById('configure-items');
    if (section) {
        if (typeof setConfigureSectionOpen === 'function') {
            setConfigureSectionOpen(section, true);
        }
        requestAnimationFrame(() => {
            itemsSelectionError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
}

function hideItemsSelectionError() {
    if (itemsSelectionError) {
        itemsSelectionError.classList.add('hidden');
    }
}
const apiKeyInput = document.getElementById('api-key');
const toggleKeyVisibilityBtn = document.getElementById('toggle-key-visibility-btn');
const replicateApiKeyInput = document.getElementById('replicate-api-key');
const toggleReplicateKeyVisibilityBtn = document.getElementById('toggle-replicate-key-visibility-btn');
const authActionBtn = document.getElementById('auth-action-btn');

// State variables
let currentUploadedImage = null;
let lastGeneratedImageUrl = null; // Most recently successfully generated image
let currentRoomType = null;
let generatedDesigns = [];

// Design history: ordered list of every image the user has seen as a "design"
// in the current session — starting with the original upload, then each
// successful generation. Users click a thumbnail to revisit one and use it
// as the source for the next regenerate.
//   { id, imageUrl, label, isOriginal }
let designHistory = [];
/** When the in-flight generation began — for generation_succeeded's duration. */
let generationStartedAt = 0;

/**
 * What to tell the user when the server answers 429.
 * Only the monthly premium cap reports a `limit`. Every other 429 — the daily
 * free-design cap, a burst rate limit — carries its own explanation, and
 * calling those a "monthly limit" told users something untrue.
 */
function quotaErrorMessage(error) {
    const body = error?.quota;
    if (body && body.limit == null && typeof body.error === 'string' && body.error) {
        return body.error;
    }
    const limit = body?.limit ?? subscriptionUsage.limit ?? 50;
    return `You've reached your monthly limit of ${limit} image generations. ` +
        `Your quota will reset at the start of next month.`;
}

/** Mark the start of a generation attempt for the funnel. */
function trackGenerationStarted(kind, tier) {
    generationStartedAt = Date.now();
    track('generation_started', { kind, tier, signed_in: !!currentUser });
}

/** Record a failed generation. `error.code` is a short app code, never user text. */
function trackGenerationFailed(kind, error) {
    generationStartedAt = 0;
    track('generation_failed', { kind, reason: error?.code || 'ERROR', signed_in: !!currentUser });
}

let selectedHistoryId = null; // explicit user pick; null = use the latest entry
let selectedRoomItems = new Set(); // Track selected room items
let furnishedOption = null; // Track furnished room option - no default selection
let selectedDesignStyle = null; // Track selected interior design style (null = no style change requested)
let isRoomActuallyEmpty = true; // Track if the uploaded room is actually empty

// Cached feng shui analyses keyed by image source (data URI or URL).
const fengShuiAnalysisCache = new Map();
// Active analysis shown in the modal (for apply action).
let currentFengShuiContext = null;

// Confirm dialog state
let confirmResolve = null;
// Wizard step (1–4). Step 0 = upload screen (no image yet).
let currentWizardStep = 0;

// API is now handled server-side - no client keys needed

// Example design - in a real implementation, this would be an AI-generated version of the user's uploaded room
// NOTE: In an actual implementation, this would be the same room with a new furniture layout
// For this demo, we're using a sample image to simulate the concept
const sampleAIGeneratedImages = {
    empty: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070'
    ],
    furnished: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2087',
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070'
    ]
};

// Design style names based on room type
const designStyles = {
    empty: [
        "Modern Minimalist",
        "Cozy Scandinavian",
        "Contemporary Industrial"
    ],
    furnished: [
        "Optimized Layout",
        "Added Accent Pieces",
        "Complete Makeover"
    ]
};

// Design descriptions based on room type
const designDescriptions = {
    empty: [
        "Clean lines with essential furniture pieces. Neutral color palette with subtle accent colors.",
        "Warm and inviting space with natural wood elements and soft textures.",
        "Bold contrast with metal accents, exposed elements, and functional furniture."
    ],
    furnished: [
        "Rearranged existing furniture for better flow and functionality. Optimized for your space.",
        "Kept your core furniture pieces and added strategic accent items to enhance the look.",
        "Comprehensive redesign with new furniture arrangement and style elements."
    ]
};

// Custom inline SVG icons for items that don't have a good Feather equivalent.
// Each is a 24x24 stroke-based icon (matches Feather's visual weight).
const customItemSvgs = {
    sofa: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3"/><path d="M17 14v-3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3"/><path d="M3 14h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M7 14v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/><path d="M5 19v2"/><path d="M19 19v2"/></svg>`,
    chairs: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v10"/><path d="M17 4v10"/><path d="M5 14h14"/><path d="M7 18l-1 3"/><path d="M17 18l1 3"/><path d="M7 14v4h10v-4"/></svg>`,
    bed: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18V8"/><path d="M21 18v-5a3 3 0 0 0-3-3H9v6"/><path d="M3 14h18"/><path d="M3 18h18"/><rect x="5" y="10" width="3" height="3" rx="1"/></svg>`,
    rug: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M6 6v-2"/><path d="M18 6v-2"/><path d="M6 20v-2"/><path d="M18 20v-2"/></svg>`,
    plants: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M12 13c0-3 2-6 5-6-1 3-2 6-5 6z"/><path d="M12 13c0-3-2-6-5-6 1 3 2 6 5 6z"/><path d="M12 9c0-2 1-4 3-4-0 2-1 4-3 4z"/><path d="M7 22h10l-1-5H8z"/></svg>`,
    pillows: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7c0-1 1-2 2-2h10c1 0 2 1 2 2v10c0 1-1 2-2 2H7c-1 0-2-1-2-2z"/><path d="M7 5l-1-1"/><path d="M17 5l1-1"/><path d="M7 19l-1 1"/><path d="M17 19l1 1"/></svg>`
};

// Room items that can be added to empty rooms
const roomItems = [
    { id: 'sofa', name: 'Sofa', icon: 'sofa', category: 'furniture' },
    { id: 'coffee-table', name: 'Coffee Table', icon: 'table', category: 'furniture' },
    { id: 'dining-table', name: 'Dining Table', icon: 'table', category: 'furniture' },
    { id: 'chairs', name: 'Chairs', icon: 'chairs', category: 'furniture' },
    { id: 'bed', name: 'Bed', icon: 'bed', category: 'furniture' },
    { id: 'desk', name: 'Desk', icon: 'monitor', category: 'furniture' },
    { id: 'bookshelf', name: 'Bookshelf', icon: 'book-open', category: 'furniture' },
    { id: 'tv', name: 'TV', icon: 'tv', category: 'electronics' },
    { id: 'lamp', name: 'Lamp', icon: 'zap', category: 'lighting' },
    { id: 'floor-lamp', name: 'Floor Lamp', icon: 'zap', category: 'lighting' },
    { id: 'rug', name: 'Rug', icon: 'rug', category: 'decor' },
    { id: 'curtains', name: 'Curtains', icon: 'maximize-2', category: 'decor' },
    { id: 'art', name: 'Art', icon: 'image', category: 'decor' },
    { id: 'mirror', name: 'Mirror', icon: 'eye', category: 'decor' },
    { id: 'plants', name: 'Plants', icon: 'plants', category: 'decor' },
    { id: 'pillows', name: 'Pillows', icon: 'pillows', category: 'decor' },
    { id: 'throw-blanket', name: 'Throw Blanket', icon: 'square', category: 'decor' },
    { id: 'vase', name: 'Vase', icon: 'droplet', category: 'decor' },
    { id: 'candles', name: 'Candles', icon: 'zap', category: 'decor' },
    { id: 'clock', name: 'Clock', icon: 'clock', category: 'decor' }
];

// Interior design style options (shown as a selectable grid)
const interiorDesignStyles = [
    {
        id: 'modern-minimalist',
        name: 'Minimalist',
        icon: 'minus-square',
        promptText: 'modern minimalist style with clean lines, neutral colors, uncluttered surfaces, and simple functional furniture'
    },
    {
        id: 'scandinavian',
        name: 'Scandinavian',
        icon: 'feather',
        promptText: 'Scandinavian hygge style with light wood, cozy textures, soft neutrals, and warm natural elements'
    },
    {
        id: 'industrial',
        name: 'Industrial',
        icon: 'tool',
        promptText: 'industrial style with exposed metal accents, raw concrete surfaces, dark tones, and urban loft aesthetics'
    },
    {
        id: 'bohemian',
        name: 'Bohemian',
        icon: 'sun',
        promptText: 'bohemian boho style with rich jewel tones, layered patterned textiles, eclectic global-inspired decor, and abundant plants'
    },
    {
        id: 'mid-century',
        name: 'Mid-Century',
        icon: 'watch',
        promptText: 'mid-century modern style with organic curved furniture, warm walnut wood, tapered legs, and retro 1950s–60s design elements'
    },
    {
        id: 'traditional',
        name: 'Traditional',
        icon: 'columns',
        promptText: 'traditional classic style with rich dark wood furniture, ornate details, warm jewel-tone fabrics, and timeless elegant decor'
    },
    {
        id: 'coastal',
        name: 'Coastal',
        icon: 'anchor',
        promptText: 'coastal beach house style with light blues, sandy neutrals, natural rattan and driftwood textures, and airy breezy atmosphere'
    },
    {
        id: 'farmhouse',
        name: 'Farmhouse',
        icon: 'home',
        promptText: 'modern farmhouse style with shiplap walls, distressed wood, vintage-inspired furniture, cozy textiles, and rustic charm'
    },
    {
        id: 'art-deco',
        name: 'Art Deco',
        icon: 'star',
        promptText: 'Art Deco style with bold geometric patterns, gold and brass accents, jewel tones, luxurious velvet fabrics, and glamorous drama'
    },
    {
        id: 'japandi',
        name: 'Japandi',
        icon: 'circle',
        promptText: 'Japandi style blending Japanese wabi-sabi minimalism with Scandinavian coziness using natural materials, muted earthy tones, and serene simplicity'
    }
];

// AI prompt templates for different room types - simplified for clarity
const aiPrompts = {
    empty: "Add furniture to this room. Match the style: ",
    furnished: "Rearrange furniture in this room. Match the style: "
};

// Fallback images for when API calls fail
const fallbackImages = {
    empty: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070'
    ],
    furnished: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2087',
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070'
    ]
};

// Replicate API constants (PROXY_SERVER_URL defined at top)
const REPLICATE_API_URL = `${PROXY_SERVER_URL}/replicate/predictions`;
const REPLICATE_POLL_URL = `${PROXY_SERVER_URL}/replicate/poll`;
const OPENAI_IMAGE_EDIT_URL = `${PROXY_SERVER_URL}/openai/image-edit`;
const FENG_SHUI_API_URL = `${PROXY_SERVER_URL}/api/feng-shui`;
const IDENTIFY_REGION_URL = `${PROXY_SERVER_URL}/api/identify-region`;
const REPLICATE_MODEL_VERSION = 'stability-ai/stable-diffusion-3.5-large'; // Example version, check replicate for latest/best

function setHeaderActionsEnabled(enabled) {
    for (const id of ['layout-editor-btn', 'woodworking-editor-btn', 'login-btn', 'signup-btn']) {
        const el = document.getElementById(id);
        if (!el) continue;
        el.disabled = !enabled;
        if (enabled) el.removeAttribute('aria-busy');
        else el.setAttribute('aria-busy', 'true');
    }
}

function setupProtectedHeaderActions() {
    const layoutEditorBtn = document.getElementById('layout-editor-btn');
    if (layoutEditorBtn) {
        layoutEditorBtn.addEventListener('click', (e) => {
            if (!requireEmailConfirmedForFeature('the layout editor')) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    }
    const woodworkingBtn = document.getElementById('woodworking-editor-btn');
    if (woodworkingBtn) {
        woodworkingBtn.addEventListener('click', (e) => {
            if (!requireEmailConfirmedForFeature('the woodworking editor')) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    }
}

/** Load GA4 when a Measurement ID is configured (via /api/config). No-op if unset. */
function initGoogleAnalytics(measurementId) {
    const id = typeof measurementId === 'string' ? measurementId.trim() : '';
    if (!id || !/^G-[A-Z0-9]+$/i.test(id) || typeof window.gtag === 'function') return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', id);
    flushAnalytics();

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);
}

// Initialize app: fetch config, Supabase client, and auth state (same pattern as Brandwise)
async function initializeApp() {
    authInitError = null;
    authReady = false;
    setHeaderActionsEnabled(false);
    try {
        const response = await fetch(`${PROXY_SERVER_URL}/api/config`);
        if (!response.ok) {
            authInitError = 'Could not load app configuration. Make sure the server is running, then refresh.';
            throw new Error(`Config fetch failed (${response.status})`);
        }
        appConfig = await response.json();

        initGoogleAnalytics(appConfig.gaMeasurementId);
        initOAuthButtons(appConfig.oauthProviders);

        // Populate purchase UI from config
        renderTokenPacks(appConfig.tokenPacks);
        // A restored result may already be on screen; give it the store links.
        renderShopLook();

        if (!appConfig.supabaseUrl || !appConfig.supabaseAnonKey) {
            authInitError = 'Sign-in is not configured on the server (missing Supabase keys).';
            console.error('[auth] /api/config did not return supabaseUrl and supabaseAnonKey');
            return;
        }

        supabase = createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey);
        if (supabase) {
            // Expose for isolated modules (e.g. woodworking editor) that need auth without coupling to main.js internals.
            window.__decoraitSupabase = supabase;
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                currentUser = session.user;
                currentSession = session;
                noteOAuthReturn();
                await fetchSavedLayout();
                await fetchUserTokens();
                await fetchUserSubscription();
            } else if (appConfig.anonGenerationsEnabled) {
                // Signed out: find out whether this device still has its
                // pre-signup generation. Also issues the device cookie, so the
                // id is already stable by the time they press Generate.
                await refreshAnonStatus();
            }
            supabase.auth.onAuthStateChange(async (_event, session) => {
                currentUser = session?.user ?? null;
                currentSession = session ?? null;
                if (session) {
                    anonGenerationsRemaining = 0;
                    await fetchSavedLayout();
                    await fetchUserTokens();
                    await fetchUserSubscription();
                } else {
                    savedLayoutState = null;
                    savedLayoutId = null;
                    savedLayoutName = null;
                    userTokens = 0;
                    userHasSubscription = false;
                    window.__decoraitHasSubscription = false;
                    if (appConfig?.anonGenerationsEnabled) await refreshAnonStatus();
                }
                updateAuthUI();
            });
            window.__decoraitGetLayoutStateToRestore = function () {
                const s = savedLayoutState;
                const id = savedLayoutId;
                const name = savedLayoutName;
                savedLayoutState = null;
                savedLayoutId = null;
                savedLayoutName = null;
                if (s == null) return null;
                return { state: s, layoutId: id || undefined, name: name || 'Untitled layout' };
            };

            // Handle Stripe payment redirect
            const urlParams = new URLSearchParams(window.location.search);
            const paymentStatus = urlParams.get('payment');
            if (paymentStatus === 'success') {
                const sessionId = urlParams.get('session_id');
                // Strip the params before any async work so a refresh can't re-trigger.
                window.history.replaceState({}, document.title, window.location.pathname);
                verifyCheckoutAndCredit(sessionId);
            } else if (paymentStatus === 'cancelled') {
                takeUpgradeReturn(); // nothing to resume
                showToastMessage('Payment cancelled. Nothing was charged.', 'info');
                window.history.replaceState({}, document.title, window.location.pathname);
            }

            // Handle subscription redirect
            const subscriptionStatus = urlParams.get('subscription');
            if (subscriptionStatus === 'success') {
                // Poll until the webhook has activated the subscription
                let attempts = 0;
                const checkSub = async () => {
                    attempts++;
                    await fetchUserSubscription();
                    if (userHasSubscription) {
                        track('purchase', { item: 'subscription' });
                        await fetchSubscriptionUsage();
                        syncDefaultModelToggles();
                        resumeAfterUpgrade('Your plan is active.');
                    } else if (attempts < 6) {
                        setTimeout(checkSub, 2000);
                    } else {
                        // Paid, but the webhook hasn't landed yet. Still a
                        // purchase — and worth seeing how often this happens.
                        track('purchase', { item: 'subscription', activation: 'pending' });
                        showToastMessage('Subscription received! Access may take a moment to activate.', 'info');
                    }
                };
                setTimeout(checkSub, 1000);
                window.history.replaceState({}, document.title, window.location.pathname);
            } else if (subscriptionStatus === 'cancelled') {
                takeUpgradeReturn(); // nothing to resume
                showToastMessage('Checkout cancelled. Nothing was charged.', 'info');
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    } catch (err) {
        console.error('Error initializing app:', err);
        reportError(err);
        if (!authInitError) {
            authInitError = 'Could not start sign-in. Please refresh and try again.';
        }
    } finally {
        authReady = true;
        updateAuthUI();
    }
}

// ── Token helpers ──────────────────────────────────────────────────────────────

async function fetchUserTokens() {
    if (!currentUser || !currentSession) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/credits`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (res.ok) {
            const data = await res.json();
            userTokens = data.credits;
            updateTokensDisplay();
        }
    } catch (err) {
        console.error('fetchUserTokens error:', err);
    }
}

async function fetchUserSubscription() {
    if (!currentUser || !currentSession) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/subscription`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (res.ok) {
            const data = await res.json();
            userHasSubscription = data.isActive === true;
        }
    } catch (err) {
        console.error('fetchUserSubscription error:', err);
    }
    // Expose to the floor plan editor via the window bridge
    window.__decoraitHasSubscription = userHasSubscription;

    // Pull monthly usage so the badge can render up-to-date counts.
    if (userHasSubscription) {
        await fetchSubscriptionUsage();
    } else {
        updateSubscriptionUsageDisplay();
    }
}

/** Fetch the current month's image-generation usage for subscribers. */
async function fetchSubscriptionUsage() {
    if (!currentUser || !currentSession) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/subscription/usage`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (res.ok) {
            const data = await res.json();
            subscriptionUsage = {
                used: data.used ?? 0,
                limit: data.limit ?? 50,
                remaining: data.remaining ?? 0,
            };
            updateSubscriptionUsageDisplay();
        }
    } catch (err) {
        console.error('fetchSubscriptionUsage error:', err);
    }
}

function updateTokensDisplay() {
    if (tokensCount) tokensCount.textContent = userTokens;
    if (modalTokensCount) modalTokensCount.textContent = userTokens;
    // Turn badge red when running low
    if (tokensDisplay) {
        tokensDisplay.classList.toggle('tokens-low', userTokens === 0);
    }
    syncDefaultModelToggles();
}

/** Render the subscriber monthly usage badge. Hidden for non-subscribers. */
function updateSubscriptionUsageDisplay() {
    if (!subscriptionUsageDisplay) return;
    if (!userHasSubscription) {
        subscriptionUsageDisplay.classList.add('hidden');
        return;
    }
    subscriptionUsageDisplay.classList.remove('hidden');
    const { used, limit, remaining } = subscriptionUsage;
    if (subscriptionUsageRemaining) subscriptionUsageRemaining.textContent = remaining;
    if (subscriptionUsageLimit) subscriptionUsageLimit.textContent = limit;
    // Purchased token packs act as overflow once the monthly quota is spent.
    let extraEl = document.getElementById('subscription-usage-extra');
    if (userTokens > 0) {
        if (!extraEl) {
            extraEl = document.createElement('span');
            extraEl.id = 'subscription-usage-extra';
            extraEl.className = 'subscription-usage-extra';
            subscriptionUsageDisplay.appendChild(extraEl);
        }
        extraEl.textContent = `+${userTokens}`;
    } else if (extraEl) {
        extraEl.remove();
    }
    // Only "empty" when the monthly quota AND any purchased overflow are gone.
    const fullyEmpty = remaining <= 0 && userTokens <= 0;
    subscriptionUsageDisplay.classList.toggle('subscription-usage-empty', fullyEmpty);
    subscriptionUsageDisplay.classList.toggle('subscription-usage-low', !fullyEmpty && remaining > 0 && remaining < 10);
    const extraNote = userTokens > 0 ? ` (+${userTokens} purchased)` : '';
    subscriptionUsageDisplay.title = `${used} of ${limit} image generations used this month${extraNote} — click to buy more`;
    syncDefaultModelToggles();
}

/**
 * Check whether the user has tokens available before starting generation.
 * Returns true if generation may proceed, false otherwise (shows buy modal).
 */
/**
 * The action a user was attempting when a gate interrupted them. Replayed once
 * they finish signing in, so the gate costs them a form — not their work.
 */
let pendingGatedAction = null;

export function setPendingGatedAction(fn) {
    pendingGatedAction = typeof fn === 'function' ? fn : null;
}

/** Run whatever the user was trying to do before auth interrupted them. */
function resumePendingGatedAction() {
    if (!pendingGatedAction) return;
    const action = pendingGatedAction;
    pendingGatedAction = null;
    // Let auth state settle before replaying the action.
    setTimeout(() => { try { action(); } catch (err) { console.error(err); } }, 150);
}

// How many pre-signup generations this device has left, per the server.
// Refreshed from /api/anon-status at init and after each anonymous run; the
// server is authoritative, this is only for deciding whether to show the gate.
let anonGenerationsRemaining = 0;

/** Ask the server how many pre-signup generations this device has left. */
async function refreshAnonStatus() {
    if (currentUser) { anonGenerationsRemaining = 0; return; }
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/anon-status`, { credentials: 'same-origin' });
        if (!res.ok) { anonGenerationsRemaining = 0; return; }
        const data = await res.json();
        anonGenerationsRemaining = data.enabled ? (data.remaining || 0) : 0;
    } catch {
        // Offline or server down — fall back to the normal sign-up gate.
        anonGenerationsRemaining = 0;
    }
}

/** True when this run can proceed without an account. */
const canGenerateAnonymously = () => !currentUser && anonGenerationsRemaining > 0;

// Lightweight gate for free-model runs: just verify the user is signed in.
// Free generations don't touch the monthly limit so we don't check tokens.
function ensureLoggedIn() {
    if (!currentUser || !currentSession) {
        // A first-time visitor gets one generation before we ask for anything:
        // the product has to prove itself before it can ask for an account.
        if (canGenerateAnonymously()) return true;
        // Someone hitting this gate has almost always never had an account —
        // showing them a Sign In form for an account they don't have was the
        // single worst moment in the funnel.
        showAuthModal('signup');
        return false;
    }
    return true;
}

function hasTokensAvailable() {
    if (!currentUser || !currentSession) {
        showAuthModal('signup');
        return false;
    }
    if (userHasSubscription) {
        // Subscribers are capped at SUBSCRIPTION_MONTHLY_LIMIT (default 50)
        // generations per calendar month. Once that's spent, purchased token
        // packs act as overflow. Block early when both are gone so we don't
        // make the user wait for a server 429.
        if (subscriptionUsage.remaining > 0) return true;
        if (userTokens > 0) return true;
        openUpgrade('monthly-limit');
        return false;
    }
    if (userTokens <= 0) {
        openUpgrade('premium');
        return false;
    }
    return true;
}

/** Which gate a blocked premium action hits: out of tokens, or out of this month's plan. */
function premiumGate() {
    return userHasSubscription ? 'monthly-limit' : 'premium';
}

/** Whether the user can still run a premium (OpenAI) image generation. */
function hasPremiumGenerationsAvailable() {
    if (!currentUser || !currentSession) return false;
    if (userHasSubscription && subscriptionUsage.remaining > 0) return true;
    return userTokens > 0;
}

function showSubscriptionLimitMessage() {
    openUpgrade('monthly-limit');
}

/**
 * Deduct one token after a SUCCESSFUL image generation.
 * Only called on success — failed generations do not consume a token.
 */
async function useTokenAfterSuccess() {
    // Quota is now reserved server-side at the start of each generation
    // request (with refund on failure), so this is a refresh-only call: the
    // server returns the latest counts and the UI updates the badges.
    if (!currentUser || !currentSession) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/credits/use`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            const data = await res.json();
            if (data.subscription) {
                subscriptionUsage = {
                    used: data.monthlyUsage ?? 0,
                    limit: data.monthlyLimit ?? 50,
                    remaining: data.remaining ?? 0,
                };
                // When the monthly quota is spent, the generation may have been
                // billed to a purchased token pack — refresh that balance too.
                if (subscriptionUsage.remaining <= 0) await fetchUserTokens();
                updateSubscriptionUsageDisplay();
            } else {
                userTokens = data.credits;
                updateTokensDisplay();
            }
        } else {
            // Stale local state — refresh both from server.
            await fetchUserTokens();
            if (userHasSubscription) await fetchSubscriptionUsage();
        }
    } catch (err) {
        console.error('useTokenAfterSuccess error:', err);
        await fetchUserTokens();
        if (userHasSubscription) await fetchSubscriptionUsage();
    }
}

// Fallback packs if /api/config hasn't loaded yet.
const DEFAULT_TOKEN_PACKS = [
    { id: '10', tokens: 10, amount: 499 },
    { id: '20', tokens: 20, amount: 999 },
    { id: '50', tokens: 50, amount: 1999 },
];

/** Render the selectable token-pack cards into the buy-tokens modal. */
function renderTokenPacks(packs) {
    if (!tokenPacksContainer) return;
    const list = (packs && packs.length) ? packs : DEFAULT_TOKEN_PACKS;
    tokenPacksContainer.innerHTML = '';
    list.forEach((pack) => {
        const price = `$${(pack.amount / 100).toFixed(2)}`;
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'token-pack';
        card.dataset.pack = pack.id;
        card.innerHTML =
            `<span class="token-pack-amount">${pack.tokens}</span>` +
            `<span class="token-pack-label">tokens</span>` +
            `<span class="token-pack-price">${price}</span>`;
        card.addEventListener('click', () => handleCheckout(pack.id, card));
        tokenPacksContainer.appendChild(card);
    });
}

async function refreshBuyTokensModalCounts() {
    // Pull the latest counts so the breakdown reflects post-generation state,
    // not the snapshot from when the app loaded. Run both fetches in parallel
    // since they hit unrelated endpoints.
    const tasks = [fetchUserTokens()];
    if (userHasSubscription) tasks.push(fetchSubscriptionUsage());
    try { await Promise.all(tasks); }
    catch (err) { console.error('refreshBuyTokensModalCounts error:', err); }
    renderBuyTokensModalCounts();
}

function renderBuyTokensModalCounts() {
    const monthlyRemaining = userHasSubscription ? (subscriptionUsage?.remaining ?? 0) : 0;
    const purchasedRemaining = userTokens || 0;
    const totalRemaining = monthlyRemaining + purchasedRemaining;
    const countEl = document.getElementById('modal-tokens-count');
    if (countEl) countEl.textContent = totalRemaining;
    const tokensCurrentEl = buyTokensModal?.querySelector('.tokens-current');
    if (!tokensCurrentEl) return;
    tokensCurrentEl.hidden = !currentUser;
    if (userHasSubscription) {
        tokensCurrentEl.innerHTML =
            `You have <strong id="modal-tokens-count">${totalRemaining}</strong> generation${totalRemaining === 1 ? '' : 's'} remaining ` +
            `<span class="tokens-current-breakdown">(${monthlyRemaining} from this month's plan` +
            (purchasedRemaining > 0 ? ` + ${purchasedRemaining} purchased` : '') +
            `).</span>`;
    } else {
        tokensCurrentEl.innerHTML =
            `You have <strong id="modal-tokens-count">${purchasedRemaining}</strong> token${purchasedRemaining === 1 ? '' : 's'} remaining.`;
    }
}

/** The gate the upgrade sheet is showing, while it's open. */
let activeUpgradeGate = null;

/**
 * Open the upgrade sheet for a gate (src/upgrade.js lists them). It says what
 * was blocked, what it costs and what happens after checkout, and shows only
 * the options that unblock it. Signed-out visitors see prices too; buying
 * asks them to make an account first.
 */
function openUpgrade(gate = 'plans') {
    if (typeof gate !== 'string') gate = 'plans'; // when bound straight to a click
    const packs = (appConfig?.tokenPacks && appConfig.tokenPacks.length) ? appConfig.tokenPacks : DEFAULT_TOKEN_PACKS;
    const subscription = appConfig?.subscription || DEFAULT_SUBSCRIPTION;
    const savedDesigns = appConfig?.savedDesigns || DEFAULT_SAVED_DESIGNS;
    const copy = describeGate(gate, { packs, subscription, savedDesigns, isSubscriber: userHasSubscription });
    activeUpgradeGate = copy.gate;
    track('upgrade_shown', { gate: copy.gate, signed_in: !!currentUser });

    if (!buyTokensModal) return;
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (!el) return;
        const target = el.querySelector('span') || el;
        target.textContent = text || '';
        el.hidden = !text;
    };
    setText('upgrade-title', copy.title);
    setText('upgrade-blocked', copy.blocked);
    setText('upgrade-cost', copy.cost);
    setText('upgrade-next', copy.next);

    const tokensOption = buyTokensModal.querySelector('[data-option="tokens"]');
    const planOption = buyTokensModal.querySelector('[data-option="subscription"]');
    if (tokensOption) tokensOption.hidden = !copy.showTokens;
    if (planOption) planOption.hidden = !copy.showSubscription;
    // The option that unblocks this action comes first, and says so when
    // there is a choice. With nothing blocked (the pricing page) there's no
    // "this" to be best for, so no badge.
    const both = copy.showTokens && copy.showSubscription && !!copy.blocked;
    for (const option of [tokensOption, planOption]) {
        if (!option) continue;
        const recommended = option.dataset.option === copy.recommend;
        option.classList.toggle('is-recommended', recommended && both);
        option.style.order = recommended ? '0' : '1';
        const badge = option.querySelector('.upgrade-recommended');
        if (badge) badge.hidden = !(recommended && both);
    }

    const price = document.getElementById('upgrade-plan-price');
    if (price) price.textContent = formatPrice(subscription.amount);
    const points = document.getElementById('upgrade-plan-points');
    if (points) {
        points.innerHTML = '';
        for (const text of copy.subscriptionPoints) {
            const li = document.createElement('li');
            li.textContent = text;
            points.appendChild(li);
        }
    }
    resetSubscribeButton();

    updateTokensDisplay();
    renderBuyTokensModalCounts();
    if (currentUser) refreshBuyTokensModalCounts();
    renderTokenPacks(appConfig?.tokenPacks);

    buyTokensModal.classList.remove('hidden');
    buyTokensModal.classList.add('show');
    buyTokensModal.style.opacity = '1';
    buyTokensModal.style.visibility = 'visible';
    if (typeof feather !== 'undefined') feather.replace();
}

/** The token balance in the header, and other "buy more" entry points. */
function showBuyTokensModal() {
    openUpgrade('tokens');
}

function hideBuyTokensModal() {
    if (buyTokensModal) {
        buyTokensModal.classList.remove('show');
        buyTokensModal.style.opacity = '';
        buyTokensModal.style.visibility = '';
        buyTokensModal.classList.add('hidden');
    }
    activeUpgradeGate = null;
    // /upgrade is the sheet; closing it there leaves for the home page
    // rather than an empty page with a pricing URL.
    if (currentRoute().name === 'upgrade') {
        navigate('home', {}, { replace: true });
    }
}

/**
 * Note where checkout should bring them back to, and what to pick up there.
 * Returns the path for the server's return address.
 */
function rememberUpgradeReturn() {
    // Paying from /upgrade itself lands on the home page, not the sheet again.
    const path = window.location.pathname === '/upgrade' ? '/' : window.location.pathname;
    saveUpgradeReturn({
        gate: activeUpgradeGate || 'plans',
        path,
        refinement: refinementInput?.value || '',
    });
    return path;
}

/** Signed out at checkout: make the account, then carry on to checkout. */
function requireAccountForCheckout(resume) {
    hideBuyTokensModal();
    setPendingGatedAction(resume);
    showAuthModal('signup');
}

async function handleCheckout(pack, cardEl) {
    if (!pack) return;
    if (!currentUser || !currentSession) {
        const gate = activeUpgradeGate;
        requireAccountForCheckout(() => { openUpgrade(gate || 'tokens'); });
        return;
    }
    const cards = tokenPacksContainer ? Array.from(tokenPacksContainer.children) : [];
    try {
        cards.forEach((c) => { c.disabled = true; });
        if (cardEl) cardEl.classList.add('token-pack--loading');
        track('begin_checkout', { item: `token-pack-${pack}`, gate: activeUpgradeGate || 'plans' });
        const returnTo = rememberUpgradeReturn();
        const res = await fetch(`${PROXY_SERVER_URL}/api/checkout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pack, return_to: returnTo })
        });
        if (res.ok) {
            const { url } = await res.json();
            window.location.href = url;
        } else {
            const body = await res.json().catch(() => ({}));
            throw new Error(body.detail || 'Failed to create checkout session');
        }
    } catch (err) {
        console.error('handleCheckout error:', err);
        showToastMessage(err.message || 'Error starting checkout. Please try again.', 'error');
        cards.forEach((c) => { c.disabled = false; });
        if (cardEl) cardEl.classList.remove('token-pack--loading');
    }
}

/**
 * Deterministically confirm a completed purchase and credit tokens via the
 * server, independent of Stripe webhook timing. Idempotent on the server, so
 * this is safe even if the webhook also fires. Retries while the payment is
 * still settling or the server is cold-starting.
 */
async function verifyCheckoutAndCredit(sessionId) {
    if (!currentUser || !currentSession) return;
    if (!sessionId) {
        // No session id (older checkout link). Fall back to a balance refresh.
        await fetchUserTokens();
        if (userHasSubscription) { await fetchSubscriptionUsage(); }
        showToastMessage('Payment received! Tokens may take a moment to appear.', 'info');
        return;
    }

    showToastMessage('Confirming your purchase…', 'info');

    const maxAttempts = 6;
    let attempt = 0;
    const attemptVerify = async () => {
        attempt++;
        try {
            const res = await fetch(`${PROXY_SERVER_URL}/api/verify-checkout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${currentSession.access_token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ session_id: sessionId })
            });

            if (res.ok) {
                const data = await res.json();
                userTokens = data.credits;
                updateTokensDisplay();
                if (userHasSubscription) updateSubscriptionUsageDisplay();
                if (data.tokensAdded) track('purchase', { item: 'token-pack', tokens: data.tokensAdded });
                syncDefaultModelToggles();
                resumeAfterUpgrade(`${data.tokensAdded} premium design${data.tokensAdded === 1 ? '' : 's'} added.`);
                return;
            }

            // 409 = payment still settling; retry with backoff.
            if (res.status === 409 && attempt < maxAttempts) {
                setTimeout(attemptVerify, 2000);
                return;
            }

            const body = await res.json().catch(() => ({}));
            throw new Error(body.error || `verify failed (${res.status})`);
        } catch (err) {
            if (attempt < maxAttempts) {
                setTimeout(attemptVerify, 2000);
                return;
            }
            console.error('verifyCheckoutAndCredit error:', err);
            // Last resort: the webhook backup may still credit shortly. Refresh
            // what we can and tell the user how to recover.
            await fetchUserTokens();
            if (userHasSubscription) updateSubscriptionUsageDisplay();
            showToastMessage('Payment received. Your tokens will appear shortly — refresh if they don’t.', 'info');
        }
    };
    attemptVerify();
}

/**
 * Resolves once the photo and versions from the last visit are back on screen
 * (or there were none). Checkout returns with a page load, so anything that
 * resumes work after paying waits for this first.
 */
let markSessionRestored = () => {};
const sessionRestored = new Promise((resolve) => { markSessionRestored = resolve; });

/**
 * Back from a successful checkout: pick up what the gate interrupted. The
 * page they paid from has been reloaded with their design restored; this
 * puts the rest back (premium on, the change they'd typed) and offers to run
 * it with one tap. It doesn't start a paid run on its own: they should see
 * the design come back before spending what they just bought.
 * @param {string} confirmation  what the purchase added, e.g. "10 premium designs added."
 */
async function resumeAfterUpgrade(confirmation) {
    const pending = takeUpgradeReturn();
    if (!pending) {
        showToastMessage(`Payment successful. ${confirmation}`, 'success');
        return;
    }
    track('upgrade_resumed', { gate: pending.gate });
    await sessionRestored;

    switch (pending.gate) {
        case 'premium':
        case 'monthly-limit': {
            if (hasPremiumGenerationsAvailable()) setDefaultModelPref('premium');
            syncDefaultModelToggles();
            if (pending.refinement && refinementInput && !refinementInput.value.trim()) {
                refinementInput.value = pending.refinement;
                refinementInput.dispatchEvent(new Event('input'));
            }
            const onResults = resultsSection && !resultsSection.classList.contains('hidden');
            const onDesign = wizardContainer && !wizardContainer.classList.contains('hidden');
            if (!onResults && !onDesign) {
                showToastMessage(`${confirmation} Premium is on.`, 'success');
                return;
            }
            const hasChange = !!refinementInput?.value.trim();
            showToastMessage(`${confirmation} Premium is on.`, 'success', {
                actionLabel: onResults ? (hasChange ? 'Apply change' : 'New version') : 'Generate',
                onAction: () => (onResults ? regenerateDesigns() : generateDesigns()),
                duration: 15000,
            });
            return;
        }
        case 'library':
            showToastMessage(`${confirmation} Your library now keeps up to ${(appConfig?.savedDesigns || DEFAULT_SAVED_DESIGNS).subscriber} designs.`, 'success', {
                actionLabel: 'Open library',
                onAction: () => openLibrary('designs'),
                duration: 12000,
            });
            return;
        case 'floor-plan':
            showToastMessage(`${confirmation} The full floor plan editor is unlocked.`, 'success');
            return;
        default:
            showToastMessage(`Payment successful. ${confirmation}`, 'success');
    }
}

// ── Subscription ───────────────────────────────────────────────────────────

/** Anything that just shows the options, gate unnamed. */
function showSubscribeModal(gate = 'plans') {
    openUpgrade(typeof gate === 'string' ? gate : 'plans');
}

function resetSubscribeButton() {
    const btn = document.getElementById('tokens-modal-subscribe-btn');
    if (!btn) return;
    const amount = (appConfig?.subscription || DEFAULT_SUBSCRIPTION).amount;
    btn.disabled = false;
    btn.innerHTML = `<span>Subscribe for ${formatPrice(amount)} a month</span>`;
}

async function handleSubscribeCheckout() {
    if (!currentUser || !currentSession) {
        const gate = activeUpgradeGate;
        requireAccountForCheckout(() => { openUpgrade(gate || 'plans'); });
        return;
    }
    const subscribeBtn = document.getElementById('tokens-modal-subscribe-btn');
    try {
        if (subscribeBtn) {
            subscribeBtn.disabled = true;
            subscribeBtn.innerHTML = '<span>Processing...</span>';
        }
        track('begin_checkout', { item: 'subscription', gate: activeUpgradeGate || 'plans' });
        const returnTo = rememberUpgradeReturn();
        const res = await fetch(`${PROXY_SERVER_URL}/api/subscribe`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ return_to: returnTo })
        });
        if (res.ok) {
            const { url } = await res.json();
            window.location.href = url;
        } else {
            const body = await res.json().catch(() => ({}));
            throw new Error(body.detail || 'Failed to create subscription session');
        }
    } catch (err) {
        console.error('handleSubscribeCheckout error:', err);
        showToastMessage(err.message || 'Error starting subscription. Please try again.', 'error');
        resetSubscribeButton();
    }
}

// Exposed so floorPlanEditor can open the modal
window.__decoraitShowSubscribeModal = () => openUpgrade('floor-plan');
window.__decoraitGetAccessToken = () => currentSession?.access_token || null;
/** For the editors' "Sign in" toast buttons. */
window.__decoraitShowAuth = (mode = 'login') => showAuthModal(mode);

/** The shared toast (src/toast.js); the editors use the same one. */
function showToastMessage(message, type, opts) {
    return showToast(message, type, opts);
}

// ── End token helpers ──────────────────────────────────────────────────────────

// ── Feedback widget ────────────────────────────────────────────────────────────
function initFeedbackWidget() {
    const fab = document.getElementById('feedback-fab');
    const modal = document.getElementById('feedback-modal');
    const form = document.getElementById('feedback-form');
    const messageInput = document.getElementById('feedback-message');
    const emailInput = document.getElementById('feedback-email');
    const honeypotInput = document.getElementById('feedback-website');
    const errorEl = document.getElementById('feedback-error');
    const submitBtn = document.getElementById('feedback-submit-btn');
    const successEl = document.getElementById('feedback-success');
    if (!fab || !modal || !form) return;

    const openModal = () => {
        form.classList.remove('hidden');
        successEl.classList.add('hidden');
        errorEl.classList.add('hidden');
        modal.classList.add('show');
        messageInput.focus();
    };
    const closeModal = () => modal.classList.remove('show');

    fab.addEventListener('click', openModal);
    document.getElementById('feedback-close-btn')?.addEventListener('click', closeModal);
    document.getElementById('feedback-done-btn')?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorEl.classList.add('hidden');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
        try {
            const headers = { 'Content-Type': 'application/json' };
            if (currentSession?.access_token) headers.Authorization = `Bearer ${currentSession.access_token}`;
            const res = await fetch(`${PROXY_SERVER_URL}/api/feedback`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    message: messageInput.value,
                    email: emailInput.value,
                    page: window.location.href,
                    website: honeypotInput?.value || '',
                }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'Failed to send feedback. Please try again.');
            }
            form.reset();
            form.classList.add('hidden');
            successEl.classList.remove('hidden');
            if (typeof feather !== 'undefined') feather.replace();
        } catch (err) {
            errorEl.textContent = err.message;
            errorEl.classList.remove('hidden');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Feedback';
        }
    });
}

async function fetchSavedLayout() {
    if (!currentSession?.access_token) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/layout`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (res.ok) {
            const data = await res.json();
            if (data.state != null) {
                savedLayoutState = data.state;
                savedLayoutId = data.id || null;
                savedLayoutName = data.name || null;
            }
        }
    } catch (e) {
        console.error('Failed to fetch saved layout:', e);
    }
}

async function handleSaveLayout() {
    if (!currentUser?.email_confirmed_at || !currentSession?.access_token) return;
    const name = getLayoutNameDisplay();
    await loadFloorPlanEditor();
    const state = FloorPlanEditor.getState();
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentSession.access_token}`
    };

    try {
        const byNameRes = await fetch(
            `${PROXY_SERVER_URL}/api/layouts/by-name?name=${encodeURIComponent(name)}`,
            { headers }
        );
        let existingId = null;
        if (byNameRes.ok) {
            const existing = await byNameRes.json().catch(() => null);
            existingId = existing?.id || null;
            if (existingId) {
                const proceed = await showConfirmDialog(
                    `A layout named "${name}" already exists. Overwrite it? The current saved version will be replaced.`,
                    'Overwrite layout',
                    'Overwrite',
                    'Cancel'
                );
                if (!proceed) return;
            }
        }

        let previewDataUrl = null;
        if (typeof FloorPlanEditor.getPreviewDataURL === 'function') {
            try {
                previewDataUrl = await FloorPlanEditor.getPreviewDataURL(120);
            } catch (_) {}
        }

        let targetId = null;
        if (existingId) {
            const res = await fetch(`${PROXY_SERVER_URL}/api/layouts/${existingId}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify({ name, state, preview_data_url: previewDataUrl })
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error || 'Failed to save');
            }
            const data = await res.json().catch(() => ({}));
            targetId = data?.id || existingId;
        } else {
            const res = await fetch(`${PROXY_SERVER_URL}/api/layouts`, {
                method: 'POST',
                headers,
                body: JSON.stringify({ name, state, preview_data_url: previewDataUrl })
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error || 'Failed to save');
            }
            const data = await res.json().catch(() => ({}));
            targetId = data?.id || null;
        }

        if (targetId) {
            currentLayoutId = targetId;
            if (typeof window.__decoraitCurrentLayoutId !== 'undefined') window.__decoraitCurrentLayoutId = targetId;
        }
        showLayoutSaveToast('Layout saved.');
        if (typeof FloorPlanEditor.markSaved === 'function') FloorPlanEditor.markSaved();
        refreshLayoutsList(true);
    } catch (e) {
        showLayoutSaveToast(`Couldn\u2019t save your layout${e?.message && e.message !== 'Failed to save' ? `: ${e.message}` : '.'}`, true, () => handleSaveLayout());
    }
}

const DEFAULT_LAYOUT_NAME = 'Untitled layout';
const MAX_LAYOUT_NAME_LENGTH = 80;

function getLayoutNameDisplay() {
    const el = document.getElementById('layout-name-display');
    if (!el) return DEFAULT_LAYOUT_NAME;
    let t = (el.textContent || '').trim();
    if (!t) return DEFAULT_LAYOUT_NAME;
    if (t.length > MAX_LAYOUT_NAME_LENGTH) {
        t = t.slice(0, MAX_LAYOUT_NAME_LENGTH);
        el.textContent = t;
    }
    return t;
}

function setLayoutNameDisplay(name) {
    const el = document.getElementById('layout-name-display');
    if (!el) return;
    let value = (name && String(name).trim()) || '';
    if (value === DEFAULT_LAYOUT_NAME) value = '';
    if (value.length > MAX_LAYOUT_NAME_LENGTH) {
        value = value.slice(0, MAX_LAYOUT_NAME_LENGTH);
    }
    el.textContent = value;
}

window.__decoraitOnLayoutEditorShown = function (opts) {
    setLayoutNameDisplay(opts?.name || DEFAULT_LAYOUT_NAME);
};

/**
 * Floor plan editor messages use the shared toast (src/toast.js), so a save
 * here looks the same as one anywhere else. A failure can offer "Try again".
 */
function showLayoutSaveToast(message, isError = false, retry = null) {
    showToast(message, isError ? 'error' : 'success', retry ? { actionLabel: 'Try again', onAction: retry } : {});
}

async function fetchLayouts(bustCache = false) {
    if (!currentSession?.access_token) return [];
    try {
        const url = `${PROXY_SERVER_URL}/api/layouts` + (bustCache ? `?_=${Date.now()}` : '');
        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` },
            ...(bustCache && { cache: 'no-store' })
        });
        if (!res.ok) return [];
        const data = await res.json();
        const layouts = data.layouts;
        return Array.isArray(layouts) ? layouts : (layouts ? [layouts] : []);
    } catch (e) {
        console.error('Failed to fetch layouts:', e);
        return [];
    }
}

/** Small gray placeholder image as data URL when layout has no preview. */
function getLayoutPreviewPlaceholder() {
    const w = 56;
    const h = 42;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Preview', w / 2, h / 2);
    return canvas.toDataURL('image/jpeg', 0.8);
}

function formatLayoutDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return d.toLocaleDateString([], { month: 'short', day: 'numeric', year: d.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
}

/** How many layouts the list showed last, so the placeholders match. */
let layoutsLastCount = 0;

function refreshLayoutsList(bustCache = false) {
    const listEl = document.getElementById('my-layouts-list');
    if (!listEl) return;
    listEl.innerHTML = placeholderMarkup('layout-row', { count: layoutsLastCount, label: 'Loading your layouts…' });
    fetchLayouts(bustCache).then(layouts => {
        layoutsLastCount = layouts.length;
        listEl.innerHTML = '';
        if (layouts.length === 0) {
            listEl.innerHTML = '<p class="my-layouts-empty">No saved layouts yet. Use Save to create one.</p>';
            return;
        }
        layouts.forEach(layout => {
            const row = document.createElement('div');
            row.className = 'my-layouts-item';
            row.dataset.layoutId = layout.id;
            const topRow = document.createElement('div');
            topRow.className = 'my-layouts-item-top';
            const nameCell = document.createElement('div');
            nameCell.className = 'my-layouts-item-name-cell';
            const name = document.createElement('span');
            name.className = 'my-layouts-item-name';
            name.textContent = layout.name || 'Unnamed';
            const meta = document.createElement('span');
            meta.className = 'my-layouts-item-meta';
            meta.textContent = formatLayoutDate(layout.updated_at);
            nameCell.append(name, meta);
            const previewCell = document.createElement('div');
            previewCell.className = 'my-layouts-item-preview-cell';
            const img = document.createElement('img');
            img.className = 'my-layouts-item-preview';
            img.alt = '';
            img.loading = 'lazy';
            if (layout.preview_data_url && layout.preview_data_url.startsWith('data:')) {
                img.src = layout.preview_data_url;
            } else {
                img.src = getLayoutPreviewPlaceholder();
            }
            img.onerror = function () {
                this.src = getLayoutPreviewPlaceholder();
            };
            previewCell.appendChild(img);
            topRow.append(nameCell, previewCell);
            const actions = document.createElement('div');
            actions.className = 'my-layouts-item-actions';
            const loadBtn = document.createElement('button');
            loadBtn.type = 'button';
            loadBtn.className = 'my-layouts-load-btn';
            loadBtn.textContent = 'Load';
            loadBtn.setAttribute('aria-label', 'Load this floor plan into the editor');
            loadBtn.addEventListener('click', () => loadLayoutById(layout.id));
            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'my-layouts-delete-btn';
            delBtn.textContent = 'Delete';
            delBtn.setAttribute('aria-label', 'Remove this layout from your saved layouts');
            delBtn.addEventListener('click', () => deleteLayoutById(layout.id));
            actions.append(loadBtn, delBtn);
            row.append(topRow, actions);
            listEl.appendChild(row);
        });
        if (typeof feather !== 'undefined') feather.replace();
    }).catch(() => {
        listEl.innerHTML = '<p class="my-layouts-empty">Couldn\u2019t load your layouts. Try again in a moment.</p>';
    });
}

async function loadLayoutById(id) {
    if (!currentSession?.access_token) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/layouts/${id}`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (!res.ok) throw new Error('Failed to load layout');
        const data = await res.json();
        await loadFloorPlanEditor();
        FloorPlanEditor.loadState(data.state);
        currentLayoutId = id;
        if (typeof window.__decoraitCurrentLayoutId !== 'undefined') window.__decoraitCurrentLayoutId = id;
        setLayoutNameDisplay(data.name || DEFAULT_LAYOUT_NAME);
        showLayoutSaveToast('Layout loaded.');
        const panel = document.getElementById('my-layouts-panel');
        panel?.classList.remove('show');
        panel?.classList.add('hidden');
    } catch (e) {
        showLayoutSaveToast('Couldn\u2019t open that layout. Check your connection and try again.', true, () => loadLayoutById(id));
    }
}

async function deleteLayoutById(id) {
    if (!currentSession?.access_token) return;
    const proceed = await showConfirmDialog(
        'Delete this saved layout? This cannot be undone.',
        'Delete layout',
        'Delete',
        'Cancel'
    );
    if (!proceed) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/layouts/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (!res.ok) throw new Error('Failed to delete');
        if (currentLayoutId === id) currentLayoutId = null;
        if (typeof window.__decoraitCurrentLayoutId !== 'undefined' && window.__decoraitCurrentLayoutId === id) window.__decoraitCurrentLayoutId = null;
        refreshLayoutsList();
        showLayoutSaveToast('Layout deleted.');
        return true;
    } catch (e) {
        showLayoutSaveToast('Couldn\u2019t delete that layout. Try again in a moment.', true);
        return false;
    }
}

// ===== SAVED GENERATED DESIGNS (every signed-in account; the server caps how many) =====

const DESIGN_SOURCE_LABELS = {
    'room-design': 'Room design',
    'quick-edit': 'Quick edit',
    'feng-shui': 'Feng shui',
    'room3d': '3D room render',
};

const DESIGN_EDIT_FLOW_LABELS = {
    'room-design': 'Design Wizard',
    'quick-edit': 'Quick Edit',
    'feng-shui': 'Feng Shui Analysis',
    'room3d': '3D Room Render',
};

const DESIGN_MODEL_LABELS = {
    openai: 'Premium (GPT Image)',
    'proplabs-staging': 'PropLabs Virtual Staging',
    img2img: 'SD 3.5 Large',
    'nano-banana': 'Nano Banana',
    'bria-eraser': 'Bria Eraser',
};

const DESIGN_ROOM_TYPE_LABELS = {
    empty: 'Empty room',
    furnished: 'Furnished room',
};

async function autoSaveGeneratedDesign(imageUrl, {
    prompt = null,
    model = null,
    sourceType = 'room-design',
    metadata = {},
    savedDesignId = null,
} = {}) {
    // Every signed-in account keeps its designs; the server applies the limit.
    if (!currentUser || !currentSession?.access_token || !imageUrl) return savedDesignId || null;
    if (savedDesignId) return savedDesignId;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/designs`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl, prompt, model, sourceType, metadata }),
        });
        // 409: not kept (an account over its limit). The library explains it.
        if (!res.ok) {
            if (res.status !== 409) console.warn('autoSaveGeneratedDesign failed:', res.status);
            return null;
        }
        const data = await res.json();
        return data.id || null;
    } catch (err) {
        console.warn('autoSaveGeneratedDesign error:', err);
        return null;
    }
}

async function onGenerationSuccess(imageUrl, saveMeta = {}) {
    track('generation_succeeded', {
        model: saveMeta.model,
        source_type: saveMeta.sourceType || 'room-design',
        signed_in: !!currentUser,
        version: designHistory.filter(h => !h.isOriginal).length + 1,
        duration_ms: generationStartedAt ? Date.now() - generationStartedAt : undefined,
    });
    generationStartedAt = 0;
    pushDesignHistory(imageUrl, {
        prompt: saveMeta.prompt || '',
        model: saveMeta.model || null,
        sourceType: saveMeta.sourceType || 'room-design',
        metadata: saveMeta.metadata && typeof saveMeta.metadata === 'object' ? saveMeta.metadata : {},
    });
    await autoSaveGeneratedDesign(imageUrl, saveMeta);
    libraryState.items.designs = null; // the library re-reads it next time
    // A new saved design may be the user's first — re-check so the
    // "use a saved design" option appears without needing a reload.
    invalidateUseSavedAvailability();
    refreshUseSavedAvailability();
}

/** The library's first page: designs plus how many the account keeps. */
async function fetchSavedDesignsPage(bustCache = false) {
    if (!currentSession?.access_token) return { designs: [], total: 0, limit: 0, subscriber: false };
    const url = `${PROXY_SERVER_URL}/api/designs?limit=100` + (bustCache ? `&_=${Date.now()}` : '');
    const res = await fetch(url, { headers: { Authorization: `Bearer ${currentSession.access_token}` } });
    if (!res.ok) throw new Error(`designs ${res.status}`);
    const data = await res.json();
    const designs = Array.isArray(data.designs) ? data.designs : [];
    return {
        designs,
        total: Number.isFinite(data.total) ? data.total : designs.length,
        limit: data.limit || (appConfig?.savedDesigns || DEFAULT_SAVED_DESIGNS)[data.subscriber ? 'subscriber' : 'free'],
        subscriber: !!data.subscriber,
    };
}

async function fetchSavedDesigns(bustCache = false) {
    if (!currentSession?.access_token) return [];
    try {
        const url = `${PROXY_SERVER_URL}/api/designs` + (bustCache ? `?_=${Date.now()}` : '');
        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` },
        });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data.designs) ? data.designs : [];
    } catch (e) {
        console.error('Failed to fetch designs:', e);
        return [];
    }
}

function formatDesignSourceLabel(sourceType) {
    return DESIGN_SOURCE_LABELS[sourceType] || 'Generated design';
}

function formatDesignTitle(design) {
    // styleName is the short name ("Scandinavian"); older designs only have
    // the style's prompt text, which is too long for a title.
    const styleName = design?.metadata?.styleName;
    if (typeof styleName === 'string' && styleName.trim()) return styleName.trim();
    const style = design?.metadata?.style;
    if (typeof style === 'string' && style.trim()) return style.trim();
    return formatDesignSourceLabel(design?.sourceType);
}

function formatDesignDate(iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric', year: 'numeric' });
}

function getDesignStyleLabel(design) {
    const styleText = design?.metadata?.style?.trim();
    if (styleText) {
        const match = interiorDesignStyles.find(s => s.promptText === styleText);
        return match?.name || styleText;
    }
    const stylePrompt = design?.metadata?.stylePrompt?.trim();
    return stylePrompt || null;
}

function buildDesignPreviewRows(design) {
    const rows = [
        {
            label: 'Edit flow',
            value: DESIGN_EDIT_FLOW_LABELS[design.sourceType] || formatDesignSourceLabel(design.sourceType),
        },
        { label: 'Date', value: formatDesignDate(design.createdAt) },
    ];

    if (design.model) {
        rows.push({
            label: 'Model',
            value: DESIGN_MODEL_LABELS[design.model] || design.model,
        });
    }

    const roomType = design.metadata?.roomType;
    if (roomType) {
        rows.push({
            label: 'Room type',
            value: DESIGN_ROOM_TYPE_LABELS[roomType] || roomType,
        });
    }

    const styleLabel = getDesignStyleLabel(design);
    if (styleLabel) {
        rows.push({ label: 'Style', value: styleLabel });
    }

    return rows;
}

function renderDesignPreviewDetails(design) {
    const detailsEl = document.getElementById('my-designs-preview-details');
    const promptWrap = document.getElementById('my-designs-preview-prompt-wrap');
    const promptEl = document.getElementById('my-designs-preview-prompt');
    if (!detailsEl) return;

    detailsEl.innerHTML = '';
    buildDesignPreviewRows(design).forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'my-designs-detail-row';
        rowEl.setAttribute('role', 'listitem');

        const label = document.createElement('span');
        label.className = 'my-designs-detail-label';
        label.textContent = row.label;

        const value = document.createElement('span');
        value.className = 'my-designs-detail-value';
        value.textContent = row.value;

        rowEl.append(label, value);
        detailsEl.appendChild(rowEl);
    });

    const prompt = design.prompt?.trim();
    if (promptWrap && promptEl) {
        if (prompt) {
            promptEl.textContent = prompt;
            promptWrap.classList.remove('hidden');
        } else {
            promptEl.textContent = '';
            promptWrap.classList.add('hidden');
        }
    }
}

// ===== LIBRARY (/library/{designs,plans,builds}) =====
// One place for everything an account keeps. The words and rules live in
// src/library.js; this draws them. The floor plan and woodworking editors keep
// their own quick switchers ("My layouts", "Projects") for use mid-edit.

const libraryState = {
    tab: 'designs',
    // null = not loaded yet, 'error' = failed, otherwise an array
    items: { designs: null, plans: null, builds: null },
    designsMeta: null,
    query: '',
    // true when opening the library added a history entry, so closing can go back
    pushedUrl: false,
    previewFrom: null,
    openedFrom: null,
};

const LIBRARY_SKELETON_COUNT = 6;

function libraryPanel() {
    return document.getElementById('library-panel');
}

function isLibraryOpen() {
    return !!libraryPanel()?.classList.contains('show');
}

function libraryItemText(tab, item) {
    if (tab === 'designs') {
        return [
            formatDesignTitle(item),
            item.prompt,
            formatDesignSourceLabel(item.sourceType),
            item.metadata?.roomType && DESIGN_ROOM_TYPE_LABELS[item.metadata.roomType],
        ].filter(Boolean).join(' ');
    }
    return item.name || '';
}

function openLibrary(tab = 'designs', { focus = true } = {}) {
    const panel = libraryPanel();
    if (!panel) return;
    const wasOpen = isLibraryOpen();
    const nextTab = normaliseTab(tab);
    if (!wasOpen) {
        libraryState.openedFrom = document.activeElement;
        panel.classList.remove('hidden');
        panel.classList.add('show');
        // A route being applied already owns the URL; anything else pushes one,
        // so Back closes the library.
        libraryState.pushedUrl = !routeIsApplying() && currentRoute().name !== 'library';
        if (libraryState.pushedUrl) syncUrl('library', { tab: nextTab });
        track('library_opened', { tab: nextTab, signed_in: !!currentUser });
    }
    selectLibraryTab(nextTab);
    // Focus moves into the sheet (not onto a tab, which would draw a focus
    // ring for a mouse click); Tab then reaches the tabs.
    if (focus && !wasOpen) panel.querySelector('.library-sheet')?.focus({ preventScroll: true });
    if (typeof feather !== 'undefined') feather.replace();
}

/**
 * @param {object} [opts]
 * @param {boolean} [opts.leaveUrl] another navigation follows (opening a
 *   design or an editor), so don't touch history here
 */
function closeLibrary({ leaveUrl = false } = {}) {
    const panel = libraryPanel();
    if (!panel || !isLibraryOpen()) return;
    closeSavedDesignPreview();
    panel.classList.remove('show');
    panel.classList.add('hidden');
    if (!leaveUrl && currentRoute().name === 'library') {
        if (libraryState.pushedUrl) window.history.back();
        else navigate('home', {}, { replace: true });
    }
    libraryState.pushedUrl = false;
    const back = libraryState.openedFrom;
    libraryState.openedFrom = null;
    if (!leaveUrl && back && document.contains(back) && back.offsetParent !== null) back.focus();
}

function selectLibraryTab(tab, { focusTab = false } = {}) {
    const t = normaliseTab(tab);
    const changed = t !== libraryState.tab;
    libraryState.tab = t;
    if (changed) {
        libraryState.query = '';
        const search = document.getElementById('library-search');
        if (search) search.value = '';
    }
    closeSavedDesignPreview();
    document.querySelectorAll('#library-panel .library-tab').forEach((btn) => {
        const on = btn.dataset.tab === t;
        btn.setAttribute('aria-selected', on ? 'true' : 'false');
        btn.tabIndex = on ? 0 : -1;
        if (on && focusTab) btn.focus();
    });
    document.getElementById('library-tabpanel')?.setAttribute('aria-labelledby', `library-tab-${t}`);
    const search = document.getElementById('library-search');
    if (search) search.placeholder = `Search ${TAB_LABELS[t].toLowerCase()}`;
    // Keep the address on the tab being shown, without adding history per tab.
    if (currentRoute().name === 'library' && currentRoute().params?.tab !== t && !routeIsApplying()) {
        navigate('library', { tab: t }, { replace: true, silent: true });
    }
    renderLibrary();
    if (currentUser && libraryState.items[t] === null) loadLibraryTab(t);
}

async function fetchBuilds() {
    if (!currentSession?.access_token) return [];
    const res = await fetch(`${PROXY_SERVER_URL}/api/woodworking-projects`, {
        headers: { Authorization: `Bearer ${currentSession.access_token}` },
    });
    if (!res.ok) throw new Error(`builds ${res.status}`);
    const data = await res.json();
    return Array.isArray(data.projects) ? data.projects : [];
}

async function fetchPlansStrict(bustCache) {
    if (!currentSession?.access_token) return [];
    const url = `${PROXY_SERVER_URL}/api/layouts` + (bustCache ? `?_=${Date.now()}` : '');
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${currentSession.access_token}` },
        ...(bustCache && { cache: 'no-store' }),
    });
    if (!res.ok) throw new Error(`layouts ${res.status}`);
    const data = await res.json();
    const layouts = data.layouts;
    return Array.isArray(layouts) ? layouts : (layouts ? [layouts] : []);
}

let libraryLoadSeq = 0;

async function loadLibraryTab(tab, bustCache = false) {
    const t = normaliseTab(tab);
    if (!currentUser) { renderLibrary(); return; }
    const seq = ++libraryLoadSeq;
    libraryState.items[t] = null;
    if (t === libraryState.tab) renderLibrary();
    try {
        if (t === 'designs') {
            const page = await fetchSavedDesignsPage(bustCache);
            libraryState.items.designs = page.designs;
            libraryState.designsMeta = page;
        } else if (t === 'plans') {
            libraryState.items.plans = await fetchPlansStrict(bustCache);
        } else {
            libraryState.items.builds = await fetchBuilds();
        }
    } catch (err) {
        console.warn(`Library: ${t} failed to load`, err);
        libraryState.items[t] = 'error';
    }
    if (seq === libraryLoadSeq || t === libraryState.tab) renderLibrary();
}

function libraryCountLabel(tab) {
    const items = libraryState.items[tab];
    if (!Array.isArray(items)) return '';
    if (tab === 'designs' && libraryState.designsMeta) return String(libraryState.designsMeta.total);
    return String(items.length);
}

function renderLibrary() {
    const tab = libraryState.tab;
    const grid = document.getElementById('library-grid');
    const empty = document.getElementById('library-empty');
    const status = document.getElementById('library-status');
    const statusText = document.getElementById('library-status-text');
    const upsell = document.getElementById('library-status-upsell');
    const searchWrap = document.getElementById('library-search-wrap');
    if (!grid || !empty) return;

    document.querySelectorAll('#library-panel .library-tab').forEach((btn) => {
        const count = btn.querySelector('.library-tab-count');
        const label = currentUser ? libraryCountLabel(btn.dataset.tab) : '';
        if (count) count.textContent = label ? ` ${label}` : '';
    });

    grid.innerHTML = '';
    grid.classList.toggle('library-grid--list', tab !== 'designs');
    status?.classList.add('hidden');
    searchWrap?.classList.add('hidden');
    empty.classList.add('hidden');
    grid.setAttribute('aria-busy', 'false');

    if (!currentUser) {
        showLibraryEmpty(emptyState(tab, { signedIn: false }));
        return;
    }

    const items = libraryState.items[tab];
    if (items === null) {
        grid.setAttribute('aria-busy', 'true');
        for (let i = 0; i < LIBRARY_SKELETON_COUNT; i++) {
            const sk = document.createElement('div');
            sk.className = `library-card library-card--skeleton${tab !== 'designs' ? ' library-card--row' : ''}`;
            sk.setAttribute('aria-hidden', 'true');
            sk.innerHTML = '<span class="library-card-thumb"></span><span class="library-skeleton-line"></span><span class="library-skeleton-line library-skeleton-line--short"></span>';
            grid.appendChild(sk);
        }
        return;
    }
    if (items === 'error') {
        showLibraryEmpty(emptyState(tab, { signedIn: true, failed: true }));
        return;
    }

    if (tab === 'designs' && libraryState.designsMeta && status && statusText) {
        const line = designsStatus(libraryState.designsMeta);
        if (line) {
            statusText.textContent = line.text;
            status.classList.remove('hidden');
            status.classList.toggle('is-full', line.full);
            upsell?.classList.toggle('hidden', !line.upsell);
        }
    }
    if (shouldShowSearch(items.length)) searchWrap?.classList.remove('hidden');

    const shown = filterLibraryItems(items, libraryState.query, (item) => libraryItemText(tab, item));
    if (!shown.length) {
        showLibraryEmpty(emptyState(tab, { signedIn: true, query: items.length ? libraryState.query : '' }));
        return;
    }
    for (const item of shown) {
        grid.appendChild(tab === 'designs' ? designCard(item) : tab === 'plans' ? planCard(item) : buildCard(item));
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function showLibraryEmpty(state) {
    const empty = document.getElementById('library-empty');
    const icon = document.getElementById('library-empty-icon');
    const title = document.getElementById('library-empty-title');
    const text = document.getElementById('library-empty-text');
    const actions = document.getElementById('library-empty-actions');
    if (!empty) return;
    if (icon) {
        // feather.replace() swaps the <i> for an <svg>; put a fresh <i> back.
        const fresh = document.createElement('i');
        fresh.id = 'library-empty-icon';
        fresh.setAttribute('data-feather', state.icon);
        icon.replaceWith(fresh);
    }
    if (title) title.textContent = state.title;
    if (text) text.textContent = state.text;
    if (actions) {
        actions.innerHTML = '';
        for (const a of state.actions) {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = a.primary ? 'primary-btn' : 'secondary-btn';
            b.textContent = a.label;
            b.dataset.libraryAction = a.id;
            actions.appendChild(b);
        }
    }
    empty.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

function onLibraryEmptyAction(id) {
    switch (id) {
        case 'signin':
            showAuthModal('login');
            break;
        case 'signup':
            showAuthModal('signup');
            break;
        case 'retry':
            loadLibraryTab(libraryState.tab, true);
            break;
        case 'clear-search': {
            libraryState.query = '';
            const search = document.getElementById('library-search');
            if (search) { search.value = ''; search.focus(); }
            renderLibrary();
            break;
        }
        case 'new-design':
            closeLibrary({ leaveUrl: true });
            navigate('home');
            break;
        case 'open-plan':
            closeLibrary({ leaveUrl: true });
            openEditor('plan');
            break;
        case 'open-build':
            closeLibrary({ leaveUrl: true });
            openEditor('build');
            break;
        default:
            break;
    }
}

function designCard(design) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'library-card';
    card.dataset.designId = design.id;
    card.setAttribute('aria-label', `${formatDesignTitle(design)}, ${formatLayoutDate(design.createdAt)}. View details`);
    const thumb = document.createElement('span');
    thumb.className = 'library-card-thumb';
    const img = document.createElement('img');
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    watchImage(img);
    img.src = design.imageUrl || '';
    img.onerror = function () { this.remove(); };
    thumb.appendChild(img);
    const title = document.createElement('span');
    title.className = 'library-card-title';
    title.textContent = formatDesignTitle(design);
    const meta = document.createElement('span');
    meta.className = 'library-card-meta';
    meta.textContent = formatLayoutDate(design.createdAt);
    card.append(thumb, title, meta);
    card.addEventListener('click', () => openSavedDesignPreview(design));
    return card;
}

/** A floor plan or build: open on the main part, delete on the side. */
function itemCard({ name, updatedAt, thumbSrc, icon, openLabel, onOpen, onDelete }) {
    const card = document.createElement('div');
    card.className = 'library-card library-card--row';
    const main = document.createElement('button');
    main.type = 'button';
    main.className = 'library-card-main';
    main.setAttribute('aria-label', `${openLabel} ${name}`);
    const thumb = document.createElement('span');
    thumb.className = 'library-card-thumb';
    if (thumbSrc) {
        const img = document.createElement('img');
        img.alt = '';
        img.loading = 'lazy';
        img.src = thumbSrc;
        img.onerror = function () { this.remove(); };
        thumb.appendChild(img);
    } else {
        const i = document.createElement('i');
        i.setAttribute('data-feather', icon);
        i.setAttribute('aria-hidden', 'true');
        thumb.appendChild(i);
    }
    const text = document.createElement('span');
    text.className = 'library-card-text';
    const title = document.createElement('span');
    title.className = 'library-card-title';
    title.textContent = name;
    const meta = document.createElement('span');
    meta.className = 'library-card-meta';
    meta.textContent = updatedAt ? `Updated ${formatLayoutDate(updatedAt)}` : '';
    text.append(title, meta);
    main.append(thumb, text);
    main.addEventListener('click', onOpen);
    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'library-card-delete';
    del.setAttribute('aria-label', `Delete ${name}`);
    del.innerHTML = '<i data-feather="trash-2" aria-hidden="true"></i>';
    del.addEventListener('click', onDelete);
    card.append(main, del);
    return card;
}

function planCard(layout) {
    const name = layout.name || 'Unnamed floor plan';
    const preview = typeof layout.preview_data_url === 'string' && layout.preview_data_url.startsWith('data:image/')
        ? layout.preview_data_url
        : null;
    return itemCard({
        name,
        updatedAt: layout.updated_at,
        thumbSrc: preview,
        icon: 'grid',
        openLabel: 'Open floor plan',
        onOpen: () => openPlanFromLibrary(layout.id),
        onDelete: async () => {
            if (await deleteLayoutById(layout.id)) {
                showToastMessage('Floor plan deleted.', 'success');
                loadLibraryTab('plans', true);
            }
        },
    });
}

function buildCard(project) {
    const name = project.name || 'Untitled project';
    return itemCard({
        name,
        updatedAt: project.updated_at,
        thumbSrc: null,
        icon: 'box',
        openLabel: 'Open build',
        onOpen: () => openBuildFromLibrary(project.id),
        onDelete: () => deleteBuildFromLibrary(project.id, name),
    });
}

async function openPlanFromLibrary(id) {
    closeLibrary({ leaveUrl: true });
    await openEditor('plan');
    const screen = document.getElementById('layout-editor-screen');
    if (screen && !screen.classList.contains('hidden')) await loadLayoutById(id);
}

async function openBuildFromLibrary(id) {
    closeLibrary({ leaveUrl: true });
    await openEditor('build');
    const screen = document.getElementById('woodworking-editor-screen');
    if (screen && !screen.classList.contains('hidden')) await WoodworkingEditor?.openProject?.(id);
}

async function deleteBuildFromLibrary(id, name) {
    if (!currentSession?.access_token) return;
    const ok = await showConfirmDialog(`Delete “${name}”? This can’t be undone.`, 'Delete build', 'Delete', 'Cancel');
    if (!ok) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/woodworking-projects/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${currentSession.access_token}` },
        });
        if (!res.ok && res.status !== 204) throw new Error(`HTTP ${res.status}`);
        WoodworkingEditor?.projectDeleted?.(id);
        showToastMessage('Build deleted.', 'success');
        loadLibraryTab('builds', true);
    } catch (err) {
        console.warn('Library: delete build failed', err);
        showToastMessage('That build wasn’t deleted. Try again in a moment.', 'error');
    }
}

/** Sign-in, sign-out or a new plan: what the library shows has changed. */
let libraryAuthKey = null;
function onLibraryAuthChange() {
    const key = `${currentUser?.id || 'anon'}:${userHasSubscription ? 'sub' : 'free'}`;
    if (key === libraryAuthKey) return;
    libraryAuthKey = key;
    libraryState.items = { designs: null, plans: null, builds: null };
    libraryState.designsMeta = null;
    if (isLibraryOpen()) selectLibraryTab(libraryState.tab);
}

function initLibrary() {
    const panel = libraryPanel();
    if (!panel) return;
    document.getElementById('library-close')?.addEventListener('click', () => closeLibrary());
    document.getElementById('my-designs-preview-close')?.addEventListener('click', closeSavedDesignPreview);
    panel.addEventListener('click', (e) => {
        if (e.target === panel) closeLibrary();
        const action = e.target.closest?.('[data-library-action]');
        if (action) onLibraryEmptyAction(action.dataset.libraryAction);
    });
    document.getElementById('library-status-upsell')?.addEventListener('click', () => {
        track('library_upsell_clicked', { full: !!document.getElementById('library-status')?.classList.contains('is-full') });
        openUpgrade('library');
    });
    const tabs = Array.from(panel.querySelectorAll('.library-tab'));
    tabs.forEach((btn, i) => {
        btn.addEventListener('click', () => selectLibraryTab(btn.dataset.tab));
        // Arrow keys move along the tabs (WAI-ARIA tabs pattern).
        btn.addEventListener('keydown', (e) => {
            let next = null;
            if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
            else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
            else if (e.key === 'Home') next = tabs[0];
            else if (e.key === 'End') next = tabs[tabs.length - 1];
            if (!next) return;
            e.preventDefault();
            selectLibraryTab(next.dataset.tab, { focusTab: true });
        });
    });
    const search = document.getElementById('library-search');
    search?.addEventListener('input', () => {
        libraryState.query = search.value;
        renderLibrary();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || !isLibraryOpen()) return;
        // A sheet opened over the library (sign-in, upgrade, a confirm) closes first.
        const above = document.querySelector('.modal.show:not(#library-panel), .confirm-dialog.show, .custom-dialog.show');
        if (above) return;
        const preview = document.getElementById('my-designs-preview');
        if (preview && !preview.classList.contains('hidden')) closeSavedDesignPreview();
        else closeLibrary();
    });
}

function openSavedDesignPreview(design) {
    const panel = document.getElementById('my-designs-preview');
    const img = document.getElementById('my-designs-preview-img');
    const openBtn = document.getElementById('my-designs-open-btn');
    const deleteBtn = document.getElementById('my-designs-delete-btn');
    if (!panel || !img) return;

    img.src = design.imageUrl || '';
    img.alt = formatDesignTitle(design);
    renderDesignPreviewDetails(design);
    panel.dataset.designId = design.id;
    panel.classList.remove('hidden');
    document.getElementById('library-browse')?.classList.add('hidden');
    libraryState.previewFrom = document.activeElement;
    document.getElementById('my-designs-preview-close')?.focus();

    if (openBtn) {
        openBtn.onclick = () => loadSavedDesignIntoResults(design);
    }
    if (deleteBtn) {
        deleteBtn.onclick = () => deleteSavedDesignById(design.id);
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function closeSavedDesignPreview() {
    const panel = document.getElementById('my-designs-preview');
    if (!panel || panel.classList.contains('hidden')) return;
    panel.classList.add('hidden');
    document.getElementById('library-browse')?.classList.remove('hidden');
    const back = libraryState.previewFrom;
    libraryState.previewFrom = null;
    if (back && document.contains(back)) back.focus();
}

async function loadSavedDesignIntoResults(design) {
    if (!design?.imageUrl) return;
    closeSavedDesignPreview();
    closeLibrary({ leaveUrl: true });

    if (wizardContainer) wizardContainer.classList.add('hidden');
    if (wizardProgress) wizardProgress.classList.add('hidden');
    const uploadSection = document.getElementById('upload-section');
    if (uploadSection) uploadSection.classList.add('hidden');
    if (resultsSection) resultsSection.classList.remove('hidden');
    if (backToOptionsBtn) backToOptionsBtn.classList.remove('hidden');
    syncUrl('result', { id: design.id });

    lastGeneratedImageUrl = design.imageUrl;
    resetDesignHistory();
    if (currentUploadedImage) seedDesignHistoryWithOriginal();
    pushDesignHistory(design.imageUrl, {
        prompt: design.prompt || '',
        model: design.model || null,
        sourceType: design.sourceType || 'room-design',
        metadata: design.metadata && typeof design.metadata === 'object' ? design.metadata : {},
    });

    const savedDesign = {
        id: 'design-saved',
        title: formatDesignTitle(design),
        description: design.prompt ? design.prompt.slice(0, 200) : 'Previously generated design',
        imageUrl: design.imageUrl,
        originalImageUrl: currentUploadedImage || design.imageUrl,
        prompt: design.prompt || '',
        loading: false,
        isFallback: false,
        modelUsed: design.model || null,
        sourceImage: currentUploadedImage || design.imageUrl,
    };
    generatedDesigns = [savedDesign];
    displayDesigns(generatedDesigns);
    updateResultsFengShuiButtonState();
}

async function deleteSavedDesignById(id) {
    if (!currentSession?.access_token || !id) return;
    const proceed = await showConfirmDialog(
        'Delete this saved design? This cannot be undone.',
        'Delete design',
        'Delete',
        'Cancel'
    );
    if (!proceed) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/designs/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${currentSession.access_token}` },
        });
        if (!res.ok) throw new Error('Failed to delete');
        closeSavedDesignPreview();
        loadLibraryTab('designs', true);
        invalidateUseSavedAvailability();
        refreshUseSavedAvailability();
    } catch (e) {
        showAlertDialog(e?.message || 'Failed to delete design');
    }
}

window.__decoraitSaveGeneratedDesign = autoSaveGeneratedDesign;

function updateAuthUI() {
    if (!authButtons || !userMenu) return;
    setHeaderActionsEnabled(authReady);
    if (!authReady) return;
    if (currentUser) {
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        // Subscribers see the monthly-usage badge; everyone else sees tokens.
        if (tokensDisplay) tokensDisplay.classList.toggle('hidden', userHasSubscription);
        if (userEmailDisplay) userEmailDisplay.textContent = currentUser.email?.split('@')[0] || 'Account';
        updateTokensDisplay();
        updateSubscriptionUsageDisplay();
        const subscribeDropdownBtn = document.getElementById('subscribe-dropdown-btn');
        if (subscribeDropdownBtn) subscribeDropdownBtn.classList.toggle('hidden', userHasSubscription);
    } else {
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
        if (tokensDisplay) tokensDisplay.classList.add('hidden');
        if (subscriptionUsageDisplay) subscriptionUsageDisplay.classList.add('hidden');
        syncDefaultModelToggles();
    }
    // Reveal/hide the "use a saved design" entry points as auth state changes.
    refreshUseSavedAvailability();
    onLibraryAuthChange();
    if (typeof feather !== 'undefined') feather.replace();
}

function submitAuthForm(form) {
    if (!form || form.classList.contains('hidden')) return;
    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
    if (submitBtn) {
        submitBtn.click();
        return;
    }
    if (typeof form.requestSubmit === 'function') {
        form.requestSubmit();
        return;
    }
    form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
}

/** Enter advances through empty fields; submits once all fields are filled. */
function setupAuthFormEnterToSubmit(form) {
    if (!form) return;
    form.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' || e.isComposing) return;
        if (form.classList.contains('hidden')) return;

        const inputs = Array.from(form.querySelectorAll('input:not([type="hidden"])'));
        const index = inputs.indexOf(e.target);
        if (index === -1) return;

        const allFilled = inputs.every((input) => input.value.trim() !== '');
        if (allFilled) {
            e.preventDefault();
            submitAuthForm(form);
            return;
        }

        if (index < inputs.length - 1) {
            e.preventDefault();
            inputs[index + 1].focus();
        }
    });
}

function showAuthModal(mode = 'login') {
    if (!authModal) return;
    track('signup_prompt_shown', {
        mode: mode === 'signup' ? 'signup' : 'signin',
        // Had they already seen a result? Separates "asked too early" from
        // "asked after the product proved itself".
        has_result: designHistory.some(h => !h.isOriginal),
    });
    authModal.classList.add('show');
    // Auth is an overlay, not a route — the URL records it without navigating,
    // so the view (and the user's in-progress work) survives underneath.
    setAuthParam(mode === 'signup' ? 'signup' : 'signin');
    // Ensure visibility/opacity are explicitly set so CSS transitions always apply
    authModal.style.opacity = '1';
    authModal.style.visibility = 'visible';
    if (loginError) loginError.classList.add('hidden');
    if (signupError) signupError.classList.add('hidden');
    hideLoginResendBlock();
    if (mode === 'login') {
        if (authModalTitle) authModalTitle.textContent = 'Sign In';
        if (loginForm) loginForm.classList.remove('hidden');
        if (signupForm) signupForm.classList.add('hidden');
        if (authSwitchText) authSwitchText.textContent = "Don't have an account?";
        if (authSwitchBtn) authSwitchBtn.textContent = 'Sign Up';
    } else {
        if (authModalTitle) authModalTitle.textContent = 'Create Account';
        if (loginForm) loginForm.classList.add('hidden');
        if (signupForm) signupForm.classList.remove('hidden');
        if (authSwitchText) authSwitchText.textContent = 'Already have an account?';
        if (authSwitchBtn) authSwitchBtn.textContent = 'Sign In';
    }
    if (signupSuccess) signupSuccess.classList.add('hidden');
    if (signupEmailExists) signupEmailExists.classList.add('hidden');
    if (confirmEmailRequired) confirmEmailRequired.classList.add('hidden');
    if (authFormsSection) authFormsSection.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

function hideAuthModal() {
    if (authModal) {
        authModal.classList.remove('show');
        authModal.style.opacity = '';
        authModal.style.visibility = '';
    }
    setAuthParam(null);
    setLoginSubmitLoading(false);
    if (loginForm) loginForm.reset();
    if (signupForm) signupForm.reset();
    if (loginError) { loginError.classList.add('hidden'); loginError.textContent = ''; }
    if (signupError) { signupError.classList.add('hidden'); signupError.textContent = ''; }
    hideLoginResendBlock();
    if (signupSuccess) signupSuccess.classList.add('hidden');
    if (signupEmailExists) { signupEmailExists.classList.add('hidden'); clearEmailExistsMessage(); }
    if (confirmEmailRequired) { confirmEmailRequired.classList.add('hidden'); clearConfirmEmailMessage(); }
    if (authFormsSection) authFormsSection.classList.remove('hidden');
}

function isEmailNotConfirmedError(err) {
    const msg = (err?.message || '').toLowerCase();
    return msg.includes('email not confirmed') || msg.includes('email_not_confirmed');
}

function showLoginResendBlock() {
    if (loginResendBlock) loginResendBlock.classList.remove('hidden');
    if (loginResendMessage) { loginResendMessage.classList.add('hidden'); loginResendMessage.textContent = ''; loginResendMessage.classList.remove('success', 'error'); }
}

function hideLoginResendBlock() {
    if (loginResendBlock) loginResendBlock.classList.add('hidden');
    if (loginResendMessage) { loginResendMessage.classList.add('hidden'); loginResendMessage.textContent = ''; }
}

function setLoginSubmitLoading(loading) {
    const btn = document.getElementById('login-submit-btn');
    if (!btn) return;
    if (loading) {
        if (!btn.dataset.defaultLabel) btn.dataset.defaultLabel = btn.textContent.trim();
        btn.disabled = true;
        btn.classList.add('auth-submit-btn--loading');
        btn.setAttribute('aria-busy', 'true');
        btn.innerHTML = '<span class="auth-submit-spinner" aria-hidden="true"></span><span>Signing in…</span>';
    } else {
        btn.disabled = false;
        btn.classList.remove('auth-submit-btn--loading');
        btn.removeAttribute('aria-busy');
        btn.textContent = btn.dataset.defaultLabel || 'Sign In';
    }
}

// ── One-tap sign-in (Google / Apple) ─────────────────────────────────────────

/** Set just before leaving for the provider, read on the way back. */
const OAUTH_PENDING_KEY = 'decorait-oauth-pending';

/** Show a button for each provider the server says is configured. */
function initOAuthButtons(providers) {
    const wrap = document.getElementById('oauth-buttons');
    if (!wrap) return;
    const enabled = new Set(Array.isArray(providers) ? providers : []);
    let any = false;
    wrap.querySelectorAll('[data-oauth-provider]').forEach((btn) => {
        const on = enabled.has(btn.dataset.oauthProvider);
        btn.hidden = !on;
        any = any || on;
        if (on && !btn.dataset.bound) {
            btn.dataset.bound = '1';
            btn.addEventListener('click', () => handleOAuthSignIn(btn.dataset.oauthProvider, btn));
        }
    });
    wrap.classList.toggle('hidden', !any);
}

// Pressing Back on the provider's page can restore this page from the
// back/forward cache with the tapped button still disabled.
window.addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    document.querySelectorAll('#oauth-buttons [data-oauth-provider]').forEach((btn) => { btn.disabled = false; });
});

/**
 * Hand off to the provider. The browser leaves the app and comes back signed
 * in; the photo and any results are put back by restoreRedesignSession(), so
 * the round-trip costs the visitor nothing they had made.
 */
async function handleOAuthSignIn(provider, btn) {
    const errorEl = document.getElementById('oauth-error');
    errorEl?.classList.add('hidden');
    if (!supabase) {
        if (errorEl) {
            errorEl.textContent = authInitError || 'Sign-in is unavailable right now. Please refresh and try again.';
            errorEl.classList.remove('hidden');
        }
        return;
    }
    btn.disabled = true;
    track('oauth_started', { method: provider, has_result: designHistory.some(h => !h.isOriginal) });
    try {
        sessionStorage.setItem(OAUTH_PENDING_KEY, provider);
    } catch (_) { /* private mode: only the analytics event is lost */ }
    try {
        // Make sure the latest result is on disk before the page unloads.
        await sessionPersistChain;
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            // Come back to the view they left, minus the ?auth= overlay param.
            options: { redirectTo: window.location.origin + window.location.pathname },
        });
        if (error) throw error;
    } catch (err) {
        try { sessionStorage.removeItem(OAUTH_PENDING_KEY); } catch (_) { /* ignore */ }
        btn.disabled = false;
        if (errorEl) {
            errorEl.textContent = err?.message || 'Could not start sign-in. Please try again.';
            errorEl.classList.remove('hidden');
        }
    }
}

/** Back from a provider with a session: record it once. */
function noteOAuthReturn() {
    let provider = null;
    try {
        provider = sessionStorage.getItem(OAUTH_PENDING_KEY);
        if (provider) sessionStorage.removeItem(OAUTH_PENDING_KEY);
    } catch (_) { /* ignore */ }
    if (provider) track('login', { method: provider });
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email')?.value?.trim();
    const password = document.getElementById('login-password')?.value ?? '';
    if (!email || !password) {
        if (loginError) {
            loginError.textContent = 'Please enter your email and password.';
            loginError.classList.remove('hidden');
        }
        return;
    }
    if (!supabase) {
        if (loginError) {
            loginError.textContent = authInitError
                || 'Sign-in is unavailable right now. Please refresh and try again.';
            loginError.classList.remove('hidden');
        }
        return;
    }
    if (loginError) loginError.classList.add('hidden');
    hideLoginResendBlock();
    setLoginSubmitLoading(true);
    try {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        track('login', { method: 'email' });
        hideAuthModal();
        // Replay whatever the gate interrupted, so signing in costs a form and
        // not the work they'd already done.
        resumePendingGatedAction();
    } catch (err) {
        if (loginError) { loginError.textContent = err.message; loginError.classList.remove('hidden'); }
        if (isEmailNotConfirmedError(err)) showLoginResendBlock();
    } finally {
        setLoginSubmitLoading(false);
    }
}

async function handleLoginResendClick() {
    if (!supabase) return;
    const email = document.getElementById('login-email')?.value;
    if (!email) return;
    if (loginResendBtn) { loginResendBtn.disabled = true; loginResendBtn.textContent = 'Sending…'; }
    if (loginResendMessage) { loginResendMessage.classList.add('hidden'); loginResendMessage.textContent = ''; loginResendMessage.classList.remove('success', 'error'); }
    try {
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email,
            options: { emailRedirectTo: window.location.origin }
        });
        if (error) throw error;
        if (loginResendMessage) {
            loginResendMessage.textContent = 'Verification email sent. Check your inbox and spam folder.';
            loginResendMessage.classList.add('success');
            loginResendMessage.classList.remove('hidden');
        }
    } catch (err) {
        if (loginResendMessage) {
            loginResendMessage.textContent = err?.message || 'Failed to resend email.';
            loginResendMessage.classList.add('error');
            loginResendMessage.classList.remove('hidden');
        }
    }
    if (loginResendBtn) { loginResendBtn.disabled = false; loginResendBtn.textContent = 'Resend verification email'; }
}

let lastSignupEmailForResend = null;

function showEmailExistsState(email) {
    lastSignupEmailForResend = email;
    if (loginForm) loginForm.classList.add('hidden');
    if (signupForm) signupForm.classList.add('hidden');
    if (authFormsSection) authFormsSection.classList.add('hidden');
    if (signupSuccess) signupSuccess.classList.add('hidden');
    if (signupError) signupError.classList.add('hidden');
    clearEmailExistsMessage();
    if (signupEmailExists) signupEmailExists.classList.remove('hidden');
    if (authModalTitle) authModalTitle.textContent = 'Account already exists';
    if (typeof feather !== 'undefined') feather.replace();
}

function hideEmailExistsState() {
    lastSignupEmailForResend = null;
    if (signupEmailExists) signupEmailExists.classList.add('hidden');
    clearEmailExistsMessage();
}

function clearEmailExistsMessage() {
    if (!signupEmailExistsMessage) return;
    signupEmailExistsMessage.classList.add('hidden');
    signupEmailExistsMessage.textContent = '';
    signupEmailExistsMessage.classList.remove('success', 'error');
}

function setEmailExistsMessage(text, type) {
    if (!signupEmailExistsMessage) return;
    signupEmailExistsMessage.textContent = text;
    signupEmailExistsMessage.classList.remove('success', 'error');
    if (type) signupEmailExistsMessage.classList.add(type);
    signupEmailExistsMessage.classList.remove('hidden');
}

function isEmailAlreadyRegisteredError(error, data) {
    if (error) {
        const msg = (error.message || '').toLowerCase();
        return msg.includes('already registered') || msg.includes('already exists') || msg.includes('user already');
    }
    if (data?.user && Array.isArray(data.user.identities)) {
        return data.user.identities.length === 0;
    }
    return false;
}

async function handleSignup(e) {
    e.preventDefault();
    if (!supabase) return;
    const email = document.getElementById('signup-email')?.value;
    const password = document.getElementById('signup-password')?.value;
    const confirmPassword = document.getElementById('signup-confirm-password')?.value;
    if (signupError) signupError.classList.add('hidden');
    if (password !== confirmPassword) {
        if (signupError) { signupError.textContent = 'Passwords do not match'; signupError.classList.remove('hidden'); }
        return;
    }
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: window.location.origin
            }
        });
        if (isEmailAlreadyRegisteredError(error, data)) {
            showEmailExistsState(email);
            return;
        }
        if (error) throw error;
        track('sign_up', { method: 'email', has_result: designHistory.some(h => !h.isOriginal) });
        if (data?.user && !data?.session) {
            showSignupSuccess(email);
        } else {
            hideAuthModal();
        }
    } catch (err) {
        if (signupError) { signupError.textContent = err.message; signupError.classList.remove('hidden'); }
    }
}

async function handleResendVerificationEmail() {
    if (!supabase || !lastSignupEmailForResend) return;
    if (emailExistsResendBtn) {
        emailExistsResendBtn.disabled = true;
        emailExistsResendBtn.textContent = 'Sending…';
    }
    clearEmailExistsMessage();
    try {
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email: lastSignupEmailForResend,
            options: {
                emailRedirectTo: window.location.origin
            }
        });
        if (error) throw error;
        setEmailExistsMessage(
            'If a verification email was sent, it may take a minute to arrive. Check your spam folder. Resend is rate-limited (about 4 per hour on free tiers).',
            'success'
        );
    } catch (err) {
        setEmailExistsMessage(err.message || 'Failed to resend email.', 'error');
    }
    if (emailExistsResendBtn) {
        emailExistsResendBtn.disabled = false;
        emailExistsResendBtn.textContent = 'Resend verification email';
    }
}

async function handleEmailMagicLink() {
    if (!supabase || !lastSignupEmailForResend) return;
    if (emailExistsMagicLinkBtn) {
        emailExistsMagicLinkBtn.disabled = true;
        emailExistsMagicLinkBtn.textContent = 'Sending…';
    }
    clearEmailExistsMessage();
    try {
        const { error } = await supabase.auth.signInWithOtp({
            email: lastSignupEmailForResend,
            options: {
                shouldCreateUser: false,
                emailRedirectTo: window.location.origin
            }
        });
        if (error) throw error;
        setEmailExistsMessage('Check your email for a sign-in link. It may take a minute; check spam if you don’t see it.', 'success');
    } catch (err) {
        setEmailExistsMessage(err.message || 'Failed to send sign-in link.', 'error');
    }
    if (emailExistsMagicLinkBtn) {
        emailExistsMagicLinkBtn.disabled = false;
        emailExistsMagicLinkBtn.textContent = 'Email me a sign-in link';
    }
}

function requireEmailConfirmedForFeature(featureName) {
    if (!authReady) return false;
    if (!supabase) return true;
    if (!currentUser) {
        showAuthModal('login');
        return false;
    }
    if (!currentUser.email_confirmed_at) {
        showConfirmEmailRequired(featureName);
        return false;
    }
    return true;
}

function showConfirmEmailRequired(featureName) {
    if (!authModal) return;
    authModal.classList.add('show');
    if (authModalTitle) authModalTitle.textContent = 'Confirm your email';
    if (loginForm) loginForm.classList.add('hidden');
    if (signupForm) signupForm.classList.add('hidden');
    if (signupSuccess) signupSuccess.classList.add('hidden');
    if (signupEmailExists) signupEmailExists.classList.add('hidden');
    if (authFormsSection) authFormsSection.classList.add('hidden');
    if (confirmEmailFeatureName) confirmEmailFeatureName.textContent = featureName;
    if (confirmEmailAddress && currentUser?.email) confirmEmailAddress.textContent = currentUser.email;
    clearConfirmEmailMessage();
    if (confirmEmailRequired) confirmEmailRequired.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

function hideConfirmEmailRequired() {
    if (confirmEmailRequired) confirmEmailRequired.classList.add('hidden');
    clearConfirmEmailMessage();
}

function clearConfirmEmailMessage() {
    if (!confirmEmailMessage) return;
    confirmEmailMessage.classList.add('hidden');
    confirmEmailMessage.textContent = '';
    confirmEmailMessage.classList.remove('success', 'error');
}

function setConfirmEmailMessage(text, type) {
    if (!confirmEmailMessage) return;
    confirmEmailMessage.textContent = text;
    confirmEmailMessage.classList.remove('success', 'error');
    if (type) confirmEmailMessage.classList.add(type);
    confirmEmailMessage.classList.remove('hidden');
}

async function handleConfirmEmailResend() {
    if (!supabase || !currentUser?.email) return;
    if (confirmEmailResendBtn) {
        confirmEmailResendBtn.disabled = true;
        confirmEmailResendBtn.textContent = 'Sending…';
    }
    clearConfirmEmailMessage();
    try {
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email: currentUser.email,
            options: { emailRedirectTo: window.location.origin }
        });
        if (error) throw error;
        setConfirmEmailMessage('Verification email sent. Check your inbox and spam folder.', 'success');
    } catch (err) {
        setConfirmEmailMessage(err.message || 'Failed to resend email.', 'error');
    }
    if (confirmEmailResendBtn) {
        confirmEmailResendBtn.disabled = false;
        confirmEmailResendBtn.textContent = 'Resend verification email';
    }
}

function handleEmailExistsSignIn() {
    const email = lastSignupEmailForResend;
    hideEmailExistsState();
    showAuthModal('login');
    const loginEmailInput = document.getElementById('login-email');
    if (loginEmailInput && email) loginEmailInput.value = email;
    if (typeof feather !== 'undefined') feather.replace();
}

function showSignupSuccess(email) {
    if (loginForm) loginForm.classList.add('hidden');
    if (signupForm) signupForm.classList.add('hidden');
    if (authFormsSection) authFormsSection.classList.add('hidden');
    if (authModalTitle) authModalTitle.textContent = 'Account Created';
    if (signupSuccessEmail) signupSuccessEmail.textContent = email;
    if (signupSuccess) signupSuccess.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

async function handleLogout() {
    if (supabase) await supabase.auth.signOut();
    if (userDropdown) userDropdown.classList.add('hidden');
    // Signing out on a shared device shouldn't leave the room photo behind
    // for whoever opens the app next.
    clearRedesignSession();
}

// Event Listeners
function showAlertDialog(message, title = 'Notice') {
    if (!alertModal || !alertModalMessage) {
        console.error('Alert modal not initialized:', message);
        return;
    }
    if (alertModalTitle) alertModalTitle.textContent = title;
    alertModalMessage.textContent = message;
    alertModal.classList.add('show');
    alertModal.style.opacity = '1';
    alertModal.style.visibility = 'visible';
    if (typeof feather !== 'undefined') feather.replace();
}

function hideAlertDialog() {
    if (alertModal) {
        alertModal.classList.remove('show');
        alertModal.style.opacity = '';
        alertModal.style.visibility = '';
    }
}

// Expose to other scripts (e.g. floorPlanEditor)
window.showAlertDialog = showAlertDialog;

function showConfirmDialog(message, title = 'Confirm', confirmLabel = 'OK', cancelLabel = 'Cancel') {
    if (!confirmModal || !confirmModalMessage) {
        console.error('Confirm modal not initialized:', message);
        return Promise.resolve(false);
    }
    if (confirmModalTitle) confirmModalTitle.textContent = title;
    confirmModalMessage.textContent = message;
    if (confirmModalConfirmBtn) confirmModalConfirmBtn.textContent = confirmLabel;
    if (confirmModalCancelBtn) confirmModalCancelBtn.textContent = cancelLabel;
    confirmModal.classList.add('show');
    confirmModal.style.opacity = '1';
    confirmModal.style.visibility = 'visible';
    if (typeof feather !== 'undefined') feather.replace();
    if (confirmResolve) {
        confirmResolve(false);
        confirmResolve = null;
    }
    return new Promise(resolve => {
        confirmResolve = resolve;
    });
}

function resolveConfirmDialog(result) {
    if (confirmModal) {
        confirmModal.classList.remove('show');
        confirmModal.style.opacity = '';
        confirmModal.style.visibility = '';
    }
    if (confirmResolve) {
        confirmResolve(result);
        confirmResolve = null;
    }
}

// Expose confirm globally
window.showConfirmDialog = showConfirmDialog;
window.__decoraitRequireEmailConfirmed = requireEmailConfirmedForFeature;

/**
 * Register the app-shell service worker — production only.
 *
 * In dev it would cache Vite's module graph and serve yesterday's code back at
 * you, so dev instead *unregisters* anything already installed. That matters
 * for anyone who ran a production build on localhost once: the worker would
 * otherwise outlive it and quietly shadow the dev server.
 */
function initServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    if (!import.meta.env.PROD) {
        // Unregistering alone isn't enough: the page stays controlled until every tab closes,
        // and the worker's caches survive, so modules keep coming from yesterday's cache.
        // Drop the caches too, and reload once if a worker still controls this page.
        (async () => {
            try {
                const regs = await navigator.serviceWorker.getRegistrations();
                await Promise.all(regs.map((r) => r.unregister()));
                const keys = await caches.keys();
                await Promise.all(keys.filter((k) => k.startsWith('decorait-')).map((k) => caches.delete(k)));
                if (navigator.serviceWorker.controller && !sessionStorage.getItem('decorait-sw-dev-reload')) {
                    sessionStorage.setItem('decorait-sw-dev-reload', '1');
                    location.reload();
                }
            } catch { /* private mode, storage blocked: nothing to clean */ }
        })();
        return;
    }
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((err) => {
            // Never fatal — the app works fine without it.
            console.warn('[sw] registration failed:', err);
        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    initServiceWorker();
    initMaskControls();
    setupProtectedHeaderActions();
    initFeedbackWidget();
    await initializeApp();

    // Populate design style grids on load
    populateDesignStyles();

    // Event Listeners (Add null checks for safety)
    if (roomUpload) roomUpload.addEventListener('change', handleImageUpload);
    if (roomCapture) roomCapture.addEventListener('change', handleImageUpload);
    if (cameraBtn) cameraBtn.addEventListener('click', openCamera);
    initUploadProblem();
    initSampleRooms();
    hideCameraWithoutOne();

    // "Use a saved design" — offered wherever an image can be chosen: the
    // upload drop zone and the change-image overlay in the configure view.
    document.getElementById('use-saved-btn')?.addEventListener('click', openUseSavedPicker);
    document.getElementById('use-saved-overlay-btn')?.addEventListener('click', openUseSavedPicker);
    document.getElementById('use-saved-close')?.addEventListener('click', closeUseSavedPicker);
    if (changeImageBtn) changeImageBtn.addEventListener('click', openFileSelector);
    if (generateBtn) generateBtn.addEventListener('click', generateDesigns);
    if (backToOptionsBtn) backToOptionsBtn.addEventListener('click', goBackToPreview);
    if (regenerateBtn) regenerateBtn.addEventListener('click', regenerateDesigns);
    if (saveDesignBtn) saveDesignBtn.addEventListener('click', saveCurrentDesign);
    document.getElementById('share-design-btn')?.addEventListener('click', shareCurrentDesign);
    initShareDialog({
        apiBase: PROXY_SERVER_URL,
        host: window.location.host,
        origin: window.location.origin,
        getAccessToken: () => currentSession?.access_token || null,
        linksEnabled: () => !!appConfig?.shareLinksEnabled,
        requireAccount: (resume) => {
            setPendingGatedAction(resume);
            showAuthModal('signup');
        },
        track,
        toast: showToastMessage,
        reportError,
    });
    if (wizardFengShuiBtn) {
        wizardFengShuiBtn.addEventListener('click', () => {
            if (!currentUploadedImage) return;
            startRoomFengShuiAnalysis(currentUploadedImage, { label: 'Uploaded photo' });
        });
    }
    if (resultsFengShuiBtn) {
        resultsFengShuiBtn.addEventListener('click', () => {
            const target = getFengShuiAnalysisTarget();
            if (!target) return;
            startRoomFengShuiAnalysis(target.src, { label: target.label });
        });
    }
    if (wizardQuickEditBtn) {
        wizardQuickEditBtn.addEventListener('click', () => {
            if (!currentUploadedImage) return;
            if (isQuickEditMode()) exitQuickEdit();
            else enterQuickEdit();
        });
    }
    if (quickEditBackBtn) quickEditBackBtn.addEventListener('click', exitQuickEdit);
    // Locked users can't flip the premium switch (it's disabled), so a tap on
    // the chip opens the way to unlock it instead. The results switch does the
    // same: on phones there's no room for the sign-in note beside it.
    defaultModelToggleResults?.closest('label')?.addEventListener('click', (e) => {
        if (!defaultModelToggleResults.disabled) return;
        e.preventDefault();
        if (!currentUser) showAuthModal('login');
        else openUpgrade(premiumGate());
    });
    quickEditPremiumToggle?.closest('label')?.addEventListener('click', (e) => {
        if (!quickEditPremiumToggle.disabled) return;
        e.preventDefault();
        if (!currentUser) showAuthModal('login');
        else openUpgrade(premiumGate());
    });
    const shortcutHint = document.querySelector('.quick-edit-shortcut');
    if (shortcutHint && !/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) {
        shortcutHint.textContent = ' Ctrl + Enter to apply.';
    }
    if (quickEditApplyBtn) quickEditApplyBtn.addEventListener('click', applyQuickEdit);
    if (quickEditPremiumToggle) {
        quickEditPremiumToggle.addEventListener('change', () => {
            if (quickEditPremiumToggle.checked && !hasPremiumGenerationsAvailable()) {
                quickEditPremiumToggle.checked = false;
                openUpgrade(premiumGate());
            }
        });
    }
    if (quickEditInput) {
        quickEditInput.addEventListener('input', updateQuickEditApplyState);
        // Cmd/Ctrl+Enter applies; plain Enter inserts a newline.
        quickEditInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                if (!quickEditApplyBtn?.disabled) applyQuickEdit();
            }
        });
    }
    if (roomFengShuiCloseBtn) roomFengShuiCloseBtn.addEventListener('click', hideRoomFengShuiModal);
    if (fengShuiApplyBtn) fengShuiApplyBtn.addEventListener('click', applyFengShuiFromAnalysis);
    if (fengShuiContinueWizardBtn) {
        fengShuiContinueWizardBtn.addEventListener('click', hideRoomFengShuiModal);
    }
    if (fengShuiApplyPremiumToggle) {
        fengShuiApplyPremiumToggle.addEventListener('change', () => {
            if (fengShuiApplyPremiumToggle.checked && !hasPremiumGenerationsAvailable()) {
                fengShuiApplyPremiumToggle.checked = false;
                openUpgrade(premiumGate());
                syncDefaultModelToggles();
            }
        });
    }
    if (roomFengShuiModal) {
        roomFengShuiModal.addEventListener('click', (e) => {
            if (e.target === roomFengShuiModal) hideRoomFengShuiModal();
        });
    }

    // Token / payment listeners
    if (buyTokensBtn) buyTokensBtn.addEventListener('click', showBuyTokensModal);
    if (closeBuyTokensModalBtn) closeBuyTokensModalBtn.addEventListener('click', hideBuyTokensModal);
    const tokensModalSubscribeBtn = document.getElementById('tokens-modal-subscribe-btn');
    if (tokensModalSubscribeBtn) tokensModalSubscribeBtn.addEventListener('click', handleSubscribeCheckout);
    const subscribeDropdownBtn = document.getElementById('subscribe-dropdown-btn');
    if (subscribeDropdownBtn) subscribeDropdownBtn.addEventListener('click', () => { userDropdown?.classList.add('hidden'); openUpgrade('plans'); });
    // Subscribers can click their monthly-usage badge to buy overflow token packs.
    if (subscriptionUsageDisplay) subscriptionUsageDisplay.addEventListener('click', showBuyTokensModal);
    // Close modal when clicking outside
    if (buyTokensModal) {
        buyTokensModal.addEventListener('click', (e) => {
            if (e.target === buyTokensModal) hideBuyTokensModal();
        });
    }

    // Auth event listeners
    if (loginBtn) loginBtn.addEventListener('click', () => showAuthModal('login'));
    if (signupBtn) signupBtn.addEventListener('click', () => showAuthModal('signup'));
    if (closeModalBtn) closeModalBtn.addEventListener('click', hideAuthModal);
    if (authModal) {
        authModal.addEventListener('click', (event) => {
            if (event.target === authModal) hideAuthModal();
        });
    }

    // Alert modal listeners
    if (alertModalCloseBtn) alertModalCloseBtn.addEventListener('click', hideAlertDialog);
    if (alertModalOkBtn) alertModalOkBtn.addEventListener('click', hideAlertDialog);
    if (alertModal) {
        alertModal.addEventListener('click', (event) => {
            if (event.target === alertModal) hideAlertDialog();
        });
    }

    // Confirm modal listeners
    if (confirmModalCloseBtn) confirmModalCloseBtn.addEventListener('click', () => resolveConfirmDialog(false));
    if (confirmModalCancelBtn) confirmModalCancelBtn.addEventListener('click', () => resolveConfirmDialog(false));
    if (confirmModalConfirmBtn) confirmModalConfirmBtn.addEventListener('click', () => resolveConfirmDialog(true));
    if (confirmModal) {
        confirmModal.addEventListener('click', (event) => {
            if (event.target === confirmModal) resolveConfirmDialog(false);
        });
    }
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    setupAuthFormEnterToSubmit(loginForm);
    if (loginResendBtn) loginResendBtn.addEventListener('click', handleLoginResendClick);
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
    setupAuthFormEnterToSubmit(signupForm);
    if (authSwitchBtn) {
        authSwitchBtn.addEventListener('click', () => {
            const isLogin = loginForm && !loginForm.classList.contains('hidden');
            showAuthModal(isLogin ? 'signup' : 'login');
        });
    }
    if (successCloseBtn) successCloseBtn.addEventListener('click', hideAuthModal);
    if (emailExistsSigninBtn) emailExistsSigninBtn.addEventListener('click', handleEmailExistsSignIn);
    if (emailExistsMagicLinkBtn) emailExistsMagicLinkBtn.addEventListener('click', handleEmailMagicLink);
    if (emailExistsResendBtn) emailExistsResendBtn.addEventListener('click', handleResendVerificationEmail);
    if (confirmEmailResendBtn) confirmEmailResendBtn.addEventListener('click', handleConfirmEmailResend);
    if (confirmEmailCloseBtn) confirmEmailCloseBtn.addEventListener('click', hideAuthModal);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    // Enforce max length for layout name editable field
    const layoutNameDisplayEl = document.getElementById('layout-name-display');
    if (layoutNameDisplayEl) {
        layoutNameDisplayEl.addEventListener('input', () => {
            let text = (layoutNameDisplayEl.textContent || '').replace(/\n/g, ' ').trimStart();
            if (text.length > MAX_LAYOUT_NAME_LENGTH) {
                text = text.slice(0, MAX_LAYOUT_NAME_LENGTH);
                layoutNameDisplayEl.textContent = text;
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(layoutNameDisplayEl);
                range.collapse(false);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        });
        layoutNameDisplayEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                layoutNameDisplayEl.blur();
                handleSaveLayout();
            }
        });
    }
    const layoutSaveBtn = document.getElementById('layout-save-btn');
    if (layoutSaveBtn) layoutSaveBtn.addEventListener('click', () => {
        if (layoutSaveBtn.getAttribute('data-subscription-locked') === '1') {
            openUpgrade('floor-plan');
            return;
        }
        handleSaveLayout();
    });
    const myLayoutsToggle = document.getElementById('my-layouts-toggle');
    const myLayoutsPanel = document.getElementById('my-layouts-panel');
    const myLayoutsClose = document.getElementById('my-layouts-close');
    const openLayoutsModal = () => {
        myLayoutsPanel.classList.remove('hidden');
        myLayoutsPanel.classList.add('show');
        refreshLayoutsList();
        feather.replace();
    };
    const closeLayoutsModal = () => {
        myLayoutsPanel.classList.remove('show');
        myLayoutsPanel.classList.add('hidden');
    };
    if (myLayoutsToggle && myLayoutsPanel) {
        myLayoutsToggle.addEventListener('click', openLayoutsModal);
        myLayoutsClose?.addEventListener('click', closeLayoutsModal);
        myLayoutsPanel.addEventListener('click', (e) => {
            if (e.target === myLayoutsPanel) closeLayoutsModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && myLayoutsPanel.classList.contains('show')) closeLayoutsModal();
        });
    }
    const myDesignsBtn = document.getElementById('my-designs-btn');
    if (myDesignsBtn) myDesignsBtn.addEventListener('click', () => {
        if (userDropdown) userDropdown.classList.add('hidden');
        openLibrary('designs');
    });
    initLibrary();
    initShopLook();
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', () => userDropdown.classList.toggle('hidden'));
    }
    document.addEventListener('click', (e) => {
        if (userMenu && !userMenu.contains(e.target)) {
            if (userDropdown) userDropdown.classList.add('hidden');
        }
    });

    // Room type is detected, not asked, and not user-correctable.

    // Approach (furnished rooms only) — also reveals/hides the items section.
    const furnishedOptionRadios = document.querySelectorAll('input[name="furnished-option"]');
    furnishedOptionRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            furnishedOption = e.target.value;
            updateConfigureSections();
        });
    });

    // Back out of configure to the upload view.
    document.getElementById('configure-back-btn')?.addEventListener('click', () => {
        if (isQuickEditMode()) exitQuickEdit();
        else goBackToUpload();
    });

    initPhotoDrop();

    // Initialize the app UI (feather icons)
    initializeAppUI();
});

// Functions
function initializeAppUI() {
    feather.replace();
    initSheets();
    initWaitState();
    initCompare();
    initShell();
    startRouter(applyRoute);
    openAuthFromUrl();
    initRefinement();
    restoreRedesignSession().finally(markSessionRestored);
}

// ── App shell: workspace switcher + mobile tab bar ───────────────────────────

/** Which workspace is on screen right now. */
function activeWorkspace() {
    const plan = document.getElementById('layout-editor-screen');
    const build = document.getElementById('woodworking-editor-screen');
    if (plan && !plan.classList.contains('hidden')) return 'plan';
    if (build && !build.classList.contains('hidden')) return 'build';
    return 'redesign';
}

/** Reflect the current workspace in the header switcher. */
function updateWorkspaceUI() {
    const active = activeWorkspace();
    document.querySelectorAll('.workspace-tab').forEach(el => {
        const isActive = el.dataset.workspace === active;
        el.classList.toggle('is-active', isActive);
        if (isActive) el.setAttribute('aria-current', 'page');
        else el.removeAttribute('aria-current');
    });
}

// ── Editors load on demand ───────────────────────────────────────────────────
// The floor plan and woodworking editors (and three.js with them) were imported
// up front, so every visitor to the redesign flow downloaded and parsed well
// over half the bundle for tools most never open. They are separate chunks now,
// fetched the first time one is opened. Each module binds its own handlers to
// its header button when it initialises; until then the handlers in initShell
// do the opening.

/** The editor modules, null until loaded. */
let FloorPlanEditor = null;
let WoodworkingEditor = null;
const editorLoads = { plan: null, build: null };

function loadEditor(kind) {
    if (!editorLoads[kind]) {
        const pending = kind === 'plan'
            ? import('./floorPlanEditor.js').then((m) => (FloorPlanEditor = m.default))
            : import('./woodworking/editor.js').then((m) => (WoodworkingEditor = m.default));
        // A failed download (offline, or a deploy replaced the chunk) must be
        // retryable rather than cached as a permanent failure.
        editorLoads[kind] = pending.catch((err) => {
            editorLoads[kind] = null;
            throw err;
        });
    }
    return editorLoads[kind];
}
const loadFloorPlanEditor = () => loadEditor('plan');

/** Load an editor if needed, open it, and bring the URL and shell in line. */
/**
 * Stand-in for an editor while its download runs: a toolbar and an empty
 * canvas, so the click visibly did something. Shown only if the download
 * takes long enough to notice, so a cached editor opens without a flash.
 * @returns {() => void} hide
 */
function showEditorLoading(kind) {
    const timer = setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'editor-loading';
        el.id = 'editor-loading';
        el.innerHTML = `
            <div class="editor-loading-bar" aria-hidden="true">
                <span class="ph"></span><span class="ph-line"></span><span class="ph-spacer"></span>
                <span class="ph"></span><span class="ph"></span><span class="ph ph-button"></span>
            </div>
            <div class="editor-loading-canvas">
                <p class="editor-loading-text" role="status">Opening the ${kind === 'plan' ? 'floor plan' : 'woodworking'} editor…</p>
            </div>`;
        document.body.appendChild(el);
    }, EDITOR_LOADING_DELAY_MS);
    return () => {
        clearTimeout(timer);
        document.getElementById('editor-loading')?.remove();
    };
}
const EDITOR_LOADING_DELAY_MS = 150;

async function openEditor(kind) {
    const btn = document.getElementById(kind === 'plan' ? 'layout-editor-btn' : 'woodworking-editor-btn');
    btn?.setAttribute('aria-busy', 'true');
    const loaded = kind === 'plan' ? FloorPlanEditor : WoodworkingEditor;
    const hideLoading = loaded ? () => {} : showEditorLoading(kind);
    try {
        const editor = await loadEditor(kind);
        hideLoading();
        editor.show?.();
        const screen = document.getElementById(kind === 'plan' ? 'layout-editor-screen' : 'woodworking-editor-screen');
        // show() declines for an unconfirmed account — only claim the URL if it opened.
        if (screen && !screen.classList.contains('hidden')) syncUrl(kind);
    } catch (err) {
        console.error(`Could not load the ${kind} editor:`, err);
        showToastMessage("That tool didn't load. Check your connection and try again.", 'error', {
            actionLabel: 'Try again',
            onAction: () => openEditor(kind),
        });
    } finally {
        hideLoading();
        btn?.removeAttribute('aria-busy');
        updateWorkspaceUI();
    }
}

/** Header-button click: open via the module's own handler once it exists. */
function onEditorButtonClick(kind) {
    const loaded = kind === 'plan' ? FloorPlanEditor : WoodworkingEditor;
    if (loaded) {
        // The editor bound show() to this button itself; just record the URL
        // afterwards so the DOM stays the source of truth and nothing double-fires.
        setTimeout(() => { syncUrl(kind); updateWorkspaceUI(); }, 0);
    } else {
        openEditor(kind);
    }
}

function initShell() {
    // Redesign is home.
    document.getElementById('workspace-redesign-btn')?.addEventListener('click', () => {
        goToRedesign();
    });

    for (const [id, kind] of [['layout-editor-btn', 'plan'], ['woodworking-editor-btn', 'build']]) {
        const btn = document.getElementById(id);
        if (!btn) continue;
        btn.addEventListener('click', () => onEditorButtonClick(kind));
        // Start the download when the intent shows, so the click feels instant.
        const warm = () => { loadEditor(kind).catch(() => {}); };
        btn.addEventListener('pointerenter', warm, { once: true });
        btn.addEventListener('focus', warm, { once: true });
    }

    // Returning from an editor via its own back button must update the URL too.
    document.getElementById('layout-editor-back-btn')?.addEventListener('click', () => {
        setTimeout(() => { syncUrl('home'); updateWorkspaceUI(); }, 0);
    });
    document.querySelector('#woodworking-editor-screen [data-action="back"]')
        ?.addEventListener('click', () => {
            setTimeout(() => { syncUrl('home'); updateWorkspaceUI(); }, 0);
        });

    updateWorkspaceUI();
}

/** Close any editor and return to the redesign workspace. */
function goToRedesign() {
    const plan = document.getElementById('layout-editor-screen');
    const build = document.getElementById('woodworking-editor-screen');
    if (plan && !plan.classList.contains('hidden')) {
        document.getElementById('layout-editor-back-btn')?.click();
    }
    if (build && !build.classList.contains('hidden')) {
        document.querySelector('#woodworking-editor-screen [data-action="back"]')?.click();
    }
    updateWorkspaceUI();
}

// ── Routing ──────────────────────────────────────────────────────────────────

/**
 * Move the app to match a route. Primarily drives Back/Forward: forward
 * navigation happens through the existing handlers, which call syncUrl().
 */
function applyRoute(route) {
    const uploadSection = document.getElementById('upload-section');
    const plan = document.getElementById('layout-editor-screen');
    const build = document.getElementById('woodworking-editor-screen');
    const planOpen = plan && !plan.classList.contains('hidden');
    const buildOpen = build && !build.classList.contains('hidden');

    switch (route.name) {
        case 'plan':
            if (!planOpen) openEditor('plan');
            break;

        case 'build':
            if (!buildOpen) openEditor('build');
            break;

        case 'upgrade':
            goToRedesign();
            openUpgrade('plans');
            break;

        case 'library':
            goToRedesign();
            openLibrary(route.params?.tab);
            break;

        case 'result':
            goToRedesign();
            // Only meaningful with a generated design in hand; otherwise fall
            // back to the start rather than showing an empty results shell.
            if (generatedDesigns.length || lastGeneratedImageUrl) {
                if (uploadSection) uploadSection.classList.add('hidden');
                resultsSection?.classList.remove('hidden');
            } else {
                navigate('home', {}, { replace: true, silent: true });
                showHomeView();
            }
            break;

        case 'design':
            goToRedesign();
            // /design without a photo is meaningless — send them to upload.
            if (!currentUploadedImage) {
                navigate('home', {}, { replace: true, silent: true });
                showHomeView();
            } else {
                resultsSection?.classList.add('hidden');
                if (uploadSection) uploadSection.classList.remove('hidden');
                if (uploadContainer) uploadContainer.classList.add('hidden');
                if (wizardContainer) wizardContainer.classList.remove('hidden');
            }
            break;

        case 'home':
        default:
            goToRedesign();
            showHomeView();
            break;
    }

    updateWorkspaceUI();
}

/** Reset the redesign workspace to the upload view. */
function showHomeView() {
    const uploadSection = document.getElementById('upload-section');
    resultsSection?.classList.add('hidden');
    if (uploadSection) uploadSection.classList.remove('hidden');
    if (wizardContainer) wizardContainer.classList.add('hidden');
    if (uploadContainer) uploadContainer.classList.remove('hidden');
}

/** Open the auth overlay if the URL asks for it (?auth=signin|signup). */
function openAuthFromUrl() {
    const mode = authParam();
    if (mode) showAuthModal(mode === 'signup' ? 'signup' : 'login');
}

// ── Wizard navigation ────────────────────────────────────────────────────────

const wizardProgress = document.getElementById('wizard-progress');

/** Show the configure view, hiding the upload drop zone. */
function showWizard() {
    if (uploadContainer) uploadContainer.classList.add('hidden');
    if (wizardContainer) wizardContainer.classList.remove('hidden');
    applyConfigureDefaults();
    updateConfigureSections();
    scrollPageToTop();
    syncUrl('design');
}

/** Hide the configure view, show the upload drop zone, and fully reset state. */
function hideWizard() {
    if (wizardContainer) wizardContainer.classList.add('hidden');
    if (uploadContainer) uploadContainer.classList.remove('hidden');
    resetWizardState();
}

/**
 * Pre-select sensible defaults so "Generate" is live the instant a photo lands.
 * This is the mechanical expression of the brief's first principle — proof
 * before configuration. Every default remains changeable.
 */
function applyConfigureDefaults() {
    // Room type comes from detection — it is never asked.
    if (!currentRoomType) {
        currentRoomType = isRoomActuallyEmpty ? 'empty' : 'furnished';
        const radio = document.getElementById(
            currentRoomType === 'empty' ? 'empty-room' : 'furnished-room'
        );
        if (radio) radio.checked = true;
    }

    // Approach: furnished rooms default to enhancing what's already there.
    if (currentRoomType === 'furnished' && !furnishedOption) {
        furnishedOption = 'add-new';
        const radio = document.getElementById('add-new');
        if (radio) radio.checked = true;
    }

    // Style: default to the first available so the grid is never empty-handed.
    if (!selectedDesignStyle && Array.isArray(interiorDesignStyles) && interiorDesignStyles.length) {
        selectedDesignStyle = interiorDesignStyles[0].id;
    }
}

/** Breakpoint at which configure sections collapse into disclosure rows. */
const CONFIGURE_COLLAPSE_QUERY = '(max-width: 899px)';

function configureIsCollapsible() {
    return window.matchMedia(CONFIGURE_COLLAPSE_QUERY).matches;
}

/**
 * Human-readable summary of each section's current selection, shown on the
 * collapsed row. Defaults are pre-applied, so these are never empty — the
 * point is that you can see every choice already made without opening
 * anything, and without scrolling to discover the options exist.
 */
function configureSectionSummary(section) {
    switch (section) {
        case 'style': {
            const style = interiorDesignStyles.find(s => s.id === selectedDesignStyle);
            return style ? style.name : 'Any';
        }
        case 'approach':
            return {
                'keep-existing': 'Rearrange',
                'add-new': 'Add to it',
                'start-fresh': 'Start over',
            }[furnishedOption] || 'Not set';
        case 'items': {
            const n = selectedRoomItems.size;
            // With nothing picked the model chooses — except "Start over",
            // where no items really does mean an emptied room.
            if (!n) {
                return currentRoomType === 'furnished' && furnishedOption === 'start-fresh'
                    ? 'None'
                    : "Designer's choice";
            }
            return n === 1 ? '1 item' : `${n} items`;
        }
        default:
            return '';
    }
}

/** Refresh the summary text on every collapsed row. */
function updateConfigureSummaries() {
    document.querySelectorAll('.configure-section[data-section]').forEach(sectionEl => {
        const valueEl = sectionEl.querySelector('[data-section-value]');
        if (valueEl) valueEl.textContent = configureSectionSummary(sectionEl.dataset.section);
    });
}

/** Open one section; on mobile this closes the others (single-open accordion). */
function setConfigureSectionOpen(sectionEl, open, { exclusive = true } = {}) {
    const toggle = sectionEl.querySelector('.configure-section-toggle');
    const body = sectionEl.querySelector('.configure-section-body');
    if (!toggle || !body) return;

    if (open && exclusive && configureIsCollapsible()) {
        document.querySelectorAll('.configure-section[data-section]').forEach(other => {
            if (other === sectionEl) return;
            other.classList.remove('is-open');
            other.querySelector('.configure-section-toggle')?.setAttribute('aria-expanded', 'false');
        });
    }

    sectionEl.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
}

/** Wire the disclosure rows. Desktop keeps everything expanded. */
function initConfigureDisclosure() {
    document.querySelectorAll('.configure-section[data-section]').forEach(sectionEl => {
        const toggle = sectionEl.querySelector('.configure-section-toggle');
        if (!toggle || toggle.dataset.bound === 'true') return;
        toggle.dataset.bound = 'true';
        toggle.addEventListener('click', () => {
            const isOpen = sectionEl.classList.contains('is-open');
            setConfigureSectionOpen(sectionEl, !isOpen);
        });
    });

    applyConfigureDisclosureMode();
    window.matchMedia(CONFIGURE_COLLAPSE_QUERY)
        .addEventListener('change', applyConfigureDisclosureMode);
}

/**
 * Collapsed rows on mobile; everything open on desktop, where there's room to
 * show it all at once and collapsing would only add clicks.
 */
function applyConfigureDisclosureMode() {
    const collapsible = configureIsCollapsible();
    document.querySelectorAll('.configure-section[data-section]').forEach(sectionEl => {
        setConfigureSectionOpen(sectionEl, !collapsible, { exclusive: false });
    });
}

/**
 * Reveal configure sections by relevance. Replaces step-based pane switching:
 * nothing is sequenced, sections simply appear when they apply.
 */
function updateConfigureSections() {
    const approachSection = document.getElementById('configure-approach');
    const itemsSection = document.getElementById('configure-items');

    // "How should we redesign it?" only applies to furnished rooms.
    const showApproach = currentRoomType === 'furnished';
    approachSection?.classList.toggle('hidden', !showApproach);

    // Items are irrelevant when keeping the existing furniture as-is.
    const showItems = !(currentRoomType === 'furnished' && furnishedOption === 'keep-existing');
    itemsSection?.classList.toggle('hidden', !showItems);

    if (showItems) {
        const ctx = currentRoomType === 'empty'
            ? 'empty'
            : (furnishedOption === 'add-new' ? 'add-new' : 'start-fresh');
        updateItemsSelectionUI(ctx);
        populateRoomItems();
    } else {
        selectedRoomItems.clear();
    }

    populateDesignStyles();
    hideItemsSelectionError();
    initConfigureDisclosure();
    updateConfigureSummaries();
    feather.replace();
}

/**
 * Kept for compatibility with older callers. The configure view is a single
 * surface now, so "going to a step" means scrolling to that section.
 */
function goToWizardStep(step) {
    currentWizardStep = step;
    const sectionId = {
        1: 'configure-room-type',
        2: 'configure-approach',
        3: 'configure-items',
        4: 'configure-style',
    }[step];
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el && !el.classList.contains('hidden')) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/** Kept for compatibility — section visibility is now derived, not sequenced. */
function wizardNext() {
    updateConfigureSections();
}

function scrollPageToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildRefinementPrompt(basePrompt, refinementText) {
    const base = (basePrompt || '').trim();
    const refinement = (refinementText || '').trim();
    if (!refinement) return base;
    if (!base) return refinement;
    return `${base} Apply these refinements: ${refinement}`;
}

/** Scroll the viewport to a design card's loading placeholder. */
function scrollToDesignLoader(cardOrIndex) {
    requestAnimationFrame(() => {
        let card = cardOrIndex;
        if (typeof cardOrIndex === 'number') {
            card = designCarousel.querySelector(`[data-design-id="design-${cardOrIndex}"]`);
        } else if (typeof cardOrIndex === 'string') {
            card = designCarousel.querySelector(`[data-design-id="${cardOrIndex}"]`);
        }
        if (!card) return;
        const target = card.querySelector('.image-loader') || card.querySelector('.design-image-container');
        target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

function showMobileOptionsScreen() { /* no-op — replaced by wizard */ }
function hideMobileOptionsScreen() { /* no-op — replaced by wizard */ }

/** Reset all wizard selections (room type, furnished option, items). */
function resetWizardState() {
    currentRoomType = null;
    furnishedOption = null;
    selectedRoomItems.clear();
    currentWizardStep = 0;

    // Clear the hidden room-type state and the approach choice
    document.querySelectorAll('input[name="room-type"]').forEach(r => { r.checked = false; });
    document.querySelectorAll('input[name="furnished-option"]').forEach(r => { r.checked = false; });
    hideItemsSelectionError();
}

function resetRoomTypeSelection() {
    // Alias kept for callers in the results / goBackToPreview flow
    resetWizardState();
}

function goBackToUpload() {
    // The next photo starts on the redesign options.
    exitQuickEdit();
    hideWizard();
    resetImageUpload();
}

function toggleKeyVisibility() { /* no-op */ }
function toggleReplicateKeyVisibility() { /* no-op */ }
function saveApiKeys() { /* no-op */ }

// ── Use a saved design as the source photo ───────────────────────────────────

/**
 * Adopt a previously generated design as the new source image, so a user can
 * keep iterating on a result they liked instead of starting from a fresh photo.
 *
 * The saved image is fetched and converted to a data URL rather than passed
 * along as its signed Supabase URL, for two reasons:
 *   1. The server's SSRF allowlist (IMAGE_FETCH_ALLOWED_HOSTS) only permits
 *      replicate.delivery / replicate.com, so a Supabase URL would be rejected
 *      with "Image URL host not allowed".
 *   2. Signed URLs expire; a data URL cannot go stale mid-session.
 *
 * Converting also makes this indistinguishable from a real upload downstream,
 * so room detection, feng shui, quick edit and generation all behave normally.
 */
async function useSavedDesignAsSource(design) {
    if (!design?.imageUrl) return;

    const grid = document.getElementById('use-saved-grid');
    if (grid) grid.setAttribute('aria-busy', 'true');

    try {
        const resp = await fetch(design.imageUrl, { mode: 'cors' });
        if (!resp.ok) throw new Error(`Failed to load image (${resp.status})`);
        const blob = await resp.blob();

        const dataUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error('Could not read the saved image'));
            reader.readAsDataURL(blob);
        });

        closeUseSavedPicker();

        // From here this is exactly the upload path.
        clearFengShuiCache();
        currentUploadedImage = dataUrl;
        if (roomPreview) roomPreview.src = currentUploadedImage;
        // Selecting a different starting image invalidates the previous run's
        // choices — reset so detection and defaults apply to the new picture.
        resetWizardState();
        isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
        applyDetectedRoomType();
        resetDesignHistory();
        lastGeneratedImageUrl = null;
        resultsSection?.classList.add('hidden');
        document.getElementById('upload-section')?.classList.remove('hidden');
        showWizard();
        persistRedesignSession();
    } catch (err) {
        console.error('Could not use saved design as source:', err);
        showAlertDialog('Could not load that design. Please try again.');
    } finally {
        if (grid) grid.removeAttribute('aria-busy');
    }
}

function openUseSavedPicker() {
    const modal = document.getElementById('use-saved-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('show');
    renderUseSavedGrid();
}

function closeUseSavedPicker() {
    const modal = document.getElementById('use-saved-modal');
    if (!modal) return;
    modal.classList.remove('show');
    modal.classList.add('hidden');
}

/** How many designs the picker showed last, so the placeholders match. */
let useSavedLastCount = 0;

function renderUseSavedGrid() {
    const grid = document.getElementById('use-saved-grid');
    if (!grid) return;
    grid.setAttribute('aria-busy', 'true');
    grid.innerHTML = placeholderMarkup('tile', { count: useSavedLastCount, label: 'Loading your designs…' });

    // The page fetch throws on a failure, so "didn't load" isn't shown as "nothing saved".
    fetchSavedDesignsPage().then(({ designs }) => {
        grid.removeAttribute('aria-busy');
        useSavedLastCount = designs.length;
        grid.innerHTML = '';
        if (!designs.length) {
            showUseSavedEmpty(useSavedEmpty({ signedIn: !!currentUser }));
            return;
        }
        designs.forEach(design => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'use-saved-card';
            card.setAttribute('aria-label', `Use ${formatDesignTitle(design)} as the starting photo`);

            const img = document.createElement('img');
            img.className = 'use-saved-card-img';
            img.alt = '';
            img.loading = 'lazy';
            watchImage(img);
            img.src = design.imageUrl || '';
            img.onerror = function () { this.style.visibility = 'hidden'; };

            const label = document.createElement('span');
            label.className = 'use-saved-card-label';
            label.textContent = formatDesignTitle(design);

            card.append(img, label);
            card.addEventListener('click', () => useSavedDesignAsSource(design));
            grid.appendChild(card);
        });
    }).catch(() => {
        grid.removeAttribute('aria-busy');
        showUseSavedEmpty(useSavedEmpty({ failed: true }));
    });
}

function showUseSavedEmpty(state) {
    const grid = document.getElementById('use-saved-grid');
    if (!grid) return;
    grid.innerHTML = '';
    grid.appendChild(emptyStateElement(state, (id) => {
        if (id === 'retry') return renderUseSavedGrid();
        closeUseSavedPicker();
        if (id === 'signin') showAuthModal('login');
    }));
    if (typeof feather !== 'undefined') feather.replace();
}

/**
 * Show the "use a saved design" entry points only when the user actually has
 * saved designs. A new account has none, and offering an empty list is a
 * promise the app can't keep — better absent than teasing.
 */
let useSavedAvailabilityKey = null;

async function refreshUseSavedAvailability() {
    const triggers = document.querySelectorAll('.use-saved-btn');

    // updateAuthUI() runs on every auth change; without this guard each one
    // would fire a fresh /api/designs request just to decide button visibility.
    const key = `${currentUser?.id || 'anon'}`;
    if (key === useSavedAvailabilityKey) return;
    useSavedAvailabilityKey = key;

    let available = false;
    if (currentUser && currentSession) {
        try {
            const designs = await fetchSavedDesigns();
            available = designs.length > 0;
            useSavedLastCount = designs.length;
        } catch {
            available = false;
        }
    }

    triggers.forEach(el => el.classList.toggle('hidden', !available));
}

/** Force the next availability check to re-query (e.g. after a new save). */
function invalidateUseSavedAvailability() {
    useSavedAvailabilityKey = null;
}

async function handleImageUpload(e) {
    const file = e.target.files[0];
    // Clear the input so picking the same file again still fires `change`.
    e.target.value = '';
    if (file) await loadRoomPhotoFile(file, 'upload');
}

/**
 * Take a picked or dropped file as the room photo. The photo is downscaled
 * before anything else touches it (see src/roomPhoto.js) — the original phone
 * image is never held, sent, or stored.
 * @param {File} file
 * @param {'upload'|'drop'} source How the photo arrived, for analytics.
 */
async function loadRoomPhotoFile(file, source) {
    if (!looksLikeImageFile(file)) {
        showUploadProblem(notAPhoto(file));
        return;
    }
    let photo;
    try {
        photo = await normalizeRoomPhoto(file);
    } catch (err) {
        console.warn('Could not open the selected photo:', err);
        showUploadProblem(couldNotOpen());
        return;
    }
    await acceptRoomPhoto(photo, source);
}

/** Make an already-normalised photo the current room and open the configure view. */
async function acceptRoomPhoto(photo, source) {
    hideUploadProblem();
    clearFengShuiCache();
    currentUploadedImage = photo;
    if (roomPreview) roomPreview.src = currentUploadedImage;
    isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
    track('photo_added', { source, room_empty: isRoomActuallyEmpty });
    applyDetectedRoomType();
    showWizard();
    persistRedesignSession();
}

// ── Home screen states (TASKS.md C1) ──────────────────────────────────────
// Words and rules live in src/uploadStates.js; this draws them.

/** The home screen (not the configure view, results, or another route). */
function isHomeVisible() {
    return !!uploadContainer
        && !uploadContainer.classList.contains('hidden')
        && uploadContainer.offsetParent !== null;
}

/** A phone or tablet: no drag and drop, and a camera app to fall back on. */
function isTouchDevice() {
    return window.matchMedia?.('(pointer: coarse)').matches ?? false;
}

let uploadProblemAction = null;

/**
 * Say what went wrong with a photo or the camera. On the home screen it sits
 * under the buttons, so the way round it is right there; anywhere else (the
 * configure view's "Change image") it's the alert dialog.
 * @param {{ title: string, text: string, action?: 'upload'|'camera-app'|'retry' }} problem
 */
function showUploadProblem(problem) {
    const box = document.getElementById('upload-problem');
    if (!box || !isHomeVisible()) {
        showAlertDialog(problem.text, problem.title);
        return;
    }
    document.getElementById('upload-problem-title').textContent = problem.title;
    document.getElementById('upload-problem-text').textContent = problem.text;
    const action = document.getElementById('upload-problem-action');
    uploadProblemAction = problem.action || null;
    action.textContent = PROBLEM_ACTION_LABELS[problem.action] || '';
    action.hidden = !problem.action;
    // Re-announce even when the same problem happens twice in a row.
    box.hidden = true;
    requestAnimationFrame(() => { box.hidden = false; });
}

function hideUploadProblem() {
    const box = document.getElementById('upload-problem');
    if (box) box.hidden = true;
    uploadProblemAction = null;
}

function initUploadProblem() {
    document.getElementById('upload-problem-close')?.addEventListener('click', hideUploadProblem);
    document.getElementById('upload-problem-action')?.addEventListener('click', () => {
        const action = uploadProblemAction;
        hideUploadProblem();
        if (action === 'upload') roomUpload?.click();
        else if (action === 'camera-app') roomCapture?.click();
        else if (action === 'retry') openCamera();
    });
}

/**
 * Dropping a photo anywhere on the page while the home screen shows. Counting
 * enters and leaves keeps the highlight steady as the pointer crosses child
 * elements, which each fire their own dragleave.
 */
function initPhotoDrop() {
    if (!uploadContainer) return;
    let depth = 0;
    const carriesFiles = (e) => Array.from(e.dataTransfer?.types || []).includes('Files');
    const clear = () => {
        depth = 0;
        uploadContainer.classList.remove('is-drag-over', 'is-drag-invalid');
    };
    document.addEventListener('dragenter', (e) => {
        if (!carriesFiles(e) || !isHomeVisible()) return;
        e.preventDefault();
        depth += 1;
        hideUploadProblem();
        uploadContainer.classList.add('is-drag-over');
        uploadContainer.classList.toggle('is-drag-invalid', dragLooksWrong(e.dataTransfer.items));
    });
    document.addEventListener('dragover', (e) => {
        if (!carriesFiles(e) || !isHomeVisible()) return;
        e.preventDefault(); // without this the browser opens the file instead
        e.dataTransfer.dropEffect = dragLooksWrong(e.dataTransfer.items) ? 'none' : 'copy';
    });
    document.addEventListener('dragleave', (e) => {
        if (!carriesFiles(e) || !isHomeVisible()) return;
        depth = Math.max(0, depth - 1);
        if (depth === 0) clear();
    });
    document.addEventListener('drop', (e) => {
        if (!carriesFiles(e) || !isHomeVisible()) return;
        e.preventDefault();
        clear();
        const { file, rejected } = pickDroppedFile(e.dataTransfer.files);
        if (file) loadRoomPhotoFile(file, 'drop');
        else if (rejected) showUploadProblem(notAPhoto(rejected));
    });
    window.addEventListener('dragend', clear);
    window.addEventListener('blur', clear);
}

/** The sample rooms under the before/after: tap one to start with it. */
function initSampleRooms() {
    const list = document.getElementById('upload-samples-list');
    if (!list) return;
    list.replaceChildren(...SAMPLE_ROOMS.map((room) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'upload-sample';
        btn.dataset.sample = room.id;
        const img = document.createElement('img');
        img.src = room.src;
        img.alt = '';
        img.loading = 'lazy';
        img.decoding = 'async';
        const label = document.createElement('span');
        label.className = 'upload-sample-label';
        label.textContent = room.label;
        btn.setAttribute('aria-label', `Try the sample ${room.label.toLowerCase()}: ${room.alt}`);
        btn.append(img, label);
        btn.addEventListener('click', () => useSampleRoom(room, btn));
        return btn;
    }));
}

async function useSampleRoom(room, btn) {
    if (btn.getAttribute('aria-busy') === 'true') return;
    btn.setAttribute('aria-busy', 'true');
    hideUploadProblem();
    try {
        const res = await fetch(room.src);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const photo = await normalizeRoomPhoto(await res.blob());
        track('sample_room_used', { sample: room.id });
        await acceptRoomPhoto(photo, 'sample');
    } catch (err) {
        console.warn('Sample room failed to load:', err);
        showUploadProblem(sampleFailed());
    } finally {
        btn.removeAttribute('aria-busy');
    }
}

/**
 * A laptop or desktop with no camera at all: "Take a photo" would only ever
 * fail, so it goes. Phones keep it — before permission some list no devices,
 * and the camera app is there regardless.
 */
async function hideCameraWithoutOne() {
    if (!cameraBtn || isTouchDevice() || !navigator.mediaDevices?.enumerateDevices) return;
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        if (!devices.some((d) => d.kind === 'videoinput')) cameraBtn.hidden = true;
    } catch (_) { /* leave it: the click explains any problem */ }
}

function openCamera() {
    hideUploadProblem();
    const phone = isTouchDevice();
    if (!navigator.mediaDevices?.getUserMedia) {
        // An older browser, or a page not served over HTTPS. The camera app
        // (or, on a computer, the file picker) still works.
        roomCapture?.click();
        return;
    }

    const cameraView = document.createElement('div');
    cameraView.classList.add('camera-view');
    cameraView.setAttribute('role', 'dialog');
    cameraView.setAttribute('aria-modal', 'true');
    cameraView.setAttribute('aria-label', 'Camera');

    const video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');
    video.muted = true;

    const status = document.createElement('p');
    status.className = 'camera-status';
    status.setAttribute('role', 'status');
    status.textContent = 'Opening the camera…';

    const captureBtn = document.createElement('button');
    captureBtn.type = 'button';
    captureBtn.classList.add('capture-btn');
    captureBtn.setAttribute('aria-label', 'Take the photo');
    captureBtn.disabled = true;
    captureBtn.innerHTML = '<i data-feather="camera" aria-hidden="true"></i>';

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.setAttribute('aria-label', 'Close the camera');
    cancelBtn.innerHTML = '<i data-feather="x" aria-hidden="true"></i>';

    cameraView.append(video, status, captureBtn, cancelBtn);
    document.body.appendChild(cameraView);
    feather.replace();
    const returnFocus = document.activeElement;
    cancelBtn.focus();

    let stream = null;
    const close = () => {
        stream?.getTracks().forEach((t) => t.stop());
        document.removeEventListener('keydown', onKey);
        cameraView.remove();
        if (returnFocus instanceof HTMLElement && returnFocus.isConnected) returnFocus.focus();
    };
    const onKey = (e) => {
        if (e.key === 'Escape') close();
        else if (e.key === 'Tab') trapFocus(e, cameraView);
    };
    document.addEventListener('keydown', onKey);
    cancelBtn.addEventListener('click', close);

    captureBtn.addEventListener('click', async () => {
        if (!video.videoWidth || !video.videoHeight) return; // not streaming yet
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        close();
        await acceptRoomPhoto(await normalizeRoomPhoto(canvas), 'camera');
    });

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((s) => {
            stream = s;
            if (!cameraView.isConnected) { s.getTracks().forEach((t) => t.stop()); return; } // closed while asking
            video.srcObject = s;
            video.addEventListener('loadedmetadata', () => {
                status.textContent = '';
                captureBtn.disabled = false;
                captureBtn.focus();
            }, { once: true });
            video.play().catch(() => {});
        })
        .catch((error) => {
            console.warn('Camera unavailable:', error?.name || error);
            close();
            showUploadProblem(cameraProblem(error, { phone }));
        });
}

function openFileSelector() {
    // Directly trigger the file input dialog
    if (roomUpload) {
        roomUpload.click();
    }
}

function resetImageUpload() {
    clearRedesignSession();
    currentUploadedImage = null;
    lastGeneratedImageUrl = null;
    isRoomActuallyEmpty = true;
    clearFengShuiCache();
    resetDesignHistory();
    if (roomPreview) roomPreview.src = '';
    if (roomUpload) roomUpload.value = '';
    // wizardContainer is hidden by hideWizard(); uploadContainer shown there too
}

// Detect if a room is empty by measuring center-weighted edge density.
// Furniture adds many strong gradients; bare walls and floors do not.
// Edge density across the whole frame (with a radial center weight so
// ceilings/corners count less) is the most robust single signal we can
// compute from pixel statistics alone.
async function detectEmptyRoom(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            const targetW = 200;
            const scale = targetW / img.width;
            const w = targetW;
            const h = Math.max(1, Math.round(img.height * scale));

            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);
            const data = ctx.getImageData(0, 0, w, h).data;

            const gray = new Float32Array(w * h);
            for (let i = 0, p = 0; i < data.length; i += 4, p++) {
                gray[p] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            }

            const cx = (w - 1) / 2;
            const cy = (h - 1) / 2;
            const maxDist = Math.hypot(cx, cy);
            const edgeThreshold = 45;

            let edgeScore = 0;
            let totalWeight = 0;

            for (let y = 1; y < h - 1; y++) {
                for (let x = 1; x < w - 1; x++) {
                    const i = y * w + x;
                    const gx =
                        -gray[i - w - 1] - 2 * gray[i - 1] - gray[i + w - 1] +
                        gray[i - w + 1] + 2 * gray[i + 1] + gray[i + w + 1];
                    const gy =
                        -gray[i - w - 1] - 2 * gray[i - w] - gray[i - w + 1] +
                        gray[i + w - 1] + 2 * gray[i + w] + gray[i + w + 1];
                    const mag = Math.abs(gx) + Math.abs(gy);

                    const dist = Math.hypot(x - cx, y - cy) / maxDist;
                    const weight = 1 - 0.6 * dist;

                    if (mag > edgeThreshold) edgeScore += weight;
                    totalWeight += weight;
                }
            }

            const edgeRatio = edgeScore / totalWeight;
            // Threshold of 0.39 was selected by measuring edge ratios across
            // a labeled set of empty/furnished room photos — it separates
            // the two distributions with ~92% accuracy.
            const isEmpty = edgeRatio < 0.39;

            console.log(`Room analysis: edge=${(edgeRatio * 100).toFixed(1)}%, empty=${isEmpty}`);
            resolve(isEmpty);
        };

        img.onerror = function () {
            console.log('Could not analyze image, assuming room is furnished');
            resolve(false);
        };

        img.src = imageSrc;
    });
}

// Pre-check the detected room type radio and enable "Next" in step 1
function applyDetectedRoomType() {
    const detectedType = isRoomActuallyEmpty ? 'empty' : 'furnished';
    const radio = document.getElementById(detectedType === 'empty' ? 'empty-room' : 'furnished-room');
    if (radio) radio.checked = true;
    currentRoomType = detectedType;
}

// Stub — wizard controls section visibility, not this function
function handleRoomTypeChange() { /* handled by wizard nav */ }

// Populate the room items grid (wizard-pane-3)
function populateRoomItems() {
    const itemsGrid = document.getElementById('items-grid');
    if (!itemsGrid) return;

    itemsGrid.innerHTML = '';

    roomItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-option';
        itemElement.setAttribute('data-item-id', item.id);

        itemElement.innerHTML = `
            <input type="checkbox" id="item-${item.id}" class="item-checkbox" ${selectedRoomItems.has(item.id) ? 'checked' : ''}>
            <label for="item-${item.id}" class="item-label">
                <div class="item-icon">
                    ${customItemSvgs[item.icon] || `<i data-feather="${item.icon}"></i>`}
                </div>
                <span class="item-name">${item.name}</span>
            </label>
        `;

        const checkbox = itemElement.querySelector('.item-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedRoomItems.add(item.id);
            } else {
                selectedRoomItems.delete(item.id);
            }
            // Hide validation error as soon as user picks something
            if (selectedRoomItems.size > 0) hideItemsSelectionError();
            updateConfigureSummaries();
        });

        itemsGrid.appendChild(itemElement);
    });

    feather.replace();
}

// Populate the design style grid (wizard-pane-4)
function populateDesignStyles() {
    const grid = document.getElementById('style-options-grid');
    if (!grid) return;

    grid.innerHTML = '';

    interiorDesignStyles.forEach(style => {
        const inputId = `style-${style.id}`;
        const el = document.createElement('div');
        el.className = 'style-option';

        el.innerHTML = `
            <input type="radio" id="${inputId}" name="design-style" value="${style.id}" ${style.id === selectedDesignStyle ? 'checked' : ''}>
            <label for="${inputId}" class="style-label">
                <div class="style-thumbnail">
                    <i data-feather="${style.icon}"></i>
                </div>
                <span class="style-name">${style.name}</span>
            </label>
        `;

        el.querySelector('input[type="radio"]').addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedDesignStyle = style.id;
                updateConfigureSummaries();
            }
        });

        grid.appendChild(el);
    });

    feather.replace();
}

// Stub — section visibility managed by wizard navigation
function handleFurnishedOptionChange() { /* handled by wizard nav */ }

// Update the UI text based on the context
function updateItemsSelectionUI(context) {
    const hint = document.getElementById('items-selection-hint');
    if (!hint) return;

    // The section title stays short and stable ("Items") because it doubles as
    // a collapsed disclosure row label on mobile — a question-length heading
    // wraps and pushes the current-value summary off the row. The context now
    // lives in the hint, which only shows when the section is open.
    if (context === 'empty') {
        hint.textContent = 'Optional — pick anything you\'d like included in the design.';
    } else if (context === 'add-new') {
        hint.textContent = 'Optional — pick new items to add to your existing furniture.';
    } else if (context === 'start-fresh') {
        hint.textContent = 'Optional — pick items to replace your existing furniture.';
    }
}

// Generate positive and negative prompts based on selected room items and room type
function generatePromptsWithItems(basePrompt, style) {
    const result = {
        positivePrompt: '',
        negativePrompt: '',
        // Always true now that every combination has a prompt (items are
        // optional). Kept because callers still branch on it.
        shouldGenerate: true
    };

    // Simplified architectural preservation constants
    const ARCHITECTURAL_PRESERVATION_PREFIX = "DO NOT change walls, floor, ceiling, windows, or doors. Only add furniture.";
    const ARCHITECTURAL_PRESERVATION_SUFFIX = "Same style as the original room.";

    // When the user hasn't picked a style, force the model to preserve the room's existing style/materials/colors.
    // When they have picked one, append it as an explicit "Style: ..." instruction.
    const hasStyle = !!(style && String(style).trim());
    const styleClause = hasStyle
        ? ` Style: ${style}.`
        : ' Preserve the existing style, materials, colors, and finishes of the room exactly as they appear in the original image. Do not restyle.';
    const styleNegatives = hasStyle
        ? ''
        : ', restyled, different style, changed style, different materials, different colors, different finishes, repainted, redecorated';

    // Simplified base negative prompt - focused on architectural preservation
    const baseNegativePrompt = "blurry, distorted, out of frame, unrealistic shadows, text, watermark, signature, low quality, pixelated, artifacts, change walls, change windows, change floor, change ceiling, change doors, architectural changes, structural modifications, zoomed in, cropped, close-up, tighter framing, recomposed, cut off, parts of room missing, narrower field of view, different camera distance" + styleNegatives;

    // If the image looks empty but the user picked "furnished", we usually treat it like an empty room
    // (pick items, etc.) — except for "keep existing items", which has its own prompt and no item grid.
    const shouldTreatAsEmpty =
        isRoomActuallyEmpty && currentRoomType === 'furnished' && furnishedOption !== 'keep-existing';

    // Special case: "start fresh" should always generate, even with no items
    if (currentRoomType === 'furnished' && furnishedOption === 'start-fresh') {
        if (selectedRoomItems.size === 0) {
            result.positivePrompt = `Given this image of a furnished room, remove all furniture, leaving an empty room. DO NOT change walls, floor, ceiling, windows, or doors.${styleClause}`;
            result.negativePrompt = `${baseNegativePrompt}, furniture, decor, items, objects`;
        } else {
            // Get selected and unselected items
            const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
            const unselectedItems = roomItems.filter(item => !selectedRoomItems.has(item.id));

            // Build positive prompt with selected items
            const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');
            result.positivePrompt = `DO NOT change walls, floor, ceiling, windows, or doors. Remove all existing furniture, then add ONLY: ${selectedItemNames}. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;

            // Build negative prompt with unselected items
            const unselectedItemNames = unselectedItems.map(item => item.name.toLowerCase()).join(', ');
            result.negativePrompt = `${baseNegativePrompt}, ${unselectedItemNames}, existing furniture, other furniture`;
        }
    } else if (currentRoomType === 'empty' || shouldTreatAsEmpty) {
        // Empty room: add ONLY selected items, room stays identical (no other changes)
        if (selectedRoomItems.size === 0) {
            // Nothing picked: furnish it as a designer would. Items are
            // optional (the picker says so) — refusing here left Generate
            // doing nothing on a first visit until the visitor found the grid.
            // NOTE: no room-kind words (bedroom, office, …) in this text;
            // mapPromptToProplabsRoom reads the prompt for them.
            result.positivePrompt = `Edit the image: furnish this empty room so it looks complete and lived-in. Choose a sensible set of furniture and decor for the room's size and layout, and place it naturally. Do not change anything else. Keep every wall, the floor, the ceiling, the windows, the doors, the lighting, the wall colors, the floor color, the materials, and the camera perspective exactly as they appear in the original image.${styleClause}`;
            result.negativePrompt = `${baseNegativePrompt}, modified walls, modified floor, modified ceiling, modified windows, modified doors, changed perspective, architectural change, structural change, different room, empty room without furniture`;
        } else {
            const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
            // Use prompt-friendly names so the model clearly generates the object (e.g. "television" not just "tv")
            const promptItemNames = selectedItems.map(item => {
                const name = item.name.toLowerCase();
                if (name === 'tv') return 'television';
                if (name === 'art') return 'wall art';
                if (name === 'chairs') return 'chair';
                return name;
            }).join(', ');
            const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');
            const allOtherItems = roomItems.filter(item => !selectedRoomItems.has(item.id));
            const allOtherItemNames = allOtherItems.map(item => item.name.toLowerCase()).join(', ');

            // Edit-style instruction: lead with the action, then explicit preservation. Works better with gpt-image-1.
            result.positivePrompt = `Edit the image: add ${promptItemNames} to the room, placed naturally on the floor. Do not change anything else. Keep every wall, the floor, the ceiling, the windows, the doors, the lighting, the wall colors, the floor color, the materials, and the camera perspective exactly as they appear in the original image. The only difference between the input and output should be the newly added ${promptItemNames}.${styleClause}`;

            // Strong negative: no room/lighting changes, no other furniture or decor
            result.negativePrompt = `${baseNegativePrompt}, modified walls, modified floor, modified ceiling, modified windows, modified doors, changed lighting, different lighting, altered lighting, brighter, darker, shadow change, different shadows, changed perspective, changed colors, different materials, architectural change, structural change, ${allOtherItemNames}, other furniture, decor, plants, art, rugs, curtains, accessories, extra objects, style change, different room, empty room without furniture`;
        }
    } else {
        // Furnished room logic (and room is actually furnished)
        if (furnishedOption === 'keep-existing') {
            result.positivePrompt = `Given this image of a furnished room, rearrange the furniture to a different layout. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
            result.negativePrompt = baseNegativePrompt;
        } else if (furnishedOption === 'add-new') {
            if (selectedRoomItems.size === 0) {
                // Nothing picked for "add to it": let the model choose what
                // the room is missing, rather than refusing to run.
                result.positivePrompt = `Given this image of a furnished room, keep the existing furniture and add a few complementary pieces of furniture and decor that suit the room and fit the available space. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
                result.negativePrompt = baseNegativePrompt;
            } else {
                // Get selected items to add
                const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
                const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');

                result.positivePrompt = `Given this image of a furnished room, add ONLY the following items: ${selectedItemNames}. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
                result.negativePrompt = baseNegativePrompt;
            }
        } else if (furnishedOption === 'start-fresh') {
            if (selectedRoomItems.size === 0) {
                result.positivePrompt = `Given this image of a furnished room, remove all furniture before adding ONLY the following items: (empty room). Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
                result.negativePrompt = `${baseNegativePrompt}, furniture, decor, items, objects`;
            } else {
                // Get selected items to add
                const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
                const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');

                result.positivePrompt = `Given this image of a furnished room, remove all furniture before adding ONLY the following items: ${selectedItemNames}. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
                result.negativePrompt = `${baseNegativePrompt}, furniture, decor, items, objects`;
            }
        }
    }

    return result;
}



// Helper: Generate a depth map using Replicate
async function getDepthMapWithReplicate(imageBase64) {
    const DEPTH_MODEL_VERSION = "lllyasviel/sd-controlnet-depth";
    if (!imageBase64 || !imageBase64.startsWith('data:image')) {
        console.error('Invalid image format for depth map:', imageBase64);
        throw new Error('Invalid image format for depth map.');
    }
    console.log('Sending to depth model:', imageBase64.slice(0, 100)); // Log first 100 chars
    const response = await fetch(REPLICATE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            version: DEPTH_MODEL_VERSION,
            input: {
                image: imageBase64
            }
        })
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Depth map generation failed: ${errorData.detail || response.status}`);
    }
    const prediction = await response.json();
    if (!prediction.urls || !prediction.urls.get) {
        throw new Error('Replicate did not return a polling URL for depth map.');
    }
    // Poll for completion
    const result = await pollReplicatePrediction(prediction.urls.get);
    return result.imageUrl; // URL to depth map
}

// Helper: Check if we have a stable internet connection.
// Uses the browser's online signal first, then a lightweight HEAD against our
// own proxy. Calling api.replicate.com directly from the browser fails CORS
// and requires auth, so we can't use it as a health probe.
async function checkConnectionHealth() {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        return false;
    }
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const response = await fetch(`${PROXY_SERVER_URL}/health`, {
            method: 'GET',
            signal: controller.signal,
            cache: 'no-store'
        });
        clearTimeout(timeout);
        return response.ok;
    } catch (error) {
        console.warn('Connection health check failed:', error.message);
        // Assume healthy rather than blocking retries — the actual request
        // will surface a real error if the network is truly down.
        return true;
    }
}

// Helper: Fetch with retry for network errors and timeouts
async function fetchWithRetry(url, options = {}, maxRetries = 3, retryDelay = 2000) {
    let attempt = 0;
    while (attempt <= maxRetries) {
        try {
            // Check connection health before making request
            if (attempt > 0) {
                const isHealthy = await checkConnectionHealth();
                if (!isHealthy) {
                    console.warn('Connection health check failed, waiting longer before retry...');
                    await new Promise(resolve => setTimeout(resolve, retryDelay * 2));
                }
            }

            // Set a timeout for fetch (e.g., 30s)
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 30000);
            const response = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(timeout);
            return response;
        } catch (error) {
            attempt++;
            if (attempt > maxRetries) {
                throw new Error(`Request failed after ${maxRetries} retries: ${error.message}`);
            }
            // Only retry on network errors or aborts (timeout)
            if (error.name === 'AbortError' || error.message === 'Failed to fetch' || error.message === 'NetworkError when attempting to fetch resource.') {
                console.warn(`Fetch attempt ${attempt} failed (timeout/network). Retrying in ${retryDelay / 1000}s...`);
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            } else {
                throw error;
            }
        }
    }
}

// Helper function for polling Replicate API with improved error handling and adaptive timing
async function pollReplicatePrediction(predictionUrl, saveContext = null) {
    let prediction;
    let attempts = 0;
    const maxAttempts = 90; // Increased to 3 minutes (90 attempts * 2 seconds)
    let delay = 2000; // Start with 2 seconds, will adapt based on status
    let consecutiveErrors = 0;
    const maxConsecutiveErrors = 5;
    let savedDesignId = null;

    while (attempts < maxAttempts) {
        attempts++;
        try {
            const pollBody = { predictionUrl };
            if (saveContext) pollBody.saveContext = saveContext;

            const response = await fetchWithRetry(REPLICATE_POLL_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // The poll proxy now requires auth (it carries the Replicate
                    // token), so always send the bearer token when signed in.
                    ...(currentSession?.access_token
                        ? { Authorization: `Bearer ${currentSession.access_token}` }
                        : {}),
                },
                body: JSON.stringify(pollBody),
            }, 2, 1000); // Reduced retries and delay for polling

            if (!response.ok) {
                consecutiveErrors++;
                const errorData = await response.json().catch(() => ({}));
                console.error(`Polling error: Status ${response.status}`, errorData);

                // Don't retry on 4xx errors immediately, could be auth issue
                if (response.status >= 400 && response.status < 500) {
                    throw new Error(`Polling failed with status ${response.status}: ${errorData.detail || 'Client error'}`);
                }

                // If too many consecutive errors, increase delay
                if (consecutiveErrors >= maxConsecutiveErrors) {
                    delay = Math.min(delay * 1.5, 10000); // Cap at 10 seconds
                    console.log(`Too many consecutive errors, increasing delay to ${delay}ms`);
                }

                await new Promise(resolve => setTimeout(resolve, delay));
                continue;
            }

            // Reset consecutive errors on successful response
            consecutiveErrors = 0;
            prediction = await response.json();

            console.log(`Polling attempt ${attempts}: Status - ${prediction.status}`);

            if (prediction.status === 'succeeded') {
                if (!prediction.output || prediction.output.length === 0) {
                    throw new Error('Replicate prediction succeeded but returned no output.');
                }
                if (prediction.savedDesignId) savedDesignId = prediction.savedDesignId;
                return { imageUrls: prediction.output, savedDesignId };
            } else if (prediction.status === 'failed') {
                // Terminal — the model rejected the input. Mark the error so
                // the outer retry loop bails out instead of polling forever.
                console.error('Replicate prediction failed:', prediction.error);
                const err = new Error(`Replicate prediction failed: ${prediction.error}`);
                err.terminal = true;
                throw err;
            } else if (prediction.status === 'canceled') {
                console.warn('Replicate prediction canceled:', prediction);
                const err = new Error('Replicate prediction was canceled.');
                err.terminal = true;
                throw err;
            }

            // Adaptive delay based on status
            if (prediction.status === 'starting') {
                delay = 3000; // Longer delay for starting phase
            } else if (prediction.status === 'processing') {
                delay = 2000; // Standard delay for processing
            }

            await new Promise(resolve => setTimeout(resolve, delay));

        } catch (error) {
            // Terminal errors (model rejected the input, prediction canceled)
            // must not be retried — surface immediately so the caller can
            // show the user a choice dialog.
            if (error.terminal) {
                throw error;
            }

            consecutiveErrors++;
            console.error(`Polling attempt ${attempts} failed: ${error.message}`);

            if (attempts >= maxAttempts) {
                throw new Error(`Replicate prediction timed out after ${maxAttempts} attempts: ${error.message}`);
            }

            // Exponential backoff for consecutive errors
            if (consecutiveErrors >= maxConsecutiveErrors) {
                delay = Math.min(delay * 1.5, 10000);
                console.log(`Consecutive errors, increasing delay to ${delay}ms`);
            }

            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    throw new Error(`Replicate prediction timed out after ${maxAttempts} attempts.`);
}

// Helper: Generate empty room using text-to-image (for start fresh scenarios)
async function generateEmptyRoomWithTextToImage(prompt, negativePrompt) {
    const modelOptions = [
        {
            version: "stability-ai/stable-diffusion-3.5-large",
            name: "SD 3.5 Large",
            type: "txt2img"
        },
        {
            version: "stability-ai/stable-diffusion-xl-base-1.0",
            name: "SDXL Base",
            type: "txt2img"
        }
    ];

    let lastError = null;

    for (let i = 0; i < modelOptions.length; i++) {
        const model = modelOptions[i];
        console.log(`Attempting empty room generation with model: ${model.name}`);

        try {
            const inputData = {
                prompt: prompt,
                negative_prompt: negativePrompt,
                width: 1024,
                height: 1024,
                guidance_scale: 15.0,
                num_inference_steps: 40,
                scheduler: "K_EULER",
                seed: Math.floor(Math.random() * 1000000)
            };

            const response = await fetchWithRetry(REPLICATE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    version: model.version,
                    input: inputData
                })
            }, 3, 3000);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = `Model ${model.name} failed: ${errorData.detail || response.status}`;
                console.warn(error);
                lastError = new Error(error);
                continue;
            }

            const prediction = await response.json();
            if (!prediction.urls || !prediction.urls.get) {
                const error = `Model ${model.name} did not return a polling URL.`;
                console.warn(error);
                lastError = new Error(error);
                continue;
            }

            console.log(`Polling for results from ${model.name}...`);
            const result = await pollReplicatePrediction(prediction.urls.get);
            console.log(`Successfully generated empty room with ${model.name}`);
            return result.imageUrls;

        } catch (error) {
            console.warn(`Model ${model.name} failed:`, error.message);
            lastError = error;

            if (i === modelOptions.length - 1) {
                throw new Error(`All models failed. Last error: ${error.message}`);
            }
            continue;
        }
    }

    throw lastError || new Error('All model attempts failed');
}

// Pick a gpt-image-1 output size that matches the input image's aspect ratio.
// gpt-image-1 only supports 1024x1024, 1024x1536 (portrait), and 1536x1024 (landscape).
// Using 'auto' lets the model pick — which often results in a square crop that zooms
// into part of the source image. Matching aspect ratio keeps the full original framing.
function pickGptImageSize(imageBase64) {
    return new Promise((resolve) => {
        try {
            const img = new Image();
            img.onload = () => {
                const w = img.naturalWidth || 1;
                const h = img.naturalHeight || 1;
                const ratio = w / h;
                // Square supported sizes have ratios: 1.0, 1.5 (landscape), 0.667 (portrait).
                // Pick whichever is closest in log-space to the input ratio.
                const candidates = [
                    { size: '1024x1024', ratio: 1.0 },
                    { size: '1536x1024', ratio: 1536 / 1024 },
                    { size: '1024x1536', ratio: 1024 / 1536 }
                ];
                let best = candidates[0];
                let bestDist = Math.abs(Math.log(ratio / best.ratio));
                for (const c of candidates.slice(1)) {
                    const d = Math.abs(Math.log(ratio / c.ratio));
                    if (d < bestDist) { best = c; bestDist = d; }
                }
                resolve(best.size);
            };
            img.onerror = () => resolve('1024x1024');
            img.src = imageBase64.startsWith('data:image') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;
        } catch (_) {
            resolve('1024x1024');
        }
    });
}

// Map free-form prompt text to proplabs/virtual-staging's `room` enum.
// Order matters — check the most specific names first (e.g. "dining room"
// before "room") so "dining room" doesn't get swallowed by a generic match.
function mapPromptToProplabsRoom(prompt) {
    const text = (prompt || '').toLowerCase();
    if (/\bdining\b/.test(text)) return 'Dining Room';
    if (/\bbedroom\b|\bbed room\b/.test(text)) return 'Bedroom';
    if (/\bkitchen\b/.test(text)) return 'Kitchen';
    if (/\bbathroom\b|\bbath room\b/.test(text)) return 'Bathroom';
    if (/\boffice\b|\bstudy\b|\bworkspace\b/.test(text)) return 'Office';
    if (/\bbalcony\b/.test(text)) return 'Balcony';
    if (/\bgarden\b|\bbackyard\b|\bpatio\b/.test(text)) return 'Garden';
    if (/\bpool\b/.test(text)) return 'Swimming Pool';
    return 'Living Room';
}

// Map free-form prompt text to proplabs/virtual-staging's `furniture_style`
// enum. Anything unrecognised falls through to the model's default.
function mapPromptToProplabsStyle(prompt) {
    const text = (prompt || '').toLowerCase();
    // Order matters — longer/more-specific names first.
    if (/mid-?century/.test(text)) return 'Mid-Century Modern';
    if (/scandinavian oasis/.test(text)) return 'Scandinavian Oasis';
    if (/scandinavian/.test(text)) return 'Scandinavian';
    if (/transitional luxury/.test(text)) return 'Transitional Luxury';
    if (/transitional/.test(text)) return 'Transitional';
    if (/modern organic/.test(text)) return 'Modern Organic';
    if (/b&w modern|black and white modern/.test(text)) return 'B&W Modern';
    if (/nyc modern|new york modern/.test(text)) return 'NYC Modern';
    if (/farmhouse hacienda/.test(text)) return 'Farmhouse Hacienda';
    if (/farmhouse/.test(text)) return 'Farmhouse';
    if (/metro industrial/.test(text)) return 'Metro Industrial';
    if (/urban industrial|industrial/.test(text)) return 'Urban Industrial';
    if (/coastal|beach/.test(text)) return 'Coastal';
    if (/traditional/.test(text)) return 'Traditional';
    if (/rustic/.test(text)) return 'Rustic';
    if (/modern/.test(text)) return 'Modern';
    return 'Default (AI decides)';
}

const PROPLABS_STYLE_FALLBACK = 'Default (AI decides)';

// Does proplabs/virtual-staging's `furniture_style` enum have a faithful slot
// for this style? Its vocabulary doesn't line up with ours: Bohemian and Art
// Deco have no equivalent at all, Japandi collapses onto "Scandinavian", and
// Minimalist lands on "Modern" because its prompt text contains the word.
// Sending those through the enum silently generates a *different* style than
// the one the user tapped, so they route to the prompt-capable model instead.
function proplabsCanExpressStyle(styleObj) {
    if (!styleObj) return true; // no style picked → nothing to lose
    const mapped = mapPromptToProplabsStyle(styleObj.promptText);
    if (mapped === PROPLABS_STYLE_FALLBACK) return false;
    // The enum name must actually contain the style we showed the user —
    // "Mid-Century" → "Mid-Century Modern" is faithful, "Japandi" →
    // "Scandinavian" is not.
    const ours = styleObj.name.toLowerCase().replace(/[^a-z]/g, '');
    const theirs = mapped.toLowerCase().replace(/[^a-z]/g, '');
    return theirs.includes(ours);
}

/**
 * Decide whether a free (non-premium) run can use proplabs/virtual-staging.
 *
 * proplabs has no free-form prompt — its schema is a `room` enum and a
 * `furniture_style` enum (see the inputData branch in
 * generateImageWithControlNet). Everything else the user told us is dropped on
 * the floor: selected items have no field at all, refinement text has nowhere
 * to go, and several styles have no faithful enum value.
 *
 * Returns the reason to route elsewhere, or null to keep proplabs.
 */
function freeRouteAwayFromProplabs({ styleObj, itemCount, refinementText, addToFurnished = false }) {
    if (refinementText) return 'refinement';
    if (itemCount > 0) return 'items';
    // "Add to it" on a furnished room is an instruction (keep what's there,
    // add a little). The staging model can't be told that — it would restage.
    if (addToFurnished) return 'add-to-furnished';
    if (!proplabsCanExpressStyle(styleObj)) return 'style';
    return null;
}

/** Furnished photo, "Add to it" chosen: the run that keeps what is there. */
function isAddToFurnishedRun() {
    return currentRoomType === 'furnished' && furnishedOption === 'add-new' && !isRoomActuallyEmpty;
}

const DEFAULT_MODEL_FAILED_USER_MESSAGE =
    "Our default image model couldn't process this image. Would you like to try our free backup model? " +
    'It uses a different AI engine and may handle this image. This won\'t count against your limits.';

// Helper: Generate image with a Replicate model.
// By default it runs ONLY the proplabs default model — no auto-fallback,
// because we want to surface the failure and let the user decide whether
// to try the free backup or the premium model. Callers can pass
// `options.modelType` to pick a different model from the available list
// (e.g. 'img2img' for the SD 3.5 free backup), and `options.forceFallback`
// to mark the run as free (server skips quota tracking).
async function generateImageWithControlNet(imageBase64, prompt, negativePrompt, options = {}) {
    // Check if this is a "start fresh" scenario (empty room generation)
    const isStartFresh = prompt.includes("completely empty space") || prompt.includes("Remove all furniture") || prompt.includes("empty room") || prompt.includes("COMPLETELY EMPTY ROOM") || prompt.includes("REMOVE ALL EXISTING FURNITURE") || prompt.includes("EMPTY ROOM ONLY");
    // Empty room + add furniture only: add specified items while preserving room structure
    const isEmptyRoomAddFurniture = (/keep the room exactly|add .+ to this room|a room with .+ visible|empty room/i.test(prompt)) && (/add .+(to this room|these items|the following)/i.test(prompt));

    // Catalog of models we can run. Default behavior runs only the first
    // entry (proplabs); the user's choice after a failure determines
    // whether we run the SD 3.5 backup or the OpenAI premium upgrade.
    const modelOptions = [
        {
            version: "proplabs/virtual-staging:635d607efc6e3a6016ef6d655327cd35f3d792e84b8f110688b04498c6e94cfb",
            name: "PropLabs Virtual Staging",
            type: "proplabs-staging"
        },
        {
            version: "stability-ai/stable-diffusion-3.5-large",
            name: "SD 3.5 Large",
            type: "img2img"
        }
    ];

    let lastError = null;
    // True when this run is a free fallback (after the default failed and
    // the user chose to try a backup). Tells the server to skip quota
    // tracking and surfaces the "free run" banner.
    let usedFallback = !!options.forceFallback;

    // Pick which model to run. Default is JUST proplabs — we do NOT
    // auto-chain. Failures bubble up so the caller can ask the user
    // whether to try the free backup or the premium upgrade.
    const requestedType = options.modelType || 'proplabs-staging';
    const selected = modelOptions.filter(m => m.type === requestedType);
    if (selected.length === 0) {
        throw new Error(`Unknown modelType: ${requestedType}`);
    }

    for (let i = 0; i < selected.length; i++) {
        const model = selected[i];
        console.log(`Attempting generation with model: ${model.name}`);

        try {

            let inputData;
            if (model.type === 'proplabs-staging') {
                // proplabs/virtual-staging has no free-form prompt — it
                // takes a room enum and a furniture-style enum. Map the
                // prompt text to the closest enum value; fall back to the
                // model's own "Default (AI decides)" if nothing matches.
                // The `replicate_api_key` field is injected server-side
                // from env so it never touches the browser.
                inputData = {
                    image: imageBase64,
                    room: mapPromptToProplabsRoom(prompt),
                    furniture_style: mapPromptToProplabsStyle(prompt),
                };
            } else {
                inputData = {
                    image: imageBase64,
                    prompt: prompt,
                };
                if (negativePrompt && negativePrompt.trim()) {
                    inputData.negative_prompt = negativePrompt;
                }
            }

            if (model.type === 'img2img') {
                // stability-ai/stable-diffusion-3.5-large schema uses `cfg`
                // and `prompt_strength` — NOT the SDXL-style param names.
                // Anything else is rejected with 422 "additional property
                // not allowed".
                inputData.cfg = 5;
                inputData.prompt_strength = isStartFresh ? 0.95 : 0.75;
                inputData.output_format = 'png';
                inputData.seed = Math.floor(Math.random() * 1000000);
            }

            const response = await fetchWithRetry(REPLICATE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Fallback signal travels in a header so the JSON body
                    // stays a pure Replicate payload (Replicate rejects
                    // unknown top-level properties).
                    ...(usedFallback ? { 'X-Fallback': '1' } : {}),
                    ...(currentSession ? { 'Authorization': `Bearer ${currentSession.access_token}` } : {})
                },
                body: JSON.stringify({
                    version: model.version,
                    input: inputData
                })
            }, 3, 3000); // Increased retries and timeout for initial request

            // Quota exceeded — stop the fallback chain and propagate.
            if (response.status === 429) {
                const data = await response.json().catch(() => ({}));
                const err = new Error(data.error || 'Monthly generation limit reached');
                err.code = 'QUOTA_EXCEEDED';
                err.quota = data;
                throw err;
            }

            // The device's pre-signup generation is gone (already spent, or the
            // cookie was cleared). Terminal — retrying another model would just
            // be refused too, so propagate and let the caller ask for signup.
            if (response.status === 401) {
                const data = await response.json().catch(() => ({}));
                const err = new Error(data.error || 'Create a free account to keep designing.');
                if (data.anonExhausted) err.code = 'ANON_EXHAUSTED';
                throw err;
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = `Model ${model.name} failed: ${errorData.detail || response.status}`;
                console.warn(error);
                lastError = new Error(error);
                continue; // Try next model
            }

            const prediction = await response.json();
            if (!prediction.urls || !prediction.urls.get) {
                const error = `Model ${model.name} did not return a polling URL.`;
                console.warn(error);
                lastError = new Error(error);
                continue; // Try next model
            }

            // Poll for completion
            console.log(`Polling for results from ${model.name}...`);
            // No saveContext on a region run: the server would store this raw
            // crop, not the composited image the user actually sees.
            const saveContext = options.skipSave ? null : {
                prompt,
                model: model.type,
                sourceType: options.sourceType || 'room-design',
                metadata: options.saveMetadata || {},
            };
            const result = await pollReplicatePrediction(prediction.urls.get, saveContext);
            console.log(`Successfully generated with ${model.name}`);
            // pollReplicatePrediction returns either a string or an array
            // depending on the model — normalize to an array so we can attach
            // the usedFallback flag.
            const raw = result.imageUrls;
            const imageUrls = Array.isArray(raw) ? raw.slice() : (raw ? [raw] : []);
            imageUrls.usedFallback = usedFallback;
            imageUrls.modelUsed = model.type;
            imageUrls.savedDesignId = result.savedDesignId || null;
            return imageUrls;

        } catch (error) {
            // Quota errors are terminal — don't try other models, surface
            // immediately so the UI can show a clear "monthly limit reached"
            // message and refresh the badge.
            if (error.code === 'QUOTA_EXCEEDED') {
                throw error;
            }

            console.warn(`Model ${model.name} failed:`, error.message);
            lastError = error;

            // If this is the last model in the selected set, throw a
            // distinct error so the caller can recognise it and surface
            // the right choice dialog.
            if (i === selected.length - 1) {
                const err = new Error(`Model failed: ${error.message}`);
                err.code = 'MODEL_FAILED';
                err.modelType = requestedType;
                err.detail = error.message;
                throw err;
            }

            continue;
        }
    }

    // This should never be reached, but just in case
    throw lastError || new Error('All model attempts failed');
}

// Exposed so the floor plan editor can turn a rendered room blockout into a
// photoreal eye-level interior. Uses the premium gpt-image-2 edit path: it
// follows the blockout's room shape, camera and furniture placement while
// producing a fully photorealistic result. Counts against the monthly quota.
window.__decoraitGenerateRoomRender = async function (guideBase64, opts = {}) {
    const stylePrompt = (opts && opts.stylePrompt) ? opts.stylePrompt.trim() : '';
    const roomBrief = (opts && opts.roomBrief) ? opts.roomBrief.trim() : '';
    const prompt = [
        'This image is a plain 3D blockout of one room in a home, seen at eye level: a wood-colored floor, blank walls and ceiling, openings for doors and windows, and colored boxes that mark where furniture goes.',
        'Turn it into a photorealistic interior photograph of the same room from the same camera position, with the same wide-angle lens and framing.',
        'Keep everything that is in the blockout in the frame: do not crop, zoom in or move the camera closer.',
        roomBrief ? `The room: ${roomBrief}` : '',
        "Keep the room's shape, every wall, door and window opening, and the position, footprint and orientation of every furniture block — replace each colored box with a realistic, well-designed piece of the matching type standing in that exact spot.",
        'Bright panes in the walls are windows with natural daylight. Doorways can show glimpses of the neighboring rooms; keep them consistent with the same home but quieter than the main room.',
        `Style: ${stylePrompt || 'tasteful contemporary interior'}.`,
        'Realistic materials and textures, soft natural daylight, subtle shadows. Architectural interior photography, high detail, no people, no text or labels.'
    ].filter(Boolean).join(' ');
    const result = await callPremiumImageEdit(guideBase64, prompt, {
        sourceType: 'room3d',
        metadata: { stylePrompt: stylePrompt || null, roomName: (opts && opts.roomName) || null },
    });
    return result.imageUrl;
};

// Helper: Upscale image using Replicate (optional)
async function upscaleImageWithReplicate(imageUrl) {
    const UPSCALE_MODEL_VERSION = "nightmareai/real-esrgan";
    const response = await fetch(REPLICATE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            version: UPSCALE_MODEL_VERSION,
            input: {
                image: imageUrl
            }
        })
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Upscale failed: ${errorData.detail || response.status}`);
    }
    const prediction = await response.json();
    if (!prediction.urls || !prediction.urls.get) {
        throw new Error('Replicate did not return a polling URL for upscaling.');
    }
    // Poll for completion
    const result = await pollReplicatePrediction(prediction.urls.get);
    return result.imageUrl; // URL to upscaled image
}

// New function using Replicate API
async function generateImageWithReplicate(imageBase64, prompt) {
    console.log(`Sending request to Replicate img2img via proxy`);
    console.log(`Prompt: ${prompt}`);
    // Ensure base64 string has the data URI prefix
    const imageInput = imageBase64.startsWith('data:image') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;

    try {
        // 1. Start the prediction by calling our proxy
        const startResponse = await fetchWithRetry(REPLICATE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                version: REPLICATE_MODEL_VERSION,
                input: {
                    prompt: prompt,
                    image: imageInput,
                }
            })
        });

        if (!startResponse.ok) {
            const errorData = await startResponse.json().catch(() => ({ detail: 'Unknown error starting prediction.' }));
            console.error("Replicate API error response (start):", errorData);
            throw new Error(`Replicate API error (${startResponse.status}): ${errorData.detail || 'Failed to start prediction'}`);
        }

        const prediction = await startResponse.json();
        console.log('Replicate prediction started:', prediction);

        if (!prediction.urls || !prediction.urls.get) {
            throw new Error('Replicate API did not return a URL to poll.');
        }

        // 2. Poll for the result using our proxy
        const result = await pollReplicatePrediction(prediction.urls.get);
        console.log('Replicate prediction finished via proxy:', result);
        return result; // Should be { imageUrl: '...' }

    } catch (error) {
        console.error('Error during Replicate generation:', error);
        // Re-throw the error to be caught by the calling function (generateDesigns)
        throw error;
    }
}

// Generate a single design image
async function generateDesigns(options = {}) {
    const fengShuiApply = options.fengShuiResult && options.imageSource;
    const quickEditApply = !!(options.quickEdit && options.imageSource);
    // "Remove it": the painted area goes to the eraser model.
    // Regenerate with no new text after a region edit (Remove it or Change
    // it…) is another take of that edit on the same area — its mask went
    // with the old card, but the design kept the region.
    const priorRegionDesign = generatedDesigns?.[0];
    const repeatRegion = !options.regionRemove && !fengShuiApply && !quickEditApply
        && resultsSection && !resultsSection.classList.contains('hidden')
        && priorRegionDesign && !priorRegionDesign.loading && priorRegionDesign.region
        && !refinementInput?.value?.trim()
        ? priorRegionDesign.region
        : null;
    const repeatErase = repeatRegion?.mode === 'remove' ? repeatRegion : null;
    const regionRemoveApply = !!options.regionRemove || !!repeatErase;
    const specialApply = fengShuiApply || quickEditApply || regionRemoveApply;

    // Signed in but unconfirmed → ask them to confirm. Signed OUT must fall
    // through to the gates below, which choose between the pre-signup run and
    // the sign-up form; this check used to bounce every signed-out visitor to
    // a Sign In form first, so the pre-signup run could never happen.
    if (currentUser && !requireEmailConfirmedForFeature('design generation')) return;
    if (!currentUploadedImage && !specialApply) {
        showAlertDialog('Please upload an image first');
        return;
    }

    // An erase is one model on every tier, so it never spends a premium token.
    const usePremium = regionRemoveApply
        ? false
        : fengShuiApply
            ? !!options.usePremium
            : quickEditApply
                ? !!options.usePremium
                : getEffectiveDefaultModelPref() === 'premium';

    // Only premium generations consume tokens. Free runs are unlimited for
    // signed-in users — we gate on auth so anonymous traffic can't abuse it.
    // If a gate blocks us, remember the attempt so it resumes after sign-in
    // rather than stranding the user on a form.
    setPendingGatedAction(() => generateDesigns(options));
    if (usePremium) {
        if (!hasTokensAvailable()) return;
    } else {
        if (!ensureLoggedIn()) return;
    }
    setPendingGatedAction(null);

    // Captured before the request: if the gate let us through without an
    // account, this run is spending the device's one pre-signup generation.
    const wasAnonymousRun = !currentUser;
    trackGenerationStarted(
        regionRemoveApply ? 'erase' : fengShuiApply ? 'feng-shui' : quickEditApply ? 'quick-edit' : 'redesign',
        usePremium ? 'premium' : 'free',
    );

    // Check if we're regenerating (already on results screen)
    const isCurrentlyOnResults = resultsSection && !resultsSection.classList.contains('hidden');

    // Region edit. A region comes only from the region menu (Remove it /
    // Change it…), which names its scope: the uploaded photo (Quick Edit) or
    // the result. Typed edits in the composer or refine box are for the whole
    // image, even with something painted. Snapshot now: rendering the loading
    // card replaces a result image and tears its editor down.
    const regionEditor = fengShuiApply || repeatRegion
        ? null
        : options.regionRemove
            ? activeMask(options.regionRemove.scope)
            : options.regionScope
                ? activeMask(options.regionScope)
                : null;
    const strokeMask = regionEditor ? regionEditor.toStrokeMaskDataUrl() : null;
    const region = repeatRegion || (strokeMask ? {
        mode: options.regionRemove ? 'remove' : (options.regionMode === 'keep' ? 'keep' : 'change'),
        // What the user painted — the anchor for "which change to keep".
        stroke: strokeMask,
        // "Keep this": the feathered inverse used to restore the kept area.
        composite: !options.regionRemove && options.regionMode === 'keep'
            ? regionEditor.toCompositeMaskDataUrl('keep')
            : null,
        // "Remove this": what the eraser model gets (white = erase).
        eraseMask: options.regionRemove ? regionEditor.toEraseMaskDataUrl() : null,
        // The image the mask was painted on is the one to edit — not
        // whatever history entry happens to be selected.
        source: regionEditor.sourceSrc,
    } : null);
    if ((regionRemoveApply || options.regionScope) && !region) {
        showToastMessage('Brush over the item you want to edit first.', 'info');
        return;
    }
    // The region is captured, so Quick Edit's photo can be clean for next
    // time. (A result's editor goes with its card below.)
    if (regionEditor && maskScope === 'configure') {
        regionEditor.clear();
        resetRegionMenu();
    }

    let basePrompt;
    let style;
    let description;
    let prompts;
    let fullPrompt;
    let negativePrompt;
    // When set, the non-premium path uses Nano Banana (instruction-edit model)
    // with this prompt instead of the proplabs/ControlNet staging model. This is
    // for targeted edits ("make the walls blue") where proplabs — which has no
    // free-form prompt — would ignore the instruction and just re-stage furniture.
    let nanoEditPrompt = null;
    // Why we left proplabs: 'quick-edit' | 'refinement' | 'items' | 'style' |
    // 'feng-shui'. Drives the saved design's sourceType and the console trace;
    // null means the run stayed on the default staging model.
    let nanoRouteReason = null;

    if (regionRemoveApply) {
        basePrompt = '';
        style = 'Removed item';
        description = 'Removing what you painted…';
        // Not sent to any model (the eraser takes no prompt); it labels the
        // design in history and My Designs.
        fullPrompt = 'Remove the selected item';
        negativePrompt = '';
        prompts = { shouldGenerate: true };
        nanoRouteReason = 'erase';
    } else if (fengShuiApply) {
        ensureRoomTypeFromWizard();
        basePrompt = aiPrompts[currentRoomType] || aiPrompts.furnished;
        style = 'Feng shui layout';
        description = 'Applying feng shui recommendations to your room…';
        fullPrompt = buildFengShuiGenerationPrompt(options.fengShuiResult);
        negativePrompt = getFengShuiNegativePrompt();
        prompts = { shouldGenerate: true };
    } else if (quickEditApply) {
        // Prompt is fully specified by the user's swatch picks; no wizard
        // context or base prompt needed.
        basePrompt = '';
        style = options.quickEdit.label || 'Quick edit';
        description = options.quickEdit.description || 'Applying your quick edit…';
        // A region run is wrapped per model at the call (guide image or mask).
        // The design keeps the instruction itself, so nothing accumulates.
        fullPrompt = options.quickEdit.prompt;
        negativePrompt = '';
        prompts = { shouldGenerate: true };
        nanoEditPrompt = fullPrompt; // free path → Nano Banana
        nanoRouteReason = 'quick-edit';
    } else {
        // Try to determine the room type if not already set
        if (!currentRoomType) {
            // First time generation - read from radio buttons
            const emptyRadio = document.getElementById('empty-room');
            const furnishedRadio = document.getElementById('furnished-room');

            if (emptyRadio && emptyRadio.checked) {
                currentRoomType = 'empty';
            } else if (furnishedRadio && furnishedRadio.checked) {
                currentRoomType = 'furnished';
            }
        }

        // Validate that we have a valid room type
        if (!currentRoomType || !designStyles[currentRoomType]) {
            console.error('Invalid room type:', currentRoomType, 'isCurrentlyOnResults:', isCurrentlyOnResults);
            showAlertDialog('Please select a room type first');
            return;
        }

        basePrompt = aiPrompts[currentRoomType];
        const styleObj = selectedDesignStyle ? interiorDesignStyles.find(s => s.id === selectedDesignStyle) : null;
        style = styleObj ? styleObj.promptText : '';
        description = designDescriptions[currentRoomType][0]; // Use first description
        prompts = generatePromptsWithItems(basePrompt, style);

        const refinementText = refinementInput?.value?.trim();
        const priorDesign = generatedDesigns?.[0];
        const isResultsRegenerate = isCurrentlyOnResults && priorDesign && !priorDesign.loading;
        const canBypassItemValidation = isResultsRegenerate
            && (refinementText || priorDesign.prompt || priorDesign.imageUrl);

        // Check if we should generate an image (skip wizard item validation when refining a result)
        if (!prompts.shouldGenerate && !canBypassItemValidation) {
            if (currentRoomType === 'empty' || (currentRoomType === 'furnished' && furnishedOption === 'add-new')) {
                showItemsSelectionError();
            }
            return;
        }

        if (isResultsRegenerate) {
            negativePrompt = priorDesign.negativePrompt || prompts.negativePrompt;
            if (refinementText) {
                // A refine edits the CURRENT image, which already carries every
                // earlier edit — so the model gets this instruction and nothing
                // else. This used to append it to the previous design's prompt
                // ("… Apply these refinements: …"), and that combined prompt
                // became the next base, so each pass re-sent every old
                // instruction and the prompt grew without limit.
                fullPrompt = refinementText;
                nanoEditPrompt = fullPrompt;
                nanoRouteReason = 'refinement';
            } else if (priorDesign.route === 'refinement' || priorDesign.route === 'quick-edit') {
                // Regenerate with no new text after an instruction edit: another
                // take of that same instruction, on the same model — not a
                // re-stage by a model that can't read it.
                fullPrompt = priorDesign.prompt;
                nanoEditPrompt = fullPrompt;
                nanoRouteReason = priorDesign.route;
            } else {
                // Regenerate with no new text after a redesign: the same prompt
                // again. Re-check the route so a plain "Regenerate" doesn't
                // downgrade to the enum model when items or style need more.
                fullPrompt = priorDesign.prompt || prompts.positivePrompt;
                nanoRouteReason = freeRouteAwayFromProplabs({
                    styleObj,
                    itemCount: selectedRoomItems.size,
                    refinementText: '',
                    addToFurnished: isAddToFurnishedRun(),
                });
                if (nanoRouteReason) nanoEditPrompt = fullPrompt;
            }
        } else {
            fullPrompt = refinementText
                ? buildRefinementPrompt(prompts.positivePrompt, refinementText)
                : prompts.positivePrompt;
            // First run from the configure screen. proplabs/virtual-staging
            // drops selected items entirely and mistranslates four of our ten
            // styles, so route to the prompt-capable model whenever there is
            // anything for it to lose. A bare restyle with a cleanly-mapping
            // style stays on proplabs, which is purpose-built for staging.
            nanoRouteReason = freeRouteAwayFromProplabs({
                styleObj,
                itemCount: selectedRoomItems.size,
                refinementText,
                addToFurnished: isAddToFurnishedRun(),
            });
            if (nanoRouteReason) nanoEditPrompt = fullPrompt;
            negativePrompt = prompts.negativePrompt;
        }
    }

    // Transition: hide wizard (and its progress bar), show results
    if (wizardContainer) wizardContainer.classList.add('hidden');
    if (wizardProgress) wizardProgress.classList.add('hidden');
    const uploadSection = document.getElementById('upload-section');
    if (uploadSection) uploadSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    // Give results its own history entry. Without this, Back from a result
    // skipped straight past /design to / — hiding the configure view and its
    // Generate button even though the photo was still loaded.
    syncUrl('result');
    designCarousel.innerHTML = '';

    // Ensure back button is visible
    if (backToOptionsBtn) {
        backToOptionsBtn.classList.remove('hidden');
    }

    // Create initial design with loading state
    const initialDesign = {
        id: 'design-0',
        title: style,
        description: description,
        imageUrl: '',
        originalImageUrl: currentUploadedImage,
        prompt: fullPrompt,
        negativePrompt: negativePrompt,
        isFallback: false,
        loading: true,
        needsRetry: false,
        errorMessage: ''
    };

    // A result's mask goes with the card that's about to be replaced. One on
    // the uploaded photo stays, so Back → regenerate keeps the region.
    if (maskScope === 'results') destroyMaskEditor();
    generatedDesigns = [initialDesign];
    displayDesigns(generatedDesigns);
    updateResultsFengShuiButtonState();

    scrollPageToTop();
    if (isCurrentlyOnResults) {
        scrollToDesignLoader(0);
    }

    // Seed history with the original upload on the first run, so the user can
    // always navigate back to it from the strip.
    seedDesignHistoryWithOriginal();

    // When regenerating from the results screen, chain off whichever history
    // entry the user has selected (defaults to the most recent generation).
    // On the first run, the strip is empty and we use the original upload.
    const sourceImage = region
        ? region.source
        : specialApply
            ? options.imageSource
            : (isCurrentlyOnResults ? getBaseImageForNextGeneration() : currentUploadedImage);

    // Stash inputs on the design up front so the premium fallback handler
    // can reuse them even if the default chain throws before we'd normally
    // attach them on success. That includes the region, so a recovery run
    // stays a region edit, and the free prompt, so it uses the same model.
    initialDesign.sourceImage = sourceImage;
    initialDesign.region = region;
    initialDesign.nanoPrompt = nanoEditPrompt;
    initialDesign.route = nanoRouteReason;

    initialDesign.negativePrompt = negativePrompt;

    // What the model gets: the photo, with the target marked on it (or, for a
    // removal, named in the prompt) when a region is painted — the
    // instruction models only; see regionModelInput.
    const { input: modelInputImage, edit: regionEdit } =
        await regionModelInput(initialDesign, nanoEditPrompt || fullPrompt);

    // Generate the image
    try {
        // Log what the model will actually receive. The free instruction path
        // sends nanoEditPrompt, not fullPrompt — logging the wrong one made a
        // prompt look like it contained text that was never sent.
        const sentPrompt = usePremium
            ? (regionEdit ? regionEdit.prompt(fullPrompt) : fullPrompt)
            : (nanoEditPrompt ? (regionEdit ? regionEdit.prompt(nanoEditPrompt) : nanoEditPrompt) : fullPrompt);
        console.log('Starting image generation with prompt:', sentPrompt);
        console.log('Negative prompt:', negativePrompt);
        console.log('Source image:', fengShuiApply ? 'feng shui apply' : quickEditApply ? 'quick edit' : (isCurrentlyOnResults && lastGeneratedImageUrl ? 'last generated' : 'original upload'));
        console.log('Model preference:', usePremium ? 'premium' : 'free');
        if (!usePremium) {
            console.log('Free model route:', nanoRouteReason
                ? `nano-banana (${nanoRouteReason} — proplabs would drop it)`
                : 'proplabs staging (nothing to lose)');
        }

        let imageUrl = '';
        let usedFallback = false;
        let modelUsed = null;
        let savedDesignId = null;
        const designSourceType = fengShuiApply
            ? 'feng-shui'
            // Only genuine instruction edits are stored as 'quick-edit'. A full
            // wizard run is still a room design even when it routes to Nano
            // Banana for fidelity, so My Designs keeps labelling it correctly.
            : (['quick-edit', 'refinement', 'erase'].includes(nanoRouteReason)
                ? 'quick-edit'
                : 'room-design');

        if (nanoRouteReason === 'erase') {
            // Mask-based eraser on every tier — no prompt to misread.
            imageUrl = await generateEraseWithBria(region);
            modelUsed = 'bria-eraser';
        } else if (usePremium) {
            // Premium path — counts against quota. Endpoint reserves a slot.
            const premiumResult = await callPremiumImageEdit(regionEdit?.image || modelInputImage, fullPrompt, {
                sourceType: designSourceType,
                metadata: { style, roomType: currentRoomType, masked: !!region, ...shopMetadata() },
                // A masked run is composited client-side, so the server's
                // copy would be the wrong image. Save from the client after.
                skipSave: !!region,
                regionPrompt: regionEdit?.prompt,
            });
            imageUrl = premiumResult.imageUrl;
            savedDesignId = premiumResult.savedDesignId;
            modelUsed = 'openai';
        } else if (nanoEditPrompt) {
            // Free instruction-edit path — Nano Banana (Gemini 2.5 Flash Image)
            // preserves the rest of the room while applying the typed edit.
            // Used for Quick Edit and for refining a generated result with text.
            // Free to the user; never counts against quota.
            const nanoResult = await generateQuickEditWithNanoBanana(regionEdit?.image || modelInputImage, nanoEditPrompt, {
                skipSave: !!region,
                regionPrompt: regionEdit?.prompt,
            });
            imageUrl = nanoResult.imageUrl;
            savedDesignId = nanoResult.savedDesignId;
            modelUsed = 'nano-banana';
        } else {
            const imageUrls = await generateImageWithControlNet(modelInputImage, fullPrompt, negativePrompt, {
                sourceType: designSourceType,
                saveMetadata: { style, roomType: currentRoomType },
                skipSave: !!region,
            });
            if (Array.isArray(imageUrls)) {
                imageUrl = imageUrls[0];
                usedFallback = !!imageUrls.usedFallback;
                modelUsed = imageUrls.modelUsed || null;
                savedDesignId = imageUrls.savedDesignId || savedDesignId;
            } else if (typeof imageUrls === 'string') {
                imageUrl = imageUrls;
            }
        }

        // Enforce the region boundary on the way back. Must happen before the
        // image is displayed or saved so both show the same thing.
        imageUrl = await applyRegion(initialDesign, imageUrl);

        initialDesign.imageUrl = imageUrl;
        initialDesign.loading = false;
        initialDesign.isFallback = false;
        initialDesign.modelUsed = modelUsed;
        initialDesign.sourceImage = sourceImage;
        initialDesign.negativePrompt = negativePrompt;

        if (fengShuiApply) {
            initialDesign.description = buildFengShuiAppliedDescription(options.fengShuiResult);
        }

        // Remember this image for subsequent regenerations
        if (imageUrl) {
            lastGeneratedImageUrl = imageUrl;
            await onGenerationSuccess(imageUrl, {
                prompt: fullPrompt,
                model: modelUsed,
                sourceType: designSourceType,
                metadata: { style, roomType: currentRoomType, ...shopMetadata() },
                savedDesignId,
            });
        }

        // Only premium runs consume a generation slot — refresh the badge.
        // Free models (proplabs / SD 3.5) never count against the limit.
        if (modelUsed === 'openai') {
            await useTokenAfterSuccess();
        }

        // The instruction is now baked into the image. Leaving it in the box
        // means the next Regenerate applies it a second time on top of itself.
        if (nanoRouteReason === 'refinement' && imageUrl && refinementInput) {
            refinementInput.value = '';
            updateRefinementState();
        }

        if (imageUrl) suggestPremiumForEmptyRoom(initialDesign);

        // That was the pre-signup run. The result stays on screen — it's the
        // whole point — but it isn't saved and there isn't another one, so say
        // so once, here, rather than ambushing them at the next Generate.
        if (wasAnonymousRun && imageUrl) {
            anonGenerationsRemaining = 0;
            showToastMessage('Create a free account to save this design and keep going.', 'info');
        }

    } catch (error) {
        console.error(`Error in image generation for design (${style}):`, error);
        trackGenerationFailed('redesign', error);
        // Token is NOT deducted on failure

        // The pre-signup generation is spent. Terminal, and the next step is
        // an account — not a retry button.
        if (error.code === 'ANON_EXHAUSTED') {
            anonGenerationsRemaining = 0;
            initialDesign.imageUrl = '';
            initialDesign.loading = false;
            initialDesign.isFallback = false;
            initialDesign.needsRetry = false;
            initialDesign.errorMessage = 'Create a free account to keep designing.';
            updateDesignCard(initialDesign, 0);
            setPendingGatedAction(() => generateDesigns(options));
            showAuthModal('signup');
            return;
        }

        // Quota errors are terminal — no fallback offer makes sense.
        if (error.code === 'QUOTA_EXCEEDED') {
            initialDesign.imageUrl = '';
            initialDesign.loading = false;
            initialDesign.isFallback = false;
            initialDesign.needsRetry = true;
            initialDesign.errorMessage = quotaErrorMessage(error);
            if (userHasSubscription) await fetchSubscriptionUsage();
            syncDefaultModelToggles();
            updateDesignCard(initialDesign, 0);
            return;
        }

        // Premium model failed when used as default — surface the failure and
        // offer the user a free fallback.
        if (error.code === 'PREMIUM_FAILED') {
            initialDesign.imageUrl = '';
            initialDesign.loading = false;
            initialDesign.isFallback = false;
            initialDesign.needsRetry = true;
            initialDesign.errorMessage = `The premium model couldn't process your image: ${error.detail || 'unknown error'}.`;
            updateDesignCard(initialDesign, 0);

            const tryFree = await showConfirmDialog(
                `Our premium image model couldn't process this image.\n\n` +
                `Details: ${error.detail || 'unknown error'}\n\n` +
                `Would you like to try our free default model instead? It won't count against your limits.`,
                'Premium model failed',
                'Try free model',
                'Cancel'
            );
            if (tryFree) {
                await runFallbackOnDesign(0, initialDesign, 'proplabs-staging');
            }
            return;
        }

        // Default (free) model failed — surface the failure and offer the
        // user a choice: free backup model OR premium upgrade OR cancel.
        if (error.code === 'MODEL_FAILED') {
            initialDesign.imageUrl = '';
            initialDesign.loading = false;
            initialDesign.isFallback = false;
            initialDesign.needsRetry = true;
            initialDesign.errorMessage = DEFAULT_MODEL_FAILED_USER_MESSAGE;
            updateDesignCard(initialDesign, 0);

            await offerFallbackChoice(0, initialDesign);
            return;
        }

        // Everything else — generic error path.
        let userFriendlyMessage = 'Image generation failed. Please try again.';
        if (error.message.includes('timed out')) {
            userFriendlyMessage = 'Generation took too long and timed out. This can happen during peak usage. Please try again.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
            userFriendlyMessage = 'Network connection issue. Please check your internet connection and try again.';
        } else if (error.message.includes('401') || error.message.includes('unauthorized')) {
            userFriendlyMessage = 'API key issue. Please check your Replicate API key.';
        }

        initialDesign.imageUrl = '';
        initialDesign.loading = false;
        initialDesign.isFallback = false;
        initialDesign.needsRetry = true;
        initialDesign.errorMessage = userFriendlyMessage;
        updateDesignCard(initialDesign, 0);
        return;
    }

    // Update the card in the DOM
    updateDesignCard(initialDesign, 0);
}

function showRetryButton(card, cardData, index) {
    const revealContainer = card.querySelector('.image-reveal-container');
    if (revealContainer) {
        revealContainer.classList.remove('reveal-loading');

        // Create retry button container
        const retryContainer = document.createElement('div');
        retryContainer.className = 'retry-container';
        retryContainer.innerHTML = `
            <div class="retry-content">
                <div class="retry-icon">
                    <i data-feather="alert-triangle"></i>
                </div>
                <div class="retry-message">
                    <h4>Generation Failed</h4>
                    <p>${cardData.errorMessage || 'Image generation timed out or failed'}</p>
                </div>
                <button class="retry-btn">
                    <i data-feather="refresh-cw"></i>
                    <span>Retry Generation</span>
                </button>
            </div>
        `;

        // Clear the container and add retry UI
        revealContainer.innerHTML = '';
        revealContainer.appendChild(retryContainer);

        // Add click handler for retry button
        const retryBtn = retryContainer.querySelector('.retry-btn');
        retryBtn.addEventListener('click', () => {
            retryImageGeneration();
        });
    }

    // Update disclaimer
    const disclaimer = card.querySelector('.design-disclaimer');
    if (disclaimer) {
        disclaimer.innerHTML = `<p><strong>Generation Failed:</strong> ${cardData.errorMessage || 'Timed out or API error'}</p>`;
        disclaimer.classList.add('error');
        disclaimer.style.display = 'block';
    }

    // Update description
    const desc = card.querySelector('.design-description');
    if (desc) desc.textContent = cardData.description;

    // Replace feather icons
    feather.replace();
}

async function retryImageGeneration() {
    console.log('Retrying image generation');

    // Retry runs the free default chain — only an auth check is needed.
    if (!ensureLoggedIn()) return;
    trackGenerationStarted('retry', 'free');

    // Get the current design data
    const design = generatedDesigns[0];
    if (!design) {
        console.error('No design found');
        return;
    }

    // Reset the design to loading state
    design.loading = true;
    design.needsRetry = false;
    design.errorMessage = '';
    design.imageUrl = '';
    updateResultsFengShuiButtonState();

    // Find the card and show loading state
    const card = designCarousel.querySelector('[data-design-id="design-0"]');
    if (card) {
        const revealContainer = card.querySelector('.image-reveal-container');
        if (revealContainer) {
            revealContainer.classList.add('reveal-loading');

            // Replace the previous content (retry button or stale images)
            // with fresh image elements for the new generation to populate.
            revealContainer.innerHTML = `
                <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                <img class="design-image generated-image" src="" alt="${design.title}" style="opacity: 0; z-index: 3;">
            `;

            ensureLoadingSpinner(card);
            scrollToDesignLoader(card);

            // The compare divider is attached by compare.js, which observes the
            // DOM — no wiring needed at each render site.

            feather.replace();
        }

        // Hide disclaimer
        const disclaimer = card.querySelector('.design-disclaimer');
        if (disclaimer) {
            disclaimer.style.display = 'none';
        }
    }

    // Retry the generation
    try {
        // An erase retries as an erase: same photo, same mask, same model.
        if (design.route === 'erase' && design.region?.eraseMask) {
            const erased = await applyRegion(design, await generateEraseWithBria(design.region));
            design.imageUrl = erased;
            design.loading = false;
            design.needsRetry = false;
            design.isFallback = false;
            design.modelUsed = 'bria-eraser';
            design.sourceImage = design.region.source;
            if (erased) {
                lastGeneratedImageUrl = erased;
                await onGenerationSuccess(erased, {
                    prompt: design.prompt,
                    model: 'bria-eraser',
                    sourceType: 'quick-edit',
                    metadata: { roomType: currentRoomType, ...shopMetadata() },
                });
            }
            updateDesignCard(design, 0);
            return;
        }

        // Generate new prompts for retry
        const basePrompt = aiPrompts[currentRoomType];
        const styleObj = selectedDesignStyle ? interiorDesignStyles.find(s => s.id === selectedDesignStyle) : null;
        const style = styleObj ? styleObj.promptText : '';
        const prompts = generatePromptsWithItems(basePrompt, style);

        const retryRefinementText = refinementInput?.value?.trim();
        const canBypassItemValidation = !!(retryRefinementText || design.prompt || design.imageUrl);

        // Check if we should generate an image
        if (!prompts.shouldGenerate && !canBypassItemValidation) {
            if (currentRoomType === 'empty' || (currentRoomType === 'furnished' && furnishedOption === 'add-new')) {
                showItemsSelectionError();
            }
            design.loading = false;
            updateResultsFengShuiButtonState();
            return;
        }

        // Retry the run that failed: the text in the refine box if there is
        // some (usually the same instruction that just failed), otherwise the
        // failed run's own prompt — never the two glued together, which sent
        // the same instruction twice.
        const retryPrompt = retryRefinementText
            ? retryRefinementText
            : (design.prompt || prompts.positivePrompt);
        const retryIsInstructionEdit = !!retryRefinementText
            || design.route === 'refinement' || design.route === 'quick-edit';

        // Chain off the user-selected history entry (defaults to the latest
        // generation, falls back to the original upload).
        // A region edit retries on the image its mask was painted on.
        const retrySourceImage = design.region ? design.region.source : getBaseImageForNextGeneration();

        let imageUrl;
        let usedFallback = false;
        let modelUsed = null;
        let savedDesignId = null;

        // A typed refinement is an instruction edit → use Nano Banana so the
        // text is honored (proplabs has no free-form prompt). With no text we
        // still check whether the original request carries item picks or a
        // style the enum can't express, so a retry doesn't quietly produce a
        // worse result than the run it is replacing.
        const retryRouteReason = retryRefinementText
            ? 'refinement'
            : freeRouteAwayFromProplabs({
                styleObj,
                itemCount: selectedRoomItems.size,
                refinementText: '',
                addToFurnished: isAddToFurnishedRun(),
            });
        // Retry on the model the failed run used. A typed instruction, a
        // region edit or an earlier instruction edit is free text that only
        // Nano Banana can follow; a staging run re-checks its route.
        const retryNanoPrompt = retryRefinementText
            ? retryPrompt
            : (design.nanoPrompt || (retryRouteReason ? retryPrompt : null));

        // Retry a region edit as a region edit, not as a whole-room one.
        const { input: retryInput, edit: retryEdit } =
            await regionModelInput({ ...design, sourceImage: retrySourceImage }, retryNanoPrompt || '');

        if (retryNanoPrompt) {
            const nanoResult = await generateQuickEditWithNanoBanana(retryEdit?.image || retryInput, retryNanoPrompt, {
                skipSave: !!design.region,
                regionPrompt: retryEdit?.prompt,
            });
            imageUrl = nanoResult.imageUrl;
            savedDesignId = nanoResult.savedDesignId;
            modelUsed = 'nano-banana';
        } else {
            let imageUrls = await generateImageWithControlNet(
                retryInput,
                retryPrompt,
                design.negativePrompt || prompts.negativePrompt,
                { skipSave: !!design.region }
            );
            if (Array.isArray(imageUrls)) {
                imageUrl = imageUrls[0];
                usedFallback = !!imageUrls.usedFallback;
                modelUsed = imageUrls.modelUsed || null;
                savedDesignId = imageUrls.savedDesignId || null;
            } else if (typeof imageUrls === 'string') {
                imageUrl = imageUrls;
            } else {
                imageUrl = '';
            }
        }

        imageUrl = await applyRegion(design, imageUrl);

        design.imageUrl = imageUrl;
        design.loading = false;
        design.needsRetry = false;
        design.isFallback = false;
        design.modelUsed = modelUsed;
        design.sourceImage = retrySourceImage;
        design.prompt = retryPrompt;
        design.nanoPrompt = retryNanoPrompt;
        if (retryRefinementText) design.route = 'refinement';
        design.negativePrompt = prompts.negativePrompt;

        // Remember this image for subsequent regenerations
        if (imageUrl) {
            lastGeneratedImageUrl = imageUrl;
            await onGenerationSuccess(imageUrl, {
                prompt: retryPrompt,
                model: modelUsed,
                sourceType: retryIsInstructionEdit ? 'quick-edit' : 'room-design',
                metadata: { roomType: currentRoomType, ...shopMetadata() },
                savedDesignId,
            });
        }

        if (imageUrl) suggestPremiumForEmptyRoom(design);
        console.log('Retry successful');

        // Retry runs the free chain — never counts against the quota.

    } catch (error) {
        console.error('Retry failed:', error);
        trackGenerationFailed('retry', error);
        // Token is NOT deducted on failed retry
        design.imageUrl = '';
        design.loading = false;
        design.needsRetry = true;
        design.isFallback = false;
        design.errorMessage = error.code === 'MODEL_FAILED'
            ? DEFAULT_MODEL_FAILED_USER_MESSAGE
            : error.message;
        // Make sure the source/prompt are persisted so the user can fall
        // back to the free backup or premium model from here.
        design.sourceImage = design.sourceImage || getBaseImageForNextGeneration();

        updateDesignCard(design, 0);

        if (error.code === 'MODEL_FAILED') {
            await offerFallbackChoice(0, design);
        }
        return;
    }

    // Update the card
    updateDesignCard(design, 0);
}

function updateDesignCard(cardData, index) {
    // Find the card by data-design-id
    const card = designCarousel.querySelector(`[data-design-id="design-${index}"]`);
    console.log(`Updating card ${index}, found card: ${!!card}`);
    if (!card) return;
    updateResultsFengShuiButtonState();
    // Hide the in-progress status banner now that generation is done.
    const statusBanner = card.querySelector('.model-status');
    if (statusBanner) statusBanner.classList.add('hidden');
    // Apply the new image + reveal/checkbox/state UI.
    const applyImageUpdate = () => {
        // Check if we need to show retry button instead of image
        if (cardData.needsRetry) {
            showRetryButton(card, cardData, index);
            return;
        }

        const img = card.querySelector('.generated-image');
        if (img) {
            img.onload = () => {
                console.log(`Image ${index} loaded successfully`);
                img.style.opacity = 1;
                img.style.display = 'block';
                img.style.zIndex = 3;

                const revealContainer = card.querySelector('.image-reveal-container');
                if (revealContainer) {
                    revealContainer.classList.remove('reveal-loading');
                }

                if (backToOptionsBtn) {
                    backToOptionsBtn.classList.remove('hidden');
                }

                setupRevealCheckbox(card, index);
            };
            img.onerror = () => {
                console.error(`Image ${index} failed to load: ${cardData.imageUrl}`);
                const revealContainer = card.querySelector('.image-reveal-container');
                if (revealContainer) {
                    revealContainer.classList.remove('reveal-loading');
                }
            };
            img.src = cardData.imageUrl;
            img.classList.add('fade-in');
            img.style.opacity = 1;
            img.style.zIndex = 3;


            setTimeout(() => {
                img.style.opacity = 1;
                img.style.display = 'block';
                img.style.zIndex = 3;

                const revealContainer = card.querySelector('.image-reveal-container');
                if (revealContainer) {
                    revealContainer.classList.remove('reveal-loading');
                }

                console.log(`Image ${index} should be visible now. Opacity: ${img.style.opacity}, Display: ${img.style.display}`);
                setupRevealCheckbox(card, index);
            }, 100);
        }

        const disclaimer = card.querySelector('.design-disclaimer');
        if (cardData.isFallback && disclaimer) {
            disclaimer.innerHTML = `<p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>`;
            disclaimer.classList.add('error');
        }
        const desc = card.querySelector('.design-description');
        if (desc) desc.textContent = cardData.description;
        const btn = card.querySelector('.compare-btn');
        if (btn) {
            if (cardData.isFallback) {
                btn.disabled = true;
                btn.style.opacity = '0.5';
                btn.style.cursor = 'not-allowed';
                btn.querySelector('span').textContent = "Compare N/A";
            } else {
                btn.disabled = false;
                btn.style.opacity = '';
                btn.style.cursor = '';
                btn.querySelector('span').textContent = "Compare with Original";
            }
        }
    };

    // Remove the loading spinner if present (first generation only) and
    // then wire up the new image.
    const loader = card.querySelector('.image-loader');
    if (loader) loader.remove();
    applyImageUpdate();
}

// ── Default-model preference ───────────────────────────────────────────────
// Stored per-device in localStorage. Values: 'free' (proplabs) or 'premium'
// (OpenAI gpt-image-1). Free is the conservative default for new users.
const DEFAULT_MODEL_PREF_KEY = 'decorait.defaultModel';

function getDefaultModelPref() {
    try {
        return localStorage.getItem(DEFAULT_MODEL_PREF_KEY) === 'premium' ? 'premium' : 'free';
    } catch (_) {
        return 'free';
    }
}

function setDefaultModelPref(value) {
    try {
        localStorage.setItem(DEFAULT_MODEL_PREF_KEY, value === 'premium' ? 'premium' : 'free');
    } catch (_) { /* ignore quota / privacy-mode errors */ }
}

function getEffectiveDefaultModelPref() {
    if (!hasPremiumGenerationsAvailable()) return 'free';
    return getDefaultModelPref();
}

// Keep all default-model toggles (wizard step 4 + results page refinement
// area) in sync with the persisted preference. A change on either updates
// localStorage AND mirrors the new state on the other.
const defaultModelToggles = [defaultModelToggle, defaultModelToggleResults].filter(Boolean);
function syncDefaultModelToggles() {
    const canUsePremium = hasPremiumGenerationsAvailable();
    const preferPremium = getDefaultModelPref() === 'premium';
    const checked = canUsePremium && preferPremium;

    const toggles = [...defaultModelToggles];
    if (fengShuiApplyPremiumToggle) toggles.push(fengShuiApplyPremiumToggle);
    if (quickEditPremiumToggle) toggles.push(quickEditPremiumToggle);

    toggles.forEach((el) => {
        el.checked = checked;
        el.disabled = !canUsePremium;
        el.closest('.model-pref-toggle')?.classList.toggle('model-pref-disabled', !canUsePremium);
        const row = el.closest('.model-pref-row');
        if (!row) return;
        // Always show the row — locked users see it with an upsell nudge.
        row.classList.remove('hidden');
        // Rebuild the upsell message on every sync (avoids stale event listeners).
        row.querySelector('.model-pref-upsell')?.remove();
        if (!canUsePremium) {
            const upsell = document.createElement('p');
            upsell.className = 'model-pref-upsell';
            if (!currentUser) {
                upsell.innerHTML =
                    '<button type="button" class="model-pref-upsell-btn">Sign in</button>' +
                    ' and purchase tokens or a monthly subscription to use the premium model.';
                upsell.querySelector('.model-pref-upsell-btn').addEventListener('click', () => showAuthModal('login'));
            } else {
                upsell.innerHTML = userHasSubscription
                    ? 'This month\'s premium designs are used up. <button type="button" class="model-pref-upsell-btn">Keep going with tokens</button>'
                    : 'No premium designs left. <button type="button" class="model-pref-upsell-btn">See prices</button>';
                upsell.querySelector('.model-pref-upsell-btn').addEventListener('click', () => openUpgrade(premiumGate()));
            }
            row.appendChild(upsell);
        }
    });
}
syncDefaultModelToggles();
defaultModelToggles.forEach((el) => {
    el.addEventListener('change', () => {
        if (el.checked && !hasPremiumGenerationsAvailable()) {
            el.checked = false;
            openUpgrade(premiumGate());
            syncDefaultModelToggles();
            return;
        }
        setDefaultModelPref(el.checked ? 'premium' : 'free');
        syncDefaultModelToggles();
    });
});

// Normalize any image reference (data URI, http(s) URL, or raw base64) into
// a data: URI. Replicate output is a regular http(s) URL, so when the user
// regenerates from a previous result we have to fetch it before we can
// hand it to gpt-image-1 (which only takes inline image data).
async function toDataUri(source) {
    if (!source) return source;
    if (source.startsWith('data:')) return source;
    if (/^https?:\/\//i.test(source)) {
        const resp = await fetch(source);
        if (!resp.ok) {
            throw new Error(`Failed to fetch source image (${resp.status})`);
        }
        const blob = await resp.blob();
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error || new Error('FileReader failed'));
            reader.readAsDataURL(blob);
        });
    }
    // Assume raw base64 (no prefix) — default to jpeg.
    return `data:image/jpeg;base64,${source}`;
}

// Call the server-side OpenAI image-edit endpoint (gpt-image-1). Returns
// the resulting image URL and optional savedDesignId — on a 429 the thrown
// error carries `code: 'QUOTA_EXCEEDED'` so the caller can show the right
// messaging. The endpoint reserves a generation slot, so a successful call
// counts against the user's monthly quota.
async function callPremiumImageEdit(sourceImage, prompt, saveOptions = {}) {
    const imageInput = await toDataUri(sourceImage);
    const outputSize = await pickGptImageSize(imageInput);
    const sourceType = saveOptions.sourceType || 'room-design';
    const skipPromptFraming = sourceType === 'quick-edit' || sourceType === 'feng-shui';
    const skipSave = !!saveOptions.skipSave;
    // A "change this" region run brings its own prompt wrapper (explaining
    // the marker, or naming the target to remove), which also asks for the
    // same framing so the composite lines up.
    const apiPrompt = saveOptions.regionPrompt
        ? saveOptions.regionPrompt(prompt)
        : skipPromptFraming
        ? prompt
        : `${prompt} Keep the exact same camera framing, field of view, zoom level, and composition as the input image — do not crop, zoom in, or recompose. The output must show the entire original scene with no parts of the room cut off.`;

    // gpt-image-1 high-quality edits take 30–90s — never retry, each
    // retry would be a duplicate billable call.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 180000);
    let resp;
    try {
        resp = await fetch(OPENAI_IMAGE_EDIT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(currentSession ? { 'Authorization': `Bearer ${currentSession.access_token}` } : {})
            },
            body: JSON.stringify({
                imageBase64: imageInput,
                ...(skipSave ? { skipSave: true } : {}),
                prompt: apiPrompt,
                savePrompt: prompt,
                size: outputSize,
                quality: 'high',
                sourceType,
                metadata: saveOptions.metadata || {},
            }),
            signal: controller.signal
        });
    } finally {
        clearTimeout(timeout);
    }

    if (resp.status === 429) {
        const data = await resp.json().catch(() => ({}));
        const err = new Error(data.error || 'Monthly generation limit reached');
        err.code = 'QUOTA_EXCEEDED';
        err.quota = data;
        throw err;
    }
    if (!resp.ok) {
        const rawText = await resp.text().catch(() => '');
        let parsed = null;
        try { parsed = JSON.parse(rawText); } catch (_) {}
        const err = new Error(`Premium model failed: ${(parsed && parsed.error) || resp.status}`);
        err.code = 'PREMIUM_FAILED';
        err.detail = (parsed && parsed.error) || resp.statusText;
        throw err;
    }
    const data = await resp.json();
    if (!data.imageUrls || !data.imageUrls.length) {
        const err = new Error('Premium model returned no images.');
        err.code = 'PREMIUM_FAILED';
        err.detail = 'no images returned';
        throw err;
    }
    return {
        imageUrl: data.imageUrls[0],
        savedDesignId: data.savedDesignId || null,
    };
}

// After the default model fails, ask the user how to proceed:
//   1) Try our free backup model (SD 3.5)
//   2) Try the premium model (counts as one generation)
//   3) Cancel — leave the failure card with its retry button
// Implemented as two chained confirms so we can reuse the existing modal.
async function offerFallbackChoice(designIndex, design) {
    const tryFree = await showConfirmDialog(
        DEFAULT_MODEL_FAILED_USER_MESSAGE,
        'Default model failed',
        'Try free backup',
        'No, try something else'
    );

    if (tryFree) {
        // 'img2img' is the SD 3.5 backup — different engine from the
        // proplabs default that just failed.
        await runFallbackOnDesign(designIndex, design, 'img2img');
        return;
    }

    // Only offer premium if the user actually has a generation slot left.
    if (!hasTokensAvailable()) return;

    const tryPremium = await showConfirmDialog(
        `Would you like to try our premium image model instead?\n\n` +
        `This counts as one image generation against your monthly limit.`,
        'Try premium model?',
        'Use premium model',
        'Cancel'
    );

    if (tryPremium) {
        await regenerateWithPremiumModel(designIndex);
    }
}

// Insert the loading spinner into a card's image container if it's not
// already present.
function ensureLoadingSpinner(card) {
    const imageContainer = card?.querySelector('.design-image-container');
    if (!imageContainer || imageContainer.querySelector('.image-loader')) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = waitStateMarkup();
    imageContainer.insertBefore(wrap.firstElementChild, imageContainer.firstChild);
}

// Run a free Replicate model on an existing design. The request is flagged
// as a fallback so the server skips quota tracking. `modelType` selects
// the engine — 'proplabs-staging' (the default free model) or 'img2img'
// (the SD 3.5 backup).
async function runFallbackOnDesign(designIndex, design, modelType = 'img2img') {
    if (!design || !design.sourceImage || !design.prompt) {
        console.warn('Cannot run free model — design missing inputs', design);
        return;
    }

    const card = designCarousel.querySelector(`[data-design-id="${design.id}"]`);
    if (card) {
        const revealContainer = card.querySelector('.image-reveal-container');
        if (revealContainer) {
            if (!revealContainer.querySelector('.generated-image')) {
                revealContainer.innerHTML = `
                    <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image" src="" alt="${design.title}" style="opacity:0; z-index: 3;">
                `;
            }
            revealContainer.classList.add('reveal-loading');
        }
        ensureLoadingSpinner(card);
        const disclaimer = card.querySelector('.design-disclaimer');
        if (disclaimer) {
            disclaimer.innerHTML = '';
            disclaimer.classList.remove('error');
            disclaimer.style.display = 'none';
        }
        const statusBanner = card.querySelector('.model-status');
        if (statusBanner) {
            statusBanner.textContent = 'Running our free model — this won\'t count against your limits.';
            statusBanner.classList.remove('hidden');
        }
        scrollToDesignLoader(card);
    }
    design.needsRetry = false;
    design.errorMessage = '';
    design.loading = true;
    updateResultsFengShuiButtonState();

    try {
        // A failed region edit falls back as a region edit.
        const { input } = await regionModelInput(design);
        const imageUrls = await generateImageWithControlNet(
            input,
            design.prompt,
            design.negativePrompt || '',
            { modelType, forceFallback: true, skipSave: !!design.region }
        );

        let imageUrl = '';
        let modelUsed = null;
        let savedDesignId = null;
        if (Array.isArray(imageUrls)) {
            imageUrl = imageUrls[0];
            modelUsed = imageUrls.modelUsed || null;
            savedDesignId = imageUrls.savedDesignId || null;
        } else if (typeof imageUrls === 'string') {
            imageUrl = imageUrls;
        }
        imageUrl = await applyRegion(design, imageUrl);

        design.imageUrl = imageUrl;
        design.loading = false;
        design.modelUsed = modelUsed;

        if (imageUrl) {
            lastGeneratedImageUrl = imageUrl;
            await onGenerationSuccess(imageUrl, {
                prompt: design.prompt,
                model: modelUsed,
                sourceType: 'room-design',
                savedDesignId,
            });
        }
    } catch (error) {
        console.error('Free model failed:', error);
        design.loading = false;
        design.needsRetry = true;
        design.errorMessage = `The free model also failed: ${error.detail || error.message || 'unknown error'}.`;
    }

    updateDesignCard(design, designIndex);

    // If the free model also failed, offer the premium upgrade as a last
    // resort (only if the user has a generation slot left).
    if (design.needsRetry && hasTokensAvailable()) {
        const tryPremium = await showConfirmDialog(
            'Our free model also failed. Would you like to try our premium model?\n\n' +
            'This counts as one image generation against your monthly limit.',
            'Free model also failed',
            'Use premium model',
            'Cancel'
        );
        if (tryPremium) {
            await regenerateWithPremiumModel(designIndex);
        }
    }
}

// Regenerate a design using the premium OpenAI gpt-image-1 model. This is
// the user's upgrade path from the default proplabs result — it counts as
// one image generation against the user's monthly limit / token balance.
async function regenerateWithPremiumModel(designIndex) {
    const design = generatedDesigns?.[designIndex];
    if (!design || !design.sourceImage || !design.prompt) {
        console.warn('Cannot regenerate — design missing source image or prompt', design);
        return;
    }

    // Check token availability up front — the premium run consumes a slot.
    if (!hasTokensAvailable()) return;
    trackGenerationStarted('premium-upgrade', 'premium');

    const card = designCarousel.querySelector(`[data-design-id="${design.id}"]`);
    if (card) {
        const revealContainer = card.querySelector('.image-reveal-container');
        if (revealContainer) {
            // If the chain failed earlier, showRetryButton wiped this
            // container of its <img> elements. Rebuild them so the
            // post-success render in updateDesignCard has something to
            // assign the new URL to.
            if (!revealContainer.querySelector('.generated-image')) {
                revealContainer.innerHTML = `
                    <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image" src="" alt="${design.title}" style="opacity:0; z-index: 3;">
                `;
            }
            revealContainer.classList.add('reveal-loading');
        }
        ensureLoadingSpinner(card);
        // Clear any error disclaimer left over from the prior failure.
        const disclaimer = card.querySelector('.design-disclaimer');
        if (disclaimer) {
            disclaimer.innerHTML = '';
            disclaimer.classList.remove('error');
            disclaimer.style.display = 'none';
        }
        const generatedImg = card.querySelector('.generated-image');
        if (generatedImg) {
            generatedImg.style.opacity = 0;
            generatedImg.classList.remove('fade-in');
        }
        const statusBanner = card.querySelector('.model-status');
        if (statusBanner) {
            statusBanner.textContent = 'Regenerating with premium model — this typically takes 30–90 seconds.';
            statusBanner.classList.remove('hidden');
        }
        scrollToDesignLoader(card);
    }
    // Clear failure flags from any earlier attempt so updateDesignCard runs
    // the normal success-render path.
    design.needsRetry = false;
    design.errorMessage = '';
    design.loading = true;
    updateResultsFengShuiButtonState();

    try {
        // Upgrading a region edit keeps it a region edit.
        const { input, edit } = await regionModelInput(design, design.prompt);
        const premiumResult = await callPremiumImageEdit(edit?.image || input, design.prompt, {
            sourceType: 'room-design',
            skipSave: !!design.region,
            regionPrompt: edit?.prompt,
        });
        const finalUrl = await applyRegion(design, premiumResult.imageUrl);
        design.imageUrl = finalUrl;
        design.loading = false;
        design.modelUsed = 'openai';

        if (finalUrl) {
            lastGeneratedImageUrl = finalUrl;
            await onGenerationSuccess(finalUrl, {
                prompt: design.prompt,
                model: 'openai',
                sourceType: 'room-design',
                savedDesignId: premiumResult.savedDesignId,
            });
        }

        // Premium run consumed a generation slot — refresh the badge.
        await useTokenAfterSuccess();
    } catch (error) {
        console.error('Premium-model regeneration failed:', error);
        trackGenerationFailed('premium-upgrade', error);
        design.loading = false;
        design.needsRetry = true;
        if (error.code === 'QUOTA_EXCEEDED') {
            design.errorMessage = quotaErrorMessage(error);
        } else {
            design.errorMessage = error.message || 'Premium model regeneration failed. Please try again.';
        }
    }

    updateDesignCard(design, designIndex);
}

function createFallbackDesigns() {
    // Create fallback design when API calls fail
    const imagesArray = fallbackImages[currentRoomType];
    const stylesArray = designStyles[currentRoomType];
    const descriptionsArray = designDescriptions[currentRoomType];

    return [{
        id: 'design-0',
        title: stylesArray[0],
        description: `${descriptionsArray[0]} (Fallback image - API unavailable/failed)`,
        imageUrl: imagesArray[0],
        originalImageUrl: currentUploadedImage,
        prompt: aiPrompts[currentRoomType],
        isFallback: true
    }];
}

function displayDesigns(designs) {
    designCarousel.innerHTML = '';

    designs.forEach((design, index) => {
        const designCard = document.createElement('div');
        designCard.classList.add('design-card');
        designCard.setAttribute('data-design-id', design.id);

        let disclaimer = '';
        if (design.isFallback) {
            disclaimer = `
                <div class="design-disclaimer error">
                    <p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>
                </div>
            `;
        } else {
            disclaimer = `<div class="design-disclaimer" style="display:none"></div>`;
        }


        designCard.innerHTML = `
            <div class="design-image-container">
                ${design.loading ? waitStateMarkup() : ''}
                <div class="image-reveal-container${design.loading ? ' reveal-loading' : ''}">
                    <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image${design.loading ? '' : ' fade-in'}" src="${design.loading ? '' : design.imageUrl}" alt="${design.title}" style="opacity:${design.loading ? 0 : 1}; z-index: 3;">
                </div>
                ${disclaimer}
            </div>
            <div class="model-status${design.loading ? '' : ' hidden'}" aria-live="polite">Generating your design — this can take up to a minute for premium model generations.</div>
            <div class="design-info">
                <h3 class="design-title">${design.title}</h3>
                <p class="design-description">${design.description}</p>
            </div>
        `;

        designCarousel.appendChild(designCard);
    });

    feather.replace();

    // Add reveal checkbox functionality to the card
    const card = designCarousel.querySelector('.design-card');
    if (card) {
        console.log('Setting up reveal checkbox for design card');
        setupRevealCheckbox(card, 0);
    }

    // The "Regenerate with premium model" buttons are bound lazily inside
    // updateDesignCard (which sets `dataset.bound` to prevent duplicates).
    // Don't bind here — doing so would double-fire the handler on click,
    // triggering two billable premium generations per click.
}

// ===== DESIGN HISTORY =====

/** Reset history when starting a fresh upload. */
function resetDesignHistory() {
    designHistory = [];
    selectedHistoryId = null;
    renderDesignHistory();
}

/** Seed history with the original upload (idempotent — won't duplicate). */
function seedDesignHistoryWithOriginal() {
    if (!currentUploadedImage) return;
    const hasOriginal = designHistory.some(h => h.isOriginal);
    if (hasOriginal) return;
    designHistory.unshift({
        id: 'history-original',
        imageUrl: currentUploadedImage,
        label: 'Original',
        isOriginal: true,
    });
}

/**
 * Push a successful generation onto the history and select it as latest.
 * `meta` ({ prompt, model, sourceType, metadata }) travels with the entry so a
 * restored session can rebuild the result card.
 */
function pushDesignHistory(imageUrl, meta = null) {
    if (!imageUrl) return;
    // Skip if the same URL is already the most recent entry (e.g. re-render).
    const last = designHistory[designHistory.length - 1];
    if (last && last.imageUrl === imageUrl) {
        selectedHistoryId = last.id;
        renderDesignHistory();
        return;
    }
    const generationCount = designHistory.filter(h => !h.isOriginal).length + 1;
    const entry = {
        id: `history-${Date.now()}-${generationCount}`,
        imageUrl,
        label: `v${generationCount}`,
        isOriginal: false,
        meta,
    };
    designHistory.push(entry);
    selectedHistoryId = entry.id;
    renderDesignHistory();
    persistRedesignSession();
}

// ── Redesign session persistence (see src/sessionStore.js) ───────────────────

/** Provider URL → data URL, so each generated image is fetched for storage once. */
const durableImageCache = new Map();
/** Saves run one at a time, each snapshotting state when it starts. */
let sessionPersistChain = Promise.resolve();
/** True while a stored session is being put back, so that doesn't re-save it. */
let restoringSession = false;

/**
 * Save the current photo and its generated versions to this device. Called
 * whenever either changes. Fire-and-forget: never blocks or fails the UI.
 */
function persistRedesignSession() {
    if (restoringSession) return;
    sessionPersistChain = sessionPersistChain.then(async () => {
        const original = currentUploadedImage;
        if (!original) return;
        const isRoomEmpty = isRoomActuallyEmpty;
        const entries = designHistory.filter(h => !h.isOriginal).slice(-MAX_STORED_VERSIONS);
        const versions = [];
        for (const entry of entries) {
            let durable = durableImageCache.get(entry.imageUrl);
            if (!durable) {
                durable = await toDurableImage(entry.imageUrl);
                durableImageCache.set(entry.imageUrl, durable);
            }
            versions.push({ imageUrl: durable, meta: entry.meta || null });
        }
        // Fetching images takes time — if the user started over or picked a
        // different photo meanwhile, this snapshot is no longer the session.
        if (currentUploadedImage !== original) return;
        await saveRedesignSession({ original, isRoomEmpty, versions });
    }).catch(err => console.warn('[session] persist failed:', err));
}

/**
 * On load, put back the photo and versions from the last visit on this device.
 * This is what carries a visitor's first design across the signup email
 * round-trip, a Stripe checkout return, or a plain refresh.
 */
async function restoreRedesignSession() {
    // Only when the page opened on the redesign flow — a deep link to the
    // floor plan, library or upgrade page should open that, not a result.
    if (!['home', 'design', 'result'].includes(currentRoute().name)) return;
    const saved = await loadRedesignSession();
    // The visitor may have added a photo while the store was being read.
    if (!saved || currentUploadedImage) return;

    const checks = await Promise.all((saved.versions || []).map(v => imageStillLoads(v?.imageUrl)));
    const versions = (saved.versions || []).filter((_, i) => checks[i]);
    if (currentUploadedImage) return;

    restoringSession = true;
    try {
        currentUploadedImage = saved.original;
        if (roomPreview) roomPreview.src = saved.original;
        isRoomActuallyEmpty = !!saved.isRoomEmpty;
        applyDetectedRoomType();

        track('session_restored', { versions: versions.length });
        if (!versions.length) {
            showWizard();
            return;
        }

        const latest = versions[versions.length - 1];
        await loadSavedDesignIntoResults({
            imageUrl: latest.imageUrl,
            prompt: latest.meta?.prompt || '',
            model: latest.meta?.model || null,
            sourceType: latest.meta?.sourceType || 'room-design',
            metadata: latest.meta?.metadata || {},
        });
        // loadSavedDesignIntoResults seeds the strip with one entry; put back
        // every stored version so earlier ones can still be picked.
        resetDesignHistory();
        seedDesignHistoryWithOriginal();
        for (const v of versions) {
            durableImageCache.set(v.imageUrl, v.imageUrl);
            pushDesignHistory(v.imageUrl, v.meta || null);
        }
    } catch (err) {
        console.warn('[session] restore failed:', err);
    } finally {
        restoringSession = false;
    }
}

// ── Shop this look (src/shop.js) ─────────────────────────────────────────────

/**
 * Saved with each design: the style's short name and what "Shop this look"
 * needs (the style and the items picked). Keeping it on the design means the
 * list matches the version on screen, after a refresh or from the library.
 */
function shopMetadata() {
    const styleObj = selectedDesignStyle ? interiorDesignStyles.find(s => s.id === selectedDesignStyle) : null;
    // "Keep what's there" rearranges the room; any picks left over aren't in it.
    const items = currentRoomType === 'furnished' && furnishedOption === 'keep-existing'
        ? []
        : roomItems.filter(item => selectedRoomItems.has(item.id)).map(item => item.id);
    return { styleName: styleObj?.name || null, shop: { style: styleObj?.name || null, items } };
}

/** The design whose list was last reported as shown, so it's counted once. */
let shopShownFor = null;

function renderShopLook() {
    const section = document.getElementById('shop-look');
    const list = document.getElementById('shop-look-list');
    if (!section || !list) return;
    const entry = getSelectedHistoryEntry();
    const shop = entry && !entry.isOriginal ? entry.meta?.metadata?.shop : null;
    const config = appConfig?.shop;
    const shopBtn = document.getElementById('shop-look-btn');
    const hide = () => {
        closeShopSheet({ restoreFocus: false });
        section.hidden = true;
        if (shopBtn) shopBtn.hidden = true;
    };
    if (!shop || config?.enabled === false) return hide();
    const built = buildShopList(shop, config);
    if (!built.rows.length) return hide();
    document.getElementById('shop-look-hint').textContent = shopHint(built);
    list.innerHTML = '';
    for (const row of built.rows) {
        const li = document.createElement('li');
        li.className = 'shop-look-row';
        const label = document.createElement('span');
        label.className = 'shop-look-item';
        label.textContent = row.label;
        const links = document.createElement('span');
        links.className = 'shop-look-links';
        for (const link of row.links) {
            const a = document.createElement('a');
            a.className = 'shop-look-link';
            a.href = link.url;
            a.target = '_blank';
            // sponsored: these may be affiliate links. noopener: the store
            // can't reach back into this tab.
            a.rel = 'sponsored noopener';
            a.textContent = link.name;
            a.setAttribute('aria-label', `Search ${link.name} for ${row.query} (opens in a new tab)`);
            a.dataset.retailer = link.retailer;
            a.dataset.item = row.id;
            links.appendChild(a);
        }
        li.append(label, links);
        list.appendChild(li);
    }
    document.getElementById('shop-look-disclosure').hidden = !hasAffiliateLinks(config);
    section.hidden = false;
    if (shopBtn) shopBtn.hidden = false;
    if (shopShownFor !== entry.id) {
        shopShownFor = entry.id;
        track('shop_shown', { from_picks: built.fromPicks, style: built.style || 'none', items: built.rows.length });
    }
}

/** Phones and tablets: the list is a sheet over the one-screen results view. */
function shopSheetIsOpen() {
    return !!document.getElementById('shop-look')?.classList.contains('is-open');
}

function openShopSheet() {
    const section = document.getElementById('shop-look');
    if (!section || section.hidden) return;
    section.classList.add('is-open');
    section.setAttribute('role', 'dialog');
    section.setAttribute('aria-modal', 'true');
    document.getElementById('shop-look-backdrop').hidden = false;
    document.getElementById('shop-look-btn')?.setAttribute('aria-expanded', 'true');
    document.getElementById('shop-look-close')?.focus({ preventScroll: true });
    track('shop_opened', {});
}

function closeShopSheet({ restoreFocus = true } = {}) {
    const section = document.getElementById('shop-look');
    if (!section?.classList.contains('is-open')) return;
    section.classList.remove('is-open');
    section.removeAttribute('role');
    section.removeAttribute('aria-modal');
    document.getElementById('shop-look-backdrop').hidden = true;
    const btn = document.getElementById('shop-look-btn');
    btn?.setAttribute('aria-expanded', 'false');
    if (restoreFocus && btn && !btn.hidden) btn.focus({ preventScroll: true });
}

function initShopLook() {
    document.getElementById('shop-look-btn')?.addEventListener('click', () => {
        if (shopSheetIsOpen()) closeShopSheet();
        else openShopSheet();
    });
    document.getElementById('shop-look-close')?.addEventListener('click', () => closeShopSheet());
    document.getElementById('shop-look-backdrop')?.addEventListener('click', () => closeShopSheet());
    document.addEventListener('keydown', (e) => {
        if (!shopSheetIsOpen()) return;
        if (e.key === 'Escape') closeShopSheet();
        // A sheet on phones and tablets: Tab stays in it until it's closed.
        else trapFocus(e, document.getElementById('shop-look'));
    });
    document.getElementById('shop-look-list')?.addEventListener('click', (e) => {
        const a = e.target.closest?.('a.shop-look-link');
        if (!a) return;
        const style = getSelectedHistoryEntry()?.meta?.metadata?.shop?.style;
        track('shop_click', {
            retailer: a.dataset.retailer,
            item: a.dataset.item,
            style: style || 'none',
            affiliate: hasAffiliateLinks(appConfig?.shop),
        });
    });
}

/** Returns the user-selected history entry, or the latest if none picked. */
function getSelectedHistoryEntry() {
    if (!designHistory.length) return null;
    if (selectedHistoryId) {
        const found = designHistory.find(h => h.id === selectedHistoryId);
        if (found) return found;
    }
    return designHistory[designHistory.length - 1];
}

/** Source image for the NEXT generation: user pick > latest > original upload. */
function getBaseImageForNextGeneration() {
    const sel = getSelectedHistoryEntry();
    return sel?.imageUrl || lastGeneratedImageUrl || currentUploadedImage;
}

/** Render the history strip; hide it until there's at least one generation. */
function renderDesignHistory() {
    const container = document.getElementById('design-history');
    const strip = document.getElementById('design-history-strip');
    if (!container || !strip) return;

    // Hide until the user has at least one generated design (original + 1 gen = 2 entries).
    if (designHistory.length < 2) {
        container.classList.add('hidden');
        strip.innerHTML = '';
        updateRefinementBase();
        renderShopLook();
        return;
    }

    container.classList.remove('hidden');
    const activeId = getSelectedHistoryEntry()?.id;

    strip.innerHTML = designHistory.map(entry => `
        <button type="button"
                class="design-history-thumb${entry.id === activeId ? ' active' : ''}"
                data-history-id="${entry.id}"
                role="listitem"
                aria-pressed="${entry.id === activeId}"
                aria-label="${entry.isOriginal ? 'Original photo' : 'Version ' + entry.label.replace('v', '')}">
            <img src="${entry.imageUrl}" alt="">
            <span class="design-history-thumb-label">${entry.label}</span>
        </button>
    `).join('');
    updateRefinementBase();
    renderShopLook();

    strip.querySelectorAll('.design-history-thumb').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-history-id');
            selectHistoryEntry(id);
        });
    });
}

/** User clicked a thumbnail: swap the visible design + remember as next base. */
function selectHistoryEntry(id) {
    const entry = designHistory.find(h => h.id === id);
    if (!entry) return;
    selectedHistoryId = id;
    renderShopLook();

    // Swap the currently displayed generated image to this entry.
    const generatedImg = document.querySelector('.design-card .design-image.generated-image');
    if (generatedImg) {
        generatedImg.src = entry.imageUrl;
    }
    // Update model-status copy to reflect what's shown.
    const modelStatus = document.querySelector('.design-card .model-status');
    if (modelStatus) {
        modelStatus.classList.add('hidden');
    }

    renderDesignHistory();
    updateResultsFengShuiButtonState();
}

function hideHintArrows(card) {
    const hintArrows = card.querySelector('.slider-hint-arrows');
    if (hintArrows) {
        hintArrows.classList.add('hidden');
        // Remove the arrows from DOM after animation
        setTimeout(() => {
            if (hintArrows.parentNode) {
                hintArrows.parentNode.removeChild(hintArrows);
            }
        }, 300);
    }
}

/**
 * Prepare a design card's two images for the compare divider and attach it.
 * (Formerly wired a "Show Original Image" checkbox — replaced by direct
 * manipulation. Name kept because several render paths still call it.)
 */
function setupRevealCheckbox(card, index) {
    const revealContainer = card?.querySelector('.image-reveal-container');
    const generatedImage = card?.querySelector('.generated-image');
    if (!revealContainer || !generatedImage) return;

    // Both images are stacked to fill the frame so the divider can clip the
    // generated layer over the original. The stylesheet does the stacking
    // (.image-reveal-container .original-image / .generated-image). Don't set
    // position or size inline here: inline styles beat the "Edit a region"
    // rules that put the image back in flow, so the box collapsed to zero
    // height and the image vanished.
    const originalImage = card.querySelector('.original-image');
    [originalImage, generatedImage].forEach((img, i) => {
        if (!img) return;
        img.style.display = 'block';
        img.style.opacity = 1;
        img.style.zIndex = i === 0 ? 2 : 3;
    });
    generatedImage.classList.remove('fade-in');

    enhanceCompare(revealContainer);
}

function goBackToPreview() {
    resultsSection.classList.add('hidden');
    const uploadSection = document.getElementById('upload-section');
    if (uploadSection) uploadSection.classList.remove('hidden');
    // The drop zone must stay hidden — the configure view owns this screen.
    if (uploadContainer) uploadContainer.classList.add('hidden');
    if (wizardContainer) wizardContainer.classList.remove('hidden');
    if (wizardProgress) wizardProgress.classList.remove('hidden');
    syncUrl('design');
    goToWizardStep(4);

    // Clear refinement text so it doesn't bleed into the next generation
    if (refinementInput) refinementInput.value = '';
    updateRefinementState();
}

function regenerateDesigns() {
    // Simply call the generate designs function again
    generateDesigns();
}

// ── Refinement: the next step after a result ─────────────────────────────────

const refineIdeaButtons = Array.from(document.querySelectorAll('.refine-idea'));

/**
 * An idea adds its sentence to the box, or takes it back out. It never runs
 * anything: ideas are meant to be combined and reworded before applying.
 */
function toggleRefineIdea(button) {
    if (!refinementInput) return;
    const idea = button.dataset.idea || '';
    const text = refinementInput.value;
    if (text.includes(idea)) {
        refinementInput.value = text.replace(idea, '').replace(/\s{2,}/g, ' ').trim();
    } else {
        refinementInput.value = (text.trim() ? `${text.trim()} ` : '') + idea;
        track('refine_idea', { idea: button.dataset.key || 'unknown' });
    }
    // On a phone, focusing would raise the keyboard over the design they're
    // looking at; there the tap only fills the box.
    if (window.matchMedia?.('(pointer: fine)').matches) {
        refinementInput.focus();
        const end = refinementInput.value.length;
        refinementInput.setSelectionRange(end, end);
    }
    updateRefinementState();
}

/** Keep the ideas' pressed state and the button's wording in step with the box. */
function updateRefinementState() {
    const text = refinementInput?.value || '';
    for (const button of refineIdeaButtons) {
        button.setAttribute('aria-pressed', String(text.includes(button.dataset.idea || '\u0000')));
    }
    const label = regenerateBtn?.querySelector('span');
    if (label) label.textContent = text.trim() ? 'Apply change' : 'New version';
}

/**
 * When an earlier version is picked, say that the next change starts from it,
 * with a way back to the latest. Hidden while the latest is shown.
 */
function updateRefinementBase() {
    const note = document.getElementById('refinement-base');
    if (!note) return;
    const selected = getSelectedHistoryEntry();
    const latest = designHistory[designHistory.length - 1];
    const show = !!(selected && latest && selected.id !== latest.id);
    note.hidden = !show;
    if (!show) return;
    const text = note.querySelector('span');
    if (text) {
        text.textContent = selected.isOriginal
            ? 'Your next change starts again from your original photo.'
            : `Your next change builds on ${selected.label}, not the latest.`;
    }
}

function initRefinement() {
    refineIdeaButtons.forEach((button) => button.addEventListener('click', () => toggleRefineIdea(button)));
    refinementInput?.addEventListener('input', updateRefinementState);
    document.getElementById('refinement-base-latest')?.addEventListener('click', () => {
        const latest = designHistory[designHistory.length - 1];
        if (latest) selectHistoryEntry(latest.id);
    });
    updateRefinementState();
}

// ── Room photo Feng Shui analysis ───────────────────────────────────────────

function clearFengShuiCache() {
    fengShuiAnalysisCache.clear();
}

function getCachedFengShuiAnalysis(imageSource) {
    if (!imageSource) return null;
    return fengShuiAnalysisCache.get(imageSource) || null;
}

function setCachedFengShuiAnalysis(imageSource, entry) {
    if (!imageSource) return;
    fengShuiAnalysisCache.set(imageSource, entry);
}

function getFengShuiAnalysisTarget() {
    if (isDesignGenerationInProgress()) return null;

    // Prefer the history-strip selection — it drives the visible generated image on results.
    const historyEntry = getSelectedHistoryEntry();
    if (historyEntry?.imageUrl) {
        const label = historyEntry.isOriginal
            ? 'original photo'
            : (historyEntry.label || 'selected design');
        return { src: historyEntry.imageUrl, label };
    }

    const design = generatedDesigns?.[0];
    if (design?.imageUrl && !design.loading && !design.needsRetry) {
        return { src: design.imageUrl, label: 'generated design' };
    }
    if (currentUploadedImage) {
        return { src: currentUploadedImage, label: 'uploaded photo' };
    }
    return null;
}

function isDesignGenerationInProgress() {
    return generatedDesigns.some((d) => d.loading);
}

function updateResultsFengShuiButtonState() {
    const generating = isDesignGenerationInProgress();

    if (wizardFengShuiBtn) {
        wizardFengShuiBtn.disabled = generating;
        wizardFengShuiBtn.title = generating ? 'Wait for image generation to finish' : '';
    }

    if (regenerateBtn) {
        regenerateBtn.disabled = generating;
        regenerateBtn.title = generating ? 'Wait for image generation to finish' : '';
    }

    // So do the region menu's Remove and Apply.
    if (maskEditor) updateRegionMenu();

    if (!resultsFengShuiBtn) return;
    const target = getFengShuiAnalysisTarget();
    const canAnalyze = !generating && !!target;
    resultsFengShuiBtn.disabled = !canAnalyze;
    if (generating) {
        resultsFengShuiBtn.title = 'Wait for image generation to finish';
    } else if (target) {
        resultsFengShuiBtn.title = `Analyze feng shui for your ${target.label.toLowerCase()}`;
    } else {
        resultsFengShuiBtn.title = 'Generate a design first to analyze feng shui';
    }
}

function showRoomFengShuiModal(label) {
    if (!roomFengShuiModal) return;
    if (roomFengShuiTitle) {
        roomFengShuiTitle.textContent = label ? `Feng Shui — ${label}` : 'Feng Shui Analysis';
    }
    roomFengShuiModal.classList.add('show');
    roomFengShuiModal.style.opacity = '1';
    roomFengShuiModal.style.visibility = 'visible';
    if (typeof feather !== 'undefined') feather.replace();
}

function hideRoomFengShuiModal() {
    if (!roomFengShuiModal) return;
    roomFengShuiModal.classList.remove('show');
    roomFengShuiModal.style.opacity = '';
    roomFengShuiModal.style.visibility = '';
    if (roomFengShuiFooter) roomFengShuiFooter.classList.add('hidden');
}

function showRoomFengShuiLoading() {
    if (!roomFengShuiBody) return;
    if (roomFengShuiFooter) roomFengShuiFooter.classList.add('hidden');
    currentFengShuiContext = null;
    roomFengShuiBody.innerHTML = `
        <div class="feng-shui-loading">
            <div class="feng-shui-spinner"></div>
            <p>Analyzing your room…</p>
            <small>This usually takes 5-10 seconds.</small>
        </div>
    `;
}

function showRoomFengShuiError(message) {
    if (!roomFengShuiBody) return;
    if (roomFengShuiFooter) roomFengShuiFooter.classList.add('hidden');
    currentFengShuiContext = null;
    roomFengShuiBody.innerHTML = `
        <div class="feng-shui-error">
            <p>${message}</p>
        </div>
    `;
}

function formatFengShuiCategory(category) {
    if (!category) return 'Recommendation';
    return category.charAt(0).toUpperCase() + category.slice(1);
}

function ensureRoomTypeFromWizard() {
    if (currentRoomType && designStyles[currentRoomType]) return;

    const emptyRadio = document.getElementById('empty-room');
    const furnishedRadio = document.getElementById('furnished-room');
    if (emptyRadio?.checked) {
        currentRoomType = 'empty';
    } else if (furnishedRadio?.checked) {
        currentRoomType = 'furnished';
    } else {
        currentRoomType = isRoomActuallyEmpty ? 'empty' : 'furnished';
    }
}

function getFengShuiNegativePrompt() {
    return 'blurry, distorted, out of frame, unrealistic shadows, text, watermark, signature, low quality, pixelated, artifacts, change walls, change windows, change floor, change ceiling, change doors, architectural changes, structural modifications, zoomed in, cropped, close-up, tighter framing, recomposed, cut off, parts of room missing, narrower field of view, different camera distance';
}

function buildFengShuiGenerationPrompt(result) {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const suggestions = (result?.suggestions || [])
        .slice()
        .sort((a, b) => (priorityOrder[a.priority] ?? 2) - (priorityOrder[b.priority] ?? 2))
        .slice(0, 5)
        .map((s) => s.description)
        .filter(Boolean);

    if (suggestions.length > 0) return suggestions.join(' ');
    return result?.summary || 'Improve overall feng shui balance and energy flow in the room.';
}

/** User-facing copy for the results card after a feng shui apply generation completes. */
function buildFengShuiAppliedDescription(result) {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const applied = (result?.suggestions || [])
        .slice()
        .sort((a, b) => (priorityOrder[a.priority] ?? 2) - (priorityOrder[b.priority] ?? 2))
        .slice(0, 3)
        .map((s) => s.description)
        .filter(Boolean);

    if (applied.length > 0) {
        return `This layout reflects your feng shui updates: ${applied.join(' ')}`;
    }

    const strengths = (result?.strengths || []).filter(Boolean);
    if (strengths.length > 0) {
        return `This layout preserves ${strengths[0].charAt(0).toLowerCase()}${strengths[0].slice(1)} while improving overall balance and energy flow.`;
    }

    const score = Number(result?.overallScore);
    if (score >= 8) {
        return 'This layout maintains strong feng shui harmony with open flow and balanced energy throughout the space.';
    }

    return 'This layout has been updated to improve feng shui balance, energy flow, and harmony in the room.';
}

function isWizardVisible() {
    return wizardContainer && !wizardContainer.classList.contains('hidden');
}

function updateFengShuiApplyFooter() {
    if (!roomFengShuiFooter) return;

    const wizardVisible = isWizardVisible();
    if (fengShuiContinueWizardBtn) {
        fengShuiContinueWizardBtn.classList.toggle('hidden', !wizardVisible);
    }

    if (fengShuiApplyPremiumToggle) {
        fengShuiApplyPremiumToggle.checked = getEffectiveDefaultModelPref() === 'premium';
    }

    roomFengShuiFooter.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

const FIVE_ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'];

const ELEMENT_META = {
    wood: {
        label: 'Wood',
        color: '#16a34a',
        bg: '#dcfce7',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 8 8 4 4 4c0 4 4 8 8 8z"/><path d="M12 12c0-4 4-8 8-8 0 4-4 8-8 8z"/></svg>',
    },
    fire: {
        label: 'Fire',
        color: '#ea580c',
        bg: '#ffedd5',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.5-1.5-3-3-5-1.5 2-3 4-3 6a6 6 0 1 0 12 0c0-2-1.5-4-3-6-1.5 2-3 3.5-3 5a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    },
    earth: {
        label: 'Earth',
        color: '#a16207',
        bg: '#fef9c3',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M5 20V10l7-6 7 6v10"/><path d="M9 20v-6h6v6"/></svg>',
    },
    metal: {
        label: 'Metal',
        color: '#64748b',
        bg: '#f1f5f9',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>',
    },
    water: {
        label: 'Water',
        color: '#2563eb',
        bg: '#dbeafe',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"/></svg>',
    },
};

const ELEMENT_LEVEL_LABELS = {
    low: 'Low',
    balanced: 'Balanced',
    strong: 'Strong',
};

function inferElementLevelFromText(text) {
    const t = String(text).toLowerCase();
    if (/\b(low|lacking|weak|missing|deficient|insufficient|absent|underrepresented)\b/.test(t)) return 'low';
    if (/\b(strong|excessive|dominant|abundant|overpowering|heavy|overrepresented)\b/.test(t)) return 'strong';
    return 'balanced';
}

function normalizeFengShuiElement(raw) {
    if (!raw) return null;
    if (typeof raw === 'string') {
        const summary = raw.trim();
        if (!summary) return null;
        const level = inferElementLevelFromText(summary);
        const score = level === 'low' ? 3 : level === 'strong' ? 9 : 6;
        return { level, score, summary, present: [], add: [] };
    }
    if (typeof raw === 'object') {
        const summary = (raw.summary || '').trim();
        const level = raw.level || (summary ? inferElementLevelFromText(summary) : 'balanced');
        let score = Number(raw.score);
        if (!Number.isFinite(score) || score < 1 || score > 10) {
            score = level === 'low' ? 3 : level === 'strong' ? 9 : 6;
        }
        return {
            level,
            score,
            summary,
            present: Array.isArray(raw.present) ? raw.present.filter(Boolean) : [],
            add: Array.isArray(raw.add) ? raw.add.filter(Boolean) : [],
        };
    }
    return null;
}

function normalizeFengShuiElements(rawElements) {
    if (!rawElements || typeof rawElements !== 'object') return {};
    const normalized = {};
    FIVE_ELEMENTS.forEach((key) => {
        const entry = normalizeFengShuiElement(rawElements[key]);
        if (entry) normalized[key] = entry;
    });
    return normalized;
}

function buildElementsBalanceSummary(elements, apiSummary) {
    if (apiSummary && String(apiSummary).trim()) return String(apiSummary).trim();

    const low = [];
    const strong = [];
    FIVE_ELEMENTS.forEach((key) => {
        const el = elements[key];
        if (!el) return;
        if (el.level === 'low') low.push(ELEMENT_META[key].label);
        if (el.level === 'strong') strong.push(ELEMENT_META[key].label);
    });

    const parts = [];
    if (low.length > 0) parts.push(`${formatElementList(low)} could use more support`);
    if (strong.length > 0) parts.push(`${formatElementList(strong)} ${strong.length === 1 ? 'is' : 'are'} well represented`);
    if (parts.length === 0) return 'The five elements appear reasonably balanced in this room.';
    return `${parts.join('; ')}.`;
}

function formatElementList(items) {
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

function renderRoomFengShuiElementsSection(result) {
    const elements = normalizeFengShuiElements(result.elements);
    if (Object.keys(elements).length === 0) return '';

    const summary = buildElementsBalanceSummary(elements, result.elementsSummary);
    let html = `
        <div class="room-feng-shui-elements">
            <h4>Five elements</h4>
            <p class="fs-elements-summary">${summary}</p>
            <div class="fs-elements-list">
    `;

    FIVE_ELEMENTS.forEach((key) => {
        const el = elements[key];
        if (!el) return;
        const meta = ELEMENT_META[key];
        const level = el.level || 'balanced';
        const levelLabel = ELEMENT_LEVEL_LABELS[level] || ELEMENT_LEVEL_LABELS.balanced;
        const meterPct = Math.max(10, Math.min(100, el.score * 10));

        html += `
            <div class="fs-element-row fs-element-row--${level}">
                <div class="fs-element-header">
                    <span class="fs-element-icon" style="background:${meta.bg};color:${meta.color}">${meta.icon}</span>
                    <span class="fs-element-name">${meta.label}</span>
                    <span class="fs-element-level fs-element-level--${level}">${levelLabel}</span>
                    <span class="fs-element-score">${el.score}/10</span>
                </div>
                <div class="fs-element-meter" aria-hidden="true">
                    <div class="fs-element-meter-fill" style="width:${meterPct}%;background:${meta.color}"></div>
                </div>
        `;

        if (el.summary) {
            html += `<p class="fs-element-summary">${el.summary}</p>`;
        }

        if (el.present.length > 0) {
            html += `
                <div class="fs-element-detail">
                    <span class="fs-element-detail-label">Present</span>
                    <span class="fs-element-detail-value">${el.present.join(', ')}</span>
                </div>
            `;
        }

        if (el.add.length > 0) {
            html += `
                <div class="fs-element-detail fs-element-detail--add">
                    <span class="fs-element-detail-label">To strengthen</span>
                    <span class="fs-element-detail-value">${el.add.join('; ')}</span>
                </div>
            `;
        }

        html += `</div>`;
    });

    html += `</div></div>`;
    return html;
}

function displayRoomFengShuiResults(result, imageDisplaySrc, label, imageSource) {
    if (!roomFengShuiBody) return;

    currentFengShuiContext = { result, imageDisplaySrc, label, imageSource };

    const score = Number(result.overallScore) || 0;
    const scoreColor = score >= 7 ? '#22c55e' : score >= 4 ? '#f59e0b' : '#ef4444';
    let html = '';

    if (imageDisplaySrc) {
        html += `<img class="room-feng-shui-photo" src="${imageDisplaySrc}" alt="${label || 'Room'}">`;
    }

    html += `
        <div class="feng-shui-score">
            <div class="score-circle" style="border-color: ${scoreColor}">
                <span class="score-number" style="color: ${scoreColor}">${score}</span>
                <span class="score-label">/ 10</span>
            </div>
            <p class="score-summary">${result.summary || 'Analysis complete.'}</p>
        </div>
    `;

    if (Array.isArray(result.strengths) && result.strengths.length > 0) {
        html += `
            <div class="room-feng-shui-strengths">
                <h4>What's working well</h4>
                <ul>${result.strengths.map((item) => `<li>${item}</li>`).join('')}</ul>
            </div>
        `;
    }

    html += renderRoomFengShuiElementsSection(result);

    if (Array.isArray(result.suggestions) && result.suggestions.length > 0) {
        html += `<div class="feng-shui-suggestions"><div class="fs-suggestions-title">Recommendations</div>`;
        result.suggestions.forEach((suggestion) => {
            const priority = suggestion.priority || 'medium';
            const priorityColor = priority === 'high' ? '#ef4444' : priority === 'medium' ? '#f59e0b' : '#22c55e';
            const name = suggestion.furnitureName || formatFengShuiCategory(suggestion.category);
            html += `
                <div class="feng-shui-suggestion">
                    <div class="suggestion-header">
                        <span class="suggestion-priority" style="background: ${priorityColor}">${priority}</span>
                        <span class="suggestion-name">${name}</span>
                    </div>
                    <p class="suggestion-principle">${suggestion.principle || ''}</p>
                    <p class="suggestion-desc">${suggestion.description || ''}</p>
                </div>
            `;
        });
        html += `</div>`;
    } else if (score >= 8) {
        html += `<p class="feng-shui-no-suggestions">Your room has good feng shui! No major changes suggested.</p>`;
    }

    roomFengShuiBody.innerHTML = html;
    updateFengShuiApplyFooter();
}

// ── Quick Edit (Option A: prompt-only simple edits) ──────────────────────────
// A lightweight path for simple changes (wall color, flooring, finishes) without
// the full design wizard. The user types a plain-language instruction; we wrap it
// with "keep everything else the same" guardrails and send it to the premium
// image-edit model, which preserves the rest of the photo.

// Nano Banana = Google's Gemini 2.5 Flash Image on Replicate — a cheap
// instruction-edit model. Runs through the existing Replicate proxy/poll;
// a bare "owner/name" slug routes to Replicate's official-model endpoint.
const NANO_BANANA_MODEL = 'google/nano-banana';

const BRIA_ERASER_MODEL = 'bria/eraser';

/**
 * "Remove this": erase the painted area with a mask-based object-removal
 * model, the way phone photo erasers work. It takes the photo and a mask
 * (white = erase) and no prompt. Returns the raw result URL; the caller
 * pastes it back through the region (applyRegion). Errors are plain, so a
 * failure offers Retry rather than the staging-model fallbacks.
 */
async function generateEraseWithBria(region) {
    const image = await toDataUri(region.source);
    const startResponse = await fetchWithRetry(REPLICATE_API_URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...(currentSession ? { 'Authorization': `Bearer ${currentSession.access_token}` } : {}),
        },
        body: JSON.stringify({
            version: BRIA_ERASER_MODEL,
            input: { image, mask: region.eraseMask },
        }),
    }, 3, 3000);

    if (startResponse.status === 401) {
        const data = await startResponse.json().catch(() => ({}));
        const err = new Error(data.error || 'Create a free account to keep designing.');
        if (data.anonExhausted) err.code = 'ANON_EXHAUSTED';
        throw err;
    }
    if (!startResponse.ok) {
        const data = await startResponse.json().catch(() => ({}));
        throw new Error(`Remove failed: ${data.error || data.detail || startResponse.status}`);
    }
    const prediction = await startResponse.json();
    if (!prediction.urls?.get) throw new Error('The eraser did not return a polling URL.');
    // Never saved server-side: the composited image is saved from here.
    const result = await pollReplicatePrediction(prediction.urls.get, null);
    const raw = result.imageUrls;
    const imageUrl = Array.isArray(raw) ? raw[0] : raw;
    if (!imageUrl) throw new Error('The eraser returned no image.');
    return imageUrl;
}

/** Run a free Quick Edit through Nano Banana. Returns the result image URL. */
async function generateQuickEditWithNanoBanana(sourceImage, prompt, { skipSave = false, regionPrompt: wrapRegion = null } = {}) {
    const imageInput = await toDataUri(sourceImage);
    // A region run wraps the instruction so the model can find the target
    // (see regionModelInput).
    const sentPrompt = wrapRegion ? wrapRegion(prompt) : prompt;
    const startResponse = await fetchWithRetry(REPLICATE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(currentSession ? { 'Authorization': `Bearer ${currentSession.access_token}` } : {})
        },
        body: JSON.stringify({
            version: NANO_BANANA_MODEL,
            input: {
                prompt: sentPrompt,
                image_input: [imageInput],
                output_format: 'png',
            },
        }),
    }, 3, 3000);

    if (startResponse.status === 429) {
        const data = await startResponse.json().catch(() => ({}));
        const err = new Error(data.error || 'Monthly generation limit reached');
        err.code = 'QUOTA_EXCEEDED';
        err.quota = data;
        throw err;
    }
    if (startResponse.status === 401) {
        const data = await startResponse.json().catch(() => ({}));
        const err = new Error(data.error || 'Create a free account to keep designing.');
        if (data.anonExhausted) err.code = 'ANON_EXHAUSTED';
        throw err;
    }
    if (!startResponse.ok) {
        const data = await startResponse.json().catch(() => ({}));
        throw new Error(`Quick edit failed: ${data.error || data.detail || startResponse.status}`);
    }
    const prediction = await startResponse.json();
    if (!prediction.urls || !prediction.urls.get) {
        throw new Error('Quick edit model did not return a polling URL.');
    }
    // Region runs save the composited image from the client instead.
    const saveContext = skipSave ? null : {
        prompt,
        model: 'nano-banana',
        sourceType: 'quick-edit',
    };
    const result = await pollReplicatePrediction(prediction.urls.get, saveContext);
    const raw = result.imageUrls;
    const imageUrl = Array.isArray(raw) ? raw[0] : raw;
    if (!imageUrl) throw new Error('Quick edit model returned no image.');
    return { imageUrl, savedDesignId: result.savedDesignId || null };
}

/** Return the user's quick-edit text as-is — no guardrail wrapping. */
function buildQuickEditPrompt(text) {
    const edit = (text || '').trim();
    if (!edit) return null;
    return { prompt: edit, label: edit };
}

/** Enable/disable Apply based on whether there's any text, and grow the box to fit. */
function updateQuickEditApplyState() {
    if (quickEditApplyBtn) {
        quickEditApplyBtn.disabled = !(quickEditInput?.value || '').trim();
    }
    if (quickEditInput) {
        quickEditInput.style.height = 'auto';
        if (quickEditInput.value) {
            quickEditInput.style.height = `${Math.min(quickEditInput.scrollHeight + 2, 160)}px`;
        }
    }
    // A taller composer leaves less room for the photo.
    fitQuickEdit();
}

function clearQuickEditInput() {
    if (quickEditInput) quickEditInput.value = '';
    updateQuickEditApplyState();
}

/** Is the configure view in Quick Edit mode? */
function isQuickEditMode() {
    return !!wizardContainer?.classList.contains('is-quick-edit');
}

/**
 * Quick Edit is a focused mode of the configure view, not a modal: a targeted
 * change has nothing to do with style, furniture or approach, so those
 * sections go away and an edit panel takes their place. The photo stays put,
 * which is what lets the region tools paint straight onto it.
 */
function enterQuickEdit() {
    // Signed-out visitors go through: Apply runs the same gates as Generate,
    // which decide between the pre-signup run and the sign-up form.
    if (currentUser && !requireEmailConfirmedForFeature('quick edit')) return;
    clearQuickEditInput();
    // Default to the free model every time — premium is an explicit opt-in.
    // syncDefaultModelToggles manages row visibility and the upsell message.
    if (quickEditPremiumToggle) quickEditPremiumToggle.checked = false;
    wizardContainer?.classList.add('is-quick-edit');
    quickEditPanel?.classList.remove('hidden');
    wizardQuickEditBtn?.setAttribute('aria-pressed', 'true');
    feather.replace();
    // The photo is paintable for as long as Quick Edit is open: brushing on
    // it is how you pick one thing to change.
    if (maskScope !== 'configure') startRegionEditor('configure');
    // The layout changes completely, so start from the top with the photo in
    // view, sized to fit the window.
    window.scrollTo({ top: 0 });
    fitQuickEdit();
    // Only autofocus with a real keyboard; on phones it would pop the
    // on-screen keyboard over the photo.
    if (window.matchMedia('(min-width: 900px) and (pointer: fine)').matches) {
        requestAnimationFrame(() => quickEditInput?.focus());
    }
}

/**
 * Quick Edit is exactly one window tall, so the page never scrolls (see the
 * .is-quick-edit styles). CSS can't know two of the sizes involved, so they
 * are measured: where the view starts (the header differs by screen) and the
 * docked composer's height (it grows as you type). Then the photo is capped
 * to the height its column ends up with.
 */
let quickEditFitObserver = null;
function fitQuickEdit() {
    if (!wizardContainer || !isQuickEditMode()) return;
    const composer = document.querySelector('.quick-edit-composer');
    const top = wizardContainer.getBoundingClientRect().top + window.scrollY;
    wizardContainer.style.setProperty('--qe-top', `${Math.round(top)}px`);
    wizardContainer.style.setProperty('--qe-composer-h', `${Math.ceil(composer?.getBoundingClientRect().height || 0)}px`);

    // The photo column is sized by the layout alone (flex: 1 1 0), so reading
    // it here doesn't depend on the photo it's about to cap.
    const column = wizardContainer.querySelector('.configure-photo');
    const hint = column?.querySelector('.quick-edit-region-hint');
    if (!column) return;
    const hintSpace = hint
        ? hint.getBoundingClientRect().height + (parseFloat(getComputedStyle(hint).marginTop) || 0)
        : 0;
    const photoMax = Math.max(160, Math.floor(column.clientHeight - hintSpace));
    wizardContainer.style.setProperty('--qe-photo-max', `${photoMax}px`);

    if (!quickEditFitObserver && typeof ResizeObserver === 'function') {
        quickEditFitObserver = new ResizeObserver(() => fitQuickEdit());
        if (composer) quickEditFitObserver.observe(composer);
        quickEditFitObserver.observe(column);
        window.addEventListener('resize', fitQuickEdit);
    }
}

/** Back to the full redesign options. Idempotent. */
function exitQuickEdit() {
    // A region painted for an edit must not ride along on a redesign.
    if (maskScope === 'configure') destroyMaskEditor();
    wizardContainer?.classList.remove('is-quick-edit');
    quickEditPanel?.classList.add('hidden');
    wizardQuickEditBtn?.setAttribute('aria-pressed', 'false');
}

/** Apply the typed quick edit through the shared generation pipeline. */
async function applyQuickEdit() {
    if (!currentUploadedImage) {
        showAlertDialog('Please upload an image first.');
        return;
    }
    const built = buildQuickEditPrompt(quickEditInput?.value);
    if (!built) return;
    const usePremium = !!quickEditPremiumToggle?.checked;
    // Default: free Nano Banana (cheap instruction-edit model, no token).
    // Premium opt-in: gpt-image-2 (higher fidelity, counts as one generation).
    // generateDesigns handles token gating and the buy/limit modal.
    await generateDesigns({
        quickEdit: {
            prompt: built.prompt,
            label: usePremium ? 'Quick edit (premium)' : 'Quick edit',
            description: built.label,
        },
        imageSource: currentUploadedImage,
        usePremium,
    });
}

async function applyFengShuiFromAnalysis() {
    const ctx = currentFengShuiContext;
    if (!ctx?.imageSource || !ctx?.result) return;

    const usePremium = fengShuiApplyPremiumToggle?.checked ?? (getEffectiveDefaultModelPref() === 'premium');
    hideRoomFengShuiModal();

    await generateDesigns({
        fengShuiResult: ctx.result,
        imageSource: ctx.imageSource,
        usePremium,
    });
}

async function startRoomFengShuiAnalysis(imageSource, { label = 'Room' } = {}) {
    if (!requireEmailConfirmedForFeature('feng shui analysis')) return;
    if (!imageSource) {
        showAlertDialog('No image available to analyze.');
        return;
    }

    showRoomFengShuiModal(label);

    const cached = getCachedFengShuiAnalysis(imageSource);
    if (cached) {
        displayRoomFengShuiResults(cached.result, cached.imageDisplaySrc, cached.label, imageSource);
        return;
    }

    showRoomFengShuiLoading();

    try {
        const imageBase64 = await toDataUri(imageSource);
        if (!currentSession?.access_token) {
            showAuthModal('login');
            hideRoomFengShuiModal();
            return;
        }
        const resp = await fetch(FENG_SHUI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentSession.access_token}`,
            },
            body: JSON.stringify({
                imageBase64,
                analysisType: 'room-photo',
            }),
        });

        const data = await resp.json().catch(() => ({}));
        if (!resp.ok) {
            throw new Error(data.error || `Analysis failed (${resp.status})`);
        }

        setCachedFengShuiAnalysis(imageSource, {
            result: data,
            imageDisplaySrc: imageBase64,
            label,
        });
        displayRoomFengShuiResults(data, imageBase64, label, imageSource);
    } catch (error) {
        console.error('Feng shui analysis failed:', error);
        showRoomFengShuiError(error.message || 'Unable to analyze this room. Please try again.');
    }
}

/**
 * Open the Share dialog for the design on screen (src/shareDialog.js): send it
 * as a before/after image, or publish it as a link.
 */
function shareCurrentDesign() {
    // Share what the user is looking at: the version picked in the history
    // strip, or the latest. Picking "Original" there falls back to the latest
    // design — sharing the untouched photo is not what the button is for.
    const picked = getSelectedHistoryEntry();
    const shown = picked && !picked.isOriginal ? picked.imageUrl : lastGeneratedImageUrl;
    if (!shown) {
        showToastMessage('Generate a design first, then share it.', 'info');
        return;
    }
    // Prefer the copy already fetched for the local session store: a data URL
    // can always be drawn, a provider URL needs CORS approval.
    const after = durableImageCache.get(shown) || shown;
    // A design opened from the library has no original photo with it.
    const before = currentUploadedImage && currentUploadedImage !== shown ? currentUploadedImage : null;
    // A passing notice (e.g. the "create a free account" nudge after a first
    // design) sits above dialogs and, on a phone, right on top of this one's
    // buttons — taps landed on the notice instead. Opening the dialog
    // supersedes it.
    document.querySelectorAll('.toast').forEach((toast) => toast.remove());
    openShareDialog({ before, after });
}

function saveCurrentDesign() {
    // Find the currently visible design card (first one in mobile view)
    const selectedDesign = document.querySelector('.design-card');
    if (selectedDesign) {
        const designImage = selectedDesign.querySelector('.design-image.generated-image');
        if (designImage && designImage.src) {
            const link = document.createElement('a');
            link.download = 'decorait-design.jpg';

            // Create a temporary canvas to convert the image to downloadable format
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.crossOrigin = 'anonymous'; // Enable cross-origin image downloading

            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                try {
                    link.href = canvas.toDataURL('image/jpeg');
                    link.click();
                } catch (error) {
                    console.error('Error saving image:', error);

                    // Fallback: open image in new tab
                    window.open(designImage.src, '_blank');
                }
            };

            img.onerror = function () {
                console.error('Error loading image for download');
                // Fallback: open in new tab
                window.open(designImage.src, '_blank');
            };

            img.src = designImage.src;
        }
    }
}

// CSS styles have been moved to styles.css file

// Floor Plan Editor is in a separate file: floorPlanEditor.js