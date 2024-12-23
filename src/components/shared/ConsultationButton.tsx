import React from 'react';
import { CONTACT_INFO } from '../../constants/contact';

interface ConsultationButtonProps {
  className?: string;
}

export function ConsultationButton({ className = '' }: ConsultationButtonProps) {
  return (
    <a
      href={CONTACT_INFO.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-gold-500 text-navy-900 px-6 py-2 rounded-md font-semibold hover:bg-gold-600 transition-colors ${className}`}
    >
      Free Consultation
    </a>
  );
}