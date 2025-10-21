"use client";

import type { TradeCandidate } from "../adapters/mapToTradeCandidates";

type Props = {
  candidates: TradeCandidate[];
};

export function TradeCandidateList({ candidates }: Props) {
  if (!candidates.length) return <div>No trade candidates found.</div>;

  return (
    <main className="p-6 space-y-6">
      {candidates.map(({ security, signals }) => (
        <section
          key={security.id}
          className="border rounded-xl p-4 bg-muted/20 space-y-3"
        >
          <header>
            <h2 className="text-lg font-semibold">
              {security.symbol} — {security.companyName}
            </h2>
            <p className="text-sm text-muted-foreground">
              {security.gicsSector} · {security.exchange ?? "—"}
            </p>
          </header>

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
        </section>
      ))}
    </main>
  );
}
