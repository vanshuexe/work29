import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Youtube, 
  Facebook, 
  Instagram, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  Download 
} from 'lucide-react';
import { CiviresaLogo } from './CiviresaLogo';

interface FooterProps {
  onNavigate: (page: string, extra?: any) => void;
  onOpenCallback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCallback }) => {
  return (
    <footer className="bg-[#002d4e] text-white pt-16 pb-8 border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branch Quick Summary Banner */}
        <div className="bg-gradient-to-r from-blue-950/80 to-slate-900/90 rounded-2xl p-6 sm:p-8 border border-blue-800/40 mb-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Delhi Center */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-lg text-white">Delhi Head Centre</h4>
                  <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded">
                    Old Rajinder Nagar
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  1-B/7, Pusa Road, Old Rajinder Nagar, New Delhi - 110060 (Near Karol Bagh Metro Pillar 103)
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-300">
                  <a href="tel:08062206330" className="flex items-center gap-1.5 hover:text-orange-400 font-semibold transition-colors">
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>08062206330</span>
                  </a>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 8:00 AM - 8:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Chennai Center */}
            <div className="flex items-start gap-4 md:border-l md:border-blue-900/60 md:pl-8">
              <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-lg text-white">Chennai Centre</h4>
                  <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded">
                    Egmore
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  No. 63, Police Commissioner Office Road, Egmore, Chennai - 600008
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-300">
                  <a href="tel:08062206333" className="flex items-center gap-1.5 hover:text-orange-400 font-semibold transition-colors">
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>08062206333</span>
                  </a>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 8:30 AM - 7:00 PM
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Main 4-Column Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Column 1: Informations */}
          <div>
            <h3 className="text-base font-bold text-white tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Informations
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                { title: "UPSC 2027 Notification", page: "upsc-exam" },
                { title: "UPSC Complete Syllabus", page: "upsc-exam" },
                { title: "Model Answers for Mains", page: "study-materials" },
                { title: "UPSC Civil Services Exam Pattern", page: "upsc-exam" },
                { title: "IAS / IPS Salary & Perks Structure", page: "upsc-exam" },
                { title: "UPSC Age Limit & Attempts", page: "upsc-exam" },
                { title: "UPSC Annual Exam Calendar", page: "upsc-exam" },
                { title: "UPSC Optional Subjects List", page: "courses" },
                { title: "UPSC Previous Year Papers (PYQs)", page: "study-materials" },
                { title: "UPSC Cut Off Marks Trends", page: "upsc-exam" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="hover:text-orange-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: UPSC Courses */}
          <div>
            <h3 className="text-base font-bold text-white tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              UPSC Courses
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                { title: "General Studies PCM 10-Months", cat: "GS" },
                { title: "GS PCM Live-Online Interactive", cat: "GS" },
                { title: "2-Year Fledgling GS Foundation", cat: "GS" },
                { title: "StepUp Mentorship (Prodigy 100)", cat: "Mentorship" },
                { title: "StepUp Mentorship Hindi Medium", cat: "Mentorship" },
                { title: "Sure Shot Mains Test Series 2027", cat: "Test Series" },
                { title: "PowerUp Prelims CAMP Series", cat: "Test Series" },
                { title: "CSAT Score Accelerator Batch", cat: "CSAT" },
                { title: "Optional Subjects Masterclasses", cat: "Optional" },
                { title: "Interview Guidance Programme (IGP)", cat: "GS" },
                { title: "SMART Current Affairs Module", cat: "Module" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('courses', item.cat)}
                    className="hover:text-orange-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Vajiram & Ravi */}
          <div>
            <h3 className="text-base font-bold text-white tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              About Civiresa Institute
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                { title: "About Us & Institute Mission", page: "about" },
                { title: "Our Faculty & Mentors", page: "about" },
                { title: "Top Rankers from Civiresa", page: "toppers" },
                { title: "Upcoming Batch Schedules", page: "batches" },
                { title: "Delhi & Regional Campus Details", page: "contact" },
                { title: "Student Grievance Redressal", page: "about" },
                { title: "Terms and Conditions", page: "about" },
                { title: "Privacy Policy", page: "about" },
                { title: "Careers at Civiresa", page: "contact" },
                { title: "Frequently Asked Questions", page: "faq" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="hover:text-orange-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: App Download & Social Media */}
          <div>
            <h3 className="text-base font-bold text-white tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Connect & Mobile App
            </h3>
            
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Download the official Vajiram & Ravi IAS Prep app for daily current affairs, prelims test practice, and live lectures.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.vajiramandravi.iasprep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-orange-500 px-4 py-2.5 rounded-xl transition-all shadow-md group mb-6"
            >
              <Download className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-slate-400">Get it on</span>
                <span className="block text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                  Google Play Store
                </span>
              </div>
            </a>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Follow Us On Social Media
              </p>
              <div className="flex items-center gap-2.5 flex-wrap">
                {[
                  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/c/VajiramandRaviOfficial", color: "hover:bg-red-600" },
                  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/vajiramandraviofficial/", color: "hover:bg-blue-600" },
                  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/vajiramandravi/", color: "hover:bg-pink-600" },
                  { name: "Telegram", icon: Send, url: "https://t.me/vajiramandraviofficial", color: "hover:bg-sky-500" },
                  { name: "WhatsApp", icon: MessageSquare, url: "https://whatsapp.com", color: "hover:bg-emerald-600" },
                ].map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.name}
                    className={`w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white ${soc.color} transition-all`}
                  >
                    <soc.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-900/60">
              <button
                onClick={onOpenCallback}
                className="w-full bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Talk to Academic Counselor</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Badge Logo & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <CiviresaLogo variant="emblem" className="w-10 h-10 p-1 bg-white rounded-xl shadow" />
            <div>
              <p className="font-semibold text-slate-200">
                © 2026 Civiresa Institute. All rights reserved.
              </p>
              <p className="text-[11px] text-slate-400">
                Premier Coaching for UPSC • STATE PCS • NEET • JEE (ADVANCE &amp; MAINS) • TUITIONS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onNavigate('about')} className="hover:text-slate-200">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:text-slate-200">Terms of Use</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-200">Site Map</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
