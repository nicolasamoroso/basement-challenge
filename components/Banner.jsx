import Text from "./Text";
import Ellipse from "./Ellipse";

const Banner = () => {
  return (
    <section className="px-3 sm:px-0">
      <article className="w-[93vw] m-auto">
        <Text css="text-center text-[14vw]">BASEMENT</Text>
        <span className="flex items-center justify-center gap-2 md:gap-5">
          <Ellipse>EST</Ellipse>
          <Text css="text-center text-[14vw] tracking-wider text-black text-shadow">
            SUPPLY
          </Text>
          <Ellipse>2K23</Ellipse>
        </span>
      </article>
    </section>
  );
};

export default Banner;
