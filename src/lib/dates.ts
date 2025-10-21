/**
 * Returns the most recent weekday (Mon–Fri) before today.
 * If today is Monday → returns previous Friday.
 */
export function getMostRecentTradingDay(): string {
  const today = new Date();
  const day = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Clone date (avoid mutating "today")
  const d = new Date(today);

  if (day === 0) {
    // Sunday → go back 2 days (Friday)
    d.setDate(today.getDate() - 2);
  } else if (day === 1) {
    // Monday → go back 3 days (Friday)
    d.setDate(today.getDate() - 3);
  } else {
    // Tuesday–Saturday → go back 1 day
    d.setDate(today.getDate() - 1);
  }

  return d.toISOString().slice(0, 10); // "YYYY-MM-DD"
}
