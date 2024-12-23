import React from 'react';
import { Heart, Shield, MessageCircle, Scale } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We understand the emotional nature of estate planning and provide caring guidance.'
  },
  {
    icon: Shield,
    title: 'Protection',
    description: 'Your family\'s security and financial well-being are our top priorities.'
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description: 'We ensure you understand every aspect of your estate plan through clear communication.'
  },
  {
    icon: Scale,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards and always put our clients\' interests first.'
  }
];

export function FirmValues() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">Our Values</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="text-center">
            <value.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h4>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}