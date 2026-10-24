import { test } from 'node:test';
import assert from 'node:assert/strict';

test('parses durations and refuses anything else', async () => {
  const { parseDuration } = await import('../src/duration.js');
  assert.equal(parseDuration('5m'), 300000);
  assert.equal(parseDuration('30s'), 30000);
  assert.ok(Number.isNaN(parseDuration('soon')));
});
