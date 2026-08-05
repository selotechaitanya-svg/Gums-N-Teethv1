import React from 'react';
import { motion, type Variants } from 'motion/react';

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}

/** Container that staggers its <StaggerItem/> children when scrolled into view. */
export const Stagger: React.FC<StaggerProps> = ({ children, className, once = true }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
};
