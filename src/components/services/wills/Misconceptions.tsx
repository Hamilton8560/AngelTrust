import React from 'react';
import { AlertCircle } from 'lucide-react';

const misconceptions = [
  'Only wealthy people need wills',
  'Young adults do not need wills',
  'Wills avoid probate completely',
  'Online will makers are just as good as attorneys'
];

export function Misconceptions() {
  return (
    <div className="bg-navy-900 text-white p-6 rounded-lg mb-8">
      <h3 className="text-xl font-semibold mb-4">Common Misconceptions</h3>
      <ul className="space-y-4">
        {misconceptions.map((item, index) => (
          <li key={index} className="flex items-start">
            <AlertCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}