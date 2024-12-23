import React from 'react';
import { Building } from 'lucide-react';
import { ProcessSteps } from './estate-admin/ProcessSteps';
import { Services } from './estate-admin/Services';
import { CommonChallenges } from './estate-admin/CommonChallenges';

export function EstateAdminDetail() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <Building className="h-10 w-10 text-gold-500 mr-4" />
          <h2 className="text-3xl font-bold text-navy-900">Estate Administration</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Professional guidance through the probate process, ensuring efficient and compliant administration of estates while minimizing stress for families during difficult times.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <ProcessSteps />
          <Services />
        </div>

        <CommonChallenges />

        <div className="text-center">
          <button className="bg-gold-500 text-navy-900 px-8 py-3 rounded-md font-semibold hover:bg-gold-600 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}