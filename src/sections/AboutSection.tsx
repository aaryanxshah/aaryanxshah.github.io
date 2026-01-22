'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { MotionDiv } from '@/components/motion/MotionDiv';

export function AboutSection() {
  return (
    <Section id="about">
      <MotionDiv>
        <h2 className="text-sm font-medium uppercase tracking-widest text-warm-gray-500">
          About
        </h2>
      </MotionDiv>

      <MotionDiv delay={0.1}>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          A bit about me
        </h3>
      </MotionDiv>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <MotionDiv delay={0.2}>
          <div className="space-y-4 text-warm-gray-500">
            <p>
              I&apos;m a software engineer interested in building products that make
              a difference. My focus lies at the intersection of technology and
              health, where I believe we can create meaningful impact.
            </p>
            <p>
              Currently exploring how we can leverage modern tools to improve
              healthcare accessibility and outcomes. I enjoy working across the
              full stack and learning new technologies.
            </p>
          </div>
        </MotionDiv>

        <MotionDiv delay={0.3}>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium uppercase tracking-widest text-warm-gray-400">
                Technologies
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Next.js', 'Python', 'Node.js', 'PostgreSQL'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-warm-gray-100 px-3 py-1 text-sm text-warm-gray-800"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-widest text-warm-gray-400">
                Interests
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Health Tech', 'Product Design', 'Open Source'].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-rose/20 px-3 py-1 text-sm text-warm-gray-800"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </Section>
  );
}
