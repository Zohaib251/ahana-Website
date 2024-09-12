import React from "react";

const CourseCard = ({ image, heading, description }) => {
  return (
    <div className="w-80 text-center shadow-lg rounded-xl bg-white ">
      {/* Image */}
      <div className="flex justify-center">
        <img src={image} alt="course" className="w-full rounded-t-xl" />
      </div>

      {/* Heading */}
      <h3 className="mt-6 text-xl md:text-2xl hover:text-[#F65D5D] text-[#333333] font-medium">
        {heading}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[#666666] text-sm md:text-base">{description}</p>

      {/* Divider */}
      <hr className="mt-7 h-1 bg-[#666666] opacity-5" />

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row items-center my-5 justify-center space-y-4 md:space-y-0 md:space-x-10">
        {/* Category */}
        <div className="flex items-center space-x-2">
          <span className="flex icon-dot-single text-[#F65D5D] text-lg items-center">
            <p className="text-[#666666] text-lg">Health & Beauty</p>
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start text-[#666666] space-x-5">
          <span className="icon-facebook cursor-pointer"></span>
          <span className="icon-instagram cursor-pointer"></span>
          <span className="icon-twitter cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
