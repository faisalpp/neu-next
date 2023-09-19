'use client'

import React from 'react'
import { AiOutlineDollar, AiFillStar, AiOutlineCheckCircle } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import ProductSlider from '@/components/ProductSlider'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({ title, dicount, type, stars, discount, codmetics, customStyle }) => {
  const products = [
    {
      image: '/p1.webp',
    },
    {
      image: '/p1.webp',
    },
    {
      image: '/p1.webp',
    },
    {
      image: '/p1.webp',
    },
    {
      image: '/p1.webp',
    },
    {
      image: '/p1.webp',
    },
    {
      image: '/p1.webp',
    },
  ];
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (item, index) => (
      <AiFillStar key={index} className='text-b7 text-lg' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };
  return (
    <div className={customStyle}>
      <div className='flex flex-col maxmd:max-w-[330px] relative maxmd:mx-auto bg-white w-full h-auto rounded-md p-4 sm:p-6 md:p-8 lg:p-6 shadow-md' >
        {type === 1 ? <div className='absolute top-0 left-2 flex items-center bg-b9 w-fit px-3 rounded-b-2xl ml-2 justify-center h-6 gap-x-2 text-white' ><AiOutlineDollar /><span className='text-xs' >Best Value</span></div> : null}
        {type === 2 ? <div className='absolute top-0 left-2  flex items-center bg-b3 w-fit px-3 rounded-b-2xl ml-2 justify-center h-7 gap-x-2 text-white' ><Image width={16} height={16} src="/svgs/local_fire_department.webp" alt="local_fire_department" /> <span className='text-xs' >Most Popular</span></div> : null}
        {type === 3 ? <div className='absolute top-0 left-2  flex items-center bg-b7 w-fit rounded-b-2xl ml-2 justify-center px-3 h-7 gap-x-2 text-white' ><Image width={16} height={16} src="/svgs/star_rate_half.webp" alt="star_rate_half" /> <span className='text-xs' >Premium Condition</span></div> : null}
        <div className='flex flex-col items-center justify-center mt-4 w-full' >
          <div className='flex justify-center items-center text-center gap-x-1 text-sm sm:text-base xl:text-[0.98rem]' ><h4 className='font-bold' >{title}:</h4><span className='font-semibold' >{stars} Stars</span></div>
          <div className='flex gap-x-3 mt-2' ><StarIconPrinter numberOfTimes={stars} /></div>
          {type === 1 ? <h4 className='text-b9 font-semibold text-sm mt-3' >Moderate Cosmetic Damage</h4> : null}
          {type === 2 ? <h4 className='text-b9 font-semibold text-sm mt-3' >Minor Cosmetic Damage</h4> : null}
          {type === 3 ? <h4 className='text-b9 font-semibold text-sm mt-3' >very Minor To No Cosmetic Damage</h4> : null}
          <div className='flex items-center mt-2 gap-x-1 bg-b10 rounded-xl px-2 py-1 text-white' ><AiOutlineCheckCircle /><span className='text-xs' >100% Functional</span></div>
          <div className='relative pt-5 w-full' >
            <ProductSlider products={products} />
          </div>

          <div className='flex flex-col gap-y-3 w-full mt-10' >
            <div className='flex gap-4 sm:gap-x-10 md:gap-x-14 lg:gap-x-20 items-center' >
              <span className='font-semibold text-[16px]' >Discount</span>
              <div className='flex items-center px-5 border border-[#FF9B3E] rounded-full bg-[#FFFAF5] gap-x-4 py-3' >
                <div className='flex gap-x-1' >
                  {discount === 1 ? <><span className='flex bg-b7 w-2 mt-2' ></span><span className='flex bg-b4 w-2 mt-1' ></span><span className='flex bg-b4 w-2 h-5' ></span></> : null}
                  {discount === 2 ? <><span className='flex bg-b4 w-2 mt-2' ></span><span className='flex bg-b7 w-2 mt-1' ></span><span className='flex bg-b4 w-2 h-5' ></span></> : null}
                  {discount === 3 ? <><span className='flex bg-b4 w-2 mt-2' ></span><span className='flex bg-b4 w-2 mt-1' ></span><span className='flex bg-b7 w-2 h-5' ></span></> : null}
                </div>
                <span className='font-semibold text-xs md:text-sm' >{dicount}</span>
              </div>
            </div>
            <div className='flex items-center gap-x-3' ><span className='font-semibold text-[16px]' >Cosmetic Damage</span><span className='grow text-center text-[rgba(17,16,16,0.64)] justify-center flex items-center px-3 py-2 border border-[#22A6AB] rounded-full bg-[#F2FFFF] text-xs md:text-'>{codmetics}</span></div>
            <div className='flex gap-x-5' >
              <div className='text-sm flex flex-col gap-y-2' >
                <div className='flex' ><span>Class</span></div>
                <div className='flex' ><span>Mechanical Test</span></div>
                <div className='flex' ><span>Inspection</span></div>
                <div className='flex' ><span>Warranty</span></div>
              </div>
              <div className='text-sm flex flex-col gap-y-2' >
                <div className='flex gap-x-1 items-center' ><span>Open Box / Scratch & Dent</span></div>
                <div className='flex gap-x-1 items-center' ><AiOutlineCheckCircle className='text-b6' /><h4>100%</h4></div>
                <div className='flex gap-x-1 items-center' ><AiOutlineCheckCircle className='text-b6' /><h4>Passed</h4></div>
                <div className='flex gap-x-1 items-center' ><Image width={200} height={200} src="/nueshield.webp" className='w-4 h-4' alt="nueshield" /><span>1 Year Warranty</span></div>
              </div>
            </div>
            <Link href="" className='flex items-center justify-center gap-x-2 text-white text-base bg-b7 h-10 rounded-md hover:underline' ><span>Shop {stars} Star Products</span><IoIosArrowForward className='text-xl' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard