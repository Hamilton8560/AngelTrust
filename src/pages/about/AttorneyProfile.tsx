import React from 'react';

export function AttorneyProfile() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="https://www.engellawoffices.com/wp-content/uploads/2022/08/Adam_Engel_Headshot_Trans_2022-1.png"
          alt="Adam Engel"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-navy-900 mb-4">Adam Engel, Esq.</h3>
        <p className="text-gray-600 mb-6">
          With over 15 years of experience in estate planning and elder law, Adam has
          helped hundreds of families protect their assets and secure their legacy.
          His compassionate approach and deep understanding of complex legal matters
          make him a trusted advisor for clients throughout Virginia and DC.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-navy-900">Education</h4>
            <p className="text-gray-600">J.D., Georgetown University Law Center</p>
            <p className="text-gray-600">B.A., University of Virginia</p>
          </div>
          <div>
            <h4 className="font-semibold text-navy-900">Memberships</h4>
            <p className="text-gray-600">Virginia State Bar Association</p>
            <p className="text-gray-600">DC Bar Association</p>
            <p className="text-gray-600">National Association of Estate Planners & Councils</p>
          </div>
        </div>
      </div>
    </div>
  );
}