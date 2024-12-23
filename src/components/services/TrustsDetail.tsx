import React from 'react';
import { Shield } from 'lucide-react';
import { KeyFeatures } from './trusts/KeyFeatures';
import { Benefits } from './trusts/Benefits';
import { CommonQuestions } from './trusts/CommonQuestions';

export function TrustsDetail() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <Shield className="h-10 w-10 text-gold-500 mr-4" />
          <h2 className="text-3xl font-bold text-navy-900">Living Trusts</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          A living trust is a powerful estate planning tool that provides privacy, flexibility, and control over your assets during your lifetime and ensures smooth transfer after your passing.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <KeyFeatures />
          <Benefits />
        </div>

        <CommonQuestions />

        <div className="text-center">
          <button className="bg-gold-500 text-navy-900 px-8 py-3 rounded-md font-semibold hover:bg-gold-600 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}