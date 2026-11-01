export { truncate } from './truncate.js';

// Collapses runs of whitespace and trims the ends.
export function squash(text) {
  return text.trim().replace(/\s+/g, ' ');
}

/**
 * The first letter of each word, upper-cased: "Nguyễn Văn Tuấn" gives "NVT".
 * @param {string} name
 * @returns {string}
 */
export function initials(name) {
  return squash(name)
    .split(' ')
    .filter(Boolean)
    .map((word) => [...word][0].toUpperCase())
    .join('');
}
