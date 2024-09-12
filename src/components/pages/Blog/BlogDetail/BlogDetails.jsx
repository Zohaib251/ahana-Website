import React from "react";
import Topbar from "../../../header/topbar.jsx";
import Navbar from "../../../header/navbar.jsx";
import Navbarmenu from "../../../header/navbarmenu.jsx";
import Heading from "../../About/heading/Heading.jsx";
import author1 from "../../../../image/pages/home/classesCard/author/1.jpg.webp";
import image1 from "../../../../image/pages/blog/OurBlog/1.jpg";
import img1 from "../../../../image/pages/blog/blogDetail/blogGallery/1.jpg";
import img2 from "../../../../image/pages/blog/blogDetail/blogGallery/2.jpg";
import img3 from "../../../../image/pages/blog/blogDetail/blogGallery/3.jpg";
import img4 from "../../../../image/pages/blog/blogDetail/blogGallery/4.jpg";
import img5 from "../../../../image/pages/blog/blogDetail/blogGallery/5.jpg";
import author4 from "../../../../image/pages/blog/blogDetail/4.jpg";
import person1 from "../../../../image/pages/home/infor/1.jpg";
import person2 from "../../../../image/pages/home/infor/2.jpg";
import person3 from "../../../../image/pages/home/infor/3.jpg";
import person4 from "../../../../image/pages/home/infor/4.jpg";
import person5 from "../../../../image/pages/home/infor/5.jpg";
import person6 from "../../../../image/pages/home/infor/6.jpg";
import ourBlog1 from "../../../../image/pages/blog/OurBlog/8.jpg";
import ourBlog2 from "../../../../image/pages/blog/OurBlog/3.jpg";
import ourBlog3 from "../../../../image/pages/blog/OurBlog/9.jpg";
import Comments from "../../../pages/Classes/Classes Detail/Comments.jsx";
import SignUpForm from "../../../pages/Home/SignUp/signUpForm.jsx";
import Image from "../../Home/ImageCoursel/image.jsx";
import Footer from "../../../footer/footer.jsx";
const BlogDetails = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Navbarmenu />
      <Heading
        title={"Blog details"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <div className="flex justify-center ">
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-20 ">
          <div className="flex px-5 lg:px-0 flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center mt-10 mb-10">
                {/* Ensure the image is responsive */}
                <img
                  src={image1}
                  alt=""
                  className="w-full lg:w-[700px] rounded-xl"
                />
              </div>
            </div>

            {/*Name  */}
            <div className="flex flex-col lg:flex-row ">
              <h3 className="text-[#333333] text-2xl">Yoga Therapy</h3>
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
                With so many long-term benefits for health and beauty, many
                people choose Yoga as a form of daily exercise and sports.
                However, for those who want to practice Yoga, especially
                beginners, the choice of location is extremely important. It is
                impossible to count how many gyms with a variety of quality and
                prices. Some of the following questions will be answered by
                Ahana Yoga to help you find the best practice room.
              </p>
            </div>
            {/*Quote */}
            <div className="flex flex-col text-[#666666] lg:flex-row gap-4 ml-0 max-w-screen-sm lg:ml-16 items-start">
              Yoga is now one of the most popular practice in the world. It is
              not simply the movement of the four limbs, Yoga is the product of
              a massive culture, a special "religion" that brings great value.
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              {/* Images in first row */}
              <div className="flex justify-center items-center">
                <img src={img1} alt="Image 1" className="w-40 object-cover" />
              </div>

              <div className="flex justify-center items-center">
                <img
                  src={img2}
                  alt="Image 2"
                  className="w-40 h-auto object-cover"
                />
              </div>

              <div className="row-span-2 flex justify-center items-center">
                <img
                  src={img3}
                  alt="Tall Image"
                  className="w-40 object-cover"
                />
              </div>

              {/* Images in second row */}
              <div className="flex justify-center items-center">
                <img src={img4} alt="Image 3" className="w-40 object-cover" />
              </div>

              <div className="flex justify-center items-center">
                <img src={img5} alt="Image 4" className="w-40 object-cover" />
              </div>
            </div>
            {/*Second Paragraph  */}
            <div className="text-[#666666] max-w-screen-sm text-center lg:text-left mt-5">
              <h3 className="text-[#333333] text-xl my-4">
                What reasons do we need to practice Yoga?
              </h3>
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
            {/* Quote */}
            <div className="my-10 shadow-2xl max-w-screen-sm p-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <img
                    src={author4}
                    alt="author"
                    className="rounded-full w-60"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#333333] text-2xl ">Dorothy Newman</h3>
                  <p className="text-[#666666]">
                    Let Yoga bring you perfect body, health and flexibility and
                    a spirit of relaxation. Choose the nearest gym at Ahana Yoga
                    and start this amazing journey!
                  </p>
                  <div className="flex gap-4 mt-3">
                    <span className="icon-facebook hover:text-[#F65D5D]   text-[#666666]"></span>
                    <span className="icon-instagram hover:text-[#F65D5D]   text-[#666666]"></span>
                    <span className="icon-twitter hover:text-[#F65D5D]   text-[#666666]"></span>
                    <span className="icon-linkedin2 hover:text-[#F65D5D]  text-[#666666]"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* Next Prev Section */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              {/* Previous Post Section */}
              <div className="flex cursor-pointer mb-4 md:mb-0 items-center">
                <div className="mr-2">
                  <span className="icon-arrow_back_ios text-[#F65D5D] font-bold"></span>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-lg text-[#333333]">Movements for Slim</h4>
                  <p className="text-base text-[#666666]">Previous Post</p>
                </div>
              </div>

              {/* Next Post Section */}
              <div className="flex cursor-pointer items-center">
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                  <h4 className="text-lg text-[#333333]">The Perfect Dos</h4>
                  <p className="text-base text-[#666666]">Next Post</p>
                </div>
                <div className="ml-2">
                  <span className="icon-arrow_forward_ios text-[#F65D5D] font-bold"></span>
                </div>
              </div>
            </div>
            {/*Classes and Comment  */}
            <div className="my-10 flex flex-col justify-center item-start mx-auto">
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
          </div>
          <div className="mt-16 px-5 lg:px-0">
            {/* Input Search */}
            <div className="relative">
              <input
                type="text"
                className="w-full placeholder-[#666666] rounded-3xl px-3 text-[#666666] py-3 text-xl bg-[#FAFAFA] border-b-2 border-white focus:outline-none"
                placeholder="Search"
              />
              <span class="icon-search absolute top-5 right-5 text-[#666666] cursor-pointer"></span>
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
            {/*Categories  */}
            <div className="my-10">
              <h3 className="text-2xl mb-4 uppercase text-[#333333]">
                Categories
              </h3>
              <div className="text-[#666666] space-y-2">
                <p>Health (5)</p>
                <p>Nature (7)</p>
                <p>Beauty (3)</p>
                <p>Challenge (10)</p>
                <p>Training (12)</p>
                <p>Progress (4)</p>
              </div>
            </div>
            {/*Latest Post  */}
            <div className="my-10">
              <h3 className="text-2xl mb-4 uppercase text-[#333333]">
                Latest Post
              </h3>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-3">
                  <img src={ourBlog1} alt="" className="w-20 rounded-lg" />
                  <div>
                    <h4 className="text-xl text-[#333333]">
                      Rapid Weight Loss
                    </h4>
                    <span className="text-[#666666]">
                      <span class="icon-calendar-check-o text-[#F65D5D]"></span>{" "}
                      June 28, 2019
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <img src={ourBlog2} alt="" className="w-20 rounded-lg" />
                  <div>
                    <h4 className="text-xl text-[#333333]">Flexible Body</h4>
                    <span className="text-[#666666]">
                      <span class="icon-calendar-check-o text-[#F65D5D]"></span>{" "}
                      June 28, 2019
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <img src={ourBlog3} alt="" className="w-20 rounded-lg" />
                  <div>
                    <h4 className="text-xl text-[#333333]">
                      Healthy Eating Mode
                    </h4>
                    <span className="text-[#666666]">
                      <span class="icon-calendar-check-o text-[#F65D5D]"></span>{" "}
                      June 28, 2019
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*Latest Post  */}
            <div className="my-10">
              <h3 className="text-2xl mb-4 uppercase text-[#333333]">
                Latest Post
              </h3>
              <div>
                <div className="flex space-x-4 mt-10">
                  <div className="relative w-20 rounded-lg group">
                    <img
                      src={person1}
                      alt="person1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d]   rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span class="icon-instagram text-white"></span>
                      <span className="text-white text-sm">ahana.yoga</span>
                    </div>
                  </div>
                  <div className="relative w-20 rounded-lg group">
                    <img
                      src={person2}
                      alt="person2"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span class="icon-instagram text-white"></span>
                      <span className="text-white text-sm">ahana.yoga</span>
                    </div>
                  </div>
                  <div className="relative w-20 rounded-lg group">
                    <img
                      src={person3}
                      alt="person3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span class="icon-instagram text-white"></span>
                      <span className="text-white text-sm">ahana.yoga</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-3">
                  <div className="relative w-20 rounded-lg group">
                    <img
                      src={person4}
                      alt="person4"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span class="icon-instagram text-white"></span>
                      <span className="text-white text-sm">ahana.yoga</span>
                    </div>
                  </div>
                  <div className="relative w-20 rounded-lg group">
                    <img
                      src={person5}
                      alt="person5"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span class="icon-instagram text-white"></span>
                      <span className="text-white text-sm">ahana.yoga</span>
                    </div>
                  </div>
                  <div className="relative w-20 rounded-lg group">
                    <img
                      src={person6}
                      alt="person6"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-gradient-to-r from-[#f65d5d] to-[#fdb07d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span class="icon-instagram text-white"></span>
                      <span className="text-white text-sm">ahana.yoga</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Latest Post  */}
            <div className="my-16">
              <h3 className="text-2xl mb-4 uppercase text-[#333333]">
                Latest Post
              </h3>
              <div className="flex space-x-4">
                <span className="text-[#666666] bg-[#FAFAFA] px-4 cursor-pointer py-2 rounded-3xl hover:text-[#F65D5D]">
                  Nature
                </span>
                <span className="text-[#666666] bg-[#FAFAFA] px-4 cursor-pointer py-2 rounded-3xl hover:text-[#F65D5D]">
                  Health
                </span>
                <span className="text-[#666666] bg-[#FAFAFA] px-4 cursor-pointer py-2 rounded-3xl hover:text-[#F65D5D]">
                  Yoga
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image />
      <Footer />
    </div>
  );
};

export default BlogDetails;
