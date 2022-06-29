import React from "react";

const Hero = () => {
  return (
    <div className="max-w-3xl hidden lg:block lg:max-w-5xl mt-5 mx-auto rounded-lg space-x-8 flex-row justify-center p-4 bg-base-200">
      <div className="avatar">
        <div className="w-24 rounded-full ">
          <img src="/avatar.JPG" alt="avatar" />
        </div>
      </div>
      <h3 className="text-content text-2xl font-bold">
        Im, Angelo. This is my home where keep all my thoughts and projects!
      </h3>
    </div>
  );
};

export default Hero;
