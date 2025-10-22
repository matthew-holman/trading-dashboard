import type { BusinessDay } from "lightweight-charts";
import type { OHLCVDailyRead } from "@/api/models/OHLCVDailyRead";
import type { CandleSeriesPoint } from "@/components/charts/CandleChart";

function toBusinessDay(dateStr: string): BusinessDay {
  const [year, month, day] = dateStr.split("-").map(Number);
  return { year, month, day };
}

export function mapToCandleSeries(data: OHLCVDailyRead[]): CandleSeriesPoint[] {
  return data
    .filter((c) => !!c.candleDate)
    .map((c) => ({
      time: toBusinessDay(c.candleDate),
      open: parseFloat(c.open),
      high: parseFloat(c.high),
      low: parseFloat(c.low),
      close: parseFloat(c.close),
      volume: c.volume,
    }));
}
