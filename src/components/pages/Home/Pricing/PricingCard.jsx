import React from "react";

const PricingCard = ({ title, price, backgroundColor }) => {
  return (
    <div className="bg-white w-64 rounded-xl shadow-md">
      {/* Header with Dynamic Background Color */}
      <div className={`rounded-t-xl p-8 text-center ${backgroundColor}`}>
        <h2 className="text-2xl font-medium text-white mb-10 mt-[-10px]">
          {title}
        </h2>
      </div>

      {/* Price Section */}
      <div className="bg-white rounded-full px-6 py-8 shadow-md mb-4 mx-16 mt-[-45px] text-center">
        <h3 className="text-3xl font-bold text-[#666666]">{`$${price}`}</h3>
        <p className="text-sm text-[#999999]">PER MONTH</p>
      </div>

      {/* Features List */}
      <ul className="text-[#666670] space-y-3 text-base mb-4 text-center">
        <li>Take Up To 7 Classes</li>
        <li>Available To Anyone</li>
        <li>Towels Included</li>
        <li>Never Expires</li>
      </ul>

      {/* Call to Action Button */}
      <button className="relative inline-block mb-10 py-[2px] px-[2px] font-semibold text-[#f65d5d] rounded-2xl bg-transparent transition-all duration-300 ease-in-out hover:text-white">
        {/* Gradient Border */}
        <span className="absolute inset-0 bg-[linear-gradient(145deg,#fdb07d_0%,#f65d5d_100%)] rounded-3xl p-[3px]"></span>

        {/* Inner Transparent Button */}
        <span className="relative z-10 block bg-white rounded-3xl px-6 py-2 bg-transparent hover:bg-transparent">
          GET STARTED
        </span>
      </button>
    </div>
  );
};

export default PricingCard;
