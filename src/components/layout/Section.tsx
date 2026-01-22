'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useWaveform } from '@/components/waveform/WaveformProvider';
import type { SectionId } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: SectionId;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setActiveSection } = useWaveform();

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={cn('relative min-h-screen py-24 px-6', className)}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </motion.section>
  );
}
