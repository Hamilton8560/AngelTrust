import { CalculatorState } from "../../types/calculator";

export interface CalculatorFormProps {
  state: CalculatorState;
  updateField: (field: keyof CalculatorState, value: any) => void;
}
