import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createLimiter } from '../src/ratelimit.js';

test('refuses a limit that is not a positive integer', () => {
  assert.throws(() => createLimiter({ limit: 0, windowMs: 1000 }), RangeError);
  assert.throws(() => createLimiter({ limit: 1.5, windowMs: 1000 }), RangeError);
});
