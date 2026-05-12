import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col mt-2 gap-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {getCartAmount()}.00 {currency}{" "}
          </p>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {deliveryFee}.00 {currency}
          </p>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between">
          <b>Shipping Fee</b>
          <b>
            {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00{" "}
            {currency}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
