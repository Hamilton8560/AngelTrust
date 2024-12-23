import React from 'react';
import { CheckCircle } from 'lucide-react';

const powers = [
  'Financial transactions and banking',
  'Real estate management',
  'Business operations',
  'Tax matters and filing',
  'Healthcare decisions',
  'Asset management'
];

export function KeyPowers() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Powers Granted</h3>
      <ul className="space-y-3">
        {powers.map((power, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <span>{power}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}