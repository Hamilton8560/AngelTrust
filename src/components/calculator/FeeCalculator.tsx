import React from 'react';
import { CalculatorForm } from './CalculatorForm';
import { EstimatedFee } from './EstimatedFee';
import { useFeeCalculator } from './useFeeCalculator';

export function FeeCalculator() {
  const {
    state,
    documentType,
    spouseIncluded,
    minorChildren,
    propertyType,
    specialProvisions,
    updateField,
    calculateFee
  } = useFeeCalculator();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-navy-900 text-center mb-6">
        Estate Planning Fee Estimator
      </h2>
      
      <CalculatorForm
        state={state}
        documentType={documentType}
        spouseIncluded={spouseIncluded}
        minorChildren={minorChildren}
        propertyType={propertyType}
        specialProvisions={specialProvisions}
        updateField={updateField}
      />

      <EstimatedFee fee={calculateFee()} />
    </div>
  );
}