// A URL-safe slug, Vietnamese diacritics removed: "Xin chào Việt Nam!" gives "xin-chao-viet-nam".
export function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
