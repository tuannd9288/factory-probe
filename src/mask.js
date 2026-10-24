// Hides the middle of a phone number for logs: "0912345678" gives "09******78".
export function maskRecipient(phone) {
  const s = String(phone);
  return s.length <= 4 ? '*'.repeat(s.length) : s.slice(0, 2) + '*'.repeat(s.length - 4) + s.slice(-2);
}
