import * as Dialog from "@radix-ui/react-dialog";
import Circle from "./svgs/Circle";
import HD from "./svgs/HD";
import Eye from "./svgs/Eye";
import FourK from "./svgs/FourK";
import Warning from "./svgs/Warning";
import { useCart } from "./hooks/use-cart";
import Text from "./Text";
import CartItem from "./CartItem";

const CartModal = ({ cartItems }) => {
  let USDollar = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  let totalAmount = 0;

  if (cartItems) {
    totalAmount = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.count,
      0
    );
  }

  const total = USDollar.format(Math.round(totalAmount * 100) / 100);

  const { isOpen, setIsOpen } = useCart();

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <button className="border-[2px] border-white text-[14px] rounded-[40px] w-[112px] h-[40px] flex items-center justify-center md:text-[18px] md:rounded-[56px] md:w-[152px] md:h-[48px]">
            CART ({cartItems.length})
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed h-full w-full z-20 right-0 top-0 bg-[rgba(0,0,0,0.5)]" />
          <Dialog.Content
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="fixed flex flex-col z-30 right-0 top-0 bg-black md:border-l md:border-b w-full h-full md:w-[650px] md:max-h-[600px]"
          >
            <div className="p-2 sm:p-3 overflow-auto flex-wrap">
              <div className="flex flex-col items-end">
                <Dialog.Close asChild>
                  <button aria-label="Close">
                    <Text css="sm:text-[1rem] pb-5 pt-4 pr-2">→ CLOSE</Text>
                  </button>
                </Dialog.Close>
              </div>
              <div className="flex flex-col items-center sm:flex-row gap-5 justify-center">
                <Text css="text-[5rem] sm:text-[5.7rem]">YOUR</Text>
                <Text css="text-[5rem] sm:text-[5.7rem] tracking-wider text-black text-shadow">
                  CART
                </Text>
              </div>
              <ul className=" mt-5 sm:mt-10 flex flex-col sm:block gap-3">
                {cartItems.length === 0 && (
                  <div className="flex flex-col items-center sm:flex-row gap-5 justify-center">
                    <Text css="text-[4rem] sm:text-[4.7rem]">IS</Text>
                    <Text css="text-[4rem] sm:text-[4.7rem] tracking-wider text-black text-shadow">
                      EMPTY
                    </Text>
                  </div>
                )}
                {cartItems.map((item, index) => (
                  <CartItem item={item} key={index} />
                ))}
              </ul>
            </div>

            <div className="md:hidden">
              <Text css="sm:text-[1.5rem] p-5 flex justify-between">
                TOTAL: {total}
              </Text>
              <hr className="mx-4" />
              <button className="p-5 block md:hidden text-center w-[100%]">
                <Text css="sm:text-[3rem] tracking-wider text-black text-shadow">
                  CHECKOUT
                </Text>
              </button>
            </div>
            <div className="justify-between mt-5 border-t hidden md:flex">
              <Text css="sm:text-[1.5rem] p-5 w-[100%] border-r">
                TOTAL: {total}
              </Text>
              <button className="p-5">
                <Text css="sm:text-[1.5rem] tracking-wider text-black text-shadow">
                  CHECKOUT
                </Text>
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export { CartModal };

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="px-1 sm:px-0">
      <nav className="flex items-center pb-3 pt-5 md:py-10 px-[2.5vw]">
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
          <CartModal cartItems={cartItems} />
        </span>
      </nav>
    </header>
  );
};

export { Header };
