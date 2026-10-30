import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Building2, HelpCircle } from 'lucide-react';
import { BRANCH_LOCATIONS } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    center: 'Delhi',
    queryType: 'Admissions 2026-27',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full text-left py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded-full mb-3 inline-block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Contact Vajiram &amp; Ravi
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Visit our student counselling centers in New Delhi (Old Rajinder Nagar) or Chennai (Egmore), or contact our admissions helpline for course inquiries, batch reservations, and postal book orders.
          </p>
        </div>
      </div>

      {/* 2. Direct Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BRANCH_LOCATIONS.map((branch, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold bg-orange-100 text-[#c63000] px-3 py-1 rounded-full">
                  {branch.city} Campus
                </span>
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {branch.hours}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900">{branch.title}</h2>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                  <p>
                    {branch.address}
                    <br />
                    <span className="text-xs text-slate-400"><strong>Landmark:</strong> {branch.landmark}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                  <a href={`tel:${branch.phone.split('/')[0].trim()}`} className="font-bold text-slate-800 hover:text-[#c63000]">
                    {branch.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                  <a href={`mailto:${branch.email}`} className="text-slate-800 hover:text-[#c63000]">
                    {branch.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#c63000] hover:underline flex items-center gap-1"
              >
                <span>View Google Map &amp; Directions</span>
                <span>↗</span>
              </a>
              <a
                href={`tel:${branch.phone.split('/')[0].trim()}`}
                className="bg-slate-900 hover:bg-[#c63000] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
              >
                Call Office
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Send Us a Message Form & Department Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#c63000] uppercase tracking-wider block mb-1">
              Online Helpdesk
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Send an Academic or Admission Inquiry
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fill out the form below and an official representative will respond within 24 working hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-emerald-950">Inquiry Submitted Successfully!</h4>
              <p className="text-xs text-emerald-800 mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your ticket has been assigned to our counseling desk for the {formData.center} center. We will contact you at <strong>{formData.phone}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold text-[#c63000] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Contact Phone (10 digits) *</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Preferred Campus *</label>
                  <select
                    value={formData.center}
                    onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none text-xs bg-white"
                  >
                    <option value="Delhi">Delhi Campus (Old Rajinder Nagar)</option>
                    <option value="Chennai">Chennai Campus (Egmore)</option>
                    <option value="Online">Live-Online Programmes</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nature of Inquiry *</label>
                <select
                  value={formData.queryType}
                  onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none text-xs bg-white"
                >
                  <option value="Admissions 2026-27">New Course Admission &amp; Batch Dates</option>
                  <option value="Fee Details">Course Fees &amp; Instalments</option>
                  <option value="Mentorship & Test Series">StepUp Mentorship &amp; Mains Test Series</option>
                  <option value="Postal Books">General Studies Postal Books Order</option>
                  <option value="Grievance / Technical Support">Student Portal Login / Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Your Question or Comments</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your background (undergraduate / working professional) and specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white py-3 rounded-xl text-xs font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry Ticket</span>
              </button>
            </form>
          )}
        </div>

        {/* Directory (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
            <h4 className="font-bold text-base text-slate-900 mb-4">
              Departmental Directory
            </h4>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                <span className="font-bold text-slate-900 block mb-0.5">Delhi Admissions Desk</span>
                <p>Phone: 08062206330 | Email: contact@vajiramandravi.com</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                <span className="font-bold text-slate-900 block mb-0.5">Chennai Campus Helpdesk</span>
                <p>Phone: 08062206333 | Email: chennai@vajiramandravi.com</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                <span className="font-bold text-slate-900 block mb-0.5">Student Portal &amp; App Support</span>
                <p>Email: support@vajiramandravi.com (Mon-Sat, 9AM-6PM)</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                <span className="font-bold text-slate-900 block mb-0.5">Postal Book Dispatch Office</span>
                <p>Email: publications@vajiramandravi.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
