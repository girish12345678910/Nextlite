import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nextlite.agency'),
  title: {
    default: 'Nextlite - Websites, Social Media & Design for Modern Brands',
    template: '%s | Nextlite',
  },
  description:
    'Fast, conversion-focused websites, social media growth, and on-brand design—so you get more leads and sales with less guesswork.',
  keywords: [
    'web design agency',
    'social media marketing',
    'branding design',
    'digital marketing India',
    'Nextlite',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nextlite.agency',
    siteName: 'Nextlite',
    title: 'Nextlite - Websites, Social Media & Design for Modern Brands',
    description:
      'Fast, conversion-focused websites, social media growth, and on-brand design.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-neutral-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
