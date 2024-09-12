import React, { useState, useEffect } from "react";
import image1 from "../../../image/pages/home/image_slider/1.webp";
import image2 from "../../../image/pages/home/image_slider/2.webp";
import image3 from "../../../image/pages/home/image_slider/3.webp";
import arrowButton from "../../../image/pages/home/icons/arrows-buttom.png";

const BackgroundSlider = () => {
  const slides = [
    {
      image: image1,
    },
    {
      image: image2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      heading: "Get slim and toned with yoga",
      buttons: ["Register now"],
    },
    {
      image: image3,
      heading: "Reduce your stress",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
      buttons: ["Register now"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        style={{
          background: "linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)",
        }}
        className="w-full h-[578px] md:h-[780px] flex justify-between items-center px-4 md:px-8"
      >
        {/* Left side icons */}
        <div className="flex flex-col space-y-4 items-center">
          <span className="icon-facebook hidden md:block text-white text-xl cursor-pointer rotate-[-90deg] opacity-30 hover:opacity-100"></span>
          <span className="icon-instagram hidden md:block text-white text-xl cursor-pointer rotate-[-90deg] opacity-30 hover:opacity-100"></span>
          <span className="icon-twitter hidden md:block text-white text-xl cursor-pointer rotate-[-90deg] opacity-30 hover:opacity-100"></span>
          <span className="icon-linkedin2 hidden md:block text-white text-xl cursor-pointer rotate-[-90deg] opacity-30 hover:opacity-100"></span>
        </div>

        {/* Center content based on current slide */}
        <div className="flex justify-center items-center w-full h-full relative">
          {currentIndex === 0 && (
            <img
              src={slides[currentIndex].image}
              alt="slide image"
              className="max-w-full mt-10 max-h-full"
            />
          )}

          {currentIndex === 1 && (
            <div className="flex mt-0 lg:mt-32 items-center justify-center w-full space-x-0 lg:space-x-10">
              <img
                src={slides[currentIndex].image}
                alt="slide image"
                className="w-1/2 hidden lg:block mt-16 "
              />
              <div className="w-full md:w-72 lg:w-96 mt-0 lg:mt-[-200px] text-center md:text-left">
                <h1 className="text-white font-bold lg:font-normal text-xl md:text-3xl lg:text-6xl mb-3">
                  {slides[currentIndex].heading}
                </h1>
                <p className="text-white text-sm md:text-lg lg:text-xl mb-2">
                  {slides[currentIndex].text}
                </p>
                <button className="px-4 mt-3 bg-white text-[#F65D5D] uppercase rounded-3xl py-2 md:px-6 md:py-3 font-bold text-xs md:text-sm lg:text-base">
                  {slides[currentIndex].buttons}
                </button>
              </div>
            </div>
          )}

          {currentIndex === 2 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-full md:w-4/5 lg:w-3/4">
                <h1 className="text-white text-2xl font-bold lg:font-normal md:text-3xl lg:text-6xl mb-3">
                  {slides[currentIndex].heading}
                </h1>
                <p className="text-white text-sm md:text-lg lg:text-xl mx-auto my-10">
                  {slides[currentIndex].text}
                </p>
                <button className="px-4 mt-3 mb-10 bg-white text-[#F65D5D] uppercase rounded-3xl py-2 md:px-6 md:py-3 font-bold text-xs md:text-sm lg:text-base">
                  {slides[currentIndex].buttons}
                </button>
              </div>
              <img
                src={slides[currentIndex].image}
                alt="slide image"
                className="mx-auto hidden lg:block mt-4"
              />
            </div>
          )}

          {/* Arrow button */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <img
              src={arrowButton}
              alt="Arrow Button"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Right side dots */}
        <div className="flex flex-col space-y-4 items-center">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer h-2 w-2 md:h-3 md:w-3 bg-white rounded-full ${
                currentIndex === slideIndex ? "opacity-100" : "opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
