import React from "react";

const classesCard = ({ image, heading, authorImage }) => {
  return (
    <div className="max-w-full md:w-96 text-center p-6 shadow-lg rounded-xl cursor-grab bg-white mx-auto my-4">
      <div className="flex justify-center">
        <img
          src={image}
          alt="images"
          className="w-40 md:w-52 rounded-full"
        />
      </div>
      <h3 className="mt-4 text-xl md:text-2xl text-[#333333] font-semibold">
        {heading}
      </h3>
      <div className="flex flex-col md:flex-row justify-center md:space-x-5 text-[#666666] mt-3 text-sm md:text-base">
        <div className="flex items-center justify-center mt-2 md:mt-0">
          <span className="icon-calendar-check-o text-sm text-[#F76E6E] mr-1">
            {" "}
          </span>
          Mon, Wed, Fri
        </div>
        <div className="flex items-center justify-center mt-2 md:mt-0">
          <span className="icon-alarm text-sm text-[#F76E6E] mr-1"> </span>
          06:30pm-07.45pm
        </div>
      </div>
      <p className="mt-3 text-[#666666] text-sm md:text-base">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      </p>
      <hr className="mt-7 h-1 bg-[#666666] opacity-5" />
      <div className="flex flex-col md:flex-row items-center mt-5 justify-center space-y-4 md:space-y-0 md:space-x-10">
        <div className="flex items-center space-x-2">
          <img
            src={authorImage}
            alt="author"
            className="w-10 md:w-12 rounded-full"
          />
          <span className="flex flex-col items-center md:items-start">
            <p className="text-[#333333] font-medium text-xs md:text-base">
              Victoria Web
            </p>
            <p className="text-[#F65D5D] text-xs md:text-sm">Yoga Trainer</p>
          </span>
        </div>
        <div className="flex justify-start">
        <button className="relative inline-block  py-[2px] px-[2px] font-semibold text-white rounded-2xl transition-all duration-300 ease-in-out hover:text-[#f65d5d] hover:bg-transparent">
            {/* Gradient Border */}
            <span className="absolute inset-0 bg-[linear-gradient(145deg,#fdb07d_0%,#f65d5d_100%)] rounded-3xl p-[3px] opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>

            {/* Inner Transparent Button */}
            <span className="relative z-10 block bg-transparent rounded-3xl px-6 py-2 hover:bg-white">
              BOOK NOW
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default classesCard;
