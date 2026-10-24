import { squash } from './format.js';

// The number of words in a text, counting runs of whitespace as one break.
export function wordCount(text) {
  const words = squash(text);
  return words ? words.split(' ').length : 0;
}
