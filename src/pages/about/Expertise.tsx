import React from 'react';
import { CheckCircle } from 'lucide-react';

const areas = [
  'Estate Planning',
  'Trust Administration',
  'Probate Law',
  'Elder Law',
  'Asset Protection',
  'Special Needs Planning',
  'Business Succession',
  'Tax Planning'
];

export function Expertise() {
  return (
    <div className="bg-navy-900 text-white rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Areas of Expertise</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map((area, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 flex-shrink-0" />
            <span>{area}</span>
          </div>
        ))}
      </div>
    </div>
  );
}