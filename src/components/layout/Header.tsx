'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-lg font-medium tracking-tight text-foreground transition-colors hover:text-warm-gray-500"
        >
          AS
        </button>

        <ul className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'relative text-sm font-medium transition-colors',
                  activeSection === item.id
                    ? 'text-foreground'
                    : 'text-warm-gray-500 hover:text-foreground'
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-rose"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
