import React from "react";
import quota from "../../../../image/pages/home/icons/quota.png";

const ReviewCard = ({ image }) => {
  return (
    <div className="text-white flex flex-col items-center">
      {/* Image section */}
      <div className="flex">
        <img
          src={image}
          alt="review"
          className="rounded-full border-4 border-white w-24 h-24"
        />
        <img
          src={quota}
          alt="quota"
          className=" top-0 right-0 h-12 opacity-25 "
        />
      </div>

      {/* Text section */}
      <div className="flex flex-col justify-center text-center items-center max-w-screen-md mt-6">
        <p className="text-lg mt-8 font-normal px-6">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness.
        </p>
        <h4 className="font-semibold text-2xl mt-6">Denise Thomas</h4>
        <h6 className="font-light text-lg mt-1">Designer</h6>
      </div>
    </div>
  );
};

export default ReviewCard;
