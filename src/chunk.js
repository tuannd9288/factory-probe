// Splits text into pieces of at most `size` user-visible characters, never inside an emoji.
export function chunk(text, size) {
  const chars = [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)].map((s) => s.segment);
  const out = [];
  for (let i = 0; i < chars.length; i += size) out.push(chars.slice(i, i + size).join(''));
  return out;
}
