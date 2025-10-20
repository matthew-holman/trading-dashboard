import type { OHLCVDailyRead } from "@/api/models/OHLCVDailyRead";

/**
 * Converts API OhlcvDaily[] to chart-friendly data.
 * Lightweight Charts expects epoch seconds for `time`.
 */
export function mapToChartData(records: OHLCVDailyRead[]) {
  return records.map(r => ({
    time: Math.floor(new Date(r.candleDate).getTime() / 1000),
    open: parseFloat(r.open),
    high: parseFloat(r.high),
    low: parseFloat(r.low),
    close: parseFloat(r.close),
    adjustedClose: parseFloat(r.adjustedClose),
    volume: r.volume,
  }));
}

export type ChartCandle = ReturnType<typeof mapToChartData>[number];