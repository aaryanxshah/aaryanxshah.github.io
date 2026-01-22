'use client';

import { motion } from 'framer-motion';
import { ScrambleText, MagneticButton } from '@/components/ui/KineticText';
import { projects } from '@/data/projects';
import { ArrowUpRight, Github } from 'lucide-react';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${
        isEven ? '' : 'md:direction-rtl'
      }`}
    >
      {/* Project Image/Visual */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={`aspect-video bg-card border border-border rounded-2xl overflow-hidden relative group ${
          isEven ? '' : 'md:order-2'
        }`}
        data-hover
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-border group-hover:text-accent/30 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </motion.div>

      {/* Project Info */}
      <div className={`space-y-4 ${isEven ? '' : 'md:order-1 md:text-right'}`}>
        <div
          className={`flex flex-wrap gap-2 ${isEven ? '' : 'md:justify-end'}`}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground tracking-wider uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold">{project.title}</h3>

        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div
          className={`flex items-center gap-4 pt-4 ${
            isEven ? '' : 'md:justify-end'
          }`}
        >
          {project.link && (
            <MagneticButton
              href={project.link}
              className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              View Project <ArrowUpRight size={16} />
            </MagneticButton>
          )}
          {project.github && (
            <MagneticButton
              href={project.github}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} /> Source
            </MagneticButton>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            <ScrambleText>Projects</ScrambleText>
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Selected
            <br />
            <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
