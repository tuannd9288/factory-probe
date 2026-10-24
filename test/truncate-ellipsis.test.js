import { test } from 'node:test';
import assert from 'node:assert/strict';
import { truncate } from '../src/format.js';

test('takes another ellipsis and still keeps to max', () => {
  assert.equal(truncate('abcdefgh', 5, { ellipsis: '...' }), 'ab...');
  assert.equal(truncate('abcdefgh', 3, { ellipsis: '...' }), 'abc');
});
