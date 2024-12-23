import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Prevent intestate succession',
  'Protect minor children',
  'Minimize family conflicts',
  'Reduce estate taxes',
  'Ensure asset distribution',
  'Peace of mind'
];

export function Importance() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Why It's Important</h3>
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