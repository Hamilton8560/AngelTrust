import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CONTACT_INFO } from '../../constants/contact';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function MagneticButton({ children, className = '', href }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href || CONTACT_INFO.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-gold-500 text-navy-900 font-bold rounded-lg transition-colors hover:bg-gold-600 ${className}`}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98, y: 1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
}
