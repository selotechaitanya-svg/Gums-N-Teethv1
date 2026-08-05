import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Award, UserCheck } from 'lucide-react';
import { DENTISTS_DATA } from '../data/dazzleData';

// Word-by-word staggered reveal text component matching QuoteSection effect
const AnimatedDoctorBio: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(' ');

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.065,
          },
        },
      }}
      className="text-base md:text-lg text-[#0d0d0d]/80 leading-relaxed font-normal flex flex-wrap gap-x-1.5 gap-y-1"
    >
      {words.map((word, idx) => {
        const isHighlight =
          word.toLowerCase().includes('implant') ||
          word.toLowerCase().includes('periodontist') ||
          word.toLowerCase().includes('cosmetology') ||
          word.toLowerCase().includes('surgeon') ||
          word.toLowerCase().includes('gums') ||
          word.toLowerCase().includes('teeth') ||
          word.toLowerCase().includes('nagpur') ||
          word.toLowerCase().includes('aesthetic');

        return (
          <motion.span
            key={idx}
            variants={{
              hidden: { opacity: 0.1, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className={isHighlight ? 'text-[#002582] font-semibold' : 'text-[#0d0d0d]'}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export const AboutSection: React.FC = () => {
  const tags = [
    { label: 'Tailored care', icon: Heart },
    { label: 'Comfort and safety', icon: ShieldCheck },
    { label: 'Experienced specialists', icon: Sparkles },
    { label: '500+ Happy Patients', icon: Award },
  ];

  const stats = [
    { number: '15+', label: 'Years of clinical excellence' },
    { number: '500+', label: 'Happy clients & smiles' },
    { number: '5.0★', label: 'Top-rated Google reviews' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#f0eeed] scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-[#002582] mb-3.5 shadow-2xs">
              <UserCheck className="w-4 h-4 text-[#002582]" />
              <span>Meet Our Lead Dentists</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#002582] uppercase">
              About Us
            </h2>
          </div>

          <p className="text-base sm:text-lg text-black/70 max-w-xl font-medium leading-relaxed">
            Founded with a vision to deliver painless, precise, and compassionate oral care in Nagpur.
            Get to know our experienced dental surgeons below.
          </p>
        </motion.div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {tags.map((tag) => {
            const IconComponent = tag.icon;
            return (
              <div
                key={tag.label}
                className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-black/10 text-sm md:text-base font-semibold text-black/90 shadow-2xs hover:border-[#002582]/40 transition-colors"
              >
                <IconComponent className="w-4 h-4 text-[#002582]" />
                <span>{tag.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Doctors Profiles Showcase - Both Doctors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {DENTISTS_DATA.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white rounded-[28px] border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Header: Image + Name & Role */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 pb-6 border-b border-black/10">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-black/10 shadow-xs">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#002582] text-white text-xs font-bold shadow-2xs">
                        {doctor.degrees}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#002582]/10 text-[#002582] text-xs font-bold">
                        {doctor.experienceYears}+ Years Experience
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#002582] mt-0.5">
                      {doctor.role}
                    </p>
                  </div>
                </div>

                {/* Animated Word-by-Word Description (Matching QuoteSection Effect) */}
                <div className="mb-6 min-h-[90px]">
                  <AnimatedDoctorBio text={doctor.bio} />
                </div>
              </div>

              {/* Specialization Badges */}
              <div className="pt-4 border-t border-black/5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                  Specializations
                </p>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialization.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#f0eeed] text-gray-800 border border-black/5"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter Grid - Highlighting 500+ Happy Clients */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-black/10"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-black/10 flex flex-col justify-between hover:border-[#002582]/40 transition-colors shadow-2xs group"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#002582] tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl font-semibold text-black/80 mt-4">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

