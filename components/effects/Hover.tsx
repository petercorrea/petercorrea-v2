interface HoverProps {
  children: React.ReactElement | React.ReactElement[];
}

const Hover = ({ children }: HoverProps) => {
  return (
    <div className="relative flex flex-row group">
      <div
        className={`bg-transparent border border-stone-100 relative z-10  rounded-xl  flex flex-col justify-between hover:cursor-pointer  transition ease-in  p-4`}
      >
        {children}
      </div>
      <div className="dark:bg-stone-600 bg-stone-100 opacity-0 group-hover:opacity-100 dark:group-hover:opacity-30 rounded-xl w-full h-full scale-[0.80] dark:scale-[0.30] group-hover:scale-100 transition pointer-events-auto absolute"></div>
    </div>
  );
};
export default Hover;
