// Splits text into pieces of at most `size` user-visible characters, never inside an emoji.
export function chunk(text, size) {
  if (typeof text !== 'string') throw new TypeError('text must be a string');
  if (!Number.isInteger(size) || size < 1) throw new RangeError('size must be a whole number of at least 1');
  const chars = [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)].map((s) => s.segment);
  const out = [];
  for (let i = 0; i < chars.length; i += size) out.push(chars.slice(i, i + size).join(''));
  return out;
}
