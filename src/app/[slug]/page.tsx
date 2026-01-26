type BlogPost = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

const posts: Record<string, BlogPost> = {
  'first-post': {
    slug: 'first-post',
    title: 'First Blog Post',
    date: 'January 2025',
    content: 'This is the content of my first blog post. Replace this with your actual content.',
  },
  'second-post': {
    slug: 'second-post',
    title: 'Second Blog Post',
    date: 'January 2025',
    content: 'This is the content of my second blog post. Replace this with your actual content.',
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <h1>Not Found</h1>
        <p>This page does not exist.</p>
        <p><a href="/">Back to home</a></p>
      </>
    );
  }

  return (
    <>
      <p><a href="/">← Back</a></p>

      <hr />

      <h1>{post.title}</h1>
      <p><em>{post.date}</em></p>

      <hr />

      <p>{post.content}</p>

      <hr />

      <p><a href="/">← Back to home</a></p>
    </>
  );
}
