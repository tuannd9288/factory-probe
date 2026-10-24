import { squash } from './format.js';

// The words of a text.
export function words(text) {
  return squash(text).split(' ');
}
