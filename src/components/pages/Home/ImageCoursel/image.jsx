import React from 'react';
import Slider from "react-slick";
import ImageCard from "./ImageCard.jsx";
import image1 from "../../../../image/pages/home/infor/1.jpg";  
import image2 from "../../../../image/pages/home/infor/2.jpg";  
import image3 from "../../../../image/pages/home/infor/3.jpg";  
import image4 from "../../../../image/pages/home/infor/4.jpg";  
import image5 from "../../../../image/pages/home/infor/5.jpg";  
import image6 from "../../../../image/pages/home/infor/6.jpg";  

const ImageCarousel = () => {
  const settings = {
    dots: false,  
    infinite: true,
    speed: 500,
    slidesToShow: 6,  
    slidesToScroll: 1,
    draggable: true,  
    swipeToSlide: true, 
  };

  return (
    <div className=' overflow-x-hidden '> 
      <Slider {...settings}>
        <div><ImageCard image={image1} /></div>
        <div><ImageCard image={image2} /></div>
        <div><ImageCard image={image3} /></div>
        <div><ImageCard image={image4} /></div>
        <div><ImageCard image={image5} /></div>
        <div><ImageCard image={image6} /></div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
