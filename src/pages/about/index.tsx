import React from 'react';
import { AttorneyProfile } from './AttorneyProfile';
import { FirmValues } from './FirmValues';
import { Expertise } from './Expertise';
import { SectionHeading } from '../../components/shared/SectionHeading';

export function AboutPage() {
  return (
    <div id="about" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Us"
          subtitle="Dedicated to protecting your legacy and securing your future"
          centered
        />
        <div className="mt-12 space-y-16">
          <AttorneyProfile />
          <FirmValues />
          <Expertise />
        </div>
      </div>
    </div>
  );
}