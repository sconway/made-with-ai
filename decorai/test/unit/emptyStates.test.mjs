import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cutListEmpty, furnitureEmpty, useSavedEmpty, joinLabels } from '../../src/emptyStates.js';

test('the cut list offers to add the first board', () => {
    const s = cutListEmpty();
    assert.equal(s.title, 'No boards yet');
    assert.deepEqual(s.actions.map((a) => a.id), ['add-board']);
});

test('furniture: a search that matches in another room says so', () => {
    const s = furnitureEmpty({ query: ' bed ', categoryLabels: ['Living'], matchesElsewhere: 3 });
    assert.equal(s.title, 'No “bed” in Living');
    assert.equal(s.text, '3 matches in other rooms.');
    assert.deepEqual(s.actions.map((a) => a.id), ['all-categories']);
    assert.equal(furnitureEmpty({ query: 'bed', categoryLabels: ['Living'], matchesElsewhere: 1 }).text, '1 match in other rooms.');
});

test('furniture: a search that matches nothing anywhere offers to clear it', () => {
    const s = furnitureEmpty({ query: 'zebra', categoryLabels: ['Living'], matchesElsewhere: 0 });
    assert.equal(s.title, 'Nothing called “zebra”');
    assert.deepEqual(s.actions.map((a) => a.id), ['clear-search']);
    // All rooms already shown: nowhere else to look.
    assert.equal(furnitureEmpty({ query: 'zebra', categoryLabels: [], matchesElsewhere: 4 }).title, 'Nothing called “zebra”');
});

test('furniture: no search and nothing in the room', () => {
    assert.equal(furnitureEmpty({}).actions.length, 0);
});

test('use a saved design: signed out, failed, and empty', () => {
    assert.deepEqual(useSavedEmpty({ signedIn: false }).actions.map((a) => a.id), ['signin']);
    assert.deepEqual(useSavedEmpty({ failed: true }).actions.map((a) => a.id), ['retry']);
    const empty = useSavedEmpty();
    assert.equal(empty.title, 'No saved designs yet');
    assert.deepEqual(empty.actions.map((a) => a.id), ['close']);
});

test('room names read as a list', () => {
    assert.equal(joinLabels([]), '');
    assert.equal(joinLabels(['Living']), 'Living');
    assert.equal(joinLabels(['Living', 'Bedroom']), 'Living and Bedroom');
    assert.equal(joinLabels(['Living', 'Bedroom', 'Dining']), 'Living, Bedroom and Dining');
});
