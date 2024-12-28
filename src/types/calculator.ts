export type DocumentType =
  | "Simple Will"
  | "Complex Will"
  | "Simple Living Trust"
  | "Complex Living Trust"
  | "Special Designation Trust";

export type SpecialTrustType =
  | "Special Needs Trust"
  | "Irrevocable Life Insurance Trust"
  | "Generation Skipping Trust"
  | "Testamentary Trust"
  | "Qualified Personal Residence Trust"
  | "Grantor Retained Annuity Trust"
  | "Pet Trust"
  | "Other Irrevocable Trust";

export interface CalculatorState {
  state: "VA" | "DC";
  documentType: DocumentType;
  specialTrustType?: SpecialTrustType;
  spouseIncluded: boolean;
  isBlendedFamily: boolean;
  hasDisinheritance: boolean;
  hasCharitableGiving: boolean;
  hasForeignAssets: boolean;
  minorChildren: number;
  numberOfProperties: number;
  hasBusinessInterests: boolean;
  numberOfInvestmentAccounts: number;
  numberOfInsurancePolicies: number;
  specialProvisions: string[];
}
