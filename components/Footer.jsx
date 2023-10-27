import Image from "next/image";
import Text from "./Text";

function Footer() {
  return (
    <footer className="w-[95vw] mx-auto">
      <div className="flex justify-end gap-3 md:gap-10 items-end">
        <figure className="w-[30%] pb-2 md:w-[20%] md:pb-12 select-none">
          <Image
            src="/assets/figure.webp"
            alt=""
            width={400}
            height={100}
            draggable={false}
          />
        </figure>
        <Text css="text-end text-[14.5vw]">WEAR</Text>
      </div>
      <Text css="text-end text-[14.5vw] tracking-wider text-black text-shadow">
        EVERYDAY
      </Text>
    </footer>
  );
}

export default Footer;
