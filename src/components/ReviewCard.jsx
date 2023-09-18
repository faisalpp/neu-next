import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewCard = ({ color, icon }) => {
  return (
    <div style={{ backgroundColor: color }} className='flex flex-col shadow-sm px-5 py-3 rounded-xl xl:h-[170px] min-w-[330px] 2xl:min-w-[398px] 3xl:min-w-[338px]' >
      <div className='flex mt-2' ><AiFillStar className='text-b7 text-sm' /><AiFillStar className='text-b7 text-sm' /><AiFillStar className='text-b7 text-sm' /><AiFillStar className='text-b7 text-sm' /></div>
      <p className='text-sm font-semibold mt-1' >Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...</p>
      <a href='/' className='text-sm text-b6 mt-2' >Read More</a>
      <div className='flex items-center' ><h5 className='text-sm mt-2 w-10/12' >John Doe</h5><img src={icon} alt='asd' className='h-5 w-10 mt-4' /></div>
    </div>
  )
}

export default ReviewCard