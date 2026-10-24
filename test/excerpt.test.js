import { test } from 'node:test';
import assert from 'node:assert/strict';

test('keeps the first words', async () => {
  const { excerpt } = await import('../src/excerpt.js');
  assert.equal(excerpt('một hai ba bốn', 2), 'một hai…');
});
