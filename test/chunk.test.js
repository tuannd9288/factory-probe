import { test } from 'node:test';
import assert from 'node:assert/strict';

test('splits text into pieces without breaking an emoji', async () => {
  const { chunk } = await import('../src/chunk.js');
  assert.deepEqual(chunk('ab👍🏽cde', 2), ['ab', '👍🏽c', 'de']);
});

test('refuses a size that would never move on', async () => {
  const { chunk } = await import('../src/chunk.js');
  for (const size of [0, -1, 1.5, '2']) assert.throws(() => chunk('abc', size), RangeError);
  for (const text of [undefined, null, 42]) assert.throws(() => chunk(text, 2), TypeError);
});
