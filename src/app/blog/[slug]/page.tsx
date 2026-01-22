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
          className="inline-flex items-center gap-2 text-sm text-warm-gray-500 transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to writing
        </Link>

        <header className="mt-8">
          <time className="text-sm text-warm-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-warm mt-12">
          <p className="text-warm-gray-500">
            {post.excerpt}
          </p>
          <p className="mt-8 text-warm-gray-400 italic">
            Full blog post content coming soon...
          </p>
        </div>
      </article>
    </div>
  );
}
