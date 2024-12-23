import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  'Initial court filing and probate opening',
  'Asset inventory and valuation',
  'Creditor notification and claims period',
  'Tax return preparation and filing',
  'Asset distribution management',
  'Final accounting and estate closing'
];

export function ProcessSteps() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Process Steps</h3>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}