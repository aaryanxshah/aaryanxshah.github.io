'use client';

import { motion } from 'framer-motion';
import { KineticText, MagneticButton, ScrambleText } from '@/components/ui/KineticText';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
            <ScrambleText>Software Engineer</ScrambleText>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <KineticText
            as="h1"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
          >
            AARYAN
          </KineticText>
          <KineticText
            as="h1"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none gradient-text"
          >
            SHAH
          </KineticText>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Building at the intersection of{' '}
          <span className="text-foreground">technology</span> and{' '}
          <span className="text-foreground">health</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#projects"
            className="px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-accent transition-colors"
          >
            View Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-8 py-4 border border-border font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
        data-hover
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
