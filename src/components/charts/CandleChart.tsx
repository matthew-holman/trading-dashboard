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
import { cn } from "@/lib/utils"; // or write a tiny cn helper; optional

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
  className?: string;
};

export default function CandleChart({ candles, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      autoSize: true,
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#9ca3af",
      },
      grid: {
        vertLines: { color: "#1f2937" },
        horzLines: { color: "#1f2937" },
      },
      timeScale: {
        borderColor: "#374151",
        rightOffset: 5,
        visible: true,
      },
      rightPriceScale: {
        borderColor: "#374151",
        scaleMargins: {
          top: 0.05,
          bottom: 0.05,
        },
      },
      handleScroll: true,
      handleScale: true,
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
    seriesRef.current = candleSeries;

    return () => chart.remove();
  }, []);

  useEffect(() => {
    if (!seriesRef.current || candles.length === 0) return;
    seriesRef.current.setData(candles as CandlestickData[]);
    chartRef.current?.timeScale().fitContent();
  }, [candles]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div ref={containerRef} className="absolute inset-px" />
    </div>
  );
}
