import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  BookOpen, 
  FileText, 
  Sparkles,
  Phone,
  HelpCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { CounsellingForm } from '../components/CounsellingForm';
import { 
  FEATURED_COURSES, 
  TOPPERS_LIST, 
  STANDOUT_POINTS, 
  FAQS_DATA, 
  BRANCH_LOCATIONS, 
  ARTICLES_DATA,
  CourseItem,
  TopperItem,
  ArticleItem
} from '../data/siteData';

interface HomePageProps {
  onNavigate: (page: string, extra?: any) => void;
  onSelectCourse: (course: CourseItem) => void;
  onSelectTopper: (topper: TopperItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onSelectCourse, 
  onSelectTopper 
}) => {
  // Toppers filter tab state
  const [activeTopperCategory, setActiveTopperCategory] = useState<string>('ALL');
  const [topperSliderIndex, setTopperSliderIndex] = useState(0);

  // Locations slider state
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);

  // FAQs Accordion open state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Article selection modal state
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // Filter toppers
  const filteredToppers = activeTopperCategory === 'ALL'
    ? TOPPERS_LIST
    : TOPPERS_LIST.filter(t => t.category === activeTopperCategory);

  const handlePrevTopper = () => {
    setTopperSliderIndex(prev => (prev - 1 + filteredToppers.length) % filteredToppers.length);
  };

  const handleNextTopper = () => {
    setTopperSliderIndex(prev => (prev + 1) % filteredToppers.length);
  };

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 pb-16">
      
      {/* 1. Hero Carousel */}
      <HeroSlider onNavigate={onNavigate} />

      {/* 2. Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#ea580c] font-black text-xs uppercase tracking-wider mb-4 border border-orange-300">
          UPSC • STATE PCS • NEET • JEE (ADVANCE &amp; MAINS) • TUITIONS
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181832] tracking-tight mb-2">
          Premier Coaching in Delhi &amp; India
        </h1>
        <h2 className="text-lg sm:text-xl font-bold text-[#ea580c] mb-4">
          CiViRESA INSTITUTE
        </h2>
        <div className="w-24 h-0.5 bg-orange-500 mx-auto mb-6" />
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl mx-auto">
          Civiresa Institute is a trusted destination for serious competitive and academic aspirants. Offering proven teaching methods, experienced educators, and result-driven guidance across UPSC, State PCS, NEET medical entrance, JEE (Advance &amp; Mains) engineering, and school tuitions.
        </p>
      </section>

      {/* 2.5 UPSC CSE 2027 Student Planner - Phase-Wise Strategy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-orange-500/20 overflow-hidden relative">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Student Planner Infographic Poster */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group hover:scale-[1.02] transition-transform duration-300 bg-white">
                <img
                  src="/ads/ad-3.jpg"
                  alt="Student Planner: Phase-Wise Strategy for UPSC CSE 2027"
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute top-3 left-3 bg-[#ea580c] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg">
                  Official 2027 Roadmap
                </div>
              </div>
            </div>

            {/* Right Column: Breakdown & Quick Register */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-orange-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CiViRESA UPSC CSE Mentorship 2027</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-2">
                  Student Planner: Phase-Wise Strategy
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A structured journey towards UPSC CSE 2027 success under the mentorship of <strong className="text-white">Puneet Ghumman</strong> (IIT Delhi Alumnus, 5 UPSC CSE Mains &amp; 3 Interviews).
                </p>
              </div>

              {/* Two Phases Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phase 1 */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">
                      Phase 1 • 1st Nov – 15th Jan
                    </span>
                    <h4 className="text-base font-extrabold text-white mt-2 mb-2">
                      Focus on Mains Guidance
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>Answer Writing Practice &amp; Feedback</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>Structured Essay Guidance &amp; Value Addition</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>Concise Notes-Making Strategy for GS</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>1-on-1 Mentorship &amp; Doubt Resolution</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase bg-emerald-400/20 text-emerald-300 px-2 py-0.5 rounded">
                      Phase 2 • 16th Jan Onwards
                    </span>
                    <h4 className="text-base font-extrabold text-white mt-2 mb-2">
                      Focus on UPSC Prelims
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>MCQ Aptitude Building with PYQs</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Subject-Wise Revision &amp; Test Drills</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Regular Sectional &amp; Mock Practice Tests</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Performance Analysis &amp; Error Tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom CTA & Registration Bar */}
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-300">Complete Programme Fee:</span>
                    <span className="text-lg font-black text-amber-400">₹ 20,000/-</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                      FREE Diagnostic Session
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Call: <strong className="text-white">98760 73444</strong> • Email: <strong className="text-white">civiresa@gmail.com</strong>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="tel:9876073444"
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-full border border-white/20 transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>Call Mentor</span>
                  </a>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white text-xs font-extrabold px-6 py-2.5 rounded-full shadow-lg shadow-orange-600/30 hover:shadow-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured UPSC CSE Courses Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <span className="text-xs font-extrabold text-[#c63000] uppercase tracking-wider block mb-1">
            Programmes &amp; Curriculum
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
            Our Featured UPSC CSE Courses
          </h2>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURED_COURSES.map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative h-44 bg-slate-100 overflow-hidden">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#c63000] px-2.5 py-0.5 rounded shadow">
                  {course.category}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-medium text-orange-200">
                    Duration: {course.duration}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c63000] transition-colors leading-snug mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">
                    {course.fee || "Check Details"}
                  </span>
                  <span className="text-[#c63000] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md"
          >
            <span>View All UPSC Courses &amp; Fee Structure</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. Toppers Showcase Section with Category Tabs */}
      <section className="bg-slate-50/70 py-12 border-y border-slate-200/60 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-extrabold text-[#c63000] uppercase tracking-wider block mb-1">
                Hall of Fame
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Top Selections from CiViRESA INSTITUTE
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('toppers')}
              className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>View Full Toppers List</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2 scrollbar-none">
            <div className="inline-flex p-1 rounded-xl bg-white border border-orange-200 shadow-sm gap-1">
              {[
                { id: 'ALL', label: 'ALL' },
                { id: 'IGP', label: 'IGP' },
                { id: 'General Studies', label: 'General Studies' },
                { id: 'Optional', label: 'Optional' },
                { id: 'Module Courses', label: 'Module Courses' },
                { id: 'Test Series', label: 'Test Series' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTopperCategory(tab.id);
                    setTopperSliderIndex(0);
                  }}
                  className={`px-4 sm:px-6 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    activeTopperCategory === tab.id
                      ? 'bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white shadow-sm'
                      : 'text-[#c63000] hover:bg-orange-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Toppers Cards Carousel Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredToppers.slice(topperSliderIndex, topperSliderIndex + 4).map((topper) => (
                <div
                  key={topper.id}
                  onClick={() => onSelectTopper(topper)}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 relative"
                >
                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full shadow-sm">
                    AIR {topper.air}
                  </div>

                  {/* Photo with Ring */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-orange-500/40 p-0.5 group-hover:border-[#c63000] transition-colors shadow-md">
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
                    <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                      {topper.optionalSubject || "General Studies"}
                    </span>
                    <span className="font-semibold text-[#c63000] group-hover:underline">
                      View Copy →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            {filteredToppers.length > 4 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={handlePrevTopper}
                  aria-label="Previous topper"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white flex items-center justify-center shadow hover:shadow-lg transition-transform active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-slate-500">
                  Showing {topperSliderIndex + 1}–{Math.min(topperSliderIndex + 4, filteredToppers.length)} of {filteredToppers.length}
                </span>
                <button
                  onClick={handleNextTopper}
                  aria-label="Next topper"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white flex items-center justify-center shadow hover:shadow-lg transition-transform active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 5. Upcoming Batches Strip Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#ffeee9] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-orange-200/60 shadow-sm">
          <div className="text-left">
            <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block mb-1">
              New Admissions Schedule
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Check the UPSC CSE Batches in the coming months
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              New morning, evening, and weekend batches commencing in Old Rajinder Nagar (Delhi) &amp; Egmore (Chennai).
            </p>
          </div>

          <button
            onClick={() => onNavigate('batches')}
            className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white px-7 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Upcoming Batches
          </button>
        </div>
      </section>

      {/* 6. Why Vajiram Stands Out (Left) + Free Expert Counselling Form (Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Standout Benefits */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs font-extrabold text-[#fb5621] uppercase tracking-wider block mb-1">
                Legacy of Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#fb5621] leading-tight mb-2">
                Achieve IAS Ambitions with India's Leading UPSC Coaching Institute
              </h2>
              <p className="text-sm font-semibold text-slate-800">
                Join the League of Leaders - Enroll at CiViRESA INSTITUTE Today!
              </p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
              Why CiViRESA INSTITUTE Stands Out
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STANDOUT_POINTS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/80 hover:border-orange-300 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#fb5621] shrink-0" />
                    <h4 className="font-bold text-sm text-slate-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Expert Counselling Form */}
          <div className="lg:col-span-5">
            <CounsellingForm />
          </div>

        </div>
      </section>

      {/* 7. General Studies Prelims & Mains Programme Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl">
                <img
                  src="https://vajiramias.sgp1.cdn.digitaloceanspaces.com/strapi/VR_Photo_WEBP_Lossless_09e6e8c430.webp"
                  alt="Vajiram Faculty & Students"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-36 h-36 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                <img
                  src="https://vajiramias.sgp1.cdn.digitaloceanspaces.com/strapi/VR_Photo_WEBP_Lossless_e660a68738.webp"
                  alt="Vajiram Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-7 text-left space-y-4">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30">
                Flagship Foundation Course
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                General Studies Prelims &amp; Mains Programme
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                UPSC Civil Services Examination is considered one of the most challenging competitive exams in India and attracts thousands of aspirants each year who dream of making a positive impact on society through administrative leadership.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                We at CiViRESA INSTITUTE offer a variety of specialized programmes tailored to meet the ambitions, competence, and individual preferences of students across UPSC, State PCS, NEET, JEE, and Tuitions. Each programme is available in both Classroom and LIVE-Online Modes with complete study kits.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('courses', 'GS')}
                  className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Explore GS Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('batches')}
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-colors"
                >
                  View Batch Timings
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. 50+ Years Experience Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
          Historical Milestone
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#181832] mb-1">
          50+ Years of Experience
        </h2>
        <h3 className="text-lg font-bold text-[#ea580c] mb-4">
          Best Coaching in Delhi &amp; India for UPSC, State PCS, NEET &amp; JEE
        </h3>
        <div className="w-20 h-0.5 bg-orange-400 mx-auto mb-6" />
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          CiViRESA INSTITUTE maintains prominence through both offline classroom and online formats. Built on a strong foundation of academic rigor and student mentorship, the institute adapts to every shift in examination trends while staying focused on student results. Throughout its journey, the institute has assisted candidates in entering the Civil Services (UPSC &amp; State PCS), premier medical colleges (NEET), top IITs/NITs (JEE), and mastering academic school tuitions.
        </p>
      </section>

      {/* 9. Coaching Locations Photo Gallery (Delhi & Chennai) */}
      <section className="bg-[#ffeee9] py-12 px-4 sm:px-6 lg:px-8 w-full border-y border-orange-200/60">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold text-orange-700 uppercase tracking-wider block mb-1">
              Campus Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our UPSC CSE Coaching Locations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BRANCH_LOCATIONS.map((branch, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-orange-100 flex flex-col"
              >
                {/* Images */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 h-48">
                  {branch.images.map((imgUrl, imgIdx) => (
                    <div key={imgIdx} className="overflow-hidden h-full">
                      <img
                        src={imgUrl}
                        alt={`${branch.city} campus`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="p-6 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg text-slate-900">
                        {branch.city} Campus
                      </h3>
                      <span className="text-[10px] font-bold bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                        Full Facilities
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-600 mb-2">
                      {branch.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      📍 {branch.address}
                    </p>
                    <p className="text-xs text-slate-500 mb-4">
                      <strong>Landmark:</strong> {branch.landmark}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <a
                      href={`tel:${branch.phone.split('/')[0].trim()}`}
                      className="font-bold text-[#c63000] flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{branch.phone}</span>
                    </a>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-semibold text-slate-700 hover:text-[#c63000] flex items-center gap-1"
                    >
                      <span>Directions &amp; Visit Info</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Latest Articles & Study Notes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-extrabold text-[#c63000] uppercase tracking-wider block mb-1">
              Free Academic Resources
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Current Affairs &amp; QUEST UPSC Notes
            </h2>
          </div>
          <button
            onClick={() => onNavigate('study-materials')}
            className="text-xs font-bold text-[#c63000] hover:underline flex items-center gap-1"
          >
            <span>Browse All Articles &amp; Magazine Downloads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.slice(0, 3).map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-bold bg-orange-50 text-[#c63000] px-2 py-0.5 rounded">
                    {art.category} Article
                  </span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c63000] transition-colors leading-snug mb-2">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs mt-4">
                <span className="text-slate-400">{art.date}</span>
                <span className="font-bold text-[#c63000] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Note <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQs Accordion & Location Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: FAQs */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold text-[#c63000] uppercase tracking-wider block mb-1">
              Have Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              Best UPSC Coaching in Delhi FAQs
            </h2>

            <div className="space-y-3">
              {FAQS_DATA.slice(0, 5).map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#c63000] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#c63000]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4.5 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <button
                onClick={() => onNavigate('faq')}
                className="text-xs font-bold text-[#c63000] hover:underline"
              >
                View all 20+ Frequently Asked Questions →
              </button>
            </div>
          </div>

          {/* Right: Direct Visit Info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-block bg-orange-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-4">
                Walk-in Admissions
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Visit CiViRESA INSTITUTE Today
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Meet our academic counselors in person at Old Rajinder Nagar, New Delhi or Egmore, Chennai. Get a personalized roadmap, collect hardcopy brochures, and tour our smart classrooms.
              </p>

              <div className="space-y-4 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Delhi Campus:</strong>
                    1-B/7, Pusa Road, Old Rajinder Nagar, New Delhi - 110060 (Pillar 103)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direct Helplines:</strong>
                    08062206330 (Delhi) • 08062206333 (Chennai)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Office Working Hours:</strong>
                    Monday – Sunday: 8:00 AM – 8:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700/60 mt-6">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white py-2.5 rounded-xl text-xs font-bold hover:shadow-lg transition-all"
              >
                Get Campus Location &amp; Metro Directions
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
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
