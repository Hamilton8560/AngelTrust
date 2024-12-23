import React from 'react';
import { CheckCircle } from 'lucide-react';

const services = [
  'Probate court representation',
  'Asset and liability management',
  'Tax compliance and filing',
  'Beneficiary communications',
  'Creditor claim resolution',
  'Final distribution oversight'
];

export function Services() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Services</h3>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}