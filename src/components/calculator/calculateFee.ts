import { CalculatorState } from './types';

export function calculateEstimatedFee(state: CalculatorState): number {
  let baseFee = 2000; // Starting price for simple will
  
  // State-specific adjustments
  if (state.state === 'DC') {
    baseFee += 200;
  }
  
  // Document type adjustments
  if (state.documentType === 'complex') {
    baseFee += 1000;
  } else if (state.documentType === 'trust') {
    baseFee += 2500;
  }
  
  // Spouse inclusion
  if (state.spouseIncluded) {
    baseFee += 750;
  }
  
  // Minor children
  baseFee += state.minorChildren * 250;
  
  // Property types
  state.propertyType.forEach(type => {
    switch(type) {
      case 'business':
        baseFee += 1500;
        break;
      case 'realEstate':
        baseFee += 500;
        break;
      case 'investments':
        baseFee += 750;
        break;
    }
  });
  
  // Special provisions
  state.specialProvisions.forEach(provision => {
    switch(provision) {
      case 'special_needs':
        baseFee += 1000;
        break;
      case 'pet_trust':
        baseFee += 500;
        break;
      case 'charitable':
        baseFee += 750;
        break;
    }
  });
  
  return baseFee;
}