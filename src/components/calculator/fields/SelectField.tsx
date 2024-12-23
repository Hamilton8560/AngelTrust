import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

export function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy-900 mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}