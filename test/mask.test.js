import { test } from 'node:test';
import assert from 'node:assert/strict';

test('hides the middle of a phone number', async () => {
  const { maskRecipient } = await import('../src/mask.js');
  assert.equal(maskRecipient('0912345678'), '09******78');
  assert.equal(maskRecipient('123'), '***');
});
