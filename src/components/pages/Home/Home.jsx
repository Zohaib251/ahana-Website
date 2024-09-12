import React from "react";
import "../../../image/icomoon/style.css";
import Topbar from "../../../components/header/topbar.jsx";
import Navbar from "../../../components/header/navbar.jsx";
import Navbarmenu from "../../../components/header/navbarmenu.jsx";
import BackgroundSlider from "./backgroundSlider.jsx";
import About from "./About/about.jsx";
import Classes from "./Classes/classes.jsx";
import Trainers from "./Trainers/trainers.jsx";
import Review from "./Review/review.jsx";
import Events from "./Events/events.jsx";
import Pricing from "./Pricing/Pricing.jsx";
import SignUp from "./SignUp/signUp.jsx";
import Image from "./ImageCoursel/image.jsx";
import Footer from "../../footer/footer.jsx";
const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <BackgroundSlider/>
      <About />
      <Classes />
      <Trainers />
      <Review/>
      <Events/>
      <Pricing />
      <SignUp />
      <Image />
      <Footer />
    </div>
  );
};

export default Home;
