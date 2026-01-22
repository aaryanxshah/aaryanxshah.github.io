'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SECTION_WAVEFORM_CONFIG, type SectionId, type WaveformConfig } from '@/lib/constants';
import { interpolateConfig, easeInOutCubic } from './waveformUtils';

interface WaveformContextType {
  currentConfig: WaveformConfig;
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
}

const WaveformContext = createContext<WaveformContextType | null>(null);

export function useWaveform() {
  const context = useContext(WaveformContext);
  if (!context) {
    throw new Error('useWaveform must be used within WaveformProvider');
  }
  return context;
}

export function WaveformProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [currentConfig, setCurrentConfig] = useState<WaveformConfig>(
    SECTION_WAVEFORM_CONFIG.hero
  );
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = useCallback((newSection: SectionId) => {
    if (newSection === activeSection || isTransitioning) return;

    setIsTransitioning(true);
    const fromConfig = currentConfig;
    const toConfig = SECTION_WAVEFORM_CONFIG[newSection];
    const duration = 600;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      setCurrentConfig(interpolateConfig(fromConfig, toConfig, easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsTransitioning(false);
        setActiveSection(newSection);
      }
    };

    setActiveSection(newSection);
    requestAnimationFrame(animate);
  }, [activeSection, currentConfig, isTransitioning]);

  // Apply hover boost
  useEffect(() => {
    if (isHovering) {
      setCurrentConfig((prev) => ({
        ...prev,
        amplitude: prev.amplitude * 1.3,
        speed: prev.speed * 1.2,
      }));
    } else {
      setCurrentConfig(SECTION_WAVEFORM_CONFIG[activeSection]);
    }
  }, [isHovering, activeSection]);

  return (
    <WaveformContext.Provider
      value={{
        currentConfig,
        activeSection,
        setActiveSection: handleSectionChange,
        isHovering,
        setIsHovering,
      }}
    >
      {children}
    </WaveformContext.Provider>
  );
}
