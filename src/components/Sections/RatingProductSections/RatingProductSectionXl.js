'use client'

import React from 'react'
import RatingProductSliderXl from '@/components/Sections/RatingProductSections/RatingProductSliderXl'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'

const RatingProductSectionXl = ({ stars, title }) => {
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar key={index} className='text-b7 text-lg xl:text-2xl' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };
  return (
    <>
      <div className='xl:flex hidden flex-col 3xl:max-w-1680px px-16 xl:px-20 2xl:px-120px mx-auto pt-5 pb-5' >
        <div className='flex flex-col items-center' >
          {title ? <h4 className='xl:text-4xl lg:text-2xl text-xl font-bold mb-10' >Shop By Cosmetic Rating</h4> : null}
          <h4 className='xl:text-[22px] lg:text-lg text-md font-bold' >Cosmetic Rating: <span className='font-normal' >{stars} Stars</span> </h4>
          <div className='flex items-center' ><StarIconPrinter numberOfTimes={stars} /> </div>
        </div>
        <div className=' relative mt-14' >
          <RatingProductSliderXl stars={stars} />
        </div>
        <div className='flex justify-center mt-5' ><Link href='' className='flex items-center border-[1px] border-b3 w-fit px-4 py-2 xl:py-2 rounded-md text-b3 font-semibold' ><span className='lg:text-sm xl:text-[16px] text-xs' >Shop All {stars} Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></Link></div>
      </div>
    </>
  )
}

export default RatingProductSectionXl