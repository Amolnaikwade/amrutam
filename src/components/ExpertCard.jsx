import React from "react";
import graduation from "../assets/graduation.png";
import didi from "../assets/didi.png";
import { RiCapsuleLine } from "react-icons/ri";

function ExpertCard() {
  return (
    <div className="pt-5 items-center flex flex-col overflow-hidden justify-between w-[250px] md:w-[295px] h-[400px] rounded-3xl shadow-xl bg-[#FFF7E2]">
      <div className="space-y-3">
        <div className=" relative w-[150px] mx-auto flex items-center justify-center h-[150px] rounded-full">
          <img
            className="h-full rounded-full w-[150px] object-cover"
            src={didi}
            alt=""
          />
          <div className=" absolute bottom-0 right-[40px] bg-black rounded-full text-white flex items-center justify-center w-[70px] h-[28px]">
            4.5⭐
          </div>
        </div>
        <div className="flex items-center w-[247px] h-[130px] flex-col ">
          <div className="flex items-center flex-col justify-evenly h-[151px]">
            <p className="text-xl font-gotham leading-[25px] font-medium">
              Dr. Vaishali Sharma
            </p>
            <p className="text-[15px] leading-5 text-[#838383]">
              Ayurveda Practitioner (BAMS,MD)
            </p>
            <div className="flex gap-1 text-[#0C0C0C] text-[16px] items-center">
              <img width={20} src={graduation} alt="" />
              <p>25 Years Of experience</p>
            </div>
          </div>
          <div className="text-[#3A643B] mt-2 flex items-center gap-2 font-semibold bg-[#3A643B]/10 rounded-full py-1 px-4">
            <div><RiCapsuleLine /></div>
            <div className="font-nunito">Skin Specialist</div>
          </div>
        </div>
      </div>
      <div className="bg-[#3A643B] text-xl text-white w-full flex items-center justify-center h-[65px] text-center font-nunito">Book A Session</div>
    </div>
  );
}

export default ExpertCard;