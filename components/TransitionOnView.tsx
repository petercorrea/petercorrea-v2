import React, { useEffect, useRef, useState } from 'react';

interface TransitionOnViewProps {
  children: React.ReactNode;
  delay?: '100' | '150' | '200' | '250' | '300' | '350' | '400' | '450' | '500';
}

const TransitionOnView = ({ children, delay }: TransitionOnViewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all flow duration-1000 ease-in-out delay-${delay} ${
        isVisible ? '-translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default TransitionOnView;
