import "react";

const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Handle form submission

    };

    return <div className="text-center">
        <div className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</div>
        <p className="text-gray-400 mt-3">Join our newsletter to receive updates and exclusive offers.</p>

        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-400 pl-3 ">
            <input className="w-full sm:flex-1 outline-none" type="email" name="email" id="email" placeholder="Enter your email" required />
            <button type="submit" className="px-10 py-4 bg-[#daa520] text-xs text-white">Subscribe</button>
        </form>
  </div>;
};

export default NewsLetterBox;
