import React from "react";
import "../../../../image/icomoon/style.css";
import Topbar from "../../../header/topbar.jsx";
import Navbar from "../../../header/navbar";
import Navbarmenu from "../../../header/navbarmenu.jsx";
import Heading from "../../../pages/About/heading/Heading.jsx";
import TrainersCard from "../../Home/Trainers/trainersCard";
import trainer1 from "../../../../image/pages/home/trainer/1.png.webp";
import trainer2 from "../../../../image/pages/home/trainer/2.png.webp";
import trainer3 from "../../../../image/pages/home/trainer/3.png.webp";
import trainer4 from "../../../../image/pages/home/trainer/4.png";
import trainer5 from "../../../../image/pages/home/trainer/5.png";
import trainer6 from "../../../../image/pages/home/trainer/6.png";
import Image from "../../Home/ImageCoursel/image.jsx";
import Footer from "../../../footer/footer.jsx";
const OurTrainers = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"Our Trainers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <div className="flex justify-center my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center max-w-screen-xl">
          <TrainersCard image={trainer1} name="Lori Kennedy" />
          <TrainersCard image={trainer2} name="Lori Kennedy" />
          <TrainersCard image={trainer3} name="Rebecca James" />
          <TrainersCard image={trainer4} name="Cynthia McCoy" />
          <TrainersCard image={trainer5} name="Olivia Richards" />
          <TrainersCard image={trainer6} name="Emily Walker" />
        </div>
      </div>
      <div className="flex justify-center gap-3 my-20">
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

      <Image />
      <Footer />
    </div>
  );
};

export default OurTrainers;
