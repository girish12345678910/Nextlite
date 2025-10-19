'use client';

import { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xwprzlzv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Thanks for reaching out! We will respond within 24 hours.',
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage({
          type: 'error',
          text: 'Something went wrong. Please try again or email us directly.',
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again or email us directly.',
      });
    }

    setIsSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-2">
          Company *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-semibold mb-2">
          Budget Range *
        </label>
        <select
          id="budget"
          name="budget"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent"
        >
          <option value="">Select budget</option>
          <option value="50k-100k">₹50K - ₹1L</option>
          <option value="100k-250k">₹1L - ₹2.5L</option>
          <option value="250k-500k">₹2.5L - ₹5L</option>
          <option value="500k+">₹5L+</option>
        </select>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold mb-2">
          Service of Interest *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent"
        >
          <option value="">Select service</option>
          <option value="websites">Websites</option>
          <option value="social-media">Social Media Marketing</option>
          <option value="design">Design</option>
          <option value="multiple">Multiple Services</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A3C] focus:border-transparent resize-none"
        />
      </div>

      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 w-4 h-4 text-[#FF5A3C] border-neutral-300 rounded focus:ring-[#FF5A3C]"
          />
          <span className="text-sm text-neutral-700 leading-relaxed">
            I consent to Nextlite collecting and processing my personal data for
            responding to my inquiry, as per India's DPDP Act 2023. I can
            withdraw consent anytime by emailing hello@nextlite.agency. *
          </span>
        </label>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      <Button variant="primary" size="lg" className="w-full">
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
}
