'use client';

import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ui/KineticText';

const skills = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'Go', 'Rust'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Three.js', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            <ScrambleText>About</ScrambleText>
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Crafting digital
            <br />
            <span className="gradient-text">experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a software engineer passionate about building products that
              matter. My focus lies at the intersection of technology and health,
              where I believe we can create meaningful impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy working across the full stack, from crafting pixel-perfect
              interfaces to architecting robust backend systems. Every project is
              an opportunity to learn something new.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source, or thinking about how we can use tech
              to improve healthcare accessibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                        data-hover
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
