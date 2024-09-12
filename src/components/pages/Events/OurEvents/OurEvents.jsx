import React from "react";
import Topbar from "../../../header/topbar.jsx";
import Navbar from "../../../header/navbar";
import Navbarmenu from "../../../header/navbarmenu.jsx";
import Heading from "../../../pages/About/heading/Heading.jsx";
import EventsCard from "../../Home/Events/eventsCard.jsx";
import events1 from "../../../../image/pages/home/events/1.jpg";
import events2 from "../../../../image/pages/home/events/2.jpg";
import events3 from "../../../../image/pages/home/events/3.jpg";
import events4 from "../../../../image/pages/home/events/4.jpg";
import events5 from "../../../../image/pages/home/events/5.jpg";
import events6 from "../../../../image/pages/home/events/6.jpg";
import events7 from "../../../../image/pages/home/events/7.jpg";
import events8 from "../../../../image/pages/home/events/8.jpg";
import Image from "../../Home/ImageCoursel/image.jsx";
import Footer from "../../../footer/footer.jsx";
const OurEvents = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"All Events"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <div className="flex flex-col lg:flex-row justify-center items-center mx-4 md:mx-10 mt-[-40px] z-50 text-[#666666] bg-white shadow-xl p-6 space-y-4 lg:space-y-0 lg:space-x-3">
        <p className="text-center lg:text-left">
          Showing 8 classes of 30 classes
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0">
          <input
            type="date"
            className="w-full md:w-60 border-2 border-[#e6e6e6] rounded-3xl bg-[#FAFAFA] text-[#999999] px-4 py-2 focus:outline-none"
            placeholder="Event Date"
          />
          <input
            type="search"
            className="w-full md:w-60 border-2 border-[#e6e6e6] rounded-3xl bg-[#FAFAFA] text-[#999999] px-4 py-2 focus:outline-none"
            placeholder="Search"
          />
          <input
            type="search"
            className="w-full md:w-60 border-2 border-[#e6e6e6] rounded-3xl bg-[#FAFAFA] text-[#999999] px-4 py-2 focus:outline-none"
            placeholder="Location"
          />
        </div>

        <div className="flex justify-center lg:justify-start">
          <button className="relative inline-block py-[2px] px-[2px] font-semibold text-white rounded-2xl transition-all duration-300 ease-in-out hover:text-[#f65d5d] hover:bg-transparent">
            {/* Gradient Border */}
            <span className="absolute inset-0 bg-[linear-gradient(145deg,#fdb07d_0%,#f65d5d_100%)] rounded-3xl p-[3px] opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>

            {/* Inner Transparent Button */}
            <span className="relative z-10 block bg-transparent rounded-3xl px-6 py-2 hover:bg-white">
              Filter Now
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <EventsCard events={events1} name="Lole White Yoga Tour" />
        <EventsCard events={events2} name="Free Yoga Madrid" />
        <EventsCard events={events3} name="One Love Dallas" />
        <EventsCard events={events4} name="Get on Your Mat" />
        <EventsCard events={events5} name="Solstice in Times Square" />
        <EventsCard events={events6} name="Athleta Mind Over" />
        <EventsCard events={events7} name="Mega-Yoga Classes" />
        <EventsCard events={events8} name="Yoga Festivals" />
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

export default OurEvents;
