import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-lg text-[#333333]  space-y-4">
        <div className="py-3">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border-2 border-[#e6e6e6] rounded-3xl bg-[#FAFAFA] text-[#999999] px-4 py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Last Name"
              className="w-full border-2 border-[#e6e6e6] rounded-3xl bg-[#FAFAFA] text-[#999999] px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full border-2 border-[#e6e6e6] rounded-3xl bg-[#FAFAFA] text-[#999999] px-4 py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border-2 border-[#e6e6e6] rounded-3xl bg-[#FAFAFA] text-[#999999] px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full border-2 border-[#e6e6e6] rounded-3xl bg-[#FAFAFA] text-[#999999] px-4 py-2 focus:outline-none"
            ></textarea>
          </div>
          <button className="relative inline-block mb-10 py-[2px] px-[2px] font-semibold text-white rounded-2xl transition-all duration-300 ease-in-out hover:text-[#f65d5d] hover:bg-transparent">
            {/* Gradient Border */}
            <span className="absolute inset-0 bg-[linear-gradient(145deg,#fdb07d_0%,#f65d5d_100%)] rounded-3xl p-[3px] opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>

            {/* Inner Transparent Button */}
            <span className="relative z-10 block bg-transparent rounded-3xl px-6 py-2 hover:bg-white">
              GET STARTED
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
