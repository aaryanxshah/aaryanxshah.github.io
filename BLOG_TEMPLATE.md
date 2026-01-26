# Adding a New Blog Post

## Steps

1. Open `src/app/[slug]/page.tsx`

2. Add your post to the `posts` object:

```tsx
'your-post-slug': {
  slug: 'your-post-slug',
  title: 'Your Post Title',
  date: 'Month Year',
  content: 'Your content here.',
},
```

3. Add a link on the homepage in `src/app/page.tsx`:

```tsx
<li><a href="/your-post-slug">Your Post Title</a> (Month Year)</li>
```

4. Build and deploy:

```bash
npm run build
```

## Example

To add a post at `/hello-world`:

```tsx
// In src/app/[slug]/page.tsx
'hello-world': {
  slug: 'hello-world',
  title: 'Hello World',
  date: 'February 2025',
  content: 'This is my hello world post.',
},
```

```tsx
// In src/app/page.tsx under Writing section
<li><a href="/hello-world">Hello World</a> (Feb 2025)</li>
```
