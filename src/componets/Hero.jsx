import React from 'react'

const Hero = ({title, parr}) => {
  return (
    <div className='bg-[#e63945] h-[550px] flex items-center justify-center w-full flex-col'>
        <div>
            <h4 className='text-white font-bold md:text-[35px] text-[30 px]'>{title}</h4>
        </div>
        <div>
            <h2 className='text-white md:text-[140px] text-[80px] font-bold'>{parr}</h2>
        </div>
    </div>
  )
}

export default Hero