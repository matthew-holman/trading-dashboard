import { useQuery } from "@tanstack/react-query";
import { OhlcvDailiesService } from "@/lib/apiClient";
import { mapToChartData } from "../adapters/mapToChartData";

/**
 * Fetches and caches OHLCV daily candles for a given security.
 *
 * @param securityId - ID of the security in the database
 * @param from - Optional ISO date string (inclusive)
 * @param to - Optional ISO date string (inclusive)
 */
export function useOhlcvDailies(securityId: number, from?: string, to?: string) {
  return useQuery({
    queryKey: ["ohlcv-dailies", securityId, from, to],
    queryFn: async () => {
      const data = await OhlcvDailiesService.listCandlesOhlcvDailiesSecurityIdGet({
        securityId,
        from,
        to,
      });

      return mapToChartData(data);
    },
    enabled: !!securityId,
  });
}