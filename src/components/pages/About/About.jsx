import React from "react";
import "../../../image/icomoon/style.css";
import Topbar from "../../../components/header/topbar.jsx";
import Navbar from "../../../components/header/navbar.jsx";
import Navbarmenu from "../../../components/header/navbarmenu.jsx";
import Heading from "./heading/Heading.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import OurWork from "./Work/OurWork.jsx";
import Trainers from "../Home/Trainers/trainers.jsx";
import Review from "../Home/Review/review.jsx";
import Course from "./courseBenefits/course.jsx";
import Image from "../Home/ImageCoursel/image.jsx";
import Footer from "../../footer/footer.jsx";
const About = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"about"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <AboutUs/>
      <OurWork/>
      <Trainers />
      <Review/>
      <Course/>
      <Image />
      <Footer />
    </div>
  );
};

export default About;
