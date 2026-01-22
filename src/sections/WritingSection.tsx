'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { blogPosts } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

function BlogPostCard({ post, index }: { post: (typeof blogPosts)[0]; index: number }) {
  return (
    <MotionDiv delay={0.1 * (index + 1)}>
      <motion.a
        href={`/blog/${post.slug}`}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="group block border-b border-warm-gray-200 py-6 last:border-b-0"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <time className="text-sm text-warm-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <h4 className="mt-1 text-lg font-medium text-foreground group-hover:text-warm-gray-800">
              {post.title}
            </h4>
            <p className="mt-1 text-warm-gray-500">{post.excerpt}</p>
          </div>
          <ArrowRight
            size={20}
            className="mt-6 shrink-0 text-warm-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-foreground"
          />
        </div>
      </motion.a>
    </MotionDiv>
  );
}

export function WritingSection() {
  return (
    <Section id="writing">
      <MotionDiv>
        <h2 className="text-sm font-medium uppercase tracking-widest text-warm-gray-500">
          Writing
        </h2>
      </MotionDiv>

      <MotionDiv delay={0.1}>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Thoughts & articles
        </h3>
        <p className="mt-4 max-w-2xl text-warm-gray-500">
          Occasional writing about technology, health, and building things.
        </p>
      </MotionDiv>

      <div className="mt-12">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </Section>
  );
}
