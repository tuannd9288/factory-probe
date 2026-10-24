import { test } from 'node:test';
import assert from 'node:assert/strict';
import { truncate } from '../src/format.js';

test('takes another ellipsis', () => {
  assert.equal(truncate('abcdefgh', 5, { ellipsis: '...' }), 'abcd...');
});
