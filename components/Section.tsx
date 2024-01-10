interface SectionProps {
  children: React.ReactNode;
  classname?: string;
  id?: string;
}

const Section = ({ children, classname, id }: SectionProps) => {
  return (
    <div
      id={id}
      className={`p-8 pt-0 md:p-10 md:pt-0 flex flex-col justify-center items-center ${classname}`}
    >
      {children}
    </div>
  );
};

export default Section;
