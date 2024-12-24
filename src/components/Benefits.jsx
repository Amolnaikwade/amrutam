import React from "react";
import twoladies from "../assets/twoladies.jpg";
import beachlady from "../assets/beachlady.jpg";
import herbs from "../assets/herbs.png"
const Benefits = ({isSmall}) => {
  return (
    <div className="bg-[#FFF7E2] flex flex-col items-center justify-center pb-12">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center font-dinprobold md:text-4xl z-50 lg:text-5xl text-[#3A643B] font-bold pt-16">
          What sets Ayurvedic consultations apart?
        </h1>
       {!isSmall &&  <div className="bg-[#C3D0C4] w-[65vw] h-[5px]"></div>}
      </div>
      {/* flex */}
      <div className="w-10/12 mt-14 flex flex-col gap-5">
        <div className=" flex flex-row justify-between md:gap-0 gap-x-4 gap-6 flex-wrap">
          <div className="w-full xl:w-[330px] 2xl:w-[522px] h-[266px] flex bg-white items-center rounded-xl justify-center border-t-[5px] border-[#3A643B]">
            <div className="w-10/12 flex flex-col gap-4">
              <div className="md:text-[32px] font-sanskrit text-[22px] text-center text-[#3A643B] font-semibold">
                स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
              </div>
              <div className="text-[#3A643B] text-center font-dinpro text-[18px]">
                [ Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a diseased person. ]
              </div>
            </div>
          </div>
          <div className="md:w-[320px] xl:w-[371px] w-full h-[270px] rounded-xl">
            <img
              className="rounded-xl h-full w-full object-cover"
              src={twoladies}
              alt=""
            />
          </div>
          <div className="w-full md:w-[311px] h-[250px] bg-white flex items-center border-t-[5px] border-[#3A643B] rounded-xl justify-center">
            <div className="w-10/12 flex flex-col gap-4">
              <h2 className="text-[24px] md:text-left text-center font-dinprobold text-[#3A643B] font-semibold">
                Precise Diagnosis
              </h2>
              <p className="text-[#414141] text-center md:text-left text-xl font-dinpro">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-wrap flex-wrap-reverse gap-y-6 justify-between">
            <div className="md:w-[293px] w-full h-[277px] flex items-center justify-center bg-white border-t-[5px] border-[#3A643B] rounded-xl ">
                <div className="w-10/12 flex flex-col gap-4">
                    <div className="text-[24px] text-[#3A643B] md:text-left text-center font-semibold font-dinprobold">Zero side-effects</div>
                    <div className="text-[#414141] text-center md:text-left text-xl font-dinpro ">Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs</div>
                </div>
            </div>
            <div className="w-full md:w-[293px] rounded-xl h-[277px]"><img className=" rounded-xl w-full h-full object-cover" src={herbs} alt="" /></div>
            <div className="w-full md:w-[293px] h-[277px] flex items-center justify-center bg-white border-t-[5px] border-[#3A643B] rounded-xl ">
                <div className="w-10/12 flex flex-col gap-4">
                    <div className="text-[24px] text-[#3A643B] text-center md:text-left font-semibold font-dinprobold ">Individual Treatment</div>
                    <div className="text-[#414141] font-dinpro text-center md:text-left text-xl">All treatments are personalized based on a person's unique constitution and health concerns.</div>
                </div>
            </div>
            <div className="w-full md:w-[293px] rounded-xl h-[277px]"><img className=" rounded-xl w-full h-full object-cover" src={beachlady} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;