/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { TopperModal } from './components/TopperModal';
import { CallbackModal } from './components/CallbackModal';
import { AdPopupModal } from './components/AdPopupModal';

import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { AboutPage } from './pages/AboutPage';
import { ToppersPage } from './pages/ToppersPage';
import { BatchesPage } from './pages/BatchesPage';
import { StudyMaterialPage } from './pages/StudyMaterialPage';
import { UpscExamPage } from './pages/UpscExamPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';

import { CourseItem, TopperItem } from './data/siteData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [courseCategoryFilter, setCourseCategoryFilter] = useState<string>('ALL');
  
  // Modals
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [selectedTopper, setSelectedTopper] = useState<TopperItem | null>(null);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  // Sync with window.location.hash for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash) {
        if (['home', 'courses', 'batches', 'toppers', 'study-materials', 'upsc-exam', 'about', 'contact', 'faq'].includes(hash)) {
          setCurrentPage(hash);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, extra?: any) => {
    setCurrentPage(page);
    if (page === 'courses' && extra) {
      setCourseCategoryFilter(extra);
    } else {
      setCourseCategoryFilter('ALL');
    }
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenCallback={() => setIsCallbackModalOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onSelectTopper={(topper) => setSelectedTopper(topper)}
          />
        )}

        {currentPage === 'courses' && (
          <CoursesPage
            initialCategory={courseCategoryFilter}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onOpenCallback={() => setIsCallbackModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenCallback={() => setIsCallbackModalOpen(true)}
          />
        )}

        {currentPage === 'toppers' && (
          <ToppersPage
            onSelectTopper={(topper) => setSelectedTopper(topper)}
            onOpenCallback={() => setIsCallbackModalOpen(true)}
          />
        )}

        {currentPage === 'batches' && (
          <BatchesPage
            onOpenCallback={() => setIsCallbackModalOpen(true)}
          />
        )}

        {currentPage === 'study-materials' && (
          <StudyMaterialPage />
        )}

        {currentPage === 'upsc-exam' && (
          <UpscExamPage
            onNavigate={handleNavigate}
            onOpenCallback={() => setIsCallbackModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'faq' && (
          <FaqPage
            onOpenCallback={() => setIsCallbackModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCallback={() => setIsCallbackModalOpen(true)}
      />

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      {/* Topper Detail Modal */}
      <TopperModal
        topper={selectedTopper}
        onClose={() => setSelectedTopper(null)}
      />

      {/* Let's Talk / Callback Modal */}
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />

      {/* Periodic Mentorship Advertisement Popup */}
      <AdPopupModal
        onOpenCallback={() => setIsCallbackModalOpen(true)}
      />
    </div>
  );
}
