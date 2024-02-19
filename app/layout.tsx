import Navbar from '@/components/nav/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Peter Correa',
  description: "Peter's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-screen max-h-screen overflow-x-hidden relative -z-50`}
      >
        <link rel="icon" href="/headshot.png" sizes="any" />
        <SpeedInsights />
        <Analytics />

        <Navbar />
        {/* <ModalProvider /> */}
        {children}
      </body>
    </html>
  );
}
