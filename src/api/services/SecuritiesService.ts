/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { SecurityRead } from "../models/SecurityRead";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class SecuritiesService {
  /**
   * List Securities
   * @returns SecurityRead Successful Response
   * @throws ApiError
   */
  public static listSecuritiesSecuritiesGet({
    ids,
  }: {
    ids?: Array<number> | null;
  }): CancelablePromise<Array<SecurityRead>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/securities/",
      query: {
        ids: ids,
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
  /**
   * Get Security
   * @returns SecurityRead Successful Response
   * @throws ApiError
   */
  public static getSecuritySecuritiesSecurityIdGet({
    securityId,
  }: {
    securityId: number;
  }): CancelablePromise<SecurityRead> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/securities/{security_id}",
      path: {
        security_id: securityId,
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
