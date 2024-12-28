import React, { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_0pfue5r",
        "template_12iuuhq",
        e.currentTarget,
        "Bycgx2gsb-pDIx8sT"
      );

      console.log("Success:", result.text);
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold text-navy-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700"
        >
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        >
          <option value="">Select a service</option>
          <option value="wills">Last Wills and Testaments</option>
          <option value="living-trusts">Living Trusts</option>
          <option value="special-needs">Special Needs Trusts</option>
          <option value="estate">Estate Administration</option>
          <option value="poa">Powers of Attorney</option>
          <option value="healthcare">Healthcare Directives</option>
        </select>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        ></textarea>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold-500 text-navy-900 py-3 px-4 rounded-md font-semibold hover:bg-gold-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Schedule Consultation"}
        </button>
      </div>
    </form>
  );
}
