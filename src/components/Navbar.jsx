import { Link, NavLink } from "react-router-dom";
import {assets }from "../assets/frontend_assets/assets";
import { useState } from "react";

const Navbar = () => {
    const [visible, setVisible] = useState(false);

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

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="Menu" className="w-5 cursor-pointer sm:hidden" />
        </div>

        {/* Sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white/90 transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div onClick={()=>setVisible(false)} className="flex flex-col text-gray-600">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <h2 className="font-bold items-center">MY <span className="text-orange-600">COM</span>FORT</h2>
                </div>
                <NavLink onClick={()=>setVisible(false)} to ="/" className="p-3 border-t border-gray-300">Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} to ="/collections" className="p-3 border-t border-gray-300">Collections</NavLink>
                <NavLink onClick={()=>setVisible(false)} to ="/about" className="p-3 border-t border-gray-300">About</NavLink>
                <NavLink onClick={()=>setVisible(false)} to ="/contact" className="p-3 border-t border-gray-300">Contact</NavLink>
            </div>
        </div>
  </div>;
};

export default Navbar;
 