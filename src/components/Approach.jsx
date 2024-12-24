import React from "react";
import Card from "./Card";

const Approach = ({isSmall}) => {
  return (
    <div className="md:py-20 py-16">
      <div className=" flex flex-col pb items-center">
        <div className="flex flex-col mb-6 items-center justify-center">
          <div className="p-1 z-50">
            <h1 className="text-3xl font-dinprobold text-center  md:text-4xl lg:text-5xl text-[#3A643B] font-semibold">
              Our Ayurvedic Approach
            </h1>
          </div>
          <div className="bg-[#C3D0C4]  w-[40vw] h-[5px]"></div>
        </div>
        <div className="md:w-[772px] w-10/12">
          <p className="md:text-xl text-[14px] font-dinpro leading-7 text-center text-[#666666]">
            At Amrutam we follow a unique and personalized approach to healing.
            Our expert practitioners begin each treatment process by conducting
            a thorough analysis of the patient's body type, medical history, and
            current health conditions.
          </p>
        </div>
      </div>
      <div className="flex w-11/12 mx-auto justify-center items-center mt-16 flex-wrap xl:gap-12 gap-6">
        <Card number={`1`} title={`Make Appointment`} desc={`You must make an appointment in advance, to choose the service and date.`}/>
        {!isSmall && <Card number={'2'} title={`Consultations`} desc={`The next stage involves a thorough consultation with an Ayurveda practitioner.`} />}
        {!isSmall && <Card number={'3'} title={`Treatment Planning`} desc={`The Ayurvedic practitioner creates a personalized treatment plan for you`} />}
        {!isSmall && <Card number={'4'} title={`Maintenance`} desc={'These visits allow for assessment of progress, adjustments to the treatment.'} />}
      </div>
      {isSmall && <div className="flex gap-8 mt-6 justify-center">
        <div className="w-[12px] h-[12px] rounded-full bg-[#3A643B]"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-[#C3C3C3]"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-[#C3C3C3]"></div>
      </div>}
    </div>
  )
};

export default Approach;