/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinancialHealth } from '../models/FinancialHealth';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FinancialsService {
  /**
   * Get Financial Health
   * @returns FinancialHealth Successful Response
   * @throws ApiError
   */
  public static getFinancialHealthFinancialsTickerGet({
    ticker,
  }: {
    ticker: string,
  }): CancelablePromise<FinancialHealth> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/financials/{ticker}',
      path: {
        'ticker': ticker,
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
