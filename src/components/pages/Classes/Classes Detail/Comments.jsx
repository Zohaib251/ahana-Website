import React from "react";
import image1 from "../../../../image/pages/home/classesCard/author/3.jpg.webp";
import image2 from "../../../../image/pages/home/classesCard/author/2.jpg";
import image3 from "../../../../image/pages/home/classesCard/author/1.jpg.webp";
const Comments = () => {
  return (
    <div className="max-w-screen-md mt-3">
      {/* Comment 1 */}
      <div className="border-b-2  border-black border-opacity-5 mb-3 p-3">
        <div className="rounded-full flex space-x-4">
          <img src={image1} alt="Profile Picture" className="w-20 rounded-full h-16" />
          <div>
            <h2 className="text-xl text-[#333333]">
              Beverly Price
              <span className="text-sm pl-4 text-[#666666] font-semibold">
                <span className="icon-alarm text-[#F65D5D] pr-1"></span>
                June 28, 2019 at 3:18 pm
              </span>
            </h2>
            <p className="text-base text-[#666666] my-4 text-customDarkGray">
            Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low.
            </p>
            <p className="font-medium icon-mail-reply text-[#F65D5D] mt-3 text-lg"> Reply</p>
          </div>
        </div>
      </div>
      {/* Comment 2 */}
      <div className="border-b-2 border-black border-opacity-5 mb-3 p-3 ml-0 md:ml-20">
        <div className="flex space-x-4">
          <img src={image2} alt="Profile Picture" className="w-20 rounded-full h-16" />
          <div>
          <h2 className="text-xl text-[#333333]">
          Jacqueline Watkins
              <span className="text-sm pl-4 text-[#666666] font-semibold">
                <span className="icon-alarm text-[#F65D5D] pr-1"></span>
                June 28, 2019 at 3:18 pm
              </span>
              </h2>
              <p className="text-base text-[#666666] my-4 text-customDarkGray">
            Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low.
            </p>
            <p className="font-medium icon-mail-reply text-[#F65D5D] mt-3 text-lg"> Reply</p>
          </div>
        </div>
      </div>
      {/* Comment 3 */}
      <div className="border-b-2 border-black border-opacity-5 mb-3 p-3 ml-0">
        <div className="flex space-x-4">
        <img src={image3} alt="Profile Picture" className="w-20 rounded-full h-16" />
          <div>
          <h2 className="text-xl text-[#333333]">
          Jacqueline Watkins
              <span className="text-sm pl-4 text-[#666666] font-semibold">
                <span className="icon-alarm text-[#F65D5D] pr-1"></span>
                June 28, 2019 at 3:18 pm
              </span>
              </h2>
              <p className="text-base text-[#666666] my-4 text-customDarkGray">
            Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low.
            </p>
            <p className="font-medium icon-mail-reply text-[#F65D5D] mt-3 text-lg"> Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
