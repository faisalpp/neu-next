'use client'

import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import ToolTip from './ToolTip'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard2 = ({ sliderstyle, stars }) => {
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (item, index) => (
      <AiFillStar key={index} className='text-b7 text-lg' /> // Render the star icon component for each iteration
    ));
    return <div className='flex items-center' >{starIcons}</div>; // Render the array of star icons
  }
  return (
    <>
      <div className={`relative flex flex-col border-2 border-gray-100 rounded-2xl bg-white ${sliderstyle ? sliderstyle : 'sm:mx-2'} overflow-hidden`} >
        <span className='absolute top-0 right-0 bg-b4 rounded-2xl mt-2 mr-1 px-4 py-2 text-xs font-bold z-20' >50% Off</span>
        <div className='flex w-full justify-center relative group xl:px-5 lg:px-5 px-3 pt-10' >
          <Image width={200} height={200} src="/p1.webp" quality={1} className=' xl:w-54 lg:w-52 w-[160px] h-full' alt='refrigrator' />
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-b3/50 flex items-center justify-center scale-0 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto duration-300'>
            <Link href="" className='duration-300 px-5 py-2 rounded-lg bg-white text-black font-semibold'>View Details</Link>
          </div>
        </div>
        <div className='flex flex-col gap-y-3 xl:p-6 lg:p-5 p-3' >
          <p className='font-semibold font-reg xl:text-base text-sm text-line-camp'>White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</p>
          <div className='flex' ><h4 className='text-b3 font-semibold' >$279.00</h4>
            <div className='flex justify-end w-full space-x-2 items-center' >
              <strike className="text-[rgba(17,16,16,0.64)]">$279.00</strike>
              <span className='bg-b4 rounded-xl font-semibold px-2 py-1 text-xs' >- 27%</span>
            </div>
          </div>
          <div className='flex items-center space-x-2' ><div className='flex items-center gap-1' ><h4 className='text-sm font-semibold text-b15' >Cosmetic Rating</h4><ToolTip color="text-b15" /></div><div className='flex mt-2 items-center' ><StarIconPrinter numberOfTimes={stars} /> </div></div>
          <div className='flex items-center space-x-10' >
            <div className='flex font-semibold text-sm text-b15' ><h4>Discount</h4>&nbsp;%</div>
            <div className='grow bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-20 h-2' ></span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard2