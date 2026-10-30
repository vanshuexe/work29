import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Award, 
  FileText, 
  ShieldCheck, 
  GraduationCap, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface UpscExamPageProps {
  onNavigate: (page: string, extra?: any) => void;
  onOpenCallback: () => void;
}

export const UpscExamPage: React.FC<UpscExamPageProps> = ({ onNavigate, onOpenCallback }) => {
  const [activeSection, setActiveSection] = useState<'pattern' | 'eligibility' | 'salary' | 'syllabus'>('pattern');

  return (
    <div className="w-full text-left py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded-full mb-3 inline-block">
            Official UPSC Aspirant Guide
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            UPSC Civil Services Examination Guide
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Complete handbook on UPSC CSE Prelims, Mains, and Personality Test exam patterns, eligibility, attempts, syllabus, marking scheme, and IAS officer salary structure.
          </p>
        </div>
      </div>

      {/* 2. Section Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200">
        {[
          { id: 'pattern', label: '1. Three-Stage Exam Pattern' },
          { id: 'eligibility', label: '2. Eligibility & Age Limits' },
          { id: 'syllabus', label: '3. Complete Syllabus Overview' },
          { id: 'salary', label: '4. IAS Salary & Rank Perks' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id as any)}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeSection === tab.id
                ? 'border-[#c63000] text-[#c63000] bg-orange-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. Tab Contents */}

      {/* Tab: Pattern */}
      {activeSection === 'pattern' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              The Three Stages of UPSC Civil Services Examination
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The examination is conducted annually by the Union Public Service Commission (UPSC) across three successive stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stage 1: Prelims */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#c63000] font-black flex items-center justify-center">
                I
              </div>
              <h3 className="font-bold text-lg text-slate-900">Preliminary Examination</h3>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Objective MCQ • Screening Only
              </p>
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p>• <strong>GS Paper I:</strong> 100 MCQs, 200 Marks, 2 Hours (Merit ranking determines Mains call)</p>
                <p>• <strong>CSAT Paper II:</strong> 80 MCQs, 200 Marks, 2 Hours (Qualifying nature, min 33% = 66 marks required)</p>
                <p>• Negative marking: 1/3rd penalty for incorrect answers.</p>
              </div>
            </div>

            {/* Stage 2: Mains */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#c63000] font-black flex items-center justify-center">
                II
              </div>
              <h3 className="font-bold text-lg text-slate-900">Mains Examination</h3>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Written Descriptive • 1750 Marks
              </p>
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p>• <strong>9 Papers:</strong> 7 merit papers + 2 qualifying languages (300 marks each, 25% passing).</p>
                <p>• Essay (250 Marks)</p>
                <p>• GS Papers I, II, III, IV (250 Marks each = 1000 Marks)</p>
                <p>• Optional Subject Paper I &amp; II (250 Marks each = 500 Marks)</p>
              </div>
            </div>

            {/* Stage 3: Interview */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#c63000] font-black flex items-center justify-center">
                III
              </div>
              <h3 className="font-bold text-lg text-slate-900">Personality Test (Interview)</h3>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Dholpur House, New Delhi • 275 Marks
              </p>
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p>• Conducted before a competent UPSC board chaired by a Commission member.</p>
                <p>• Assesses mental alertness, critical assimilation, integrity, balance of judgement, and leadership potential.</p>
                <p>• <strong>Grand Total: 2025 Marks</strong> determines final All India Rank (AIR).</p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Tab: Eligibility */}
      {activeSection === 'eligibility' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              Eligibility Criteria, Age Limits &amp; Attempts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Prescribed under the Department of Personnel and Training (DoPT) and UPSC official notification.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <th className="p-4">Category</th>
                  <th className="p-4">Age Limits (as on 1st August)</th>
                  <th className="p-4">Maximum Attempts</th>
                  <th className="p-4">Educational Qualification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">General / EWS</td>
                  <td className="p-4">21 to 32 Years</td>
                  <td className="p-4 font-bold text-[#c63000]">6 Attempts</td>
                  <td className="p-4" rowSpan={4}>
                    Graduation degree in any discipline from a recognized University or equivalent qualification. Final year appearing candidates are also eligible to apply for Prelims.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">OBC (Non-Creamy Layer)</td>
                  <td className="p-4">21 to 35 Years (3 years relaxation)</td>
                  <td className="p-4 font-bold text-[#c63000]">9 Attempts</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">SC / ST</td>
                  <td className="p-4">21 to 37 Years (5 years relaxation)</td>
                  <td className="p-4 font-bold text-emerald-700">Unlimited (within age limit)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Persons with Benchmark Disabilities (PwBD)</td>
                  <td className="p-4">21 to 42 Years (10 years relaxation)</td>
                  <td className="p-4 font-bold text-[#c63000]">9 Attempts (Gen/OBC) / Unlimited (SC/ST)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Syllabus */}
      {activeSection === 'syllabus' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              UPSC Mains GS Papers Syllabus Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Core subjects covered under General Studies Papers I, II, III, and IV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase">GS Paper I (250 Marks)</span>
              <h3 className="font-bold text-lg text-slate-900">Heritage, History, Geography &amp; Society</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian Culture (Ancient, Medieval, Modern), Art forms, Literature &amp; Architecture. Freedom struggle, Post-independence consolidation. Physical, Economic, and Human Geography of India and the World. Role of women, urbanization, globalization, and social empowerment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase">GS Paper II (250 Marks)</span>
              <h3 className="font-bold text-lg text-slate-900">Governance, Constitution, Polity &amp; IR</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian Constitution, Evolution, Features, Amendments, Basic Structure. Federalism, Separation of Powers, Dispute Redressal Mechanisms. Parliament and State Legislatures, Executive, Judiciary, RP Act. Welfare schemes, Health, Education, Human Resources. India's foreign policy &amp; bilateral relations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase">GS Paper III (250 Marks)</span>
              <h3 className="font-bold text-lg text-slate-900">Technology, Economic Development, Biodiversity &amp; Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian Economy, Planning, Resource Mobilization, Growth &amp; Employment. Inclusive growth, Government Budgeting. Major crop patterns, Agriculture supply chains, PDS, Subsidies. Science &amp; Tech (AI, Space, Biotech, Nanotech). Environment &amp; Disaster Management. Internal Security &amp; Cyber threat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase">GS Paper IV (250 Marks)</span>
              <h3 className="font-bold text-lg text-slate-900">Ethics, Integrity &amp; Aptitude</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ethics and Human Interface, Essence, Determinants and Consequences of Ethics. Human Values, Lessons from leaders and administrators. Attitude, Emotional Intelligence and its utilities in administration. Public service values and ethics in public administration. Case studies on practical ethical dilemmas.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Salary */}
      {activeSection === 'salary' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              IAS Officer Pay Scales (7th Central Pay Commission)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Basic pay scales, allowances (DA, HRA, Transport), and career progression in the Indian Administrative Service.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <th className="p-4">Rank / Designation</th>
                  <th className="p-4">Pay Level</th>
                  <th className="p-4">Basic Pay (Monthly)</th>
                  <th className="p-4">Years of Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Sub-Divisional Magistrate (SDM) / Assistant Secretary</td>
                  <td className="p-4">Level 10</td>
                  <td className="p-4 font-bold text-[#c63000]">₹56,100</td>
                  <td className="p-4">1–4 Years</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Additional District Magistrate (ADM) / Under Secretary</td>
                  <td className="p-4">Level 11</td>
                  <td className="p-4 font-bold text-[#c63000]">₹67,700</td>
                  <td className="p-4">5–8 Years</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">District Magistrate (DM) / Deputy Commissioner / Director</td>
                  <td className="p-4">Level 12 / 13</td>
                  <td className="p-4 font-bold text-[#c63000]">₹78,800 – ₹1,18,500</td>
                  <td className="p-4">9–15 Years</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Divisional Commissioner / Joint Secretary to Govt of India</td>
                  <td className="p-4">Level 14</td>
                  <td className="p-4 font-bold text-[#c63000]">₹1,44,200</td>
                  <td className="p-4">16–24 Years</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Principal Secretary / Additional Secretary</td>
                  <td className="p-4">Level 15</td>
                  <td className="p-4 font-bold text-[#c63000]">₹1,82,200</td>
                  <td className="p-4">25–30 Years</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Chief Secretary of State / Secretary to Govt of India</td>
                  <td className="p-4">Level 17</td>
                  <td className="p-4 font-bold text-[#c63000]">₹2,25,000</td>
                  <td className="p-4">30+ Years</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-amber-50/50">
                  <td className="p-4 font-bold text-slate-950">Cabinet Secretary of India (Highest Civil Servant)</td>
                  <td className="p-4 font-bold">Level 18</td>
                  <td className="p-4 font-black text-[#c63000] text-sm">₹2,50,000 (Fixed)</td>
                  <td className="p-4 font-semibold">Apex Post</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. Action Banner */}
      <div className="bg-[#ffeee9] rounded-3xl p-8 border border-orange-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Ready to Start Your UPSC Preparation?</h3>
          <p className="text-xs text-slate-600 mt-1">
            Talk to an academic advisor to map your preparation strategy based on your graduation background.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('courses')}
            className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white px-6 py-2.5 rounded-full text-xs font-bold"
          >
            Explore Courses
          </button>
          <button
            onClick={onOpenCallback}
            className="bg-white text-slate-800 border border-slate-300 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-slate-50"
          >
            Book Free Counselling
          </button>
        </div>
      </div>

    </div>
  );
};
