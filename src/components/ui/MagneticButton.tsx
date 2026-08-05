import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  ariaLabel?: string;
}

/**
 * Magnetic hover micro-interaction.
 * The element is gently pulled toward the cursor with a spring,
 * and snaps back on leave. Disabled for coarse pointers & reduced motion.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  strength = 0.35,
  onClick,
  ariaLabel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.6 });

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduceMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
      y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [reduceMotion, strength, x, y],
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-block ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
};
