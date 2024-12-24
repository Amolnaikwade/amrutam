import React from "react";
import ayurvedaImg from "../assets/ayurvedaImg.jpg.png";
import small1 from "../assets/small1.png";
import small2 from "../assets/small2.png";

const Ayurveda = ({ isSmall }) => {
  return (
    <div className="">
      <div className="mt-10 flex flex-col  items-center">
        <div className="flex flex-col mb-6 items-center justify-center">
          <div className="p-1">
            <h1 className="text-3xl text-center font-dinprobold md:text-4xl lg:text-5xl text-[#3A643B] font-semibold">
              Discover Ayurveda's Magic With Us
            </h1>
          </div>
          <div className="bg-[#C3D0C4]  w-[55vw] h-[5px]"></div>
        </div>
        <div className="md:w-[50vw] w-10/12">
          <p className="md:text-xl text-[14px] font-dinpro leading-7 text-center text-[#666666]">
            Ayurvedic treatment aims to balance your body and mind, bringing
            harmony and vitality. It's like a journey to better health using
            ancient wisdom, a totally effective approach for a better life.
          </p>
        </div>
      </div>
      {/* main  */}
      <div className="flex flex-col items-center justify-center">
        {!isSmall && <img src={ayurvedaImg} loading="lazy"/>}
        {isSmall && <img src={small1} loading="lazy" />}
        {isSmall && <img src={small2} loading="lazy"/>}
      </div>
    </div>
  );
};

export default Ayurveda;