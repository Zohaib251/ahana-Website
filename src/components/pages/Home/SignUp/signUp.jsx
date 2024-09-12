import React from "react";
import GoogleMap from "./googleMap.jsx"; 
import SignUpForm from "./signUpForm.jsx"; 

const SignUp = () => {
  return (
    <div className="bg-white py-14 px-4 flex flex-col justify-center items-center md:flex-row md:space-x-6 space-y-6 md:space-y-0">
      {/* GoogleMap Section */}
      <div className="w-full md:w-[50%]">
        <GoogleMap />
      </div>
      
      {/* SignUpForm Section */}
      <div className="w-full md:w-[45%] max-w-lg">
      <h2 className="text-[#333333]  text-2xl font-medium ">Sign Up for Our Classes</h2>
        <p className="text-[#333333] ">
          To be invited to the nearest Cali center and get free physical advice
          to learn more about the program.
        </p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
