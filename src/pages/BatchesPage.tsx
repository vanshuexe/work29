import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, Phone, ArrowRight, ShieldCheck, Filter } from 'lucide-react';
import { UPCOMING_BATCHES, BatchItem } from '../data/siteData';

interface BatchesPageProps {
  onOpenCallback: () => void;
}

export const BatchesPage: React.FC<BatchesPageProps> = ({ onOpenCallback }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [bookedBatch, setBookedBatch] = useState<BatchItem | null>(null);

  const filteredBatches = UPCOMING_BATCHES.filter((b) => {
    const matchLoc = selectedLocation === 'ALL' || b.location === selectedLocation;
    const matchCat = selectedCategory === 'ALL' || b.category === selectedCategory;
    return matchLoc && matchCat;
  });

  return (
    <div className="w-full text-left py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded-full mb-3 inline-block">
            Official Timetable 2026-27
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Upcoming UPSC CSE Batches
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Check the upcoming batch commencement dates, timings, locations, and fee structure for General Studies Foundation, Optional Subjects, CSAT, and StepUp Mentorship.
          </p>
        </div>
      </div>

      {/* 2. Location & Category Filters Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Location Selector */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Centre:</span>
          {['ALL', 'Delhi', 'Chennai', 'Online'].map((loc) => (
            <button
              key={loc}
              onClick={() => setSelectedLocation(loc)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedLocation === loc
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {loc === 'ALL' ? 'All Locations' : loc}
            </button>
          ))}
        </div>

        {/* Category Selector */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1">
          {['ALL', 'General Studies', 'Mentorship', 'Optional', 'CSAT', 'Test Series'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-[#c63000]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* 3. Batches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBatches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col justify-between"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold bg-orange-50 text-[#c63000] border border-orange-200 px-2.5 py-0.5 rounded">
                  {batch.category}
                </span>
                <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                  batch.status === 'Few Seats Left' 
                    ? 'bg-red-100 text-red-700 animate-pulse'
                    : batch.status === 'Filling Fast'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {batch.status}
                </span>
              </div>

              <h3 className="font-bold text-lg text-slate-900 leading-snug mb-3">
                {batch.courseName}
              </h3>

              {/* Specs */}
              <div className="space-y-2 text-xs text-slate-600 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" /> Start Date:
                  </span>
                  <span className="font-bold text-slate-900">{batch.startDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-orange-600" /> Batch Timing:
                  </span>
                  <span className="font-semibold text-slate-800">{batch.timing}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" /> Centre &amp; Mode:
                  </span>
                  <span className="font-semibold text-slate-800">{batch.location} ({batch.mode})</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                  <span className="text-slate-500">Tuition Fee:</span>
                  <span className="font-black text-[#c63000] text-sm">{batch.fee}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setBookedBatch(batch)}
                className="flex-1 bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
              >
                Reserve Seat Now
              </button>
              <button
                onClick={onOpenCallback}
                className="p-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl"
                aria-label="Enquire"
              >
                <Phone className="w-4 h-4 text-orange-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Seat Booking Modal */}
      {bookedBatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 text-left relative">
            <button
              onClick={() => setBookedBatch(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
            >
              ✕
            </button>
            <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Reserve Seat for {bookedBatch.courseName}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Starting on <strong>{bookedBatch.startDate}</strong> ({bookedBatch.timing}) at {bookedBatch.location} campus.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert(`Seat token reserved for ${bookedBatch.courseName}! Our admissions executive will call you with the confirmation token.`);
              setBookedBatch(null);
            }} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone (10-digits)</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#fb5621] outline-none"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white py-2.5 rounded-full text-xs font-bold hover:shadow-lg transition-all"
                >
                  Generate Provisional Seat Token
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. Admission Steps Guide */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
        <h3 className="text-xl font-bold">How to Enroll in Vajiram &amp; Ravi Batches</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="space-y-1.5 p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-orange-400 font-extrabold text-lg block">Step 01</span>
            <h4 className="font-bold text-white text-sm">Select Course &amp; Mode</h4>
            <p>Choose your preferred classroom campus (Delhi Karol Bagh or Chennai Egmore) or Live-Online interactive batch.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-orange-400 font-extrabold text-lg block">Step 02</span>
            <h4 className="font-bold text-white text-sm">Online / Offline Registration</h4>
            <p>Fill out the admission registration form online or visit our front desk with graduation details and identity proof.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-orange-400 font-extrabold text-lg block">Step 03</span>
            <h4 className="font-bold text-white text-sm">Kit Collection &amp; Portal Access</h4>
            <p>Collect your 22+ Yellow Book kit, student identity card, and access the Vajiram Student Portal app for class timetable.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
