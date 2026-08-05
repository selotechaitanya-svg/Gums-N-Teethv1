import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/dazzleData';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  CalendarCheck,
} from 'lucide-react';

interface AppointmentSectionProps {
  initialService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialService = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#f0eeed] scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="blob top-[5%] right-[-10%] w-[420px] h-[420px] bg-[#002582]/8" />
      <div className="blob bottom-[-10%] left-[-8%] w-[400px] h-[400px] bg-sky-300/25" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="eyebrow-pill mb-4">
            <CalendarCheck className="w-4 h-4" />
            <span>Book Your Visit</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#002582]">
            Make an <span className="text-gradient-blue">appointment</span>
          </h2>
        </motion.div>

        {/* Global Grid: Left Form + Right Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Form Left Container */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-black/70 leading-relaxed mb-6">
              Kindly share your information, and our clinic&apos;s administrator will
              promptly reach out to you. They will coordinate with you to{' '}
              <span className="text-[#002582] font-semibold">
                schedule your appointment at a time that aligns perfectly with your
                schedule.
              </span>{' '}
              Or connect directly with us right now:
            </p>

            {/* Quick Direct Call & WhatsApp Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="tel:09021751902"
                className="inline-flex items-center gap-2 bg-[#002582] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-black transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call us</span>
              </a>

              <a
                href="https://wa.me/919021751902?text=Hello%20Gums%20and%20Teeth%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#20ba5a] transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-white fill-current" />
                <span>WhatsApp chat</span>
              </a>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl border border-[#002582]/20 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#002582]/10 text-[#002582] flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Appointment Request Received!
                </h3>
                <p className="text-base text-black/70 max-w-md mx-auto mb-6">
                  Thank you,{' '}
                  <span className="font-semibold text-black">{fullName}</span>! Our
                  clinic coordinator will contact you shortly via email or phone to
                  finalize your consultation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#002582] text-white text-sm font-semibold hover:bg-[#002582]/90 transition-colors cursor-pointer"
                >
                  Schedule another appointment
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white px-6 py-4 rounded-full border border-black/10 text-base text-black placeholder:text-black/40 focus:outline-none focus:border-[#002582] focus:ring-2 focus:ring-[#002582]/15 transition-all shadow-2xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white px-6 py-4 rounded-full border border-black/10 text-base text-black placeholder:text-black/40 focus:outline-none focus:border-[#002582] focus:ring-2 focus:ring-[#002582]/15 transition-all shadow-2xs"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white px-6 py-4 rounded-full border border-black/10 text-base text-black placeholder:text-black/40 focus:outline-none focus:border-[#002582] focus:ring-2 focus:ring-[#002582]/15 transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white px-6 py-4 rounded-full border border-black/10 text-base text-black/80 focus:outline-none focus:border-[#002582] focus:ring-2 focus:ring-[#002582]/15 transition-all shadow-2xs cursor-pointer appearance-none"
                  >
                    <option value="">Select preferred service (optional)</option>
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Add a message (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white px-6 py-4 rounded-full border border-black/10 text-base text-black placeholder:text-black/40 focus:outline-none focus:border-[#002582] focus:ring-2 focus:ring-[#002582]/15 transition-all shadow-2xs"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-dazzle text-base py-4 px-8 w-full sm:w-auto cursor-pointer"
                  >
                    <span>Schedule a consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Form Image Container with Rotating Badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Spinning Circular Text Badge */}
            <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 z-20 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none">
              <img
                src="https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d03137130a6c3d34241416_3e2336d94cb311df22617facfb37f57a_cyrcle-text.svg"
                alt="Rotating Gums and Teeth Badge"
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>

            {/* Floating "Same-day" chip */}
            <div className="absolute top-8 -right-2 sm:right-6 z-20 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-black/10 shadow-xl animate-float">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-black text-black leading-none">
                  Same-day slots
                </p>
                <p className="text-[11px] font-semibold text-black/55 mt-0.5">
                  Usually available
                </p>
              </div>
            </div>

            {/* Feature Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-black/10 shadow-xl bg-white group">
              <img
                src="https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d02b9a319e6069ae005482_0d9749f321512f8580cb8e2380d0fec1_form.webp"
                alt="Close-up of dental procedure patient"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
