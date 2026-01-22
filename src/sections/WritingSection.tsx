'use client';

import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ui/KineticText';
import { blogPosts } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function BlogCard({ post, index }: { post: (typeof blogPosts)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} data-hover>
        <motion.article
          whileHover={{ x: 20 }}
          transition={{ duration: 0.3 }}
          className="group py-8 border-b border-border"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <time className="text-sm text-muted-foreground tracking-wider">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {post.excerpt}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="text-accent mt-8"
            >
              <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

export function WritingSection() {
  return (
    <section id="writing" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            <ScrambleText>Writing</ScrambleText>
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Thoughts &
            <br />
            <span className="gradient-text">articles</span>
          </h2>
        </motion.div>

        <div>
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
