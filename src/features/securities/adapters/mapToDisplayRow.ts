import type { SecurityRead } from "@/api/models/SecurityRead";

export type SecurityDisplay = {
  id: number;
  symbol: string;
  companyName: string;
  gicsSector: string;
  exchange?: string | null;
  region?: string | null;
};

export function mapToDisplayRow(records: SecurityRead[]): SecurityDisplay[] {
  return records.map((r) => ({
    id: r.id,
    symbol: r.symbol,
    companyName: r.companyName,
    gicsSector: r.gicsSector,
    exchange: r.exchange ?? null,
    region: r.region ?? null,
  }));
}
