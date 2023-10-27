import { useState } from "react";
import { useCart } from "./hooks/use-cart";

const Button = ({ children, id }) => {
  const { incrementCount, decrementCount, removeFromCart } = useCart();
  const [count, setCount] = useState(children);
  console.log(count);
  return (
    <div
      className="border sm:border-2 p-1 sm:p-2 rounded-3xl text-[0.6rem] sm:text-[1rem] flex gap-3 select-none"
      key={id}
    >
      {/* bug a arreglar: si borras el primer articulo disminuyendo hasta 0, el 2do item queda en 1 */}
      <button
        disabled={count < 1}
        onClick={() => {
          if (count === 1) {
            count === 1 ? removeFromCart(id) : decrementCount(id, count - 1);
          } else setCount(count - 1);
        }}
      >
        -
      </button>
      <span className="tabular-nums">{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
          incrementCount(id, count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Button;
