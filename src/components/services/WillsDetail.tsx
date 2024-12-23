import React from 'react';
import { Scroll, CheckCircle, AlertCircle } from 'lucide-react';
import { KeyComponents } from './wills/KeyComponents';
import { Importance } from './wills/Importance';
import { Misconceptions } from './wills/Misconceptions';

export function WillsDetail() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <Scroll className="h-10 w-10 text-gold-500 mr-4" />
          <h2 className="text-3xl font-bold text-navy-900">Last Wills and Testaments</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          A last will and testament is the cornerstone of estate planning, ensuring your wishes are carried out and your loved ones are protected after your passing.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <KeyComponents />
          <Importance />
        </div>

        <Misconceptions />

        <div className="text-center">
          <button className="bg-gold-500 text-navy-900 px-8 py-3 rounded-md font-semibold hover:bg-gold-600 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}