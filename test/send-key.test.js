import { test } from 'node:test';
import assert from 'node:assert/strict';
import { send } from '../src/send.js';

test('passes the gateway key to the transport', async () => {
  const seen = await send(async (m) => m.apiKey, { to: 'a', text: 'hi' });
  assert.ok(seen);
});
