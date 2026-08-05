import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-12 md:py-16 bg-[#f0eeed]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-[#002582] text-white px-8 sm:px-12 lg:px-16 py-14 sm:py-16 lg:py-20"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-grid-light opacity-60" />
          <div className="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-sky-400/25 blur-[100px]" />
          <div className="absolute -bottom-32 -left-16 w-[420px] h-[420px] rounded-full bg-[#38bdf8]/20 blur-[110px]" />
          <div className="absolute top-8 right-10 w-20 h-20 rounded-2xl border border-white/15 rotate-12 hidden md:block" />
          <div className="absolute bottom-10 right-28 w-10 h-10 rounded-full border border-white/20 hidden md:block" />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="eyebrow-pill-dark mb-5">
                <Sparkles className="w-4 h-4" />
                <span>Limited Slots Available</span>
              </div>
              <h2 className="font-logo text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05]">
                Your dream smile is{' '}
                <span className="text-sky-300">one visit away</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/75 font-medium leading-relaxed max-w-xl">
                Book a consultation with Dr. Mitul &amp; Dr. Prachi Mishra and
                experience painless, precision dental care designed around you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-4 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 bg-white text-[#002582] px-7 py-4 rounded-full font-black text-base hover:bg-sky-100 hover:scale-105 active:scale-95 transition-all shadow-2xl cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <a
                href="tel:09021751902"
                className="inline-flex items-center gap-2.5 border border-white/25 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full font-bold text-base hover:bg-white hover:text-[#002582] transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>09021751902</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
