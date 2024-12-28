import React from "react";

export function Disclaimer() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900 mb-8">
        Legal Disclaimer
      </h1>
      <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Legal Disclaimer
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              This website provides general information about estate planning
              and legal services
            </li>
            <li>Information provided is not legal advice</li>
            <li>
              No attorney-client relationship is formed by using this website
            </li>
            <li>Results from our fee calculator are estimates only</li>
            <li>Past results do not guarantee future outcomes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Website Use
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              We strive for accuracy but cannot guarantee the completeness or
              accuracy of all information
            </li>
            <li>
              Links to third-party websites are provided for convenience only
            </li>
            <li>We are not responsible for third-party content or services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Professional Services
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Estate planning needs vary by individual circumstances</li>
            <li>
              Consultation with an attorney is necessary for specific legal
              advice
            </li>
            <li>
              Local laws and regulations may affect the applicability of
              information provided
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Fee Estimates
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Calculated fees are estimates only</li>
            <li>Actual fees may vary based on complexity and circumstances</li>
            <li>
              Final fees will be determined after consultation and formal
              engagement
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700">
            For questions about this disclaimer, please contact:
          </p>
          <div className="mt-4 text-gray-700">
            <p>Adam Engel</p>
            <p>116 Edwards Ferry Rd N.E., Suite R</p>
            <p>Leesburg, VA 20176</p>
            <p>
              Phone:{" "}
              <a
                href="tel:+17032232170"
                className="text-gold-600 hover:text-gold-700"
              >
                (703) 223-2170
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:engel@engellawoffices.com"
                className="text-gold-600 hover:text-gold-700"
              >
                engel@engellawoffices.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
