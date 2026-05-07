import "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
    return <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      
        <div >
            <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
            <div className="font-semibold">Easy Exchange Policy</div>
            <div className="text-gray-400">We make it easy for you to exchange</div>
        </div>
        <div >
            <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
            <div className="font-semibold">7 Days Exchange Policy</div>
            <div className="text-gray-400">We allow exchanges within 7 days of purchase.</div>
        </div>
        <div >
            <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
            <div className="font-semibold">Best Customer Support</div>
            <div className="text-gray-400">We offer 24/7 customer support</div>
        </div>
  </div>;
};

export default OurPolicy;
