import { useQuery } from "@tanstack/react-query";
import { SecuritiesService } from "@/lib/apiClient";

export function useSecurity(securityId?: number) {
  return useQuery({
    queryKey: ["security", securityId],
    queryFn: async () => {
      if (!securityId) return null;
      return SecuritiesService.getSecuritySecuritiesSecurityIdGet({ securityId });
    },
    enabled: !!securityId,
  });
}