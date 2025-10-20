import type { EODSignalRead } from "@/api/models/EODSignalRead";

export type SignalDisplay = {
  id: number;
  securityId: number;
  strategyName: string;
  signalDate: string;
  score?: number;
  validatedAtOpen?: boolean | null;
  nextOpenPrice?: number | null;
};

export function mapToSignalDisplay(records: EODSignalRead[]): SignalDisplay[] {
  return records.map((r) => ({
    id: r.id,
    securityId: r.securityId,
    strategyName: r.strategyName,
    signalDate: r.signalDate,
    score: r.score,
    validatedAtOpen: r.validatedAtOpen ?? null,
    nextOpenPrice: r.nextOpenPrice ? parseFloat(r.nextOpenPrice) : null,
  }));
}
