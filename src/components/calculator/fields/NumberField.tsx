import React from 'react';

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function NumberField({ label, value, onChange }: NumberFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy-900 mb-2">{label}</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        className="w-full p-2 border border-gray-300 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
      />
    </div>
  );
}