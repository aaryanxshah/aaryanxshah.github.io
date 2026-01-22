'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export function MotionDiv({
  children,
  className,
  variants,
  delay = 0,
}: MotionDivProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants || defaultVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
