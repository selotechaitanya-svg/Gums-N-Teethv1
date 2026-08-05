import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Award,
  UserCheck,
  GraduationCap,
} from 'lucide-react';
import { DENTISTS_DATA } from '../data/dazzleData';
import { AmbientBackground } from './ui/AmbientBackground';
import { SectionHeading } from './ui/SectionHeading';
import { Stagger, StaggerItem } from './ui/Reveal';

/* ── Animated count-up number ─────────────────────────── */
interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, end, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
};

/* Word-by-word staggered reveal text component */
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

  const stats: {
    end: number;
    suffix?: string;
    decimals?: number;
    label: string;
  }[] = [
    { end: 15, suffix: '+', label: 'Years of clinical excellence' },
    { end: 500, suffix: '+', label: 'Happy clients & smiles' },
    { end: 5, decimals: 1, suffix: '★', label: 'Top-rated Google reviews' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#f0eeed] scroll-mt-20 relative overflow-hidden">
      {/* Decorative ambient background */}
      <AmbientBackground variant="light" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Meet Our Lead Dentists"
            eyebrowIcon={<UserCheck className="w-4 h-4" />}
            title={
              <>
                About <span className="text-gradient-blue">Us</span>
              </>
            }
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg text-black/70 max-w-xl font-medium leading-relaxed"
          >
            Founded with a vision to deliver painless, precise, and compassionate
            oral care in Nagpur. Get to know our experienced dental surgeons below.
          </motion.p>
        </div>

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
                className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-black/10 text-sm md:text-base font-semibold text-black/90 shadow-2xs card-lift hover:border-[#002582]/40 hover:shadow-[0_12px_32px_-12px_rgba(0,37,130,0.3)] cursor-default"
              >
                <IconComponent className="w-4 h-4 text-[#002582]" />
                <span>{tag.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Doctors Profiles Showcase */}
        <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {DENTISTS_DATA.map((doctor) => (
            <StaggerItem key={doctor.id}>
              <div className="relative group h-full">
                {/* Ambient glow behind card */}
                <div className="absolute -inset-px rounded-[30px] bg-gradient-to-br from-[#002582]/0 via-transparent to-sky-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md group-hover:from-[#002582]/15 group-hover:to-sky-300/25" />

                <div className="relative bg-white rounded-[28px] border border-black/10 p-6 sm:p-8 shadow-sm card-lift hover:shadow-[0_32px_64px_-20px_rgba(0,37,130,0.28)] hover:border-[#002582]/25 flex flex-col justify-between h-full overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002582] via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div>
                    {/* Doctor Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 pb-6 border-b border-black/10">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-black/10 shadow-md">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full bg-gradient-to-r from-[#002582] to-sky-400" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#002582] to-[#123fb8] text-white text-xs font-bold shadow-md">
                            <GraduationCap className="w-3.5 h-3.5" />
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

                    {/* Animated Word-by-Word Description */}
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
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#f0eeed] text-gray-800 border border-black/5 group-hover:bg-[#002582]/5 transition-colors"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Stats Counter Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-black/10">
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="relative bg-white p-8 rounded-3xl border border-black/10 flex flex-col justify-between hover:border-[#002582]/40 transition-colors shadow-2xs card-lift group overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[#002582]/5 group-hover:bg-[#002582]/10 transition-colors" />
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#002582] via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight tabular-nums relative bg-gradient-to-br from-[#002582] to-[#2455d6] bg-clip-text text-transparent">
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix ?? ''}
                    decimals={stat.decimals ?? 0}
                  />
                </div>
                <div className="text-lg md:text-xl font-semibold text-black/80 mt-4">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};
