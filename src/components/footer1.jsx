import React from 'react'

function Footer1() {
  return (
    <div className='h-[500px] bg-[#3A643B]/20 items-center justify-center flex'>
        <div className='flex flex-col gap-4 '>
            <div className='text-[#3A643B] font-dinprobold text-[18px]'>Information</div>
            <div className='text-[18px] text-[#474747] flex flex-col'>
                <span className='hover:cursor-pointer font-dinpro'>About Us</span>
                <span className='hover:cursor-pointer font-dinpro'>Terms and Conditions</span>
                <span className='hover:cursor-pointer font-dinpro'>Privacy Policy</span>
                <span className='hover:cursor-pointer font-dinpro'>Privacy Policy for Mobile Apps</span>
                <span className='hover:cursor-pointer font-dinpro'>Shipping and Returns Policy</span>
                <span className='hover:cursor-pointer font-dinpro'>International Delivery</span>
                <span className='hover:cursor-pointer font-dinpro'>For Businesses,Hotels and Resorts</span>
            </div>
        </div>
    </div>
  )
}

export default Footer1