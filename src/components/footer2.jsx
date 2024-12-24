import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

function Footer2() {
  return (
    <div className="bg-[#3A643B]/20 h-[870px] flex items-center justify-center">
      <div className="w-11/12">
        <div className="text-[18px] font-bold text-[#3A643B]">
          Get In Touch
        </div>
        {/* address div */}
        <div className="flex flex-col mt-3 gap-6 text-[18px]">
          <div>support@amrutam.co.in</div>
          <div>
            Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
            Lashkar, Gwalior - 474001
          </div>
          <div>+91 9713171999</div>
        </div>
        {/* socialsection */}
        <div className="flex my-8 gap-3">
            <div className="w-[40px] h-[40px] rounded-full bg-[#3A643B] flex items-center justify-center text-2xl text-white"><SlSocialFacebook/></div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#3A643B] flex items-center justify-center text-2xl text-white"><FaInstagram /></div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#3A643B] flex items-center justify-center text-2xl text-white"><AiOutlineYoutube/></div>
            <div className="text-2xl text-white w-[40px] h-[40px] rounded-full bg-[#3A643B] flex items-center justify-center"><CiTwitter/></div>
            <div className="text-2xl text-white w-[40px] h-[40px] rounded-full bg-[#3A643B] flex items-center justify-center"><FiLinkedin/></div>
            <div className="text-2xl text-white w-[40px] h-[40px] rounded-full bg-[#3A643B] flex items-center justify-center"><FaPinterestP/></div>
        </div>
        <div className='flex flex-col gap-4 '>
            <div className='text-[#3A643B] font-bold text-[18px]'>Information</div>
            <div className='text-[18px] text-[#474747] gap-2 flex flex-col'>
                <span className='hover:cursor-pointer'>About Us</span>
                <span className='hover:cursor-pointer'>Terms and Conditions</span>
                <span className='hover:cursor-pointer'>Privacy Policy</span>
                <span className='hover:cursor-pointer'>Privacy Policy for Mobile Apps</span>
                <span className='hover:cursor-pointer'>Shipping and Returns Policy</span>
                <span className='hover:cursor-pointer'>International Delivery</span>
                <span className='hover:cursor-pointer'>For Businesses,Hotels and Resorts</span>
            </div>
        </div>
        <div className="my-6">
            <h1 className="text-[18px] leading-[23px] text-[#3A643B] font-semibold">Subscribe to our Newsletter and join Amrutam Family today!</h1>
            <div className="flex mt-6">
                <div className="w-[60%] rounded-l-full overflow-hidden"><input type="email" className="placeholder-gray-800  p-3" placeholder="Your Email Address"/></div>
                <div className="w-[40%]"><button className="bg-black rounded-r-full px-5 text-white text-[18px] font-medium py-3">Subscribe</button></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;