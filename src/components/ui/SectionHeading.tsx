import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  eyebrow: string;
  eyebrowIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

/**
 * Consistent premium section header: eyebrow pill → display title → description.
 * Staggered entrance with spring easing.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}) => {
  const centered = align === 'center';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09 } },
      }}
      className={`${centered ? 'text-center mx-auto' : ''} ${className}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        }}
        className={centered ? 'flex justify-center' : ''}
      >
        <div className={dark ? 'eyebrow-pill-dark mb-5' : 'eyebrow-pill mb-5'}>
          {eyebrowIcon}
          <span>{eyebrow}</span>
        </div>
      </motion.div>

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 34 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
        }}
        className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance ${
          dark ? 'text-white' : 'text-[#002582]'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
          }}
          className={`mt-5 text-base sm:text-lg leading-relaxed max-w-xl font-medium ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-white/70' : 'text-black/65'}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
