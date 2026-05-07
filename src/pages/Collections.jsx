import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [collections, setCollections] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);

  // toggle category filters
  const toggleCategoryFilter = (e) => {
    if (categoryFilters.includes(e.target.value)) {
      setCategoryFilters((prev) =>
        prev.filter((item) => item !== e.target.value),
      );
    } else {
      setCategoryFilters((prev) => [...prev, e.target.value]);
    }
  };

  // toggle type filters
  const toggleTypeFilter = (e) => {
    if (typeFilters.includes(e.target.value)) {
      setTypeFilters((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setTypeFilters((prev) => [...prev, e.target.value]);
    }
  };
  // apply filters to products and set collections
  const applyFilters = () => {
    let productsCopy = products.slice();
    if (categoryFilters.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        categoryFilters.includes(item.category),
      );
    }

    if (typeFilters.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        typeFilters.includes(item.subCategory),
      );
    }
    setCollections(productsCopy);
  };

  useEffect(() => {
    applyFilters();
  }, [categoryFilters, typeFilters]);

  // set collections to all products on page load
  useEffect(() => {
    setCollections(products);
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300">
      {/* Filter products */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
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
                onChange={toggleCategoryFilter}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520]  "
                value={"Women"}
                onChange={toggleCategoryFilter}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520]"
                value={"Kids"}
                onChange={toggleCategoryFilter}
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
                onChange={toggleTypeFilter}
              />
              Top wear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520]  "
                value={"Bottomwear"}
                onChange={toggleTypeFilter}
              />
              Bottom wear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 accent-[#daa520]"
                value={"Winterwear"}
                onChange={toggleTypeFilter}
              />
              Winter wear
            </p>
          </div>
        </div>
      </div>

      {/*collections */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* sort products */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Rendering collections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6">
          {collections.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
