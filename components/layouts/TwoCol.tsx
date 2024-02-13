const TwoCol = ({
  heading,
  content,
}: {
  heading: React.ReactElement | React.ReactElement[];
  content: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <div className=" flex flex-col md:grid md:grid-cols-4 w-full max-w-[1000px] mb-10">
      <div className="relative md:-top-4 ">{heading}</div>

      <div className="flex flex-col lg:flex-row md:col-span-3">
        <div>{content}</div>
      </div>
    </div>
  );
};

export default TwoCol;
