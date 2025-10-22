"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { TradeCandidate } from "../adapters/mapToTradeCandidates";
import { useOhlcvDailies } from "@/features/ohlcv-dailies/hooks/useOhlcvDailies";
import { useIndicators } from "@/features/indicators/hooks/useIndicators";
import CandleChart from "@/components/charts/CandleChart";
import { mapToCandleSeries } from "@/features/ohlcv-dailies/adapters/mapToCandleSeries";
import { getMostRecentTradingDay, getThreeMonthsAgoIso } from "@/lib/dates";

type Props = {
  candidate: TradeCandidate;
};

export function SecurityDetailPanel({ candidate }: Props) {
  const { security, signals } = candidate;

  const { data: rawCandles = [], isLoading: loadingCandles } = useOhlcvDailies(
    security.id,
    getThreeMonthsAgoIso(),
    getMostRecentTradingDay(),
  );
  const candles = mapToCandleSeries(rawCandles);

  return (
    <Tabs defaultValue="chart" className="h-full flex flex-col">
      <TabsList className="w-full border-b">
        <TabsTrigger value="chart">Chart</TabsTrigger>
        <TabsTrigger value="signals">Signals</TabsTrigger>
        <TabsTrigger value="financials">Financials</TabsTrigger>
      </TabsList>

      <TabsContent value="chart" className="flex-1 p-4 overflow-auto">
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>
              {security.symbol} — {security.companyName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loadingCandles ? (
              <div className="text-muted-foreground">Loading chart...</div>
            ) : (
              <CandleChart candles={candles} height={340} />
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="signals" className="p-4 overflow-auto">
        <Card>
          <CardHeader>
            <CardTitle>Signals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm">
              {signals.map((signal) => (
                <li key={signal.id} className="flex justify-between">
                  <span>{signal.strategyName}</span>
                  <span className="text-muted-foreground">
                    {signal.signalDate} · score{" "}
                    {signal.score?.toFixed?.(2) ?? "—"}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="financials" className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Company Financials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              (Coming soon: fundamentals, ratios, and score)
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
