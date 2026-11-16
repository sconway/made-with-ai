import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
    SAMPLE_ROOMS, pickDroppedFile, dragLooksWrong, notAPhoto, cameraProblem, PROBLEM_ACTION_LABELS,
} from '../../src/uploadStates.js';

const file = (name, type) => ({ name, type });

test('of several dropped files, the first photo is used', () => {
    const photo = file('room.jpg', 'image/jpeg');
    assert.equal(pickDroppedFile([file('a.pdf', 'application/pdf'), photo]).file, photo);
    // HEIC often arrives with no type: the name decides.
    assert.equal(pickDroppedFile([file('IMG_1.HEIC', '')]).file.name, 'IMG_1.HEIC');
});

test('with no photo among them, the first file is the one to explain', () => {
    const r = pickDroppedFile([file('a.pdf', 'application/pdf'), file('b.txt', 'text/plain')]);
    assert.equal(r.file, null);
    assert.equal(r.rejected.name, 'a.pdf');
    assert.deepEqual(pickDroppedFile([]), { file: null, rejected: null });
});

test('a drag looks wrong only when every file is known not to be a photo', () => {
    assert.equal(dragLooksWrong([{ kind: 'file', type: 'application/pdf' }]), true);
    assert.equal(dragLooksWrong([{ kind: 'file', type: 'application/pdf' }, { kind: 'file', type: 'image/png' }]), false);
    // Safari (and HEIC) give no type mid-drag: let the drop decide.
    assert.equal(dragLooksWrong([{ kind: 'file', type: '' }]), false);
    assert.equal(dragLooksWrong([{ kind: 'string', type: 'text/plain' }]), false);
    assert.equal(dragLooksWrong([]), false);
});

test('a file that is not a photo is named, and a long name is shortened keeping its extension', () => {
    assert.equal(notAPhoto(file('plan.pdf')).title, '“plan.pdf” isn’t a photo');
    const long = notAPhoto(file('a-very-long-file-name-from-the-scanner-2026-11-15.pdf')).title;
    assert.match(long, /…\.pdf” isn’t a photo$/);
    assert.equal(notAPhoto(null).title, 'That isn’t a photo');
    assert.equal(notAPhoto(file('x.pdf')).action, 'upload');
});

test('camera problems: each failure says why, and offers the camera app on a phone', () => {
    const denied = cameraProblem({ name: 'NotAllowedError' });
    assert.equal(denied.title, 'Camera access is off');
    assert.equal(denied.action, 'upload');
    assert.equal(cameraProblem({ name: 'NotAllowedError' }, { phone: true }).action, 'camera-app');
    assert.equal(cameraProblem({ name: 'NotFoundError' }, { phone: true }).title, 'No camera found');
    assert.equal(cameraProblem({ name: 'NotFoundError' }, { phone: true }).action, 'upload');
    assert.equal(cameraProblem({ name: 'NotReadableError' }).action, 'retry');
    assert.equal(cameraProblem(null).title, 'The camera didn’t open');
    for (const p of [denied, cameraProblem(null, { phone: true }), cameraProblem({ name: 'NotReadableError' })]) {
        assert.ok(PROBLEM_ACTION_LABELS[p.action], `a label for ${p.action}`);
    }
});

test('every sample room has an image that ships, and a description', async () => {
    const { existsSync } = await import('node:fs');
    assert.equal(SAMPLE_ROOMS.length, 3);
    assert.equal(new Set(SAMPLE_ROOMS.map((r) => r.id)).size, 3);
    for (const r of SAMPLE_ROOMS) {
        assert.match(r.src, /^\/samples\/[\w-]+\.jpg$/);
        assert.ok(existsSync(new URL(`../../public${r.src}`, import.meta.url)), `${r.src} is in public/`);
        assert.ok(r.alt.length > 20);
    }
});
