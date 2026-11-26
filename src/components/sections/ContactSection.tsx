import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, CheckCircle, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/Timothy-John';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Submission failed. Please try again.');
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#147D86', '#142B4A', '#D6A84B'],
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  const SOCIAL = [
    { href: 'https://www.linkedin.com/in/chikerezejt', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/chikerezejt',              icon: Twitter,  label: 'X (Twitter)' },
    { href: 'https://github.com/Chikerezejt',          icon: Github,   label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#F7F8F5' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#142B4A' }}>
            Get in Touch
          </h2>
          <p className="text-base" style={{ color: '#465466' }}>
            Open to data analyst roles, freelance projects, and collaborative opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10">

          {/* Left — Contact info */}
          <div
            className="rounded-2xl border p-6 flex flex-col gap-6 h-fit"
            style={{ backgroundColor: '#ffffff', borderColor: '#E4E9EC' }}
          >
            <div>
              <p className="font-semibold text-base mb-0.5" style={{ color: '#142B4A' }}>
                Timothy Chikereze John
              </p>
              <p className="text-sm" style={{ color: '#465466' }}>
                Data Analyst · Business Analyst
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: '#147D86' }} aria-hidden="true" />
                <div>
                  <p className="text-sm" style={{ color: '#465466' }}>Owerri, Imo State, Nigeria</p>
                  <p className="text-xs" style={{ color: '#465466' }}>WAT / GMT+1</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: '#147D86' }} aria-hidden="true" />
                <a
                  href="mailto:chikerezejt@gmail.com"
                  className="text-sm transition-colors hover:text-[#147D86]"
                  style={{ color: '#465466' }}
                >
                  chikerezejt@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: '#147D86' }} aria-hidden="true" />
                <a
                  href="tel:+2348106379633"
                  className="text-sm transition-colors hover:text-[#147D86]"
                  style={{ color: '#465466' }}
                >
                  +234 (0) 810 637 9633
                </a>
              </div>
            </div>

            {/* Status */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#22c55e' }} aria-hidden="true" />
              <span className="text-xs font-medium" style={{ color: '#16a34a' }}>
                Open to opportunities
              </span>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: '#E4E9EC' }}>
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-sm transition-colors hover:bg-[#F7F8F5]"
                  style={{ color: '#465466' }}
                >
                  <Icon size={15} style={{ color: '#147D86' }} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div
            className="rounded-2xl border p-6 sm:p-8"
            style={{ backgroundColor: '#ffffff', borderColor: '#E4E9EC' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle size={48} style={{ color: '#147D86' }} aria-hidden="true" />
                <h3 className="text-xl font-bold" style={{ color: '#142B4A' }}>Message sent!</h3>
                <p className="text-sm max-w-sm" style={{ color: '#465466' }}>
                  Thank you for reaching out. Timothy will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" style={{ color: '#142B4A' }} htmlFor="name">
                      Name <span style={{ color: '#ef4444' }} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors"
                      style={{ borderColor: '#E4E9EC', color: '#142B4A' }}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" style={{ color: '#142B4A' }} htmlFor="email">
                      Email <span style={{ color: '#ef4444' }} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors"
                      style={{ borderColor: '#E4E9EC', color: '#142B4A' }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: '#142B4A' }} htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors"
                    style={{ borderColor: '#E4E9EC', color: '#142B4A' }}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: '#142B4A' }} htmlFor="message">
                    Message <span style={{ color: '#ef4444' }} aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell Timothy what you have in mind…"
                    className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors resize-none"
                    style={{ borderColor: '#E4E9EC', color: '#142B4A' }}
                  />
                </div>

                {error && (
                  <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="self-start flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: '#147D86', color: '#fff' }}
                >
                  <Send size={15} aria-hidden="true" />
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
