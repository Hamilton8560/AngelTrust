import React from 'react';
import { FileCheck } from 'lucide-react';
import { DirectiveTypes } from './healthcare-directives/DirectiveTypes';
import { KeyElements } from './healthcare-directives/KeyElements';
import { PlanningConsiderations } from './healthcare-directives/PlanningConsiderations';

export function HealthcareDirectivesDetail() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <FileCheck className="h-10 w-10 text-gold-500 mr-4" />
          <h2 className="text-3xl font-bold text-navy-900">Healthcare Directives</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Healthcare directives ensure your medical wishes are respected and provide clear guidance to your healthcare team and loved ones when you cannot communicate your preferences.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <DirectiveTypes />
          <KeyElements />
        </div>

        <PlanningConsiderations />

        <div className="text-center">
          <button className="bg-gold-500 text-navy-900 px-8 py-3 rounded-md font-semibold hover:bg-gold-600 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}