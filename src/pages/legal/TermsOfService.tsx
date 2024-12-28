import React from "react";

export function TermsOfService() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900 mb-8">
        Terms of Service
      </h1>
      <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Agreement to Terms
          </h2>
          <p className="text-gray-700">
            By accessing our website and using our services, you agree to these
            Terms of Service. If you disagree with any part of these terms,
            please do not use our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Services
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              We provide estate planning legal services and related
              consultations
            </li>
            <li>
              Our fee calculator provides estimates only and does not constitute
              a binding agreement
            </li>
            <li>Actual fees may vary based on specific circumstances</li>
            <li>
              No attorney-client relationship is formed until a formal
              engagement agreement is signed
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            User Responsibilities
          </h2>
          <p className="text-gray-700 mb-2">You agree to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide accurate information</li>
            <li>Use our services lawfully</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Notify us of any unauthorized access</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Intellectual Property
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>All content on this website is our property</li>
            <li>You may not use our content without express permission</li>
            <li>Our name, logo, and trademarks are protected</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Limitation of Liability
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We provide our services "as is" without warranties</li>
            <li>
              We are not liable for indirect, consequential, or incidental
              damages
            </li>
            <li>Our total liability shall not exceed fees paid for services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Modifications
          </h2>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. Continued
            use of our services constitutes acceptance of modified terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700">
            For questions about these terms, please contact us at{" "}
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
