export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project One',
    description:
      'A brief description of this project and what it does. Replace with your actual project.',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: 'https://example.com',
    github: 'https://github.com/aaryanxshah/project-one',
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description:
      'Another project description. Add details about the problem it solves.',
    tags: ['Python', 'Machine Learning', 'API'],
    link: 'https://example.com',
    github: 'https://github.com/aaryanxshah/project-two',
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description:
      'Description of a third project. Highlight the technologies and impact.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    github: 'https://github.com/aaryanxshah/project-three',
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'first-post',
    title: 'First Blog Post',
    excerpt: 'A brief introduction to what this post covers...',
    date: '2025-01-15',
  },
  {
    slug: 'second-post',
    title: 'Second Blog Post',
    excerpt: 'Another interesting topic to write about...',
    date: '2025-01-10',
  },
];
