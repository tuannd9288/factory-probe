const graphemes = (text) => [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)].map((s) => s.segment);

// Cuts text to at most `max` user-visible characters without splitting an emoji. The ellipsis counts toward `max`;
// when it would take every place, the text is cut without one.
export function truncate(text, max, { ellipsis = '…' } = {}) {
  if (max < 1) throw new RangeError('max must be at least 1');
  const chars = graphemes(text);
  if (chars.length <= max) return text;
  const room = max - graphemes(ellipsis).length;
  if (room < 1) return chars.slice(0, max).join('');
  return chars.slice(0, room).join('') + ellipsis;
}
