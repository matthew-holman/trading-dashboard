"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  ColorType,
  CandlestickSeries,
  type CandlestickSeriesPartialOptions,
  type CandlestickData,
  type BusinessDay,
  type IChartApi,
  type ISeriesApi,
} from "lightweight-charts";

/** Chart-ready candle point (already transformed) */
export type CandleSeriesPoint = {
  time: BusinessDay;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
};

type Props = {
  candles: CandleSeriesPoint[];
  height?: number;
};

export default function CandleChart({ candles, height = 400 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi>();
  const candleSeriesRef = useRef<ISeriesApi<"Candlestick">>();

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      height,
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#9ca3af",
      },
      grid: {
        vertLines: { color: "#1f2937" },
        horzLines: { color: "#1f2937" },
      },
      timeScale: { borderColor: "#374151" },
      rightPriceScale: { borderColor: "#374151" },
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      borderUpColor: "#22c55e",
      wickUpColor: "#22c55e",
      downColor: "#ef4444",
      borderDownColor: "#ef4444",
      wickDownColor: "#ef4444",
    } satisfies CandlestickSeriesPartialOptions);

    chartRef.current = chart;
    candleSeriesRef.current = candleSeries;

    const resize = () =>
      chart.applyOptions({ height: containerRef.current?.clientHeight });
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      chart.remove();
    };
  }, [height]);

  // update chart data when candles change
  useEffect(() => {
    if (!candleSeriesRef.current || candles.length === 0) return;
    candleSeriesRef.current.setData(candles as CandlestickData[]);
    chartRef.current?.timeScale().fitContent();
  }, [candles]);

  return <div ref={containerRef} className="w-full" style={{ height }} />;
}
