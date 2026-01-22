'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="hero" className="flex items-center justify-center">
      <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <MotionDiv delay={0.2}>
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Aaryan Shah
          </h1>
        </MotionDiv>

        <MotionDiv delay={0.4}>
          <p className="mt-6 max-w-xl text-lg text-warm-gray-500 sm:text-xl">
            Building at the intersection of technology and health.
            <br />
            Software engineer passionate about impactful products.
          </p>
        </MotionDiv>

        <MotionDiv delay={0.6}>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#projects"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-warm-gray-800"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-warm-gray-200 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-warm-gray-400"
            >
              Get in Touch
            </a>
          </div>
        </MotionDiv>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-12 text-warm-gray-400 transition-colors hover:text-foreground"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </Section>
  );
}
