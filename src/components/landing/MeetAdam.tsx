import React from 'react';
import { motion } from 'framer-motion';

export function MeetAdam() {
  return (
    <section className="bg-navy-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <p className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-3">
              Meet your attorney
            </p>
            <h2 className="text-[26px] sm:text-[28px] font-extrabold text-white tracking-tight mb-5">
              Adam Engel, Esq.
            </h2>
            <p className="text-slate-400 text-[15px] leading-[1.8] mb-6 max-w-[480px]">
              15+ years helping families across Virginia and DC protect what matters
              most. Adam's approach is simple — listen first, explain clearly, build
              a plan that actually works for your life.
            </p>

            <div className="flex gap-6 mb-7">
              <div>
                <p className="text-slate-500 text-[11px] uppercase tracking-[1px] mb-1">Education</p>
                <p className="text-white text-[13px] font-medium">J.D., Loyola Law School</p>
                <p className="text-slate-400 text-[13px]">B.A., UCLA</p>
              </div>
              <div className="w-px bg-white/[0.08]" />
              <div>
                <p className="text-slate-500 text-[11px] uppercase tracking-[1px] mb-1">Licensed</p>
                <p className="text-white text-[13px] font-medium">Virginia State Bar</p>
                <p className="text-slate-400 text-[13px]">District of Columbia Bar</p>
              </div>
            </div>

            <div className="bg-gold-500/[0.06] border border-gold-500/[0.15] rounded-[10px] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <p className="text-white text-[15px] font-semibold mb-1.5">Zero-risk guarantee</p>
              <p className="text-slate-400 text-sm leading-[1.7]">
                Your consultation is free. No obligation. No sales pitch. If Adam can
                help, he'll tell you how. If he can't, he'll point you to someone who can.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-end order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
          >
            <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-navy-700 to-navy-900 border border-gold-500/10">
              <img
                src="/media/adam-engel-headshot.png"
                alt="Adam Engel, Estate Planning Attorney"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
