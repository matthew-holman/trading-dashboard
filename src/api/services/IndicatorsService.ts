/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { TechnicalIndicatorRead } from "../models/TechnicalIndicatorRead";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class IndicatorsService {
  /**
   * List Indicators
   * @returns TechnicalIndicatorRead Successful Response
   * @throws ApiError
   */
  public static listIndicatorsIndicatorsSecurityIdGet({
    securityId,
    from,
    to,
    fields,
  }: {
    securityId: number;
    from?: string | null;
    to?: string | null;
    fields?: Array<string> | null;
  }): CancelablePromise<Array<TechnicalIndicatorRead>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/indicators/{security_id}",
      path: {
        security_id: securityId,
      },
      query: {
        from: from,
        to: to,
        fields: fields,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        422: `Validation Error`,
      },
    });
  }
}
