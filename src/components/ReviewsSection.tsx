import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle2, ExternalLink, X, MapPin } from 'lucide-react';
import { GoogleReview } from '../types';
import { GOOGLE_REVIEWS_DATA, GOOGLE_MAPS_LINK } from '../data/googleReviewsData';

// Google colorful SVG icon
const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
      fill="#4285F4"
    />
    <path
      d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.302 12.2445 19.302 C9.11389 19.302 6.45946 17.191 5.50941 14.3355H1.5166V17.4312C3.48866 21.3486 7.57294 24.0008 12.2401 24.0008Z"
      fill="#34A853"
    />
    <path
      d="M5.50501 14.3355C5.25586 13.5884 5.11471 12.7932 5.11471 11.9999C5.11471 11.2066 5.25586 10.4114 5.50501 9.66431V6.5686H1.5166C0.702082 8.19253 0.240234 10.0381 0.240234 11.9999C0.240234 13.9617 0.702082 15.8073 1.5166 17.4312L5.50501 14.3355Z"
      fill="#FBBC05"
    />
    <path
      d="M12.2401 4.69796C14.002 4.69796 15.5788 5.30292 16.825 6.48625L20.2739 3.03738C18.2015 1.1039 15.4722 0 12.2401 0C7.57294 0 3.48866 2.65215 1.5166 6.5686L5.50501 9.66431C6.45946 6.8088 9.11389 4.69796 12.2401 4.69796Z"
      fill="#EA4335"
    />
  </svg>
);

// Consistent initial badge color palette for reviewers
const AVATAR_BG_COLORS = [
  'bg-[#002582]',
  'bg-[#1e40af]',
  'bg-[#1d4ed8]',
  'bg-[#0369a1]',
  'bg-[#0f766e]',
  'bg-[#15803d]',
  'bg-[#b91c1c]',
  'bg-[#6b21a8]',
];

export const ReviewsSection: React.FC = () => {
  const [shuffledReviews, setShuffledReviews] = useState<GoogleReview[]>([]);
  const [selectedReview, setSelectedReview] = useState<GoogleReview | null>(null);

  // Randomize the review order on each page load
  useEffect(() => {
    const array = [...GOOGLE_REVIEWS_DATA];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledReviews(array);
  }, []);

  if (shuffledReviews.length === 0) return null;

  // Duplicate array for infinite seamless marquee loop
  const marqueeItems = [...shuffledReviews, ...shuffledReviews];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#f0eeed] relative overflow-hidden scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading & Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-[#002582] mb-3.5 shadow-2xs"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Google Reviews</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#002582]"
            >
              What Our Patients Say
            </motion.h2>
          </div>

          {/* Aggregate Rating & Google Maps Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="bg-white border border-black/10 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs">
              <div className="flex flex-col items-center justify-center bg-[#002582]/5 px-3.5 py-2 rounded-xl">
                <span className="text-2xl font-bold text-[#002582] leading-none">5.0</span>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0d0d0d] flex items-center gap-1.5">
                  Top-rated dental clinic
                  <CheckCircle2 className="w-4 h-4 text-[#002582] inline-block" />
                </p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  170+ verified Google reviews
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#002582] text-white hover:bg-black px-5 py-3.5 rounded-full font-medium text-sm transition-all shadow-xs active:scale-95 group cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-white" />
              <span>View on Google Maps</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Continuously Moving Testimonial Marquee */}
      <div className="marquee-container relative w-full overflow-hidden py-6">
        {/* Left & Right Smooth Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#f0eeed] via-[#f0eeed]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#f0eeed] via-[#f0eeed]/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee-left flex items-center gap-5 sm:gap-6 px-4">
          {marqueeItems.map((review, index) => {
            const isLong = review.text.length > 150;
            const displayText = isLong ? review.text.slice(0, 145) + '...' : review.text;
            const initial = review.authorName.charAt(0).toUpperCase();
            const bgClass = AVATAR_BG_COLORS[index % AVATAR_BG_COLORS.length];

            return (
              <div
                key={`${review.id}-${index}`}
                tabIndex={0}
                role="article"
                aria-label={`Review by ${review.authorName}`}
                className="w-[320px] sm:w-[360px] md:w-[380px] shrink-0 bg-white rounded-[20px] border border-[#E5E7EB] p-6 sm:p-7 shadow-2xs hover:shadow-2xl hover:shadow-black/10 hover:border-[#002582] hover:scale-[1.05] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between group select-none relative focus:outline-none focus:ring-2 focus:ring-[#002582]"
                onClick={() => isLong && setSelectedReview(review)}
              >
                {/* Top Row: Reviewer Avatar Badge + Name + Google Logo */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Clean Letter Initial Avatar (No image thumbnail) */}
                      <div className={`w-11 h-11 rounded-full ${bgClass} text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-xs border border-black/5`}>
                        {initial}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0d0d0d] leading-tight">
                            {review.authorName}
                          </h3>
                          <span title="Verified Google Reviewer">
                            <CheckCircle2 className="w-4 h-4 text-[#4285F4] shrink-0" />
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 font-medium block mt-0.5">
                          Google Review
                        </span>
                      </div>
                    </div>

                    {/* Small Google Logo */}
                    <div className="p-1.5 rounded-full bg-gray-50 border border-gray-100 shrink-0">
                      <GoogleIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Rating Gold Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[15px] sm:text-[16px] text-[#4B5563] leading-relaxed font-normal">
                    "{displayText}"
                  </p>
                </div>

                {/* Footer: Read More Action if text is long */}
                {isLong && (
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#002582] group-hover:underline">
                    <span>Read full review</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-[24px] p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close review detail"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#002582] text-white font-bold text-xl flex items-center justify-center shrink-0">
                  {selectedReview.authorName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-bold text-gray-900">
                      {selectedReview.authorName}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#4285F4]" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    Verified Google Review
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>

              {/* Full Review Text */}
              <p className="text-[#4B5563] text-base leading-relaxed mb-6 font-normal">
                "{selectedReview.text}"
              </p>

              {/* Google Maps External Link */}
              <div className="flex justify-end pt-4 border-t border-gray-100">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#002582] hover:underline"
                >
                  <GoogleIcon className="w-4 h-4" />
                  <span>Verify on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
