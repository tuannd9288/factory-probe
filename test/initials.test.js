import { test } from 'node:test';
import assert from 'node:assert/strict';

test('takes the first letter of each word and ignores extra spaces', async () => {
  const { initials } = await import('../src/initials.js');
  assert.equal(initials('Nguyễn Văn Tuấn'), 'NVT');
  assert.equal(initials('  an   binh '), 'AB');
});
