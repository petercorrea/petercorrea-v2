import React, { useEffect, useState } from 'react';

interface TransitionProps {
  children: React.ReactNode;
  delay: '100' | '150' | '200' | '250' | '300' | '350' | '400' | '450' | '500';
  classname?: string;
  direction?: string;
}

const Transition = ({
  children,
  delay,
  classname,
  direction,
}: TransitionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  let style = '';

  if (isLoaded) {
    if (direction === 'up') {
      style = 'translate-y-0 opacity-100';
    }

    if (direction === 'down') {
      style = '-translate-y-0 opacity-100';
    }
  } else {
    if (direction === 'up') {
      style = 'translate-y-8 opacity-0';
    }

    if (direction === 'down') {
      style = '-translate-y-8 opacity-0';
    }
  }
  // using custom 'flow' transition timing function
  return (
    <div
      className={`transition-all flow duration-1000 ease-in-out delay-${delay} ${style} ${classname}`}
    >
      {children}
    </div>
  );
};

export default Transition;
