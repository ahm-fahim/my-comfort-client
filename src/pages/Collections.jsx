import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [collections, setCollections] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {}, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300">
      {/* Rendering collections */}

      {/* Filter products */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilters(!showFilters)}  className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="dropdown icon"
            className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
          />
        </p>

        {/* Filter by category */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520] "
                value={"Men"}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520]  "
                value={"Women"}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520]"
                value={"Kids"}
              />
              Kids
            </p>
          </div>
        </div>
        {/* filter by sub category  */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520] "
                value={"Topwear"}
              />
              Top wear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520]  "
                value={"Bottomwear"}
              />
              Bottom wear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520]"
                value={"Winterwear"}
              />
              Winter wear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
