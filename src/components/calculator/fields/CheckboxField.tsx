import React from 'react';

interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function CheckboxField({ label, checked, onChange }: CheckboxFieldProps) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded border-gray-300 text-gold-500 focus:ring-gold-500"
      />
      <span className="text-sm font-medium text-navy-900">{label}</span>
    </label>
  );
}