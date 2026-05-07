import  "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
    return <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
            <div>
                <img src={assets.logo} alt="logo" className="w-32 mb-5" />
                <p className="text-xs text-gray-600 w-full md:w-2/3 ">
                    "Wear the feeling" captures the idea that clothing is more than just fabric—it’s an emotional experience of ease and confidence. It suggests that when you dress the whole family in My Comfort, you aren’t just choosing a style, you’re choosing a state of mind."
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>123 TEJGOAN</li>
                    <li>DHAKA, NY 10001</li>
                    <li>Email: info@mycomfort.com</li>
                    <li>Phone: (123) 456-7890</li>
                </ul>
            </div>
        </div>
        <hr className=" text-gray-300" />
        <p className="text-center text-gray-600 text-xs mb-5 py-5">© 2026 My Comfort. All rights reserved.</p>
  </div>;
};  

export default Footer;
