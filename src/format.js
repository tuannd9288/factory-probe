const graphemes = (text) => [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)].map((s) => s.segment);

// Cuts text to at most `max` user-visible characters without splitting an emoji. The ellipsis counts toward `max`;
// when it would take every place, the text is cut without one.
export function truncate(text, max, { ellipsis = '…' } = {}) {
  const chars = graphemes(text);
  if (chars.length <= max) return text;
  const room = max - graphemes(ellipsis).length;
  if (room < 1) return chars.slice(0, max).join('');
  return chars.slice(0, room).join('') + ellipsis;
}

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
