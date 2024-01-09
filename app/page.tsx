'use client';

import Navbar from '@/components/Navbar';
import AboutMe from '@/components/sections/AboutMe';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import XP from '@/components/sections/XP';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <XP />
      <Projects />
      <Contact />
    </main>
  );
}
