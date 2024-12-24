import React, { useState, useEffect } from "react";
import manlayingdown from "../assets/manlayingdown.jpg";
import logo from "../assets/logo.png";
import sittingman from "../assets/sittingman.jpg";
import msgimage from "../assets/msgimage.png";
import shield from "../assets/shield.png";
import doctor from "../assets/doctor.png";
import pres from "../assets/pres.png";
import { RxHamburgerMenu } from "react-icons/rx";
const Hero = ({isSmall}) => {
  

  const gradientStyle = {
    background:
      "linear-gradient(90.17deg, rgba(18, 18, 18, 0.88) 1.03%, rgba(18, 18, 18, 0.92) 44.18%, rgba(1, 1, 1, 0) 95.15%)",
  };

  const smallGradientStyle = {
    background:
      "linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%)",
  };

  return (
    <div className="flex flex-col min-h-[868px] max-h-fit ">
      {/* //navbar */}
      <div className="bg-[#FFF7E2] relative h-[104px] sm:h-[80px] flex items-center justify-center">
        {isSmall && <img width={122} height={24} src={logo} />}
        {isSmall && <div className="absolute left-7 text-xl text-[#3A643B]"><RxHamburgerMenu/></div>}
      </div>
      {/* //image section */}
      <div className="md:flex relative">
        {!isSmall && <div className="w-[40%]  bg-[#951D1C]"></div>}
        {!isSmall && (
          <div className="w-[60%]  h-[639px] ">
            <img
              className="w-full h-full object-cover transform scale-x-[-1]"
              src={manlayingdown}
              alt=""
            />
          </div>
        )}
        {isSmall && (
          <div className="w-full h-[540px]">
            <img className="w-full h-full object-cover" src={sittingman} />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={isSmall ? smallGradientStyle : gradientStyle}
        ></div>

        {/* Text h yeh hero ka  */}

        <div className="absolute flex gap-10 flex-col sm:w-[70%] md:w-[60%] w-10/12 sm:left-[110px] sm:top-[120px] left-[30px] top-[100px]">
          <div>
            <p className="sm:w-[440px] w-full h-[38px] sm:text-xl md:text-[28px] text-base  leading-7 text-[#FFF7E2] font-nexalight">
              Namaste, Welcome to Amrutam
            </p>
            <div className="lg:leading-[67px] leading-[40px] md:leading-[45px] text-white/90 font-medium md:text-[30px] xl:text-[48px] text-2xl md:text-xl font-dinprobold">
              Step into Holistic Healing with{" "}
              <span className="text-[#FFF7E2] underline cursor-pointer">
                Ayurveda
              </span>{" "}
              <p>Book Consultation with certified Experts</p>
            </div>
            <div className="w-10/12">
              <p className="sm:text-xl font-dinpro text-[14px] sm:leading-[28px] leading-5 mt-4 text-[#C9C9C9]">
                Dive into the world of ayurveda and Experience Personalized
                Health Solutions and Holistic Guidance from Trusted Ayurvedic
                Doctors Anytime, anywhere.
              </p>
            </div>
          </div>
          <div>
            <button className="bg-[#3A643B] font-dinpro hover:bg-[#2b4a2c] transition-all duration-200 ease-in-out sm:leading-[19px] py-5 sm:py-7 px-7 sm:px-10 font-medium sm:text-[20px] leading-[14px] text-[14px]  text-[#FFF7E2] rounded-2xl">
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
      {/* //4 box */}
      <div className="w-full flex items-center bg-[#FFF7E2] justify-center flex-wrap flex-col md:flex-row">
        <div className="w-full md:w-[318px]  h-[122px] md:h-[147px] flex items-center justify-center border-[1px] border-[#FFF1CF]">
          <div className=" flex justify-evenly  w-[283px]">
            <div className=" w-16 h-16 border-[1px] flex items-center justify-center rounded-full border-[#3A643B] bg-white">
              <img width={40} height={40} src={msgimage} alt="" />
            </div>
            <div className="w-2/3 flex items-center justify-center">
              <p className="text-md text-[#3A643B] font-semibold font-dinprobold">Convenient Online & In-Clinic Consultations</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[292px] h-[122px] md:h-[147px] items-center justify-center flex border-[1px] border-[#FFF1CF]">
          <div className="flex justify-evenly w-[283px]">
            <div className=" w-16 h-16 border-[1px] flex items-center justify-center rounded-full border-[#3A643B] bg-white">
              <img width={40} height={40} src={shield} alt="" />
            </div>
            <div className="w-2/3 flex items-center justify-center">
              <p className="text-md text-[#3A643B] font-semibold font-dinprobold">Safe And Effective Treatment</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[318px] h-[122px] md:h-[147px] items-center justify-center flex border-[1px] border-[#FFF1CF]">
          <div className="flex justify-evenly  w-[283px]">
            <div className=" w-16 h-16 border-[1px] flex items-center justify-center rounded-full border-[#3A643B] bg-white">
            <img width={40} height={40} src={doctor} alt="" />
            </div>
            <div className="w-2/3 flex items-center justify-center">
            <p className="text-md text-[#3A643B] font-semibold font-dinprobold">Experienced Ayurvedic Practitioners</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[310px] h-[122px] md:h-[147px] items-center justify-center flex border-[1px] border-[#FFF1CF]">
          <div className="flex justify-evenly  w-[283px]">
            <div className=" w-16 h-16 border-[1px] flex items-center justify-center rounded-full border-[#3A643B] bg-white">
            <img width={40} height={40} src={pres} alt="" />
            </div>
            <div className="w-2/3 flex items-center justify-center">
            <p className="text-md text-[#3A643B] font-semibold font-dinprobold">Personalized Treatment Plans And Guidance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;