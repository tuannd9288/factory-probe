// A sliding-window limit per recipient: at most `limit` sends in `windowMs`.
export function createLimiter({ limit, windowMs, now = () => Date.now() }) {
  if (!Number.isInteger(limit) || limit < 1) throw new RangeError('limit must be a positive integer');
  const sent = new Map();
  return {
    allow(recipient) {
      const t = now();
      const recent = (sent.get(recipient) ?? []).filter((at) => t - at < windowMs);
      if (recent.length >= limit) {
        sent.set(recipient, recent);
        return false;
      }
      recent.push(t);
      sent.set(recipient, recent);
      return true;
    },
    remaining(recipient) {
      const t = now();
      const recent = (sent.get(recipient) ?? []).filter((at) => t - at < windowMs);
      return Math.max(0, limit - recent.length);
    },
    reset(recipient) {
      sent.delete(recipient);
    },
  };
}
