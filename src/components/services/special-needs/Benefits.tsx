import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Maintain public benefits eligibility',
  'Enhanced quality of life',
  'Protected inheritance',
  'Customized care planning',
  'Tax advantages',
  'Professional oversight'
];

export function Benefits() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Benefits</h3>
      <ul className="space-y-3">
        {benefits.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}