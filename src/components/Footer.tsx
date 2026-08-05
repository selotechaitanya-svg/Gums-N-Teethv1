import React from 'react';
import {
  ArrowUpRight,
  ArrowUp,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
} from 'lucide-react';
import { GOOGLE_MAPS_LINK } from '../data/googleReviewsData';
import { ClinicLogo } from './ClinicLogo';

const QUICK_LINKS = [
  { name: 'About us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Results', href: '#results' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacts', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f0eeed] pt-16 pb-10 border-t border-black/10 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="blob bottom-[-30%] left-[-10%] w-[380px] h-[380px] bg-[#002582]/6" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Logo */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-10">
          <ClinicLogo size="lg" variant="full" />
          <p className="text-sm sm:text-base text-black/60 font-medium max-w-md leading-relaxed">
            Painless, precise &amp; compassionate oral care in Nagpur — powered by
            microscopic dentistry, laser technology and aesthetic smile design.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-14 border-b border-black/10">
          {/* Column 1: Hours & Address */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[#002582] text-lg font-bold mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Office Hours
              </h3>
              <p className="text-base text-black/80 font-medium">
                Mon - Sat: 10:00 AM - 3:00 PM &amp; 5:00 PM - 10:00 PM
              </p>
              <p className="text-sm text-black/60 font-medium mt-1">
                Sunday: 10:00 AM - 8:00 PM
              </p>
            </div>
            <div>
              <h3 className="text-[#002582] text-lg font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Address
              </h3>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-black/80 font-medium hover:text-[#002582] transition-colors block leading-relaxed"
              >
                Beltarodi Rd, opposite om hardware, near Besa, Harihar Nagar,
                Somalwada, Besa Pipla, Maharashtra 440037
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#002582] text-lg font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-black/70 font-medium hover:text-[#002582] hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#002582]/40" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Phone & WhatsApp */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[#002582] text-lg font-bold mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone &amp; WhatsApp
              </h3>
              <div className="flex flex-col gap-2.5 items-start mt-1">
                <a
                  href="tel:09021751902"
                  className="inline-flex items-center gap-2 bg-[#002582] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-black transition-colors shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call us</span>
                </a>
                <a
                  href="https://wa.me/919021751902?text=Hello%20Gums%20and%20Teeth%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#20ba5a] transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp chat</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[#002582] text-lg font-bold mb-3">Email</h3>
              <a
                href="mailto:care@gumsnteeth.com"
                className="text-base text-black/80 font-medium hover:text-[#002582] transition-colors"
              >
                care@gumsnteeth.com
              </a>
            </div>
          </div>

          {/* Column 4: Lead Doctors & Find Us */}
          <div>
            <h3 className="text-[#002582] text-lg font-bold mb-4">Lead Dentists</h3>
            <div className="flex flex-col gap-3 text-base text-black/80 font-medium mb-6">
              <div>
                <p className="font-bold text-[#002582]">
                  Dr. Mitul Mishra{' '}
                  <span className="text-xs font-semibold text-black/60">(BDS, MDS)</span>
                </p>
                <p className="text-xs text-black/60">
                  Consultant Periodontist &amp; Implantologist
                </p>
              </div>
              <div className="mt-1">
                <p className="font-bold text-[#002582]">
                  Dr. Prachi Mishra{' '}
                  <span className="text-xs font-semibold text-black/60">(BDS)</span>
                </p>
                <p className="text-xs text-black/60">
                  Dental Surgeon &amp; Oral Cosmetologist
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#002582] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-xs group"
            >
              <span>Google Maps Location</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-black/50">
            © {new Date().getFullYear()} Gums and Teeth Dental Clinic. All rights
            reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#002582] hover:text-black transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center group-hover:-translate-y-1 group-hover:bg-[#002582] group-hover:text-white transition-all">
              <ArrowUp className="w-4 h-4 text-current" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
