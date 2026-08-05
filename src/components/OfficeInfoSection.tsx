import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, UserCheck, ShieldCheck } from 'lucide-react';
import { GOOGLE_MAPS_LINK } from '../data/googleReviewsData';

export const OfficeInfoSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f0eeed] border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-[#002582] mb-3.5 shadow-2xs"
            >
              <MapPin className="w-4 h-4 text-[#002582]" />
              <span>Google Maps Verified Clinic</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#002582]"
            >
              Office Information
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#002582] text-white hover:bg-black px-6 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95 group cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-white" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        {/* Office Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-7 rounded-[24px] border border-black/10 shadow-2xs hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#002582]/10 text-[#002582] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clinic Address</h3>
              <p className="text-base text-gray-600 leading-relaxed font-medium">
                Beltarodi Rd, opposite om hardware, near Besa, Harihar Nagar, Somalwada, Besa Pipla, Maharashtra 440037
              </p>
            </div>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#002582] hover:underline"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Phone & Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-7 rounded-[24px] border border-black/10 shadow-2xs hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#002582]/10 text-[#002582] flex items-center justify-center mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone & WhatsApp</h3>
              <div className="space-y-3 mt-3">
                <a
                  href="tel:09021751902"
                  className="inline-flex items-center gap-2 bg-[#002582] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-black transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>Call us</span>
                </a>
                <div>
                  <a
                    href="https://wa.me/919021751902?text=Hello%20Gums%20and%20Teeth%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#20ba5a] transition-colors"
                  >
                    <span>WhatsApp chat</span>
                  </a>
                </div>
                <a
                  href="mailto:care@gumsnteeth.com"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-black mt-1 block"
                >
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>care@gumsnteeth.com</span>
                </a>
              </div>
            </div>
            <a
              href="tel:09021751902"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#002582] hover:underline"
            >
              <span>Call us</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Office Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-7 rounded-[24px] border border-black/10 shadow-2xs hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#002582]/10 text-[#002582] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
              <div className="space-y-2 text-sm text-gray-700 font-medium">
                <div>
                  <span className="font-bold text-black block">Mon - Sat:</span>
                  <p className="text-gray-600">10:00 AM – 3:00 PM</p>
                  <p className="text-gray-600">5:00 PM – 10:00 PM</p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="font-bold text-black block">Sunday:</span>
                  <p className="text-gray-600">10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
              <span>Walk-ins & Appointments Welcome</span>
            </div>
          </motion.div>

          {/* Lead Doctors Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-7 rounded-[24px] border border-black/10 shadow-2xs hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#002582]/10 text-[#002582] flex items-center justify-center mb-5">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Specialists</h3>
              <div className="space-y-3.5 mt-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-bold text-[#002582]">Dr. Mitul Mishra</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#002582]/10 text-[#002582]">BDS, MDS</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    Consultant Periodontist & Implantologist
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-bold text-[#002582]">Dr. Prachi Mishra</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#002582]/10 text-[#002582]">BDS</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    Dental Surgeon & Oral Cosmetology
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#002582] hover:underline"
            >
              <span>Learn more about specialists</span>
            </a>
          </motion.div>
        </div>

        {/* Interactive Google Maps Frame Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-4 sm:p-6 rounded-[28px] border border-black/10 shadow-lg overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#002582] text-white flex items-center justify-center font-bold text-sm">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black">Gums N Teeth Dental Clinic on Google Maps</h4>
                <p className="text-xs text-gray-500 font-medium">
                  Beltarodi Rd, opposite om hardware, near Besa, Harihar Nagar, Somalwada, Besa Pipla, Maharashtra 440037
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#002582]/10 text-[#002582] hover:bg-[#002582] hover:text-white px-4 py-2 rounded-full text-xs font-bold transition-colors"
            >
              <span>Open Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-[320px] sm:h-[400px] rounded-[20px] overflow-hidden border border-black/10 bg-gray-100 relative">
            <iframe
              title="Gums and Teeth Dental Clinic Google Maps Location"
              src="https://maps.google.com/maps?q=Gums%20N%20Teeth%20Dental%20Clinic%2C%20Beltarodi%20Rd%2C%20opposite%20om%20hardware%2C%20near%20Besa%2C%20Harihar%20Nagar%2C%20Somalwada%2C%20Besa%20Pipla%2C%20Maharashtra%20440037&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
