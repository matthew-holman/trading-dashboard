/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

export type TechnicalIndicatorRead = {
  createdAt?: string | null;
  updatedAt?: string | null;
  securityId: number;
  measurementDate: string;
  /**
   * 20-day simple moving average of the close price
   */
  sma20?: number | null;
  /**
   * 50-day simple moving average of the close price
   */
  sma50?: number | null;
  /**
   * 200-day simple moving average of the close price
   */
  sma200?: number | null;
  /**
   * 9-day exponential moving average of the close price
   */
  ema9?: number | null;
  /**
   * 20-day exponential moving average of the close price
   */
  ema20?: number | null;
  /**
   * Relative Strength Index computed over a 14-day window
   */
  rsi14?: number | null;
  /**
   * Highest high over the past 10 trading days
   */
  high10d?: number | null;
  /**
   * Lowest low over the past 10 trading days
   */
  low10d?: number | null;
  /**
   * Average trading volume over the past 20 trading days
   */
  avgVol20d?: number | null;
  /**
   * Moving Average Convergence Divergence line: 12-day EMA minus 26-day EMA of close prices
   */
  macd?: number | null;
  /**
   * 9-day EMA of the MACD line
   */
  macdSignal?: number | null;
  /**
   * MACD histogram: MACD line minus signal line
   */
  macdHist?: number | null;
  /**
   * Average True Range computed over 14 days
   */
  atr14?: number | null;
  /**
   * Normalized close position in daily range: (Close - Low) / (High - Low)
   */
  closePosition?: number | null;
  id: number;
};
