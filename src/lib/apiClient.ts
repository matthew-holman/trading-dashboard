// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from "axios";
import { OpenAPI } from "@/api/core/OpenAPI";

// Configure base URL once for all generated services
OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

// Optionally customize headers, auth, etc.
OpenAPI.WITH_CREDENTIALS = false;

export {
  OhlcvDailiesService,
  IndicatorsService,
  SecuritiesService,
  SignalsService,
} from "@/api";
