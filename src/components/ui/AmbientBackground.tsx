import React, { useMemo } from 'react';
import { useReducedMotion } from 'motion/react';

interface AmbientBackgroundProps {
  className?: string;
  /** Tint blobs with brand blue + sky accents */
  variant?: 'light' | 'dark';
}

const PARTICLES = 14;

interface Particle {
  left: string;
  size: number;
  duration: number;
  delay: number;
  x: string;
  opacity: number;
  color: string;
}

/**
 * Animated gradient background: drifting soft blobs + slowly rising
 * particles. Pure CSS animations (transform-only) — zero JS runtime cost.
 * Respects prefers-reduced-motion via CSS.
 */
export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({
  className = '',
  variant = 'light',
}) => {
  const reduceMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: PARTICLES }, (_, i) => ({
        left: `${(i * 7.3 + 4) % 100}%`,
        size: 2 + ((i * 13) % 5),
        duration: 16 + ((i * 7) % 14),
        delay: -((i * 5) % 20),
        x: `${((i % 5) - 2) * 26}px`,
        opacity: 0.25 + ((i * 11) % 35) / 100,
        color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#2455d6' : '#002582',
      })),
    [],
  );

  const blueTint = variant === 'dark' ? 14 : 8;
  const skyTint = variant === 'dark' ? 16 : 22;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="ambient-blob ambient-blob--a"
        style={{
          top: '-10%',
          right: '-8%',
          width: '34rem',
          height: '34rem',
          background: `rgba(0, 37, 130, ${blueTint / 100})`,
        }}
      />
      <div
        className="ambient-blob ambient-blob--b"
        style={{
          bottom: '12%',
          left: '-10%',
          width: '30rem',
          height: '30rem',
          background: `rgba(56, 189, 248, ${skyTint / 100})`,
        }}
      />
      <div
        className="ambient-blob ambient-blob--c"
        style={{
          top: '38%',
          left: '42%',
          width: '22rem',
          height: '22rem',
          background: `rgba(36, 85, 214, ${Math.round(blueTint / 2) / 100})`,
        }}
      />

      {!reduceMotion &&
        particles.map((p, i) => (
          <span
            key={i}
            className="ambient-particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--p-x': p.x,
              '--p-opacity': p.opacity,
            } as React.CSSProperties}
          />
        ))}
    </div>
  );
};
