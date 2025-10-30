"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this to an API endpoint
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border/30" style={{ paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="mx-auto text-center px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-wide)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="decorative-line mb-10" />
              <h1 className="font-serif mb-10 lg:mb-12 px-4">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl lg:text-[1.4rem] text-muted mx-auto leading-[1.7] font-light px-4" style={{ maxWidth: 'var(--max-width-text)' }}>
                Inquiries about artwork, exhibitions, or collaborations are always welcome
              </p>
            </motion.div>
          </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-5xl)' }}>
          <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-content)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32">
            {/* Contact Information */}
            <motion.div {...fadeInUp}>
              <div className="decorative-line-left mb-8" />
              <h2 className="font-serif mb-12">
                Contact Information
              </h2>

              <div className="space-y-10 mb-12">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted mb-3 font-semibold">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@mistie.art"
                    className="text-lg md:text-xl text-foreground hover:text-accent transition-colors font-light"
                  >
                    hello@mistie.art
                  </a>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted mb-3 font-semibold">
                    Studio
                  </h3>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                    Chelsea, New York
                    <br />
                    By Appointment Only
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted mb-3 font-semibold">
                    Gallery Representation
                  </h3>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                    Gagosian Gallery
                    <br />
                    980 Madison Avenue
                    <br />
                    New York, NY 10075
                  </p>
                </div>
              </div>

              <div className="pt-10 border-t border-border/30">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted mb-6 font-semibold">
                  Follow
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-highlight hover:accent-bg hover:text-white flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-highlight hover:accent-bg hover:text-white flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-highlight hover:accent-bg hover:text-white flex items-center justify-center transition-all"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="decorative-line-left mb-8" />
              <h2 className="font-serif mb-12">
                Send a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl card-shadow p-10 text-center"
                >
                  <p className="text-xl text-foreground mb-3 font-serif">Thank you!</p>
                  <p className="text-muted font-light leading-relaxed">
                    Your message has been received. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-[0.2em] text-muted mb-3 font-semibold"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-border/50 rounded-xl focus:border-accent focus:outline-none transition-all font-light"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-[0.2em] text-muted mb-3 font-semibold"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-border/50 rounded-xl focus:border-accent focus:outline-none transition-all font-light"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs uppercase tracking-[0.2em] text-muted mb-3 font-semibold"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-border/50 rounded-xl focus:border-accent focus:outline-none transition-all font-light"
                    >
                      <option value="">Select a subject</option>
                      <option value="artwork-inquiry">Artwork Inquiry</option>
                      <option value="commission">Commission Request</option>
                      <option value="exhibition">Exhibition Inquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-[0.2em] text-muted mb-3 font-semibold"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      rows={7}
                      className="w-full px-5 py-4 bg-white border border-border/50 rounded-xl focus:border-accent focus:outline-none transition-all resize-none font-light leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-12 py-5 accent-bg text-white rounded-full font-medium text-[15px] tracking-wide hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}

              <p className="text-sm text-muted mt-4 font-light">
                * All fields are required. We typically respond within 48 hours.
              </p>
            </motion.div>
          </div>
          </div>
      </section>

      {/* Additional Information */}
      <section className="bg-white/60" style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="mx-auto text-center px-6 sm:px-8 lg:px-16 xl:px-20" style={{ maxWidth: 'var(--max-width-content)' }}>
            <motion.div {...fadeInUp}>
              <div className="decorative-line mb-10" />
              <h2 className="font-serif mb-10 px-4">
                Private Viewings
              </h2>
              <p className="text-lg md:text-xl lg:text-[1.35rem] text-muted leading-[1.7] mb-12 font-light mx-auto px-4" style={{ maxWidth: 'var(--max-width-text)' }}>
                We welcome serious collectors and art enthusiasts to schedule private
                viewings at the studio. Experience the work in an intimate setting and
                discuss custom commissions or available pieces.
              </p>
              <a
                href="mailto:hello@mistie.art?subject=Private Viewing Request"
                className="inline-block px-14 py-5 accent-bg text-white rounded-full font-medium text-[15px] tracking-wide hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
              >
                Request a Viewing
              </a>
            </motion.div>
          </div>
      </section>
    </div>
  );
}

