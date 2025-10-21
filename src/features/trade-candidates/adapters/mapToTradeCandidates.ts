import type { SignalDisplay } from "@/features/signals/adapters/mapToSignalDisplay";
import type { SecurityDisplay } from "@/features/securities/adapters/mapToDisplayRow";

export type TradeCandidate = {
  security: SecurityDisplay;
  signals: SignalDisplay[];
};

/**
 * Combine grouped signals and securities into TradeCandidates.
 */
export function mapToTradeCandidates(
  groupedSignals: Map<number, SignalDisplay[]>,
  securities: SecurityDisplay[],
): TradeCandidate[] {
  const candidates: TradeCandidate[] = [];

  for (const [securityId, signals] of groupedSignals.entries()) {
    const security = securities.find((s) => s.id === securityId);
    if (!security) continue;

    candidates.push({ security, signals });
  }

  // Optionally sort by something meaningful later
  return candidates;
}
