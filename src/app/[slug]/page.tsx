type BlogPost = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

const posts: Record<string, BlogPost> = {
  "summer-2025": {
    slug: "summer-2025",
    title: "Summer 2025",
    date: "October 2025",
    content: "A brief recap of a hectic summer.",
  },
  solh: {
    slug: "solh",
    title: "Strong Opinions, Loosely Held",
    date: "January 2025",
    content: "And some other thoughts I hold dear.",
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <h1>Not Found</h1>
        <p>This page does not exist.</p>
        <p>
          <a href="/">Back to home</a>
        </p>
      </>
    );
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>
        <em>{post.date}</em>
      </p>

      <hr />

      <p>{post.content}</p>

      <hr />

      <p>
        <a href="/">← Back to home</a>
      </p>
    </>
  );
}
