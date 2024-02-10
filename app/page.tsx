'use client';

import Transition from '@/components/effects/Transition';
import SocialLinks from '@/components/nav/SocialLinks';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import XP from '@/components/sections/XP';

export default function Home() {
  console.log(
    `👋👋👋 Hi there!`,
    `If you're seeing this, you should consider hiring me for your next project! https://www.linkedin.com/in/petercorrea`
  );

  return (
    <main>
      <link rel="icon" href="/headshot.png" sizes="any" />
      <Transition delay="100">
        <SocialLinks />
      </Transition>
      <Hero />
      <About />
      <XP />
      <Projects />
      <Footer />
    </main>
  );
}
