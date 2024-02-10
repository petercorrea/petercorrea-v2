interface TransitionProps {
  children: React.ReactNode;
  delay:
    | '50'
    | '100'
    | '150'
    | '200'
    | '250'
    | '300'
    | '350'
    | '400'
    | '450'
    | '500';
  classname?: string;
  direction?: string;
}

const StatelessTransition = ({
  children,
  delay,
  classname,
  direction,
}: TransitionProps) => {
  let animationClass = direction === 'up' ? 'animate-up' : '';

  return (
    <div
      className={`${animationClass} ${classname}`}
      style={{ animationDelay: `${delay}ms opacity-0` }}
    >
      {children}
    </div>
  );
};

export default StatelessTransition;
