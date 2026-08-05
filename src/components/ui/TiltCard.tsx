import React, { useCallback, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt angle in degrees */
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

/**
 * Floating 3D card: rotates toward the cursor with a soft glare sweep.
 * Springs keep the motion at 60fps; disabled for coarse pointers & reduced motion.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  maxTilt = 8,
  scale = 1.02,
  glare = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 160, damping: 18, mass: 0.5 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 160, damping: 18, mass: 0.5 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareBackground = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28), transparent 60%)`;

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduceMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      rotateY.set((px - 0.5) * maxTilt * 2);
      rotateX.set((0.5 - py) * maxTilt * 2);
      glareX.set(px * 100);
      glareY.set(py * 100);
    },
    [reduceMotion, maxTilt, rotateX, rotateY, glareX, glareY],
  );

  const handleLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reduceMotion ? {} : { scale }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      className={className}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
};
