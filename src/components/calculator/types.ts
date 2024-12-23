export interface CalculatorState {
  state: string;
  documentType: string;
  spouseIncluded: boolean;
  minorChildren: number;
  propertyType: string[];
  specialProvisions: string[];
}

export interface CalculatorFormProps extends CalculatorState {
  updateField: (field: keyof CalculatorState, value: any) => void;
}