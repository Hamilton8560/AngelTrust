import React from 'react';
import { CheckCircle } from 'lucide-react';

const types = [
  {
    name: 'Living Will',
    description: 'Specifies end-of-life care preferences'
  },
  {
    name: 'Healthcare Power of Attorney',
    description: 'Designates someone to make medical decisions'
  },
  {
    name: 'HIPAA Authorization',
    description: 'Allows access to medical information'
  },
  {
    name: 'DNR Orders',
    description: 'Specific instructions for resuscitation'
  }
];

export function DirectiveTypes() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-navy-900 mb-4">Types of Directives</h3>
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