import React from "react";
import HeadingSection from "../headingSection.jsx";
import PricingCard from "./PricingCard.jsx";

const Pricing = () => {
  return (
    <div className="pt-12 pb-32 bg-[#F9F2F0] flex flex-col items-center justify-center text-center">
      <HeadingSection
        title="Pricing plans"
        description="Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!"
      />

      <div className="flex flex-wrap justify-center mt-10 gap-6 lg:gap-8">
        <PricingCard
          title="BEGINNER"
          price="59"
          backgroundColor="bg-[#FDB07D]"
        />
        <PricingCard
          title="Intermediate"
          price="99"
          backgroundColor="bg-[#FA8F70]"
        />
        <PricingCard
          title="Advanced"
          price="159"
          backgroundColor="bg-[#F2786F]"
        />
        <PricingCard
          title="Professional"
          price="199"
          backgroundColor="bg-[#F65D5D]"
        />
      </div>
    </div>
  );
};

export default Pricing;
