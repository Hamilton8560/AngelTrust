import React from 'react';
import { AlertCircle } from 'lucide-react';

const challenges = [
  {
    issue: 'Complex Assets',
    solution: 'Expert valuation and management of diverse property types'
  },
  {
    issue: 'Family Disputes',
    solution: 'Professional mediation and clear communication channels'
  },
  {
    issue: 'Tax Complications',
    solution: 'Strategic tax planning and compliance management'
  },
  {
    issue: 'Creditor Claims',
    solution: 'Systematic review and resolution of estate debts'
  }
];

export function CommonChallenges() {
  return (
    <div className="bg-navy-900 text-white p-6 rounded-lg mb-8">
      <h3 className="text-xl font-semibold mb-4">Common Challenges & Solutions</h3>
      <div className="space-y-4">
        {challenges.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">{item.issue}</p>
                <p className="text-gray-300">{item.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}