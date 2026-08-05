import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/dazzleData';
import { ServiceItem } from '../types';
import { ArrowUpRight, Plus, Stethoscope } from 'lucide-react';
import { AmbientBackground } from './ui/AmbientBackground';
import { SectionHeading } from './ui/SectionHeading';
import { MagneticButton } from './ui/MagneticButton';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(
    SERVICES_DATA[0],
  );

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-[#f0eeed] scroll-mt-20 relative overflow-hidden"
    >
      <AmbientBackground variant="light" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Services Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-black/10">
          <SectionHeading
            eyebrow="What We Offer"
            eyebrowIcon={<Stethoscope className="w-4 h-4" />}
            title={
              <>
                <span className="text-[#002582]">services</span>{' '}
                <span className="text-gradient-blue">&amp; care</span>
              </>
            }
          />

          <div className="max-w-md flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-base sm:text-lg text-black/70 leading-relaxed"
            >
              Our dental clinic offers a wide range of services to fully meet the
              needs and expectations of our patients.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <MagneticButton strength={0.25}>
                <button
                  onClick={onOpenConsultation}
                  className="btn-dazzle text-sm md:text-base cursor-pointer"
                >
                  <span>Schedule a consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Services Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 border-t border-b border-black/10">
            {SERVICES_DATA.map((service) => {
              const isHovered = hoveredService?.id === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service)}
                  onClick={() => onSelectService(service)}
                  className="group py-6 md:py-8 cursor-pointer transition-colors duration-300 relative"
                >
                  {/* Left accent bar on hover */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 rounded-full bg-[#002582] transition-all duration-400 ${
                      isHovered ? 'h-3/5 opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div className="flex items-start justify-between gap-4 pl-2 md:pl-4">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span
                        className={`text-lg md:text-xl font-bold transition-colors ${
                          isHovered ? 'text-[#002582]' : 'text-black/35'
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black group-hover:text-[#002582] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isHovered
                          ? 'bg-[#002582] border-[#002582] text-white rotate-45'
                          : 'bg-white border-black/10 text-black'
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="mt-3 text-sm md:text-base text-black/60 pl-2 md:pl-10 max-w-2xl line-clamp-2 group-hover:text-black/80 transition-colors">
                    {service.description}
                  </p>

                  <div className="mt-4 pl-2 md:pl-10 flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/70 border border-black/5 text-black/70 font-medium group-hover:border-[#002582]/25 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Image Sticky Preview (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)] border-4 border-white bg-white glow-ring">
              <AnimatePresence mode="wait">
                {hoveredService && (
                  <motion.div
                    key={hoveredService.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={hoveredService.image}
                      alt={hoveredService.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-8 flex flex-col justify-end text-white">
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 w-fit mb-4">
                        Service {hoveredService.number}
                      </div>
                      <h4 className="text-3xl font-bold mb-2">
                        {hoveredService.title}
                      </h4>
                      <p className="text-sm text-white/90 line-clamp-3 mb-5">
                        {hoveredService.description}
                      </p>
                      <button
                        onClick={() => onSelectService(hoveredService)}
                        className="inline-flex items-center gap-2 bg-white text-[#002582] w-fit px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#002582] hover:text-white transition-colors shadow-xl"
                      >
                        <span>Learn more & book</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
