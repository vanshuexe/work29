import React from 'react';
import { X, Award, BookOpen, Quote, Download, CheckCircle2 } from 'lucide-react';
import { TopperItem } from '../data/siteData';

interface TopperModalProps {
  topper: TopperItem | null;
  onClose: () => void;
}

export const TopperModal: React.FC<TopperModalProps> = ({ topper, onClose }) => {
  if (!topper) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-[#c63000] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={topper.imageUrl}
                alt={topper.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[11px] font-black px-2 py-0.5 rounded-full shadow">
                AIR {topper.air}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-orange-200 uppercase tracking-wider">
                UPSC CSE {topper.year} Selection
              </div>
              <h3 className="text-xl font-black text-white">{topper.name}</h3>
              <p className="text-xs text-slate-300 mt-0.5">{topper.course}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-left">
          
          {/* Quote */}
          {topper.quote && (
            <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-100 text-slate-800 text-sm italic relative">
              <Quote className="w-5 h-5 text-orange-400 absolute top-2 right-2 opacity-40" />
              "{topper.quote}"
            </div>
          )}

          {/* Details */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-400 block font-semibold mb-0.5">Optional Subject</span>
              <span className="text-slate-800 font-bold text-sm">
                {topper.optionalSubject || "General Studies"}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-400 block font-semibold mb-0.5">Coaching Enrolled</span>
              <span className="text-slate-800 font-bold text-sm">
                Vajiram & Ravi {topper.category}
              </span>
            </div>
          </div>

          {/* Simulated Answer Copy Sheet */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-orange-600" />
                Evaluated Test Copy & Marks Sheet
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                Verified Ranker
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              View sample handwritten answer sheets, diagrams, and evaluation feedback provided by Vajiram & Ravi evaluators.
            </p>
            <div className="h-28 bg-white border border-slate-200 rounded-lg p-3 font-serif text-[11px] text-slate-600 overflow-hidden relative shadow-inner">
              <div className="font-bold text-slate-800 border-b border-slate-100 pb-1 mb-1">
                Q. Analyze the socio-economic impacts of decentralization in local governance (150 words).
              </div>
              <p className="italic text-slate-600 leading-relaxed line-clamp-3">
                "The 73rd and 74th Constitutional Amendment Acts laid the bedrock for grassroot democracy by institutionalizing PRIs. However, financial autonomy remains constrained by the 3Fs: Functions, Funds, and Functionaries..."
              </p>
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => alert(`Downloaded simulated answer copy of ${topper.name} (AIR ${topper.air})!`)}
              className="w-full bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white py-2.5 rounded-xl text-xs font-bold hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Topper's Test Copies (PDF)</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
