import React from 'react';
import { AlertCircle } from 'lucide-react';

const considerations = [
  {
    topic: 'Agent Selection',
    details: 'Choose someone who understands and will honor your wishes'
  },
  {
    topic: 'Medical Values',
    details: 'Clearly document your healthcare beliefs and preferences'
  },
  {
    topic: 'Regular Updates',
    details: 'Review and update as medical conditions change'
  },
  {
    topic: 'Accessibility',
    details: 'Ensure documents are readily available to healthcare providers'
  }
];

export function PlanningConsiderations() {
  return (
    <div className="bg-navy-900 text-white p-6 rounded-lg mb-8">
      <h3 className="text-xl font-semibold mb-4">Planning Considerations</h3>
      <div className="space-y-4">
        {considerations.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">{item.topic}</p>
                <p className="text-gray-300">{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}