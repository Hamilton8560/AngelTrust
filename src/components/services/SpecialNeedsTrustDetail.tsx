import React from 'react';
import { Heart } from 'lucide-react';
import { KeyFeatures } from './special-needs/KeyFeatures';
import { Benefits } from './special-needs/Benefits';
import { ImportantConsiderations } from './special-needs/ImportantConsiderations';

export function SpecialNeedsTrustDetail() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <Heart className="h-10 w-10 text-gold-500 mr-4" />
          <h2 className="text-3xl font-bold text-navy-900">Special Needs Trusts</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          A special needs trust ensures your loved one maintains eligibility for essential government benefits while having access to additional resources for an enhanced quality of life.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <KeyFeatures />
          <Benefits />
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