import Text from "./Text";
import CartItem from "./CartItem";

export default function CartModal({ closeModal, cartItems }) {
  let USDollar = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.count,
    0
  );

  const total = USDollar.format(Math.round(totalAmount * 100) / 100);

  return (
    <div className="absolute flex flex-col justify-between md:block md:border-l md:border-b z-30 right-0 top-0 bg-black w-full h-full md:w-[650px] md:h-[60vh]">
      <div className="p-2 sm:p-3 h-full md:h-[50vh] overflow-auto">
        <div className="flex flex-col items-end">
          <button onClick={closeModal}>
            <Text css="sm:text-[1rem] pb-5 pt-4">→ CLOSE</Text>
          </button>
        </div>
        <div className="flex flex-col items-center sm:flex-row gap-5 justify-center">
          <Text css="text-[5.5rem]">YOUR</Text>
          <Text css="text-[5.5rem] tracking-wider text-black text-shadow">
            CART
          </Text>
        </div>
        <ul className="sm:max-h-[23vw] mt-5 sm:mt-10 flex flex-col sm:block gap-3">
          {cartItems.length === 0 && (
            <Text css="sm:text-[1.5rem] text-center">Your cart is empty</Text>
          )}
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </ul>
      </div>
      <div>
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
      </div>
    </div>
  );
}
