import { useMemo } from "react";
import { useSignals } from "@/features/signals/hooks/useSignals";
import { useSecuritiesList } from "@/features/securities/hooks/useSecuritiesList";
import { mapToTradeCandidates } from "../adapters/mapToTradeCandidates";
import type { SignalDisplay } from "@/features/signals/adapters/mapToSignalDisplay";

function groupSignalsBySecurity(signals: SignalDisplay[]) {
  const grouped = new Map<number, SignalDisplay[]>();
  for (const signal of signals) {
    if (!grouped.has(signal.securityId)) grouped.set(signal.securityId, []);
    grouped.get(signal.securityId)!.push(signal);
  }
  return grouped;
}

export function useTradeCandidates(tradingDay: string) {
  const {
    data: signals = [],
    isLoading,
    isError,
  } = useSignals(tradingDay, tradingDay);

  const groupedSignals = useMemo(
    () => groupSignalsBySecurity(signals),
    [signals],
  );
  const securityIds = useMemo(
    () => Array.from(groupedSignals.keys()),
    [groupedSignals],
  );

  const {
    data: securities = [],
    isLoading: loadingSecurities,
    isError: errorSecurities,
  } = useSecuritiesList(securityIds);

  const candidates = useMemo(
    () => mapToTradeCandidates(groupedSignals, securities),
    [groupedSignals, securities],
  );

  return {
    candidates,
    isLoading: isLoading || loadingSecurities,
    isError: isError || errorSecurities,
  };
}
