import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

/* ────────────────────────────────────────────
 *  Constants
 * ──────────────────────────────────────────── */
const TOTAL_FRAMES = 300;
const SECTION_HEIGHT_VH = 500; // 5× viewport height → scroll distance for the animation

/** Build the public path for a given 1-indexed frame number */
const framePath = (n: number): string =>
  `/frames/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

/* ────────────────────────────────────────────
 *  Types
 * ──────────────────────────────────────────── */
interface ResultsSectionProps {
  onOpenConsultation?: (treatmentName?: string) => void;
}

/* ────────────────────────────────────────────
 *  Component
 * ──────────────────────────────────────────── */
export const ResultsSection: React.FC<ResultsSectionProps> = ({
  onOpenConsultation,
}) => {
  /* ── refs ─────────────────────────────── */
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null); // canvas parent for sizing
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);

  /* ── state ────────────────────────────── */
  const [loadedCount, setLoadedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const allLoaded = loadedCount >= TOTAL_FRAMES;
  const loadPct = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  /* ── 1. Preload every frame ───────────── */
  useEffect(() => {
    const imgs: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = framePath(i + 1);
      img.onload = () => {
        count++;
        setLoadedCount(count);
      };
      imgs[i] = img;
    }

    imagesRef.current = imgs;
  }, []);

  /* ── 2. Draw a frame to the canvas ────── */
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const wrapper = wrapperRef.current;
    const img = imagesRef.current[idx];

    if (!canvas || !ctx || !wrapper || !img?.complete || !img.naturalWidth)
      return;

    const dpr = window.devicePixelRatio || 1;
    const cw = wrapper.clientWidth;
    const ch = wrapper.clientHeight;

    /* aspect-fit */
    const imgR = img.naturalWidth / img.naturalHeight;
    const boxR = cw / ch;
    let dw: number, dh: number;
    if (imgR > boxR) {
      dw = cw;
      dh = cw / imgR;
    } else {
      dh = ch;
      dw = ch * imgR;
    }

    canvas.width = dw * dpr;
    canvas.height = dh * dpr;
    canvas.style.width = `${dw}px`;
    canvas.style.height = `${dh}px`;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, dw, dh);
    ctx.drawImage(img, 0, 0, dw, dh);
  }, []);

  /* ── 3. Scroll → frame mapping ────────── */
  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;

      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;

      // Not in view at all
      if (rect.top > vh || rect.bottom < 0) return;

      const scrolled = -rect.top;
      const scrollable = sec.offsetHeight - vh;
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(p);

      const fi = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(p * (TOTAL_FRAMES - 1))),
      );

      if (fi !== currentFrameRef.current) {
        currentFrameRef.current = fi;
        drawFrame(fi);
      }
    };

    const onResize = () => {
      if (currentFrameRef.current >= 0) drawFrame(currentFrameRef.current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll(); // initial

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [drawFrame, loadedCount]); // re-bind when more frames arrive

  /* ── derived UI flags ─────────────────── */
  const showScrollHint = progress < 0.04 && allLoaded;
  const showCTA = progress > 0.92;

  /* Header fade-out: fully visible until 6 %, gone by 16 % */
  const headerOpacity =
    progress < 0.06 ? 1 : Math.max(0, 1 - (progress - 0.06) * 10);
  const headerY = progress > 0.06 ? -24 : 0;

  /* Top blend gradient opacity (sand → transparent) */
  const topBlendOpacity =
    progress < 0.02 ? 1 : Math.max(0, 1 - progress * 8);

  /* Bottom blend gradient appears near the end */
  const bottomBlendOpacity =
    progress > 0.85 ? Math.min(1, (progress - 0.85) / 0.15) : 0;

  /* ── render ───────────────────────────── */
  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative"
      style={{ height: `${SECTION_HEIGHT_VH}vh` }}
    >
      {/* ══ Sticky viewport container ════════════════════ */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#060d1f]">

        {/* ── Top gradient blend (sand → transparent) ─── */}
        <div
          className="absolute top-0 left-0 right-0 h-28 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #f0eeed 0%, transparent 100%)',
            opacity: topBlendOpacity,
          }}
        />

        {/* ── Bottom gradient blend (transparent → sand) ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #f0eeed 0%, transparent 100%)',
            opacity: bottomBlendOpacity,
          }}
        />

        {/* ── Header text overlay ─────────────────────── */}
        <div
          className="absolute top-24 sm:top-28 left-0 right-0 z-20 text-center pointer-events-none px-5"
          style={{
            opacity: headerOpacity,
            transform: `translateY(${headerY}px)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/15 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL PATIENT TRANSFORMATIONS</span>
          </div>

          <h2 className="font-logo text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none">
            BEFORE &amp; AFTER
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/55 font-medium max-w-xl mx-auto leading-relaxed">
            Scroll to watch real smile transformations performed at Gums N Teeth
            Dental Clinic by Dr.&nbsp;Mitul Mishra
          </p>
        </div>

        {/* ── Canvas container ─────────────────────────── */}
        <div
          ref={wrapperRef}
          className="relative w-full h-full flex items-center justify-center px-4 sm:px-10 md:px-16 py-16 sm:py-20"
        >
          <canvas
            ref={canvasRef}
            className="rounded-2xl sm:rounded-3xl select-none"
            style={{
              display: allLoaded ? 'block' : 'none',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.06), 0 30px 70px -12px rgba(0,0,0,0.55)',
            }}
          />
        </div>

        {/* ── Progress bar + frame counter ─────────────── */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          {/* Track */}
          <div className="w-44 sm:w-60 h-[3px] bg-white/12 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress * 100}%`,
                background: 'linear-gradient(90deg, #002582, #38bdf8)',
                transition: 'width 60ms linear',
              }}
            />
          </div>
          {/* Percentage */}
          <span className="text-[11px] font-bold text-white/35 tracking-widest tabular-nums select-none">
            {Math.round(progress * 100)}%
          </span>
        </div>

        {/* ── Scroll hint (visible at the start) ──────── */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              key="scroll-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none"
            >
              <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">
                Scroll to explore
              </span>
              <div className="animate-bounce-subtle">
                <ChevronDown className="w-5 h-5 text-white/50" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── End CTA (visible near the end) ──────────── */}
        <AnimatePresence>
          {showCTA && (
            <motion.div
              key="end-cta"
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
            >
              <p className="text-sm sm:text-base text-white/70 font-semibold text-center max-w-md px-4">
                Ready for your own smile transformation?
              </p>
              <button
                onClick={() => onOpenConsultation?.('Smile Consultation')}
                className="btn-dazzle text-sm sm:text-base px-7 sm:px-9 py-3 sm:py-4 cursor-pointer inline-flex items-center gap-2 shadow-2xl"
              >
                <span>Book Your Smile Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Loading overlay ─────────────────────────── */}
        <AnimatePresence>
          {!allLoaded && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 bg-[#060d1f] flex flex-col items-center justify-center z-40"
            >
              {/* Circular progress ring */}
              <div className="relative w-22 h-22 sm:w-24 sm:h-24 mb-6">
                {/* background track */}
                <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                {/* arc */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#002582"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${loadPct * 2.89} 289`}
                    style={{ transition: 'stroke-dasharray 200ms ease' }}
                  />
                </svg>
                {/* percentage number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-black text-white tabular-nums">
                    {loadPct}%
                  </span>
                </div>
              </div>

              <p className="text-xs font-bold text-white/45 tracking-widest uppercase">
                Loading transformations
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
