import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aaryan Shah',
  description: 'Software engineer building at the intersection of technology and health.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
