/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetricResult } from './MetricResult';
export type FinancialHealth = {
  /**
   * Ticker symbol, e.g. AAPL
   */
  ticker: string;
  /**
   * Full company name
   */
  company_name?: (string | null);
  /**
   * Industry sector classification
   */
  sector?: (string | null);
  /**
   * Market capitalization in USD
   */
  market_cap?: (number | null);
  /**
   * Composite score from 0–6
   */
  financial_score: number;
  /**
   * Letter grade: A (strong), B (moderate), C (weak)
   */
  grade: string;
  /**
   * Each metric’s value and pass/fail result
   */
  metrics: Record<string, MetricResult>;
  /**
   * Trailing EPS
   */
  eps_current?: (number | null);
  /**
   * Forward or prior-year EPS used for growth calculation
   */
  eps_previous?: (number | null);
  /**
   * Year-over-year revenue growth
   */
  revenue_growth_yoy?: (number | null);
  /**
   * Debt-to-equity ratio
   */
  debt_to_equity?: (number | null);
  /**
   * Free cash flow in USD
   */
  free_cash_flow?: (number | null);
  /**
   * Fraction of shares held by institutions
   */
  institutional_ownership?: (number | null);
  /**
   * Trailing P/E ratio
   */
  pe_ratio?: (number | null);
};

