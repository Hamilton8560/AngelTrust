import React from 'react';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-gold-500" />
              <span className="ml-2 text-xl font-semibold">Angel Trust</span>
            </div>
            <p className="text-gray-400">
              Protecting your legacy through expert estate planning in Virginia & DC.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-2" />
                <a href="tel:+12025555555" className="hover:text-gold-500">
                  (202) 555-5555
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-500 mr-2" />
                <a href="mailto:adam@angeltrust.com" className="hover:text-gold-500">
                  adam@angeltrust.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-gold-500 mr-2" />
                <span>Washington, DC & Virginia</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-gold-500">Services</a></li>
              <li><a href="/about" className="hover:text-gold-500">About</a></li>
              <li><a href="/blog" className="hover:text-gold-500">Blog</a></li>
              <li><a href="/contact" className="hover:text-gold-500">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-gold-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gold-500">Terms of Service</a></li>
              <li><a href="/disclaimer" className="hover:text-gold-500">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Angel Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}