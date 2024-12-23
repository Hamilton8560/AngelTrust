import React, { useState } from 'react';
import { GuideDownloadModal } from '../guides/GuideDownloadModal';

interface GuideButtonProps {
  className?: string;
}

export function GuideButton({ className = '' }: GuideButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-colors font-semibold rounded-md ${className}`}
      >
        Download Free Guide
      </button>
      <GuideDownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}