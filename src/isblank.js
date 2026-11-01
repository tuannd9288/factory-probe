// True for null, undefined, or a string that is empty or only whitespace.
export function isBlank(text) {
  return text == null || (typeof text === 'string' && text.trim() === '');
}
