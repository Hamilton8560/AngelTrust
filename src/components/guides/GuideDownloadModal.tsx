import React from 'react';
import { X } from 'lucide-react';

interface GuideDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GuideDownloadModal({ isOpen, onClose }: GuideDownloadModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would handle the form submission and trigger the guide download
    window.open('/guides/estate-planning-guide.pdf', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <h3 className="text-2xl font-bold text-navy-900 mb-4">
          Download Our Free Estate Planning Guide
        </h3>
        
        <div className="text-gray-600 mb-6 space-y-2">
          <div>Get instant access to our comprehensive guide covering:</div>
          <div className="ml-6">
            <ul className="list-disc space-y-1">
              <li>Essential estate planning documents</li>
              <li>Common planning mistakes to avoid</li>
              <li>Tax planning strategies</li>
              <li>And much more...</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold-500 text-navy-900 py-2 px-4 rounded-md font-semibold hover:bg-gold-600 transition-colors"
          >
            Download Guide
          </button>

          <p className="text-xs text-gray-500 text-center">
            By downloading, you agree to receive occasional updates about estate planning.
            We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </div>
  );
}