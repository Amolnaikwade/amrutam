import React from "react";

function Card({ number, title, desc }) {
  return (
    <div className="flex items-center justify-center w-full md:w-[290px] h-[315px] rounded-xl shadow-md border-t-4 border-[#3A643B] bg-[#FFF7E2]">
      <div className="w-11/12 h-[250px] flex items-center justify-between flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[90px] bg-[#3A643B]/60 text-white text-[48px] font-semibold h-[90px] rounded-full flex items-center justify-center font-dinprobold">
            {number}
          </div>
        </div>
        <div className="text-[24px] text-center font-dinprobold leading-8  text-[#3A643B]">{title}</div>
        <div className="text-xl text-center text-[#2E2E2E] leading-6 font-dinpro ">{desc}</div>
      </div>
    </div>
  );
}

export default Card;