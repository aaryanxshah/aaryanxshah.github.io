'use client';

import dynamic from 'next/dynamic';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { WritingSection } from '@/sections/WritingSection';
import { ContactSection } from '@/sections/ContactSection';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Header } from '@/components/layout/Header';

// Dynamic import for 3D scene to avoid SSR issues
const Scene3D = dynamic(
  () => import('@/components/three/Scene3D').then((mod) => mod.Scene3D),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Scene3D />
      <Header />
      <div className="noise" />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <WritingSection />
        <ContactSection />
      </main>
    </>
  );
}
