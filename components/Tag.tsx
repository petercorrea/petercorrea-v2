interface TagProps {
  text: string;
  classname?: string;
}

const Tag = ({ text, classname }: TagProps) => {
  return (
    <div
      className={`rounded-lg p-1 px-2 flex flex-row justify-center items-center mr-4 mb-2 shadow-lg  ${classname}`}
    >
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

export default Tag;
