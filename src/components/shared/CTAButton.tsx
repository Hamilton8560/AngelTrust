import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function CTAButton({ 
  children, 
  variant = 'primary', 
  onClick,
  className = ''
}: CTAButtonProps) {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition-colors";
  const variants = {
    primary: "bg-gold-500 text-navy-900 hover:bg-gold-600",
    secondary: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}