import React from "react";

const PopularClassesCard = ({image}) => {
  return (
    <div className="flex flex-col items-center border rounded-xl shadow-md mt-4 overflow-hidden ">
      <div className="">
        <img
          src={image}
          alt="Event Image"
          className="w-64 h-auto  rounded-tl-xl  object-cover"
        />
      </div>
      <div className="flex-1 justify-center mt-4 text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#333333] hover:text-[#F65D5D] cursor-pointer">
          Yoga Balance
        </h3>
        <div className="flex flex-col space-y-2 text-center">
          <span className="text-sm md:text-base text-[#2F3630] flex items-center">
            <i className="icon-calendar-check-o text-[#F65D5D] mr-2"></i> Mon,
            Wed, Fri
          </span>
          <span className="text-sm md:text-base text-[#2F3630] flex items-center">
            <i className="icon-alarm text-[#F65D5D] mr-2"></i> 06:30pm - 07:45pm
          </span>
          <span className="text-sm md:text-base text-[#2F3630] flex items-center">
            <i className="icon-user text-[#F65D5D] mr-2"></i> Carolyn Berry
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
