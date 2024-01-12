'use client';

import Navbar from '@/components/Navbar';
import Transition from '@/components/Transition';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import XP from '@/components/sections/XP';
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

      <div id="beach" className="fixed bottom-0 w-full">
        <Transition delay="100" classname="w-full" direction="up">
          <div
            id="beach"
            className="w-full h-[20vh] flex flex-col justify-end "
            style={{
              backgroundPosition: 'bottom',
              backgroundRepeat: 'repeat-x',
              backgroundImage: "url('/beach.svg')",
            }}
          />
        </Transition>
      </div>
    </main>
  );
}
