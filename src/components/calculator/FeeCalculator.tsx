import React from "react";
import { CalculatorForm } from "./CalculatorForm";
import { EstimatedFee } from "./EstimatedFee";
import { useFeeCalculator } from "./useFeeCalculator";

export function FeeCalculator() {
  const { state, updateField, calculateFee } = useFeeCalculator();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-navy-900 text-center mb-6">
        Estate Planning Fee Estimator
      </h2>

      <CalculatorForm state={state} updateField={updateField} />

      <EstimatedFee
        fee={calculateFee()}
        specialTrustType={state.specialTrustType}
      />

      {state.documentType === "Special Designation Trust" &&
        !state.specialTrustType && (
          <p className="mt-4 text-sm text-gray-600 text-center">
            Please select a specific trust type to request a quote.
          </p>
        )}
    </div>
  );
}
