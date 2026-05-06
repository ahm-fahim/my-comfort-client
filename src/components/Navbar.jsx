import "react";
import { Link, NavLink } from "react-router-dom";
import {assets }from "../assets/frontend_assets/assets";

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
            <img src={assets.search_icon} alt="Search" className="w-5 cursor-pointer" />

            <div className="group relative">
                <img src={assets.profile_icon} alt="Profile" className="w-5 cursor-pointer" />
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>
            </div>
            
            <Link to="/cart" className="relative">
                <img src={assets.cart_icon} alt="Cart" className="w-5 cursor-pointer" />
                <p className="absolute -bottom-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 p-1 flex items-center justify-center">0</p>
            </Link>
        </div>
  </div>;
};

export default Navbar;
 