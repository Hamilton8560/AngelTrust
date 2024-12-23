import React from 'react';
import { ServiceCard } from '../../components/services/ServiceCard';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { FeeCalculator } from '../../components/calculator/FeeCalculator';
import { 
  Scroll, 
  Shield, 
  Heart, 
  Building, 
  FileText, 
  FileCheck 
} from 'lucide-react';

const services = [
  {
    title: "Last Wills and Testaments",
    description: "Ensure your assets are distributed according to your wishes with a legally binding will.",
    Icon: Scroll,
    benefits: [
      "Clear distribution of assets",
      "Guardian designation for minors",
      "Tax-efficient planning",
      "Peace of mind for family"
    ]
  },
  {
    title: "Living Trusts",
    description: "Protect your assets and maintain privacy with a comprehensive living trust.",
    Icon: Shield,
    benefits: [
      "Avoid probate process",
      "Maintain privacy",
      "Flexible asset management",
      "Reduced estate taxes"
    ]
  },
  {
    title: "Special Needs Trusts",
    description: "Secure the future of loved ones with special needs while preserving benefits eligibility.",
    Icon: Heart,
    benefits: [
      "Preserve government benefits",
      "Dedicated care funding",
      "Lifetime support planning",
      "Professional management"
    ]
  },
  {
    title: "Estate Administration",
    description: "Professional guidance through the probate and estate administration process.",
    Icon: Building,
    benefits: [
      "Efficient probate process",
      "Asset distribution",
      "Tax compliance",
      "Debt resolution"
    ]
  },
  {
    title: "Powers of Attorney",
    description: "Designate trusted individuals to make decisions on your behalf when needed.",
    Icon: FileText,
    benefits: [
      "Financial decisions",
      "Medical decisions",
      "Asset management",
      "Emergency planning"
    ]
  },
  {
    title: "Healthcare Directives",
    description: "Ensure your medical wishes are respected with comprehensive advance directives.",
    Icon: FileCheck,
    benefits: [
      "Medical preferences",
      "End-of-life decisions",
      "Family guidance",
      "Healthcare agent designation"
    ]
  }
];

export function ServicesPage() {
  return (
    <div id="services" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive estate planning solutions tailored to your needs"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            title="Fee Calculator"
            subtitle="Get an estimate for your estate planning needs"
            centered
          />
          <div className="max-w-2xl mx-auto mt-8">
            <FeeCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}