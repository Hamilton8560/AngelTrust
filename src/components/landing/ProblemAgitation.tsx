import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';

const problems = [
  { num: 1, text: 'A judge picks who raises your kids.' },
  { num: 2, text: 'Your family waits 6–18 months in probate.' },
  { num: 3, text: 'Your assets go to people you never intended.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function ProblemAgitation() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px]">
          <motion.p
            className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Without a plan
          </motion.p>
          <motion.h2
            className="text-[28px] sm:text-[32px] font-extrabold text-navy-900 tracking-tight leading-tight mb-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            The State Decides Everything.
          </motion.h2>

          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {problems.map((p) => (
              <motion.div
                key={p.num}
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-500 text-base font-bold">{p.num}</span>
                </div>
                <p className="text-navy-900 text-base font-semibold">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-9 bg-navy-900 rounded-[10px] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          >
            <p className="text-white text-[15px]">
              All preventable. <strong>One conversation.</strong>
            </p>
            <MagneticButton className="px-6 py-2.5 text-sm whitespace-nowrap">
              Book a Free Call
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
