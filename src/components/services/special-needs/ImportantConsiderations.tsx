import React from 'react';
import { AlertCircle } from 'lucide-react';

const considerations = [
  {
    topic: 'Government Benefits',
    details: 'Understanding how the trust affects SSI, Medicaid, and other benefits'
  },
  {
    topic: 'Trustee Selection',
    details: 'Choosing between family member and professional trustee management'
  },
  {
    topic: 'Distribution Guidelines',
    details: 'Setting clear rules for supplemental needs and quality of life expenses'
  },
  {
    topic: 'Future Planning',
    details: 'Considering long-term care needs and life transitions'
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