import React from 'react';
import { CheckCircle } from 'lucide-react';

const elements = [
  'Medical treatment preferences',
  'Pain management directives',
  'Organ donation wishes',
  'Religious considerations',
  'Life support preferences',
  'Quality of life statements'
];

export function KeyElements() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Elements</h3>
      <ul className="space-y-3">
        {elements.map((element, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <span>{element}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}