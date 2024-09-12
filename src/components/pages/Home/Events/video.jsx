import React, { useState } from "react";
import image from "../../../../image/pages/home/events/video.jpg";
import play from "../../../../image/pages/home/icons/play.png";

const Video = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="relative mx-4 md:mx-0">
      {/* Background Image */}
      <img 
        src={image} 
        alt="Background" 
        className="w-full rounded-2xl object-cover"
      />

      {/* Play Button */}
      <a
        onClick={toggleModal}
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
      >
        <img src={play} alt="Play" className="w-16 h-16 md:w-20 md:h-20" />
      </a>

      {/* Modal for video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-full">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl md:text-3xl lg:text-4xl cursor-pointer"
              onClick={toggleModal}
            >
              &times;
            </button>

            <iframe
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://www.youtube.com/embed/vgv-hzTl5FA?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
