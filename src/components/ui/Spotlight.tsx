import React, { useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * Global mouse-following spotlight.
 * A soft radial gradient glides behind the cursor using CSS custom
 * properties — driven by a single rAF-throttled, passive listener.
 * Disabled on touch devices and for reduced-motion users.
 */
export const Spotlight: React.FC = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const layer = document.getElementById('spotlight-layer');
    if (!layer) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      layer.style.setProperty('--spot-x', `${currentX}px`);
      layer.style.setProperty('--spot-y', `${currentY}px`);
      raf = 0;
      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        raf = requestAnimationFrame(tick);
      }
    };

    layer.classList.add('is-visible');
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (raf) cancelAnimationFrame(raf);
      layer.classList.remove('is-visible');
    };
  }, [reduceMotion]);

  return <div id="spotlight-layer" className="spotlight-layer" aria-hidden="true" />;
};
