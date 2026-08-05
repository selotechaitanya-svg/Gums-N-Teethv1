import React from 'react';

interface ClinicLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'full' | 'icon-only' | 'badge';
  lightMode?: boolean;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  lightMode = false,
}) => {
  // Dimensions for icon
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-36 h-36',
  }[size];

  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex items-center justify-center rounded-full bg-black border-4 border-[#002582] p-1.5 shadow-xl select-none ${dimensions} ${className}`}>
        <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Double Blue & White Outer Ring */}
          <circle cx="150" cy="150" r="142" stroke="#38bdf8" strokeWidth="6" />
          <circle cx="150" cy="150" r="134" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="180 8 180 8" />
          <circle cx="150" cy="150" r="110" stroke="#38bdf8" strokeWidth="3" />
          
          {/* Black inner background */}
          <circle cx="150" cy="150" r="108" fill="#050505" />

          {/* Top Text: Dr. Mishra's */}
          <text
            x="150"
            y="70"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="18"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Dr. Mishra&apos;s
          </text>

          {/* Center Tooth & Implant Emblem */}
          <g transform="translate(90, 85) scale(1.2)">
            {/* Top-Left Blue Swoosh */}
            <path
              d="M 22 25 C 10 15 25 5 45 12 C 30 18 28 25 22 25 Z"
              fill="#4A8BF5"
            />
            {/* Top-Right Cyan/Blue Swoosh */}
            <path
              d="M 43 12 C 60 5 80 18 70 42 C 65 30 55 18 43 12 Z"
              fill="#38bdf8"
            />
            {/* Bottom-Left Green Root Swoosh */}
            <path
              d="M 22 25 C 28 35 25 55 38 65 C 48 70 50 55 42 42 C 32 32 25 25 22 25 Z"
              fill="#4EC338"
            />
            {/* Bottom-Right Blue Implant Screw */}
            <g fill="#3B62D6">
              <path d="M 46 44 C 54 44 60 48 56 52 C 50 52 46 48 46 44 Z" />
              <path d="M 48 53 C 54 53 58 56 55 59 C 50 59 47 56 48 53 Z" />
              <path d="M 49 60 C 53 60 56 62 54 65 C 50 65 48 62 49 60 Z" />
              <path d="M 50 66 L 52 70 L 49 71 Z" />
            </g>
          </g>

          {/* Middle Text: Gums 'N' Teeth */}
          <text
            x="150"
            y="200"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="20"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            Gums &apos;N&apos; Teeth
          </text>

          {/* Circular Bottom Text: DENTAL CLINIC & IMPLANT CENTER */}
          <path id="bottomTextPath" d="M 42,160 A 112,112 0 0,0 258,160" fill="none" />
          <text fill="#38bdf8" fontSize="13.5" fontWeight="900" letterSpacing="1.2" fontFamily="sans-serif">
            <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
              DENTAL CLINIC &amp; IMPLANT CENTER
            </textPath>
          </text>
        </svg>
      </div>
    );
  }

  // Modern Clean Vector Icon for inline usage in Navbar/Headers
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`relative flex items-center justify-center rounded-full bg-black border-2 border-[#002582] p-1 shadow-md shrink-0 ${dimensions}`}>
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="96" fill="#000000" stroke="#38bdf8" strokeWidth="4" />
          <circle cx="100" cy="100" r="88" stroke="#FFFFFF" strokeWidth="1.5" />
          
          <text x="100" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
            Dr. Mishra&apos;s
          </text>

          <g transform="translate(60, 52) scale(0.8)">
            <path d="M 22 25 C 10 15 25 5 45 12 C 30 18 28 25 22 25 Z" fill="#4A8BF5" />
            <path d="M 43 12 C 60 5 80 18 70 42 C 65 30 55 18 43 12 Z" fill="#38bdf8" />
            <path d="M 22 25 C 28 35 25 55 38 65 C 48 70 50 55 42 42 C 32 32 25 25 22 25 Z" fill="#4EC338" />
            <g fill="#3B62D6">
              <path d="M 46 44 C 54 44 60 48 56 52 C 50 52 46 48 46 44 Z" />
              <path d="M 48 53 C 54 53 58 56 55 59 C 50 59 47 56 48 53 Z" />
              <path d="M 49 60 C 53 60 56 62 54 65 C 50 65 48 62 49 60 Z" />
              <path d="M 50 66 L 52 70 L 49 71 Z" />
            </g>
          </g>

          <text x="100" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="800">
            Gums &apos;N&apos; Teeth
          </text>

          <path id="miniBottomPath" d="M 25,108 A 75,75 0 0,0 175,108" fill="none" />
          <text fill="#38bdf8" fontSize="8.5" fontWeight="900" letterSpacing="0.8">
            <textPath href="#miniBottomPath" startOffset="50%" textAnchor="middle">
              DENTAL CLINIC &amp; IMPLANT CENTER
            </textPath>
          </text>
        </svg>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col text-left">
          <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest leading-none mb-0.5">
            Dr. Mishra&apos;s
          </span>
          <span className={`font-logo text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase leading-none ${lightMode ? 'text-white' : 'text-[#002582]'}`}>
            Gums <span className="font-body text-black font-normal text-sm sm:text-base lowercase italic mx-0.5">n</span> Teeth
          </span>
          <span className="text-[9px] sm:text-[10px] font-extrabold text-[#002582] uppercase tracking-wider mt-0.5">
            Dental Clinic &amp; Implant Center
          </span>
        </div>
      )}
    </div>
  );
};
