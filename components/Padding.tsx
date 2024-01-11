interface PaddingProps {
  children: React.ReactNode;
  classname?: string;
  id?: string;
}

const Padding = ({ children, classname, id }: PaddingProps) => {
  return (
    <div id={id} className={`p-10 ${classname}`}>
      {children}
    </div>
  );
};

export default Padding;
