import React from "react";

const Hero = () => {
  return (
    <div className="bg-base-300">
      <div className="max-w-3xl hidden lg:flex lg:max-w-3xl  mx-auto rounded-xl space-x-8 flex-row justify-start  bg-base-200">
        <div className="avatar p-4">
          <div className="w-24 rounded-full ">
            <img src="/avatar.JPG" alt="avatar" />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-content text-2xl p-4 ">
            Im, Angelo. This is where I keep all my thoughts and projects!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
