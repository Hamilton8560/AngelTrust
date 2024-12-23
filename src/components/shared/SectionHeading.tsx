import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
}