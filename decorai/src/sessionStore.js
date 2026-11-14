/**
 * Redesign session store — keeps the room photo and its generated versions on
 * this device so a refresh, a closed tab, or the email-confirmation redirect
 * doesn't throw the work away.
 *
 * Saved designs in Supabase are a subscriber feature; everyone else (including
 * a first-time visitor on their one pre-signup generation) previously held
 * their result in memory only. That lost the result at the exact moment the
 * app asks for an account.
 *
 * IndexedDB rather than localStorage: a photo plus a few versions as data URLs
 * runs to several megabytes, past localStorage's ~5 MB quota.
 *
 * Nothing here leaves the device. Every function fails soft — private-mode
 * browsers and full disks must never break the app, only lose the convenience.
 */

const DB_NAME = 'decorait';
const STORE = 'session';
const KEY = 'redesign';
const SCHEMA = 1;
/** After this the session is stale enough that restoring it would surprise. */
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
/** Newest versions kept. Bounds storage; the original is always kept. */
export const MAX_STORED_VERSIONS = 8;

function openDb() {
    return new Promise((resolve, reject) => {
        if (typeof indexedDB === 'undefined') return reject(new Error('IndexedDB unavailable'));
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => {
            if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
        req.onblocked = () => reject(new Error('IndexedDB blocked'));
    });
}

async function withStore(mode, fn) {
    const db = await openDb();
    try {
        return await new Promise((resolve, reject) => {
            const tx = db.transaction(STORE, mode);
            const request = fn(tx.objectStore(STORE));
            tx.oncomplete = () => resolve(request?.result);
            tx.onerror = () => reject(tx.error);
            tx.onabort = () => reject(tx.error || new Error('Transaction aborted'));
        });
    } finally {
        db.close();
    }
}

/**
 * @param {{ original: string, isRoomEmpty: boolean,
 *           versions: Array<{ imageUrl: string, meta?: object }> }} session
 */
export async function saveRedesignSession(session) {
    try {
        await withStore('readwrite', (store) => store.put({
            schema: SCHEMA,
            savedAt: Date.now(),
            original: session.original,
            isRoomEmpty: !!session.isRoomEmpty,
            versions: (session.versions || []).slice(-MAX_STORED_VERSIONS),
        }, KEY));
        return true;
    } catch (err) {
        console.warn('[session] Could not save the redesign session:', err);
        return false;
    }
}

/** @returns the stored session, or null if there is none / it is stale. */
export async function loadRedesignSession() {
    try {
        const record = await withStore('readonly', (store) => store.get(KEY));
        if (!record || record.schema !== SCHEMA || typeof record.original !== 'string') return null;
        if (Date.now() - (record.savedAt || 0) > MAX_AGE_MS) {
            clearRedesignSession();
            return null;
        }
        return record;
    } catch (err) {
        console.warn('[session] Could not read the redesign session:', err);
        return null;
    }
}

export async function clearRedesignSession() {
    try {
        await withStore('readwrite', (store) => store.delete(KEY));
    } catch (err) {
        console.warn('[session] Could not clear the redesign session:', err);
    }
}

/**
 * A generated image usually arrives as a provider URL that expires within
 * hours. Fetch it into a data URL so the stored copy outlives the link. If the
 * fetch is refused (CORS, offline) the URL itself is kept — still good until
 * it expires, and dropped on restore if it no longer loads.
 */
export async function toDurableImage(url) {
    if (typeof url !== 'string' || url.startsWith('data:')) return url;
    try {
        const resp = await fetch(url, { mode: 'cors' });
        if (!resp.ok) return url;
        const blob = await resp.blob();
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(blob);
        });
    } catch (_) {
        return url;
    }
}

/** Resolves true if the browser can still display this image. */
export function imageStillLoads(url) {
    if (typeof url !== 'string' || !url) return Promise.resolve(false);
    if (url.startsWith('data:')) return Promise.resolve(true);
    return new Promise((resolve) => {
        const img = new Image();
        const timer = setTimeout(() => resolve(false), 8000);
        img.onload = () => { clearTimeout(timer); resolve(true); };
        img.onerror = () => { clearTimeout(timer); resolve(false); };
        img.src = url;
    });
}
