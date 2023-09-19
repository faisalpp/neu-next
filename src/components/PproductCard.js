'use client'

import React from 'react'
import { AiOutlineDollar, AiFillStar, AiOutlineCheckCircle } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { BsFire } from 'react-icons/bs'
import Image from 'next/image'

const PproductCard = ({ type, stars, discount }) => {
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar key={index} className='text-b7 text-xs' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };
  return (
    <div className='flex flex-col bg-white xl:w-[240px] lg:w-[250px] w-[220px] h-auto rounded-md pb-5 shadow-md' >
      {type == 1 ? <div className='flex items-center bg-b9 w-fit px-3 rounded-b-2xl ml-3 justify-center h-5 space-x-2 text-white' ><AiOutlineDollar className="text-xs" /><span className='text-[8.27px]' >Best Value</span></div> : null}
      {type == 2 ? <div className='flex items-center bg-b3 w-fit px-3 rounded-b-2xl ml-3 justify-center h-5 space-x-2 text-white' ><BsFire className="text-xs" /> <span className='text-[8.27px]' >Most Popular</span></div> : null}
      {type == 3 ? <div className='flex items-center bg-b7 w-fit rounded-b-2xl ml-3 justify-center px-3 h-5 space-x-2 text-white' ><BsFire className="text-xs" /> <span className='text-[8.27px]' >Premium Condition</span></div> : null}
      <div className='flex flex-col items-center justify-center mt-4' >
        <div className='flex justify-center items-center text-center space-x-1 text-[11.37px]' ><h4 className='font-bold' >Cosmetic Rating:</h4><span className='font-semibold' >{stars} Stars</span></div>
        <div className='flex space-x-3' ><StarIconPrinter numberOfTimes={stars} /></div>
        {type == 1 ? <h4 className='text-b9 font-semibold text-[8.27px] mt-3' >Moderate Cosmetic Damage</h4> : null}
        {type == 2 ? <h4 className='text-b9 font-semibold text-[8.27px] mt-3' >Minor Cosmetic Damage</h4> : null}
        {type == 3 ? <h4 className='text-b9 font-semibold text-[8.27px] mt-3' >very Minor To No Cosmetic Damage</h4> : null}
        <div className='flex items-center mt-2 space-x-1 bg-b10 rounded-xl px-2 py-[3px] text-white' ><AiOutlineCheckCircle className='text-xs' /><span className='text-[8.27px]' >100% Functional</span></div>
        <div className='flex justify-center pt-5 w-full' >
          <Image width={200} height={200} quality={1} src="/p1.webp" alt='p1' className='w-20' />
        </div>

        <div className='flex flex-col space-y-3' >
          <div className='flex space-x-3' ><span className='font-semibold text-[8.27px]' >Cosmetic Damage</span><span className='text-[8.27px]' >Moderate</span></div>
          <div className='flex space-x-20' >
            <span className='font-semibold text-[8.27px]' >Discount</span>
            <div className='flex space-x-4 h-3' >
              <div className='flex justify-end space-x-1' >
                {discount === 1 ? <><span className='flex bg-b7 w-1 mt-2' ></span><span className='flex bg-b4 w-1 mt-1' ></span><span className='flex bg-b4 w-1 h-3' ></span></> : null}
                {discount === 2 ? <><span className='flex bg-b4 w-1 mt-2' ></span><span className='flex bg-b7 w-1 mt-1' ></span><span className='flex bg-b4 w-1 h-3' ></span></> : null}
                {discount === 3 ? <><span className='flex bg-b4 w-1 mt-2' ></span><span className='flex bg-b4 w-1 mt-1' ></span><span className='flex bg-b7 w-1 h-3' ></span></> : null}
              </div>
              <span className='font-semibold text-[8.27px]' >Massive</span>
            </div>
          </div>
          <div className='flex space-x-5' >
            <div className='text-[8.27px] space-y-2' >
              <div className='flex' ><span>Mechanical Test</span></div>
              <div className='flex' ><span>Inspection</span></div>
              <div className='flex' ><span>Warranty</span></div>
              <div className='flex' ><span>Class</span></div>
            </div>
            <div className='text-[8.27px] space-y-2' >
              <div className='flex space-x-1 items-center' ><AiOutlineCheckCircle className='text-b6' /><h4>100%</h4></div>
              <div className='flex space-x-1 items-center' ><AiOutlineCheckCircle className='text-b6' /><h4>Passed</h4></div>
              <div className='flex space-x-1 items-center' ><span>1 Year Warranty</span></div>
              <div className='flex space-x-1 items-center' ><span>Open Box / Scratch & Dent</span></div>
            </div>
          </div>
          <a className='flex items-center justify-center space-x-2 cursor-pointer text-white text-[8px] w-full bg-b7 h-6 rounded-md hover:underline' ><span>Shop {stars} Star Products</span><IoIosArrowForward className='text-xs' /></a>
        </div>
      </div>
    </div>
  )
}

export default PproductCard