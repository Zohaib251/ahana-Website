import React from "react";
import Slider from "react-slick";
import image1 from "../../../../image/pages/home/classesCard/author/1.jpg.webp";
import image2 from "../../../../image/pages/home/classesCard/author/2.jpg";
import image3 from "../../../../image/pages/home/classesCard/author/3.jpg.webp";
import bg from "../../../../image/pages/home/review/review-bg.jpg";
import ReviewCard from "./reviewCard";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
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
    customPaging: (i) => (
      <div
        className="w-2 md:w-3 md:h-3 rounded-full"
        style={{
          padding: "4px",
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ display: "flex" }}>
          {dots.slice(0, 3).map((dot, index) => (
            <li key={index} style={{ margin: "0 2px" }}>
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="relative flex justify-center text-center  my-10 py-20">
      {/* Background image with dimmed opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.5, // Lower opacity for the background image
          zIndex: -2,
        }}
      ></div>

      {/* Gradient overlay to blend over the background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, rgba(246, 93, 93, 0.9) 0%, rgba(253, 176, 125, 0.9) 100%)",
          zIndex: -1,
        }}
      ></div>

      {/*Content */}
      <div className="w-full  px-4 cursor-grab">
        <Slider {...settings}>
          <ReviewCard image={image1} />
          <ReviewCard image={image2} />
          <ReviewCard image={image3} />
        </Slider>
      </div>
    </div>
  );
};

export default Review;
