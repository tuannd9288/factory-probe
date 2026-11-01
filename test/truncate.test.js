import test from 'node:test';
import assert from 'node:assert/strict';

test('cuts to max characters, the last one an ellipsis', async () => {
  const { truncate } = await import('../src/truncate.js');
  assert.equal(truncate('hello world', 8), 'hello w…');
});

test('text of max characters or fewer is returned unchanged', async () => {
  const { truncate } = await import('../src/truncate.js');
  assert.equal(truncate('hello', 5), 'hello');
  assert.equal(truncate('hi', 5), 'hi');
});

test('a max below 1 throws a RangeError', async () => {
  const { truncate } = await import('../src/truncate.js');
  assert.throws(() => truncate('abc', 0), RangeError);
  assert.throws(() => truncate('abc', -1), RangeError);
});
