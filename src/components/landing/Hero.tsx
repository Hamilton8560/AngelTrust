import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function Hero() {
  return (
    <section className="bg-navy-900 min-h-[100dvh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-4"
            >
              Estate Planning Attorney — Leesburg, VA
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-none mb-5"
            >
              Don't Leave Your Family{' '}
              <br className="hidden sm:block" />
              Unprotected.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-base lg:text-lg leading-relaxed mb-7 max-w-[440px]"
            >
              Every year, thousands of families lose homes, savings, and custody
              battles because they didn't have a plan. A 30-minute call with
              Adam Engel can change that.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-8">
              <MagneticButton className="px-8 py-3.5 text-[15px]">
                Book Your Free Consultation
              </MagneticButton>
              <p className="text-slate-500 text-[13px] mt-3">
                Free 30-min call &middot; No obligation &middot; No pressure
              </p>
            </motion.div>

            {/* Social proof bar */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 border-t border-white/[0.08]"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-500 text-base">&#9733;</span>
                ))}
              </div>
              <span className="text-slate-400 text-sm">
                <strong className="text-white">5.0</strong> — verified reviews
              </span>
              <span className="text-white/[0.15] hidden sm:inline">|</span>
              <span className="text-slate-400 text-sm">
                <strong className="text-white">15+</strong> years experience
              </span>
              <span className="text-white/[0.15] hidden sm:inline">|</span>
              <span className="text-slate-400 text-sm">VA & DC</span>
            </motion.div>
          </motion.div>

          {/* Right: Adam's photo */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-navy-700 to-navy-900 border border-gold-500/10">
              <img
                src="https://www.engellawoffices.com/wp-content/uploads/2024/01/adam-engel.jpg"
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
