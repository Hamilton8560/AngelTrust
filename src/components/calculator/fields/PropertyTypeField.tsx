import React from 'react';
import { CheckboxField } from './CheckboxField';

interface PropertyTypeFieldProps {
  selected: string[];
  onChange: (value: string[]) => void;
}

export function PropertyTypeField({ selected, onChange }: PropertyTypeFieldProps) {
  const options = [
    { value: 'business', label: 'Business Ownership' },
    { value: 'realEstate', label: 'Real Estate' },
    { value: 'investments', label: 'Investment Portfolios' }
  ];

  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...selected, value]);
    } else {
      onChange(selected.filter(item => item !== value));
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-navy-900 mb-2">Property Types</label>
      <div className="space-y-2">
        {options.map((option) => (
          <CheckboxField
            key={option.value}
            label={option.label}
            checked={selected.includes(option.value)}
            onChange={(checked) => handleChange(option.value, checked)}
          />
        ))}
      </div>
    </div>
  );
}