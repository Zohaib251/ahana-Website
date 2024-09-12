import React, { useRef } from "react";
import Slider from "react-slick";
import TrainersCard from "./trainersCard";
import HeadingSection from "../headingSection";
import trainer1 from "../../../../image/pages/home/trainer/1.png.webp";
import trainer2 from "../../../../image/pages/home/trainer/2.png.webp";
import trainer3 from "../../../../image/pages/home/trainer/3.png.webp";
import arrow from "../../../../image/pages/home/icons/arrow-circle.png";
const trainers = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],

    appendDots: (dots) => (
      <div
        style={{
          bottom: "-80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={arrow}
          alt=""
          className="cursor-pointer hover:text-[#F65D5D]"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <img
          src={arrow}
          alt=""
          className="rotate-180 ml-6 cursor-pointer"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    ),
  };
  return (
    <div className="pt-16 pb-32 bg-[#fff] flex flex-col items-center justify-center text-center">
      <HeadingSection
        title="Our Trainer Yoga"
        description="Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!"
      />
      <div className="w-full max-w-screen-lg mt-20">
        <Slider {...settings} ref={sliderRef}>
          <TrainersCard image={trainer1} name="Lori Kennedy" />
          <TrainersCard image={trainer2} name="Lori Kennedy" />
          <TrainersCard image={trainer3} name="Rebecca James" />
        </Slider>
      </div>
    </div>
  );
};

export default trainers;
