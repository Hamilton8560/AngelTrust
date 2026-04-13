import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';
import { CONTACT_INFO } from '../../constants/contact';

export function FinalCTA() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-[580px] mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-navy-900 tracking-tight leading-tight mb-3">
            Your Family's Future.
            <br />
            One Call Away.
          </h2>
          <p className="text-slate-500 text-[15px] mb-8">
            30 minutes. Free. No obligation.
          </p>

          <MagneticButton className="px-10 py-4 text-base">
            Book Your Free Consultation
          </MagneticButton>

          <p className="text-slate-400 text-[13px] mt-4 mb-9">
            or call directly:{' '}
            <a
              href={`tel:${CONTACT_INFO.phone.link}`}
              className="text-navy-900 font-semibold hover:text-gold-500 transition-colors"
            >
              {CONTACT_INFO.phone.display}
            </a>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pt-6 border-t border-slate-200">
            <div className="text-center">
              <p className="text-navy-900 text-xl font-extrabold">15+</p>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1px]">Years experience</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="flex gap-0.5 justify-center mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-500 text-base">&#9733;</span>
                ))}
              </div>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1px]">Client rating</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-navy-900 text-xl font-extrabold">VA & DC</p>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1px]">Licensed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
