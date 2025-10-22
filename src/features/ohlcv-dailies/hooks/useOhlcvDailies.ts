import { useQuery } from "@tanstack/react-query";
import { OhlcvDailiesService } from "@/lib/apiClient";
import type { OHLCVDailyRead } from "@/api/models/OHLCVDailyRead";

/**
 * Fetches OHLCV daily records (raw API data) for a security.
 */
export function useOhlcvDailies(
  securityId: number,
  from?: string,
  to?: string,
) {
  return useQuery<OHLCVDailyRead[]>({
    queryKey: ["ohlcv-dailies", securityId, from, to],
    queryFn: async () => {
      return OhlcvDailiesService.listCandlesOhlcvDailiesSecurityIdGet({
        securityId,
        from,
        to,
      });
    },
    enabled: !!securityId,
  });
}
