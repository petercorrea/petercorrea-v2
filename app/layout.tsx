import Navbar from '@/components/nav/Navbar';
import ModalProvider from '@/providers/ModalProvider';
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
      <body className={`${inter.className} h-fit`}>
        <Navbar />
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
