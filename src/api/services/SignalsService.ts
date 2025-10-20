/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { EODSignalRead } from "../models/EODSignalRead";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class SignalsService {
  /**
   * List Signals
   * @returns EODSignalRead Successful Response
   * @throws ApiError
   */
  public static listSignalsSignalsGet({
    from = "2025-10-20",
    to = "2025-10-20",
  }: {
    from?: string;
    to?: string;
  }): CancelablePromise<Array<EODSignalRead>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/signals/",
      query: {
        from: from,
        to: to,
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
