import { ShopContext } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";

const ShopContextProvider = ({ children }) => {
  const currency = "TK";
  const deliveryFee = 110;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // add to cart func
  const addToCart = async (itemId, size) => {
    let CartData = structuredClone(cartItems);

    if (!size) {
      toast.error('Product size is missing.');
      return;
    }
    if (CartData[itemId]) {
      if (CartData[itemId][size]) {
        CartData[itemId][size] += 1;
      } else {
        CartData[itemId][size] = 1;
      }
    } else {
      CartData[itemId] = {}
      CartData[itemId][size] = 1;
    }
    setCartItems(CartData); 
  };

  // get cart count 
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  }

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
