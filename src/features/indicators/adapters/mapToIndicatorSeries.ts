import type { TechnicalIndicatorRead } from "@/api/models/TechnicalIndicatorRead";

export type IndicatorSeries = Record<string, { time: number; value: number }[]>;

/**
 * Converts TechnicalIndicatorRead[] into per-field time/value series.
 */
export function mapToIndicatorSeries(
  records: TechnicalIndicatorRead[],
  fields: string[],
) {
  const result: Record<string, { time: number; value: number }[]> = {};

  for (const f of fields) result[f] = [];

  for (const r of records) {
    const time = Math.floor(new Date(r.measurementDate).getTime() / 1000);

    for (const f of fields) {
      const value = r[f as keyof TechnicalIndicatorRead];
      if (typeof value === "number") {
        result[f].push({ time, value });
      }
    }
  }

  return result;
}
