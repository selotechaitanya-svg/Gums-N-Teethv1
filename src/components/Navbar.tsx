import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  MessageCircle,
  Star,
  Clock,
} from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';
import { MagneticButton } from './ui/MagneticButton';

interface NavbarProps {
  onOpenConsultation: () => void;
}

const NAV_LINKS = [
  { name: 'About us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Results', href: '#results' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacts', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── Top announcement bar ─────────────────────────── */}
      <div
        className={`bg-gradient-to-r from-[#00185c] via-[#002582] to-[#123fb8] text-white overflow-hidden transition-all duration-500 ${
          scrolled ? 'max-h-0' : 'max-h-16 sm:max-h-11'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-2 flex items-center justify-center flex-wrap gap-x-6 gap-y-1 text-[11px] sm:text-xs font-semibold tracking-wide">
          <span className="inline-flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            Rated 5.0 on Google — 170+ verified reviews
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 opacity-80">
            <Clock className="w-3.5 h-3.5" />
            Mon–Sat: 10 AM – 10 PM
          </span>
          <a
            href="tel:09021751902"
            className="inline-flex items-center gap-1.5 hover:text-amber-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            09021751902
          </a>
        </div>
      </div>

      {/* ── Main navigation ──────────────────────────────── */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#f0eeed]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05),0_16px_40px_-18px_rgba(0,37,130,0.3)]'
            : 'bg-gradient-to-b from-[#f0eeed]/70 to-transparent backdrop-blur-[2px]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4 py-3.5">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0" aria-label="Gums n Teeth — back to top">
            <div className="transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
              <ClinicLogo size="sm" variant="icon-only" />
            </div>
            <span className="font-logo text-xl sm:text-2xl font-extrabold tracking-tight text-[#002582] uppercase leading-none">
              Gums{' '}
              <span className="font-body text-black font-normal text-base sm:text-lg lowercase italic mx-0.5">
                n
              </span>{' '}
              Teeth
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 glass rounded-full p-1.5" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[14px] font-semibold rounded-full transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-black/70 hover:text-[#002582]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#002582] to-[#123fb8] shadow-[0_8px_20px_-8px_rgba(0,37,130,0.6)]"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA + Quick actions Desktop */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/919021751902?text=Hello%20Gums%20and%20Teeth%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp chat"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 hover:shadow-[0_8px_24px_-8px_rgba(37,211,102,0.7)] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <MagneticButton strength={0.25}>
              <button
                onClick={onOpenConsultation}
                className="btn-dazzle text-sm cursor-pointer"
              >
                <span>Book Consultation</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 text-current" />
                </div>
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-gradient-to-r from-[#002582] to-[#123fb8] text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-[0_8px_20px_-8px_rgba(0,37,130,0.6)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mx-4 mt-2 rounded-3xl glass-strong border border-black/8 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-3 px-3 rounded-2xl flex items-center justify-between transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-[#002582]/8 text-[#002582]'
                      : 'text-black hover:bg-black/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-black/35" />
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-black/8">
                <a
                  href="https://wa.me/919021751902?text=Hello%20Gums%20and%20Teeth%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full font-bold text-base shadow-[0_10px_28px_-10px_rgba(37,211,102,0.7)]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp chat</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="btn-dazzle text-base py-3.5 w-full justify-center"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
