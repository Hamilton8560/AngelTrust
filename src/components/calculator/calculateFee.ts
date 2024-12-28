import { CalculatorState, DocumentType } from "../../types/calculator";

function isComplexWill(state: CalculatorState): boolean {
  const properties = Number(state.numberOfProperties) || 0;
  const investments = Number(state.numberOfInvestmentAccounts) || 0;
  const children = Number(state.minorChildren) || 0;

  return (
    properties >= 2 ||
    investments >= 3 ||
    children >= 3 ||
    state.hasBusinessInterests ||
    state.isBlendedFamily ||
    state.hasDisinheritance ||
    state.hasCharitableGiving ||
    state.hasForeignAssets
  );
}

function isComplexTrust(state: CalculatorState): boolean {
  const properties = Number(state.numberOfProperties) || 0;
  const investments = Number(state.numberOfInvestmentAccounts) || 0;
  const insurance = Number(state.numberOfInsurancePolicies) || 0;
  const totalAssets = properties + investments + insurance;

  return (
    properties >= 3 ||
    investments >= 4 ||
    insurance >= 3 ||
    state.hasBusinessInterests ||
    totalAssets >= 5
  );
}

function determineDocumentType(state: CalculatorState): DocumentType {
  if (state.documentType === "Special Designation Trust") {
    return "Special Designation Trust";
  }

  if (state.documentType.includes("Will")) {
    return isComplexWill(state) ? "Complex Will" : "Simple Will";
  }

  if (state.documentType.includes("Living Trust")) {
    return isComplexTrust(state)
      ? "Complex Living Trust"
      : "Simple Living Trust";
  }

  return state.documentType as DocumentType;
}

export function calculateEstimatedFee(
  state: CalculatorState
): number | "Contact for Quote" {
  // Return "Contact for Quote" for Special Designation Trusts
  if (state.documentType === "Special Designation Trust") {
    return "Contact for Quote";
  }

  let baseFee = 0;
  const effectiveDocumentType = determineDocumentType(state);

  // Set base fee based on document type
  switch (effectiveDocumentType) {
    case "Simple Will":
      baseFee = 2000;
      break;
    case "Complex Will":
      baseFee = 3000;
      break;
    case "Simple Living Trust":
      baseFee = 3500;
      break;
    case "Complex Living Trust":
      baseFee = 5000;
      break;
  }

  // DC adjustment (15% higher)
  if (state.state === "DC") {
    baseFee *= 1.15;
  }

  // Spouse inclusion (25% increase)
  if (state.spouseIncluded) {
    baseFee *= 1.25;
  }

  // Ensure numeric values are valid numbers or default to 0
  const properties = Number(state.numberOfProperties) || 0;
  const investments = Number(state.numberOfInvestmentAccounts) || 0;
  const insurance = Number(state.numberOfInsurancePolicies) || 0;
  const children = Number(state.minorChildren) || 0;

  // Property additions ($500 per property)
  baseFee += properties * 500;

  // Business interests (50% increase)
  if (state.hasBusinessInterests) {
    baseFee *= 1.5;
  }

  // Investment accounts ($250 each)
  baseFee += investments * 250;

  // Insurance policies ($150 each)
  baseFee += insurance * 150;

  // Minor children ($250 each)
  baseFee += children * 250;

  return Math.round(baseFee);
}
