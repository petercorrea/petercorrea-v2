'use client';

import Navbar from '@/components/Navbar';
import AboutMe from '@/components/sections/AboutMe';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
    </main>
  );
}
