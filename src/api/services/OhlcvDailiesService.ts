/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OHLCVDailyRead } from '../models/OHLCVDailyRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OhlcvDailiesService {
  /**
   * List Candles
   * @returns OHLCVDailyRead Successful Response
   * @throws ApiError
   */
  public static listCandlesOhlcvDailiesSecurityIdGet({
    securityId,
    from = '2025-10-17',
    to = '2025-10-17',
  }: {
    securityId: number,
    from?: string,
    to?: string,
  }): CancelablePromise<Array<OHLCVDailyRead>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/ohlcv_dailies/{security_id}',
      path: {
        'security_id': securityId,
      },
      query: {
        'from': from,
        'to': to,
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
