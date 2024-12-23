import { useState } from 'react';
import { calculateEstimatedFee } from './calculateFee';
import { CalculatorState } from './types';

export function useFeeCalculator() {
  const [state, setState] = useState<CalculatorState>({
    state: 'VA',
    documentType: 'simple',
    spouseIncluded: false,
    minorChildren: 0,
    propertyType: [],
    specialProvisions: []
  });

  const updateField = (field: keyof CalculatorState, value: any) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const calculateFee = () => {
    return calculateEstimatedFee(state);
  };

  return {
    ...state,
    updateField,
    calculateFee
  };
}