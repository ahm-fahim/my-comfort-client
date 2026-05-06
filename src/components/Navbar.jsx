import "react";
import { NavLink } from "react-router-dom";
// import assets from "../assets/frontend_assets/assets";

const Navbar = () => {
    return <div className="flex items-center justify-between py-5 font-medium">
        <div className="text-xl font-bold">My <span className="text-orange-600">Com</span>fort</div>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink className="flex flex-col items-center " to="/"><p>HOME</p> <hr className="w-2/4 border-none h-[1.5px] bg-orange-600 hidden" /></NavLink>
            <NavLink className="flex flex-col items-center " to="/collections"><p>COLLECTIONS</p> <hr className="w-2/4 border-none h-[1.5px] bg-orange-600 hidden" /></NavLink>
            <NavLink className="flex flex-col items-center " to="/about"><p>ABOUT</p> <hr className="w-2/4 border-none h-[1.5px] bg-orange-600 hidden" /></NavLink>
            <NavLink className="flex flex-col items-center " to="/contact"><p>CONTACT</p> <hr className="w-2/4 border-none h-[1.5px] bg-orange-600 hidden" /></NavLink>
        </ul>

        <div className="flex items-center gap-6">
            {/* <img src={assets.search_icon} alt="Search"  className="w-5 cursor-pointer"/> */}
            {/* <img src={assets.cart_icon} alt="Cart" /> */}
        </div>
  </div>;
};

export default Navbar;
 