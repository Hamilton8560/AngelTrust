import React from 'react';
import { CheckCircle } from 'lucide-react';

const components = [
  'Asset distribution instructions',
  'Guardian designations for minor children',
  'Executor appointment',
  'Specific bequests and gifts',
  'Tax planning provisions',
  'Funeral and burial preferences'
];

export function KeyComponents() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Components</h3>
      <ul className="space-y-3">
        {components.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}