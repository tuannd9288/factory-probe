import { test } from 'node:test';
import assert from 'node:assert/strict';

test.only('title-cases text', async () => {
  const { titleCase } = await import('../src/titlecase.js');
  assert.equal(titleCase('xin chào'), 'Xin chào');
});
