import React from "react";
import { SpecialTrustType } from "../../types/calculator";
import { trustDescriptions } from "../../utils/trustDescriptions";

interface EstimatedFeeProps {
  fee: number | "Contact for Quote";
  specialTrustType?: SpecialTrustType;
}

export function EstimatedFee({ fee, specialTrustType }: EstimatedFeeProps) {
  if (fee === "Contact for Quote") {
    return (
      <div className="mt-8 p-6 bg-navy-900 rounded-lg text-white">
        <h3 className="text-xl font-bold text-center text-gold-500">
          Schedule a Consultation
        </h3>
        {specialTrustType && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-center text-gold-400">
              {specialTrustType}
            </h4>
            <p className="text-center mt-2 text-gray-300">
              {trustDescriptions[specialTrustType]}
            </p>
          </div>
        )}

        <div className="mt-8 space-y-6">
          {/* Phone Contact Option */}
          <div className="text-center border-t border-b border-gray-700 py-4">
            <p className="text-sm text-gray-300">Call us directly:</p>
            <a
              href="tel:+17037878740"
              className="block mt-2 text-xl font-bold text-gold-500 hover:text-gold-400 transition-colors"
            >
              (703) 223-2170
            </a>
          </div>

          {/* Calendly Option */}
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-3">
              Schedule a consultation:
            </p>
            <a
              href="https://calendly.com/engellawoffice/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-center text-gray-400">
          Our team will work with you to create a customized solution that meets
          your specific needs.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-navy-900 rounded-lg text-white">
      <h3 className="text-xl font-bold text-center text-gold-500">
        Estimated Fee
      </h3>
      <p className="text-3xl text-center mt-2">${fee.toLocaleString()}</p>
      <p className="text-sm text-center mt-2 text-gray-300">
        This is an estimate. Final fees may vary based on specific
        circumstances.
      </p>
    </div>
  );
}
