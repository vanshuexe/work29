import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, Check, ArrowRight, BookOpen, GraduationCap, Phone } from 'lucide-react';
import { FEATURED_COURSES, CourseItem } from '../data/siteData';

interface CoursesPageProps {
  initialCategory?: string;
  onSelectCourse: (course: CourseItem) => void;
  onOpenCallback: () => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ 
  initialCategory, 
  onSelectCourse, 
  onOpenCallback 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [modeFilter, setModeFilter] = useState<string>('ALL');

  const filteredCourses = FEATURED_COURSES.filter((course) => {
    const matchesCategory = 
      selectedCategory === 'ALL' || 
      course.category === selectedCategory ||
      (selectedCategory === 'GS' && course.category === 'GS');

    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesMode = 
      modeFilter === 'ALL' || 
      course.mode.some(m => m.toLowerCase().includes(modeFilter.toLowerCase()));

    return matchesCategory && matchesSearch && matchesMode;
  });

  return (
    <div className="w-full text-left py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* 1. Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded-full mb-3 inline-block">
            Civil Services 2026-27 Curricula
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            UPSC CSE Programmes &amp; Courses
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Choose from comprehensive General Studies Foundation batches, Rankers-Led Mentorship, Optional subjects, CSAT, and Test Series designed for Prelims &amp; Mains excellence. Available in Classroom &amp; LIVE-Online modes.
          </p>
        </div>
      </div>

      {/* 2. Search & Category Filters Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        
        {/* Search & Mode Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search course title, subject, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-[#fb5621] outline-none"
            />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-semibold text-slate-500">Mode:</span>
            {['ALL', 'Classroom', 'Live-Online'].map((mode) => (
              <button
                key={mode}
                onClick={() => setModeFilter(mode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  modeFilter === mode
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
          {[
            { id: 'ALL', label: 'All Courses' },
            { id: 'GS', label: 'UPSC (GS)' },
            { id: 'State PCS', label: 'State PCS' },
            { id: 'NEET', label: 'NEET (Medical)' },
            { id: 'JEE', label: 'JEE (Advance & Mains)' },
            { id: 'Tuitions', label: 'Tuitions (9th-12th)' },
            { id: 'Mentorship', label: 'StepUp Mentorship' },
            { id: 'Optional', label: 'Optional Subjects' },
            { id: 'CSAT', label: 'CSAT' },
            { id: 'Test Series', label: 'Test Series' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#c63000] to-[#fb6f21] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-[#c63000]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* 3. Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200/80 flex flex-col group cursor-pointer hover:-translate-y-1"
          >
            {/* Image Thumbnail */}
            <div className="relative h-48 bg-slate-100 overflow-hidden">
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
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                <span>⏱ Duration: {course.duration}</span>
                <span className="font-bold bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                  {course.fee || "Check Details"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#c63000] transition-colors leading-snug mb-2">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Features Mini List */}
                <div className="space-y-1.5 mb-4">
                  {course.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mode & Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {course.mode.map((m, idx) => (
                    <span key={idx} className="text-[10px] font-semibold bg-orange-50 text-orange-800 px-2 py-0.5 rounded">
                      {m}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-[#c63000] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View Syllabus →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="bg-slate-50 p-12 rounded-2xl text-center border border-slate-200">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h4 className="font-bold text-slate-800 text-lg">No matching courses found</h4>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Try resetting your search query or selecting a different category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('ALL');
              setSearchQuery('');
              setModeFilter('ALL');
            }}
            className="text-xs font-bold bg-[#c63000] text-white px-4 py-2 rounded-full"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 4. Comparative Course Fee & Duration Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          UPSC 2026-27 Fee &amp; Duration Comparison
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Transparent fee breakdown for Classroom &amp; Live-Online programmes. Instalment facilities available.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <th className="p-3.5">Course Programme</th>
                <th className="p-3.5">Category</th>
                <th className="p-3.5">Duration</th>
                <th className="p-3.5">Available Modes</th>
                <th className="p-3.5">Tuition Fee</th>
                <th className="p-3.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {FEATURED_COURSES.map((course) => (
                <tr key={course.id} className="hover:bg-orange-50/50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{course.title}</td>
                  <td className="p-3.5 text-slate-600">{course.category}</td>
                  <td className="p-3.5 text-slate-600">{course.duration}</td>
                  <td className="p-3.5 text-slate-600">{course.mode.join(', ')}</td>
                  <td className="p-3.5 font-bold text-[#c63000]">{course.fee || "Contact Desk"}</td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="px-3 py-1 bg-slate-900 hover:bg-[#c63000] text-white font-bold rounded-lg text-[11px] transition-colors"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
