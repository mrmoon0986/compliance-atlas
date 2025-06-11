export function evaluateRisk(score) {
  if (score < 3) return 'low';
  if (score < 7) return 'medium';
  return 'high';
}
