import React from "react";
import "../../../../image/icomoon/style.css";
import Topbar from "../../../header/topbar.jsx";
import Navbar from "../../../header/navbar";
import Navbarmenu from "../../../header/navbarmenu.jsx";
import Heading from "../../../pages/About/heading/Heading.jsx";
import image1 from "../../../../image/pages/home/classesCard/1.jpg.webp";
import Image from "../../Home/ImageCoursel/image.jsx";
import Footer from "../../../footer/footer.jsx";
const TrainersDetail = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"Trainers details"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <div className="flex flex-col py-10 my-20 justify-center text-center items-center shadow-xl mx-4 sm:mx-10">
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0 items-center">
          {/* Image and Social Icons Section */}
          <div className="max-w-xs md:max-w-screen-sm">
            <img
              src={image1}
              alt="image1"
              className="rounded-full w-28 md:w-40 mx-auto"
            />
            <div className="flex justify-center items-center mt-3 space-x-4">
              <span className="icon-facebook hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-2 rounded-full"></span>
              <span className="icon-instagram hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-2 rounded-full"></span>
              <span className="icon-twitter hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-2 rounded-full"></span>
              <span className="icon-linkedin2 hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-2 rounded-full"></span>
            </div>
          </div>

          {/* Trainer Details Section */}
          <div className="flex flex-col max-w-screen-sm text-left">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl sm:text-3xl text-[#333333] font-medium">
                Olivia Richards
              </h2>
              <button className="relative inline-block py-[2px] px-[2px] font-semibold text-white rounded-2xl transition-all duration-300 ease-in-out hover:text-[#f65d5d] hover:bg-transparent">
                <span className="absolute inset-0 bg-[linear-gradient(145deg,#fdb07d_0%,#f65d5d_100%)] rounded-3xl p-[3px] opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>
                <span className="relative md:text-base text-xs  z-10 block bg-transparent rounded-3xl px-6 py-2 hover:bg-white">
                  VIEW CLASSES
                </span>
              </button>
            </div>
            <h5 className="text-left text-[#F65D5D] text-lg">Yoga Trainer</h5>
            <div className="flex mt-3 text-[#666666]">
              <span className="text-[#333333] font-semibold mr-2">
                Experience:
              </span>
              8 Years
            </div>
            <div className="flex mt-3 text-[#666666]">
              <span className="text-[#333333] font-semibold mr-10">Email:</span>
              emily-walker@example.com
            </div>
            <div className="flex mt-3 text-left text-[#666666]">
              <span className="text-[#333333] font-semibold mr-2">
                Biography:
              </span>
              Certification from the National Institute of Sports Medicine
              (NASM) USA. 25 years of sports training in the United States,
              Germany, Hong Kong, Malaysia, Singapore, and now Vietnam at
              California Fitness & Yoga Centers.
            </div>
          </div>
        </div>

        {/* About Yoga Section */}
        <div className="flex flex-col max-w-screen-sm sm:max-w-screen-md my-5 space-y-4 text-left justify-start items-start">
          <h2 className="text-xl sm:text-2xl text-[#333333]">About Yoga</h2>
          <p className="text-[#666666]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <div className="flex flex-col space-y-3">
            <span className="text-[#666666]">
              <span className="icon-check text-white bg-[#F65D5D] rounded-full p-1 text-xs"></span>{" "}
              Gold Medal for International Yoga Championship 2012.
            </span>
            <span className="text-[#666666]">
              <span className="icon-check text-white bg-[#F65D5D] rounded-full p-1 text-xs"></span>{" "}
              Silver Medal of All High Schools Championship and Indian Yoga Club
              in 2010.
            </span>
            <span className="text-[#666666]">
              <span className="icon-check text-white bg-[#F65D5D] rounded-full p-1 text-xs"></span>{" "}
              Gold Medal for Jharkhand State Yoga Championship in 2007.
            </span>
            <span className="text-[#666666]">
              <span className="icon-check text-white bg-[#F65D5D] rounded-full p-1 text-xs"></span>{" "}
              Gold Medal for East India Yoga Championship in 2005.
            </span>
          </div>
        </div>
      </div>

      <Image />
      <Footer />
    </div>
  );
};

export default TrainersDetail;
