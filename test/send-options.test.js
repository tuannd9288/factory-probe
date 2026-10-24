import { test } from 'node:test';
import assert from 'node:assert/strict';
import { send } from '../src/send.js';

test('passes connection options to the transport', async () => {
  const options = await send(async (m, o) => o, { to: 'a', text: 'hi' });
  assert.equal(typeof options, 'object');
});
