import { test } from 'node:test';
import assert from 'node:assert/strict';

test('empty and whitespace-only strings are blank', async () => {
  const { isBlank } = await import('../src/isblank.js');
  assert.equal(isBlank(''), true);
  assert.equal(isBlank(' \n\t'), true);
});

test('a string with text is not blank', async () => {
  const { isBlank } = await import('../src/isblank.js');
  assert.equal(isBlank(' a '), false);
});

test('null and undefined are blank', async () => {
  const { isBlank } = await import('../src/isblank.js');
  assert.equal(isBlank(null), true);
  assert.equal(isBlank(undefined), true);
});
