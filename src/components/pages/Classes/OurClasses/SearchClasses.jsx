import React, { useState } from "react";
import Slider from "react-slick";
import RadioCheck from "../../../../image/pages/home/icons/radio-check.png";
import PopularClassesCard from "./PopularClassesCard.jsx";
import event1 from "../../../../image/pages/home/events/1.jpg";
import event2 from "../../../../image/pages/home/events/2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SearchClasses = () => {
  const [sortCategoryOption, setCategorySortOption] =
    useState("Choose Category");
  const [sortLevelOption, setLevelSortOption] = useState("Choose Level");
  const [sortTrainerOption, setTrainerSortOption] = useState("Choose Level");

  const [checkedDays, setCheckedDays] = useState({
    monday: false,
    friday: false,
    tuesday: false,
    saturday: false,
    wednesday: false,
    sunday: false,
    thursday: false,
  });

  const handleCategorySortChange = (e) => {
    setCategorySortOption(e.target.value);
  };

  const handleLevelSortChange = (e) => {
    setLevelSortOption(e.target.value);
  };

  const handleTrainerSortChange = (e) => {
    setTrainerSortOption(e.target.value);
  };

  const handleCheckboxChange = (day) => {
    setCheckedDays((prev) => ({
      ...prev,
      [day]: !prev[day], // Toggle the checkbox state
    }));
  };

  const sliderSettings = {
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
    <div className="item-center flex flex-col justify-center ml-4 md:ml-0 ">
      <div>
        <h2 className="uppercase text-2xl text-[#333333]">Search Classes</h2>
      </div>
      {/*Choose Category  */}
      <div className="relative inline-block w-64 mt-4">
        <select
          value={sortCategoryOption}
          onChange={handleCategorySortChange}
          className="block w-full px-4 py-2 text-[#999999] bg-[#fafafa] border border-[#e6e6e6] rounded-3xl focus:outline-none "
        >
          <option value="Choose Category">Choose Category</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
        </select>
      </div>
      {/*Choose Level  */}
      <div className="relative inline-block w-64 mt-4">
        <select
          value={sortLevelOption}
          onChange={handleLevelSortChange}
          className="block w-full px-4 py-2 text-[#999999] bg-[#fafafa] border border-[#e6e6e6] rounded-3xl focus:outline-none "
        >
          <option value="Choose Category">Choose Level</option>
          <option value="Level 1">Level 1</option>
          <option value="Level 2">Level 2</option>
        </select>
      </div>
      {/* Choose Trainer */}
      <div className="relative inline-block w-64 mt-4">
        <select
          value={sortTrainerOption}
          onChange={handleTrainerSortChange}
          className="block w-full px-4 py-2 text-[#999999] bg-[#fafafa] border border-[#e6e6e6] rounded-3xl focus:outline-none "
        >
          <option value="Choose Category">Choose Trainer</option>
          <option value="Name">Name</option>
        </select>
      </div>
      {/*Check Box  */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {Object.keys(checkedDays).map((day, index) => (
          <label key={index} className="flex items-center space-x-2">
            <div className="relative">
              {checkedDays[day] ? (
                <img
                  src={RadioCheck}
                  alt="Checked"
                  className="w-4 h-4 rounded-full"
                  onClick={() => handleCheckboxChange(day)} // Toggle off on image click
                />
              ) : (
                <div
                  className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center"
                  onClick={() => handleCheckboxChange(day)}
                >
                  {/* Placeholder for the checkbox when not checked */}
                  <span className="text-gray-300 text-xs"> </span>
                </div>
              )}
            </div>
            <span className="capitalize">{day}</span>
          </label>
        ))}
      </div>

      {/*Button  */}
      <div className="flex justify-start mt-8">
        <button className="relative inline-block  py-[2px] px-[2px] font-semibold text-white rounded-2xl transition-all duration-300 ease-in-out hover:text-[#f65d5d] hover:bg-transparent">
          {/* Gradient Border */}
          <span className="absolute inset-0 bg-[linear-gradient(145deg,#fdb07d_0%,#f65d5d_100%)] rounded-3xl p-[3px] opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>

          {/* Inner Transparent Button */}
          <span className="relative z-10 block bg-transparent rounded-3xl px-6 py-2 hover:bg-white">
            Filter Now
          </span>
        </button>
      </div>
      <div>
        <h2 className="uppercase text-2xl text-[#333333] mt-5">
          Popular Classes
        </h2>

        <div className="mt-8">
          <Slider {...sliderSettings} className="mt-4 w-60">
            <div>
              <PopularClassesCard image={event1} />
            </div>
            <div>
              <PopularClassesCard image={event2} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SearchClasses;
