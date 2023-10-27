import { useState } from "react";
import Image from "next/legacy/image";
import AddToCart from "./svgs/AddToCart";
import { useCart } from "./hooks/use-cart";

const Products = ({ products }) => {
  const [hoveredProducts, setHoveredProducts] = useState({});
  const { addToCart, setIsOpen } = useCart();

  const handleMouseEnter = (productId) => {
    setHoveredProducts((prevHoveredProducts) => ({
      ...prevHoveredProducts,
      [productId]: true,
    }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredProducts((prevHoveredProducts) => ({
      ...prevHoveredProducts,
      [productId]: false,
    }));
  };

  return (
    <ul className="pt-3 pb-16 px-2 sm:px-0 md:py-16 w-[95vw] m-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 select-none gap-y-16">
      {products.map((product) => (
        <li
          key={product.id}
          onMouseEnter={() => handleMouseEnter(product.id)}
          onMouseLeave={() => handleMouseLeave(product.id)}
          className="cursor-pointer relative md:min-h-[500px]"
        >
          <div
            className="bg-gradient-to-t from-gray1 to-gray2 border-b border-white h-full flex justify-center items-center"
            onClick={() => {
              addToCart(product);
              setIsOpen(true);
            }}
          >
            <Image
              src={product.image}
              alt={`${product.name} product image`}
              objectFit="contain"
              width={`${product.name === "Black cap" ? "200" : "400"}`}
              height={400}
              draggable={false}
            />
            {hoveredProducts[product.id] && (
              <div className="absolute inset-0 flex items-center justify-center hover:bg-[#00000066]">
                <AddToCart />
              </div>
            )}
          </div>
          <div className="flex justify-between mt-3">
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;
