import { test } from 'node:test';
import assert from 'node:assert/strict';
import { send } from '../src/send.js';

test('refuses a message whose text is only whitespace', async () => {
  await assert.rejects(send(async () => 'ok', { to: 'a', text: '  \n ' }), TypeError);
});
