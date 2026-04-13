import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function Hero() {
  return (
    <section className="relative bg-navy-900 min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background image — right-aligned, fades into navy on left */}
      <div className="absolute inset-0">
        <img
          src="/media/hero-virginia-home.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: solid navy on left → transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #0A1F44 0%, #0A1F44 40%, rgba(10,31,68,0.85) 60%, rgba(10,31,68,0.6) 80%, rgba(10,31,68,0.45) 100%)',
          }}
        />
        {/* Bottom fade for clean section transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to top, #0A1F44, transparent)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[560px]"
        >
          <motion.p
            variants={fadeUp}
            className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-4"
          >
            Leesburg, VA &middot; Licensed in Virginia & DC
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-lg md:text-xl font-medium tracking-tight mb-3"
          >
            Wills, Trusts & Estate Planning
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-none mb-6"
          >
            Don't Leave Your
            <br />
            Family Unprotected.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base lg:text-[17px] leading-relaxed mb-8 max-w-[440px]"
          >
            Every year, thousands of families lose homes, savings, and
            custody battles because they didn't have a plan. A 30-minute
            call with Adam Engel can change that.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-10">
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
                <span key={i} className="text-gold-500 text-base">
                  &#9733;
                </span>
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
      </div>
    </section>
  );
}
