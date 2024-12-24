import React from "react";
import Storycard from "./Storycard";

function Stories({ isSmall }) {
  return (
    <div className="bg-[#FFF7E2] py-20">
      <div className=" flex flex-col pb items-center">
        <div className="flex flex-col mb-6 items-center justify-center">
          <div className="p-1 z-50">
            <h1 className="text-3xl text-center font-dinprobold md:text-4xl lg:text-5xl text-[#3A643B] font-semibold">
              Stories from our valued customers!
            </h1>
          </div>
          <div className="bg-[#C3D0C4]  w-[55vw] h-[5px]"></div>
        </div>
        <div className="w-11/12 flex flex-wrap gap-14 justify-center mt-10">
          <Storycard
            cause={`Consulted for skin`}
            name={`Sophie Moore`}
            location={`Chennai`}
            heading={`"One of a kind service"`}
            color={`bg-[#ECE7FF]`}
          />
          {!isSmall && (
            <Storycard
              cause={`Consulted for hair`}
              name={`Rajat Latwal`}
              location={`Delhi`}
              heading={`"One of a kind service"`}
              color={`bg-[#ECFEE7]`}
            />
          )}
          {!isSmall && (
            <Storycard
              cause={`Consulted for skin color`}
              name={`Manav Thakur`}
              location={`Tamil Nadu`}
              heading={`"One of a kind service"`}
              color={`bg-[#ECFEE7]`}
            />
          )}
        </div>
        <div className="flex gap-8 mt-12 justify-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#3A643B]"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#C3C3C3]"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#C3C3C3]"></div>
        </div>
      </div>
    </div>
  );
}

export default Stories;