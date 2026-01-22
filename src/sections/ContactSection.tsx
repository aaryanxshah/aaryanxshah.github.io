'use client';

import { motion } from 'framer-motion';
import { KineticText, MagneticButton, ScrambleText } from '@/components/ui/KineticText';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'Email', href: 'mailto:hello@example.com', icon: Mail },
  { name: 'GitHub', href: 'https://github.com/aaryanxshah', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/aaryanxshah', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/aaryanxshah', icon: Twitter },
];

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-32 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            <ScrambleText>Contact</ScrambleText>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <KineticText
            as="h2"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
          >
            LET&apos;S WORK
          </KineticText>
          <KineticText
            as="h2"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter gradient-text"
          >
            TOGETHER
          </KineticText>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg text-muted-foreground max-w-xl"
        >
          I&apos;m always open to interesting conversations and opportunities.
          Whether you have a project in mind or just want to chat, feel free to
          reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-4"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <MagneticButton
                  href={link.href}
                  className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon size={18} />
                  <span className="font-medium">{link.name}</span>
                </MagneticButton>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aaryan Shah
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Three.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
