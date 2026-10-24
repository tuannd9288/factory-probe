import { test } from 'node:test';
import assert from 'node:assert/strict';
import { squash } from '../src/format.js';

test('splits text into words', () => {
  assert.deepEqual(squash(' a  b ').split(' '), ['a', 'b']);
});
