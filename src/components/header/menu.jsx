import React from "react";
import menuLogo from "../../image/pages/home/icons/logo-2.webp";
import send from "../../image/pages/home/icons/send.png";
import person1 from "../../image/pages/home/infor/1.jpg";
import person2 from "../../image/pages/home/infor/2.jpg";
import person3 from "../../image/pages/home/infor/3.jpg";
import person4 from "../../image/pages/home/infor/4.jpg";
import person5 from "../../image/pages/home/infor/5.jpg";
import person6 from "../../image/pages/home/infor/6.jpg";
const menu = () => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-1/3 h-full bg-white relative">
        <div className="h-full flex flex-col items-center p-4">
          <span
            className="icon-close absolute top-4 right-4 cursor-pointer text-[#C2C2C2] text-2xl"
            onClick={toggleMenu}
          ></span>

          <img src={menuLogo} alt="menuLogo" />
          <p className="mx-2 mt-10 items-center text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div>
            <div className="flex space-x-4 mt-10">
              <div className="relative w-24 rounded-lg group">
                <img
                  src={person1}
                  alt="person1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d]   rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="icon-instagram text-white"></span>
                  <span className="text-white text-lg">ahana.yoga</span>
                </div>
              </div>
              <div className="relative w-24 rounded-lg group">
                <img
                  src={person2}
                  alt="person2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="icon-instagram text-white"></span>
                  <span className="text-white text-lg">ahana.yoga</span>
                </div>
              </div>
              <div className="relative w-24 rounded-lg group">
                <img
                  src={person3}
                  alt="person3"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="icon-instagram text-white"></span>
                  <span className="text-white text-lg">ahana.yoga</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-3">
              <div className="relative w-24 rounded-lg group">
                <img
                  src={person4}
                  alt="person4"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="icon-instagram text-white"></span>
                  <span className="text-white text-lg">ahana.yoga</span>
                </div>
              </div>
              <div className="relative w-24 rounded-lg group">
                <img
                  src={person5}
                  alt="person5"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="icon-instagram text-white"></span>
                  <span className="text-white text-lg">ahana.yoga</span>
                </div>
              </div>
              <div className="relative w-24 rounded-lg group">
                <img
                  src={person6}
                  alt="person6"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="icon-instagram text-white"></span>
                  <span className="text-white text-lg">ahana.yoga</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-20">
            <input
              type="text"
              className="w-full placeholder-[#898989] text-black py-2 px-3 text-lg bg-[#FAFAFA] border-2 rounded-3xl border-[#e6e6e6] focus:outline-none"
              placeholder="Your Email"
            />
            <img
              className="absolute top-0 right-0 cursor-pointer rounded-full p-4"
              style={{
                background: "linear-gradient(145deg, #fdb07d 0%, #f65d5d 100%)",
              }}
              src={send}
              alt="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
