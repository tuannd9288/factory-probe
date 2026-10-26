// Chữ cái đầu của mỗi từ, viết hoa: "Nguyễn Văn Tuấn" cho "NVT".
export function initials(name) {
  return name.trim().split(/\s+/).map((word) => word[0].toUpperCase()).join('');
}
