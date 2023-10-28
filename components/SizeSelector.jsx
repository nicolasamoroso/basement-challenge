import { useState } from "react";

const SizeSelector = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState("S");

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const sizes = item.product.options[0].values;

  return (
    <div>
      {sizes.map((size, index) => (
        <button
          key={index}
          className={
            "data-checked:border rounded-full py-1 px-2 text-[0.6rem] sm:px-[13px] sm:pt-[6px] sm:text-[1.2rem]"
          }
          data-ui={selectedSize === size ? "checked" : undefined}
          onClick={() => handleSizeSelection(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
