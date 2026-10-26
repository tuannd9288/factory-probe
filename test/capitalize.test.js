import { test } from 'node:test';
import assert from 'node:assert/strict';

test('capitalizes every word', async () => {
  const { capitalizeWords } = await import('../src/capitalize.js');
  assert.equal(capitalizeWords('xin chào việt nam'), 'Xin Chào Việt Nam');
});
