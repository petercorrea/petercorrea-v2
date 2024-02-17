interface TagProps {
  text: string;
  classname?: string;
  textColor?: string;
}

const Tag = ({ text, classname, textColor }: TagProps) => {
  return (
    <div
      className={`h-fit rounded-full p-1 px-3 flex flex-row justify-center items-center mr-2 mb-2 shadow-lg  ${classname}`}
    >
      <p
        className={`tiny ${
          textColor ? textColor : 'text-white dark:text-white'
        } lowercase`}
      >
        {text}
      </p>
    </div>
  );
};

export default Tag;
