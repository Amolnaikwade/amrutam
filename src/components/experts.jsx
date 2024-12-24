import React from "react";
import ExpertCard from "./ExpertCard";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

function Experts({ isSmall }) {
  return (
    <div className="py-20 flex items-center flex-col">
      <div className="flex flex-col mb-6 items-center justify-center">
        <div className="p-1 z-50">
          <h1 className="text-3xl text-center font-dinprobold md:text-4xl lg:text-5xl text-[#3A643B] font-semibold">
            Meet Our Ayurveda Experts!
          </h1>
        </div>
        <div className="bg-[#C3D0C4]  w-[55vw] h-[5px] "></div>
      </div>
      <div className="flex items-center w-10/12 mx-auto mt-10">
        {!isSmall && (
          <div className="w-[72px] h-[72px] rounded-full flex border-[1px] border-gray-400 text-gray-400 items-center justify-center hover:cursor-pointer text-4xl">
            <IoArrowBackOutline />
          </div>
        )}
        <div className="mx-auto flex flex-wrap gap-12">
          <ExpertCard />
          {!isSmall && <ExpertCard />}
          {!isSmall && <ExpertCard />}
        </div>
        {!isSmall && (
          <div className="w-[72px]  h-[72px] rounded-full flex border-[1px] border-gray-400 text-gray-400 items-center justify-center text-4xl hover:cursor-pointer">
            <IoArrowForwardOutline />
          </div>
        )}
      </div>
        <div className="flex gap-8 my-8 justify-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#3A643B]"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#C3C3C3]"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#C3C3C3]"></div>
        </div>
        <div className=" flex items-center justify-center"><button className="rounded-md flex items-center justify-center gap-2  font-dinpro text-[#3A643B] px-[25px] py-4 bg-[#DBE3DC63] border">Find more experts <span className="text-[24px]"><MdNavigateNext/></span></button></div>
    </div>
  );
}

export default Experts;