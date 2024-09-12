import React from "react";
import HeadingSection from "../../Home/headingSection";
import CourseCard from "./courseCard";
import image1 from "../../../../image/pages/about/blog/1.jpg";
import image2 from "../../../../image/pages/about/blog/2.jpg";
import image3 from "../../../../image/pages/about/blog/3.jpg";

const Course = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* Heading Section */}
      <HeadingSection
        title="Course benefits"
        description="Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!"
      />

      {/* Course Cards */}
      <div className="flex flex-col space-x-0 lg:space-x-10  lg:flex-row justify-center items-center my-12 space-y-6 lg:space-y-0">
        <CourseCard
          image={image1}
          heading={"Yoga for Slim Physique"}
          description={
            "Regular practice with breathing techniques in Yoga will help you get a toned body, this is the perfect choice"
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
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"
          }
        />
      </div>
    </div>
  );
};

export default Course;
