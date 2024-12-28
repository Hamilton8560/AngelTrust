import React from "react";

export function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900 mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Overview
          </h2>
          <p className="text-gray-700">
            We are committed to protecting your privacy and personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our website and services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-2">
            We collect information that you voluntarily provide to us,
            including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Name, email address, and phone number</li>
            <li>Information provided through our estate planning calculator</li>
            <li>Communications between you and our firm</li>
            <li>Information about your estate planning needs and goals</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-2">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide estate planning services and legal advice</li>
            <li>Respond to your inquiries and communications</li>
            <li>Send relevant updates about our services</li>
            <li>Generate fee estimates through our calculator</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Information Security
          </h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal
            information. However, no internet transmission is completely secure,
            and we cannot guarantee the security of information transmitted
            through our website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-700 mb-2">
            We may use third-party services for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Website hosting</li>
            <li>Email communications</li>
            <li>Appointment scheduling</li>
            <li>Payment processing</li>
          </ul>
          <p className="text-gray-700 mt-2">
            These services may collect information per their own privacy
            policies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-700 mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access your personal information</li>
            <li>Request corrections to your information</li>
            <li>Opt out of marketing communications</li>
            <li>
              Request deletion of your information (subject to legal
              requirements)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700">
            For privacy-related questions, please contact us at{" "}
            <a
              href="mailto:engel@engellawoffices.com"
              className="text-gold-600 hover:text-gold-700"
            >
              engel@engellawoffices.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
