import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sign, verify } from '../../src/auth/token.js';

test('a token for an empty recipient is refused', () => {
  assert.equal(typeof verify(sign('', 2000, 'k'), 'k', 1000), 'string');
});
