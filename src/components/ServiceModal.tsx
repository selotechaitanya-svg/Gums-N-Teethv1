import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceItem } from '../types';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-[#f0eeed] rounded-3xl overflow-hidden shadow-2xl border border-black/10 max-h-[90vh] flex flex-col"
        >
          {/* Header Image */}
          <div className="relative h-56 sm:h-64 w-full bg-black">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider bg-[#002582] px-3 py-1 rounded-full">
                Service {service.number}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Overview & Included Procedures
              </h3>
              <p className="text-base text-black/80 leading-relaxed mb-6">
                {service.description}
              </p>

              <h4 className="text-sm font-semibold text-[#002582] uppercase tracking-wider mb-3">
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-black/5 text-sm font-medium text-black/80 shadow-2xs"
                  >
                    <CheckCircle className="w-4 h-4 text-[#002582] shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-black/50">
                Customized care plans provided after initial consultation.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onBookService(service.title);
                }}
                className="btn-dazzle text-sm py-3 px-6 w-full sm:w-auto"
              >
                <span>Book {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
