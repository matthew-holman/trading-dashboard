/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

export type EODSignalRead = {
  createdAt?: string | null;
  updatedAt?: string | null;
  /**
   * Trading day this signal is based on
   */
  signalDate: string;
  /**
   * Strategy that generated the signal
   */
  strategyName: string;
  /**
   * Matches filename, used for loading configs
   */
  strategyId: string;
  securityId: number;
  ohlcvDailyId: number;
  /**
   * raw score from strategy logic before ranking weights
   */
  score?: number;
  /**
   * True/False after open validation; None if not yet validated
   */
  validatedAtOpen?: boolean | null;
  /**
   * Open price used during validation from the NEXT trading session
   */
  nextOpenPrice?: string | null;
  /**
   * List of rule codes that failed during open validation (empty if passed)
   */
  validatedAtOpenFailures?: Array<string>;
  id: number;
};
