"use client";

import { useTradeCandidates } from "@/features/trade-candidates/hooks/useTradeCandidates";
import { TradeCandidateList } from "@/features/trade-candidates/components/TradeCandidateList";

export default function DashboardPage() {
  const tradingDay = "2025-10-20"; // later: dynamic or derived from backend
  const { candidates, isLoading, isError } = useTradeCandidates(tradingDay);

  if (isLoading) return <div>Loading trade candidates...</div>;
  if (isError) return <div>Error loading data</div>;

  return <TradeCandidateList candidates={candidates} />;
}
