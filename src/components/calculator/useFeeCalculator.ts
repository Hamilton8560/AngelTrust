import { useState } from "react";
import { calculateEstimatedFee } from "./calculateFee";
import {
  CalculatorState,
  DocumentType,
  SpecialTrustType,
} from "../../types/calculator";

export function useFeeCalculator() {
  const [state, setState] = useState<CalculatorState>({
    state: "VA",
    documentType: "Simple Will",
    spouseIncluded: false,
    minorChildren: 0,
    numberOfProperties: 0,
    hasBusinessInterests: false,
    numberOfInvestmentAccounts: 0,
    numberOfInsurancePolicies: 0,
    specialProvisions: [],
    isBlendedFamily: false,
    hasDisinheritance: false,
    hasCharitableGiving: false,
    hasForeignAssets: false,
  });

  const updateField = (field: keyof CalculatorState, value: any) => {
    setState((prev) => {
      const newState = { ...prev, [field]: value };

      // Reset special trust type if document type changes
      if (field === "documentType" && value !== "Special Designation Trust") {
        newState.specialTrustType = undefined;
      }

      // Reset trust-specific fields if changing away from Living Trust
      if (field === "documentType" && !value.includes("Living Trust")) {
        newState.numberOfProperties = 0;
        newState.hasBusinessInterests = false;
        newState.numberOfInvestmentAccounts = 0;
        newState.numberOfInsurancePolicies = 0;
      }

      // Reset will-specific fields if changing away from Will
      if (field === "documentType" && !value.includes("Will")) {
        newState.isBlendedFamily = false;
        newState.hasDisinheritance = false;
        newState.hasCharitableGiving = false;
        newState.hasForeignAssets = false;
      }

      return newState;
    });
  };

  return {
    state,
    updateField,
    calculateFee: () => calculateEstimatedFee(state),
  };
}
