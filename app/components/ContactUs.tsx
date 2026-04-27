"use client";

import { useState } from "react";
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactUs() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-[#f8fbff] w-full">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="reveal text-[#009FE3] font-semibold text-sm uppercase tracking-widest mb-3">Get in touch</p>
            <h2 className="reveal delay-100 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-5">
              Let&apos;s start a conversation
            </h2>
            <p className="reveal delay-200 text-lg text-gray-500 leading-relaxed max-w-md">
              Whether you have a project in mind or just want to understand how MAARRS can help your organisation — we&apos;re here to talk.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-2">
            {[
              { label: "Email", value: "hello@maarrs.com", href: "mailto:hello@maarrs.com", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /> },
              { label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /> },
              { label: "Location", value: "India", href: undefined, icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></> },
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100} flex items-start gap-4`}>
                <div className="w-11 h-11 flex-shrink-0 bg-[#e6f4fc] rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#009FE3]">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-gray-700 font-medium hover:text-[#009FE3] transition-colors duration-200">{item.value}</a>
                  ) : (
                    <span className="text-gray-700 font-medium">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal-right bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
              <div className="w-16 h-16 bg-[#e6f4fc] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#009FE3]">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Message sent!</h3>
              <p className="text-gray-500">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h3 className="text-xl font-bold text-[#0f172a] mb-1">Send us a message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-1.5">
                    <label htmlFor={field.id} className="text-sm font-medium text-gray-600">{field.label}</label>
                    <input
                      id={field.id} name={field.id} type={field.type} required
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange} placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8fbff] text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#009FE3] focus:ring-2 focus:ring-[#009FE3]/20 transition-all duration-200"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-sm font-medium text-gray-600">Company / Organisation</label>
                <input
                  id="company" name="company" type="text"
                  value={formData.company} onChange={handleChange} placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8fbff] text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#009FE3] focus:ring-2 focus:ring-[#009FE3]/20 transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-600">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your project or what you're looking to build..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8fbff] text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#009FE3] focus:ring-2 focus:ring-[#009FE3]/20 transition-all duration-200 resize-none"
                />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#009FE3] text-white font-semibold rounded-xl shadow-lg shadow-[#009FE3]/20 hover:bg-[#0089c4] hover:-translate-y-0.5 transition-all duration-300 text-base mt-1">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
