"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { TradeCandidate } from "../adapters/mapToTradeCandidates";
import { useOhlcvDailies } from "@/features/ohlcv-dailies/hooks/useOhlcvDailies";
import { mapToCandleSeries } from "@/features/ohlcv-dailies/adapters/mapToCandleSeries";
import CandleChart from "@/components/charts/CandleChart";
import { getMostRecentTradingDay } from "@/lib/dates";
import { useFinancialHealth } from "@/features/financials/hooks/useFinancialHealth";
import {
  formatNumber,
  formatPercent,
} from "@/features/financials/adapters/formatFinancials";

function getThreeMonthsAgoIso(fromDate: string): string {
  const d = new Date(fromDate);
  d.setMonth(d.getMonth() - 3);
  return d.toISOString().split("T")[0];
}

type Props = { candidate: TradeCandidate };

export function SecurityDetailPanel({ candidate }: Props) {
  const { security, signals } = candidate;

  const mostRecentDay = getMostRecentTradingDay();
  const threeMonthsAgo = getThreeMonthsAgoIso(mostRecentDay);

  const { data: rawCandles = [], isLoading: loadingCandles } = useOhlcvDailies(
    security.id,
    threeMonthsAgo,
    mostRecentDay,
  );

  const candles = mapToCandleSeries(rawCandles);

  const {
    data: financials,
    isLoading: loadingFinancials,
    isError: errorFinancials,
  } = useFinancialHealth(security.symbol);

  return (
    <div className="h-full overflow-auto p-4 space-y-6">
      {/* --- Signals Card --- */}
      <Card>
        <CardHeader>
          <CardTitle>Signals</CardTitle>
        </CardHeader>
        <CardContent>
          {signals.length === 0 ? (
            <div className="text-muted-foreground text-sm">
              No signals available
            </div>
          ) : (
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
          )}
        </CardContent>
      </Card>

      {/* --- Chart Card --- */}
      <Card className="h-[420px] overflow-hidden">
        <CardHeader>
          <CardTitle>
            {security.symbol} — {security.companyName}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5">
          {loadingCandles ? (
            <div className="text-muted-foreground">Loading chart...</div>
          ) : (
            <CandleChart candles={candles} className="h-[350px]" />
          )}
        </CardContent>
      </Card>

      {/* --- Financials Card --- */}
      <Card>
        <CardHeader>
          <CardTitle>Company Financials</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          {loadingFinancials && (
            <div className="text-muted-foreground">Loading financial data…</div>
          )}

          {errorFinancials && (
            <div className="text-destructive">
              Failed to load financial data.
            </div>
          )}

          {financials && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Score</span>
                <span className="font-semibold">
                  {financials.financial_score}/6 ({financials.grade})
                </span>
              </div>
              <div className="flex justify-between">
                <span>Market Cap</span>
                <span>{formatNumber(financials.market_cap, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>P/E Ratio</span>
                <span>{formatNumber(financials.pe_ratio)}</span>
              </div>
              <div className="flex justify-between">
                <span>Revenue Growth (YoY)</span>
                <span>{formatPercent(financials.revenue_growth_yoy)}</span>
              </div>
              <div className="flex justify-between">
                <span>Debt / Equity</span>
                <span>{formatNumber(financials.debt_to_equity)}</span>
              </div>
              <div className="flex justify-between">
                <span>Free Cash Flow</span>
                <span>{formatNumber(financials.free_cash_flow, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Institutional Ownership</span>
                <span>{formatPercent(financials.institutional_ownership)}</span>
              </div>
            </div>
          )}

          {!loadingFinancials && !financials && !errorFinancials && (
            <div className="text-muted-foreground">
              No financial data available.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
