const Text = ({ children, css, ...props }) => {
  return (
    <h1
      className={`${css} font-bold leading-[100%] xs:leading-[100%] md:md-text-shadow`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Text;
