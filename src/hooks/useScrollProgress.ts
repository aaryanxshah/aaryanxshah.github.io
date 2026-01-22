'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}

export function useSectionProgress(
  sectionRef: React.RefObject<HTMLElement | null>
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  return scrollYProgress;
}

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setActiveSection(id);
            }
          });
        },
        { threshold: [0.3, 0.5, 0.7] }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
