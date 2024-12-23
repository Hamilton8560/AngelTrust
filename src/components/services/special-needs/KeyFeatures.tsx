import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'Preserves government benefit eligibility',
  'Supplemental care provisions',
  'Professional trustee options',
  'Flexible distribution guidelines',
  'Long-term care planning',
  'Asset protection mechanisms'
];

export function KeyFeatures() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Features</h3>
      <ul className="space-y-3">
        {features.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}