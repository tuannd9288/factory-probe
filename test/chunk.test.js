import { test } from 'node:test';
import assert from 'node:assert/strict';

test('splits text into pieces without breaking an emoji', async () => {
  const { chunk } = await import('../src/chunk.js');
  assert.deepEqual(chunk('ab👍🏽cde', 2), ['ab', '👍🏽c', 'de']);
});
