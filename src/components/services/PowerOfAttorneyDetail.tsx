import React from 'react';
import { FileText } from 'lucide-react';
import { TypesOfPOA } from './power-of-attorney/TypesOfPOA';
import { KeyPowers } from './power-of-attorney/KeyPowers';
import { ImportantConsiderations } from './power-of-attorney/ImportantConsiderations';

export function PowerOfAttorneyDetail() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <FileText className="h-10 w-10 text-gold-500 mr-4" />
          <h2 className="text-3xl font-bold text-navy-900">Powers of Attorney</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          A power of attorney is a crucial legal document that allows you to appoint a trusted individual to make decisions on your behalf when you are unable to do so.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <TypesOfPOA />
          <KeyPowers />
        </div>

        <ImportantConsiderations />

        <div className="text-center">
          <button className="bg-gold-500 text-navy-900 px-8 py-3 rounded-md font-semibold hover:bg-gold-600 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}