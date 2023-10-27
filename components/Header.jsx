import Circle from "./svgs/Circle";
import HD from "./svgs/HD";
import Eye from "./svgs/Eye";
import FourK from "./svgs/FourK";
import Warning from "./svgs/Warning";
import { useCart } from "./hooks/use-cart";
import CartModal from "./CartModal";

const Header = () => {
  const { cartItems, isOpen, setIsOpen } = useCart();

  return (
    <header>
      {isOpen && (
        <CartModal closeModal={() => setIsOpen(false)} cartItems={cartItems} />
      )}
      <nav className="flex items-center mb-3 mt-5 md:my-10 mx-[2.5vw]">
        <span className="h-[40px] md:h-[48px] flex items-center flex-1">
          <a href="#" className="no-underline text-3xl hidden md:flex">
            basement
          </a>
          <a
            href="#"
            className="no-underline text-[38px] h-[40px] flex items-start md:text-3xl md:hidden"
          >
            b.
          </a>
        </span>
        <span className="hidden md:flex md:flex-1 md:justify-center md:gap-4">
          <Circle />
          <HD />
          <Eye />
          <FourK />
          <Warning />
        </span>
        <span className="flex-1 flex justify-end">
          <button
            className="border-[2px] border-white text-[14px] rounded-[40px] w-[112px] h-[40px] flex items-center justify-center md:text-[18px] md:rounded-[56px] md:w-[152px] md:h-[48px]"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            CART ({cartItems.length})
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Header;
