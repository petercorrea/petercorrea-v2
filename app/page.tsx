'use client';

import Navbar from '@/components/Navbar';
import Transition from '@/components/Transition';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import XP from '@/components/sections/XP';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  // slide beach as window is scrolled
  useEffect(() => {
    const beachDiv = document.getElementById('beach');

    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      if (beachDiv) beachDiv.style.bottom = -scrollDistance + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <main>
      <Transition delay="100">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      </Transition>
      <Hero />
      <About darkMode={darkMode} />
      <XP darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Footer />

      <div
        id="beach"
        className="fixed bottom-0 w-[100vw] h-[30vh] overflow-hidden"
      >
        <Transition delay="100">
          <Image
            style={{
              // minWidth: '110%',
              objectPosition: '0px 40px',
            }}
            src="/beach-svg.svg"
            alt="Image"
            fill
            objectFit="cover"
          />
        </Transition>
      </div>
    </main>
  );
}
