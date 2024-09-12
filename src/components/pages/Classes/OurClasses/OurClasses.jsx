import React from 'react'
import "../../../../image/icomoon/style.css";
import Topbar from "../../../header/topbar.jsx";
import Navbar from '../../../header/navbar';
import Navbarmenu from "../../../header/navbarmenu.jsx";
import Heading from "../../../pages/About/heading/Heading.jsx";
import Classes from './Classes.jsx';
import Image from "../../Home/ImageCoursel/image.jsx";
import Footer from "../../../footer/footer.jsx";

const OurClasses = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Navbarmenu/>
        <Heading
        title={"Our classes"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <Classes/>
      <Image/>
      <Footer/>
        
      
    </div>
  )
}

export default OurClasses
