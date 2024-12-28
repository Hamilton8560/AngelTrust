import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../../constants/contact";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="Angel Trust"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-semibold">Angel Trust</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Protecting your legacy through expert estate planning in Virginia
              & DC.
            </p>
          </div>

          {/* Contact */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-2 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.link}`}
                  className="hover:text-gold-500"
                >
                  {CONTACT_INFO.phone.display}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-500 mr-2 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-gold-500 break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>{CONTACT_INFO.address.street}</p>
                  <p>{CONTACT_INFO.address.suite}</p>
                  <p>
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}{" "}
                    {CONTACT_INFO.address.zip}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:ml-auto">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-gold-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gold-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-gold-500">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Angel Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
