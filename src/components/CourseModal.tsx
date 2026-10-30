import React, { useState } from 'react';
import { X, Check, Calendar, Clock, MapPin, Award, BookOpen, Send, Phone, CheckCircle2 } from 'lucide-react';
import { CourseItem } from '../data/siteData';

interface CourseModalProps {
  course: CourseItem | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const [enrolled, setEnrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', center: 'Delhi' });

  if (!course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolled(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-block bg-white/20 backdrop-blur-md text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider mb-2">
            {course.category} Programme
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {course.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-orange-100 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Next Batch: {course.batchDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Duration: {course.duration}
            </span>
            {course.fee && (
              <>
                <span>•</span>
                <span className="font-bold text-white bg-black/20 px-2 py-0.5 rounded">
                  Fee: {course.fee}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Programme Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              What's Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modes & Campuses */}
          <div className="bg-orange-50/70 p-4 rounded-xl border border-orange-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-orange-950">Available Delivery Modes</p>
              <div className="flex gap-2 mt-1">
                {course.mode.map((m, idx) => (
                  <span key={idx} className="text-xs font-semibold bg-white text-[#c63000] border border-orange-200 px-2.5 py-1 rounded-md">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-orange-950">Classroom Campuses</p>
              <p className="text-xs text-slate-600 mt-1">
                Old Rajinder Nagar (Delhi) & Egmore (Chennai)
              </p>
            </div>
          </div>

          {/* Quick Registration Form */}
          <div className="border-t border-slate-100 pt-5">
            {enrolled ? (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h5 className="font-bold text-emerald-900 text-sm">Application Registered!</h5>
                <p className="text-xs text-emerald-700 mt-1">
                  Our admissions counselor will contact you shortly with the syllabus brochure and fee payment link.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h5 className="text-sm font-bold text-slate-900">
                  Reserve a Seat / Download Detailed Brochure
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none"
                  />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className="px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none"
                  />
                  <select
                    value={formData.center}
                    onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                    className="px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none bg-white"
                  >
                    <option value="Delhi">Delhi Campus</option>
                    <option value="Chennai">Chennai Campus</option>
                    <option value="Online">Live-Online</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white py-2.5 rounded-lg text-xs font-bold hover:shadow transition-all"
                  >
                    Confirm Registration & Download Brochure
                  </button>
                  <a
                    href="tel:08062206330"
                    className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
