'use client';

import Navbar from '@/components/Navbar';
import AboutMe from '@/sections/AboutMe';
import Hero from '@/sections/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
    </main>
  );
}
