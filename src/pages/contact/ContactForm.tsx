import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

export function ContactForm() {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Service Interested In
        </label>
        <select
          id="service"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        >
          <option value="">Select a service</option>
          <option value="wills">Last Wills and Testaments</option>
          <option value="living-trusts">Living Trusts</option>
          <option value="special-needs">Special Needs Trusts</option>
          <option value="estate">Estate Administration</option>
          <option value="poa">Powers of Attorney</option>
          <option value="healthcare">Healthcare Directives</option>
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        ></textarea>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-gold-500 text-navy-900 py-3 px-4 rounded-md font-semibold hover:bg-gold-600 transition-colors"
        >
          Schedule Consultation
        </button>
      </div>
    </form>
  );
}