import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="relative group overflow-hidden cursor-grab">
      <img
        src={image}
        alt="Image Card"
        className="w-full transition-transform duration-300 transform group-hover:scale-110"
      />

      <div className="absolute inset-0 custom-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center">
        <span className="icon-instagram text-white text-4xl mb-2"></span>

        <span className="text-white text-lg">ahana.yoga</span>
      </div>
    </div>
  );
};

export default ImageCard;
