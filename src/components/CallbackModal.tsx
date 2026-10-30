import React, { useState } from 'react';
import { X, Phone, User, CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [queryType, setQueryType] = useState('Admission Enquiry 2026-27');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-100 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-black text-white">Let's Talk</h3>
          <p className="text-xs text-orange-100 mt-1">
            Connect with our senior admission counselors at Vajiram & Ravi.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 text-left">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                Callback Scheduled!
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Thank you, <strong>{name}</strong>. An expert counselor will contact you on <strong>{phone}</strong> within 15 minutes during working hours (8:00 AM - 8:00 PM).
              </p>
              <button
                onClick={handleReset}
                className="bg-[#c63000] text-white text-xs font-bold px-6 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number (10 digits)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="e.g. 9812345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full pl-10 pr-3 py-2.5 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Query Nature
                </label>
                <select
                  value={queryType}
                  onChange={(e) => setQueryType(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none bg-white"
                >
                  <option value="Admission Enquiry 2026-27">New Admission Enquiry 2026-27</option>
                  <option value="Fees and Batch Timings">Fee Structure & Batch Timings</option>
                  <option value="Optional Subject Selection">Optional Subject Selection</option>
                  <option value="Online Course Details">Live-Online Course Delivery</option>
                  <option value="Hostel Accommodation">Hostel / PG Help in Karol Bagh</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white py-2.5 rounded-full text-xs font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Instant Callback</span>
                </button>
              </div>

              <div className="border-t border-slate-100 pt-3 text-center">
                <p className="text-[11px] text-slate-500">
                  Or call directly: <a href="tel:08062206330" className="font-bold text-[#c63000]">08062206330</a> (Delhi) / <a href="tel:08062206333" className="font-bold text-[#c63000]">08062206333</a> (Chennai)
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
