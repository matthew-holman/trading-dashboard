import { useQuery } from "@tanstack/react-query";
import { SecuritiesService } from "@/lib/apiClient";
import { mapToDisplayRow } from "../adapters/mapToDisplayRow";

export function useSecuritiesList(ids?: number[]) {
  return useQuery({
    queryKey: ["securities", ids],
    queryFn: async () => {
      const data = await SecuritiesService.listSecuritiesSecuritiesGet({
        ids: ids ?? null,
      });
      return mapToDisplayRow(data);
    },
  });
}