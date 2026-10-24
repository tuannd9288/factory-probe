// Milliseconds in a duration written as a number and a unit: "30s", "5m", "2h". NaN when it is not one.
export function parseDuration(text) {
  const m = /^(\d+)(ms|s|m|h)$/.exec(String(text).trim());
  if (!m) return NaN;
  return Number(m[1]) * { ms: 1, s: 1000, m: 60000, h: 3600000 }[m[2]];
}
