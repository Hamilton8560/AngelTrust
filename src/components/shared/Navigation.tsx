import React, { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { ConsultationButton } from './ConsultationButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      // After navigation, we'll need to wait for the component to mount
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

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
            <NavLink onClick={(e) => handleNavigation(e, 'hero')}>Home</NavLink>
            <NavLink onClick={(e) => handleNavigation(e, 'services')}>Services</NavLink>
            <NavLink onClick={(e) => handleNavigation(e, 'about')}>About</NavLink>
            <Link to="/blog" className="text-gray-200 hover:text-gold-500 transition-colors">Blog</Link>
            <NavLink onClick={(e) => handleNavigation(e, 'contact')}>Contact</NavLink>
            <ConsultationButton />
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
            <MobileNavLink href="/" onClick={(e) => handleNavigation(e, 'hero')}>Home</MobileNavLink>
            <MobileNavLink href="/services" onClick={(e) => handleNavigation(e, 'services')}>Services</MobileNavLink>
            <MobileNavLink href="/about" onClick={(e) => handleNavigation(e, 'about')}>About</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            <MobileNavLink href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</MobileNavLink>
            <div className="px-3 py-2">
              <ConsultationButton className="w-full text-center" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ children, onClick }: { children: React.ReactNode; onClick: (e: React.MouseEvent) => void }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className="text-gray-200 hover:text-gold-500 transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-gold-500 transition-colors"
    >
      {children}
    </a>
  );
}