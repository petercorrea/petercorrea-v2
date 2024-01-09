interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <div className="bg-blue-300 rounded-lg p-1 px-2 flex flex-row justify-center items-center mr-4 mb-2 shadow-lg shadow-blue-300">
      <p className="text-blue-800 text-sm font-medium text-opposite">{text}</p>
    </div>
  );
};

export default Tag;
