import React, { useState } from 'react';
import { BookOpen, Download, Calendar, FileText, CheckCircle2, ArrowRight, Sparkles, Filter, Search } from 'lucide-react';
import { ARTICLES_DATA, ArticleItem } from '../data/siteData';

export const StudyMaterialPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'Prelims' | 'Mains' | 'Quest' | 'Recitals'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchTab = activeTab === 'ALL' || art.category === activeTab;
    const matchSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  const RECITALS_MAGAZINES = [
    { month: "October 2026", edition: "Vol. 49 Issue 10", theme: "Semiconductor Mission, COP-31 & Judicial Reforms", pages: "184 Pages", size: "24.5 MB" },
    { month: "September 2026", edition: "Vol. 49 Issue 09", theme: "G20 Review, Clean Energy Transition & Agri-Tech", pages: "192 Pages", size: "26.1 MB" },
    { month: "August 2026", edition: "Vol. 49 Issue 08", theme: "Union Budget Analysis & Critical Minerals Policy", pages: "210 Pages", size: "28.3 MB" },
    { month: "July 2026", edition: "Vol. 49 Issue 07", theme: "Economic Survey Review & Space Tech Roadmap", pages: "176 Pages", size: "22.8 MB" },
  ];

  return (
    <div className="w-full text-left py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded-full mb-3 inline-block">
            Free UPSC Learning Portal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Study Materials &amp; Current Affairs
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Access our acclaimed monthly magazine <strong>The Recitals</strong>, Daily Prelims Pointers, Mains Editorial Analyses, and QUEST static reference notes curated by Vajiram &amp; Ravi faculty.
          </p>
        </div>
      </div>

      {/* 2. Recitals Magazine Spotlight */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 sm:p-8 border border-orange-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div>
            <span className="text-xs font-bold text-[#c63000] uppercase tracking-wider block mb-1">
              Monthly Current Affairs
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              The Recitals - Official Monthly Magazine
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Comprehensive GS 1, 2, 3, 4 coverage with infographics, mind-maps, and practice questions.
            </p>
          </div>
          <span className="text-xs font-bold bg-white text-orange-800 border border-orange-300 px-3.5 py-1.5 rounded-full shadow-sm">
            Free Downloadable PDFs
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RECITALS_MAGAZINES.map((mag, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-orange-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {mag.edition}
                </span>
                <h3 className="font-bold text-base text-slate-900 mb-2">{mag.month}</h3>
                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  Focus: {mag.theme}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">{mag.pages}</span>
                <button
                  onClick={() => alert(`Downloading The Recitals (${mag.month} Edition - ${mag.size})`)}
                  className="bg-[#c63000] hover:bg-[#b02b00] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF ({mag.size})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Search & Category Filters */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search notes, articles, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
          {[
            { id: 'ALL', label: 'All Articles' },
            { id: 'Prelims', label: 'Daily Prelims Pointers' },
            { id: 'Mains', label: 'Mains Editorial Analysis' },
            { id: 'Quest', label: 'QUEST Static Notes' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-[#c63000]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="font-bold bg-orange-50 text-[#c63000] px-2 py-0.5 rounded">
                  {art.category} Notes
                </span>
                <span>{art.readTime}</span>
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c63000] transition-colors leading-snug mb-3">
                {art.title}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                {art.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">{art.date}</span>
              <span className="font-bold text-[#c63000] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Full Notes →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] text-left relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
            >
              ✕
            </button>
            <span className="text-xs font-bold bg-orange-100 text-[#c63000] px-2.5 py-0.5 rounded">
              {selectedArticle.category} Article
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">
              {selectedArticle.title}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Published on {selectedArticle.date} • {selectedArticle.readTime}
            </p>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-4 font-sans">
              {selectedArticle.content}
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
