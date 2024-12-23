import React from 'react';

interface EstimatedFeeProps {
  fee: number;
}

export function EstimatedFee({ fee }: EstimatedFeeProps) {
  return (
    <div className="mt-8 p-6 bg-navy-900 rounded-lg text-white">
      <h3 className="text-xl font-bold text-center text-gold-500">Estimated Fee</h3>
      <p className="text-3xl text-center mt-2">${fee.toLocaleString()}</p>
      <p className="text-sm text-center mt-2 text-gray-300">
        This is an estimate. Final fees may vary based on specific circumstances.
      </p>
    </div>
  );
}