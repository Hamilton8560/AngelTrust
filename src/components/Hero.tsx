import React from 'react';
import { Shield } from 'lucide-react';
import { ConsultationButton } from './shared/ConsultationButton';
import { GuideButton } from './shared/GuideButton';

export function Hero() {
  return (
    <div className="relative bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Shield className="h-16 w-16 text-gold-500 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Secure Your Legacy with Adam Engel
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert estate planning attorney helping you protect your family's future
            through comprehensive wills, trusts, and estate administration services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ConsultationButton className="px-8 py-3" />
            <GuideButton className="px-8 py-3" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}