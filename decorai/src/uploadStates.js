/**
 * The home screen's upload states (.design/decorait-overhaul/TASKS.md, C1):
 * which of several dropped files to use, what to say when a file isn't a
 * photo, what to say when the camera won't open, and the sample rooms someone
 * can try before they have a photo of their own.
 *
 * Plain data and functions, unit-tested in test/unit/uploadStates.test.mjs;
 * main.js draws them.
 */
import { looksLikeImageFile } from './roomPhoto.js';

/**
 * Rooms to try without a photo. The first is the "before" of the example
 * beside the upload buttons (index.html, .upload-proof).
 */
export const SAMPLE_ROOMS = [
    {
        id: 'apartment',
        label: 'Empty room',
        src: '/samples/apartment-before.jpg',
        alt: 'An empty apartment with a grey accent wall and city views',
    },
    {
        id: 'living-room',
        label: 'Living room',
        src: '/samples/living-room-before.jpg',
        alt: 'A furnished living room with a dark steel fireplace and a cream sectional',
    },
    {
        id: 'family-room',
        label: 'Family room',
        src: '/samples/lounge-before.jpg',
        alt: 'A family room with wood beams, a stone fireplace and a white sofa',
    },
];

/**
 * Of the files dropped, the one to use: the first that looks like a photo.
 * @param {ArrayLike<File>} files
 * @returns {{ file: File|null, rejected: File|null }}
 *   rejected: the first file, when none of them is a photo
 */
export function pickDroppedFile(files) {
    const list = Array.from(files || []);
    const file = list.find(looksLikeImageFile) || null;
    return { file, rejected: file ? null : list[0] || null };
}

/**
 * Whether a drag in progress is carrying something other than a photo, from
 * the MIME types the browser reveals mid-drag. Unknown (an empty type, as
 * Safari and HEIC files give) counts as fine: the drop decides.
 * @param {Array<{kind: string, type: string}>} items DataTransferItem-like
 */
export function dragLooksWrong(items) {
    const files = Array.from(items || []).filter((i) => i.kind === 'file');
    if (!files.length) return false;
    return files.every((i) => i.type && !i.type.startsWith('image/'));
}

/** A file that isn't a photo: what to say. */
export function notAPhoto(file) {
    const name = String(file?.name || '').trim();
    return {
        title: name ? `“${shorten(name)}” isn’t a photo` : 'That isn’t a photo',
        text: 'Use a JPEG, PNG, WebP or HEIC picture of the room.',
        action: 'upload',
    };
}

/** A photo the browser couldn't open (a HEIC on a desktop browser, a damaged file). */
export function couldNotOpen() {
    return {
        title: 'That photo didn’t open',
        text: 'Try a JPEG or PNG. From an iPhone, sharing it as “Most Compatible” converts it.',
        action: 'upload',
    };
}

/** A sample room that failed to load (offline, usually). */
export function sampleFailed() {
    return {
        title: 'The sample room didn’t load',
        text: 'Check your connection and try again, or upload a photo of your own.',
        action: 'upload',
    };
}

/**
 * The camera didn't open: what to say, and what to offer instead.
 * @param {{ name?: string }|null} err getUserMedia's rejection
 * @param {{ phone?: boolean }} [opts] phone: a camera app can be offered
 * @returns {{ title: string, text: string, action: 'camera-app'|'upload'|'retry' }}
 */
export function cameraProblem(err, { phone = false } = {}) {
    // On a phone the system camera app needs no permission from this site, so
    // it's the way round almost every failure.
    const fallback = phone ? 'camera-app' : 'upload';
    const name = err?.name || '';
    if (name === 'NotAllowedError' || name === 'SecurityError' || name === 'PermissionDeniedError') {
        return {
            title: 'Camera access is off',
            text: phone
                ? 'Use your camera app instead, or allow the camera for this site in your browser settings.'
                : 'Allow the camera for this site in your browser settings, or upload a photo instead.',
            action: fallback,
        };
    }
    if (name === 'NotFoundError' || name === 'DevicesNotFoundError' || name === 'OverconstrainedError') {
        return {
            title: 'No camera found',
            text: 'Upload a photo of the room instead.',
            action: 'upload',
        };
    }
    if (name === 'NotReadableError' || name === 'TrackStartError' || name === 'AbortError') {
        return {
            title: 'The camera is busy',
            text: 'Another app may be using it. Close that app and try again, or upload a photo.',
            action: phone ? 'camera-app' : 'retry',
        };
    }
    return {
        title: 'The camera didn’t open',
        text: phone ? 'Use your camera app instead, or upload a photo.' : 'Try again, or upload a photo instead.',
        action: phone ? 'camera-app' : 'retry',
    };
}

/** The button for each fallback. */
export const PROBLEM_ACTION_LABELS = {
    upload: 'Upload a photo',
    'camera-app': 'Open camera app',
    retry: 'Try again',
};

function shorten(name, max = 32) {
    if (name.length <= max) return name;
    const dot = name.lastIndexOf('.');
    const ext = dot > 0 && name.length - dot <= 6 ? name.slice(dot) : '';
    return `${name.slice(0, max - ext.length - 1)}…${ext}`;
}
