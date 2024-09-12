import React from "react";
import icon1 from "../../../../image/pages/home/icons/about-1.png";
import icon2 from "../../../../image/pages/home/icons/about-2.png";
import icon3 from "../../../../image/pages/home/icons/about-3.png";
import icon4 from "../../../../image/pages/home/icons/about-4.png";

const AboutUs = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-14 mt-10 md:mt-20 lg:mt-28">
      {/* Icon 1 */}
      <div className="flex flex-col items-center w-72 md:w-60 space-y-5">
        <img src={icon1} alt="icon1" className="w-16 mb-4" />
        <div className="text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#333333]">
            Full Rejuvenation
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#666666]">
            Excepteur sint occaecat cupidatat non proident sunt
          </p>
        </div>
      </div>

      {/* Icon 2 */}
      <div className="flex flex-col items-center w-72 md:w-60 space-y-5">
        <img src={icon2} alt="icon2" className="w-16 mb-4" />
        <div className="text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#333333]">
            Extension of Spring
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#666666]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>
      </div>

      {/* Icon 3 */}
      <div className="flex flex-col items-center w-72 md:w-60 space-y-5">
        <img src={icon3} alt="icon3" className="w-14 mb-4" />
        <div className="text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#333333]">
            Against Aging
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#666666]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          </p>
        </div>
      </div>

      {/* Icon 4 */}
      <div className="flex flex-col items-center w-72 md:w-60 space-y-5">
        <img src={icon4} alt="icon4" className="w-16 mb-4" />
        <div className="text-center">
          <h3 className="text-lg md:text-xl lg:text-2xl  font-medium text-[#333333]">
            Slim Body
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#666666]">
            Neque porro quisquam est, qui dolorem ipsum quia dolor
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
