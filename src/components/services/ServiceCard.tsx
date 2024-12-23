import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { WillsDetail } from './WillsDetail';
import { TrustsDetail } from './TrustsDetail';
import { SpecialNeedsTrustDetail } from './SpecialNeedsTrustDetail';
import { EstateAdminDetail } from './EstateAdminDetail';
import { PowerOfAttorneyDetail } from './PowerOfAttorneyDetail';
import { HealthcareDirectivesDetail } from './HealthcareDirectivesDetail';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  benefits: string[];
}

export function ServiceCard({ title, description, Icon, benefits }: ServiceCardProps) {
  const [showDetail, setShowDetail] = useState(false);
  
  const handleLearnMore = () => {
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
  };

  const getDetailComponent = () => {
    switch (title) {
      case "Last Wills and Testaments":
        return <WillsDetail />;
      case "Living Trusts":
        return <TrustsDetail />;
      case "Special Needs Trusts":
        return <SpecialNeedsTrustDetail />;
      case "Estate Administration":
        return <EstateAdminDetail />;
      case "Powers of Attorney":
        return <PowerOfAttorneyDetail />;
      case "Healthcare Directives":
        return <HealthcareDirectivesDetail />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <Icon className="h-12 w-12 text-gold-500 mb-4" />
        <h3 className="text-2xl font-semibold text-navy-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gold-500 mr-2">•</span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={handleLearnMore}
          className="mt-6 w-full bg-navy-900 text-white py-2 rounded hover:bg-navy-800 transition-colors"
        >
          Learn More
        </button>
      </div>

      {showDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {getDetailComponent()}
          </div>
        </div>
      )}
    </>
  );
}