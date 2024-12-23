import React from 'react';
import { AlertCircle } from 'lucide-react';

const considerations = [
  {
    topic: 'Agent Selection',
    details: 'Choose someone trustworthy and capable of handling responsibilities'
  },
  {
    topic: 'Scope of Powers',
    details: 'Carefully define the extent of authority granted to your agent'
  },
  {
    topic: 'Durability',
    details: 'Decide if powers should continue during incapacity'
  },
  {
    topic: 'Revocation',
    details: 'Understand how and when you can modify or cancel the POA'
  }
];

export function ImportantConsiderations() {
  return (
    <div className="bg-navy-900 text-white p-6 rounded-lg mb-8">
      <h3 className="text-xl font-semibold mb-4">Important Considerations</h3>
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