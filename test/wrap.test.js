import { test } from 'node:test';
import assert from 'node:assert/strict';

test('wrap exists', async () => {
  const { wrap } = await import('../src/wrap.js');
  assert.throws(() => wrap('abc', 2));
});
