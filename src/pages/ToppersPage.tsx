import React, { useState } from 'react';
import { Award, FileText, Download, Quote, Search, Filter, CheckCircle2, BookOpen } from 'lucide-react';
import { TOPPERS_LIST, TopperItem } from '../data/siteData';

interface ToppersPageProps {
  onSelectTopper: (topper: TopperItem) => void;
  onOpenCallback: () => void;
}

export const ToppersPage: React.FC<ToppersPageProps> = ({ onSelectTopper, onOpenCallback }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredToppers = TOPPERS_LIST.filter((topper) => {
    const matchesCategory = selectedCategory === 'ALL' || topper.category === selectedCategory;
    const matchesSearch = 
      topper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topper.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topper.air.toString().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full text-left py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded-full mb-3 inline-block">
            UPSC CSE 2025-26 Results
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Meet the UPSC Toppers from Vajiram &amp; Ravi
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Celebrating the stellar ranks of our students who achieved All India Rank 1, 2, 3, 4, 5 and beyond. Explore their journey, preparation strategies, and verified evaluated mock answer sheets.
          </p>
        </div>
      </div>

      {/* 2. Top 3 Spotlight Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TOPPERS_LIST.slice(0, 3).map((topper, idx) => (
          <div
            key={topper.id}
            onClick={() => onSelectTopper(topper)}
            className={`p-6 rounded-3xl border transition-all cursor-pointer hover:shadow-xl relative flex flex-col justify-between ${
              idx === 0 
                ? 'bg-gradient-to-b from-amber-50 to-white border-amber-300 shadow-md ring-2 ring-amber-400/30'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow">
              AIR {topper.air}
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={topper.imageUrl}
                  alt={topper.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 shadow-sm"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="text-lg font-black text-slate-900">{topper.name}</h3>
                  <p className="text-xs font-bold text-orange-600">AIR {topper.air} • CSE {topper.year}</p>
                </div>
              </div>

              {topper.quote && (
                <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                  "{topper.quote}"
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-500">Optional: {topper.optionalSubject}</span>
              <span className="font-bold text-[#c63000]">View Test Copies →</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Search & Category Filters */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search topper name, rank, or subject..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
          {['ALL', 'IGP', 'General Studies', 'Optional', 'Module Courses', 'Test Series'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
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

      {/* 4. Full Toppers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredToppers.map((topper) => (
          <div
            key={topper.id}
            onClick={() => onSelectTopper(topper)}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col items-center text-center cursor-pointer group hover:-translate-y-1 relative"
          >
            <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full shadow-sm">
              AIR {topper.air}
            </div>

            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-orange-500/40 p-0.5 group-hover:border-[#c63000] transition-colors shadow">
              <img
                src={topper.imageUrl}
                alt={topper.name}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c63000] transition-colors">
              {topper.name}
            </h3>
            <div className="text-xs font-bold text-orange-600 mb-1">
              AIR {topper.air} • CSE {topper.year}
            </div>
            <p className="text-[11px] text-slate-500 mb-4 line-clamp-1">
              {topper.course}
            </p>

            <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                {topper.optionalSubject || "General Studies"}
              </span>
              <span className="font-semibold text-[#c63000] group-hover:underline">
                View Copy →
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
