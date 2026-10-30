import React, { useState } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  FileText, 
  MapPin, 
  HelpCircle, 
  ExternalLink,
  Sparkles,
  ArrowRight,
  Bell
} from 'lucide-react';
import { MARQUEE_MESSAGES } from '../data/siteData';
import { CiviresaLogo } from './CiviresaLogo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, extra?: any) => void;
  onOpenCallback: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenCallback }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (page: string, extra?: any) => {
    onNavigate(page, extra);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      {/* 1. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left focus:outline-none group cursor-pointer"
            >
              <CiviresaLogo variant="horizontal" className="hover:opacity-95 transition-opacity" />
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="desktop-navigation-bar items-center gap-1 xl:gap-2 text-[13px] 2xl:text-[14px] font-bold text-slate-700">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-all ${
                currentPage === 'home' ? 'text-[#fb5621] font-extrabold border-b-2 border-[#fb5621]' : 'hover:text-[#fb5621]'
              }`}
            >
              Home
            </button>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('courses')}
                className={`px-2.5 xl:px-3 py-2 rounded-lg flex items-center gap-1 transition-all ${
                  currentPage === 'courses' ? 'text-[#fb5621] font-extrabold border-b-2 border-[#fb5621]' : 'hover:text-[#fb5621]'
                }`}
              >
                <span>All Courses</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'courses' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100">
                    Civiresa Programmes
                  </div>
                  <div className="space-y-0.5 mt-1">
                    {[
                      { name: "UPSC Civil Services (Prelims + Mains + Interview)", desc: "Classroom & Live-Online Flagship", cat: "GS" },
                      { name: "State PCS (State Public Service Commissions)", desc: "State specific GS & Language modules", cat: "GS" },
                      { name: "NEET Medical Entrance Preparation", desc: "Physics, Chemistry & Biology Mastery", cat: "Module" },
                      { name: "JEE (Advance & Mains) Engineering", desc: "Top faculty for Math, Physics, Chemistry", cat: "Module" },
                      { name: "Academic Tuitions (Class 9th to 12th)", desc: "CBSE & ICSE Board Excellence", cat: "Module" },
                      { name: "Optional Subjects (Sociology, PSIR, Geography)", desc: "Subject specialists & test series", cat: "Optional" },
                      { name: "StepUp Mentorship & Test Series", desc: "Rankers-Led Daily Answer Writing", cat: "Mentorship" },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick('courses', item.cat)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50/80 transition-colors group flex flex-col"
                      >
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-[#c63000]">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-500">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 pt-2 mt-1">
                    <button
                      onClick={() => handleNavClick('courses')}
                      className="w-full text-center text-xs font-bold text-[#c63000] py-1.5 hover:underline flex items-center justify-center gap-1"
                    >
                      <span>View All Courses & Fee Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Toppers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('toppers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('toppers')}
                className={`px-2.5 xl:px-3 py-2 rounded-lg flex items-center gap-1 transition-all ${
                  currentPage === 'toppers' ? 'text-[#fb5621] font-extrabold border-b-2 border-[#fb5621]' : 'hover:text-[#fb5621]'
                }`}
              >
                <span>Toppers</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'toppers' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100">
                    Results & Achievements
                  </div>
                  <button
                    onClick={() => handleNavClick('toppers')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-between text-sm font-semibold text-slate-800 hover:text-[#c63000]"
                  >
                    <span>UPSC Top Rankers (AIR 1-10)</span>
                    <Award className="w-4 h-4 text-orange-500" />
                  </button>
                  <button
                    onClick={() => handleNavClick('toppers')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-between text-sm font-semibold text-slate-800 hover:text-[#c63000]"
                  >
                    <span>Toppers' Evaluated Copies</span>
                    <FileText className="w-4 h-4 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('toppers')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-between text-sm font-semibold text-slate-800 hover:text-[#c63000]"
                  >
                    <span>NEET & JEE Top Selections</span>
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* Study Materials Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('materials')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('study-materials')}
                className={`px-2.5 xl:px-3 py-2 rounded-lg flex items-center gap-1 transition-all ${
                  currentPage === 'study-materials' ? 'text-[#fb5621] font-extrabold border-b-2 border-[#fb5621]' : 'hover:text-[#fb5621]'
                }`}
              >
                <span>Study Materials</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'materials' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100">
                    Free Learning Resources
                  </div>
                  <button
                    onClick={() => handleNavClick('study-materials')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm font-semibold text-slate-800 hover:text-[#c63000]"
                  >
                    The Recitals - Monthly Current Affairs Magazine
                  </button>
                  <button
                    onClick={() => handleNavClick('study-materials')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm font-semibold text-slate-800 hover:text-[#c63000]"
                  >
                    Daily Prelims Pointers & Editorial Analysis
                  </button>
                  <button
                    onClick={() => handleNavClick('study-materials')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm font-semibold text-slate-800 hover:text-[#c63000]"
                  >
                    QUEST Static Notes (History, Polity, Economy)
                  </button>
                  <button
                    onClick={() => handleNavClick('study-materials')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm font-semibold text-slate-800 hover:text-[#c63000]"
                  >
                    General Studies Postal Preparation Books
                  </button>
                </div>
              )}
            </div>

            {/* UPSC Exam Guide */}
            <button
              onClick={() => handleNavClick('upsc-exam')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-all ${
                currentPage === 'upsc-exam' ? 'text-[#fb5621] font-extrabold border-b-2 border-[#fb5621]' : 'hover:text-[#fb5621]'
              }`}
            >
              UPSC Exam
            </button>

            {/* Upcoming Batches */}
            <button
              onClick={() => handleNavClick('batches')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-all ${
                currentPage === 'batches' ? 'text-[#fb5621] font-extrabold border-b-2 border-[#fb5621]' : 'hover:text-[#fb5621]'
              }`}
            >
              Upcoming Batches
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-all ${
                currentPage === 'contact' ? 'text-[#fb5621] font-extrabold border-b-2 border-[#fb5621]' : 'hover:text-[#fb5621]'
              }`}
            >
              Contact
            </button>

            {/* FAQs */}
            <button
              onClick={() => handleNavClick('faq')}
              className={`px-2.5 xl:px-3 py-2 rounded-lg transition-all ${
                currentPage === 'faq' ? 'text-[#fb5621] font-extrabold border-b-2 border-[#fb5621]' : 'hover:text-[#fb5621]'
              }`}
            >
              FAQs
            </button>
          </nav>

          {/* Right Action: Phone & Let's Talk CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:08062206330"
              className="desktop-navigation-bar items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#fb5621] px-3 py-2 border-r border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#fb5621]" />
              <span>08062206330</span>
            </a>

            <button
              onClick={onOpenCallback}
              className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-orange-600/20 hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
              <span>Let's Talk</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-hamburger p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 2. Live Admissions Headline Ticker (Immediately Below Navbar) */}
      <div className="bg-[#fffdfb] border-t border-b border-orange-200/80 overflow-hidden py-2 text-xs font-semibold text-[#c63000] relative shadow-xs">
        <div className="flex items-center max-w-full">
          
          {/* Online Admission Counselling Form Button / Badge */}
          <button
            onClick={onOpenCallback}
            className="shrink-0 bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c63000] hover:to-[#ea580c] text-white px-3.5 py-1 text-[11px] sm:text-xs font-bold rounded-r-full shadow-sm z-10 flex items-center gap-1.5 ml-0 mr-4 transition-all cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="whitespace-nowrap">Online Admission Counselling Form</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          {/* Continuous Headlines Track with Bell Icons */}
          <div className="overflow-hidden w-full whitespace-nowrap group">
            <div className="headline-marquee-track items-center gap-8 cursor-pointer">
              {MARQUEE_MESSAGES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.url || 'courses', item.category)}
                  className="inline-flex items-center gap-2 text-[#9a3412] hover:text-[#ea580c] transition-colors focus:outline-none"
                >
                  <Bell className="w-3.5 h-3.5 text-[#ea580c] fill-[#ea580c] shrink-0" />
                  <span className="font-semibold text-xs sm:text-[13px]">{item.text}</span>
                </button>
              ))}
              {/* Duplicate for seamless infinite loop */}
              {MARQUEE_MESSAGES.map((item, idx) => (
                <button
                  key={`dup-${idx}`}
                  onClick={() => handleNavClick(item.url || 'courses', item.category)}
                  className="inline-flex items-center gap-2 text-[#9a3412] hover:text-[#ea580c] transition-colors focus:outline-none"
                >
                  <Bell className="w-3.5 h-3.5 text-[#ea580c] fill-[#ea580c] shrink-0" />
                  <span className="font-semibold text-xs sm:text-[13px]">{item.text}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-container bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <div className="p-3 bg-orange-50 rounded-xl mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-orange-950">Civiresa Admissions Helpline</p>
                <a href="tel:08062206330" className="text-sm font-extrabold text-[#c63000]">
                  08062206330
                </a>
              </div>
              <button
                onClick={onOpenCallback}
                className="bg-[#c63000] text-white text-xs font-bold px-3 py-1.5 rounded-full"
              >
                Request Call
              </button>
            </div>

            {[
              { id: 'home', label: 'Home' },
              { id: 'courses', label: 'All Courses (UPSC, NEET, JEE, Tuitions)' },
              { id: 'batches', label: 'Upcoming Batches 2026-27' },
              { id: 'toppers', label: 'Toppers List & Answer Sheets' },
              { id: 'study-materials', label: 'Study Materials & The Recitals' },
              { id: 'upsc-exam', label: 'Exam Pattern & Syllabus Guide' },
              { id: 'about', label: 'About Civiresa Institute' },
              { id: 'contact', label: 'Contact Us (Delhi & Regional Centres)' },
              { id: 'faq', label: 'Frequently Asked Questions' },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => handleNavClick(nav.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                  currentPage === nav.id
                    ? 'bg-orange-50 text-[#c63000] font-bold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>{nav.label}</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
