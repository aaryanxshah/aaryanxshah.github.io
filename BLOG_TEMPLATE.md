# New Blog Post

`src/app/[slug]/page.tsx`

New post object in `posts`. 

```tsx
'your-post-slug': {
  slug: 'your-post-slug',
  title: 'Your Post Title',
  date: 'Month Year',
  content: 'Your content here.',
},
```

Add a link on the homepage in `src/app/page.tsx`:

```tsx
<li><a href="/your-post-slug">Your Post Title</a> (Month Year)</li>
```

Build and deploy:

```bash
npm run build
```
