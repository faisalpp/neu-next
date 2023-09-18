import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const IframeLoader = () => {
  return (
    <div className='flex justify-center items-center 2xl:h-[504px] lg:h-96 lg:w-full h-52 w-full md:w-80 rounded-2xl  bg-black' >
     <AiOutlineLoading3Quarters className='text-white text-6xl animate-spin' />
    </div>
  )
}

export default IframeLoader