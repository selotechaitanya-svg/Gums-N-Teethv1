import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDown,
  Maximize2,
  Sparkles,
  ArrowUpRight,
  X,
} from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';

interface HeroProps {
  onScrollToAbout?: () => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

export interface HeroImageCard {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  badge: string;
  tags: string[];
}

const HERO_STACK_DATA: HeroImageCard[] = [
  {
    id: 'img-1',
    title: 'Precision Microscopic Care',
    subtitle: 'Advanced optical magnification for pain-free treatment',
    src: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d12bf5c24585a77ea6c899_about-hero-04.webp',
    alt: 'Dentist in scrubs using magnifying glasses with patient',
    badge: '01 • Diagnostics',
    tags: ['Magnification', 'Precision', 'Pain-Free'],
  },
  {
    id: 'img-2',
    title: 'Modern Laser Orthodontics',
    subtitle: 'Aesthetic clear aligners & gentle braces technology',
    src: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d12bf56bfb13beada7baa2_about-hero-03.webp',
    alt: 'Close-up of dental treatment with braces and blue light',
    badge: '02 • Orthodontics',
    tags: ['Clear Aligners', 'Laser Light', 'Alignment'],
  },
  {
    id: 'img-3',
    title: 'State-of-the-Art Suite',
    subtitle: 'Ergonomic treatment chairs with soothing atmosphere',
    src: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d12bf59e553967956f72dc_about-hero-02.webp',
    alt: 'Modern dental clinic interior featuring treatment chair',
    badge: '03 • Facility',
    tags: ['Relaxing', 'Sterile', 'High-Tech'],
  },
  {
    id: 'img-4',
    title: 'Vibrant Aesthetic Smile Design',
    subtitle: 'Custom porcelain veneers & natural shade matching',
    src: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d12bf578650b5374ee87a9_about-hero-01.webp',
    alt: 'Dental models with vibrant teeth on blue dental cloth',
    badge: '04 • Aesthetics',
    tags: ['Veneers', 'Shade Guide', 'Smile Design'],
  },
];

export const Hero: React.FC<HeroProps> = ({ onScrollToAbout, onOpenConsultation }) => {
  // Deck order state: indices of HERO_STACK_DATA in order from top to bottom
  const [deckOrder, setDeckOrder] = useState<number[]>([0, 1, 2, 3]);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [previewCard, setPreviewCard] = useState<HeroImageCard | null>(null);

  // Auto shuffle / cycle timer every 3.5 seconds
  useEffect(() => {
    if (hoveredCardId || previewCard) return;
    const interval = setInterval(() => {
      setDeckOrder((prev) => {
        const [top, ...rest] = prev;
        return [...rest, top];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [hoveredCardId, previewCard]);

  // Move specific card index to top
  const bringToTop = (cardIdx: number) => {
    setDeckOrder((prev) => {
      const filtered = prev.filter((idx) => idx !== cardIdx);
      return [cardIdx, ...filtered];
    });
  };

  const topCardIndex = deckOrder[0];
  const topCard = HERO_STACK_DATA[topCardIndex];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-24 md:pt-32 pb-12 flex flex-col justify-between overflow-hidden bg-[#f0eeed]">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between">
        
        {/* Main Hero Title / Branding */}
        <div className="w-full flex justify-center mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl text-center flex flex-col items-center"
          >
            <h1 className="font-logo text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#002582] uppercase leading-none select-none">
              GUMS <span className="font-body text-black font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl lowercase italic mx-1 sm:mx-2">n</span> TEETH
            </h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-extrabold text-black/70 tracking-widest uppercase">
              Dental Clinic &amp; Implant Center
            </p>
          </motion.div>
        </div>

        {/* HERO STACK DISPLAY CONTAINER */}
        <div className="relative my-4 md:my-8 min-h-[320px] sm:min-h-[380px] md:min-h-[440px] w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
          
          {/* Automatic Symmetrical 3D Fan Deck */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
            {HERO_STACK_DATA.map((card, originalIndex) => {
              // Position of this card in current deck order (0 = top, 3 = bottom)
              const positionInDeck = deckOrder.indexOf(originalIndex);
              const isTopCard = positionInDeck === 0;
              const isHovered = hoveredCardId === card.id;

              // Mathematical Symmetrical Fan Angles centered at origin (50% 110%)
              const offset = positionInDeck - 1.5;
              
              // Rotation angle
              const desktopAngle = offset * 14; // -21deg, -7deg, 7deg, 21deg
              
              // Horizontal offset spread
              const desktopX = offset * 45; // -67.5px to +67.5px

              // Z index: top card gets highest
              const cardZIndex = isHovered ? 60 : (40 - positionInDeck * 10);

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: isHovered ? -24 : isTopCard ? -8 : positionInDeck * 6,
                    x: isHovered ? desktopX * 1.1 : desktopX,
                    rotate: isHovered ? 0 : desktopAngle,
                    scale: isHovered ? 1.06 : isTopCard ? 1 : 0.96 - positionInDeck * 0.02,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 24,
                    mass: 0.8,
                  }}
                  style={{
                    zIndex: cardZIndex,
                    transformOrigin: '50% 110%',
                  }}
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => bringToTop(originalIndex)}
                  className="absolute top-2 w-[210px] sm:w-[280px] md:w-[350px] lg:w-[390px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-4 border-white cursor-pointer group bg-black/5 select-none"
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />

                  {/* Gradient Overlay & Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 sm:p-5 flex flex-col justify-between text-white pointer-events-none">
                    {/* Top Pill Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white shadow-xs">
                        {card.badge}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewCard(card);
                        }}
                        className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto hover:bg-white hover:text-black"
                        title="Expand photo"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Title & Subtitle */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight drop-shadow-md">
                        {card.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-1 mt-0.5 font-normal">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Top Card Indicator Ripple */}
                  {isTopCard && (
                    <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-ping" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Active Top Card Feature Detail Bar */}
          {topCard && (
            <motion.div
              key={topCard.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 sm:mt-8 w-full max-w-xl bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-black/10 shadow-xs flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-[#002582]/10 text-[#002582] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#002582]">
                    Featured • {topCard.badge}
                  </div>
                  <div className="text-sm font-bold text-black truncate">
                    {topCard.title}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onOpenConsultation?.(topCard.title)}
                  className="px-4 py-2 rounded-full bg-[#002582] hover:bg-black text-white text-xs font-extrabold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Book Only</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Hero Bottom Tagline & Scroll Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-black/10 mt-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-black/80 max-w-xl text-center sm:text-left leading-relaxed"
          >
            Delivering smiles with{' '}
            <span className="text-[#002582] font-semibold underline decoration-[#002582]/30 decoration-2 underline-offset-4">
              care
            </span>
            ,{' '}
            <span className="text-[#002582] font-semibold underline decoration-[#002582]/30 decoration-2 underline-offset-4">
              innovation
            </span>
            , and{' '}
            <span className="text-[#002582] font-semibold underline decoration-[#002582]/30 decoration-2 underline-offset-4">
              expertise
            </span>
            .
          </motion.p>

          <motion.a
            href="#about"
            onClick={(e) => {
              if (onScrollToAbout) {
                e.preventDefault();
                onScrollToAbout();
              }
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-14 h-14 rounded-full bg-[#002582] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group shrink-0"
            aria-label="Scroll down to About Section"
          >
            <div className="animate-bounce-subtle">
              <ArrowDown className="w-6 h-6 text-white group-hover:translate-y-0.5 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>

      {/* Lightbox Modal for Hero Stack Preview */}
      <AnimatePresence>
        {previewCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCard(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => setPreviewCard(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[75vh] flex items-center justify-center bg-black">
                <img
                  src={previewCard.src}
                  alt={previewCard.alt}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-6 bg-black text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    {previewCard.badge}
                  </span>
                  <h3 className="text-xl font-bold">{previewCard.title}</h3>
                  <p className="text-sm text-white/70">{previewCard.subtitle}</p>
                </div>

                <button
                  onClick={() => {
                    const title = previewCard.title;
                    setPreviewCard(null);
                    onOpenConsultation?.(title);
                  }}
                  className="btn-dazzle text-xs py-2.5 px-5 shrink-0"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

