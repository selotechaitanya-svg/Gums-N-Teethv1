import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { GOOGLE_MAPS_LINK } from '../data/googleReviewsData';
import { ClinicLogo } from './ClinicLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f0eeed] pt-16 pb-12 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Logo */}
        <div className="mb-12 md:mb-16">
          <ClinicLogo size="lg" variant="full" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-16 border-b border-black/10">
          {/* Column 1: Hours & Address */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[#002582] text-lg font-semibold mb-2">
                Office Hours
              </h3>
              <p className="text-base text-black/80 font-medium">
                Mon - Sat: 10:00 AM - 3:00 PM & 5:00 PM - 10:00 PM
              </p>
              <p className="text-sm text-black/60 font-medium mt-1">
                Sunday: 10:00 AM - 8:00 PM
              </p>
            </div>
            <div>
              <h3 className="text-[#002582] text-lg font-semibold mb-2">
                Address
              </h3>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-black/80 font-medium hover:text-[#002582] transition-colors block leading-relaxed"
              >
                Beltarodi Rd, opposite om hardware, near Besa, Harihar Nagar, Somalwada, Besa Pipla, Maharashtra 440037
              </a>
            </div>
          </div>

          {/* Column 2: Phone & WhatsApp */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-[#002582] text-lg font-semibold mb-2">
                Phone & WhatsApp
              </h3>
              <div className="flex flex-col gap-2.5 items-start mt-1">
                <a
                  href="tel:09021751902"
                  className="inline-flex items-center gap-2 bg-[#002582] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-black transition-colors shadow-2xs"
                >
                  <span>Call us</span>
                </a>
                <a
                  href="https://wa.me/919021751902?text=Hello%20Gums%20and%20Teeth%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#20ba5a] transition-colors shadow-2xs"
                >
                  <span>WhatsApp chat</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[#002582] text-lg font-semibold mb-2">
                Email
              </h3>
              <a
                href="mailto:care@gumsnteeth.com"
                className="text-base text-black/80 font-medium hover:text-[#002582] transition-colors"
              >
                care@gumsnteeth.com
              </a>
            </div>
          </div>

          {/* Column 3: Lead Doctors */}
          <div>
            <h3 className="text-[#002582] text-lg font-semibold mb-4">
              Lead Dentists
            </h3>
            <div className="flex flex-col gap-3 text-base text-black/80 font-medium">
              <div>
                <p className="font-bold text-[#002582]">Dr. Mitul Mishra <span className="text-xs font-semibold text-black/60">(BDS, MDS)</span></p>
                <p className="text-xs text-black/60">Consultant Periodontist & Implantologist</p>
              </div>
              <div className="mt-1">
                <p className="font-bold text-[#002582]">Dr. Prachi Mishra <span className="text-xs font-semibold text-black/60">(BDS)</span></p>
                <p className="text-xs text-black/60">Dental Surgeon & Oral Cosmetologist</p>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Info */}
          <div>
            <h3 className="text-[#002582] text-lg font-semibold mb-4">
              Find Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#002582] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-xs group"
              >
                <span>Google Maps Location</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="mt-2 text-xs text-black/60 leading-relaxed">
                Beltarodi Rd, opposite om hardware, near Besa, Harihar Nagar, Somalwada, Besa Pipla, Maharashtra 440037
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-black/50">
            © {new Date().getFullYear()} Gums and Teeth Dental Clinic. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#002582] hover:text-black transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-4 h-4 text-current" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
