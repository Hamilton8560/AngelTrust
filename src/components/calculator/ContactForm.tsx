import React, { useState } from "react";
import { SpecialTrustType } from "../../types/calculator";
import { trustDescriptions } from "../../utils/trustDescriptions";

interface ContactFormProps {
  trustType: SpecialTrustType;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone";
  message: string;
}

export function ContactForm({ trustType }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    message: `I'm interested in learning more about setting up a ${trustType}.`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <p className="text-sm text-gray-300 mt-2 mb-6">
        {trustDescriptions[trustType]}
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Contact Method
          </label>
          <select
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Information
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
            placeholder="Please provide any additional details that would help us understand your needs better."
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors"
          >
            Request Quote
          </button>
        </div>
      </form>
    </>
  );
}
