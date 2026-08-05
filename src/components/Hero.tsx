import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDown,
  Maximize2,
  Sparkles,
  ArrowUpRight,
  X,
  Star,
  Microscope,
  ScanLine,
  Zap,
  Smile,
  Crown,
  Clock,
  BadgeCheck,
  Award,
} from 'lucide-react';
import { GOOGLE_REVIEWS_DATA } from '../data/googleReviewsData';

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

const TRUST_ITEMS = [
  { icon: Star, label: '5.0 Google Rating' },
  { icon: Microscope, label: 'Microscopic Precision' },
  { icon: ScanLine, label: '3D Digital Scanning' },
  { icon: Zap, label: 'Laser Treatments' },
  { icon: Smile, label: '500+ Happy Smiles' },
  { icon: Crown, label: 'Implant Center' },
  { icon: Clock, label: 'Evening Timings' },
  { icon: BadgeCheck, label: 'Certified Specialists' },
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

  // Patient avatars for the social-proof row
  const avatars = GOOGLE_REVIEWS_DATA.slice(0, 4);

  return (
    <section className="relative min-h-screen pt-32 md:pt-44 pb-0 overflow-hidden bg-[#f0eeed] flex flex-col">
      {/* ── Decorative background ───────────────────────── */}
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />
      <div className="blob top-[-12%] right-[-8%] w-[520px] h-[520px] bg-[#002582]/10" />
      <div className="blob bottom-[18%] left-[-12%] w-[480px] h-[480px] bg-sky-300/30" />
      <div className="blob bottom-[-20%] right-[15%] w-[420px] h-[420px] bg-[#002582]/8" />

      <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-10 lg:py-6">
          {/* ── LEFT: Copy ─────────────────────────────── */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow-pill"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Nagpur's Trusted Dental Clinic</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-logo text-6xl sm:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-[0.95] mt-6 select-none"
            >
              <span className="text-[#002582]">Gums</span>{' '}
              <span className="font-body text-black font-normal text-3xl sm:text-4xl xl:text-5xl lowercase italic mx-0.5">
                n
              </span>{' '}
              <span className="text-gradient-blue">Teeth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-4 text-xs sm:text-sm md:text-base font-extrabold text-black/60 tracking-[0.25em] uppercase"
            >
              Dental Clinic &amp; Implant Center
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-black/75 leading-relaxed max-w-xl font-medium"
            >
              Delivering smiles with{' '}
              <span className="text-[#002582] font-bold">care</span>,{' '}
              <span className="text-[#002582] font-bold">innovation</span> and{' '}
              <span className="text-[#002582] font-bold">expertise</span> — precision
              microscopic dentistry, laser treatments and aesthetic smile design by
              Dr. Mitul &amp; Dr. Prachi Mishra.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={() => onOpenConsultation?.()}
                className="btn-dazzle text-base px-7 py-3.5 cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <a
                href="#services"
                className="btn-outline text-base px-7 py-3.5"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {avatars.map((review) => {
                    const initial = review.authorName.charAt(0).toUpperCase();
                    return (
                      <div
                        key={review.id}
                        className="w-10 h-10 rounded-full border-2 border-white bg-[#002582] text-white flex items-center justify-center text-xs font-bold shadow-md"
                        title={review.authorName}
                      >
                        {initial}
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-black/60 mt-0.5">
                    500+ happy patients
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#002582]/10 text-[#002582] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-black text-[#002582] leading-none">15+</p>
                  <p className="text-xs font-semibold text-black/60 mt-0.5">
                    Years of excellence
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Interactive 3D Fan Deck ──────────── */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            {/* Floating stat chips */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden lg:flex absolute top-4 left-0 xl:left-2 z-20 items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-black/10 shadow-xl animate-float"
            >
              <div className="w-9 h-9 rounded-xl bg-[#002582] text-white flex items-center justify-center">
                <Award className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-sm font-black text-black leading-none">15+ Years</p>
                <p className="text-[11px] font-semibold text-black/55 mt-0.5">
                  Clinical Excellence
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="hidden lg:flex absolute bottom-16 right-0 xl:right-4 z-20 items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-black/10 shadow-xl animate-float-delay"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <Smile className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-sm font-black text-black leading-none">500+ Smiles</p>
                <p className="text-[11px] font-semibold text-black/55 mt-0.5">
                  Transformed
                </p>
              </div>
            </motion.div>

            {/* Deck */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"
            >
              {HERO_STACK_DATA.map((card, originalIndex) => {
                const positionInDeck = deckOrder.indexOf(originalIndex);
                const isTopCard = positionInDeck === 0;
                const isHovered = hoveredCardId === card.id;

                const offset = positionInDeck - 1.5;
                const desktopAngle = offset * 13;
                const desktopX = offset * 42;

                const cardZIndex = isHovered ? 60 : 40 - positionInDeck * 10;

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
                    style={{ zIndex: cardZIndex, transformOrigin: '50% 110%' }}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    onClick={() => bringToTop(originalIndex)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        bringToTop(originalIndex);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View details: ${card.title}`}
                    className="absolute top-2 w-[230px] sm:w-[290px] lg:w-[350px] xl:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-4 border-white cursor-pointer group bg-black/5 select-none"
                  >
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 sm:p-5 flex flex-col justify-between text-white pointer-events-none">
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

                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight drop-shadow-md">
                          {card.title}
                        </h3>
                        <p className="text-xs text-white/80 line-clamp-1 mt-0.5 font-normal">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>

                    {isTopCard && (
                      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-ping" />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Active top card feature bar */}
            {topCard && (
              <motion.div
                key={topCard.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-5 sm:mt-6 w-full max-w-xl mx-auto bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-black/10 shadow-xs flex items-center justify-between gap-4"
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

                <button
                  onClick={() => onOpenConsultation?.(topCard.title)}
                  className="px-4 py-2 rounded-full bg-[#002582] hover:bg-black text-white text-xs font-extrabold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs shrink-0"
                >
                  <span>Book Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom trust marquee ─────────────────────────── */}
      <div className="relative z-10 border-t border-black/10 bg-white/50 backdrop-blur-sm mt-10">
        <div className="marquee-container w-full overflow-hidden py-4">
          <div className="animate-marquee-left animate-marquee-fast items-center gap-12 px-6">
            {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.label}-${index}`}
                  className="flex items-center gap-2.5 shrink-0"
                >
                  <div className="w-8 h-8 rounded-full bg-[#002582]/8 text-[#002582] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-black/70 whitespace-nowrap">
                    {item.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#002582]/30 ml-6" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden md:flex absolute bottom-24 right-8 xl:right-14 z-20 w-12 h-12 rounded-full bg-white border border-black/10 text-[#002582] items-center justify-center shadow-lg hover:bg-[#002582] hover:text-white hover:scale-110 active:scale-95 transition-all group"
        aria-label="Scroll down to About Section"
      >
        <div className="animate-bounce-subtle">
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.a>

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
