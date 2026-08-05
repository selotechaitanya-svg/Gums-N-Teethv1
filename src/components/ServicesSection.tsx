import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/dazzleData';
import { ServiceItem } from '../types';
import { ArrowUpRight, Plus, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(
    SERVICES_DATA[0]
  );

  return (
    <section id="services" className="py-20 md:py-32 bg-[#f0eeed] scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Services Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-black/10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#002582] lowercase"
            >
              services
            </motion.h2>
          </div>

          <div className="max-w-md flex flex-col gap-6">
            <p className="text-base sm:text-lg text-black/70 leading-relaxed">
              Our dental clinic offers a wide range of services to fully meet the
              needs and expectations of our patients.
            </p>
            <div>
              <button
                onClick={onOpenConsultation}
                className="btn-dazzle text-sm md:text-base cursor-pointer"
              >
                <span>Schedule a consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Services Main Container: Interactive Hover List + Dynamic Preview Image */}
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
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className="text-lg md:text-xl font-medium text-black/40 group-hover:text-[#002582] transition-colors">
                        {service.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black group-hover:text-[#002582] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center group-hover:bg-[#002582] group-hover:text-white transition-all group-hover:scale-110">
                      <Plus className="w-5 h-5 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>

                  <p className="mt-3 text-sm md:text-base text-black/60 pl-9 md:pl-12 max-w-2xl line-clamp-2 group-hover:text-black/80 transition-colors">
                    {service.description}
                  </p>

                  <div className="mt-4 pl-9 md:pl-12 flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/70 border border-black/5 text-black/70 font-medium"
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
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white">
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
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-8 flex flex-col justify-end text-white">
                      <div className="text-xs uppercase tracking-wider font-semibold text-white/80 mb-1">
                        Service {hoveredService.number}
                      </div>
                      <h4 className="text-3xl font-bold mb-2">
                        {hoveredService.title}
                      </h4>
                      <p className="text-sm text-white/90 line-clamp-3 mb-4">
                        {hoveredService.description}
                      </p>
                      <button
                        onClick={() => onSelectService(hoveredService)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80 transition-colors"
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
