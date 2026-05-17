import "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div className="border-t border-gray-300">
      <div className="flex items-center justify-center text-2xl pt-10 ">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex items-center justify-center gap-6 py-10">
        <img className="col-span-2 w-96"  src={assets.contact_img} />
        <div>
          <div className="flex flex-col gap-1 text-gray-600">
            <b>123 TEJGOAN</b>
            <p>DHAKA, NY 10001</p>
            <p>Email: info@mycomfort.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
