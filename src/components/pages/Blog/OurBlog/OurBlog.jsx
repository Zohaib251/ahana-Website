import React from "react";
import Topbar from "../../../header/topbar.jsx";
import Navbar from "../../../header/navbar";
import Navbarmenu from "../../../header/navbarmenu.jsx";
import Heading from "../../../pages/About/heading/Heading.jsx";
import CourseCard from "../../About/courseBenefits/courseCard.jsx";
import Image from "../../Home/ImageCoursel/image.jsx";
import Footer from "../../../footer/footer.jsx";
import image1 from "../../../../image/pages/blog/OurBlog/1.jpg";
import image2 from "../../../../image/pages/blog/OurBlog/2.jpg";
import image3 from "../../../../image/pages/blog/OurBlog/3.jpg";
import image4 from "../../../../image/pages/blog/OurBlog/4.jpg";
import image5 from "../../../../image/pages/blog/OurBlog/5.jpg";
import image6 from "../../../../image/pages/blog/OurBlog/6.jpg";
import image7 from "../../../../image/pages/blog/OurBlog/7.jpg";
import image8 from "../../../../image/pages/blog/OurBlog/8.jpg";
import image9 from "../../../../image/pages/blog/OurBlog/9.jpg";
const OurBlog = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"Blog gird"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:grid-cols-3 my-20 justify-items-center">
        <CourseCard
          image={image1}
          heading={"Yoga for Slim Physique"}
          description={
            "Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice"
          }
        />
        <CourseCard
          image={image2}
          heading={"The Perfect Dose"}
          description={
            "To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain"
          }
        />
        <CourseCard
          image={image3}
          heading={"Flexible Body"}
          description={
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae-sentium voluptatum deleniti"
          }
        />
        <CourseCard
          image={image4}
          heading={"The Secret to Improving"}
          description={
            "Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice"
          }
        />
        <CourseCard
          image={image5}
          heading={"Movements for Slim"}
          description={
            "To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain"
          }
        />
        <CourseCard
          image={image6}
          heading={"Update Training Trend"}
          description={
            "To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain"
          }
        />
        <CourseCard
          image={image7}
          heading={"Have a Toned Body"}
          description={
            "Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice"
          }
        />
        <CourseCard
          image={image8}
          heading={"Rapid Weight Loss"}
          description={
            "To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain"
          }
        />
        <CourseCard
          image={image9}
          heading={"Healthy Eating Mode"}
          description={
            "To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain"
          }
        />
      </div>
      <div className="flex justify-center gap-3  my-6">
        <ul className="flex space-x-2">
          {/* First li with linear gradient applied by default */}
          <li
            className="rounded-full px-4 py-2 text-white"
            style={{
              background: "linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)",
            }}
          >
            1
          </li>

          {/* Second li with border removed on hover */}
          <li
            className="border-gray-300 hover:text-white border-2 rounded-full px-3 py-1 cursor-pointer"
            style={{
              transition: "background 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background =
                "linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)";
              e.target.style.borderColor = "transparent"; // Remove the border on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "";
              e.target.style.borderColor = "#d1d5db"; // Restore the border color on leave (gray-300)
            }}
          >
            2
          </li>

          <li
            className="border-gray-300 hover:text-white border-2 rounded-full px-3 py-1 cursor-pointer flex items-center justify-center"
            style={{
              transition: "background 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background =
                "linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)";
              e.target.style.borderColor = "transparent"; // Make the border transparent on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.background = ""; // Remove background on leave
              e.target.style.borderColor = "#d1d5db"; // Restore the border color (gray-300)
            }}
          >
            <span className="icon-arrow_forward_ios text-xs"></span>
          </li>
        </ul>
      </div>

      <Image />
      <Footer />
    </div>
  );
};

export default OurBlog;
