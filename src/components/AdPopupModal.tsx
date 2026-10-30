import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, Mail, Award, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

interface AdPopupModalProps {
  onOpenCallback: () => void;
}

const AD_ITEMS = [
  {
    id: 1,
    title: "CiViRESA UPSC CSE Mentorship Program 2027",
    tagline: "Guidance • Practice • Progress • Result",
    image: "/ads/ad-1.jpg",
    badge: "UPSC CSE 2027",
    mentor: "Puneet Ghumman (IIT Delhi Alumnus • 5 CSE Mains • 3 Interviews)",
    fees: "₹ 20,000/-",
    highlight: "FREE Diagnostic Session Available",
  },
  {
    id: 2,
    title: "UPSC CSE Mentorship Programme 2027 by CiViRESA",
    tagline: "A Structured Journey Towards Success",
    image: "/ads/ad-2.jpg",
    badge: "Strategy & Personal Guidance",
    mentor: "Head of Mentorship: Puneet Ghumman (Ex RAUS IAS • Ex Sarrthi IAS)",
    fees: "₹ 20,000/-",
    highlight: "Biweekly Sessions & Progress Tracking",
  },
  {
    id: 3,
    title: "Student Planner: Phase-Wise Strategy for 2027",
    tagline: "1 Nov - 15 Jan Mains Guidance ➔ 16 Jan Onwards Prelims Mode",
    image: "/ads/ad-3.jpg",
    badge: "Phase-Wise Roadmap",
    mentor: "UPSC PrepSCAN Diagnostic Desk",
    fees: "₹ 20,000/-",
    highlight: "One Programme. A Complete Journey for UPSC 2027",
  },
  {
    id: 4,
    title: "Student Planner & Registration Form",
    tagline: "Answer Writing • Notes Making • 1-on-1 Mentorship",
    image: "/ads/ad-4.jpg",
    badge: "Limited Enrollment",
    mentor: "Contact: 98760 73444 • civiresa@gmail.com",
    fees: "₹ 20,000/-",
    highlight: "Direct Mentor Access & Weekly Reviews",
  },
];

export const AdPopupModal: React.FC<AdPopupModalProps> = ({ onOpenCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reopenTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Initial trigger: Show ad after 6 seconds of visiting the site
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Auto-cycle through all ad images every 5 seconds ("sab image kuc kuch break k baad")
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AD_ITEMS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen, isPaused]);

  // 3. Side cancel / close action:
  // Closes modal and schedules it to reappear periodically after a break (e.g. 45 seconds)
  const handleClose = () => {
    setIsOpen(false);

    if (reopenTimeoutRef.current) {
      clearTimeout(reopenTimeoutRef.current);
    }

    reopenTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % AD_ITEMS.length);
      setIsOpen(true);
    }, 45000); // 45-second break before next advertisement appearance
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % AD_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + AD_ITEMS.length) % AD_ITEMS.length);
  };

  const activeAd = AD_ITEMS[currentIndex];

  return (
    <>
      {/* Floating Re-Open Badge (Sticky at bottom right when ad is closed) */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-40 animate-bounce">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white px-4 py-2 rounded-full text-xs font-black shadow-2xl flex items-center gap-2 border-2 border-white hover:scale-105 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>UPSC Mentorship 2027 (Offer)</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          </button>
        </div>
      )}

      {/* Main Advertisement Popup Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Main Ad Container */}
          <div
            className="relative bg-white w-full max-w-xl sm:max-w-2xl max-h-[92vh] rounded-3xl shadow-2xl overflow-hidden border border-orange-200 flex flex-col animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Bar with Cancel Button on the side */}
            <div className="bg-gradient-to-r from-slate-900 via-orange-950 to-slate-900 text-white px-4 sm:px-6 py-2.5 flex items-center justify-between z-20 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-orange-200">
                  Special Announcement • CiViRESA
                </span>
                <span className="text-[10px] bg-orange-500/30 text-orange-200 px-2 py-0.5 rounded-full font-bold ml-1">
                  {currentIndex + 1} of {AD_ITEMS.length}
                </span>
              </div>

              {/* Cancel / Close Option on the side */}
              <button
                onClick={handleClose}
                className="group flex items-center gap-1 bg-white/10 hover:bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold transition-all border border-white/20 hover:border-red-500 cursor-pointer"
                title="Cancel / Close Advertisement"
                aria-label="Cancel / Close"
              >
                <span>Close</span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Poster Image Display Area with Slide Navigation */}
            <div className="relative flex-1 bg-slate-950 overflow-y-auto max-h-[60vh] sm:max-h-[66vh] flex items-center justify-center group/img">
              <img
                src={activeAd.image}
                alt={activeAd.title}
                className="w-full h-auto max-h-full object-contain mx-auto select-none"
              />

              {/* Prev Slide Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous Poster"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#c63000] text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Slide Button */}
              <button
                onClick={handleNext}
                aria-label="Next Poster"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#c63000] text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md z-10">
                {AD_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 transition-all rounded-full cursor-pointer ${
                      idx === currentIndex ? 'w-6 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Footer Call To Actions */}
            <div className="bg-white p-3.5 sm:p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div>
                <p className="text-xs font-black text-slate-900 leading-tight">
                  {activeAd.title}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Mentor: <span className="text-[#c63000] font-semibold">Puneet Ghumman (IIT Delhi)</span> • Fees: <strong className="text-emerald-700">₹20,000/-</strong>
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="tel:9876073444"
                  className="flex-1 sm:flex-none text-center bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-2 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-600" />
                  <span>98760 73444</span>
                </a>

                <button
                  onClick={() => {
                    handleClose();
                    onOpenCallback();
                  }}
                  className="flex-1 sm:flex-none bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white text-xs font-extrabold px-4 py-2 rounded-xl shadow-md shadow-orange-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>Enquire / Book Free Session</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

