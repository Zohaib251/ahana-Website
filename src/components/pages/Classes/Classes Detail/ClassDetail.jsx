import React from "react";
import "../../../../image/icomoon/style.css";
import Topbar from "../../../header/topbar.jsx";
import Navbar from "../../../header/navbar";
import Navbarmenu from "../../../header/navbarmenu.jsx";
import Heading from "../../../pages/About/heading/Heading.jsx";
import YogaTherapy from "./YogaTherapy.jsx";
import Image from "../../Home/ImageCoursel/image.jsx";
import Footer from "../../../footer/footer.jsx";
const ClassDetail = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"Our classes"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <YogaTherapy />
      <Image />
      <Footer />
    </div>
  );
};

export default ClassDetail;
