import React from 'react';
import { CheckCircle } from 'lucide-react';

const types = [
  {
    name: 'General Power of Attorney',
    description: 'Broad authority over financial and legal matters'
  },
  {
    name: 'Limited Power of Attorney',
    description: 'Specific powers for particular transactions'
  },
  {
    name: 'Durable Power of Attorney',
    description: 'Remains valid if you become incapacitated'
  },
  {
    name: 'Medical Power of Attorney',
    description: 'Healthcare decisions when you cannot make them'
  }
];

export function TypesOfPOA() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Types of POA</h3>
      <ul className="space-y-4">
        {types.map((type, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium">{type.name}</span>
              <p className="text-gray-600 text-sm">{type.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}