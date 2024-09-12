import React from "react";
import Slider from "react-slick";
import ClassesCard from "../../Home/Classes/classesCard";
import image1 from "../../../../image/pages/home/classesCard/3.jpg.webp";
import image2 from "../../../../image/pages/Classes/ClassesDetail/classes-details.png.webp";
import image4 from "../../../../image/pages/home/classesCard/1.jpg.webp";
import image5 from "../../../../image/pages/home/classesCard/2.jpg.webp";
import image6 from "../../../../image/pages/home/classesCard/3.jpg.webp";
import author1 from "../../../../image/pages/home/classesCard/author/1.jpg.webp";
import author2 from "../../../../image/pages/home/classesCard/author/2.jpg";
import author3 from "../../../../image/pages/home/classesCard/author/3.jpg.webp";
import Comments from "./Comments.jsx";
import SignUpForm from "../../../pages/Home/SignUp/signUpForm.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const YogaTherapy = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
    customPaging: (i) => (
      <div
        className="w-2 md:w-3 md:h-3 rounded-full"
        style={{
          padding: "4px",
          backgroundColor: "#CCCCCC", // Default color for inactive dots
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ display: "flex" }}>
          {/* Show only the first four dots on small screens */}
          {dots.slice(0, 4).map((dot, index) => (
            <li key={index} style={{ margin: "0 2px" }}>
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center space-x-0 my-10">
      <div className="flex flex-col justify-start">
        <img src={image1} alt="" className="w-[630px] rounded-lg" />
        <div className="flex item-center my-4 max-w-screen-sm justify-between">
          <div className="">
            <h2 className="text-2xl text-[#333333]">Yoga Therapy</h2>
            <p className="space-x-4 mt-2 flex ">
              <span class="icon-alarm flex gap-2 text-[#F65D5D]">
                {" "}
                <p className="text-[#333333]">120 Mins</p>
              </span>
              <span class="icon-group flex gap-2 text-[#F65D5D]">
                {" "}
                <p className="text-[#333333]">250 People Registered</p>{" "}
              </span>
            </p>
          </div>
          <div className="px-4 flex pt-2 mt-3 item-center bg-[#F65D5D] text-white text-lg rounded-lg ">
            $29
          </div>
        </div>
        <div className="max-w-screen-sm text-[#666666]">
          <p>
            Yoga is the secret of many women in Vietnam and internationally.
            This is a very popular subject to bring extremely effective
            exercises to help improve physique effectively and reduce belly fat
            quickly. In order to have a perfect, toned physique, you need to
            arrange a suitable exercise regime for yourself as well as a
            nutritious diet. The following is a series of yoga exercises that
            help reduce fat effectively. 5 Moves to increase height for dwarf
            mushrooms. Exercise regularly to get the best results.
          </p>
        </div>
        <div className="my-10 gap-3 flex flex-col md:flex-row text-[#666666] item-center ">
          <div>
            <img src={image2} alt="" />
          </div>
          <div className="w-72">
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain.
            </p>
            <h3 className="text-xl mt-8 font-semibold">
              The secret to improving her height to achieve quick results:
            </h3>
            <div className="mt-4 space-y-4">
              <span class="icon-check flex gap-2 text-[#f65d5d]">
                {" "}
                <p className="text-[#666666]">
                  Combining 30 minutes of practice and 30 jumps high
                </p>
              </span>
              <span class="icon-check flex gap-2 text-[#f65d5d]">
                {" "}
                <p className="text-[#666666]">
                  Apply scientific nutrition, avoid obesity.
                </p>
              </span>
              <span class="icon-check flex gap-2 text-[#f65d5d]">
                {" "}
                <p className="text-[#666666]">Practice sports regularly</p>
              </span>
              <span class="icon-check flex gap-2 text-[#f65d5d]">
                {" "}
                <p className="text-[#666666]">
                  Various versions have evolved over the years
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-screen-sm text-[#666666]">
          <p>
            Update the trend of 12 yoga exercises to help you lose weight
            effectively at home, help strengthen your exercise ability. Besides
            impacting weight loss effects, it also helps to repel diseases,
            enhance the body's resistance. Have a toned body with just 8 steps
            of yoga every day, helping to lose weight quickly combined with a
            reasonable diet.
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-w-screen-sm justify-between item-center">
          <p className="text-[#666666] mt-3">
            <span class="icon-tag text-[#F65D5D]"></span> Health & Beauty
          </p>
          <div className="gap-4 flex item-center mt-3  ">
            <span class="icon-facebook hover:bg-[#F65D5D] rounded-full bg-[#F2F4F5] hover:text-[white] p-3"></span>
            <span class="icon-instagram hover:bg-[#F65D5D] rounded-full bg-[#F2F4F5] hover:text-[white] p-3"></span>
            <span class="icon-twitter hover:bg-[#F65D5D] rounded-full bg-[#F2F4F5] hover:text-[white] p-3"></span>
            <span class="icon-linkedin2 hover:bg-[#F65D5D] rounded-full bg-[#F2F4F5] hover:text-[white] p-3"></span>
          </div>
        </div>
        <div className="max-w-screen-md mt-5">
          <h2 className="text-2xl text-[#333333]">Other Classes</h2>

          <Slider {...settings}>
            <ClassesCard
              image={image4}
              heading="Artistic Yoga"
              authorImage={author1}
            />
            <ClassesCard
              image={image5}
              heading="Traditional Hatha"
              authorImage={author2}
            />
            <ClassesCard
              image={image6}
              heading="Yoga Therapy"
              authorImage={author3}
            />
            <ClassesCard
              image={image4}
              heading="Artistic Yoga"
              authorImage={author1}
            />
            <ClassesCard
              image={image5}
              heading="Traditional Hatha"
              authorImage={author2}
            />
            <ClassesCard
              image={image6}
              heading="Yoga Therapy"
              authorImage={author3}
            />
          </Slider>
        </div>
        <div>
          <h3 className="text-3xl text-[#333333] uppercase mt-20">Comments</h3>
          <Comments />
        </div>
        <div className="max-w-screen-sm">
          <h3 className="text-3xl text-[#333333] uppercase mt-20">
            Leave a Reply
          </h3>
          <SignUpForm />
        </div>
      </div>
      {/*About Instructor  */}
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
              <span class="icon-calendar-check-o mr-1 text-[#F65D5D]"></span> 15
              January, 2019
            </span>
            <span className="text-[#666666]">
              <span class="icon-check mr-1 text-[#F65D5D]"></span> Mon, Fri
            </span>
            <span className="text-[#666666]">
              <span class="icon-calendar-check-o mr-1 text-[#F65D5D]"></span>{" "}
              06:30pm - 07:45pm
            </span>
            <span className="text-[#666666]">
              <span class="icon-user mr-1 text-[#F65D5D]"></span> Lori Kennedy
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
  );
};

export default YogaTherapy;
