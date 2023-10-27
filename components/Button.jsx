import { useCart } from "./hooks/use-cart";

const Button = ({ children, id }) => {
  const { incrementCount, decrementCount } = useCart();
  return (
    <div
      className="border sm:border-2 p-1 sm:p-2 rounded-3xl text-[0.6rem] sm:text-[1rem] flex gap-3 select-none"
      key={id}
    >
      <button
        onClick={() => {
          decrementCount(id, 1);
        }}
      >
        -
      </button>
      <span className="tabular-nums">{children}</span>
      <button
        onClick={() => {
          incrementCount(id, 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Button;
