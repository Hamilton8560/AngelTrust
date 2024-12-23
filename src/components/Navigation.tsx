import React, { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-gold-500" />
            <span className="ml-2 text-2xl font-semibold text-white">
              Angel Trust
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <button className="bg-gold-500 text-navy-900 px-6 py-2 rounded-md font-semibold hover:bg-gold-600 transition-colors">
              Free Consultation
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-200 hover:text-gold-500 transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-gold-500 transition-colors"
    >
      {children}
    </a>
  );
}