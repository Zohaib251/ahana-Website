import React from "react";

const EventsCard = ({ events,name }) => {
  return (
    <div className="flex flex-col md:flex-row items-center border rounded-xl shadow-md overflow-hidden mx-4 md:mx-0">
      <div className="w-full md:w-56">
        <img 
          src={events} 
          alt="Event Image" 
          className="w-full h-auto  rounded-tl-xl md:rounded-bl-xl object-cover"
        />
      </div>
      <div className="p-4 md:mx-8 flex-1">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#333333] hover:text-[#F65D5D] cursor-pointer">
          {name}
        </h3>
        <div className="flex flex-col space-y-2 text-left">
          <span className="text-sm md:text-base text-[#2F3630] flex items-center">
            <i className="icon-user text-[#F65D5D] mr-2"></i> Kelly Alexander
          </span>
          <span className="text-sm md:text-base text-[#2F3630] flex items-center">
            <i className="icon-calendar-check-o text-[#F65D5D] mr-2"></i> 15 January, 2019
          </span>
          <span className="text-sm md:text-base text-[#2F3630] flex items-center">
            <i className="icon-map text-[#F65D5D] mr-2"></i> 184 Main Collins Street
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
