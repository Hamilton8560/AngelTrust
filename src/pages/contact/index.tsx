import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { SectionHeading } from '../../components/shared/SectionHeading';

export function ContactPage() {
  return (
    <div id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Us"
          subtitle="Schedule your free consultation today"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}