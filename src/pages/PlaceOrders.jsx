import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";

const PlaceOrders = () => {
  const [method, setMethod] = useState('cod');

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-6  border-t border-gray-300">
      {/* left side  */}
      <div className="col-span-3 flex flex-col gap-4 w-full sm:max-w-[480px">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Phone number"
        />

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Full Address"
          />
        </div>
        <textarea
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Special Message"
          />
      </div>
      {/* right side  */}
      <div className="mt-8 col-span-3">
        <div className="mt-8 ">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* payment methods */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div  onClick={()=>setMethod('stripe')} className="border w-full border-gray-300 rounded flex items-center px-3 py-2 cursor-pointer">
              <p className={`w-3.5 h-3.5 border border-gray-300 p-1 rounded-full ${method === 'stripe' ? 'bg-green-400': ''}`}></p>
              <img className="h-5 mx-1" src={assets.stripe_logo} alt="" />
            </div>
            <div  onClick={()=>setMethod('razorpay')} className="border w-full border-gray-300 rounded flex items-center px-3 py-2 cursor-pointer">
              <p className={`w-3.5 h-3.5 border border-gray-300 p-1 rounded-full ${method === 'razorpay' ? 'bg-green-400': ''}`}></p>
              <img className="h-5 mx-1" src={assets.razorpay_logo}  alt=""/>
            </div>
            <div onClick={()=>setMethod('cod')}  className="border w-full border-gray-300 rounded flex items-center px-3 py-2 cursor-pointer">
              <p className={`w-3.5 h-3.5 border border-gray-300 p-1 rounded-full ${method === 'cod' ? 'bg-green-400': ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-1 ">CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrders;
