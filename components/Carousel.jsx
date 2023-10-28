import Image from "next/image";

const Carousel = () => {
  return (
    <div className="relative">
      <div>
        <hr className="mb-2 md:mb-6" />
        <div className="w-full overflow-hidden">
          <div className="texto-carrusel text-[15px] sm:text-2xl md:text-[35px]">
            A man can&apos;t have enough basement swag — A man can&rsquo;t have
            enough swag - A man can&apos;t have enough basement swag — A man
            can&rsquo;t have enough swag - A man can&apos;t have enough basement
            swag — A man can&rsquo;t have enough swag - A man can&apos;t have
            enough basement swag — A man can&rsquo;t have enough swag - A man
            can&apos;t have enough basement swag — A man can&rsquo;t have enough
            swag - A man can&apos;t have enough basement swag — A man
            can&rsquo;t have enough swag - A man can&apos;t have enough basement
            swag — A man can&rsquo;t have enough swag - A man can&apos;t have
            enough basement swag — A man can&rsquo;t have enough swag - A man
            can&apos;t have enough basement swag — A man can&rsquo;t have enough
            swag - A man can&apos;t have enough basement swag — A man
            can&rsquo;t have enough swag - A man can&apos;t have enough basement
            swag — A man can&rsquo;t have enough swag - A man can&apos;t have
            enough basement swag — A man can&rsquo;t have enough swag - A man
            can&apos;t have enough basement swag — A man can&rsquo;t have enough
            swag - A man can&apos;t have enough basement swag — A man
            can&rsquo;t have enough swag - A man can&apos;t have enough basement
            swag — A man can&rsquo;t have enough swag - A man can&apos;t have
            enough basement swag — A man can&rsquo;t have enough swag - A man
            can&apos;t have enough basement swag — A man can&rsquo;t have enough
            swag - A man can&apos;t have enough basement swag — A man
            can&rsquo;t have enough swag - A man can&apos;t have enough basement
            swag — A man can&rsquo;t have enough swag - A man can&apos;t have
            enough basement swag — A man can&rsquo;t have enough swag - A man
            can&apos;t have enough basement swag — A man can&rsquo;t have enough
            swag -
          </div>
        </div>
        <hr className="my-2 md:my-6" />
      </div>
      <figure className="hidden md:flex">
        <Image
          src="/assets/asterisk1.png"
          alt="Asterisk 1"
          className="absolute top-[-8%] left-[8%] w-[8vw] h-[8vw] select-none z-20"
          width={160}
          height={168}
        />
        <Image
          src="/assets/asterisk2.png"
          alt="Asterisk 2"
          className="absolute bottom-[80%] right-[9%] w-[7vw] h-[7vw] select-none z-20"
          width={144}
          height={144}
        />
      </figure>
    </div>
  );
};

export default Carousel;
