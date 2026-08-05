import React from 'react';
import { motion } from 'motion/react';

interface WordRevealProps {
  text: string;
  className?: string;
  /** Words matching these substrings get the brand highlight color */
  highlight?: string[];
  highlightClassName?: string;
  as?: 'h1' | 'h2' | 'p' | 'span' | 'div';
}

/**
 * Word-by-word staggered reveal, ideal for hero headlines and quotes.
 * Animates transform/opacity only; fades in cleanly on reduced motion.
 */
export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className,
  highlight = [],
  highlightClassName = 'text-[#002582]',
  as = 'p',
}) => {
  const words = text.split(' ');
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.055 } },
      }}
      className={`flex flex-wrap gap-x-2.5 gap-y-1 ${className ?? ''}`}
    >
      {words.map((word, i) => {
        const isHighlight = highlight.some((h) => word.toLowerCase().includes(h.toLowerCase()));
        return (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className={isHighlight ? highlightClassName : undefined}
          >
            {word}
          </motion.span>
        );
      })}
    </Component>
  );
};
