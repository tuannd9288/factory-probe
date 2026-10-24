// A sliding-window limit per recipient: at most `limit` sends in `windowMs`.
export function createLimiter({ limit, windowMs, now = () => Date.now() }) {
  const sent = new Map();
  const recentFor = (recipient, t) => (sent.get(recipient) ?? []).filter((at) => t - at < windowMs);
  return {
    allow(recipient) {
      const t = now();
      const recent = recentFor(recipient, t);
      if (recent.length >= limit) {
        sent.set(recipient, recent);
        return false;
      }
      recent.push(t);
      sent.set(recipient, recent);
      return true;
    },
    remaining(recipient) {
      const recent = recentFor(recipient, now());
      return Math.max(0, limit - recent.length);
    },
  };
}
