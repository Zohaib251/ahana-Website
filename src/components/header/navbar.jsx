import React, { useState } from "react";
import logo from "../../image/navbar/logo.webp";
import search from "../../image/pages/home/icons/search-2.png";
import menuLogo from "../../image/pages/home/icons/logo-2.webp";
import send from "../../image/pages/home/icons/send.png";
import person1 from "../../image/pages/home/infor/1.jpg";
import person2 from "../../image/pages/home/infor/2.jpg";
import person3 from "../../image/pages/home/infor/3.jpg";
import person4 from "../../image/pages/home/infor/4.jpg";
import person5 from "../../image/pages/home/infor/5.jpg";
import person6 from "../../image/pages/home/infor/6.jpg";
const Navbar = () => {
  const [isSearchOpens, setSearchOpens] = useState(false);
  const [isMenuOpens, setMenuOpens] = useState(false);

  const toggleSearch = () => setSearchOpens(!isSearchOpens);
  const toggleBarMenu = () => setMenuOpens(!isMenuOpens);

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #F6605E 10%, #FA866D 100%)",
      }}
      className="hidden lg:block"
    >
      <div className="h-13 flex justify-center  space-x-11 items-end px-16 py-3">
        <div>
          <a className="block cursor-pointer" href="/">
            <img src={logo} alt="" className="text-white" />
          </a>
        </div>
        <div className="flex items-end space-x-4">
          <div className="flex items-start">
            <ul className="flex space-x-10 uppercase ">
              <li className="relative group">
                <a
                  className="block text-white cursor-pointer font-semibold"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <a
                  className="block  text-white cursor-pointer font-semibold"
                  href="/About"
                >
                  About
                </a>
              </li>
              <li className="relative group">
                <a
                  className="block   text-white cursor-pointer font-semibold"
                  href="/OurClasses"
                >
                  Classes
                </a>
                <ul className="absolute w-40 left-0 hidden group-hover:block bg-white shadow-lg ">
                  <li>
                    <a className="block px-4 py-2 " href="/OurClasses">
                      Our Classes
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 " href="/ClassesDetail">
                      Classes Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  className="block  text-white cursor-pointer font-semibold"
                  href="/OurTrainers"
                >
                  Trainers
                </a>
                <ul className="absolute w-40 left-0 hidden group-hover:block bg-white shadow-lg">
                  <li>
                    <a className="block px-4 py-2 " href="/OurTrainers">
                      Our Trainers
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 " href="/TrainersDetail">
                      Trainers Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  className="block  text-white cursor-pointer font-semibold"
                  href="/OurEvents"
                >
                  Events
                </a>
                <ul className="absolute w-36 left-0 hidden group-hover:block bg-white shadow-lg ">
                  <li>
                    <a className="block px-4 py-2 " href="/OurEvents">
                      Our Events
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 " href="/EventsDetail">
                      Events Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a
                  className="block   text-white cursor-pointer font-semibold"
                  href="OurBlog"
                >
                  Blog
                </a>
                <ul className="absolute w-36 left-0 hidden group-hover:block bg-white shadow-lg">
                  <li>
                    <a className="block px-4 py-2 " href="/OurBlog">
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 " href="/BlogDetails">
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="block  text-white cursor-pointer font-semibold"
                  href="/Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex ">
          <span
            className="icon-search text-white cursor-pointer"
            onClick={toggleSearch}
          ></span>
          <div className="menu-toggle ml-4 " onClick={toggleBarMenu}>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>

          <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
              isSearchOpens ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{
              background: `linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)`,
            }}
          >
            <div
              className={`w-2/3 transition-transform duration-300 ${
                isSearchOpens ? "scale-100" : "scale-95"
              } relative`}
            >
              <div className="relative">
                <input
                  type="text"
                  className="w-full placeholder-white text-white py-3 text-xl bg-transparent border-b-2 border-white focus:outline-none"
                  placeholder="Search"
                />
                <img
                  className="absolute top-5 right-1 cursor-pointer"
                  src={search}
                  alt="Search"
                />
              </div>
              <span
                className="icon-close absolute top-[-200px] right-[-80px] cursor-pointer text-white text-2xl z-60"
                onClick={toggleSearch}
              ></span>
            </div>
          </div>
          {isMenuOpens && (
            <div
              className={`fixed inset-0 z-50 flex justify-end transition-transform duration-300 ${
                isMenuOpens ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="w-1/3 h-full bg-white relative overflow-hidden">
                <div className="h-full flex flex-col items-center p-4">
                  <span
                    className="absolute top-4 right-4 cursor-pointer text-[#C2C2C2] text-2xl"
                    onClick={toggleBarMenu}
                  >
                    &times; {/* Close icon */}
                  </span>

                  <img src={menuLogo} alt="menuLogo" className="mt-6 mb-4" />
                  <p className="mx-2 text-center text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8 justify-center">
                    {[person1, person2, person3, person4, person5, person6].map(
                      (person, index) => (
                        <div
                          key={index}
                          className="relative w-24 rounded-lg group"
                        >
                          <img
                            src={person}
                            alt={`person${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#f65d5d] to-[#fdb07d]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                            <span className="icon-instagram text-white text-2xl"></span>
                            <span className="text-white text-lg mt-2">
                              ahana.yoga
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="relative mt-8 w-3/4">
                    <input
                      type="text"
                      className="w-full placeholder-[#898989] text-black py-2 px-3 text-lg bg-[#FAFAFA] border-2 rounded-3xl border-[#e6e6e6] focus:outline-none"
                      placeholder="Your Email"
                    />
                    <img
                      className="absolute top-1 right-0 cursor-pointer rounded-full p-3"
                      style={{
                        background:
                          "linear-gradient(145deg, #fdb07d 0%, #f65d5d 100%)",
                      }}
                      src={send}
                      alt="Send"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
