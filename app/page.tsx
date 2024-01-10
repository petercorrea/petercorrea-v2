'use client';

import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import XP from '@/components/sections/XP';
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="snap-y overflow-y-scroll h-screen">
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <XP />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
