import React from 'react';
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Building,
  Target
} from 'lucide-react';
import { CiviresaLogo } from '../components/CiviresaLogo';

interface AboutPageProps {
  onNavigate: (page: string, extra?: any) => void;
  onOpenCallback: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenCallback }) => {
  return (
    <div className="w-full text-left py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Header Hero with Logo */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded-full mb-4 inline-block">
              UPSC • STATE PCS • NEET • JEE • TUITIONS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              About CiViRESA INSTITUTE
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Civiresa Institute is dedicated to fostering academic and competitive excellence. Designed to empower students with conceptual mastery, rigorous practice, and ethical discipline across Civil Services (UPSC &amp; State PCS), Medical (NEET), Engineering (JEE Advance &amp; Mains), and Foundational School Tuitions.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-orange-500/40 max-w-[240px]">
              <CiviresaLogo variant="full" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { stat: "5+ Verticals", label: "UPSC, State PCS, NEET, JEE & Tuitions" },
          { stat: "5,000+", label: "Successful Selections & Top Ranks" },
          { stat: "30+ Expert", label: "Subject Mentors & Celebrated Educators" },
          { stat: "100% Focused", label: "Concept-first Pedagogy & Continuous Testing" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#ea580c] mb-1">
              {item.stat}
            </div>
            <div className="text-xs text-slate-600 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Founder Vision & Pedagogy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
            Our Foundation &amp; Ethos
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            Nurturing Vision, Insight &amp; Academic Mastery
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            The Civiresa emblem symbolizes our core philosophy: the steady upward triangle represents aspiration and moral integrity; the inner eye signifies focus, vision, and deep insight; while the open book at the foundation symbolizes accessible, transformative knowledge.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Whether preparing for the highest administrative ranks in UPSC CSE and State Public Service Commissions, securing admission into premier medical and engineering institutions through NEET and JEE, or building bulletproof fundamentals in Class 9th to 12th school tuitions, Civiresa Institute provides structured roadmaps tailored to each student's potential.
          </p>
          <div className="pt-2">
            <blockquote className="border-l-4 border-[#ea580c] pl-4 italic text-sm text-slate-600">
              "True education empowers students not just to clear examinations, but to think critically, lead ethically, and serve society with purpose."
            </blockquote>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#ffeee9] p-8 rounded-3xl border border-orange-200 space-y-4">
          <h3 className="font-bold text-lg text-slate-900">Our Comprehensive Programs</h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
              <span><strong>UPSC Civil Services:</strong> Complete Prelims cum Mains, Optional Subjects, and Interview Guidance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
              <span><strong>State PCS:</strong> Tailored state-specific General Studies and administrative syllabus.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
              <span><strong>NEET (Medical):</strong> Intensive biology, physics, and chemistry conceptual drilling.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
              <span><strong>JEE (Advance &amp; Mains):</strong> High-caliber problem solving for IIT and NIT entrance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
              <span><strong>School Tuitions:</strong> Class 9th, 10th, 11th, and 12th board syllabus excellence.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. Campus Infrastructure & Facilities */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
            Facilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Learning Infrastructure &amp; Classrooms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <Building className="w-8 h-8 text-[#ea580c]" />
            <h4 className="font-bold text-base text-slate-900">Smart Digital Classrooms</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Air-conditioned lecture theatres equipped with interactive smartboards, dual audio feeds, and live streaming setups for hybrid classroom &amp; online access.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <BookOpen className="w-8 h-8 text-[#ea580c]" />
            <h4 className="font-bold text-base text-slate-900">Curated Library &amp; Test Lab</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Extensive reference collections for competitive and board examinations, quiet study cubicles, and computer-based mock test simulation terminals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <Users className="w-8 h-8 text-[#ea580c]" />
            <h4 className="font-bold text-base text-slate-900">Doubt Solving &amp; Mentorship Desk</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Regular one-on-one doubt resolution sessions with faculty mentors, individual performance tracking, and parent-teacher updates for tuitions.
            </p>
          </div>
        </div>
      </div>

      {/* 5. CTA Strip */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">Enroll with CiViRESA INSTITUTE Today</h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            New batches commencing for UPSC, State PCS, NEET, JEE, and Academic Tuitions.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <button
            onClick={() => onNavigate('courses')}
            className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:shadow-lg transition-all"
          >
            Explore Courses
          </button>
          <button
            onClick={onOpenCallback}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all border border-white/20"
          >
            Talk to Counselor
          </button>
        </div>
      </div>

    </div>
  );
};
