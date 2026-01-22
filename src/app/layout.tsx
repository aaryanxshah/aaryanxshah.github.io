import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aaryan Shah',
  description: 'Software engineer building at the intersection of technology and health.',
  keywords: ['software engineer', 'health tech', 'web development', 'full stack'],
  authors: [{ name: 'Aaryan Shah' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aaryan Shah',
    description: 'Software engineer building at the intersection of technology and health.',
    siteName: 'Aaryan Shah',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaryan Shah',
    description: 'Software engineer building at the intersection of technology and health.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
