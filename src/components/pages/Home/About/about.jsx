import React from "react";
import HeadingSection from "../headingSection";
import image1 from "../../../../image/pages/home/about/about.png.webp";
import icon1 from "../../../../image/pages/home/icons/about-1.png";
import icon2 from "../../../../image/pages/home/icons/about-2.png";
import icon3 from "../../../../image/pages/home/icons/about-3.png";

const About = () => {
  return (
    <div className="my-16 px-4 flex flex-col items-center md:px-8">
      <HeadingSection
        title="Welcome to Ahana"
        description="Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!"
      />
      <div className="flex flex-col lg:flex-row items-center space-x-14 my-10">
        {/* Image section */}
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <img src={image1} alt="about" className="w-full max-w-md mx-auto" />
        </div>

        {/* Text and icons section */}
        <div className="flex flex-col space-y-10  lg:w-1/2">
          {/* Icon 1 */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-10">
            <img src={icon1} alt="icon1" className="w-16 mb-4 md:mb-0" />
            <div className="text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#333333]">
                Full Rejuvenation
              </h3>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-[#666666]">
                Excepteur sint occaecat cupidatat non proident, sunt in
                <br /> culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-10">
            <img src={icon2} alt="icon2" className="w-16 mb-4 md:mb-0" />
            <div className="text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#333333]">
                Extension of Spring
              </h3>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-[#666666]">
                Sed ut perspiciatis unde omnis iste natus error sit
                <br /> voluptatem a cusantium doloremque.
              </p>
            </div>
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-10">
            <img src={icon3} alt="icon3" className="w-16 mb-4 md:mb-0" />
            <div className="text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#333333]">
                Against Aging
              </h3>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-[#666666]">
                Nemo enim ipsam voluptatem quia voluptas sit
                <br /> aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-start">
          <button className="relative inline-block  py-[2px] px-[2px] font-semibold text-white rounded-2xl transition-all duration-300 ease-in-out hover:text-[#f65d5d] hover:bg-transparent">
            {/* Gradient Border */}
            <span className="absolute inset-0 bg-[linear-gradient(145deg,#fdb07d_0%,#f65d5d_100%)] rounded-3xl p-[3px] opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>

            {/* Inner Transparent Button */}
            <span className="relative z-10 block bg-transparent rounded-3xl px-6 py-2 hover:bg-white">
              EXPLORE MORE
            </span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
