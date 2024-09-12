import React, { useState, useEffect, useRef } from "react";
import "../../image/icomoon/style.css";
import upArrow from "../../image/pages/home/icons/up-arrow.png";

const Topbar = () => {
  const [selected, setSelected] = useState("EN");
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const options = ["EN", "ES", "JA", "AR"];
  const dropdownRef = useRef(null);

  //! scrollToTop

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //! Select Language
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="bg-white  p-3 flex justify-end lg:justify-center text-left lg:text-center space-x-10 lg:space-x-96">
      {/* Hidden on small screens */}
      <div className="hidden md:flex space-x-2 lg:space-x-10">
        <div className="text-lg text-[#333333]">
          <span className="icon-map text-[#F65D5D] mr-2"></span>
          184 Main Collins Street
        </div>
        <div className="text-lg text-[#333333]">
          <span className="icon-phone text-[#F65D5D] mr-2"></span>
          (965) 436 3274
        </div>
      </div>

      <div className="flex space-x-2 lg:space-x-10 items-center">
        {/* Hidden on small screens */}
        <div className="hidden md:block text-lg text-[#333333]">
          <span className="icon-alarm text-[#F65D5D] mr-2"></span>
          Mon - Fri: 6:30am - 07:45pm
        </div>

        {/* Language selector - Always visible */}
        <div
          className="relative flex items-center"
          ref={dropdownRef}
          style={{ minWidth: "fit-content" }}
        >
          <span className="icon-network text-[#F65D5D]"></span>
          <div
            onClick={() => setOpen(!open)}
            onKeyPress={(e) => e.key === "Enter" && setOpen(!open)}
            tabIndex={0}
            className="bg-white px-2 text-black cursor-pointer flex items-center"
          >
            <span className="text-[#2F3337] font-semibold">{selected}</span>
            <span
              className={`ml-1 text-sm text-[#999999] ${
                open ? "icon-cheveron-up" : "icon-cheveron-down"
              }`}
            ></span>
          </div>

          {open && (
            <div className="absolute bg-white z-50 right-0 mt-56 border rounded-md ">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className={`p-3 cursor-pointer hover:bg-[#F6F6F6] ${
                    selected === option ? "text-[#2F3337]" : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          {isVisible && (
            <div className="fixed bottom-20 right-30 flex items-center justify-start z-50">
              <div
                className=" px-4 py-3 rounded-full cursor-pointer"
                onClick={scrollToTop}
                style={{
                  background:
                    "linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)",
                }}
              >
                <img src={upArrow} alt="" className="text-2xl" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
