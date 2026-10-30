import React, { useState } from 'react';
import { CheckCircle2, User, Phone, Mail, Clock, BookOpen, Send } from 'lucide-react';

interface CounsellingFormProps {
  onSuccess?: () => void;
}

export const CounsellingForm: React.FC<CounsellingFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [programme, setProgramme] = useState('General Studies');
  const [timePreference, setTimePreference] = useState('9AM-12PM');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleReset = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100 text-center animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h4 className="text-xl font-extrabold text-slate-900 mb-2">
          Counselling Request Received!
        </h4>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Thank you, <strong className="text-slate-800">{name}</strong>. Our senior UPSC academic mentor will call you on <strong className="text-slate-800">{phoneNumber}</strong> during your preferred slot (<span className="text-[#c63000] font-semibold">{timePreference}</span>).
        </p>
        <div className="bg-orange-50 rounded-xl p-4 text-xs text-orange-950 font-medium mb-6 text-left space-y-1">
          <p>• <strong>Target Program:</strong> {programme}</p>
          <p>• <strong>Notification Email:</strong> {email}</p>
          <p>• <strong>Campus Centers:</strong> Old Rajinder Nagar (Delhi) & Egmore (Chennai)</p>
        </div>
        <button
          onClick={handleReset}
          className="text-xs font-bold text-[#c63000] hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 relative">
      <div className="text-center mb-6">
        <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider block mb-1">
          Free UPSC CSE Guidance
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-[#c63000] leading-snug">
          Get all your questions answered with our free expert counselling!
        </h3>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Name input */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#fb5621] focus:ring-2 focus:ring-orange-100 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Phone input */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Contact Number (10 digits) *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              required
              maxLength={10}
              placeholder="e.g. 9876543210"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#fb5621] focus:ring-2 focus:ring-orange-100 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Email input */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email ID *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              required
              placeholder="e.g. rahul@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#fb5621] focus:ring-2 focus:ring-orange-100 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Programme Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Select Interested Programme *
          </label>
          <div className="relative">
            <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={programme}
              onChange={(e) => setProgramme(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 rounded-lg border border-slate-300 focus:border-[#fb5621] focus:ring-2 focus:ring-orange-100 text-sm text-slate-900 outline-none transition-all bg-white cursor-pointer"
            >
              <option value="General Studies">General Studies (PCM 10-Months / 2-Year)</option>
              <option value="Optionals">Optional Subjects (14 Optionals Available)</option>
              <option value="Test Series">Test Series (Sure Shot Mains / Prelims CAMP)</option>
              <option value="Mentorship">StepUp Mentorship (Prodigy 100)</option>
              <option value="CSAT">CSAT Course</option>
              <option value="Others">Others / College Student Foundation</option>
            </select>
          </div>
        </div>

        {/* Time Preference */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Time for Mentor Call *
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={timePreference}
              onChange={(e) => setTimePreference(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 rounded-lg border border-slate-300 focus:border-[#fb5621] focus:ring-2 focus:ring-orange-100 text-sm text-slate-900 outline-none transition-all bg-white cursor-pointer"
            >
              <option value="9AM-12PM">Morning (9:00 AM - 12:00 PM)</option>
              <option value="12PM-2PM">Afternoon (12:00 PM - 2:00 PM)</option>
              <option value="2PM-5PM">Post-noon (2:00 PM - 5:00 PM)</option>
              <option value="5PM-7PM">Evening (5:00 PM - 7:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white py-3 rounded-full text-base font-bold shadow-md shadow-orange-600/20 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Submit for Free Counselling</span>
        </button>

        <p className="text-[11px] text-center text-slate-400 pt-1">
          🔒 Your details are 100% confidential. No spam guaranteed.
        </p>
      </form>
    </div>
  );
};
