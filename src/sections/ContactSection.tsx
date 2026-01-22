'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:hello@example.com',
    icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/aaryanxshah',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/aaryanxshah',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/aaryanxshah',
    icon: Twitter,
  },
];

export function ContactSection() {
  return (
    <Section id="contact" className="flex items-center">
      <div className="py-24">
        <MotionDiv>
          <h2 className="text-sm font-medium uppercase tracking-widest text-warm-gray-500">
            Contact
          </h2>
        </MotionDiv>

        <MotionDiv delay={0.1}>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s connect
          </h3>
          <p className="mt-4 max-w-xl text-warm-gray-500">
            I&apos;m always open to interesting conversations and opportunities.
            Feel free to reach out if you&apos;d like to chat.
          </p>
        </MotionDiv>

        <MotionDiv delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2 rounded-full border border-warm-gray-200 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-rose hover:bg-rose/10"
                >
                  <Icon size={16} />
                  {link.name}
                </a>
              );
            })}
          </div>
        </MotionDiv>

        <MotionDiv delay={0.3}>
          <p className="mt-24 text-sm text-warm-gray-400">
            &copy; {new Date().getFullYear()} Aaryan Shah. Built with Next.js.
          </p>
        </MotionDiv>
      </div>
    </Section>
  );
}
