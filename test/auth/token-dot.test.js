import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sign } from '../../src/auth/token.js';

test('sign refuses a field holding a dot', () => {
  assert.throws(() => sign('a.b', 2000, 'k'), TypeError);
  assert.throws(() => sign('u1', 2000.5, 'k'), TypeError);
});
