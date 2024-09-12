import React from "react";
import Topbar from "../../../header/topbar.jsx";
import Navbar from "../../../header/navbar";
import Navbarmenu from "../../../header/navbarmenu.jsx";
import Heading from "../../../pages/About/heading/Heading.jsx";
import Image1 from "../../../../image/pages/home/events/8.jpg";
import GoogleMap from "../../../pages/Home/SignUp/googleMap.jsx";
import ClassesSlider from "./ClassesSlider.jsx";
import Comments from "../../../pages/Classes/Classes Detail/Comments.jsx";
import SignUpForm from "../../../pages/Home/SignUp/signUpForm.jsx";
import author1 from "../../../../image/pages/home/classesCard/author/1.jpg.webp";
import Image from "../../Home/ImageCoursel/image.jsx";
import Footer from "../../../footer/footer.jsx";

const EventsDetail = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"Event details"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center mt-10 mb-10">
          {/* Ensure the image is responsive */}
          <img
            src={Image1}
            alt=""
            className="w-full lg:w-[1000px] rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-20 ">
          <div className="flex flex-col">
            {/*Name  */}
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-60">
              <h3 className="text-[#333333] text-2xl">Yoga Therapy</h3>
              <button className="p-2 rounded-lg bg-[#8ABE56] text-[white]">
                ADVANCED
              </button>
            </div>
            <div className="flex gap-3 my-2 text-sm md:text-base">
              <span>
                <span className="icon-alarm text-[#F65D5D]"></span>
                120 Mins
              </span>
              <span>
                <span className="icon-group text-[#F65D5D]"></span>
                250 People Registered
              </span>
            </div>
            {/*Paragraph  */}
            <div className="text-[#666666] max-w-screen-sm text-center lg:text-left py-5">
              <p>
                Yoga is the secret of many women in Vietnam and internationally.
                This is a very popular subject to bring extremely effective
                exercises to help improve physique effectively and reduce belly
                fat quickly. In order to have a perfect, toned physique, you
                need to arrange a suitable exercise regime for yourself as well
                as a nutritious diet. The following is a series of yoga
                exercises that help reduce fat effectively. 5 Moves to increase
                height for dwarf mushrooms. Exercise regularly to get the best
                results.
              </p>
            </div>
            {/*Google Map  */}
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              <div className="w-full ">
                <GoogleMap />
              </div>
              <div className="w-full">
                <h3 className="text-xl mt-8 font-semibold">
                  The secret to improving her height to achieve quick results:
                </h3>
                <div className="mt-4 space-y-4">
                  <span className="icon-check flex gap-2 text-[#f65d5d]">
                    <p className="text-[#666666]">
                      Fast and healthy weight loss yoga
                    </p>
                  </span>
                  <span className="icon-check flex gap-2 text-[#f65d5d]">
                    <p className="text-[#666666]">
                      Yoga preserves beauty and youth
                    </p>
                  </span>
                  <span className="icon-check flex gap-2 text-[#f65d5d]">
                    <p className="text-[#666666]">Yoga repels all diseases</p>
                  </span>
                  <span className="icon-check flex gap-2 text-[#f65d5d]">
                    <p className="text-[#666666]">Yoga brings peace, balance</p>
                  </span>
                  <span className="icon-check flex gap-2 text-[#f65d5d]">
                    <p className="text-[#666666]">
                      Yoga exercises for beautiful belly slim waist
                    </p>
                  </span>
                </div>
              </div>
            </div>
            {/*Second Paragraph  */}
            <div className="text-[#666666] max-w-screen-sm text-center lg:text-left mt-5">
              <p>
                Update the trend of 12 yoga exercises to help you lose weight
                effectively at home, help strengthen your exercise ability.
                Besides impacting weight loss effects, it also helps to repel
                diseases, enhance the body's resistance. Have a toned body with
                just 8 steps of yoga every day, helping to lose weight quickly
                combined with a reasonable diet.
              </p>
            </div>
            {/*Health And Beauty  */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
              <p className="text-[#666666]">
                <span className="icon-tag text-[#F65D5D]"></span> Health &
                Beauty
              </p>
              <div className="flex gap-4 mt-3">
                <span className="icon-facebook hover:bg-[#F65D5D] rounded-full bg-[#F2F4F5] hover:text-white p-3"></span>
                <span className="icon-instagram hover:bg-[#F65D5D] rounded-full bg-[#F2F4F5] hover:text-white p-3"></span>
                <span className="icon-twitter hover:bg-[#F65D5D] rounded-full bg-[#F2F4F5] hover:text-white p-3"></span>
                <span className="icon-linkedin2 hover:bg-[#F65D5D] rounded-full bg-[#F2F4F5] hover:text-white p-3"></span>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-screen-sm">
              <h3 className="text-xl text-[#333333] uppercase ">
                About instructor
              </h3>
              <div className="mt-5 flex flex-col space-y-2 shadow-xl hover:shadow-2xl rounded-xl p-4 ">
                <span className="text-[#666666]">
                  <span class="icon-map mr-1 text-[#F65D5D]"></span> 184 Main
                  Collins Street
                </span>
                <span className="text-[#666666]">
                  <span class="icon-calendar-check-o mr-1 text-[#F65D5D]"></span>{" "}
                  15 January, 2019
                </span>
                <span className="text-[#666666]">
                  <span class="icon-check mr-1 text-[#F65D5D]"></span> Mon, Fri
                </span>
                <span className="text-[#666666]">
                  <span class="icon-calendar-check-o mr-1 text-[#F65D5D]"></span>{" "}
                  06:30pm - 07:45pm
                </span>
                <span className="text-[#666666]">
                  <span class="icon-user mr-1 text-[#F65D5D]"></span> Lori
                  Kennedy
                </span>
              </div>
            </div>
            {/*About Instructor  */}
            <div className="mt-10">
              <h3 className="text-xl text-[#333333] uppercase ">
                About instructor
              </h3>
              <div className="shadow-xl hover:shadow-2xl p-4 flex flex-col justify-center items-center text-center mt-5">
                <img
                  src={author1}
                  alt="Author Image"
                  className="w-24 rounded-full"
                />
                <h3 className="text-2xl text-[#333333] mt-3">Lori Kennedy</h3>
                <h5 className="text-xl text-[#F65D5D]">Yoga Trainer</h5>
                <p className="text-[#666666] text-center mt-2">
                  Yoga & Therapy Certificate of
                  <br /> Uttarakhand University
                </p>
                <div className="flex justify-center items-center mt-3 space-x-4">
                  <span className="icon-facebook hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-3 rounded-full"></span>
                  <span className="icon-instagram hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-3 rounded-full"></span>
                  <span className="icon-twitter hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-3 rounded-full"></span>
                  <span className="icon-linkedin2 hover:bg-[#F65D5D] hover:text-white text-[#666666] bg-[#F2F4F5] p-3 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Classes and Comment  */}
      <div className="my-10 flex flex-col justify-center items-center mx-auto">
        <h3 className="text-[#333333] text-2xl font-medium uppercase my-10">
          Other Classes
        </h3>
        <div className="w-full max-w-screen-lg mx-auto">
          <ClassesSlider />
        </div>
        <h3 className="text-[#333333] text-2xl font-medium uppercase my-16">
          Comments
        </h3>
        <div className="w-full max-w-screen-md mx-auto">
          <Comments />
        </div>
        <h3 className="text-[#333333] text-2xl font-medium uppercase mt-16">
          Leave a Reply
        </h3>
        <div className="w-full max-w-screen-sm mx-auto">
          <SignUpForm />
        </div>
      </div>

      <Image />
      <Footer />
    </div>
  );
};

export default EventsDetail;
