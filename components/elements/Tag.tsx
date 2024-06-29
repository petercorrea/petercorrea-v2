interface TagProps {
  text: string;
  classname?: string;
  textColor?: string;
}

const Tag = ({ text, classname, textColor }: TagProps) => {
  return (
    <div
      className={`h-fit rounded-full p-1 px-3 flex flex-row justify-center items-center mr-2 bg-stone-200 dark:bg-stone-200 mb-2`}
    >
      <p
        className={`font-tiny text-stone-600 dark:text-black lowercase font-light text-nowrap`}
      >
        {text}
      </p>
    </div>
  );
};

export default Tag;
