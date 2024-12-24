import React from 'react'

function Storycard({cause,name,location,heading,color}) {
  return (
    <div className='md:w-[388px] h-[371px] rounded-xl shadow-xl overflow-hidden'>
        <div className={`${color} text-black font-semibold pl-5 text-[18px] h-[54px] flex items-center `}>{cause}</div>
        <div className='flex flex-col p-4 h-full gap-5 bg-white'>
            <div className='flex gap-3 relative'>
                <div className='w-[60px] h-[60px] bg-[#515151] rounded-full'></div>
                <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p className='text-[18px] text-[#414141]'>{location}</p>
                </div>
                <p className='absolute right-0'>17/02/2024</p>
            </div>
            <div>⭐⭐⭐⭐⭐</div>
            <div className='text-[22px] font-bold'>{heading}</div>
            <div className='text-[18px] w-11/12 text-[#555555]'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</div>
        </div>
    </div>
  )
}

export default Storycard