import React from 'react';
import { SelectField } from './fields/SelectField';
import { CheckboxField } from './fields/CheckboxField';
import { NumberField } from './fields/NumberField';
import { PropertyTypeField } from './fields/PropertyTypeField';
import { SpecialProvisionsField } from './fields/SpecialProvisionsField';
import { CalculatorFormProps } from './types';

export function CalculatorForm({
  state,
  documentType,
  spouseIncluded,
  minorChildren,
  propertyType,
  specialProvisions,
  updateField
}: CalculatorFormProps) {
  return (
    <div className="space-y-6">
      <SelectField
        label="State"
        value={state}
        onChange={(value) => updateField('state', value)}
        options={[
          { value: 'VA', label: 'Virginia' },
          { value: 'DC', label: 'Washington DC' }
        ]}
      />

      <SelectField
        label="Document Type"
        value={documentType}
        onChange={(value) => updateField('documentType', value)}
        options={[
          { value: 'simple', label: 'Simple Will' },
          { value: 'complex', label: 'Complex Will' },
          { value: 'trust', label: 'Living Trust' }
        ]}
      />

      <CheckboxField
        label="Include Spouse"
        checked={spouseIncluded}
        onChange={(checked) => updateField('spouseIncluded', checked)}
      />

      <NumberField
        label="Number of Minor Children"
        value={minorChildren}
        onChange={(value) => updateField('minorChildren', value)}
      />

      <PropertyTypeField
        selected={propertyType}
        onChange={(value) => updateField('propertyType', value)}
      />

      <SpecialProvisionsField
        selected={specialProvisions}
        onChange={(value) => updateField('specialProvisions', value)}
      />
    </div>
  );
}