/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SecurityRead = {
  createdAt?: (string | null);
  updatedAt?: (string | null);
  /**
   * The stock ticker symbol as of the snapshot date
   */
  symbol: string;
  companyName: string;
  /**
   * The Global Industry Classification Standard (GICS) sector for the company
   */
  gicsSector: string;
  /**
   * The GICS sub-industry classification within the sector
   */
  gicsSubIndustry: string;
  /**
   * The Central Index Key (CIK) used by the SEC to uniquely identify corporations and individuals
   */
  cik?: string;
  firstTradeDate?: (string | null);
  exchange?: (string | null);
  region?: string;
  id: number;
};

