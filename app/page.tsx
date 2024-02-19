'use client';

import { scaleRange } from '@/libs/helpers';
import { useEffect } from 'react';

export default function Home() {
  // console.log(
  //   `👋👋👋 Hi there!`,
  //   `If you're seeing this, you should consider hiring me for your next project! https://www.linkedin.com/in/petercorrea`
  // );

  useEffect(() => {
    // get target
    const scrollingWindow = document.querySelector(
      '.scrolling-window'
    ) as HTMLElement;

    const targetElement = document.querySelector('.scale-text') as HTMLElement;

    // define transform function
    function updateTransform() {
      // bottom of element to top of viewport
      const height = scrollingWindow.clientHeight;
      const bottom = scrollingWindow.getBoundingClientRect().bottom;
      const vh = window?.visualViewport?.height;

      // distance to end of scrolling window in pxs
      const distanceToBottom = Math.max(0, bottom - vh!);

      // actual amount: 33 to 100
      let scrollAmount = 100 - (distanceToBottom / height) * 100;

      // normalized: 0 to 100
      let normalize = scaleRange(scrollAmount, 33, 100, 0, 100);

      // effects based off normalized scroll amount
      let scale = 21 - scaleRange(normalize, 0, 100, 1, 20);
      let translate = normalize;
      // to ensure translation fully resets when scrolling back up
      if (translate < 1) translate = 0;

      // closure
      targetElement!.style.transform = `scale(${scale}) translateX(${
        (120 - translate) / 20
      }%)`;
    }

    // define evt listener
    const handleScroll = () => {
      let ticking = false;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (targetElement) {
            updateTransform();
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    // instantiate new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // add evt listener once element is in view
        if (entry.isIntersecting) {
          document.addEventListener('scroll', handleScroll);
        }

        // remove evt listener once element is in view
        if (!entry.isIntersecting) {
          document.removeEventListener('scroll', handleScroll);
        }
      });
    });

    // observe element
    observer.observe(scrollingWindow!);

    // remove evt listener when component unmounts
    return document.removeEventListener('scroll', handleScroll);
  });

  return (
    <main>
      {/* first section */}
      <div className="relative scrolling-window w-screen bg-transparent">
        <h1
          id="long-text"
          className={`text-7xl sticky top-[15%] w-full text-wrap text-white mix-blend-difference origin-left translate-x-[100%] scale-text`}
        >
          Software Engineer & Saxophonist
        </h1>
        <p className="text-black absolute left-[50%] top-[15%]">scroll down</p>

        <div className="h-[200vh] bg-white"></div>

        <div className="h-[100vh] bg-black"></div>
      </div>
    </main>
  );
}
