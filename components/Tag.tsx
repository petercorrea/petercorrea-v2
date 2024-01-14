interface TagProps {
  text: string;
  classname?: string;
}

const Tag = ({ text, classname }: TagProps) => {
  return (
    <div
      className={`h-fit rounded-full p-1 px-3 flex flex-row justify-center items-center mr-2 mb-2 shadow-lg border-[1px] border-primary ${classname}`}
    >
      <p className="text-xs font-100 text-primary lowercase">{text}</p>
    </div>
  );
};

export default Tag;
