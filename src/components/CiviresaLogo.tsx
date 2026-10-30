import React from 'react';

interface CiviresaLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'emblem';
  textColor?: string;
}

export const CiviresaLogo: React.FC<CiviresaLogoProps> = ({ 
  className = "w-12 h-12", 
  variant = "horizontal",
  textColor = "text-slate-900"
}) => {
  // Pure Emblem
  if (variant === 'emblem') {
    return (
      <svg 
        viewBox="0 0 600 370" 
        className={className} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#ea580c" stroke="#ea580c" strokeLinejoin="round">
          {/* Outer Triangle */}
          <path d="M 300 25 L 515 320 L 440 320 L 300 125 L 160 320 L 85 320 Z" fill="#ea580c" stroke="none" />
          {/* Inverted Triangle */}
          <path d="M 235 145 L 365 145 L 300 250 Z" fill="none" stroke="#ea580c" strokeWidth="26" strokeLinejoin="miter" />
          {/* Eye / Dot */}
          <circle cx="300" cy="182" r="16" fill="#ea580c" stroke="none" />
          {/* Open Book Wings */}
          <path d="M 170 230 C 220 225, 270 255, 298 285 C 265 268, 215 248, 160 248 Z" fill="#ea580c" stroke="none" />
          <path d="M 430 230 C 380 225, 330 255, 302 285 C 335 268, 385 248, 440 248 Z" fill="#ea580c" stroke="none" />
          <path d="M 295 300 C 240 265, 170 255, 115 273 C 170 273, 235 288, 290 320 Z" fill="#ea580c" stroke="none" />
          <path d="M 305 300 C 360 265, 430 255, 485 273 C 430 273, 365 288, 310 320 Z" fill="#ea580c" stroke="none" />
          <path d="M 293 324 C 235 296, 165 292, 92 318 C 150 306, 225 314, 290 338 Z" fill="#ea580c" stroke="none" />
          <path d="M 307 324 C 365 296, 435 292, 508 318 C 450 306, 375 314, 310 338 Z" fill="#ea580c" stroke="none" />
        </g>
      </svg>
    );
  }

  // Full Stacked Logo (as in image)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <svg 
          viewBox="0 0 600 550" 
          className="w-full h-auto max-w-[280px]" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#ea580c" stroke="#ea580c" strokeLinejoin="round">
            <path d="M 300 25 L 515 320 L 440 320 L 300 125 L 160 320 L 85 320 Z" fill="#ea580c" stroke="none" />
            <path d="M 235 145 L 365 145 L 300 250 Z" fill="none" stroke="#ea580c" strokeWidth="26" strokeLinejoin="miter" />
            <circle cx="300" cy="182" r="16" fill="#ea580c" stroke="none" />
            <path d="M 170 230 C 220 225, 270 255, 298 285 C 265 268, 215 248, 160 248 Z" fill="#ea580c" stroke="none" />
            <path d="M 430 230 C 380 225, 330 255, 302 285 C 335 268, 385 248, 440 248 Z" fill="#ea580c" stroke="none" />
            <path d="M 295 300 C 240 265, 170 255, 115 273 C 170 273, 235 288, 290 320 Z" fill="#ea580c" stroke="none" />
            <path d="M 305 300 C 360 265, 430 255, 485 273 C 430 273, 365 288, 310 320 Z" fill="#ea580c" stroke="none" />
            <path d="M 293 324 C 235 296, 165 292, 92 318 C 150 306, 225 314, 290 338 Z" fill="#ea580c" stroke="none" />
            <path d="M 307 324 C 365 296, 435 292, 508 318 C 450 306, 375 314, 310 338 Z" fill="#ea580c" stroke="none" />
          </g>
          <text x="300" y="425" textAnchor="middle" fontFamily="'Times New Roman', serif" fontWeight="900" fontSize="82" fill="#ea580c">
            CiViRESA
          </text>
          <line x1="70" y1="468" x2="195" y2="468" stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round" />
          <text x="300" y="478" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="33" letterSpacing="11" fill="#ea580c">
            INSTITUTE
          </text>
          <line x1="405" y1="468" x2="530" y2="468" stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round" />
          <text x="300" y="522" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="16.5" fill="#ea580c">
            UPSC  |  STATE PCS  |  NEET  |  JEE (ADVANCE &amp; MAINS)  |  TUITIONS
          </text>
        </svg>
      </div>
    );
  }

  // Horizontal Header Lockup
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem SVG */}
      <svg 
        viewBox="0 0 600 370" 
        className="w-11 h-11 sm:w-13 sm:h-13 shrink-0" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#ea580c" stroke="#ea580c" strokeLinejoin="round">
          <path d="M 300 25 L 515 320 L 440 320 L 300 125 L 160 320 L 85 320 Z" fill="#ea580c" stroke="none" />
          <path d="M 235 145 L 365 145 L 300 250 Z" fill="none" stroke="#ea580c" strokeWidth="26" strokeLinejoin="miter" />
          <circle cx="300" cy="182" r="16" fill="#ea580c" stroke="none" />
          <path d="M 170 230 C 220 225, 270 255, 298 285 C 265 268, 215 248, 160 248 Z" fill="#ea580c" stroke="none" />
          <path d="M 430 230 C 380 225, 330 255, 302 285 C 335 268, 385 248, 440 248 Z" fill="#ea580c" stroke="none" />
          <path d="M 295 300 C 240 265, 170 255, 115 273 C 170 273, 235 288, 290 320 Z" fill="#ea580c" stroke="none" />
          <path d="M 305 300 C 360 265, 430 255, 485 273 C 430 273, 365 288, 310 320 Z" fill="#ea580c" stroke="none" />
          <path d="M 293 324 C 235 296, 165 292, 92 318 C 150 306, 225 314, 290 338 Z" fill="#ea580c" stroke="none" />
          <path d="M 307 324 C 365 296, 435 292, 508 318 C 450 306, 375 314, 310 338 Z" fill="#ea580c" stroke="none" />
        </g>
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className="font-serif font-black text-xl sm:text-2xl tracking-wide text-[#ea580c]">
            CiViRESA
          </span>
          <span className="font-sans font-bold text-[11px] sm:text-xs tracking-[0.2em] text-[#ea580c] uppercase">
            INSTITUTE
          </span>
        </div>
        <span className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider mt-1 uppercase line-clamp-1">
          UPSC • STATE PCS • NEET • JEE • TUITIONS
        </span>
      </div>
    </div>
  );
};
