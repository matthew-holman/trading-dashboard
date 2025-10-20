import { useQuery } from "@tanstack/react-query";
import { IndicatorsService } from "@/lib/apiClient";
import { mapToIndicatorSeries } from "../adapters/mapToIndicatorSeries";

export function useIndicators(
  securityId: number,
  params: { from?: string; to?: string; fields: string[] },
) {
  return useQuery({
    queryKey: ["indicators", securityId, params],
    queryFn: async () => {
      const data =
        await IndicatorsService.listIndicatorsIndicatorsSecurityIdGet({
          securityId,
          from: params.from ?? null,
          to: params.to ?? null,
          fields: params.fields ?? null,
        });

      return mapToIndicatorSeries(data, params.fields);
    },
    enabled: !!securityId && params.fields.length > 0,
  });
}
