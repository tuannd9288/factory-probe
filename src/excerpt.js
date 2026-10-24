import { squash } from './format.js';

// The first `n` words of a text, with an ellipsis when words were left out.
export function excerpt(text, n) {
  const words = squash(text).split(' ');
  const kept = words.slice(0, n || undefined);
  return kept.length < words.length ? `${kept.join(' ')}…` : kept.join(' ');
}
