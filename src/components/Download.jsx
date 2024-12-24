import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import iphone from "../assets/iphone.png";

function Download({ isSmall }) {
  return (
    <div className="bg-[#FFF7E2]">
      <div className="flex md:flex-row flex-col md:w-10/12 items-center mx-auto md:py-20 py-10">
        <div className="md:w-1/2 w-full flex flex-col gap-12">
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h1 className="md:text-[40px] text-center md:text-left xl:text-[48px] text-[32px] text-[#3A643B] leading-[48px] md:leading-[66px] font-dinprobold xl:leading-[67px] font-bold">
              Amrutam Home App
            </h1>
            <p className="text-[#676767] w-11/12 text-[14px] text-center md:text-left md:text-base leading-[18px] md:leading-5 font-dinpro">
              The Amrutam Home App is your one-stop app for all things Ayurveda!
              Apart from mimicking the significant characteristics of our
              website, this app offers a wide range of additional features.
            </p>
            {isSmall && (
              <img
                className="w-[358px] h-[328px] object-cover"
                src={iphone}
                loading="lazy"
              />
            )}
            <h3 className="md:text-[32px] w-9/12 md:w-full text-[20px] leading-[28px] text-center md:text-left md:leading-[44px] capitalize  font-medium">
              Get a diet & lifestyle consultation with ayurvedic experts across
              the globe{" "}
            </h3>
          </div>
          <div className="flex flex-col gap-6 md:text-left md:items-start items-center">
            <h1 className=" text-[36px] font-dinprobold">Get The App Now</h1>
            <div className="flex md:flex-row flex-col gap-6 w-full  md:items-start items-center">
              <img width={270} height={80} src={playstore} alt="" />
              <img width={270} height={80} src={appstore} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative">
            {!isSmall && (
              <img className="relative z-50" src={iphone} loading="lazy" />
            )}
            {!isSmall && (
              <div className="absolute w-[257px] h-[257px] rounded-full top-0 left-20 bg-[#3a643bcf]/15"></div>
            )}
            {!isSmall && (
              <div className="absolute w-[257px] h-[257px] bottom-0 right-6 rounded-full bg-[#3A643B29]"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;