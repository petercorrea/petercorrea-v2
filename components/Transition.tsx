import React, { useEffect, useState } from 'react';

interface TransitionProps {
  children: React.ReactNode;
  delay: '100' | '150' | '200' | '250' | '300' | '350' | '400' | '450' | '500';
}

const Transition = ({ children, delay }: TransitionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // using custom 'flow' transition timing function
  return (
    <div
      className={`h-full flex flex-row justify-center transition-all flow duration-1000 ease-in-out delay-${delay} ${
        isLoaded ? '-translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default Transition;
