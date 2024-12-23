import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';

export function ContactInfo() {
  return (
    <div className="bg-navy-900 text-white p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-gold-500 mr-3 mt-1" />
          <div>
            <p className="font-medium">Phone</p>
            <a href={`tel:${CONTACT_INFO.phone.link}`} className="text-gray-300 hover:text-gold-500">
              {CONTACT_INFO.phone.display}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-6 w-6 text-gold-500 mr-3 mt-1" />
          <div>
            <p className="font-medium">Email</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-gold-500">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-gold-500 mr-3 mt-1" />
          <div>
            <p className="font-medium">Office Location</p>
            <p className="text-gray-300">{CONTACT_INFO.address.street}</p>
            <p className="text-gray-300">{CONTACT_INFO.address.suite}</p>
            <p className="text-gray-300">
              {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-6 w-6 text-gold-500 mr-3 mt-1" />
          <div>
            <p className="font-medium">Office Hours</p>
            <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-300">Weekend appointments available upon request</p>
          </div>
        </div>
      </div>
    </div>
  );
}