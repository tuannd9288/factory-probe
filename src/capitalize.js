// Upper-cases the first letter of every word and keeps the rest: "xin chào" gives "Xin Chào".
export function capitalizeWords(text) {
  return text.replace(/(^|\s)(\p{L})/gu, (_, space, letter) => space + letter.toUpperCase());
}
