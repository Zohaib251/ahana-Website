import React from "react";


const TrainersCard = ({image,name}) => {
  return (
    <div className="max-w-full md:w-5/6 text-center shadow-lg hover:shadow-2xl rounded-xl cursor-grab bg-white mx-auto ">
      <div className="flex flex-col-reverse md:flex-row items-center ">
        <div className=" flex flex-col justify-center text-center  md:text-left  p-5">
          <div className="font-medium">
            <h3 className="text-[#333333] text-xl md:text-2xl">{name}</h3>
            <span className="text-[#F65D5D] text-md">Yoga Trainer</span>
          </div>
          <div className="text-[#666666] mt-3 text-sm md:text-base">
            Yoga & Therapy Certificate of Uttarakhand University Sanskrit
          </div>
          <div className="flex justify-center item-center md:items-start space-x-3 cursor-pointer  mt-4">
            <span className="icon-facebook hover:text-white text-md bg-[#F2F4F5] hover:bg-[#F65D5D] p-2 rounded-full"></span>
            <span className="icon-instagram hover:text-white text-md bg-[#F2F4F5] hover:bg-[#F65D5D] p-2 rounded-full"></span>
            <span className="icon-twitter hover:text-white text-md bg-[#F2F4F5] hover:bg-[#F65D5D] p-2 rounded-full"></span>
            <span className="icon-linkedin2 hover:text-white text-md bg-[#F2F4F5] hover:bg-[#F65D5D] p-2 rounded-full"></span>
          </div>
        </div>
        <div className=" flex justify-center">
          <img src={image} alt="Trainer" className="w-40  md:w-96 " />
        </div>
      </div>
    </div>
  );
};

export default TrainersCard;
