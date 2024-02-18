'use client';

import Transition from '@/components/effects/Transition';
import Padding from '@/components/layouts/Padding';
import SocialLinks from '@/components/nav/SocialLinks';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Work from '@/components/sections/Work';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  console.log(
    `👋👋👋 Hi there!`,
    `If you're seeing this, you should consider hiring me for your next project! https://www.linkedin.com/in/petercorrea`
  );

  return (
    <main>
      <link rel="icon" href="/headshot.png" sizes="any" />
      <SpeedInsights />

      <Transition delay="100">
        <SocialLinks />
      </Transition>

      <Padding>
        <div className="flex flex-col items-center">
          <Hero />
          <About />
          <Work />
          <Projects />
        </div>
      </Padding>
      <Footer />
    </main>
  );
}
