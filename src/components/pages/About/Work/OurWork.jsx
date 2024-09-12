import React from "react";
import bg from "../../../../image/pages/about/wwd-bg.jpg.webp";

const OurWork = () => {
  return (
    <div
      className="mt-20 relative bg-cover bg-[right_center] h-[500px]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Text and Progress Bar Container */}
      <div className="flex flex-col items-center justify-center text-left px-6 lg:px-0 lg:pl-[700px] w-full mx-auto">
        {/* Text Overlay */}
        <div className="text-white max-w-md mt-8 text-center lg:text-left">
          <h1 className="text-3xl text-[#333333] font-medium uppercase">
            What we do
          </h1>
          <p className="mt-4 text-base text-[#666666] md:text-lg">
            To be invited to the nearest Cali center and get free physical
            advice to learn more about the program.
          </p>
        </div>

        {/* Progress Bar Section */}
        <div className="flex flex-col items-center lg:items-start justify-start space-y-6 mt-8 max-w-md w-full lg:ml-0">
          {/* Breathing */}
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="text-[#333333] font-normal text-xl">Breathing</div>
            <div className="relative w-full bg-[#FDB07D] rounded-full h-2.5 mt-2">
              <div
                className="absolute top-0 left-0 bg-[#F76D63] h-2.5 rounded-full"
                style={{ width: "84%" }}
              />
              <div className="absolute -top-6 left-[84%] translate-x-[-50%] text-xs font-medium bg-[#F65D5D] text-white px-2 py-0.5 rounded">
                84%
              </div>
            </div>
          </div>

          {/* Metabolism */}
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="text-[#333333] font-normal text-xl">Metabolism</div>
            <div className="relative w-full bg-[#FDB07D] rounded-full h-2.5 mt-2">
              <div
                className="absolute top-0 left-0 bg-[#F76D63] h-2.5 rounded-full"
                style={{ width: "75%" }}
              />
              <div className="absolute -top-6 left-[75%] translate-x-[-50%] text-xs font-medium bg-[#F65D5D] text-white px-2 py-0.5 rounded">
                75%
              </div>
            </div>
          </div>

          {/* Flexibility */}
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="text-[#333333] font-normal text-xl">Flexibility</div>
            <div className="relative w-full bg-[#FDB07D] rounded-full h-2.5 mt-2">
              <div
                className="absolute top-0 left-0 bg-[#F76D63] h-2.5 rounded-full"
                style={{ width: "90%" }}
              />
              <div className="absolute -top-6 left-[90%] translate-x-[-50%] text-xs font-medium bg-[#F65D5D] text-white px-2 py-0.5 rounded">
                90%
              </div>
            </div>
          </div>

          {/* Strongness */}
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="text-[#333333] font-normal text-xl">Strongness</div>
            <div className="relative w-full bg-[#FDB07D] rounded-full h-2.5 mt-2">
              <div
                className="absolute top-0 left-0 bg-[#F76D63] h-2.5 rounded-full"
                style={{ width: "78%" }}
              />
              <div className="absolute -top-6 left-[78%] translate-x-[-50%] text-xs font-medium bg-[#F65D5D] text-white px-2 py-0.5 rounded">
                78%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
