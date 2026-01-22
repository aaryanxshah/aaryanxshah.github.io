'use client';

import { useState, useEffect } from 'react';
import { WaveformProvider } from '@/components/waveform/WaveformProvider';
import { WaveformCanvas } from '@/components/waveform/WaveformCanvas';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { WritingSection } from '@/sections/WritingSection';
import { ContactSection } from '@/sections/ContactSection';
import { SECTIONS } from '@/lib/constants';
import { useActiveSection } from '@/hooks/useScrollProgress';

function HomeContent() {
  const sectionIds = SECTIONS.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <Header activeSection={activeSection} />

      {/* Fixed waveform at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
        <WaveformCanvas />
      </div>

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <WritingSection />
        <ContactSection />
      </main>
    </>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <WaveformProvider>
      <HomeContent />
    </WaveformProvider>
  );
}
