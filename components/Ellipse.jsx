const Ellipse = ({ children }) => {
  return (
    <div className="w-[51px] h-[24px] xs:w-[80px] xs:h-[38px] sm:w-[95px] sm:h-[48px] md:w-[135] md:h-[54px] lg:w-[152px] lg:h-[72px] rounded-[50%] border border-white flex items-center justify-center select-none">
      <span className="text-[6px] xs:text-[10px] md:text-[15px] lg:text-xl flex items-center">
        {children}
      </span>
    </div>
  );
};

export default Ellipse;
