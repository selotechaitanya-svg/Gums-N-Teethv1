import React from 'react';
import { Quote } from 'lucide-react';
import { AmbientBackground } from './ui/AmbientBackground';
import { WordReveal } from './ui/WordReveal';

export const QuoteSection: React.FC = () => {
  const quoteText =
    'Experience superior dental care at Gums and Teeth, where we guarantee the use of the best materials, provide top-quality services, and ensure personalized attention for a radiant and healthy smile.';

  return (
    <section id="quote" className="py-16 md:py-24 bg-[#f0eeed] relative overflow-hidden">
      <AmbientBackground variant="light" />

      <div className="relative max-w-[1250px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative border-y border-black/10 py-12 md:py-16">
          {/* Decorative quote icon */}
          <div className="absolute -top-7 left-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#002582] to-[#123fb8] text-white flex items-center justify-center shadow-[0_16px_36px_-12px_rgba(0,37,130,0.6)] rotate-3 glow-ring">
            <Quote className="w-6 h-6" />
          </div>
          <div className="absolute -bottom-7 right-6 w-14 h-14 rounded-2xl bg-white border border-black/10 text-[#002582] flex items-center justify-center shadow-md -rotate-3 hidden sm:flex">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          <WordReveal
            as="p"
            text={quoteText}
            highlight={['Gums', 'Teeth']}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-snug sm:leading-tight md:leading-tight text-black"
          />
        </div>
      </div>
    </section>
  );
};
