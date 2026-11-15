/**
 * Share a design as one before/after image.
 *
 * A redesign is only persuasive next to the room it started from, and a single
 * image is the one thing every destination accepts — a group chat, a story, a
 * marketplace listing. So sharing builds one picture holding both, with a
 * small footer saying where it was made, and hands it to the phone's own share
 * sheet. That footer is the app's only route from one user to the next.
 *
 * Everything happens in the browser: nothing is uploaded and no link is
 * created, so sharing can't expose a photo the user didn't choose to send.
 */

// Card geometry, in output pixels. Sized so text stays legible when a chat app
// scales the image down to a phone's width.
const PAD = 36;
const GAP = 14;
const RADIUS = 22;
const FOOTER = 104;
const STACKED_WIDTH = 1080;      // landscape rooms: before above after
const SIDE_BY_SIDE_WIDTH = 1440; // portrait rooms: before beside after
const JPEG_QUALITY = 0.9;

// The app's light palette (src/tokens.css). Canvas can't read CSS variables
// from a detached element reliably, and a shared image should look the same
// whatever theme produced it.
const PAPER = '#fdfcfa'; // --warm-50
const INK = '#201e1a';   // --warm-900
const MUTED = '#6b6355'; // --warm-600

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        // Needed for provider-hosted results; harmless for data URLs. Without
        // CORS approval the canvas would be tainted and unreadable.
        if (!String(src).startsWith('data:')) img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Could not load an image for sharing'));
        img.src = src;
    });
}

function roundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

/** Draw `img` to fill the panel exactly, cropping the overflow evenly. */
function drawPanel(ctx, img, x, y, w, h, label) {
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const sw = w / scale;
    const sh = h / scale;
    const sx = (img.naturalWidth - sw) / 2;
    const sy = (img.naturalHeight - sh) / 2;

    ctx.save();
    roundedRect(ctx, x, y, w, h, RADIUS);
    ctx.clip();
    ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
    ctx.restore();

    if (!label) return;
    ctx.save();
    ctx.font = '600 22px Inter, system-ui, -apple-system, "Segoe UI", sans-serif';
    ctx.textBaseline = 'middle';
    const textWidth = ctx.measureText(label).width;
    const pillW = textWidth + 32;
    const pillH = 42;
    const px = x + 18;
    const py = y + h - pillH - 18;
    roundedRect(ctx, px, py, pillW, pillH, pillH / 2);
    ctx.fillStyle = 'rgba(20, 17, 13, 0.72)';
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillText(label, px + 16, py + pillH / 2 + 1);
    ctx.restore();
}

/**
 * Compose the share card.
 * @param {object} opts
 * @param {string|null} opts.before  the original photo (data URL), or null to
 *                                   share the design on its own
 * @param {string} opts.after        the generated design (data URL or URL)
 * @param {string} [opts.host]       shown in the footer, e.g. "decorait.app"
 * @returns {Promise<{ blob: Blob, width: number, height: number, layout: string }>}
 */
export async function buildShareImage({ before, after, host = '' }) {
    const [afterImg, beforeImg] = await Promise.all([
        loadImage(after),
        before ? loadImage(before).catch(() => null) : Promise.resolve(null),
    ]);
    // The display fonts are already loaded by the page; make sure they are
    // ready before the canvas measures text with them.
    try {
        await Promise.all([
            document.fonts.load('400 44px "Instrument Serif"'),
            document.fonts.load('600 22px Inter'),
        ]);
    } catch (_) { /* fall back to system fonts */ }

    // Both panels take the original's proportions, so the pair lines up even
    // when the model returned a slightly different aspect ratio.
    const guide = beforeImg || afterImg;
    const ratio = guide.naturalWidth / guide.naturalHeight;
    const panels = beforeImg ? [[beforeImg, 'BEFORE'], [afterImg, 'AFTER']] : [[afterImg, null]];
    const sideBySide = panels.length === 2 && ratio < 1;

    const width = sideBySide ? SIDE_BY_SIDE_WIDTH : STACKED_WIDTH;
    const panelW = sideBySide ? (width - PAD * 2 - GAP) / 2 : width - PAD * 2;
    const panelH = Math.round(panelW / ratio);
    const panelsH = sideBySide ? panelH : panelH * panels.length + GAP * (panels.length - 1);
    const height = PAD + panelsH + FOOTER;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, width, height);

    panels.forEach(([img, label], i) => {
        const x = sideBySide ? PAD + i * (panelW + GAP) : PAD;
        const y = sideBySide ? PAD : PAD + i * (panelH + GAP);
        drawPanel(ctx, img, x, y, panelW, panelH, label);
    });

    // Footer: wordmark left, where to find it right.
    const footerMid = PAD + panelsH + FOOTER / 2;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = INK;
    ctx.font = '400 44px "Instrument Serif", Georgia, "Times New Roman", serif';
    ctx.fillText('DecorAIt', PAD, footerMid);
    const markWidth = ctx.measureText('DecorAIt').width;
    ctx.fillStyle = MUTED;
    ctx.font = '400 24px Inter, system-ui, -apple-system, "Segoe UI", sans-serif';
    const tagline = beforeImg ? 'My room, reimagined' : 'Reimagine your space';
    if (PAD + markWidth + 22 + ctx.measureText(tagline).width < width - PAD - (host ? ctx.measureText(host).width + 32 : 0)) {
        ctx.fillText(tagline, PAD + markWidth + 22, footerMid + 3);
    }
    if (host) {
        ctx.textAlign = 'right';
        ctx.font = '500 24px Inter, system-ui, -apple-system, "Segoe UI", sans-serif';
        ctx.fillText(host, width - PAD, footerMid + 3);
        ctx.textAlign = 'left';
    }

    // Throws SecurityError if a provider image came back without CORS approval.
    const blob = await new Promise((resolve, reject) => {
        canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Could not encode the share image'))), 'image/jpeg', JPEG_QUALITY);
    });
    return { blob, width, height, layout: sideBySide ? 'side-by-side' : panels.length === 2 ? 'stacked' : 'single' };
}

function download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

/**
 * Build the card and share it.
 *
 * Uses the device's share sheet where it can take a file (phones, mostly).
 * Elsewhere the image is downloaded instead, so the action never dead-ends.
 *
 * @returns {Promise<'shared'|'downloaded'|'cancelled'>}
 */
export async function shareDesign({ before, after, host, url }) {
    const { blob } = await buildShareImage({ before, after, host });
    const filename = before ? 'decorait-before-after.jpg' : 'decorait-design.jpg';
    const file = new File([blob], filename, { type: 'image/jpeg' });
    const text = before
        ? `Before and after: my room, redesigned with DecorAIt. ${url || ''}`.trim()
        : `A room design I made with DecorAIt. ${url || ''}`.trim();

    if (typeof navigator.share === 'function' && navigator.canShare?.({ files: [file] })) {
        try {
            // The link rides in `text`: several share targets drop the image
            // when a separate `url` is sent alongside files.
            await navigator.share({ files: [file], title: 'DecorAIt', text });
            return 'shared';
        } catch (err) {
            // Closing the sheet is a choice, not a failure.
            if (err?.name === 'AbortError') return 'cancelled';
            // Anything else (permission, an OS refusal): fall through and
            // still give them the image.
            console.warn('Share sheet failed, downloading instead:', err);
        }
    }
    download(blob, filename);
    return 'downloaded';
}
