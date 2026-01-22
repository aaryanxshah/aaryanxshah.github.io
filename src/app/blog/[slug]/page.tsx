import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background px-6 py-24">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/#writing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to writing
        </Link>

        <header className="mt-8">
          <time className="text-sm text-muted-foreground tracking-wider">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
        </header>

        <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>{post.excerpt}</p>
          <p className="text-muted italic">Full blog post content coming soon...</p>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/#writing"
            className="text-sm font-medium text-accent hover:underline"
          >
            View all posts
          </Link>
        </div>
      </article>
    </div>
  );
}
