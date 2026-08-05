import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/dazzleData';
import { FaqItem } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
          borderColor: isHovered ? '#1F49C6' : '#DADADA',
          boxShadow: isHovered
            ? '0 20px 25px -5px rgba(31, 73, 198, 0.12), 0 8px 10px -6px rgba(31, 73, 198, 0.06)'
            : '0 0px 0px rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full h-[246px] bg-white rounded-2xl border p-5 flex flex-col justify-between relative overflow-hidden transition-colors"
      >
        {/* Number & Thin Divider Line */}
        <div>
          <span
            className={`text-xs font-semibold tracking-wider transition-colors duration-300 ${
              isHovered ? 'text-[#1F49C6]' : 'text-black/60'
            }`}
          >
            {faq.number}
          </span>
          <div
            className={`w-full h-[1px] my-3 transition-colors duration-300 ${
              isHovered ? 'bg-[#1F49C6]/30' : 'bg-[#DADADA]'
            }`}
          />
        </div>

        {/* Question & Answer Container */}
        <div className="flex-1 flex flex-col justify-end">
          {/* Question Text */}
          <motion.h3
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs sm:text-sm font-medium uppercase tracking-wide text-black leading-snug"
          >
            {faq.question}
          </motion.h3>

          {/* Answer Text (Hidden initially, revealed on hover) */}
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-xs font-normal text-[#1F49C6] leading-relaxed overflow-hidden"
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
    <section className="py-24 md:py-36 bg-white overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Header: FAQ Title + Carousel Prev/Next Circular Buttons */}
        <div className="flex items-center justify-between gap-6 mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-[#002582] uppercase"
          >
            FAQ
          </motion.h2>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 shrink-0"
          >
            <button
              onClick={scrollPrev}
              aria-label="Previous FAQ slide"
              className="w-12 h-12 rounded-full border border-[#DADADA] bg-white flex items-center justify-center text-black hover:border-[#1F49C6] hover:bg-[#1F49C6] hover:text-white transition-all shadow-xs active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F49C6]"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next FAQ slide"
              className="w-12 h-12 rounded-full border border-[#DADADA] bg-white flex items-center justify-center text-black hover:border-[#1F49C6] hover:bg-[#1F49C6] hover:text-white transition-all shadow-xs active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F49C6]"
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
