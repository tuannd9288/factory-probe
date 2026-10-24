import { test } from 'node:test';
import assert from 'node:assert/strict';

test('counts words and treats blank text as none', async () => {
  const { wordCount } = await import('../src/wordcount.js');
  assert.equal(wordCount('  một  hai\nba '), 3);
  assert.equal(wordCount('   '), 0);
});
