import React from "react";
import logo from "../../image/navbar/logo-3.png.webp";
import send from "../../image/pages/home/icons/send.png";

const Footer = () => {
  return (
    <div className="bg-white py-5 px-4">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Logo and Contact Info */}
        <div className="text-[#666666] space-y-4 w-full lg:w-72">
          <img src={logo} alt="logo" className="mb-4" />
          <p className="pb-3">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit sed.
          </p>
          <div className="flex flex-col space-y-2">
            <span className="flex items-center text-lg text-[#F65D5D]">
              <i className="icon-phone mr-2"></i>
              <p className="text-[#666666]">(965) 436 3274</p>
            </span>
            <span className="flex items-center text-lg text-[#F65D5D]">
              <i className="icon-mail mr-2"></i>
              <p className="text-[#666666]">ahana.yoga@gmail.com</p>
            </span>
            <span className="flex items-center text-lg text-[#F65D5D]">
              <i className="icon-map mr-2"></i>
              <p className="text-[#666666]">184 Main Collins Street</p>
            </span>
          </div>
        </div>
        
        {/* Company Links */}
        <div className="text-[#666666] space-y-4 w-full lg:w-60">
          <h3 className="text-2xl ">COMPANY</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-[#F75D5D]">Online Education</li>
            <li className="cursor-pointer hover:text-[#F75D5D]">Gallery</li>
            <li className="cursor-pointer hover:text-[#F75D5D]">Special Issues</li>
            <li className="cursor-pointer hover:text-[#F75D5D]">Privacy Policy</li>
            <li className="cursor-pointer hover:text-[#F75D5D]">Contact Us</li>
          </ul>
        </div>

        {/* About Us Links */}
        <div className="text-[#666666] space-y-4 w-full lg:w-60">
          <h3 className="text-2xl ">ABOUT US</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-[#F75D5D]">Our Vision</li>
            <li className="cursor-pointer hover:text-[#F75D5D]">Our Mission</li>
            <li className="cursor-pointer hover:text-[#F75D5D]">Meet the Team</li>
            <li className="cursor-pointer hover:text-[#F75D5D]">Introduce</li>
            <li className="cursor-pointer hover:text-[#F75D5D]">Customer Service</li>
          </ul>
        </div>

        {/* Open Time and Newsletter */}
        <div className="text-[#666666] space-y-4 w-full lg:w-72">
          <h3 className="text-2xl ">OPEN TIME</h3>
          <div className="flex flex-col space-y-2">
            <span className="flex items-center text-lg text-[#F75D5D]">
              <i className="icon-alarm mr-2"></i>
              <p className="text-[#666666]">Mon - Fri: 6:30am - 07:45pm</p>
            </span>
            <span className="flex items-center text-lg text-[#F75D5D]">
              <i className="icon-alarm mr-2"></i>
              <p className="text-[#666666]">Sat - Sun: 8:30am - 05:45pm</p>
            </span>
          </div>
          <div className="relative pt-4">
            <input
              type="text"
              className="w-full placeholder-[#898989] text-black py-2 px-3 text-lg bg-[#FAFAFA] border-2 rounded-3xl border-[#e6e6e6] focus:outline-none"
              placeholder="Your Email"
            />
            <img
              className="absolute top-4  right-0 cursor-pointer rounded-full p-4"
              style={{
                background: "linear-gradient(145deg, #fdb07d 0%, #f65d5d 100%)",
              }}
              src={send}
              alt="Send"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mt-10 flex flex-col lg:flex-row justify-center items-center pt-5 border-t-2 border-[#666666] border-opacity-15 text-[#666666] space-y-4 lg:space-y-0 lg:space-x-96">
        <div className="flex space-x-4">
          <span className="icon-facebook text-2xl"></span>
          <span className="icon-instagram text-2xl"></span>
          <span className="icon-twitter text-2xl"></span>
          <span className="icon-linkedin2 text-2xl"></span>
        </div>
        <div className="text-center">
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span className="icon-heart-outlined text-[#f65d5d]"></span> by Colorlib
        </div>
      </div>
    </div>
  );
};

export default Footer;
