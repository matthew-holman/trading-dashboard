export function formatNumber(value?: number | null, decimals = 2): string {
  if (value == null) return "—";
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatPercent(value?: number | null): string {
  if (value == null) return "—";
  return `${(value * 100).toFixed(1)}%`;
}
