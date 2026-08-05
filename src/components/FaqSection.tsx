import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/dazzleData';
import { FaqItem } from '../types';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';

interface FaqCardProps {
  faq: FaqItem;
}

const FaqCard: React.FC<FaqCardProps> = ({ faq }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="region"
      aria-label={`FAQ ${faq.number}: ${faq.question}`}
      className="relative cursor-pointer select-none group focus:outline-none h-[270px] pt-6"
    >
      <motion.div
        animate={{
          y: isHovered ? -18 : 0,
          borderColor: isHovered ? '#002582' : '#DADADA',
          boxShadow: isHovered
            ? '0 28px 48px -12px rgba(0, 37, 130, 0.22), 0 8px 10px -6px rgba(0, 37, 130, 0.08)'
            : '0 0px 0px rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full h-[246px] bg-white rounded-2xl border p-5 flex flex-col justify-between relative overflow-hidden transition-colors"
      >
        {/* Hover gradient accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002582] via-sky-400 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Soft hover glow */}
        <div
          className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-sky-300/25 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Number & Thin Divider Line */}
        <div>
          <span
            className={`text-xs font-bold tracking-wider transition-colors duration-300 ${
              isHovered ? 'text-[#002582]' : 'text-black/50'
            }`}
          >
            {faq.number}
          </span>
          <div
            className={`w-full h-[1px] my-3 transition-colors duration-300 ${
              isHovered ? 'bg-[#002582]/30' : 'bg-[#DADADA]'
            }`}
          />
        </div>

        {/* Question & Answer Container */}
        <div className="flex-1 flex flex-col justify-end">
          <motion.h3
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs sm:text-sm font-medium uppercase tracking-wide text-black leading-snug"
          >
            {faq.question}
          </motion.h3>

          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-xs font-normal text-[#002582] leading-relaxed overflow-hidden"
              >
                {faq.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export const FaqSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle keyboard navigation (Left/Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollPrev();
      } else if (e.key === 'ArrowRight') {
        scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <section
      id="faq"
      className="py-24 md:py-36 bg-white overflow-hidden select-none scroll-mt-20 relative"
    >
      {/* Decorative blobs */}
      <div className="blob top-[-10%] right-[-8%] w-[400px] h-[400px] bg-[#002582]/5" />
      <div className="blob bottom-[-15%] left-[-8%] w-[380px] h-[380px] bg-sky-200/40" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="eyebrow-pill mb-4"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Good to Know</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-[#002582] uppercase"
            >
              FAQ
            </motion.h2>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 shrink-0 pb-1"
          >
            <button
              onClick={scrollPrev}
              aria-label="Previous FAQ slide"
              className="w-12 h-12 rounded-full border border-[#DADADA] bg-white flex items-center justify-center text-black hover:border-[#002582] hover:bg-gradient-to-r hover:from-[#002582] hover:to-[#123fb8] hover:text-white hover:shadow-[0_12px_28px_-10px_rgba(0,37,130,0.5)] transition-all shadow-xs active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002582]"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next FAQ slide"
              className="w-12 h-12 rounded-full border border-[#DADADA] bg-white flex items-center justify-center text-black hover:border-[#002582] hover:bg-gradient-to-r hover:from-[#002582] hover:to-[#123fb8] hover:text-white hover:shadow-[0_12px_28px_-10px_rgba(0,37,130,0.5)] transition-all shadow-xs active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002582]"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Viewport & Container */}
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6 py-4">
            {FAQ_DATA.map((faq) => (
              <div
                key={faq.id}
                className="pl-4 md:pl-6 flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%] min-w-0"
              >
                <FaqCard faq={faq} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
