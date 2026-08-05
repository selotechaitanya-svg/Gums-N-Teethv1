import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  const quoteText =
    'Experience superior dental care at Gums and Teeth, where we guarantee the use of the best materials, provide top-quality services, and ensure personalized attention for a radiant and healthy smile.';

  const words = quoteText.split(' ');

  return (
    <section
      id="quote"
      className="py-16 md:py-24 bg-[#f0eeed] relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="blob top-[-30%] left-[20%] w-[380px] h-[380px] bg-[#002582]/8" />
      <div className="blob bottom-[-40%] right-[15%] w-[420px] h-[420px] bg-sky-300/20" />

      <div className="relative max-w-[1250px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative border-y border-black/10 py-12 md:py-16">
          {/* Decorative quote icon */}
          <div className="absolute -top-7 left-0 w-14 h-14 rounded-2xl bg-[#002582] text-white flex items-center justify-center shadow-lg rotate-3">
            <Quote className="w-6 h-6" />
          </div>
          <div className="absolute -bottom-7 right-6 w-14 h-14 rounded-2xl bg-white border border-black/10 text-[#002582] flex items-center justify-center shadow-md -rotate-3 hidden sm:flex">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.065,
                },
              },
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-snug sm:leading-tight md:leading-tight text-black flex flex-wrap gap-x-3 gap-y-2"
          >
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0.1, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className={
                  word.includes('Gums') || word.includes('Teeth')
                    ? 'text-[#002582] font-semibold'
                    : 'text-[#0d0d0d]'
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
