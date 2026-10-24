import { test } from 'node:test';
import assert from 'node:assert/strict';
import { truncate } from '../src/format.js';

test('a limit of one keeps one character and no ellipsis', () => {
  assert.equal(truncate('abc', 1), 'a');
});
