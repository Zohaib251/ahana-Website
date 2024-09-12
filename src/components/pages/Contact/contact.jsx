import React from "react";
import Topbar from "../../header/topbar.jsx";
import Navbar from "../../header/navbar.jsx";
import Navbarmenu from "../../header/navbarmenu.jsx";
import Heading from "../About/heading/Heading.jsx";
import GoogleMap from "../Home/SignUp/googleMap.jsx";
import SignUpForm from "../Home/SignUp/signUpForm.jsx";
import Image from "../Home/ImageCoursel/image.jsx";
import Footer from "../../footer/footer.jsx";
const contact = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"Contact"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <div className="flex flex-col justify-center items-center mx-auto w-full lg:w-3/4">
        {/* Google Map Section */}
        <div className="mt-20 w-full">
          <GoogleMap />
        </div>

        {/* Information and Form Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full">
          {/* Info Section */}
          <div className="flex w-full flex-col mt-10 pl-10 lg:ml-0 space-y-4">
            <div className="">
              <h3 className="text-xl mb-2 uppercase text-[#333333]">
                Visit the Yoga Ahana
              </h3>
              <p className="text-[#666666]">
                <span className="icon-map text-[#F65D5D]"></span> 184 Main
                Collins Street
              </p>
            </div>

            <div className="">
              <h3 className="text-xl mb-2 uppercase text-[#333333]">
                Message Us
              </h3>
              <p className="text-[#666666]">
                <span className="icon-map text-[#F65D5D]"></span> (965) 436 3274
              </p>
              <p className="text-[#666666]">
                <span className="icon-map text-[#F65D5D]"></span>{" "}
                ahana.yoga@gmail.com
              </p>
            </div>

            <div className="">
              <h3 className="text-xl mb-2 uppercase text-[#333333]">
                Opening Hours
              </h3>
              <p className="text-[#666666]">
                <span className="icon-map text-[#F65D5D]"></span> Mon - Fri:
                6:30am - 07:45pm
              </p>
              <p className="text-[#666666]">
                <span className="icon-map text-[#F65D5D]"></span> Sat - Sun:
                8:30am - 05:45pm
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex mt-3 space-x-4">
              <span className="icon-facebook hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-3 rounded-full"></span>
              <span className="icon-instagram hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-3 rounded-full"></span>
              <span className="icon-twitter hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-3 rounded-full"></span>
              <span className="icon-linkedin2 hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-3 rounded-full"></span>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="w-full">
            <SignUpForm />
          </div>
        </div>
      </div>

      <Image />
      <Footer />
    </div>
  );
};

export default contact;
