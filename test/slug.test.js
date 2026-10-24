import { test } from 'node:test';
import assert from 'node:assert/strict';

test('slugifies Vietnamese text', async () => {
  const { slugify } = await import('../src/slug.js');
  assert.equal(slugify('Xin chào Việt Nam!'), 'xin-chao-viet-nam');
  assert.equal(slugify('Đường đi'), 'duong-di');
});
