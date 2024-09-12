import React from "react";
import Slider from "react-slick";
import HeadingSection from "../headingSection";
import ClassesCard from "./classesCard";
import image1 from "../../../../image/pages/home/classesCard/1.jpg.webp";
import image2 from "../../../../image/pages/home/classesCard/2.jpg.webp";
import image3 from "../../../../image/pages/home/classesCard/3.jpg.webp";
import author1 from "../../../../image/pages/home/classesCard/author/1.jpg.webp";
import author2 from "../../../../image/pages/home/classesCard/author/2.jpg";
import author3 from "../../../../image/pages/home/classesCard/author/3.jpg.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Classes = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          padding:"4px",
          backgroundColor: "#CCCCCC", // Default color for inactive dots
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
          {/* Show only the first four dots on small screens */}
          {dots.slice(0, 4).map((dot, index) => (
            <li key={index} style={{ margin: "0 2px" }}>
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="pt-16 pb-28 bg-[#F9F2F0] flex flex-col items-center justify-center text-center">
      <HeadingSection
        title="Popular Classes"
        description="Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!"
      />
      <div className="w-full lg:w-[1230px] px-4">
        <Slider {...settings}>
          <ClassesCard
            image={image1}
            heading="Artistic Yoga"
            authorImage={author1}
          />
          <ClassesCard
            image={image2}
            heading="Traditional Hatha"
            authorImage={author2}
          />
          <ClassesCard
            image={image3}
            heading="Yoga Therapy"
            authorImage={author3}
          />
          <ClassesCard
            image={image1}
            heading="Artistic Yoga"
            authorImage={author1}
          />
          <ClassesCard
            image={image2}
            heading="Traditional Hatha"
            authorImage={author2}
          />
          <ClassesCard
            image={image3}
            heading="Yoga Therapy"
            authorImage={author3}
          />
        </Slider>
      </div>
    </div>
  );
};

export default Classes;
