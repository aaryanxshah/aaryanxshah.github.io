'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { useWaveform } from '@/components/waveform/WaveformProvider';
import { projects } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { setIsHovering } = useWaveform();

  return (
    <MotionDiv delay={0.1 * (index + 1)}>
      <motion.article
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group rounded-2xl border border-warm-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
      >
        <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
        <p className="mt-2 text-warm-gray-500">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-warm-gray-100 px-2.5 py-0.5 text-xs font-medium text-warm-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-warm-gray-500 transition-colors hover:text-foreground"
            >
              <ExternalLink size={14} />
              View Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-warm-gray-500 transition-colors hover:text-foreground"
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </motion.article>
    </MotionDiv>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <MotionDiv>
        <h2 className="text-sm font-medium uppercase tracking-widest text-warm-gray-500">
          Projects
        </h2>
      </MotionDiv>

      <MotionDiv delay={0.1}>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Selected work
        </h3>
        <p className="mt-4 max-w-2xl text-warm-gray-500">
          A collection of projects I&apos;ve worked on. Each one taught me something
          new and pushed me to grow as an engineer.
        </p>
      </MotionDiv>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
