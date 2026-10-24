import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createLimiter } from '../src/ratelimit.js';

test('reset frees every slot of one recipient', () => {
  const limiter = createLimiter({ limit: 1, windowMs: 1000, now: () => 0 });
  limiter.allow('a');
  limiter.reset('a');
  assert.equal(limiter.allow('a'), true);
});
