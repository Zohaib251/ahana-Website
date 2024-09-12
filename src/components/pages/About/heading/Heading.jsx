import React from 'react'
import blog_bg from "../../../../image/pages/about/page-top-bg.jpg";

const Heading = ({title,description}) => {
  return (
    <div className="relative flex justify-center text-center py-20">
    {/* Background image with dimmed opacity */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${blog_bg})`,
        opacity: 0.5, // Lower opacity for the background image
        zIndex: -2,
      }}
    ></div>

    {/* Gradient overlay to blend over the background */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(145deg, rgba(246, 93, 93, 0.9) 0%, rgba(253, 176, 125, 0.9) 100%)",
        zIndex: -1,
      }}
    ></div>

    {/*Content */}
    <div className="w-full lg:w-[630px] px-4 cursor-grab space-y-5">
     <div>
      <h2 className='text-5xl font-semibold text-white uppercase'>
        {title}
      </h2>
      <p className='text-lg text-white pt-10'>{description}</p>
     </div>
    </div>
  </div>
  )
}

export default Heading
