import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ConsultationButton } from './ConsultationButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-navy-900 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo.png" alt="Angel Trust" className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold text-white">Angel Trust</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, 'about')}
              className="text-gray-200 hover:text-gold-500 transition-colors text-sm"
            >
              About
            </a>
            <Link
              to="/blog"
              className="text-gray-200 hover:text-gold-500 transition-colors text-sm"
            >
              Blog
            </Link>
            <ConsultationButton />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/[0.06]">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, 'about')}
              className="block px-3 py-2 text-base text-gray-200 hover:text-gold-500 transition-colors"
            >
              About
            </a>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base text-gray-200 hover:text-gold-500 transition-colors"
            >
              Blog
            </Link>
            <div className="px-3 py-2">
              <ConsultationButton className="w-full text-center" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
