import React from "react";
import Slider from "react-slick";
import EventsCard from "../../Home/Events/eventsCard.jsx";
import events1 from "../../../../image/pages/home/events/1.jpg";
import events2 from "../../../../image/pages/home/events/2.jpg";
import events3 from "../../../../image/pages/home/events/3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ClassesSlider = () => {
  const sliderSettings = {
    dots: false,
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
          dots: false,
          arrows: false,
        },
      },
    ],
    customPaging: (i) => (
      <div
        className="w-2 md:w-3 md:h-3 rounded-full"
        style={{
          padding: "4px",
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
    <div className="mt-8">
      <Slider {...sliderSettings} className="mt-4 ">
        <EventsCard events={events1} name="Lole White Yoga Tour" />
        <EventsCard events={events2} name="Free Yoga Madrid" />
        <EventsCard events={events3} name="One Love Dallas" />
      </Slider>
    </div>
  );
};

export default ClassesSlider;
