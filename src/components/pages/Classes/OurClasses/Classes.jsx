
import React, { useState } from "react";
import SearchClasses from "./SearchClasses.jsx";
import ClassesCard from "../../Home/Classes/classesCard.jsx";
import image1 from "../../../../image/pages/home/classesCard/1.jpg.webp";
import image2 from "../../../../image/pages/home/classesCard/2.jpg.webp";
import image3 from "../../../../image/pages/home/classesCard/3.jpg.webp";
import author1 from "../../../../image/pages/home/classesCard/author/1.jpg.webp";
import author2 from "../../../../image/pages/home/classesCard/author/2.jpg";
import author3 from "../../../../image/pages/home/classesCard/author/3.jpg.webp";

const Classes = () => {
  const [sortOption, setSortOption] = useState("Default Sorting");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 lg:py-0 lg:items-start  lg:flex-row lg:space-x-10 my-10">
      <div className="w-full lg:w-auto">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-40">
          <p>Showing 8 classes of 30 classes</p>
          <div className="relative inline-block w-64 mt-4 md:mt-0">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="block w-full px-4 py-2 text-[#999999] bg-[#fafafa] border border-[#e6e6e6] rounded-3xl focus:outline-none "
            >
              <option value="Default Sorting">Default Sorting</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
        </div>
        <div className="flex justify-center gap-3 mt-6">
          <ul className="flex space-x-2">
            {/* First li with linear gradient applied by default */}
            <li
              className="rounded-full px-4 py-2 text-white"
              style={{
                background: "linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)",
              }}
            >
              1
            </li>

            {/* Second li with border removed on hover */}
            <li
              className="border-gray-300 hover:text-white border-2 rounded-full px-3 py-1 cursor-pointer"
              style={{
                transition: "background 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background =
                  "linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)";
                e.target.style.borderColor = "transparent"; // Remove the border on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "";
                e.target.style.borderColor = "#d1d5db"; // Restore the border color on leave (gray-300)
              }}
            >
              2
            </li>

            <li
              className="border-gray-300 hover:text-white border-2 rounded-full px-3 py-1 cursor-pointer flex items-center justify-center"
              style={{
                transition: "background 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background =
                  "linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)";
                e.target.style.borderColor = "transparent"; // Make the border transparent on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.background = ""; // Remove background on leave
                e.target.style.borderColor = "#d1d5db"; // Restore the border color (gray-300)
              }}
            >
              <span className="icon-arrow_forward_ios text-xs"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
        <SearchClasses />
      </div>
    </div>
  );
};

export default Classes;
