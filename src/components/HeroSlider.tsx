import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Award, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../data/siteData';

interface HeroSliderProps {
  onNavigate: (page: string, extra?: any) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = HERO_SLIDES.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPaused, slideCount]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div 
      className="relative w-full overflow-hidden bg-slate-950 text-white shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Aspect Container */}
      <div className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[540px] w-full flex items-center">
        
        {/* Background Image / Gradient Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeSlide.imageUrl}
            alt={activeSlide.title}
            className="w-full h-full object-cover object-center transition-all duration-700 scale-100 filter brightness-95"
            onError={(e) => {
              // Graceful fallback to rich brand gradient if image fails
              const target = e.target as HTMLElement;
              target.style.display = 'none';
            }}
          />
          {/* Subtle gradient scrim for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <div className="max-w-2xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg border border-orange-400/30 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeSlide.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 drop-shadow-md text-balance">
              {activeSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 mb-8 leading-relaxed font-normal max-w-xl drop-shadow">
              {activeSlide.subtitle}
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate(activeSlide.buttonLink)}
                className="bg-gradient-to-r from-[#c63000] to-[#fb6f21] hover:from-[#b02b00] hover:to-[#e85b12] text-white px-7 py-3 rounded-full text-sm font-bold shadow-xl shadow-orange-600/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>{activeSlide.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-full text-sm font-bold transition-all cursor-pointer"
              >
                Book Free Consultation
              </button>
            </div>

          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#c63000] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#c63000] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all rounded-full ${
                idx === currentSlide
                  ? 'w-8 bg-orange-500 shadow-md'
                  : 'w-2 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
