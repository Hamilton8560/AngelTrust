import React from 'react';
import { CheckboxField } from './CheckboxField';

interface SpecialProvisionsFieldProps {
  selected: string[];
  onChange: (value: string[]) => void;
}

export function SpecialProvisionsField({ selected, onChange }: SpecialProvisionsFieldProps) {
  const options = [
    { value: 'special_needs', label: 'Special Needs Trust Provisions' },
    { value: 'pet_trust', label: 'Pet Trust' },
    { value: 'charitable', label: 'Charitable Giving Provisions' }
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
      <label className="block text-sm font-medium text-navy-900 mb-2">Special Provisions</label>
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