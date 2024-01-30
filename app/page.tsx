'use client';

import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import Transition from '@/components/Transition';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import XP from '@/components/sections/XP';
import { useEffect, useState } from 'react';

export default function Home() {
  console.log(
    `👋👋👋 Hi there!`,
    `If you're seeing this, you should consider hiring me for your next project! https://www.linkedin.com/in/petercorrea`
  );

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
      <link rel="icon" href="/headshot.png" sizes="any" />
      <Transition delay="100">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <SocialLinks />
      </Transition>
      <Hero />
      <About darkMode={darkMode} />
      <XP darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Footer />
    </main>
  );
}
