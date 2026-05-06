import { ShopContext } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";

const ShopContextProvider = ({ children }) => {
  const currency = "TK";
  const deliveryFee = 110;

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
