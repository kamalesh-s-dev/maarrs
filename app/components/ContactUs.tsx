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
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="relative py-20 bg-[#f8fbff] w-full overflow-hidden">
      {/* Subtle Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#009FE3 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        
        {/* Faint glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#e6f4fc] to-transparent rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#009FE3]/5 to-transparent rounded-full blur-[120px] opacity-80" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

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

          <div className="flex flex-col gap-4 mt-4">
            {[
              { 
                label: "Direct Contact", 
                value: (
                  <div className="flex flex-col gap-1.5 mt-1">
                    <span className="text-[#0f172a] font-bold text-base">Aashik Siraj</span>
                    <a href="mailto:hello@maarrs.com" className="text-gray-500 hover:text-[#009FE3] transition-colors font-medium">hello@maarrs.com</a>
                    <a href="tel:+918754799981" className="text-gray-500 hover:text-[#009FE3] transition-colors font-medium">+91 87547 99981</a>
                  </div>
                ), 
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /> 
              },
              { 
                label: "Office Address", 
                value: (
                  <span className="block text-gray-500 leading-relaxed font-medium mt-1">
                    14/11, Balaji Garden Extn,<br />
                    Subramaniyam Palayam, GN Mills Post,<br />
                    Coimbatore North,<br />
                    Tamil Nadu - 641029
                  </span>
                ), 
                icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></> 
              },
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100} flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(0,159,227,0.08)] hover:border-[#009FE3]/20 transition-all duration-300 group`}>
                <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-[#f0f8ff] to-[#e6f4fc] rounded-2xl flex items-center justify-center border border-[#009FE3]/10 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 text-[#009FE3]">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#009FE3] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <div className="text-sm">
                    {item.value}
                  </div>
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
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2 tracking-tight">Send us a message</h3>
              <div className="flex flex-col gap-5">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "e.g. John Smith" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "e.g. john@company.com" },
                  { id: "company", label: "Company / Organisation", type: "text", placeholder: "e.g. Acme Corp" }
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-1.5 group">
                    <label htmlFor={field.id} className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide group-focus-within:text-[#009FE3] transition-colors duration-300">{field.label}</label>
                    <input
                      id={field.id} name={field.id} type={field.type} required={field.id !== 'company'}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange} placeholder={field.placeholder}
                      className="w-full px-5 py-3.5 rounded-2xl border-2 border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:bg-white focus:border-[#009FE3] focus:shadow-[0_4px_20px_rgba(0,159,227,0.12)] transition-all duration-300"
                    />
                  </div>
                ))}
                
                <div className="flex flex-col gap-1.5 group">
                  <label htmlFor="message" className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide group-focus-within:text-[#009FE3] transition-colors duration-300">Message</label>
                  <textarea
                    id="message" name="message" required rows={4}
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project or what you're looking to build..."
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:bg-white focus:border-[#009FE3] focus:shadow-[0_4px_20px_rgba(0,159,227,0.12)] transition-all duration-300 resize-none"
                  />
                </div>
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
