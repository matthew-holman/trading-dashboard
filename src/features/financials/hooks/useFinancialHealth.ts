import { useQuery } from "@tanstack/react-query";
import { FinancialsService } from "@/lib/apiClient";
import type { FinancialHealth } from "@/api/models/FinancialHealth";

export function useFinancialHealth(ticker?: string) {
  return useQuery<FinancialHealth>({
    queryKey: ["financial-health", ticker],
    queryFn: async () => {
      if (!ticker) throw new Error("Ticker is required");
      return FinancialsService.getFinancialHealthFinancialsTickerGet({
        ticker,
      });
    },
    enabled: !!ticker,
    staleTime: 1000 * 60 * 60, // cache for 1 hour
  });
}
