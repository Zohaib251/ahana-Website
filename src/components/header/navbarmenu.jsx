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

const NavbarMenu = () => {
  const [isSearchOpens, setSearchOpens] = useState(false);
  const [isMenuOpens, setMenuOpens] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSearch = () => setSearchOpens(!isSearchOpens);
  const toggleBarMenu = () => setMenuOpens(!isMenuOpens);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div className="bg-[#4C4C4C] p-7   ">
      <div className="flex flex-col-reverse md:block">
        {/*Menu Navbar  */}
        <div
          className="menu-toggle ml-32  md:ml-3 lg:ml-0 flex justify-end  items-center float-right px-3 py-1 mt-0 md:mt-1 lg:mt-[-14px] font-semibold cursor-pointer w-24 bg-[#222222] "
          onClick={toggleMenu}
        >
          <p className="text-white pr-2 ">MENU</p>
          <div>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>

        <div className="flex flex-row justify-between lg:hidden ">
          {/*Logo for Small and Tablet Device  */}
          <div className="">
            <img src={logo} alt="Logo" className="w-36 pb-2 md:pb-0  h-auto" />
          </div>
          {/*Search Menu and Menu Bar for Small Device and Tablet  */}
          <div className="flex items-center">
            <span
              className="icon-search text-white cursor-pointer text-xl sm:text-2xl"
              onClick={toggleSearch}
            ></span>
            <div className="menu-toggle ml-4" onClick={toggleBarMenu}>
              <span className="block w-5 h-0.5 bg-white mb-1 sm:w-6 sm:h-0.5"></span>
              <span className="block w-5 h-0.5 bg-white mb-1 sm:w-6 sm:h-0.5"></span>
              <span className="block w-5 h-0.5 bg-white sm:w-6 sm:h-0.5"></span>
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
                className={`w-full sm:w-2/3 transition-transform duration-300 ${
                  isSearchOpens ? "scale-100" : "scale-95"
                } relative p-4 sm:p-0`}
              >
                <div className="relative">
                  <input
                    type="text"
                    className="w-full placeholder-white text-white py-2 text-base sm:py-3 sm:text-xl bg-transparent border-b-2 border-white focus:outline-none"
                    placeholder="Search"
                  />
                  <img
                    className="absolute top-3 md:top-5 right-2 cursor-pointer w-4 h-4 md:w-auto md:h-auto"
                    src={search}
                    alt="Search"
                  />
                </div>
                <span
                  className="icon-close absolute top-[-160px] sm:top-[-200px] right-[10px] md:right-[-10px] lg:right-[-80px] cursor-pointer text-white text-xl sm:text-2xl z-60"
                  onClick={toggleSearch}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar For Small and Tablet  */}
      <div className={`${isMenuOpen ? "block" : "hidden"} bg-customGray`}>
        <ul className="flex flex-col space-y-2 p-4">
          <li className="relative  pl-2">
            <a
              className="block text-white cursor-pointer hover:bg-[#CCCCCC] rounded-md font-semibold py-1"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="relative  pl-2">
            <a
              className="block text-white cursor-pointer hover:bg-[#CCCCCC] rounded-md font-semibold py-1"
              href="/About"
            >
              About
            </a>
          </li>
          <li className="relative  pl-2">
            <a
              className="block text-white cursor-pointer hover:bg-[#CCCCCC] rounded-md font-semibold py-1"
              onClick={() => toggleSubMenu("classes")}
            >
              Classes
              <span className="icon-arrow_forward_ios text-xs ml-1"></span>
            </a>
            <ul
              className={`${
                openSubMenu === "classes" ? "block" : "hidden"
              }  mt-1`}
            >
              <li>
                <a
                  className="block text-white hover:bg-[#CCCCCC] rounded-md px-4 py-1"
                  href="/OurClasses"
                >
                  Our Classes
                </a>
              </li>
              <li>
                <a
                  className="block text-white hover:bg-[#CCCCCC] rounded-md px-4 py-1"
                  href="/ClassesDetail"
                >
                  Classes Detail
                </a>
              </li>
            </ul>
          </li>
          <li className="relative  pl-2">
            <a
              className="block text-white hover:bg-[#CCCCCC] rounded-md cursor-pointer font-semibold py-1"
              onClick={() => toggleSubMenu("trainers")}
            >
              Trainers
              <span className="icon-arrow_forward_ios text-xs ml-1"></span>
            </a>
            <ul
              className={`${
                openSubMenu === "trainers" ? "block" : "hidden"
              }  mt-1`}
            >
              <li>
                <a
                  className="block px-4 text-white hover:bg-[#CCCCCC] rounded-md py-1"
                  href="/OurTrainers"
                >
                  Our Trainers
                </a>
              </li>
              <li>
                <a
                  className="block px-4 text-white hover:bg-[#CCCCCC] rounded-md py-1"
                  href="/TrainersDetail"
                >
                  Trainers Detail
                </a>
              </li>
            </ul>
          </li>
          <li className="relative  pl-2">
            <a
              className="block text-white cursor-pointer hover:bg-[#CCCCCC] rounded-md font-semibold py-1"
              onClick={() => toggleSubMenu("events")}
            >
              Events
              <span className="icon-arrow_forward_ios text-xs ml-1"></span>
            </a>
            <ul
              className={`${
                openSubMenu === "events" ? "block" : "hidden"
              } mt-1`}
            >
              <li>
                <a
                  className="block px-4 text-white hover:bg-[#CCCCCC] rounded-md py-1"
                  href="/OurEvents"
                >
                  Our Events
                </a>
              </li>
              <li>
                <a
                  className="block px-4 text-white hover:bg-[#CCCCCC] rounded-md py-1"
                  href="/EventsDetail"
                >
                  Events Detail
                </a>
              </li>
            </ul>
          </li>
          <li className="relative  pl-2">
            <a
              className="block text-white py-1 hover:bg-[#CCCCCC] rounded-md cursor-pointer font-semibold"
              onClick={() => toggleSubMenu("blog")}
            >
              Blog
              <span className="icon-arrow_forward_ios text-xs ml-1"></span>
            </a>
            <ul
              className={`${openSubMenu === "blog" ? "block" : "hidden"} mt-1`}
            >
              <li>
                <a
                  className="block px-4 text-white hover:bg-[#CCCCCC] rounded-md py-2"
                  href="/OurBlog"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  className="block text-white px-4 hover:bg-[#CCCCCC] rounded-md py-2"
                  href="/BlogDetails"
                >
                  Blog Details
                </a>
              </li>
            </ul>
          </li>
          <li className="hover:bg-[#CCCCCC] rounded-md pl-2">
            <a
              className="block text-white hover:text-customYellow cursor-pointer font-bold py-1"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/*Menu Bar  */}
      {isMenuOpens && (
        <div
          className={`fixed inset-0 z-50 flex justify-end transition-transform duration-300 ${
            isMenuOpens ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full md:w-1/2 lg:w-1/3 h-full bg-white relative overflow-hidden">
            <div className="h-full flex flex-col items-center p-2 sm:p-4">
              <span
                className="absolute top-4 right-4 cursor-pointer text-[#C2C2C2] text-xl sm:text-2xl"
                onClick={toggleBarMenu}
              >
                &times; {/* Close icon */}
              </span>

              <img
                src={menuLogo}
                alt="menuLogo"
                className="mt-6 mb-4 w-32 lg:w-36 "
              />
              <p className="mx-2 text-center text-gray-700 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-8 justify-center">
                {[person1, person2, person3, person4, person5, person6].map(
                  (person, index) => (
                    <div
                      key={index}
                      className="relative w-20 sm:w-24 rounded-lg group"
                    >
                      <img
                        src={person}
                        alt={`person${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#f65d5d] to-[#fdb07d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <span className="icon-instagram text-white text-lg sm:text-2xl"></span>
                        <span className="text-white text-sm sm:text-lg mt-2">
                          ahana.yoga
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="relative mt-6 sm:mt-8 w-full px-4 sm:w-3/4">
                <input
                  type="text"
                  className="w-full placeholder-[#898989] text-black py-2 px-3 text-sm sm:text-lg bg-[#FAFAFA] border-2 rounded-3xl border-[#e6e6e6] focus:outline-none"
                  placeholder="Your Email"
                />
                <img
                  className="absolute top-1 right-4  cursor-pointer rounded-full p-2 sm:p-3"
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
  );
};

export default NavbarMenu;
