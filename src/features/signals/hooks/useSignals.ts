import { useQuery } from "@tanstack/react-query";
import { SignalsService } from "@/lib/apiClient";
import { mapToSignalDisplay } from "../adapters/mapToSignalDisplay";

export function useSignals(from?: string, to?: string) {
  return useQuery({
    queryKey: ["signals", from, to],
    queryFn: async () => {
      const data = await SignalsService.listSignalsSignalsGet({ from, to });
      return mapToSignalDisplay(data);
    },
  });
}