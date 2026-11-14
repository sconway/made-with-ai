/**
 * Room photo intake — every photo is normalised here before the app uses it.
 *
 * A phone camera produces a 12MP+ image (4–8 MB, more as base64). The models
 * work at roughly 1–1.5K on the long edge, so sending the original only makes
 * the upload slow on mobile data and pushes multi-megabyte JSON bodies through
 * the server. Everything is brought down to ROOM_PHOTO_MAX_EDGE and re-encoded
 * as JPEG once, up front, so every later step (detection, generation, region
 * edits, the compare view) works from the same small image.
 */

/** Longest edge kept. Above what any model here outputs, so nothing is lost. */
export const ROOM_PHOTO_MAX_EDGE = 2048;
const JPEG_QUALITY = 0.88;
/** A file already this small and within the edge limit is used untouched. */
const PASSTHROUGH_MAX_BYTES = 1.5 * 1024 * 1024;
const PASSTHROUGH_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);

/**
 * Whether a picked/dropped file is worth trying to open as a photo. Deliberately
 * loose: HEIC files often arrive with an empty `type`, and whether a format can
 * actually be decoded is the browser's call, made in normalizeRoomPhoto().
 */
export function looksLikeImageFile(file) {
    if (!file) return false;
    if (file.type) return file.type.startsWith('image/');
    return /\.(jpe?g|png|webp|heic|heif|avif|gif|bmp)$/i.test(file.name || '');
}

function readAsDataUrl(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error || new Error('Could not read the file'));
        reader.readAsDataURL(blob);
    });
}

/** Decode a blob to something drawable, honouring EXIF orientation. */
async function decodeBlob(blob) {
    if (typeof createImageBitmap === 'function') {
        try {
            const bitmap = await createImageBitmap(blob, { imageOrientation: 'from-image' });
            return { source: bitmap, width: bitmap.width, height: bitmap.height, release: () => bitmap.close?.() };
        } catch (_) {
            // Fall through: <img> decodes formats createImageBitmap may not
            // (HEIC on Safari), and is the only path on older browsers.
        }
    }
    const url = URL.createObjectURL(blob);
    try {
        const img = await new Promise((resolve, reject) => {
            const el = new Image();
            el.onload = () => resolve(el);
            el.onerror = () => reject(new Error('This image format could not be opened'));
            el.src = url;
        });
        return { source: img, width: img.naturalWidth, height: img.naturalHeight, release: () => {} };
    } finally {
        // Safe after load: the decoded pixels are held by the element.
        URL.revokeObjectURL(url);
    }
}

function drawToJpeg(source, width, height) {
    const scale = Math.min(1, ROOM_PHOTO_MAX_EDGE / Math.max(width, height));
    const w = Math.max(1, Math.round(width * scale));
    const h = Math.max(1, Math.round(height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    // JPEG has no alpha — without this a transparent PNG turns black.
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(source, 0, 0, w, h);
    return canvas.toDataURL('image/jpeg', JPEG_QUALITY);
}

/**
 * Turn a File/Blob, or an already-drawn canvas/video frame, into a JPEG data
 * URL no larger than ROOM_PHOTO_MAX_EDGE on its long edge.
 * Rejects if the browser cannot decode the image.
 */
export async function normalizeRoomPhoto(input) {
    if (input instanceof HTMLCanvasElement) {
        if (!input.width || !input.height) throw new Error('Empty image');
        return drawToJpeg(input, input.width, input.height);
    }

    const decoded = await decodeBlob(input);
    try {
        if (!decoded.width || !decoded.height) throw new Error('Empty image');
        const withinEdge = Math.max(decoded.width, decoded.height) <= ROOM_PHOTO_MAX_EDGE;
        if (withinEdge && input.size <= PASSTHROUGH_MAX_BYTES && PASSTHROUGH_TYPES.has(input.type)) {
            return await readAsDataUrl(input);
        }
        return drawToJpeg(decoded.source, decoded.width, decoded.height);
    } finally {
        decoded.release();
    }
}
