interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <div className="p-8 pt-0 md:p-10 md:pt-0 border border-red flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default Section;
