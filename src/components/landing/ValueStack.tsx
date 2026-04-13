import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MagneticButton } from '../shared/MagneticButton';

const items = [
  { name: 'Full estate plan review', price: '$300' },
  { name: 'Will vs. trust recommendation', price: '$200' },
  { name: 'Tax exposure assessment', price: '$250' },
  { name: 'Guardianship planning guidance', price: '$150' },
  { name: 'Power of attorney overview', price: '$150' },
  { name: 'Custom action plan for your situation', price: '$200' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function ValueStack() {
  const revealRef = useRef(null);
  const revealInView = useInView(revealRef, { once: true, margin: '-50px' });

  return (
    <section className="bg-navy-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left: Headline + Line Items */}
          <div>
            <motion.p
              className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Your free consultation includes
            </motion.p>
            <motion.h2
              className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              Everything You Need to
              <br />
              Protect Your Family.
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={fadeUp}
                  className="flex justify-between items-center py-4 border-b border-white/[0.06]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                    <span className="text-white text-[15px] font-medium">{item.name}</span>
                  </div>
                  <span className="text-slate-500 text-sm line-through">{item.price}</span>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                className="flex justify-between items-center pt-5"
              >
                <span className="text-slate-400 text-sm font-medium">Total value</span>
                <span className="text-slate-500 text-lg font-semibold line-through">$1,250</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Free Reveal Box */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              ref={revealRef}
              className="bg-gold-500/[0.08] border border-gold-500/20 rounded-2xl p-8 lg:p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={revealInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            >
              <p className="text-slate-400 text-sm mb-2">Your cost today</p>
              <motion.p
                className="text-gold-500 text-5xl lg:text-6xl font-extrabold tracking-tight mb-2"
                initial={{ scale: 0.8 }}
                animate={revealInView ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.15 }}
              >
                Free
              </motion.p>
              <p className="text-slate-500 text-[13px] mb-8">
                30-minute consultation
                <br />
                with Adam Engel
              </p>
              <MagneticButton className="px-9 py-3.5 text-[15px]">
                Claim Your Free Consultation
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
