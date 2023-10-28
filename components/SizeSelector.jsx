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
            "data-checked:border rounded-full py-1 px-2 text-[0.6rem] xs:text-[0.9rem] sm:text-[1.2rem] xs:px[10px] xs:py-[3px] xs:pt-[3px] sm:px-[13px] sm:pt-[6px]"
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
