import Padding from './Padding';

export const TwoPanel = ({
  heading,
  content,
}: {
  heading: React.ReactElement | React.ReactElement[];
  content: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <div className="min-h-[800px] w-full grid grid-cols-2 grid-rows-1">
      <Padding>{heading}</Padding>

      <div className="">
        <Padding>{content}</Padding>
      </div>
    </div>
  );
};
