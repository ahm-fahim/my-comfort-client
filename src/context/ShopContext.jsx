import { ShopContext } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";

const ShopContextProvider = ({ children }) => {
  const currency = "TK";
  const deliveryFee = 110;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
