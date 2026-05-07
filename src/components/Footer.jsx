import  "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
    return <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr-1fr-1fr] gap-14 my-10 mt-10 text-sm">
            <div>
                <img src={assets.logo} alt="logo"  className="w-32 mb-5"/>
            </div>
        </div>
  </div>;
};

export default Footer;
