import Image from "next/legacy/image";
import Text from "./Text";
import Button from "./Button";
import SizeSelector from "./SizeSelector";

const CartItem = ({ item, index }) => {
  return (
    <li
      key={index}
      className="flex border p-2 sm:p-3 gap-3 mb-3 sm:min-h-[22vh]"
    >
      <div className="bg-gradient-to-t from-gray1 to-gray flex justify-center items-center w-[200px] sm:w-[300px]">
        <Image
          src={item.product.image}
          alt={`${item.product.name} product image`}
          objectFit="contain"
          width={`${item.product.name === "Black cap" ? "120" : "300"}`}
          height={`${item.product.name === "Black cap" ? "120" : "300"}`}
          draggable={false}
        />
      </div>
      <div className="flex flex-col xs:justify-between w-[100%]">
        <div>
          <Text css="font-bold sm:text-[1.5rem] leading-[100%] xs:leading-[100%] md:md-text-shadow pb-2 uppercase">
            {item.product.name}
          </Text>
          <Text css="text-[0.6rem] sm:text-[1rem] text-[#999]">
            {item.product.description}
          </Text>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 pt-2">
          <div className="flex gap-3 items-center">
            <Text css="text-[0.7rem] sm:text-[1.5rem]">QUANTITY:</Text>
            <Button id={item.product.id}>{item.count}</Button>
          </div>
          <div className="flex flex-col justify-between xs:items-center xs:flex-row gap-3 sm:gap-3">
            <div className="flex items-center gap-3">
              <Text css="text-[0.7rem] sm:text-[1.5rem] pt-1">SIZE:</Text>
              <SizeSelector item={item} />
            </div>
            <Text css="text-[0.9rem] sm:text-[1.5rem]">
              ${item.product.price}
            </Text>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
