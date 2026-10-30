import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQS_DATA } from '../data/siteData';

interface FaqPageProps {
  onOpenCallback: () => void;
  onNavigate: (page: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenCallback, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['ALL', 'Coaching & Admission', 'Eligibility & Preparation', 'Courses & Modes', 'Campus & Hostel'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchCat = selectedCategory === 'ALL' || faq.category === selectedCategory;
    const matchQuery = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="w-full text-left py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      
      {/* 1. Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-[#c63000] uppercase tracking-widest bg-orange-50 border border-orange-200 px-3 py-1 rounded-full inline-block">
          Frequently Asked Questions
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Everything You Need to Know About Vajiram &amp; Ravi
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Find answers regarding course admissions, fee structure, batch timings, online live delivery, optional subjects, and hostel facilities in Karol Bagh.
        </p>
      </div>

      {/* 2. Search & Category Filters */}
      <div className="space-y-4">
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Type your question (e.g. fees, optional, age limit, online classes)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 focus:border-[#fb5621] outline-none text-xs sm:text-sm shadow-sm"
          />
        </div>

        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-[#c63000]'
              }`}
            >
              {cat === 'ALL' ? 'All Questions' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Accordions List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#c63000] transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-xs font-bold bg-orange-100 text-[#c63000] px-2 py-0.5 rounded">
                    Q{idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#c63000]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Still Have Questions Card */}
      <div className="bg-[#ffeee9] rounded-3xl p-8 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Didn't find what you were looking for?</h3>
          <p className="text-xs text-slate-600 mt-1">
            Our academic counselors are available on call to answer any queries regarding preparation and admissions.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={onOpenCallback}
            className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            Request a Callback
          </button>
          <a
            href="tel:08062206330"
            className="bg-white text-slate-800 border border-slate-300 px-4 py-2.5 rounded-full text-xs font-bold hover:bg-slate-50"
          >
            Call 08062206330
          </a>
        </div>
      </div>

    </div>
  );
};
