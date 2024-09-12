import React from 'react'
import logo from "../../../image/navbar/logo-icon.png.webp";

const headingSection = ({title, description}) => {
  return (
    <div>
      <div className="flex flex-col items-center my-8 justify-center">
        <img src={logo} alt="logo" className="" />
        <h2 className="uppercase text-4xl text-[#333333] mt-3 text-center">{title}</h2>
        <p className="mt-4 text-[#666666] text-center">{description}</p>
      </div>
    </div>
  )
}

export default headingSection
